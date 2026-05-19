"use client";

import { Armchair, Check, Laptop, Warehouse } from "lucide-react";
import type { RoomTemplate, TemplateId } from "@/types/product";

type RoomSelectorProps = {
  rooms: RoomTemplate[];
  selectedRoom: TemplateId;
  onSelect: (room: TemplateId) => void;
};

const roomMeta = {
  workstation: { icon: Laptop, short: "Focus and productivity" },
  "living-room": { icon: Armchair, short: "Relax and unwind" },
  garage: { icon: Warehouse, short: "Park and gear up" },
};

export function RoomSelector({ rooms, selectedRoom, onSelect }: RoomSelectorProps) {
  return (
    <div className="rounded-[26px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_20px_70px_rgba(35,30,24,0.08)]">
      <p className="text-sm font-extrabold">1. Choose Room</p>
      <div className="mt-5 grid gap-3">
        {rooms.map((room) => {
          const meta = roomMeta[room.id];
          const Icon = meta.icon;
          const selected = room.id === selectedRoom;

          return (
            <button
              key={room.id}
              type="button"
              onClick={() => onSelect(room.id)}
              className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                selected
                  ? "border-[var(--green-dark)] bg-[var(--green-soft)]"
                  : "border-[var(--line)] bg-[var(--panel-strong)] hover:border-[var(--green)]"
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--green-dark)]">
                <Icon size={22} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-extrabold">{room.name}</span>
                <span className="mt-1 block text-xs font-semibold text-[var(--muted)]">
                  {meta.short}
                </span>
              </span>
              {selected ? (
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--green-dark)] text-[var(--background)]">
                  <Check size={16} />
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
