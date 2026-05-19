"use client";

import type { Product } from "@/types/product";
import { formatIdr } from "@/lib/pricing";

type AccessoryToggleProps = {
  product: Product;
  selected: boolean;
  onToggle: () => void;
};

export function AccessoryToggle({
  product,
  selected,
  onToggle,
}: AccessoryToggleProps) {
  const Icon = product.icon;

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex min-w-[210px] items-center gap-3 rounded-2xl border p-3 text-left transition duration-300 lg:min-w-0 ${
        selected
          ? "border-[var(--green)] bg-[var(--cream)] shadow-[0_12px_30px_rgba(48,76,59,0.11)]"
          : "border-[var(--line)] bg-white/50 hover:border-[var(--green)]"
      }`}
      aria-pressed={selected}
    >
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
        style={{ backgroundColor: product.accent }}
      >
        <Icon size={18} strokeWidth={1.8} />
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-bold text-[var(--foreground)]">
          {product.name}
        </span>
        <span className="block text-xs font-semibold text-[var(--muted)]">
          {formatIdr(product.priceMonthly)}
        </span>
      </span>
    </button>
  );
}
