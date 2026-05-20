import type { Option, RoomTemplate } from "@/types/product";

const thumb = {
  chair1: "/assets/chair/chair-1.png",
  chair2: "/assets/chair/chair-2.png",
  chair3: "/assets/chair/chair-3.png",
  table1: "/assets/table/table-1.png",
  table2: "/assets/table/table-2.png",
  table3: "/assets/table/table-3.png",
  monitor1: "/assets/monitor/monitor-1.png",
  monitor2: "/assets/monitor/monitor-2.png",
  monitor3: "/assets/monitor/monitor-3.png",
};

function option(
  data: Omit<Option, "thumbnail" | "layerAsset"> & {
    thumbnail?: string;
    layerAsset?: string;
  },
): Option {
  return {
    ...data,
    thumbnail: data.thumbnail ?? thumb.table1,
    layerAsset: data.layerAsset ?? "",
  };
}

function objectAssetPath(templateId: RoomTemplate["id"], slotId: string, optionId: string) {
  return `/assets/objects/${templateId}/${slotId}/${optionId}.png`;
}

function scenePlatePath(templateId: RoomTemplate["id"], slotId: string, optionId: string) {
  return `/assets/scene-plates/${templateId}/${slotId}/${optionId}.png`;
}

function withAssetThumbnails(template: RoomTemplate): RoomTemplate {
  return {
    ...template,
    slots: template.slots.map((slot) => ({
      ...slot,
      availableOptions: slot.availableOptions.map((item) => ({
        ...item,
        thumbnail: objectAssetPath(template.id, slot.id, item.id),
        layerAsset: scenePlatePath(template.id, slot.id, item.id),
      })),
    })),
  };
}

