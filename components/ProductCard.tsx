"use client";

import { Check } from "lucide-react";
import type { Product } from "@/types/product";
import { formatIdr } from "@/lib/pricing";

type ProductCardProps = {
  product: Product;
  selected: boolean;
  onSelect: () => void;
};

export function ProductCard({ product, selected, onSelect }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group w-full rounded-3xl border p-4 text-left transition duration-300 ${
        selected
          ? "border-[var(--green)] bg-[var(--cream)] shadow-[0_18px_45px_rgba(48,76,59,0.13)]"
          : "border-[var(--line)] bg-white/55 hover:-translate-y-0.5 hover:border-[var(--green)]"
      }`}
      aria-pressed={selected}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white shadow-sm"
          style={{ backgroundColor: product.accent }}
        >
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border transition ${
            selected
              ? "border-[var(--green)] bg-[var(--green)] text-white"
              : "border-[var(--line)] text-transparent group-hover:text-[var(--muted)]"
          }`}
        >
          <Check size={15} />
        </span>
      </div>

      <div className="mt-5">
        <p className="text-base font-bold tracking-[-0.02em] text-[var(--foreground)]">
          {product.name}
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--green-dark)]">
          {formatIdr(product.priceMonthly)} / month
        </p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
          {product.description}
        </p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
          {product.vibe}
        </p>
      </div>
    </button>
  );
}
