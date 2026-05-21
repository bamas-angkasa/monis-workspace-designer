import type {
  AssetOption,
  CategoryKey,
  RoomConfig,
} from "@/src/types/room-configurator";

const assetRoot = "/assets/workstation";

function createOptions(
  category: CategoryKey,
  label: string,
  thumbnailPrefix?: string,
): AssetOption[] {
  return [1, 2, 3].map((optionNumber) => ({
    id: `${category}-${optionNumber}`,
    name: `${label} ${optionNumber}`,
    src: `${assetRoot}/${category}/${category}-${optionNumber}.png`,
    thumbnail: thumbnailPrefix
      ? `${assetRoot}/${category}/goals/${thumbnailPrefix}-${optionNumber}.png`
      : `${assetRoot}/${category}/${category}-${optionNumber}.png`,
  }));
}

export const workstationCategories = [
  {
    key: "desk",
    name: "Desk",
    options: createOptions("desk", "Walnut Desk", "wd"),
  },
  {
    key: "chair",
    name: "Chair",
    options: createOptions("chair", "Ergonomic Chair", "wc"),
  },
  {
    key: "monitor",
    name: "Monitor",
    options: createOptions("monitor", "Display"),
  },
  {
    key: "laptop",
    name: "Laptop",
    options: createOptions("laptop", "Laptop"),
  },
  {
    key: "keyboard",
    name: "Keyboard",
    options: createOptions("keyboard", "Keyboard"),
  },
  {
    key: "mouse",
    name: "Mouse",
    options: createOptions("mouse", "Mouse"),
  },
  {
    key: "plant",
    name: "Plant",
    options: createOptions("plant", "Potted Plant"),
  },
] satisfies RoomConfig<CategoryKey>["categories"];

export const workstationRoomConfig: RoomConfig<CategoryKey> = {
  id: "workstation",
  name: "Monis Workspace Configurator",
  eyebrow: "Layered PNG room composer",
  description:
    "Compose a premium workstation from independent transparent PNG layers. The background stays fixed while every selected object updates live.",
  background: {
    src: `${assetRoot}/background/workstation-bg-empty.png`,
    alt: "Empty modern workstation room background",
  },
  categories: workstationCategories,
  initialSelected: {
    desk: "desk-1",
    chair: "chair-1",
    monitor: "monitor-1",
    laptop: "laptop-1",
    keyboard: "keyboard-1",
    mouse: "mouse-1",
    plant: "plant-1",
  },
  storageKey: "monis-workstation-configurator-selection",
};
