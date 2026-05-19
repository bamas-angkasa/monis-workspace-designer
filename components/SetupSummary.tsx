"use client";

import { ArrowRight, Check, Clock3, Sparkles } from "lucide-react";
import type { CurrencyCode, Product } from "@/types/product";
import { formatPrice } from "@/lib/pricing";
import type { Copy } from "@/lib/localization";

type SetupSummaryProps = {
  desk?: Product;
  chair?: Product;
  accessories: Product[];
  total: number;
  currency: CurrencyCode;
  copy: Copy;
  onRent: () => void;
};

export function SetupSummary({
  desk,
  chair,
  accessories,
  total,
  currency,
  copy,
  onRent,
}: SetupSummaryProps) {
  const selectedItems = [desk, chair, ...accessories].filter(
    (item): item is Product => Boolean(item),
  );

  return (
    <aside className="soft-card rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green-dark)]">
            {copy.yourSetup}
          </p>
          <h3 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em]">
            {copy.readyToQuote}
          </h3>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-[0_12px_26px_rgba(48,76,59,0.22)]">
          <Sparkles size={18} />
        </span>
      </div>

      <div className="mt-6 space-y-3">
        {selectedItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-[var(--line)] bg-[var(--input)] px-3 py-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: item.accent }}
                >
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-extrabold">
                    {item.name}
                  </p>
                  <p className="text-xs font-semibold text-[var(--muted)]">
                    {item.vibe}
                  </p>
                </div>
              </div>
              <p className="shrink-0 text-sm font-bold text-[var(--green-dark)]">
                {formatPrice(item.priceMonthly, currency)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl bg-[var(--foreground)] p-5 text-[var(--background)] shadow-[0_18px_42px_rgba(25,28,27,0.22)]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-60">
              {copy.monthlyEstimate}
            </p>
            <p className="mt-1 text-3xl font-extrabold tracking-[-0.04em]">
              {formatPrice(total, currency)}
            </p>
          </div>
          <div className="mb-1 flex items-center gap-1 text-xs font-bold opacity-70">
            <Clock3 size={14} />
            {copy.reply}
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 opacity-70">
          {copy.estimateNote}
        </p>
        <button
          type="button"
          onClick={onRent}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--background)] px-5 py-4 text-sm font-extrabold text-[var(--foreground)] transition hover:-translate-y-0.5"
        >
          {copy.rentThisSetup}
          <ArrowRight size={17} />
        </button>
      </div>

      <div className="mt-5 grid gap-2 text-sm font-semibold text-[var(--muted)]">
        <p className="flex items-center gap-2">
          <Check size={16} className="text-[var(--green-dark)]" />
          {copy.flexibleRental}
        </p>
        <p className="flex items-center gap-2">
          <Check size={16} className="text-[var(--green-dark)]" />
          {copy.baliDelivery}
        </p>
      </div>
    </aside>
  );
}
