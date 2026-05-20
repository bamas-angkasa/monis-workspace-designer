# Monis Asset Manifest

This manifest defines every image needed to complete the Monis workspace designer asset library.

Use these exact paths so the frontend can be mapped cleanly after generation.

## Status Key

- `[x]` Exists now
- `[ ]` Missing or not yet verified as final

## Room Backgrounds

These should be empty 16:9 room canvases with clean placement zones for layered objects.

- [x] `public/assets/rooms/workstation_empty.png`
- [x] `public/assets/rooms/living_empty.png`
- [x] `public/assets/rooms/garage_empty.png`

Not required by the current app:

- [x] `public/assets/rooms/gaming_empty.png`

## Workstation Objects

Required by `data/products.ts` for the `workstation` template.

### Chair

- [ ] `public/assets/objects/workstation/chair/chair-1.png`
- [ ] `public/assets/objects/workstation/chair/chair-2.png`
- [ ] `public/assets/objects/workstation/chair/chair-3.png`

### Desk

- [ ] `public/assets/objects/workstation/desk/desk-1.png`
- [ ] `public/assets/objects/workstation/desk/desk-2.png`
- [ ] `public/assets/objects/workstation/desk/desk-3.png`

### Monitor

- [ ] `public/assets/objects/workstation/monitor/monitor-1.png`
- [ ] `public/assets/objects/workstation/monitor/monitor-2.png`
- [ ] `public/assets/objects/workstation/monitor/monitor-3.png`

### Lamp

- [ ] `public/assets/objects/workstation/lamp/lamp-1.png`
- [ ] `public/assets/objects/workstation/lamp/lamp-2.png`

### Plant

- [ ] `public/assets/objects/workstation/plant/plant-1.png`
- [ ] `public/assets/objects/workstation/plant/plant-2.png`

### Storage

- [ ] `public/assets/objects/workstation/storage/storage-1.png`
- [ ] `public/assets/objects/workstation/storage/storage-2.png`

## Living Room Objects

Required by `data/products.ts` for the `living-room` template.

### Sofa

- [ ] `public/assets/objects/living-room/sofa/sofa-1.png`
- [ ] `public/assets/objects/living-room/sofa/sofa-2.png`

### TV

- [ ] `public/assets/objects/living-room/tv/tv-1.png`
- [ ] `public/assets/objects/living-room/tv/tv-2.png`

### Coffee Table

- [ ] `public/assets/objects/living-room/coffee-table/coffee-1.png`
- [ ] `public/assets/objects/living-room/coffee-table/coffee-2.png`

### Bean Bag

- [ ] `public/assets/objects/living-room/bean-bag/bean-1.png`
- [ ] `public/assets/objects/living-room/bean-bag/bean-2.png`

### Console

- [ ] `public/assets/objects/living-room/console/console-1.png`
- [ ] `public/assets/objects/living-room/console/console-2.png`

### Lighting

- [ ] `public/assets/objects/living-room/lighting/lighting-1.png`
- [ ] `public/assets/objects/living-room/lighting/lighting-2.png`

## Garage Objects

Required by `data/products.ts` for the `garage` template.

### Main Vehicle

- [ ] `public/assets/objects/garage/main-vehicle/main-scooter.png`
- [ ] `public/assets/objects/garage/main-vehicle/main-car.png`
- [ ] `public/assets/objects/garage/main-vehicle/main-motorcycle.png`

### Secondary Vehicle

- [ ] `public/assets/objects/garage/secondary-vehicle/secondary-none.png`
- [ ] `public/assets/objects/garage/secondary-vehicle/secondary-scooter.png`

`secondary-none.png` should be a transparent blank PNG, not a visible object.

### Helmet

- [ ] `public/assets/objects/garage/helmet/helmet-1.png`
- [ ] `public/assets/objects/garage/helmet/helmet-2.png`

### Tools

- [ ] `public/assets/objects/garage/tools/tools-1.png`
- [ ] `public/assets/objects/garage/tools/tools-2.png`

### Storage

- [ ] `public/assets/objects/garage/storage/storage-1.png`
- [ ] `public/assets/objects/garage/storage/storage-2.png`

### Accessories

- [ ] `public/assets/objects/garage/accessories/garage-accessory-1.png`
- [ ] `public/assets/objects/garage/accessories/garage-accessory-2.png`

## Summary

- Required room backgrounds: 3
- Required object PNGs: 40
- Existing required room backgrounds: 3
- Missing object PNGs: 40

## Legacy Assets

These exist now and can stay as temporary thumbnails until final assets are generated:

- `public/assets/chair/chair-1.png`
- `public/assets/chair/chair-2.png`
- `public/assets/chair/chair-3.png`
- `public/assets/table/table-1.png`
- `public/assets/table/table-2.png`
- `public/assets/table/table-3.png`
- `public/assets/monitor/monitor-1.png`
- `public/assets/monitor/monitor-2.png`
- `public/assets/monitor/monitor-3.png`

## Folder Tree

```text
public/assets/
  rooms/
    workstation_empty.png
    living_empty.png
    garage_empty.png
  objects/
    workstation/
      chair/
      desk/
      monitor/
      lamp/
      plant/
      storage/
    living-room/
      sofa/
      tv/
      coffee-table/
      bean-bag/
      console/
      lighting/
    garage/
      main-vehicle/
      secondary-vehicle/
      helmet/
      tools/
      storage/
      accessories/
```
