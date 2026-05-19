import type { LucideIcon } from "lucide-react";

export type ProductCategory = "desk" | "chair" | "accessory";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  priceMonthly: number;
  description: string;
  vibe: string;
  accent: string;
  icon: LucideIcon;
};

export type WorkspaceConfig = {
  deskId: string;
  chairId: string;
  accessoryIds: string[];
};
