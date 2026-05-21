import type {
  CategoryKey,
  LayerConfig,
} from "@/src/types/room-configurator";

export const workstationLayerPositions: Record<CategoryKey, LayerConfig<CategoryKey>> = {
  desk: {
    key: "desk",
    zIndex: 20,
    style: { left: "27%", top: "46%", width: "46%" },
  },
  monitor: {
    key: "monitor",
    zIndex: 30,
    style: { left: "41%", top: "34%", width: "22%" },
  },
  laptop: {
    key: "laptop",
    zIndex: 35,
    style: { left: "32%", top: "39%", width: "13%" },
  },
  keyboard: {
    key: "keyboard",
    zIndex: 40,
    style: { left: "45%", top: "50%", width: "14%" },
  },
  mouse: {
    key: "mouse",
    zIndex: 41,
    style: { left: "60%", top: "50%", width: "5%" },
  },
  plant: {
    key: "plant",
    zIndex: 42,
    style: { left: "64%", top: "43%", width: "7%" },
  },
  chair: {
    key: "chair",
    zIndex: 60,
    style: { left: "41%", top: "48%", width: "17%" },
  },
};

export const workstationLayerOrder: CategoryKey[] = [
  "desk",
  "monitor",
  "laptop",
  "keyboard",
  "mouse",
  "plant",
  "chair",
];
