# Monis Asset Generation Workflow

This repo now includes an asset-first prompt strategy tailored for Monis.
The goal is to generate room backgrounds and isolated object assets separately, with strong perspective and lighting consistency.

## Master Pipeline

1. **GLOBAL STYLE LOCK**
   - Use the same style lock for every prompt.
   - Ensures consistent mood, lighting, and camera.

2. **ROOM SCENE PROMPT**
   - Generate one room per prompt.
   - Capture the full room composition and environment.
   - Use this room as a visual reference for object generation.

3. **OBJECT ASSET PROMPT**
   - Generate one object category per prompt.
   - Keep isolated objects only, with transparent background.

4. **VARIANT GENERATION PROMPT**
   - Generate multiple variations of the same object category.
   - Lock camera angle, lighting, and scale across variants.

5. **CONSISTENCY REFERENCE RULE**
   - Always use the generated room image as reference for subsequent assets.
   - This prevents inconsistent perspective, lighting, and scale.

## Recommended Workflow

### Phase 1 — Room backgrounds

Generate these rooms first:

- Workstation
- Gaming room
- Living room
- Garage

These produce the foundation for the whole product.

### Phase 2 — Object asset categories

Generate individual categories separately:

- desks
- chairs
- monitors / TVs
- laptops
- plants
- lamps
- accessories
- shelves
- vehicles
- helmets
- jackets

### Phase 3 — Configurator-ready variants

Generate multiple consistent variants for each category:

- 4–6 desk styles
- 4–6 chair styles
- 3–5 monitor styles
- 3–4 sofa styles
- 3–5 car / scooter styles

### Phase 4 — Background removal

If the generator does not output transparency, remove backgrounds automatically using tools like:

- Photoroom
- Clipdrop
- remove.bg
- Photoshop AI
- Figma auto-remove

## Example Prompt Templates

### Workstation room prompt

```text
Create a premium cozy workstation room interior.

STYLE LOCK:
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

ROOM TYPE:
Modern developer/designer workstation.

SCENE:
- wooden desk
- ergonomic chair
- dual monitor setup
- laptop
- mechanical keyboard
- desk lamp
- shelf decor
- plants
- warm ambient lighting
- clean wall decor
- cable-managed setup

CAMERA:
Front-facing semi-isometric room view.
Slight top-down angle.
16:9 landscape composition.

LIGHTING:
Warm sunset ambient light mixed with soft practical lighting.

IMPORTANT:
The room must feel immersive and premium.
Objects should already be naturally placed.
Composition must leave enough negative space for future UI overlays.
No people.
No text.
No logo.
No watermark.
```

### Desk asset prompt

```text
Create isolated premium workstation desk assets.

STYLE LOCK:
... (same style lock)

OBJECT TYPE:
Modern workstation desks.

OUTPUT:
Generate 4 different desk variations:
- walnut wood desk
- black minimalist desk
- white Scandinavian desk
- industrial metal + wood desk

PERSPECTIVE:
Semi-isometric front-facing angle matching a cozy workstation room.

LIGHTING:
Soft warm studio lighting matching the room scene.

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
```

### Variant generation prompt

```text
Generate 6 ergonomic chair variations for a cozy workstation configurator.

STYLE LOCK:
... (same style lock)

All chairs must:
- use identical camera angle
- use identical lighting direction
- use identical scale
- face toward the desk naturally
- match semi-isometric room perspective

Chair variations:
- black ergonomic chair
- white ergonomic chair
- gaming chair
- mesh office chair
- leather executive chair
- minimalist Scandinavian chair

Transparent background.
Object only.
No floor.
No text.
```

## Why this works

The key is separating scene generation from object generation. That keeps the asset pipeline clean and avoids the "catalog board" or "collection" failure mode.

Use `lib/assetPrompts.ts` as a reference for generation structure and `ASSET_GENERATION.md` for workflow guidance.
