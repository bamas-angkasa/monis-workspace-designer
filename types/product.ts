import type { LucideIcon } from "lucide-react";

export type ProductCategory = "desk" | "chair" | "accessory";
export type TemplateId = "workstation" | "game-room" | "garage" | "living-room";
export type CurrencyCode =
  | "USD"
  | "EUR"
  | "JPY"
  | "IDR"
  | "THB"
  | "RUB"
  | "CNY"
  | "VND";
export type LanguageCode = "en" | "id" | "th" | "vi" | "zh" | "ja";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  templateIds: TemplateId[];
  priceMonthly: number;
  description: string;
  vibe: string;
  accent: string;
  imageSrc: string;
  overlaySrc?: string;
  icon: LucideIcon;
};

export type WorkspaceConfig = {
  templateId: TemplateId;
  deskId?: string;
  chairId?: string;
  accessoryIds: string[];
};

export type RoomTemplate = {
  id: TemplateId;
  name: string;
  description: string;
  imageSrc: string;
  defaultDeskId?: string;
  defaultChairId?: string;
  defaultAccessoryIds: string[];
};
