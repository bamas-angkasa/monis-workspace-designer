# Monis Asset Prompt Library

This file contains the prompt sequence for completing the image set in `ASSET_MANIFEST.md`.

Use the prompts in order. Generate furnished room references first, then create empty room plates and full-canvas transparent scene plates from those references.

Important: this workflow is modular, but the final composed preview must look like the furnished reference scene, not like catalog objects pasted onto an empty room.

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
Create an empty workstation room plate for a modular workspace designer.

STYLE LOCK:
[paste global style lock]

REFERENCE:
Use `public/assets/generated/asset-batches/01-workstation-room.png` as the exact furnished composition reference.

ROOM TYPE:
Modern developer/designer workstation.

SCENE:
- preserve the same room architecture, camera, focal length, window, wall panels, shelves, floor, rug, right-side cabinetry, artwork, practical lights, and warm ambience from the reference
- remove only the configurable workstation objects that will become layers
- keep non-configurable built-ins and decorative room styling if they are part of the reference room identity
- final empty plate must align pixel-perfectly with the scene-matched object plates

CAMERA:
Exact same camera as the reference.
16:9 landscape composition.
Same pixel dimensions as all scene plates.

LIGHTING:
Warm daylight mixed with soft practical interior lighting.

IMPORTANT:
No configurable desk.
No configurable chair.
No configurable monitor.
No configurable desk lamp.
No configurable foreground plants.
No configurable storage item.
Keep the reference scene's visual richness; do not turn it into a bare showroom.
No people.
No text.
No logo.
No watermark.
```

## 2. Workstation Chair Scene Plates

Save to:

- `public/assets/objects/workstation/chair/chair-1.png`
- `public/assets/objects/workstation/chair/chair-2.png`
- `public/assets/objects/workstation/chair/chair-3.png`

```text
Generate 3 workstation chair scene plates for a modular workspace configurator.

STYLE LOCK:
[paste global style lock]

REFERENCE:
Use `public/assets/generated/asset-batches/01-workstation-room.png` as the default composition target.
Use `public/assets/rooms/workstation_empty.png` as the aligned background plate.

VARIATIONS:
- chair-1: sage mesh ergonomic executive chair, refined premium silhouette
- chair-2: light neutral mesh task chair, softer daylight look
- chair-3: high-back warm gray task chair with stronger support

REQUIREMENTS:
Transparent PNG scene plate.
Full 16:9 canvas with the same pixel dimensions as the empty room.
Chair appears in the exact chair position from the furnished reference.
Chair faces the desk and overlaps the desk area naturally.
Include only chair pixels plus natural chair contact shadow/occlusion.
Do not include room background pixels.
Do not center the chair.
No text.
No watermark.
```

## 3. Workstation Desk Scene Plates

Save to:

- `public/assets/objects/workstation/desk/desk-1.png`
- `public/assets/objects/workstation/desk/desk-2.png`
- `public/assets/objects/workstation/desk/desk-3.png`

```text
Generate 3 workstation desk scene plates for a modular workspace configurator.

STYLE LOCK:
[paste global style lock]

REFERENCE:
Use `public/assets/generated/asset-batches/01-workstation-room.png` as the default composition target.
Use `public/assets/rooms/workstation_empty.png` as the aligned background plate.

VARIATIONS:
- desk-1: walnut low studio desk, premium warm wood finish
- desk-2: bright oak minimalist desk, lighter Canggu-style surface
- desk-3: natural oak sit-stand desk, clean modern mechanism

REQUIREMENTS:
Transparent PNG scene plate.
Full 16:9 canvas with the same pixel dimensions as the empty room.
Desk appears in the exact desk position from the furnished reference.
Include desktop accessories that belong to the desk surface only if they are non-configurable in the reference composition.
Include only desk pixels plus natural desk contact shadow/occlusion.
Do not include room background pixels.
Do not center the desk.
No text.
No watermark.
```

## 4. Workstation Monitor Scene Plates

Save to:

- `public/assets/objects/workstation/monitor/monitor-1.png`
- `public/assets/objects/workstation/monitor/monitor-2.png`
- `public/assets/objects/workstation/monitor/monitor-3.png`

```text
Generate 3 workstation monitor scene plates for a modular workspace configurator.

STYLE LOCK:
[paste global style lock]

REFERENCE:
Use `public/assets/generated/asset-batches/01-workstation-room.png` as the default composition target.
Use `public/assets/rooms/workstation_empty.png` as the aligned background plate.

VARIATIONS:
- monitor-1: single 27 inch 4K productivity monitor
- monitor-2: clean dual monitor setup
- monitor-3: premium ultrawide monitor

REQUIREMENTS:
Transparent PNG scene plate.
Full 16:9 canvas with the same pixel dimensions as the empty room.
Monitor appears on the desk at the exact monitor position from the furnished reference.
Monitor must never float independently in wall space.
Include only monitor pixels, stand pixels, and local desk occlusion/shadow where needed.
Do not include room background pixels.
Do not center the monitor.
No text.
No watermark.
```

## 5. Workstation Lamp, Plant, and Storage Scene Plates

Save to:

- `public/assets/objects/workstation/lamp/lamp-1.png`
- `public/assets/objects/workstation/lamp/lamp-2.png`
- `public/assets/objects/workstation/plant/plant-1.png`
- `public/assets/objects/workstation/plant/plant-2.png`
- `public/assets/objects/workstation/storage/storage-1.png`
- `public/assets/objects/workstation/storage/storage-2.png`

```text
Generate 6 workstation support scene plates for a modular workspace configurator.

