"use client";

import Image from "next/image";
import { Check, Plus } from "lucide-react";
import { formatPrice } from "@/lib/pricing";
import type { CurrencyCode, Option } from "@/types/product";

type ProductCardProps = {
  product: Option;
  currency: CurrencyCode;
  selected: boolean;
  onSelect: () => void;
};

export function ProductCard({
  product,
  currency,
  selected,
  onSelect,
}: ProductCardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-2xl border bg-[var(--panel-strong)] transition ${
        selected
          ? "border-[var(--green-dark)] shadow-[0_18px_44px_rgba(48,76,59,0.16)]"
          : "border-[var(--line)] hover:-translate-y-0.5 hover:border-[var(--green)]"
      }`}
    >
      {selected ? (
        <span className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--green-dark)] text-[var(--background)]">
          <Check size={17} />
        </span>
      ) : null}
      <div className="relative h-36 bg-[var(--surface)]">
        <Image
          src={product.thumbnail}
          alt=""
          fill
          sizes="(min-width: 1024px) 220px, 45vw"
          className="object-contain p-5"
        />
      </div>
      <div className="p-4">
        <h4 className="text-sm font-extrabold">{product.name}</h4>
        <p className="mt-1 text-xs font-semibold leading-5 text-[var(--muted)]">
          {product.description}
        </p>
        <p className="mt-2 text-sm font-extrabold text-[var(--green-dark)]">
          {formatPrice(product.price, currency)}/mo
        </p>
        <button
          type="button"
          onClick={onSelect}
          className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-extrabold transition ${
            selected
              ? "bg-[var(--green-dark)] text-[var(--background)]"
              : "bg-[var(--surface)] text-[var(--foreground)] hover:bg-[var(--green-soft)]"
          }`}
        >
          {selected ? <Check size={16} /> : <Plus size={16} />}
          {selected ? "Selected" : "Select"}
        </button>
      </div>
    </article>
  );
}
