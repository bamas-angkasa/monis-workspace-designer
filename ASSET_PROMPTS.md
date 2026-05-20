# Monis Asset Prompt Library

This file contains the prompt sequence for completing the image set in `ASSET_MANIFEST.md`.

Use the prompts in order. Generate room references first, then use the matching room image as the visual reference for every isolated object in that room.

## Global Style Lock

Use this exact style block in every prompt:

```text
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
```

## 1. Workstation Empty Room

Save to `public/assets/rooms/workstation_empty.png`.

```text
Create an empty premium cozy workstation room background for a configurable workspace designer.

STYLE LOCK:
[paste global style lock]

ROOM TYPE:
Modern developer/designer workstation.

SCENE:
- warm modern room shell
- clean wall plane
- subtle built-in shelf area
- soft window light
- cable-managed premium studio atmosphere
- empty central placement zone for desk, chair, monitor, lamp, plant, and storage

CAMERA:
Front-facing semi-isometric room view.
Slight top-down angle.
16:9 landscape composition.

LIGHTING:
Warm daylight mixed with soft practical interior lighting.

IMPORTANT:
No desk.
No chair.
No monitor.
No lamp.
No plant in the main placement zone.
No storage cabinet in the main placement zone.
Leave clear negative space for layered object assets.
No people.
No text.
No logo.
No watermark.
```

## 2. Workstation Chair Assets

Save to:

- `public/assets/objects/workstation/chair/chair-1.png`
- `public/assets/objects/workstation/chair/chair-2.png`
- `public/assets/objects/workstation/chair/chair-3.png`

```text
Generate 3 isolated workstation chair assets for a cozy workspace configurator.

STYLE LOCK:
[paste global style lock]

Use the workstation empty room as the perspective and lighting reference.

VARIATIONS:
- chair-1: sage mesh ergonomic executive chair, refined premium silhouette
- chair-2: light neutral mesh task chair, softer daylight look
- chair-3: high-back warm gray task chair with stronger support

REQUIREMENTS:
Transparent PNG.
Object only.
No room.
No floor.
No wall.
Identical camera angle.
Identical scale.
Chair faces naturally toward a desk.
Centered composition.
No text.
No watermark.
```

## 3. Workstation Desk Assets

Save to:

- `public/assets/objects/workstation/desk/desk-1.png`
- `public/assets/objects/workstation/desk/desk-2.png`
- `public/assets/objects/workstation/desk/desk-3.png`

```text
Generate 3 isolated workstation desk assets for a cozy workspace configurator.

STYLE LOCK:
[paste global style lock]

Use the workstation empty room as the perspective and lighting reference.

VARIATIONS:
- desk-1: walnut low studio desk, premium warm wood finish
- desk-2: bright oak minimalist desk, lighter Canggu-style surface
- desk-3: natural oak sit-stand desk, clean modern mechanism

REQUIREMENTS:
Transparent PNG.
Object only.
No room.
No floor.
No wall.
Identical camera angle.
Identical scale.
Centered composition.
No text.
No watermark.
```

## 4. Workstation Monitor Assets

Save to:

- `public/assets/objects/workstation/monitor/monitor-1.png`
- `public/assets/objects/workstation/monitor/monitor-2.png`
- `public/assets/objects/workstation/monitor/monitor-3.png`

```text
Generate 3 isolated workstation monitor assets for a cozy workspace configurator.

STYLE LOCK:
[paste global style lock]

Use the workstation empty room as the perspective and lighting reference.

VARIATIONS:
- monitor-1: single 27 inch 4K productivity monitor
- monitor-2: clean dual monitor setup
- monitor-3: premium ultrawide monitor

REQUIREMENTS:
Transparent PNG.
Object only.
No desk unless structurally necessary for a monitor stand.
No room.
No floor.
Identical camera angle.
Identical scale.
Centered composition.
No text.
No watermark.
```

## 5. Workstation Lamp, Plant, and Storage Assets

Save to:

