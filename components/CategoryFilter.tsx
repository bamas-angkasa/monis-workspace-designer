"use client";

import type { SlotCategory } from "@/types/product";

type CategoryFilterValue = SlotCategory | "all";

type CategoryFilterProps = {
  categories: CategoryFilterValue[];
  selectedCategory: CategoryFilterValue;
  onSelect: (category: CategoryFilterValue) => void;
};

const labels: Record<CategoryFilterValue, string> = {
  all: "All",
  furniture: "Furniture",
  display: "Screens",
  lighting: "Lighting",
  decor: "Decor",
  vehicle: "Vehicles",
  storage: "Storage",
  gear: "Gear",
  accessories: "Accessories",
};

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`shrink-0 rounded-full border px-3 py-2 text-xs font-extrabold transition ${
            selectedCategory === category
              ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
              : "border-[var(--line)] bg-[var(--input)] text-[var(--muted)] hover:border-[var(--green)]"
          }`}
        >
          {labels[category]}
        </button>
      ))}
    </div>
  );
}

export type { CategoryFilterValue };
