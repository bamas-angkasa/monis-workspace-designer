"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import type { CurrencyCode, Product } from "@/types/product";
import { formatPrice } from "@/lib/pricing";
import type { Copy } from "@/lib/localization";

type ProductCardProps = {
  product: Product;
  selected: boolean;
  currency: CurrencyCode;
  copy: Copy;
  onSelect: () => void;
};

export function ProductCard({
  product,
  selected,
  currency,
  copy,
  onSelect,
}: ProductCardProps) {
  const Icon = product.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group w-full rounded-2xl border p-4 text-left transition duration-300 ${
        selected
          ? "border-[var(--green)] bg-[var(--panel-strong)] shadow-[0_18px_45px_rgba(48,76,59,0.13)]"
          : "border-[var(--line)] bg-[var(--input)] hover:-translate-y-0.5 hover:border-[var(--green)]"
      }`}
      aria-pressed={selected}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] shadow-sm">
          <Image
            src={product.imageSrc}
            alt=""
            fill
            sizes="64px"
            className="object-contain p-2"
          />
          <span
            className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full text-white shadow-sm"
            style={{ backgroundColor: product.accent }}
          >
            <Icon size={13} strokeWidth={2} />
          </span>
        </span>
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border transition ${
            selected
              ? "border-[var(--green)] bg-[var(--green)] text-[var(--background)]"
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
          {formatPrice(product.priceMonthly, currency)} / {copy.month}
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
