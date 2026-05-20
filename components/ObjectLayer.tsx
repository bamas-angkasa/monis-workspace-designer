type ObjectLayerProps = {
  slotId: string;
  optionId: string;
  optionName: string;
};

const palettes: Record<string, string[]> = {
  chair: ["#3b4c40", "#7e866f", "#d4c9b8"],
  desk: ["#8f6c4e", "#c7b39d", "#f2e7d5"],
  monitor: ["#1f2522", "#7b8f80", "#d9e4dc"],
  lamp: ["#5f5d5d", "#cec0b0", "#f7f1e8"],
  plant: ["#3c5b43", "#7ea57d", "#dfe5d9"],
  storage: ["#4a4b48", "#9c8f81", "#e8dfd2"],
  sofa: ["#4a554d", "#7f8b7a", "#d9d5cb"],
  tv: ["#222528", "#6a7770", "#c4c9c8"],
  "coffee-table": ["#7f5d43", "#ccb8a7", "#f1e7dc"],
  "bean-bag": ["#5b6057", "#9dac92", "#dee2d8"],
  console: ["#3f4342", "#7b7f7e", "#cfd1ce"],
  lighting: ["#4f4b47", "#b5a691", "#f7efe3"],
  "main-vehicle": ["#44454a", "#7a7b84", "#cfcfd5"],
  "secondary-vehicle": ["#3d4447", "#6f7478", "#bbc0c5"],
  helmet: ["#2f3738", "#8c9a9d", "#d8dcdf"],
  tools: ["#3d3f42", "#7a7f85", "#c9cace"],
  accessories: ["#4b4f4c", "#8c8f8b", "#e1e2dd"],
};

function getPalette(slotId: string): string[] {
  return palettes[slotId] ?? ["#5b645e", "#9a9f95", "#e2e4db"];
}

function selectVariant(optionId: string, palette: string[]) {
  const index = Number(optionId.replace(/.*-(\d+)$/, "$1")) - 1;
  return palette[index % palette.length] ?? palette[0];
}

