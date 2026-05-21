import type { CSSProperties } from "react";

export type CategoryKey =
  | "desk"
  | "chair"
  | "monitor"
  | "laptop"
  | "keyboard"
  | "mouse"
  | "plant";

export type AssetOption = {
  id: string;
  name: string;
  src: string;
  thumbnail: string;
};

export type RoomCategory<TKey extends string = string> = {
  key: TKey;
  name: string;
  options: AssetOption[];
};

export type RoomConfig<TKey extends string = string> = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  background: {
    src: string;
    alt: string;
  };
  categories: RoomCategory<TKey>[];
  initialSelected: Record<TKey, string>;
  storageKey: string;
};

export type LayerConfig<TKey extends string = string> = {
  key: TKey;
  zIndex: number;
  style: Pick<CSSProperties, "left" | "top" | "width">;
};

export type SelectedRoomOptions<TKey extends string = string> = Record<
  TKey,
  string
>;
