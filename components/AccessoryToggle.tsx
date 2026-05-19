"use client";

import Image from "next/image";
import type { CurrencyCode, Product } from "@/types/product";
import { formatPrice } from "@/lib/pricing";

type AccessoryToggleProps = {
  product: Product;
  selected: boolean;
  currency: CurrencyCode;
  onToggle: () => void;
};

export function AccessoryToggle({
  product,
  selected,
  currency,
  onToggle,
}: AccessoryToggleProps) {
  const Icon = product.icon;

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex min-w-[210px] items-center gap-3 rounded-xl border p-3 text-left transition duration-300 lg:min-w-0 ${
        selected
          ? "border-[var(--green)] bg-[var(--panel-strong)] shadow-[0_12px_30px_rgba(48,76,59,0.11)]"
          : "border-[var(--line)] bg-[var(--input)] hover:border-[var(--green)]"
      }`}
      aria-pressed={selected}
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)]">
        <Image
          src={product.imageSrc}
          alt=""
          fill
          sizes="48px"
          className="object-contain p-1.5"
        />
        <span
          className="absolute bottom-0.5 right-0.5 flex h-5 w-5 items-center justify-center rounded-full text-white shadow-sm"
          style={{ backgroundColor: product.accent }}
        >
          <Icon size={11} strokeWidth={2} />
        </span>
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-bold text-[var(--foreground)]">
          {product.name}
        </span>
        <span className="block text-xs font-semibold text-[var(--muted)]">
          {formatPrice(product.priceMonthly, currency)}
        </span>
      </span>
    </button>
  );
}
