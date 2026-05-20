Add-Type -AssemblyName System.Drawing

Add-Type -ReferencedAssemblies "System.Drawing" -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;

public static class AssetExtractor
{
    public static void Extract(string sourcePath, string destinationPath, int x, int y, int width, int height, int canvasSize)
    {
        using (var source = new Bitmap(sourcePath))
        using (var crop = new Bitmap(width, height, PixelFormat.Format32bppArgb))
        {
            using (var graphics = Graphics.FromImage(crop))
            {
                graphics.Clear(Color.Transparent);
                graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
                graphics.SmoothingMode = SmoothingMode.HighQuality;
                graphics.DrawImage(source, new Rectangle(0, 0, width, height), new Rectangle(x, y, width, height), GraphicsUnit.Pixel);
            }

            ApplyWhiteKey(crop);
            var bounds = FindAlphaBounds(crop);

            using (var finalImage = new Bitmap(canvasSize, canvasSize, PixelFormat.Format32bppArgb))
            {
                using (var graphics = Graphics.FromImage(finalImage))
                {
                    graphics.Clear(Color.Transparent);
                    graphics.InterpolationMode = InterpolationMode.HighQualityBicubic;
                    graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;
                    graphics.SmoothingMode = SmoothingMode.HighQuality;

                    if (bounds.Width > 0 && bounds.Height > 0)
                    {
                        var padding = (int)Math.Round(canvasSize * 0.06);
                        var maxWidth = canvasSize - padding * 2;
                        var maxHeight = canvasSize - padding * 2;
                        var scale = Math.Min(maxWidth / (double)bounds.Width, maxHeight / (double)bounds.Height);
                        var drawWidth = (int)Math.Round(bounds.Width * scale);
                        var drawHeight = (int)Math.Round(bounds.Height * scale);
                        var drawX = (canvasSize - drawWidth) / 2;
                        var drawY = (canvasSize - drawHeight) / 2;

                        graphics.DrawImage(crop, new Rectangle(drawX, drawY, drawWidth, drawHeight), bounds, GraphicsUnit.Pixel);
                    }
                }

                Directory.CreateDirectory(Path.GetDirectoryName(destinationPath));
                finalImage.Save(destinationPath, ImageFormat.Png);
            }
        }
    }

    public static void Blank(string destinationPath, int canvasSize)
    {
        using (var finalImage = new Bitmap(canvasSize, canvasSize, PixelFormat.Format32bppArgb))
        {
            Directory.CreateDirectory(Path.GetDirectoryName(destinationPath));
            finalImage.Save(destinationPath, ImageFormat.Png);
        }
    }

    private static void ApplyWhiteKey(Bitmap bitmap)
    {
        var rect = new Rectangle(0, 0, bitmap.Width, bitmap.Height);
        var data = bitmap.LockBits(rect, ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);

        var bytes = Math.Abs(data.Stride) * data.Height;
        var buffer = new byte[bytes];
        Marshal.Copy(data.Scan0, buffer, 0, bytes);

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

                if (spread <= 18 && min > 248)
                {
                    buffer[index + 3] = 0;
                }
                else if (spread <= 18 && min > 242)
                {
                    var alpha = Math.Max(36, Math.Min(230, (int)Math.Round(((248 - min) / 6.0) * 194 + 36)));
                    var a = alpha / 255.0;
                    buffer[index] = UnblendFromWhite(b, a);
                    buffer[index + 1] = UnblendFromWhite(g, a);
                    buffer[index + 2] = UnblendFromWhite(r, a);
                    buffer[index + 3] = (byte)alpha;
                }
                else
                {
                    buffer[index + 3] = 255;
                }
            }
        }

        Marshal.Copy(buffer, 0, data.Scan0, bytes);
        bitmap.UnlockBits(data);
    }

    private static byte UnblendFromWhite(byte channel, double alpha)
    {
        var value = (channel - (255 * (1 - alpha))) / alpha;
        return (byte)Math.Max(0, Math.Min(255, Math.Round(value)));
    }

    private static Rectangle FindAlphaBounds(Bitmap bitmap)
    {
        var minX = bitmap.Width;
        var minY = bitmap.Height;
        var maxX = -1;
        var maxY = -1;
        var rect = new Rectangle(0, 0, bitmap.Width, bitmap.Height);
        var data = bitmap.LockBits(rect, ImageLockMode.ReadOnly, PixelFormat.Format32bppArgb);

        var bytes = Math.Abs(data.Stride) * data.Height;
        var buffer = new byte[bytes];
        Marshal.Copy(data.Scan0, buffer, 0, bytes);

        for (var y = 0; y < data.Height; y++)
        {
            var row = y * data.Stride;
            for (var x = 0; x < data.Width; x++)
            {
                var alpha = buffer[row + (x * 4) + 3];
                if (alpha <= 10) continue;

                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }

        bitmap.UnlockBits(data);

        if (maxX < minX || maxY < minY)
        {
            return Rectangle.Empty;
        }

        return Rectangle.FromLTRB(minX, minY, maxX + 1, maxY + 1);
    }
}
"@

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$batchRoot = Join-Path $root "public\assets\generated\asset-batches"
$assetRoot = Join-Path $root "public\assets\objects"
$canvas = 768

