import {
  Armchair,
  Coffee,
  Keyboard,
  LampDesk,
  Leaf,
  Monitor,
  PanelTop,
  RectangleHorizontal,
  Rows3,
} from "lucide-react";
import type { Product } from "@/types/product";

export const desks: Product[] = [
  {
    id: "minimal-desk",
    name: "Minimal Work Desk",
    category: "desk",
    priceMonthly: 420000,
    description: "A calm wood-toned desk for laptop-first focus days.",
    vibe: "compact focus",
    accent: "#B98A5A",
    icon: RectangleHorizontal,
  },
  {
    id: "standing-desk",
    name: "Standing Work Desk",
    category: "desk",
    priceMonthly: 680000,
    description: "A height-friendly setup for long calls and deep work.",
    vibe: "ergonomic rhythm",
    accent: "#5F7F67",
    icon: Rows3,
  },
];

export const chairs: Product[] = [
  {
    id: "ergonomic-chair",
    name: "Ergonomic Chair",
    category: "chair",
    priceMonthly: 360000,
    description: "Supportive, breathable, and ready for full workdays.",
    vibe: "all-day support",
    accent: "#304C3B",
    icon: Armchair,
  },
  {
    id: "premium-task-chair",
    name: "Premium Task Chair",
    category: "chair",
    priceMonthly: 520000,
    description: "A softer executive feel without losing work posture.",
    vibe: "soft precision",
    accent: "#191C1B",
    icon: Armchair,
  },
];

export const accessories: Product[] = [
  {
    id: "monitor",
    name: "Monitor",
    category: "accessory",
    priceMonthly: 260000,
    description: "More screen room for design, code, and planning.",
    vibe: "expanded view",
    accent: "#5F7F67",
    icon: Monitor,
  },
  {
    id: "desk-lamp",
    name: "Desk Lamp",
    category: "accessory",
    priceMonthly: 110000,
    description: "Warm task light for early mornings and late edits.",
    vibe: "warm focus",
    accent: "#B98A5A",
    icon: LampDesk,
  },
  {
    id: "plant",
    name: "Plant",
    category: "accessory",
    priceMonthly: 80000,
    description: "A small natural touch for a softer work corner.",
    vibe: "living calm",
    accent: "#5F7F67",
    icon: Leaf,
  },
  {
    id: "keyboard",
    name: "Keyboard",
    category: "accessory",
    priceMonthly: 95000,
    description: "A tidy typing surface for laptop-to-desk mode.",
    vibe: "clean input",
    accent: "#191C1B",
    icon: Keyboard,
  },
  {
    id: "coffee-machine",
    name: "Coffee Machine",
    category: "accessory",
    priceMonthly: 240000,
    description: "A quiet ritual for teams and long creative mornings.",
    vibe: "daily ritual",
    accent: "#8A6845",
    icon: Coffee,
  },
  {
    id: "whiteboard",
    name: "Whiteboard",
    category: "accessory",
    priceMonthly: 180000,
    description: "A wall-ready space for ideas, sprints, and sketches.",
    vibe: "visible thinking",
    accent: "#4F6B72",
    icon: PanelTop,
  },
];

export const allProducts = [...desks, ...chairs, ...accessories];
