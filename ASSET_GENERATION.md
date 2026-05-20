# Monis Asset Generation Workflow

This workflow is the source of truth for completing the image set used by the Monis workspace designer.

The current app supports three configurable rooms:

- Workstation
- Living Room
- Garage Space

`gaming_empty.png` exists in `public/assets/rooms`, but gaming is not currently wired into `types/product.ts` or `data/products.ts`, so it is not part of the required completion set.

## Completion Target

The frontend needs:

- 3 empty room background PNGs
- 40 isolated object PNGs, including one transparent blank asset for `secondary-none`
- Consistent thumbnail usage for product cards, ideally reusing the same isolated object PNGs

Current generated files in `public/assets`:

- `public/assets/rooms/workstation_empty.png`
- `public/assets/rooms/living_empty.png`
- `public/assets/rooms/garage_empty.png`
- `public/assets/rooms/gaming_empty.png`
- generic legacy thumbnails under `public/assets/chair`, `public/assets/table`, and `public/assets/monitor`

The missing set is the app-ready object library listed in `ASSET_MANIFEST.md`.

## Master Pipeline

1. Generate empty room backgrounds.
   - Use the same camera and style lock for all rooms.
   - Keep the main placement zones clean enough for layered objects.
   - Do not include the configurable furniture, vehicles, or gear in the empty version.

2. Generate isolated object assets by room and slot.
   - One PNG per option ID from `data/products.ts`.
   - Transparent background.
   - Same semi-isometric front-facing perspective.
   - Same warm soft lighting direction.

3. Save files using exact manifest paths.
   - Do not invent alternate names.
   - The option ID should be visible in the filename.
   - `secondary-none.png` should be a transparent blank PNG.

4. Replace legacy thumbnails after assets are ready.
   - Product cards currently use generic chair/table/monitor thumbnails.
   - Once generated, point `thumbnail` values in `data/products.ts` at the matching object PNG.

5. Replace SVG placeholder preview layers after assets are ready.
   - `components/ObjectLayer.tsx` currently draws stylized SVG placeholders.
   - Once all object PNGs exist, map `slotId + optionId` to the real PNG paths.

## Global Style Lock

Use this block in every room and object prompt:

```text
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
Export-ready.
```

## Generation Order

1. Workstation empty room
2. Workstation object assets
3. Living room empty room
4. Living room object assets
5. Garage empty room
6. Garage object assets
7. Transparent blank asset for `secondary-none`
8. Cleanup pass for background removal, edge halos, scale, and shadow consistency
9. Frontend mapping pass

## Quality Rules

- Export room backgrounds as 16:9 PNGs.
- Export isolated objects as transparent PNGs.
- Keep each object centered with enough padding for card thumbnails.
- Do not include room walls, floors, people, text, logos, or watermarks in object assets.
- Avoid hard black contact shadows baked into transparent PNGs; use soft shadows only.
- Keep object scale consistent inside each slot group.
- For garage vehicles, keep all vehicle assets in the same visual footprint so swapping does not jump.

## Reference Files

- `ASSET_MANIFEST.md`: exact file paths and status checklist
- `ASSET_PROMPTS.md`: prompt library for each required image group
- `data/products.ts`: option IDs and current product data
- `components/ObjectLayer.tsx`: current placeholder layer renderer
