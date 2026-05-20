export const GLOBAL_STYLE_LOCK = `STYLE LOCK:
Premium cozy modern lifestyle aesthetic.
Semi-isometric 3D render.
Front-facing room perspective with slight top-down angle.
Consistent camera height.
Soft global illumination.
Warm cinematic lighting.
Soft realistic shadows.
Clean modern materials.
IKEA planner + Sims + Apple-like premium visualization.
Stylized realistic render, not photorealistic.
Consistent object scale and proportions.
Minimal visual noise.
No people.
No text.
No logo.
No watermark.
Export-ready.`;

export function roomScenePrompt(options: {
  roomName: string;
  roomType: string;
  sceneDetails: string[];
  lighting?: string;
  notes?: string[];
}) {
  const lighting = options.lighting ?? "Warm sunset ambient light mixed with soft practical lighting.";
  const notes = options.notes ?? [
    "The room must feel immersive and premium.",
    "Objects should already be naturally placed.",
    "Composition must leave enough negative space for future UI overlays.",
    "No people.",
    "No text.",
    "No logo.",
    "No watermark.",
  ];

  return `Create a premium cozy ${options.roomName} room interior.

${GLOBAL_STYLE_LOCK}

ROOM TYPE:
${options.roomType}.

SCENE:
${options.sceneDetails.map((item) => `- ${item}`).join("\n")}

CAMERA:
Front-facing semi-isometric room view.
Slight top-down angle.
16:9 landscape composition.

LIGHTING:
${lighting}

IMPORTANT:
${notes.join("\n")}
`;
}

export function objectAssetPrompt(options: {
  categoryTitle: string;
  categoryLabel: string;
  variations: string[];
  perspective?: string;
  lighting?: string;
}) {
  const perspective = options.perspective ?? "Semi-isometric front-facing angle matching the room perspective.";
  const lighting = options.lighting ?? "Soft warm studio lighting matching the room scene.";

  return `Create isolated premium ${options.categoryLabel} assets.

${GLOBAL_STYLE_LOCK}

OBJECT TYPE:
${options.categoryTitle}.

OUTPUT:
Generate ${options.variations.length} different ${options.categoryTitle.toLowerCase()} variations:
${options.variations.map((item) => `- ${item}`).join("\n")}

PERSPECTIVE:
${perspective}

LIGHTING:
${lighting}

BACKGROUND:
Transparent PNG.
If transparency is unavailable, use pure white background.

IMPORTANT:
Object only.
No room.
No wall.
No floor.
Centered composition.
Consistent scale.
Export-ready.
No text.
No watermark.
`;
}

export function variantGenerationPrompt(options: {
  categoryTitle: string;
  itemLabel: string;
  variations: string[];
  requirements?: string[];
}) {
  const requirements = options.requirements ?? [
    "All objects must use identical camera angle.",
    "All objects must use identical lighting direction.",
    "All objects must use identical scale.",
    "All assets must match the semi-isometric room perspective.",
    "Transparent background.",
    "Object only.",
    "No floor.",
    "No text.",
    "No watermark.",
  ];

  return `Generate ${options.variations.length} ${options.itemLabel} variations for a cozy ${options.categoryTitle} configurator.

${GLOBAL_STYLE_LOCK}

OBJECT CATEGORY:
${options.categoryTitle}.

VARIATIONS:
${options.variations.map((item) => `- ${item}`).join("\n")}

REQUIREMENTS:
${requirements.map((item) => `- ${item}`).join("\n")}
`;
}

export const CONSISTENCY_REFERENCE_RULE = `CONSISTENCY REFERENCE RULE:

1. Generate room scene references first.
2. Use the room image as the primary visual reference for all asset generation.
3. Generate isolated objects based on the room's perspective, lighting, and scale.
4. Keep asset categories separate and consistent.
5. Export transparent PNGs for each object.
`;