- `public/assets/objects/workstation/lamp/lamp-1.png`
- `public/assets/objects/workstation/lamp/lamp-2.png`
- `public/assets/objects/workstation/plant/plant-1.png`
- `public/assets/objects/workstation/plant/plant-2.png`
- `public/assets/objects/workstation/storage/storage-1.png`
- `public/assets/objects/workstation/storage/storage-2.png`

```text
Generate 6 isolated workstation support assets for a cozy workspace configurator.

STYLE LOCK:
[paste global style lock]

Use the workstation empty room as the perspective and lighting reference.

VARIATIONS:
- lamp-1: brushed brass linear task lamp
- lamp-2: slim black architectural task lamp
- plant-1: small desk plant in a ceramic pot
- plant-2: tall corner plant in a refined planter
- storage-1: black ash desk storage cabinet
- storage-2: warm low side credenza with hidden cable space

REQUIREMENTS:
Transparent PNG.
Object only.
No room.
No floor.
No wall.
Identical camera angle within each object type.
Consistent warm lighting.
Centered composition.
No text.
No watermark.
```

## 6. Living Room Empty Room

Save to `public/assets/rooms/living_empty.png`.

```text
Create an empty premium cozy living room background for a configurable media lounge.

STYLE LOCK:
[paste global style lock]

ROOM TYPE:
Modern lounge living room with premium media wall.

SCENE:
- clean media wall
- warm modern lounge shell
- subtle shelf and decor zones away from the main placement area
- soft rug or floor texture only if it does not conflict with object placement
- empty central placement zones for sofa, TV, coffee table, bean bag, console, and lighting

CAMERA:
Front-facing semi-isometric room view.
Slight top-down angle.
16:9 landscape composition.

LIGHTING:
Warm natural light mixed with soft interior glows.

IMPORTANT:
No sofa.
No TV.
No coffee table.
No bean bag.
No console.
No floor lamp in the main placement zone.
Leave clear negative space for layered object assets.
No people.
No text.
No logo.
No watermark.
```

## 7. Living Room Sofa and Table Assets

Save to:

- `public/assets/objects/living-room/sofa/sofa-1.png`
- `public/assets/objects/living-room/sofa/sofa-2.png`
- `public/assets/objects/living-room/coffee-table/coffee-1.png`
- `public/assets/objects/living-room/coffee-table/coffee-2.png`

```text
Generate 4 isolated living room furniture assets for a cozy media lounge configurator.

STYLE LOCK:
[paste global style lock]

Use the living room empty room as the perspective and lighting reference.

VARIATIONS:
- sofa-1: low neutral linen sofa, soft calm lounge style
- sofa-2: walnut leather sofa, deeper tailored premium look
- coffee-1: round oak coffee table
- coffee-2: travertine coffee table with editorial weight

REQUIREMENTS:
Transparent PNG.
Object only.
No room.
No floor.
No wall.
Sofas face naturally toward a TV wall.
Identical camera angle within each object type.
Consistent warm lighting.
Centered composition.
No text.
No watermark.
```

## 8. Living Room Media, Seating, and Lighting Assets

Save to:

- `public/assets/objects/living-room/tv/tv-1.png`
- `public/assets/objects/living-room/tv/tv-2.png`
- `public/assets/objects/living-room/bean-bag/bean-1.png`
- `public/assets/objects/living-room/bean-bag/bean-2.png`
- `public/assets/objects/living-room/console/console-1.png`
- `public/assets/objects/living-room/console/console-2.png`
- `public/assets/objects/living-room/lighting/lighting-1.png`
- `public/assets/objects/living-room/lighting/lighting-2.png`

```text
Generate 8 isolated living room media and accessory assets for a cozy media lounge configurator.

STYLE LOCK:
[paste global style lock]

Use the living room empty room as the perspective and lighting reference.

VARIATIONS:
- tv-1: 55 inch smart TV, balanced media wall centerpiece
- tv-2: 65 inch cinema TV, larger premium screen presence
- bean-1: textured low lounge chair
- bean-2: oversized relaxed bean bag
- console-1: compact gaming console bundle
- console-2: premium sound system
- lighting-1: warm floor lamp
- lighting-2: subtle ambient LED wash fixture

REQUIREMENTS:
Transparent PNG.
Object only.
No room.
No floor.
No wall.
Identical camera angle within each object type.
Consistent warm lighting.
Centered composition.
No text.
No watermark.
```

