# Monis Asset Manifest

This document defines the expected folder structure and file naming conventions for generated room backgrounds and isolated object assets.

## Purpose

Use this manifest after generating prompts in `ASSET_PROMPTS.md`.
Save the exported PNGs into the folders below so the frontend can consume them consistently.

## Room backgrounds

Save final room reference canvases here:

- `public/assets/rooms/workstation_empty.png`
- `public/assets/rooms/gaming_empty.png`
- `public/assets/rooms/living_empty.png`
- `public/assets/rooms/garage_empty.png`

These should be full-room renderings with no furniture or objects in the main placeholder zone.

## Object asset folders

Create object folders for each room category:

- `public/assets/objects/workstation/desks/`
- `public/assets/objects/workstation/chairs/`
- `public/assets/objects/workstation/monitors/`
- `public/assets/objects/workstation/accessories/`
- `public/assets/objects/livingroom/sofas/`
- `public/assets/objects/livingroom/tvs/`
- `public/assets/objects/livingroom/tables/`
- `public/assets/objects/livingroom/decor/`
- `public/assets/objects/garage/vehicles/`
- `public/assets/objects/garage/gear/`
- `public/assets/objects/garage/accessories/`

## File naming conventions

Use consistent file names and numbering so assets are easy to map.

### Workstation

- `desk_01_front.png`
- `desk_02_front.png`
- `desk_03_front.png`
- `chair_01_back.png`
- `chair_02_back.png`
- `chair_03_back.png`
- `monitor_01_front.png`
- `monitor_02_front.png`
- `monitor_03_front.png`
- `lamp_01_right.png`
- `lamp_02_right.png`
- `plant_01_front.png`
- `plant_02_front.png`
- `accessory_01_front.png`

### Living Room

- `sofa_01_front.png`
- `sofa_02_front.png`
- `sofa_03_front.png`
- `tv_01_front.png`
- `tv_02_front.png`
- `coffee_table_01_front.png`
- `coffee_table_02_front.png`
- `decor_01_front.png`
- `decor_02_front.png`

### Garage

- `vehicle_01_iso.png`
- `vehicle_02_iso.png`
- `vehicle_03_iso.png`
- `helmet_01_front.png`
- `helmet_02_front.png`
- `gear_01_front.png`
- `gear_02_front.png`
- `accessory_01_front.png`

## Asset requirements

- Transparent PNG output is preferred.
- If transparency is unavailable, use pure white background.
- Maintain the same semi-isometric front-facing perspective.
- Keep lighting, scale, and shadow direction consistent across all category variants.
- Export each item individually with no room or furniture clutter.

## Recommended generation order

1. Generate room backgrounds first.
2. Generate asset categories by room.
3. Generate variant sets for each category.
4. Clean up backgrounds and save the final PNGs into the folder structure above.

## Example folder tree

```text
public/assets/
  rooms/
    workstation_empty.png
    gaming_empty.png
    living_empty.png
    garage_empty.png
  objects/
    workstation/
      desks/
      chairs/
      monitors/
      accessories/
    livingroom/
      sofas/
      tvs/
      tables/
      decor/
    garage/
      vehicles/
      gear/
      accessories/
```