STYLE LOCK:
[paste global style lock]

REFERENCE:
Use `public/assets/generated/asset-batches/01-workstation-room.png` as the default composition target.
Use `public/assets/rooms/workstation_empty.png` as the aligned background plate.

VARIATIONS:
- lamp-1: brushed brass linear task lamp
- lamp-2: slim black architectural task lamp
- plant-1: small desk plant in a ceramic pot
- plant-2: tall corner plant in a refined planter
- storage-1: black ash desk storage cabinet
- storage-2: warm low side credenza with hidden cable space

REQUIREMENTS:
Transparent PNG scene plate.
Full 16:9 canvas with the same pixel dimensions as the empty room.
Each object appears in its final reference-scene position.
Lamp sits on the desk, not floating.
Plant and storage align with the left/right reference zones they belong to.
Include only object pixels plus natural contact shadow/occlusion.
Do not include room background pixels.
Do not center objects.
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

## 7. Living Room Sofa and Table Scene Plates

Save to:

- `public/assets/objects/living-room/sofa/sofa-1.png`
- `public/assets/objects/living-room/sofa/sofa-2.png`
- `public/assets/objects/living-room/coffee-table/coffee-1.png`
- `public/assets/objects/living-room/coffee-table/coffee-2.png`

```text
Generate 4 living room furniture scene plates for a cozy media lounge configurator.

STYLE LOCK:
[paste global style lock]

Use the furnished living room reference scene as the composition target.
Use `public/assets/rooms/living_empty.png` as the aligned background plate.

VARIATIONS:
- sofa-1: low neutral linen sofa, soft calm lounge style
- sofa-2: walnut leather sofa, deeper tailored premium look
- coffee-1: round oak coffee table
- coffee-2: travertine coffee table with editorial weight

REQUIREMENTS:
Transparent PNG scene plate.
Full 16:9 canvas with the same pixel dimensions as the empty room.
Each object appears in its exact final scene position.
Sofas face naturally toward the TV wall.
Include only object pixels plus natural contact shadow/occlusion.
Do not include room background pixels.
Do not center objects.
No text.
No watermark.
```

## 8. Living Room Media, Seating, and Lighting Scene Plates

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
Generate 8 living room media and accessory scene plates for a cozy media lounge configurator.

STYLE LOCK:
[paste global style lock]

Use the furnished living room reference scene as the composition target.
Use `public/assets/rooms/living_empty.png` as the aligned background plate.

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
Transparent PNG scene plate.
Full 16:9 canvas with the same pixel dimensions as the empty room.
Each object appears in its exact final scene position.
TV and console must align to the media wall/furniture, not float.
Lighting must preserve its practical glow contribution where it belongs.
Include only object pixels plus natural contact shadow/occlusion.
Do not include room background pixels.
Do not center objects.
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

## 10. Garage Vehicle Scene Plates

Save to:

- `public/assets/objects/garage/main-vehicle/main-scooter.png`
- `public/assets/objects/garage/main-vehicle/main-car.png`
- `public/assets/objects/garage/main-vehicle/main-motorcycle.png`
- `public/assets/objects/garage/secondary-vehicle/secondary-scooter.png`

Create `public/assets/objects/garage/secondary-vehicle/secondary-none.png` separately as a fully transparent blank PNG.

```text
Generate 4 garage vehicle scene plates for a modern garage configurator.

STYLE LOCK:
[paste global style lock]

Use the furnished garage reference scene as the composition target.
Use `public/assets/rooms/garage_empty.png` as the aligned background plate.

VARIATIONS:
- main-scooter: premium modern scooter for Bali daily mobility
- main-car: compact city car with tidy premium proportions
- main-motorcycle: touring motorcycle with gear-forward presence
- secondary-scooter: smaller secondary scooter, matching the main scooter style

REQUIREMENTS:
Transparent PNG scene plate.
Full 16:9 canvas with the same pixel dimensions as the empty room.
Each vehicle appears in its exact final scene position.
Include only vehicle pixels plus natural tire/contact shadow and local occlusion.
Do not include room background pixels.
Keep the three main vehicles in a similar scene footprint.
Secondary scooter should be smaller than main vehicles and placed in the secondary zone.
Do not center vehicles.
No text.
No watermark.
```

## 11. Garage Gear, Storage, and Accessory Scene Plates

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
Generate 8 garage gear and accessory scene plates for a modern garage configurator.

STYLE LOCK:
[paste global style lock]

Use the furnished garage reference scene as the composition target.
Use `public/assets/rooms/garage_empty.png` as the aligned background plate.

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
Transparent PNG scene plate.
Full 16:9 canvas with the same pixel dimensions as the empty room.
Each object appears in its exact final scene position.
Tools align to the wall tool zone; storage aligns to the cabinet/shelf zone; accessories align to the floor/accessory zone.
Include only object pixels plus natural contact shadow/occlusion.
Do not include room background pixels.
Do not center objects.
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
