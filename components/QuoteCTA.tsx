"use client";

import { ArrowRight } from "lucide-react";

type QuoteCTAProps = {
  onClick: () => void;
};

export function QuoteCTA({ onClick }: QuoteCTAProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--cta)] px-5 py-4 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(24,92,51,0.24)] transition hover:-translate-y-0.5"
    >
      Rent this setup
      <ArrowRight size={18} />
    </button>
  );
}
