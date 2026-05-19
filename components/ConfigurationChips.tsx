"use client";

import Image from "next/image";
import { Plus, X } from "lucide-react";
import type { Option, RoomTemplate } from "@/types/product";

type ConfigurationChipsProps = {
  template: RoomTemplate;
  selectedItems: { slotId: string; slotName: string; option: Option }[];
  onRemove: (slotId: string) => void;
};

export function ConfigurationChips({
  template,
  selectedItems,
  onRemove,
}: ConfigurationChipsProps) {
  const selectedSlotIds = new Set(selectedItems.map((item) => item.slotId));
  const missingSlot = template.slots.find((slot) => !selectedSlotIds.has(slot.id));

  return (
    <section>
      <p className="text-sm font-extrabold">2. Your Configuration</p>
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
        {selectedItems.map(({ slotId, slotName, option }) => (
          <div
            key={slotId}
            className="grid min-w-[230px] grid-cols-[56px_1fr_auto] items-center gap-3 rounded-xl border border-[var(--line)] bg-[var(--panel-strong)] p-2.5"
          >
            <span className="relative h-12 overflow-hidden rounded-lg bg-[var(--surface)]">
              <Image
                src={option.thumbnail}
                alt=""
                fill
                sizes="56px"
                className="object-contain p-1.5"
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-extrabold">
                {option.name}
              </span>
              <span className="block truncate text-xs font-semibold text-[var(--muted)]">
                {slotName}
              </span>
            </span>
            <button
              type="button"
              onClick={() => onRemove(slotId)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
              aria-label={`Remove ${option.name}`}
            >
              <X size={16} />
            </button>
          </div>
        ))}

        {missingSlot ? (
          <div className="flex min-w-[150px] items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--line)] bg-[var(--panel-strong)] px-4 py-3 text-sm font-extrabold text-[var(--muted)]">
            <Plus size={16} />
            Add {missingSlot.name}
          </div>
        ) : null}
      </div>
    </section>
  );
}
