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
- 40 scene-matched transparent layer PNGs, including one transparent blank asset for `secondary-none`
- Cropped thumbnail PNGs for product cards, which may reuse catalog-style object crops

Current generated files in `public/assets`:

- `public/assets/rooms/workstation_empty.png`
- `public/assets/rooms/living_empty.png`
- `public/assets/rooms/garage_empty.png`
- `public/assets/rooms/gaming_empty.png`
- generic legacy thumbnails under `public/assets/chair`, `public/assets/table`, and `public/assets/monitor`

The missing production set is the app-ready scene-plate library listed in `ASSET_MANIFEST.md`.

## Final Visual Target

The default modular workstation composition must visually reconstruct:

- `public/assets/generated/asset-batches/01-workstation-room.png`

This means the modular system is not allowed to look like independent catalog objects pasted onto an empty room. Every visible layer must share the same camera, lighting, scale, contact shadows, and placement as the furnished reference scene.

## Master Pipeline

1. Generate a furnished reference scene for each room.
   - This is the art-direction source of truth.
   - For workstation, the reference is `public/assets/generated/asset-batches/01-workstation-room.png`.
   - The default modular layers must recombine into this visual.

2. Generate an empty room plate from the reference scene.
   - Same 16:9 canvas.
   - Same camera, focal length, window view, wall geometry, shelves, floor, rug, and lighting.
   - Remove only the configurable objects for that template.
   - Non-configurable architectural/decor elements may stay baked into the room.

3. Generate scene-matched object plates by room and slot.
   - One PNG per option ID from `data/products.ts`.
   - Transparent background.
   - Same 16:9 pixel dimensions as the empty room background.
   - Object is already placed at the exact final coordinate on the full canvas.
   - Include natural contact shadow and local occlusion needed to blend with the scene.
   - Do not center the object for preview layers.

4. Save files using exact manifest paths.
   - Do not invent alternate names.
   - The option ID should be visible in the filename.
   - `secondary-none.png` should be a transparent blank PNG.

5. Generate or keep separate product thumbnails.
   - Product thumbnails can be cropped object PNGs.
   - Preview layers must be scene-matched full-canvas transparent plates.
   - Do not use scene plates directly as thumbnails unless the card renderer crops them intentionally.

6. Wire frontend layer rendering.
   - `Option.layerAsset` points to `/assets/scene-plates/{templateId}/{slotId}/{optionId}.png`.
   - `Option.thumbnail` points to `/assets/objects/{templateId}/{slotId}/{optionId}.png`.
   - `ObjectLayer` renders every scene plate full-canvas with `absolute inset-0`.

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

1. Workstation furnished reference scene
2. Workstation empty room plate
3. Workstation scene-matched object plates
4. Living room furnished reference scene
5. Living room empty room plate
6. Living room scene-matched object plates
7. Garage furnished reference scene
8. Garage empty room plate
9. Garage scene-matched object plates
10. Transparent blank scene plate for `secondary-none`
11. Thumbnail crop pass
12. Frontend mapping pass

## Current Status

- Catalog-style object crops exist in `public/assets/objects` and can be used for thumbnails.
- Draft workstation scene plates exist in `public/assets/scene-plates/workstation`.
- Production-quality scene plates still need to be generated or refined in `public/assets/scene-plates`.
- `secondary-none.png` must exist in both the thumbnail/object set and the scene-plate set as a transparent blank PNG.
- Product thumbnails resolve to `public/assets/objects`.
- `ObjectLayer` now expects full-canvas scene plates from `Option.layerAsset`.
- The reusable extraction script lives at `scripts/extract-generated-assets.ps1`.
- The temporary crop-to-scene-plate builder lives at `scripts/build-scene-plates-from-crops.ps1`.
- Workstation draft composite preview: `public/assets/generated/workstation-default-composite-preview.png`.

## Draft vs Final Plate Rule

The crop-to-scene-plate builder is only a bridge for testing the modular renderer. It should not be treated as final art because catalog crops do not perfectly match the reference camera, occlusion, contact shadows, or desk-level object placement.

Final plates should be generated or edited from the furnished reference scene itself. A final workstation default composition should be visually comparable to `public/assets/generated/asset-batches/01-workstation-room.png`.

## Quality Rules

- Export room backgrounds as 16:9 PNGs.
- Export preview layer assets as full-canvas 16:9 transparent PNGs.
- Scene plates must use exactly the same pixel dimensions as the room background.
- Do not center scene-plate objects; keep them in their final scene position.
- Do not include room walls, floors, people, text, logos, or watermarks in scene plates.
- Preserve realistic contact shadows only where the object touches the floor, desk, wall, or furniture.
- Avoid white studio backgrounds, catalog crops, or independent product lighting for preview layers.
- Keep object scale consistent inside each slot group.
- For garage vehicles, keep all vehicle assets in the same scene footprint so swapping does not jump.

## Reference Files

- `ASSET_MANIFEST.md`: exact file paths and status checklist
- `ASSET_PROMPTS.md`: prompt library for each required image group
- `data/products.ts`: option IDs and current product data
- `components/ObjectLayer.tsx`: scene-plate layer renderer
