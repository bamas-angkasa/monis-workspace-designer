"use client";

import { currencyOptions } from "@/lib/pricing";
import type { CurrencyCode } from "@/types/product";

type CurrencySelectorProps = {
  currency: CurrencyCode;
  onChange: (currency: CurrencyCode) => void;
};

export function CurrencySelector({ currency, onChange }: CurrencySelectorProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
        Currency
      </span>
      <select
        value={currency}
        onChange={(event) => onChange(event.target.value as CurrencyCode)}
        className="control-surface w-full rounded-xl px-4 py-3 text-sm font-extrabold"
      >
        {currencyOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
