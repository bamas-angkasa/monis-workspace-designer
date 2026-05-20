Add-Type -AssemblyName System.Drawing

Add-Type -ReferencedAssemblies "System.Drawing" -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;

public static class ScenePlateBuilder
{
    public static void Build(string sourcePath, string destinationPath, int x, int y, int width, int height, int canvasWidth, int canvasHeight)
    {
        using (var source = new Bitmap(sourcePath))
        using (var canvas = new Bitmap(canvasWidth, canvasHeight, PixelFormat.Format32bppArgb))
        using (var graphics = Graphics.FromImage(canvas))
        {
            RemoveWhiteMatte(source);
            graphics.Clear(Color.Transparent);
            graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
            graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
            graphics.SmoothingMode = SmoothingMode.HighQuality;

            var scale = Math.Min(width / (double)source.Width, height / (double)source.Height);
            var drawWidth = (int)Math.Round(source.Width * scale);
            var drawHeight = (int)Math.Round(source.Height * scale);
            var drawX = x + ((width - drawWidth) / 2);
            var drawY = y + ((height - drawHeight) / 2);

            graphics.DrawImage(source, new Rectangle(drawX, drawY, drawWidth, drawHeight));
            Directory.CreateDirectory(Path.GetDirectoryName(destinationPath));
            canvas.Save(destinationPath, ImageFormat.Png);
        }
    }

    public static void Blank(string destinationPath, int canvasWidth, int canvasHeight)
    {
        using (var canvas = new Bitmap(canvasWidth, canvasHeight, PixelFormat.Format32bppArgb))
        {
            Directory.CreateDirectory(Path.GetDirectoryName(destinationPath));
            canvas.Save(destinationPath, ImageFormat.Png);
        }
    }

    private static void RemoveWhiteMatte(Bitmap bitmap)
    {
        var rect = new Rectangle(0, 0, bitmap.Width, bitmap.Height);
        var data = bitmap.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
        var bytes = Math.Abs(data.Stride) * data.Height;
        var buffer = new byte[bytes];
        System.Runtime.InteropServices.Marshal.Copy(data.Scan0, buffer, 0, bytes);

        for (var y = 0; y < data.Height; y++)
        {
            var row = y * data.Stride;
            for (var x = 0; x < data.Width; x++)
            {
                var index = row + (x * 4);
                var b = buffer[index];
                var g = buffer[index + 1];
                var r = buffer[index + 2];
                var max = Math.Max(r, Math.Max(g, b));
                var min = Math.Min(r, Math.Min(g, b));
                var spread = max - min;

                if (spread < 26 && min > 232)
                {
                    buffer[index + 3] = 0;
                }
                else if (spread < 30 && min > 210)
                {
                    var alpha = Math.Max(0, Math.Min(buffer[index + 3], (int)Math.Round((232 - min) / 22.0 * 255)));
                    buffer[index + 3] = (byte)alpha;
                }
            }
        }

        System.Runtime.InteropServices.Marshal.Copy(buffer, 0, data.Scan0, bytes);
        bitmap.UnlockBits(data);
    }
}
"@

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$objectRoot = Join-Path $root "public\assets\objects"
$plateRoot = Join-Path $root "public\assets\scene-plates"
$canvasWidth = 1672
$canvasHeight = 941

$plates = @(
  @{ Src = "workstation\desk\desk-1.png"; Dest = "workstation\desk\desk-1.png"; Rect = @(430, 365, 840, 430) },
  @{ Src = "workstation\desk\desk-2.png"; Dest = "workstation\desk\desk-2.png"; Rect = @(430, 365, 840, 430) },
  @{ Src = "workstation\desk\desk-3.png"; Dest = "workstation\desk\desk-3.png"; Rect = @(430, 365, 840, 430) },

  @{ Src = "workstation\monitor\monitor-1.png"; Dest = "workstation\monitor\monitor-1.png"; Rect = @(650, 305, 330, 230) },
  @{ Src = "workstation\monitor\monitor-2.png"; Dest = "workstation\monitor\monitor-2.png"; Rect = @(625, 300, 430, 240) },
  @{ Src = "workstation\monitor\monitor-3.png"; Dest = "workstation\monitor\monitor-3.png"; Rect = @(615, 310, 470, 230) },

  @{ Src = "workstation\lamp\lamp-1.png"; Dest = "workstation\lamp\lamp-1.png"; Rect = @(995, 325, 150, 250) },
  @{ Src = "workstation\lamp\lamp-2.png"; Dest = "workstation\lamp\lamp-2.png"; Rect = @(985, 315, 160, 260) },

  @{ Src = "workstation\plant\plant-1.png"; Dest = "workstation\plant\plant-1.png"; Rect = @(965, 410, 115, 115) },
  @{ Src = "workstation\plant\plant-2.png"; Dest = "workstation\plant\plant-2.png"; Rect = @(315, 235, 220, 380) },

  @{ Src = "workstation\storage\storage-1.png"; Dest = "workstation\storage\storage-1.png"; Rect = @(965, 520, 160, 220) },
  @{ Src = "workstation\storage\storage-2.png"; Dest = "workstation\storage\storage-2.png"; Rect = @(0, 585, 310, 250) },

  @{ Src = "workstation\chair\chair-1.png"; Dest = "workstation\chair\chair-1.png"; Rect = @(595, 410, 320, 430) },
  @{ Src = "workstation\chair\chair-2.png"; Dest = "workstation\chair\chair-2.png"; Rect = @(595, 410, 320, 430) },
  @{ Src = "workstation\chair\chair-3.png"; Dest = "workstation\chair\chair-3.png"; Rect = @(590, 400, 340, 450) }
)

foreach ($plate in $plates) {
  [ScenePlateBuilder]::Build(
    (Join-Path $objectRoot $plate.Src),
    (Join-Path $plateRoot $plate.Dest),
    $plate.Rect[0],
    $plate.Rect[1],
    $plate.Rect[2],
    $plate.Rect[3],
    $canvasWidth,
    $canvasHeight
  )
  Write-Host "Wrote $($plate.Dest)"
}
