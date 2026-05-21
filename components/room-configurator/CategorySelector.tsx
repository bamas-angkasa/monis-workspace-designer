"use client";

import type { RoomCategory } from "@/src/types/room-configurator";

type CategorySelectorProps<TKey extends string> = {
  categories: RoomCategory<TKey>[];
  activeCategory: TKey;
  onSelect: (category: TKey) => void;
};

export function CategorySelector<TKey extends string>({
  categories,
  activeCategory,
  onSelect,
}: CategorySelectorProps<TKey>) {
  return (
    <div className="flex gap-2 overflow-x-auto rounded-full border border-[#d8c8ad]/80 bg-[#fff8eb]/70 p-1">
      {categories.map((category) => (
        <button
          key={category.key}
          type="button"
          onClick={() => onSelect(category.key)}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${
            activeCategory === category.key
              ? "bg-[#183d2e] text-[#fff8eb] shadow-[0_10px_26px_rgba(24,61,46,0.22)]"
              : "text-[#5f594d] hover:bg-white/70 hover:text-[#1e2f27]"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
