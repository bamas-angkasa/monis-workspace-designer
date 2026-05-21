"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import type { AssetOption } from "@/src/types/room-configurator";

type OptionCardProps = {
  option: AssetOption;
  selected: boolean;
  onSelect: () => void;
};

export function OptionCard({ option, selected, onSelect }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group grid grid-cols-[76px_1fr_auto] items-center gap-3 rounded-2xl border p-3 text-left transition duration-200 ${
        selected
          ? "border-[#24513d] bg-[#fffaf1] shadow-[0_14px_34px_rgba(46,35,22,0.12)]"
          : "border-[#decfb6] bg-white/55 hover:-translate-y-0.5 hover:border-[#8c7049] hover:bg-white/80"
      }`}
    >
      <span className="relative h-[76px] overflow-hidden rounded-xl border border-[#e0d1ba] bg-[#efe4d0]">
        <Image
          src={option.thumbnail}
          alt=""
          fill
          sizes="76px"
          className="object-contain p-2"
        />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-extrabold leading-5 text-[#1d281f]">
          {option.name}
        </span>
        <span className="mt-1 block text-xs font-bold text-[#7a6a55]">
          Transparent PNG layer
        </span>
      </span>
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
          selected
            ? "border-[#24513d] bg-[#24513d] text-[#fffaf1]"
            : "border-[#d3c2a7] text-transparent group-hover:text-[#8c7049]"
        }`}
        aria-hidden="true"
      >
        <Check size={15} strokeWidth={3} />
      </span>
    </button>
  );
}