$assets = @(
  @{ Source = "04-workstation-desks.png"; Rect = @(30, 80, 710, 410); Dest = "workstation\desk\desk-1.png" },
  @{ Source = "04-workstation-desks.png"; Rect = @(30, 560, 710, 390); Dest = "workstation\desk\desk-2.png" },
  @{ Source = "04-workstation-desks.png"; Rect = @(800, 585, 700, 360); Dest = "workstation\desk\desk-3.png" },

  @{ Source = "05-workstation-chairs.png"; Rect = @(1190, 20, 520, 390); Dest = "workstation\chair\chair-1.png" },
  @{ Source = "05-workstation-chairs.png"; Rect = @(620, 20, 520, 390); Dest = "workstation\chair\chair-2.png" },
  @{ Source = "05-workstation-chairs.png"; Rect = @(650, 470, 430, 380); Dest = "workstation\chair\chair-3.png" },

  @{ Source = "06-workstation-monitors.png"; Rect = @(80, 110, 390, 260); Dest = "workstation\monitor\monitor-1.png" },
  @{ Source = "06-workstation-monitors.png"; Rect = @(560, 105, 595, 260); Dest = "workstation\monitor\monitor-2.png" },
  @{ Source = "06-workstation-monitors.png"; Rect = @(1210, 85, 520, 270); Dest = "workstation\monitor\monitor-3.png" },

  @{ Source = "07-workstation-accessories.png"; Rect = @(80, 55, 370, 370); Dest = "workstation\lamp\lamp-1.png" },
  @{ Source = "07-workstation-accessories.png"; Rect = @(575, 60, 330, 370); Dest = "workstation\lamp\lamp-2.png" },
  @{ Source = "07-workstation-accessories.png"; Rect = @(1115, 130, 240, 280); Dest = "workstation\plant\plant-1.png" },
  @{ Source = "07-workstation-accessories.png"; Rect = @(110, 490, 300, 450); Dest = "workstation\plant\plant-2.png" },
  @{ Source = "07-workstation-accessories.png"; Rect = @(540, 585, 320, 380); Dest = "workstation\storage\storage-1.png" },
  @{ Source = "07-workstation-accessories.png"; Rect = @(920, 650, 520, 270); Dest = "workstation\storage\storage-2.png" },

  @{ Source = "08-living-room-seating.png"; Rect = @(120, 90, 750, 330); Dest = "living-room\sofa\sofa-1.png" },
  @{ Source = "08-living-room-seating.png"; Rect = @(960, 90, 670, 330); Dest = "living-room\sofa\sofa-2.png" },
  @{ Source = "08-living-room-seating.png"; Rect = @(950, 470, 290, 350); Dest = "living-room\bean-bag\bean-1.png" },
  @{ Source = "08-living-room-seating.png"; Rect = @(1340, 500, 330, 320); Dest = "living-room\bean-bag\bean-2.png" },

  @{ Source = "09-living-room-media-lighting.png"; Rect = @(40, 100, 430, 270); Dest = "living-room\tv\tv-1.png" },
  @{ Source = "09-living-room-media-lighting.png"; Rect = @(535, 70, 555, 310); Dest = "living-room\tv\tv-2.png" },
  @{ Source = "09-living-room-media-lighting.png"; Rect = @(1130, 170, 360, 250); Dest = "living-room\coffee-table\coffee-1.png" },
  @{ Source = "09-living-room-media-lighting.png"; Rect = @(35, 470, 540, 240); Dest = "living-room\coffee-table\coffee-2.png" },
  @{ Source = "09-living-room-media-lighting.png"; Rect = @(660, 430, 390, 270); Dest = "living-room\console\console-1.png" },
  @{ Source = "09-living-room-media-lighting.png"; Rect = @(1015, 500, 470, 200); Dest = "living-room\console\console-2.png" },
  @{ Source = "09-living-room-media-lighting.png"; Rect = @(250, 640, 210, 335); Dest = "living-room\lighting\lighting-1.png" },
  @{ Source = "09-living-room-media-lighting.png"; Rect = @(655, 855, 690, 110); Dest = "living-room\lighting\lighting-2.png" },

  @{ Source = "10-garage-vehicles.png"; Rect = @(80, 60, 500, 340); Dest = "garage\main-vehicle\main-scooter.png" },
  @{ Source = "10-garage-vehicles.png"; Rect = @(630, 70, 680, 320); Dest = "garage\main-vehicle\main-car.png" },
  @{ Source = "10-garage-vehicles.png"; Rect = @(1350, 65, 540, 350); Dest = "garage\main-vehicle\main-motorcycle.png" },
  @{ Source = "10-garage-vehicles.png"; Rect = @(80, 60, 500, 340); Dest = "garage\secondary-vehicle\secondary-scooter.png" },

  @{ Source = "11-garage-gear-storage-accessories.png"; Rect = @(70, 75, 370, 260); Dest = "garage\helmet\helmet-1.png" },
  @{ Source = "11-garage-gear-storage-accessories.png"; Rect = @(535, 105, 455, 235); Dest = "garage\helmet\helmet-2.png" },
  @{ Source = "11-garage-gear-storage-accessories.png"; Rect = @(1140, 60, 340, 310); Dest = "garage\tools\tools-1.png" },
  @{ Source = "11-garage-gear-storage-accessories.png"; Rect = @(25, 425, 465, 245); Dest = "garage\tools\tools-2.png" },
  @{ Source = "11-garage-gear-storage-accessories.png"; Rect = @(545, 435, 525, 295); Dest = "garage\storage\storage-1.png" },
  @{ Source = "11-garage-gear-storage-accessories.png"; Rect = @(1160, 420, 315, 535); Dest = "garage\storage\storage-2.png" },
  @{ Source = "11-garage-gear-storage-accessories.png"; Rect = @(40, 750, 520, 175); Dest = "garage\accessories\garage-accessory-1.png" },
  @{ Source = "11-garage-gear-storage-accessories.png"; Rect = @(600, 725, 445, 245); Dest = "garage\accessories\garage-accessory-2.png" }
)

foreach ($asset in $assets) {
  $rect = $asset.Rect
  $source = Join-Path $batchRoot $asset.Source
  $destination = Join-Path $assetRoot $asset.Dest
  [AssetExtractor]::Extract($source, $destination, $rect[0], $rect[1], $rect[2], $rect[3], $canvas)
  Write-Host "Wrote $($asset.Dest)"
}

[AssetExtractor]::Blank((Join-Path $assetRoot "garage\secondary-vehicle\secondary-none.png"), $canvas)
Write-Host "Wrote garage\secondary-vehicle\secondary-none.png"