export function ObjectLayer({ slotId, optionId, optionName }: ObjectLayerProps) {
  const palette = getPalette(slotId);
  const baseColor = selectVariant(optionId, palette);
  const accentColor = palette[1] || "#8b9387";
  const trimColor = palette[2] || "#f0e8dc";

  return (
    <div className="flex h-full w-full items-center justify-center" title={optionName}>
      <svg viewBox="0 0 240 240" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="soft-glow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="240" height="240" rx="36" fill="transparent" />
        {slotId === "chair" && (
          <>
            <ellipse cx="120" cy="190" rx="56" ry="16" fill="rgba(20,22,20,0.12)" />
            <rect x="72" y="96" width="96" height="52" rx="16" fill={baseColor} />
            <rect x="84" y="50" width="72" height="68" rx="20" fill={accentColor} />
            <rect x="86" y="150" width="16" height="32" rx="8" fill={trimColor} />
            <rect x="138" y="150" width="16" height="32" rx="8" fill={trimColor} />
          </>
        )}

        {slotId === "desk" && (
          <>
            <ellipse cx="120" cy="206" rx="86" ry="16" fill="rgba(20,22,20,0.1)" />
            <rect x="34" y="96" width="172" height="36" rx="18" fill={baseColor} />
            <rect x="44" y="132" width="24" height="66" rx="12" fill={accentColor} />
            <rect x="172" y="132" width="24" height="66" rx="12" fill={accentColor} />
            <rect x="70" y="108" width="100" height="10" rx="5" fill={trimColor} />
          </>
        )}

        {slotId === "monitor" && (
          <>
            <ellipse cx="120" cy="204" rx="50" ry="12" fill="rgba(20,22,20,0.14)" />
            <rect x="72" y="70" width="96" height="54" rx="14" fill={baseColor} />
            <rect x="84" y="84" width="72" height="34" rx="10" fill="#111612" />
            <rect x="112" y="124" width="16" height="40" rx="6" fill={accentColor} />
            <ellipse cx="120" cy="190" rx="34" ry="8" fill={trimColor} />
          </>
        )}

        {slotId === "lamp" && (
          <>
            <rect x="110" y="76" width="20" height="100" rx="10" fill={accentColor} />
            <path d="M72 90 C72 64 168 64 168 90 L168 110 C168 126 72 126 72 110 Z" fill={baseColor} />
            <rect x="116" y="176" width="24" height="24" rx="12" fill={trimColor} />
          </>
        )}

        {slotId === "plant" && (
          <>
            <ellipse cx="120" cy="172" rx="50" ry="18" fill="rgba(20,22,20,0.12)" />
            <rect x="92" y="134" width="56" height="48" rx="12" fill={trimColor} />
            <path d="M120 132 C110 110 92 90 96 70 C108 56 132 58 144 70 C149 88 136 108 120 132 Z" fill={baseColor} />
            <path d="M116 108 C108 94 100 78 102 64 C110 52 132 52 140 64 C140 82 128 96 116 108 Z" fill={accentColor} />
          </>
        )}

        {slotId === "storage" && templateStorageShape(optionId, baseColor, accentColor, trimColor)}

        {slotId === "sofa" && (
          <>
            <ellipse cx="120" cy="190" rx="66" ry="16" fill="rgba(20,22,20,0.12)" />
            <rect x="44" y="104" width="152" height="60" rx="28" fill={baseColor} />
            <path d="M58 104 C58 78 86 62 120 62 C154 62 182 78 182 104 Z" fill={accentColor} />
            <rect x="60" y="138" width="50" height="32" rx="16" fill={trimColor} />
            <rect x="130" y="138" width="50" height="32" rx="16" fill={trimColor} />
          </>
        )}

        {slotId === "tv" && (
          <>
            <ellipse cx="120" cy="206" rx="54" ry="10" fill="rgba(20,22,20,0.1)" />
            <rect x="58" y="68" width="124" height="82" rx="16" fill={baseColor} />
            <rect x="76" y="84" width="88" height="52" rx="10" fill="#0e1311" />
            <rect x="112" y="152" width="16" height="42" rx="8" fill={accentColor} />
            <rect x="100" y="194" width="40" height="10" rx="5" fill={trimColor} />
          </>
        )}

        {slotId === "coffee-table" && (
          <>
            <ellipse cx="120" cy="148" rx="68" ry="22" fill={baseColor} />
            <rect x="92" y="148" width="16" height="56" rx="8" fill={accentColor} />
            <rect x="132" y="148" width="16" height="56" rx="8" fill={accentColor} />
          </>
        )}

        {slotId === "bean-bag" && (
          <>
            <ellipse cx="120" cy="142" rx="68" ry="52" fill={baseColor} />
            <path d="M60 136 C64 96 104 76 120 80 C136 76 176 96 180 136 C168 164 132 190 120 190 C108 190 72 166 60 136 Z" fill={accentColor} />
          </>
        )}

        {slotId === "console" && (
          <>
            <ellipse cx="120" cy="200" rx="52" ry="10" fill="rgba(20,22,20,0.12)" />
            <rect x="66" y="124" width="108" height="40" rx="14" fill={baseColor} />
            <rect x="80" y="140" width="24" height="12" rx="6" fill={accentColor} />
            <rect x="136" y="140" width="18" height="12" rx="6" fill={trimColor} />
          </>
        )}

        {slotId === "lighting" && (
          <>
            <ellipse cx="120" cy="204" rx="36" ry="10" fill="rgba(20,22,20,0.12)" />
            <rect x="114" y="88" width="12" height="90" rx="6" fill={accentColor} />
            <path d="M82 72 C82 52 158 52 158 72 L158 96 C158 118 82 118 82 96 Z" fill={baseColor} />
            <circle cx="120" cy="72" r="10" fill={trimColor} />
          </>
        )}

        {slotId === "main-vehicle" && vehicleSilhouette(baseColor, accentColor)}
        {slotId === "secondary-vehicle" && vehicleSilhouette(baseColor, accentColor)}
        {slotId === "helmet" && (
          <>
            <ellipse cx="120" cy="178" rx="56" ry="12" fill="rgba(20,22,20,0.12)" />
            <path d="M68 102 C78 64 162 64 172 102 C178 132 150 172 120 172 C90 172 62 132 68 102 Z" fill={baseColor} />
            <rect x="86" y="136" width="68" height="18" rx="9" fill={accentColor} />
          </>
        )}

        {slotId === "tools" && (
          <>
            <ellipse cx="120" cy="198" rx="48" ry="10" fill="rgba(20,22,20,0.12)" />
            <rect x="72" y="108" width="96" height="56" rx="14" fill={baseColor} />
            <rect x="84" y="128" width="72" height="16" rx="8" fill={accentColor} />
            <rect x="100" y="144" width="40" height="8" rx="4" fill={trimColor} />
          </>
        )}

        {slotId === "accessories" && (
          <>
            <ellipse cx="120" cy="192" rx="40" ry="10" fill="rgba(20,22,20,0.12)" />
            <path d="M78 120 C78 100 92 86 110 86 H130 C148 86 162 100 162 120 V149 C162 159 154 167 144 167 H96 C86 167 78 159 78 149 Z" fill={baseColor} />
            <path d="M96 100 H144 L140 116 H100 Z" fill={accentColor} />
          </>
        )}

        <rect x="0" y="0" width="240" height="240" rx="36" fill="url(#soft-glow)" opacity="0.1" />
      </svg>
    </div>
  );
}

function templateStorageShape(optionId: string, baseColor: string, accentColor: string, trimColor: string) {
  return (
    <>
      <ellipse cx="120" cy="198" rx="56" ry="10" fill="rgba(20,22,20,0.12)" />
      <rect x="68" y="100" width="104" height="72" rx="18" fill={baseColor} />
      <rect x="84" y="118" width="32" height="18" rx="8" fill={accentColor} />
      <rect x="124" y="118" width="32" height="18" rx="8" fill={trimColor} />
    </>
  );
}

function vehicleSilhouette(baseColor: string, accentColor: string) {
  return (
    <>
      <ellipse cx="120" cy="198" rx="70" ry="12" fill="rgba(20,22,20,0.12)" />
      <path d="M44 136 C52 96 82 80 120 80 C158 80 188 96 196 136 C204 162 178 172 152 172 H88 C60 172 48 160 44 136 Z" fill={baseColor} />
      <circle cx="84" cy="170" r="12" fill={accentColor} />
      <circle cx="156" cy="170" r="12" fill={accentColor} />
      <rect x="98" y="110" width="44" height="28" rx="12" fill={trimColor} />
    </>
  );
}
