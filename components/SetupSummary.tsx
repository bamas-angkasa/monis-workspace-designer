"use client";

import { Check, CircleDollarSign, Info, Truck } from "lucide-react";
import { formatPrice } from "@/lib/pricing";
import type { CurrencyCode } from "@/types/product";
import { CurrencySelector } from "./CurrencySelector";
import { QuoteCTA } from "./QuoteCTA";

type SetupSummaryProps = {
  total: number;
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onQuote: () => void;
};

export function SetupSummary({
  total,
  currency,
  onCurrencyChange,
  onQuote,
}: SetupSummaryProps) {
  return (
    <aside id="summary" className="sticky top-24 rounded-[26px] border border-[var(--line)] bg-[var(--price-card)] p-6 shadow-[0_24px_80px_rgba(35,30,24,0.13)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-extrabold text-[var(--foreground)]">
            Monthly Estimate
          </p>
          <p className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[var(--green-dark)]">
            {formatPrice(total, currency)}
            <span className="text-base font-bold text-[var(--muted)]">/mo</span>
          </p>
        </div>
        <Info size={21} className="text-[var(--muted)]" />
      </div>

      <div className="mt-5">
        <CurrencySelector currency={currency} onChange={onCurrencyChange} />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 text-sm">
        <span className="font-semibold text-[var(--muted)]">
          Delivery & Installation
        </span>
        <span className="font-extrabold text-[var(--green-dark)]">INCLUDED</span>
      </div>

      <div className="mt-7">
        <QuoteCTA onClick={onQuote} />
      </div>

      <div className="mt-7 grid gap-4 text-sm font-semibold leading-6 text-[var(--muted)]">
        <p className="flex gap-3">
          <CircleDollarSign size={18} className="mt-0.5 shrink-0 text-[var(--green-dark)]" />
          Flexible monthly rental with 30-day notice.
        </p>
        <p className="flex gap-3">
          <Truck size={18} className="mt-0.5 shrink-0 text-[var(--green-dark)]" />
          Free delivery and professional setup within 48 hours.
        </p>
        <p className="flex gap-3">
          <Check size={18} className="mt-0.5 shrink-0 text-[var(--green-dark)]" />
          Full maintenance and replacement guarantee included.
        </p>
      </div>
    </aside>
  );
}
