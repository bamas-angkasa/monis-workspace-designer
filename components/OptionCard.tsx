"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { formatPrice } from "@/lib/pricing";
import type { CurrencyCode, Option } from "@/types/product";

type OptionCardProps = {
  option: Option;
  currency: CurrencyCode;
  selected: boolean;
  onSelect: () => void;
};

export function OptionCard({
  option,
  currency,
  selected,
  onSelect,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group grid w-full grid-cols-[72px_1fr] gap-3 rounded-2xl border p-3 text-left transition ${
        selected
          ? "border-[var(--green)] bg-[var(--panel-strong)] shadow-[0_16px_34px_rgba(48,76,59,0.12)]"
          : "border-[var(--line)] bg-[var(--input)] hover:-translate-y-0.5 hover:border-[var(--green)]"
      }`}
      aria-pressed={selected}
    >
      <span className="relative h-[72px] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)]">
        <Image
          src={option.thumbnail}
          alt=""
          fill
          sizes="72px"
          className="object-contain p-2"
        />
      </span>
      <span className="min-w-0">
        <span className="flex items-start justify-between gap-3">
          <span className="min-w-0">
            <span className="block text-sm font-extrabold leading-5">
              {option.name}
            </span>
            <span className="mt-1 block text-xs font-bold text-[var(--green-dark)]">
              {formatPrice(option.price, currency)} / month
            </span>
          </span>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
              selected
                ? "border-[var(--green)] bg-[var(--green)] text-[var(--background)]"
                : "border-[var(--line)] text-transparent group-hover:text-[var(--muted)]"
            }`}
          >
            <Check size={15} />
          </span>
        </span>
        <span className="mt-2 block text-xs font-semibold leading-5 text-[var(--muted)]">
          {option.description}
        </span>
      </span>
    </button>
  );
}
