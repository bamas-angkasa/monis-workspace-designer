export type TemplateId = "workstation" | "living-room" | "garage";

export type SlotCategory =
  | "furniture"
  | "display"
  | "lighting"
  | "decor"
  | "vehicle"
  | "storage"
  | "gear"
  | "accessories";

export type ProductCategory = "desk" | "chair" | "accessory";
export type LanguageCode = "en" | "id" | "th" | "vi" | "zh" | "ja";

export type CurrencyCode = "IDR" | "USD" | "EUR" | "SGD" | "AUD";

export type Option = {
  id: string;
  name: string;
  category: SlotCategory;
  price: number;
  description: string;
  thumbnail: string;
  previewImageKey: string;
};

export type Slot = {
  id: string;
  name: string;
  category: SlotCategory;
  availableOptions: Option[];
  required: boolean;
  defaultOption: string;
};

export type RoomTemplate = {
  id: TemplateId;
  name: string;
  description: string;
  category: string;
  stylePackages: string[];
  previewImages: Record<string, string>;
  slots: Slot[];
};

export type SelectedOptionsBySlot = Record<string, string>;

export type SetupConfig = {
  selectedTemplate: TemplateId;
  selectedOptionsBySlot: SelectedOptionsBySlot;
};