const rawRoomTemplates: RoomTemplate[] = [
  {
    id: "workstation",
    name: "Workstation",
    description:
      "A warm daylight office scene with a fixed desk composition and refined work essentials.",
    category: "Focus room",
    backgroundAsset: "/assets/rooms/workstation_empty.png",
    stylePackages: ["Warm Minimal", "Walnut Executive", "Soft Studio"],
    previewImages: {
      default: "/assets/previews/workstation/default.png",
      "chair-1": "/assets/previews/workstation/chair-1.png",
      "chair-2": "/assets/previews/workstation/chair-2.png",
      "chair-3": "/assets/previews/workstation/chair-3.png",
      "desk-1": "/assets/previews/workstation/desk-1.png",
      "desk-2": "/assets/previews/workstation/desk-2.png",
      "desk-3": "/assets/previews/workstation/desk-3.png",
      "chair-1-desk-1": "/assets/previews/workstation/chair-1-desk-1.png",
      "chair-2-desk-1": "/assets/previews/workstation/chair-2-desk-1.png",
      "chair-3-desk-2": "/assets/previews/workstation/chair-3-desk-2.png",
    },
    slots: [
      {
        id: "chair",
        name: "Chair",
        category: "furniture",
        required: true,
        defaultOption: "chair-1",
        availableOptions: [
          option({
            id: "chair-1",
            name: "Zen Executive Chair",
            category: "furniture",
            price: 325000,
            description: "Sage mesh, ergo-pro support.",
            thumbnail: thumb.chair1,
            previewImageKey: "chair-1",
          }),
          option({
            id: "chair-2",
            name: "Sayan Mesh Chair",
            category: "furniture",
            price: 420000,
            description: "A lighter look for soft daylight workspaces.",
            thumbnail: thumb.chair2,
            previewImageKey: "chair-2",
          }),
          option({
            id: "chair-3",
            name: "Batu Bolong Task Chair",
            category: "furniture",
            price: 520000,
            description: "Higher back support for work and evening sessions.",
            thumbnail: thumb.chair3,
            previewImageKey: "chair-3",
          }),
        ],
      },
      {
        id: "desk",
        name: "Desk",
        category: "furniture",
        required: true,
        defaultOption: "desk-1",
        availableOptions: [
          option({
            id: "desk-1",
            name: "Uluwatu Walnut Desk",
            category: "furniture",
            price: 450000,
            description: "Walnut desk with a low studio silhouette.",
            thumbnail: thumb.table1,
            previewImageKey: "desk-1",
          }),
          option({
            id: "desk-2",
            name: "Canggu Minimal Desk",
            category: "furniture",
            price: 375000,
            description: "Oak surface for a brighter workspace.",
            thumbnail: thumb.table2,
            previewImageKey: "desk-2",
          }),
          option({
            id: "desk-3",
            name: "Berawa Standing Desk",
            category: "furniture",
            price: 500000,
            description: "Natural oak sit-stand work surface.",
            thumbnail: thumb.table3,
            previewImageKey: "desk-3",
          }),
        ],
      },
      {
        id: "monitor",
        name: "Monitor",
        category: "display",
        required: true,
        defaultOption: "monitor-1",
        availableOptions: [
          option({
            id: "monitor-1",
            name: "27 inch 4K monitor",
            category: "display",
            price: 260000,
            description: "Crisp single-screen productivity.",
            thumbnail: thumb.monitor1,
            previewImageKey: "monitor-1",
          }),
          option({
            id: "monitor-2",
            name: "Dual monitor setup",
            category: "display",
            price: 430000,
            description: "A wider view for design, code, and operations.",
            thumbnail: thumb.monitor2,
            previewImageKey: "monitor-2",
          }),
          option({
            id: "monitor-3",
            name: "Ultrawide monitor",
            category: "display",
            price: 520000,
            description: "Cinema-wide display for immersive work.",
            thumbnail: thumb.monitor3,
            previewImageKey: "monitor-3",
          }),
        ],
      },
      {
        id: "lamp",
        name: "Lamp",
        category: "lighting",
        required: true,
        defaultOption: "lamp-1",
        availableOptions: [
          option({
            id: "lamp-1",
            name: "Seseh Linear Lamp",
            category: "lighting",
            price: 120000,
            description: "Brushed brass task light.",
            previewImageKey: "lamp-1",
          }),
          option({
            id: "lamp-2",
            name: "Slim black task lamp",
            category: "lighting",
            price: 140000,
            description: "A darker architectural lamp for walnut scenes.",
            thumbnail: thumb.monitor3,
            previewImageKey: "lamp-2",
          }),
        ],
      },
      {
        id: "plant",
        name: "Plant",
        category: "decor",
        required: true,
        defaultOption: "plant-1",
        availableOptions: [
          option({
            id: "plant-1",
            name: "Small desk plant",
            category: "decor",
            price: 80000,
            description: "A quiet green accent near the window light.",
            thumbnail: thumb.chair2,
            previewImageKey: "plant-1",
          }),
          option({
            id: "plant-2",
            name: "Tall corner plant",
            category: "decor",
            price: 150000,
            description: "More height and softness at the edge of the scene.",
            thumbnail: thumb.chair1,
            previewImageKey: "plant-2",
          }),
        ],
      },
      {
        id: "storage",
        name: "Storage",
        category: "storage",
        required: true,
        defaultOption: "storage-1",
        availableOptions: [
          option({
            id: "storage-1",
            name: "Pererenan Desk Storage",
            category: "storage",
            price: 425000,
            description: "Black ash cabinet for documents and devices.",
            thumbnail: thumb.monitor2,
            previewImageKey: "storage-1",
          }),
          option({
            id: "storage-2",
            name: "Sanur Side Credenza",
            category: "storage",
            price: 360000,
            description: "Warm low storage with hidden cable space.",
            thumbnail: thumb.table3,
            previewImageKey: "storage-2",
          }),
        ],
      },
    ],
  },
  {
    id: "living-room",
    name: "Living Room",
    description:
      "A cozy media lounge with the TV wall, sofa, table, console, and ambient light locked into a polished composition.",
    category: "Media lounge",
    backgroundAsset: "/assets/rooms/living_empty.png",
    stylePackages: ["Cozy Walnut", "Cinema Soft", "Guest Villa"],
    previewImages: {
      default: "/assets/previews/living-room/default.png",
      "sofa-1-tv-1": "/assets/previews/living-room/sofa-1-tv-1.png",
      "sofa-2-tv-2": "/assets/previews/living-room/sofa-2-tv-2.png",
    },
    slots: [
      {
        id: "sofa",
        name: "Sofa",
        category: "furniture",
        required: true,
        defaultOption: "sofa-1",
        availableOptions: [
          option({
            id: "sofa-1",
            name: "Low linen sofa",
            category: "furniture",
            price: 720000,
            description: "Soft neutral seating for a calm lounge.",
            thumbnail: thumb.table1,
            previewImageKey: "sofa-1",
          }),
          option({
            id: "sofa-2",
            name: "Walnut leather sofa",
            category: "furniture",
            price: 920000,
            description: "A deeper, more tailored living room anchor.",
            thumbnail: thumb.table2,
            previewImageKey: "sofa-2",
          }),
        ],
      },
      {
        id: "tv",
        name: "TV",
        category: "display",
        required: true,
        defaultOption: "tv-1",
        availableOptions: [
          option({
            id: "tv-1",
            name: "55 inch smart TV",
            category: "display",
            price: 340000,
            description: "A balanced centerpiece for movie nights.",
            thumbnail: thumb.monitor1,
            previewImageKey: "tv-1",
          }),
          option({
            id: "tv-2",
            name: "65 inch cinema TV",
            category: "display",
            price: 520000,
            description: "Larger screen presence for premium villas.",
            thumbnail: thumb.monitor3,
            previewImageKey: "tv-2",
          }),
        ],
      },
      {
        id: "coffee-table",
        name: "Coffee table",
        category: "furniture",
        required: true,
        defaultOption: "coffee-1",
        availableOptions: [
          option({
            id: "coffee-1",
            name: "Round oak coffee table",
            category: "furniture",
            price: 210000,
            description: "Soft shape centered between sofa and TV.",
            thumbnail: thumb.table1,
            previewImageKey: "coffee-1",
          }),
          option({
            id: "coffee-2",
            name: "Travertine coffee table",
            category: "furniture",
            price: 310000,
            description: "A heavier editorial centerpiece.",
            thumbnail: thumb.table2,
            previewImageKey: "coffee-2",
          }),
        ],
      },
      {
        id: "bean-bag",
        name: "Bean bag",
        category: "furniture",
        required: true,
        defaultOption: "bean-1",
        availableOptions: [
          option({
            id: "bean-1",
            name: "Textured lounge chair",
            category: "furniture",
            price: 180000,
            description: "A low side seat for guests or gaming.",
            thumbnail: thumb.chair2,
            previewImageKey: "bean-1",
          }),
          option({
            id: "bean-2",
            name: "Oversized bean bag",
            category: "furniture",
            price: 140000,
            description: "Relaxed seating with a casual villa feel.",
            thumbnail: thumb.chair3,
            previewImageKey: "bean-2",
          }),
        ],
      },
      {
        id: "console",
        name: "Console",
        category: "display",
        required: true,
        defaultOption: "console-1",
        availableOptions: [
          option({
            id: "console-1",
            name: "Gaming console",
            category: "display",
            price: 260000,
            description: "A compact entertainment bundle by the cabinet.",
            thumbnail: thumb.monitor2,
            previewImageKey: "console-1",
          }),
          option({
            id: "console-2",
            name: "Sound system",
            category: "display",
            price: 300000,
            description: "More cinematic audio for the room.",
            thumbnail: thumb.monitor3,
            previewImageKey: "console-2",
          }),
        ],
      },
      {
        id: "lighting",
        name: "Lighting",
        category: "lighting",
        required: true,
        defaultOption: "lighting-1",
        availableOptions: [
          option({
            id: "lighting-1",
            name: "Warm floor lamp",
            category: "lighting",
            price: 130000,
            description: "Soft ambient light beside the sofa.",
            thumbnail: thumb.table3,
            previewImageKey: "lighting-1",
          }),
          option({
            id: "lighting-2",
            name: "Ambient LED wash",
            category: "lighting",
            price: 190000,
            description: "A subtle glow behind the media wall.",
            thumbnail: thumb.monitor1,
            previewImageKey: "lighting-2",
          }),
        ],
      },
    ],
  },
  {
    id: "garage",
    name: "Garage Space",
    description:
      "A controlled vehicle-and-gear setup with presets for scooter, car, and organized storage.",
    category: "Mobility room",
    backgroundAsset: "/assets/rooms/garage_empty.png",
    stylePackages: ["Scooter Only", "Car + Scooter", "Motorcycle Gear"],
    previewImages: {
      default: "/assets/previews/garage/default.png",
      "main-scooter-secondary-none": "/assets/previews/garage/main-scooter-secondary-none.png",
      "main-car-secondary-scooter": "/assets/previews/garage/main-car-secondary-scooter.png",
      "main-motorcycle-secondary-none": "/assets/previews/garage/main-motorcycle-secondary-none.png",
    },
    slots: [
      {
        id: "main-vehicle",
        name: "Main vehicle",
        category: "vehicle",
        required: true,
        defaultOption: "main-scooter",
        availableOptions: [
          option({
            id: "main-scooter",
            name: "Premium scooter",
            category: "vehicle",
            price: 1450000,
            description: "Compact daily mobility for Bali streets.",
            thumbnail: thumb.chair1,
            previewImageKey: "main-scooter",
          }),
          option({
            id: "main-car",
            name: "Compact city car",
            category: "vehicle",
            price: 5200000,
            description: "A tidy vehicle preset with clear garage spacing.",
            thumbnail: thumb.table2,
            previewImageKey: "main-car",
          }),
          option({
            id: "main-motorcycle",
            name: "Touring motorcycle",
            category: "vehicle",
            price: 2200000,
            description: "A stronger gear-forward composition.",
            thumbnail: thumb.chair3,
            previewImageKey: "main-motorcycle",
          }),
        ],
      },
      {
        id: "secondary-vehicle",
        name: "Secondary vehicle",
        category: "vehicle",
        required: true,
        defaultOption: "secondary-none",
        availableOptions: [
          option({
            id: "secondary-none",
            name: "No second vehicle",
            category: "vehicle",
            price: 0,
            description: "Keep the scene open with one main vehicle.",
            thumbnail: thumb.table1,
            previewImageKey: "secondary-none",
          }),
          option({
            id: "secondary-scooter",
            name: "Second scooter",
            category: "vehicle",
            price: 1250000,
            description: "A paired mobility setup with controlled placement.",
            thumbnail: thumb.chair2,
            previewImageKey: "secondary-scooter",
          }),
        ],
      },
      {
        id: "helmet",
        name: "Helmet",
        category: "gear",
        required: true,
        defaultOption: "helmet-1",
        availableOptions: [
          option({
            id: "helmet-1",
            name: "Matte black helmet",
            category: "gear",
            price: 90000,
            description: "Essential safety gear on the side wall.",
            thumbnail: thumb.monitor1,
            previewImageKey: "helmet-1",
          }),
          option({
            id: "helmet-2",
            name: "Pair of helmets",
            category: "gear",
            price: 160000,
            description: "Prepared for two-person rentals.",
            thumbnail: thumb.monitor2,
            previewImageKey: "helmet-2",
          }),
        ],
      },
      {
        id: "tools",
        name: "Tools",
        category: "gear",
        required: true,
        defaultOption: "tools-1",
        availableOptions: [
          option({
            id: "tools-1",
            name: "Wall tool kit",
            category: "gear",
            price: 140000,
            description: "Organized essentials without visual clutter.",
            thumbnail: thumb.table3,
            previewImageKey: "tools-1",
          }),
          option({
            id: "tools-2",
            name: "Detailing kit",
            category: "gear",
            price: 180000,
            description: "A polished maintenance shelf for vehicles.",
            thumbnail: thumb.monitor3,
            previewImageKey: "tools-2",
          }),
        ],
      },
      {
        id: "storage",
        name: "Storage",
        category: "storage",
        required: true,
        defaultOption: "storage-1",
        availableOptions: [
          option({
            id: "storage-1",
            name: "Walnut storage shelf",
            category: "storage",
            price: 220000,
            description: "Warm side storage for boxes and gear.",
            thumbnail: thumb.table2,
            previewImageKey: "storage-1",
          }),
          option({
            id: "storage-2",
            name: "Tall utility cabinet",
            category: "storage",
            price: 280000,
            description: "A cleaner closed-storage look.",
            thumbnail: thumb.table1,
            previewImageKey: "storage-2",
          }),
        ],
      },
      {
        id: "accessories",
        name: "Accessories",
        category: "accessories",
        required: true,
        defaultOption: "garage-accessory-1",
        availableOptions: [
          option({
            id: "garage-accessory-1",
            name: "Floor mat and charger",
            category: "accessories",
            price: 170000,
            description: "Finishing details that keep the garage usable.",
            thumbnail: thumb.monitor2,
            previewImageKey: "garage-accessory-1",
          }),
          option({
            id: "garage-accessory-2",
            name: "Travel bags",
            category: "accessories",
            price: 240000,
            description: "A practical storage bundle for longer stays.",
            thumbnail: thumb.chair1,
            previewImageKey: "garage-accessory-2",
          }),
        ],
      },
    ],
  },
];

export const roomTemplates: RoomTemplate[] = rawRoomTemplates.map(withAssetThumbnails);

export function getTemplateDefaults(template: RoomTemplate) {
  return Object.fromEntries(
    template.slots.map((slot) => [slot.id, slot.defaultOption]),
  );
}

export function getSelectedOptions(
  template: RoomTemplate,
  selectedOptionsBySlot: Record<string, string>,
) {
  return template.slots
    .map((slot) =>
      slot.availableOptions.find(
        (option) => option.id === selectedOptionsBySlot[slot.id],
      ),
    )
    .filter((option): option is Option => Boolean(option));
}
