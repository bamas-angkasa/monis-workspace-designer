"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Mail,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import type { Copy } from "@/lib/localization";
import { formatPrice } from "@/lib/pricing";
import type { CurrencyCode } from "@/types/product";

type CheckoutModalProps = {
  open: boolean;
  total: number;
  currency: CurrencyCode;
  copy: Copy;
  onClose: () => void;
  onSuccess: () => void;
};

type FormState = {
  name: string;
  email: string;
  deliveryDate: string;
  duration: string;
  notes: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  deliveryDate: "",
  duration: "1 month",
  notes: "",
};

export function CheckoutModal({
  open,
  total,
  currency,
  copy,
  onClose,
  onSuccess,
}: CheckoutModalProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.deliveryDate) {
      setError(copy.validation);
      return;
    }

    setForm(initialForm);
    onSuccess();
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[rgba(10,12,11,0.58)] p-4 backdrop-blur-sm sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-title"
        >
          <motion.div
            className="w-full max-w-xl rounded-2xl border border-[var(--line)] bg-[var(--panel-strong)] p-5 shadow-[0_28px_90px_rgba(25,28,27,0.28)] sm:p-6"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green-dark)]">
                  {copy.inquiry}
                </p>
                <h2
                  id="checkout-title"
                  className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em]"
                >
                  {copy.sendSetup}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--input)] text-[var(--foreground)] transition hover:border-[var(--green)]"
                aria-label="Close rental inquiry"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--input)] p-4">
              <p className="text-sm font-semibold text-[var(--muted)]">
                {copy.currentEstimate}
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-[-0.04em]">
                {formatPrice(total, currency)}
              </p>
            </div>

            <form className="mt-5 space-y-4" onSubmit={submitInquiry}>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <User size={16} />
                  {copy.name}
                </span>
                <input
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="control-surface w-full rounded-xl px-4 py-3 text-sm transition"
                  placeholder={copy.name}
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <Mail size={16} />
                  {copy.email}
                </span>
                <input
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="control-surface w-full rounded-xl px-4 py-3 text-sm transition"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <CalendarDays size={16} />
                  {copy.deliveryDate}
                </span>
                <input
                  value={form.deliveryDate}
                  onChange={(event) =>
                    updateField("deliveryDate", event.target.value)
                  }
                  className="control-surface w-full rounded-xl px-4 py-3 text-sm transition"
                  min={new Date().toISOString().slice(0, 10)}
                  placeholder={copy.deliveryPlaceholder}
                  type="date"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold">
                  {copy.duration}
                </span>
                <select
                  value={form.duration}
                  onChange={(event) =>
                    updateField("duration", event.target.value)
                  }
                  className="control-surface w-full rounded-xl px-4 py-3 text-sm transition"
                >
                  <option>1 month</option>
                  <option>2-3 months</option>
                  <option>4-6 months</option>
                  <option>Team setup</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <MessageSquare size={16} />
                  {copy.notes}
                </span>
                <textarea
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  className="control-surface min-h-24 w-full resize-none rounded-xl px-4 py-3 text-sm transition"
                  placeholder={copy.notesPlaceholder}
                />
              </label>

              {error ? (
                <p className="rounded-xl bg-[#fff1e8] px-4 py-3 text-sm font-semibold text-[#8a4a24]">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-4 text-sm font-extrabold text-[var(--background)] shadow-[0_16px_36px_rgba(25,28,27,0.2)] transition hover:-translate-y-0.5"
              >
                {copy.submit}
                <CheckCircle2 size={18} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
