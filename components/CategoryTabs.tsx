"use client";

import type { Slot } from "@/types/product";

type CategoryTabsProps = {
  slots: Slot[];
  selectedSlotId: string;
  onSelect: (slotId: string) => void;
};

export function CategoryTabs({ slots, selectedSlotId, onSelect }: CategoryTabsProps) {
  return (
    <div className="flex gap-6 overflow-x-auto border-b border-[var(--line)]">
      {slots.map((slot) => (
        <button
          key={slot.id}
          type="button"
          onClick={() => onSelect(slot.id)}
          className={`shrink-0 border-b-2 px-1 pb-3 text-sm font-extrabold transition ${
            selectedSlotId === slot.id
              ? "border-[var(--green-dark)] text-[var(--green-dark)]"
              : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          {slot.name}
        </button>
      ))}
    </div>
  );
}