## 9. Garage Empty Room

Save to `public/assets/rooms/garage_empty.png`.

```text
Create an empty premium cozy garage background for a configurable vehicle and gear designer.

STYLE LOCK:
[paste global style lock]

ROOM TYPE:
Modern garage lifestyle scene with vehicle and gear placement zones.

SCENE:
- polished concrete floor
- clean wall storage zones
- warm industrial lighting
- subtle technical styling
- empty central vehicle zone
- empty side zones for helmet, tools, storage, and accessories

CAMERA:
Front-facing semi-isometric room view.
Slight top-down angle.
16:9 landscape composition.

LIGHTING:
Warm practical industrial light mixed with soft ambient illumination.

IMPORTANT:
No scooter.
No car.
No motorcycle.
No helmet.
No tools.
No storage cabinet.
No bags or floor accessories.
Leave clear negative space for layered object assets.
No people.
No text.
No logo.
No watermark.
```

## 10. Garage Vehicle Assets

Save to:

- `public/assets/objects/garage/main-vehicle/main-scooter.png`
- `public/assets/objects/garage/main-vehicle/main-car.png`
- `public/assets/objects/garage/main-vehicle/main-motorcycle.png`
- `public/assets/objects/garage/secondary-vehicle/secondary-scooter.png`

Create `public/assets/objects/garage/secondary-vehicle/secondary-none.png` separately as a fully transparent blank PNG.

```text
Generate 4 isolated garage vehicle assets for a modern garage configurator.

STYLE LOCK:
[paste global style lock]

Use the garage empty room as the perspective and lighting reference.

VARIATIONS:
- main-scooter: premium modern scooter for Bali daily mobility
- main-car: compact city car with tidy premium proportions
- main-motorcycle: touring motorcycle with gear-forward presence
- secondary-scooter: smaller secondary scooter, matching the main scooter style

REQUIREMENTS:
Transparent PNG.
Object only.
No room.
No floor.
No wall.
Identical camera angle.
Consistent warm industrial lighting.
Keep the three main vehicles in a similar visual footprint.
Secondary scooter should be smaller than main vehicles.
Centered composition.
No text.
No watermark.
```

## 11. Garage Gear, Storage, and Accessory Assets

Save to:

- `public/assets/objects/garage/helmet/helmet-1.png`
- `public/assets/objects/garage/helmet/helmet-2.png`
- `public/assets/objects/garage/tools/tools-1.png`
- `public/assets/objects/garage/tools/tools-2.png`
- `public/assets/objects/garage/storage/storage-1.png`
- `public/assets/objects/garage/storage/storage-2.png`
- `public/assets/objects/garage/accessories/garage-accessory-1.png`
- `public/assets/objects/garage/accessories/garage-accessory-2.png`

```text
Generate 8 isolated garage gear and accessory assets for a modern garage configurator.

STYLE LOCK:
[paste global style lock]

Use the garage empty room as the perspective and lighting reference.

VARIATIONS:
- helmet-1: matte black helmet
- helmet-2: pair of coordinated helmets
- tools-1: organized wall tool kit
- tools-2: polished detailing kit for vehicle maintenance
- storage-1: warm walnut storage shelf for boxes and gear
- storage-2: tall closed utility cabinet
- garage-accessory-1: floor mat and charger bundle
- garage-accessory-2: premium travel bags

REQUIREMENTS:
Transparent PNG.
Object only.
No room.
No floor.
No wall.
Identical camera angle within each object type.
Consistent warm industrial lighting.
Centered composition.
No text.
No watermark.
```

## Final Cleanup Prompt

Use this after generation if an image needs refinement.

```text
Clean this asset for production use in a layered room configurator.

Keep the object shape, style, camera angle, and lighting.
Remove all background pixels and edge halos.
Preserve soft realistic contact shadow only if it works on transparent background.
Do not add room, wall, floor, text, logo, people, or watermark.
Export as transparent PNG.
```
