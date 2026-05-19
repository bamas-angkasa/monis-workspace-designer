"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  MapPin,
  MessageCircle,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import { formatPrice } from "@/lib/pricing";
import type { CurrencyCode } from "@/types/product";

type QuoteModalProps = {
  open: boolean;
  total: number;
  currency: CurrencyCode;
  onClose: () => void;
  onSuccess: () => void;
};

const initialForm = {
  name: "",
  whatsapp: "",
  location: "",
  duration: "1 month",
  notes: "",
};

export function QuoteModal({
  open,
  total,
  currency,
  onClose,
  onSuccess,
}: QuoteModalProps) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.whatsapp.trim() || !form.location.trim()) {
      setError("Add your name, WhatsApp, and location so Monis can confirm the quote.");
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
          aria-labelledby="quote-title"
        >
          <motion.div
            className="w-full max-w-xl rounded-[28px] border border-[var(--line)] bg-[var(--panel-strong)] p-5 shadow-[0_28px_90px_rgba(25,28,27,0.28)] sm:p-6"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green-dark)]">
                  Rental quote
                </p>
                <h2
                  id="quote-title"
                  className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em]"
                >
                  Send this setup to Monis.
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--input)] text-[var(--foreground)] transition hover:border-[var(--green)]"
                aria-label="Close rental quote"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--input)] p-4">
              <p className="text-sm font-semibold text-[var(--muted)]">
                Current monthly estimate
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-[-0.04em]">
                {formatPrice(total, currency)}
              </p>
            </div>

            <form className="mt-5 space-y-4" onSubmit={submitInquiry}>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <User size={16} />
                  Name
                </span>
                <input
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="control-surface w-full rounded-xl px-4 py-3 text-sm transition"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <MessageCircle size={16} />
                  WhatsApp
                </span>
                <input
                  value={form.whatsapp}
                  onChange={(event) =>
                    updateField("whatsapp", event.target.value)
                  }
                  className="control-surface w-full rounded-xl px-4 py-3 text-sm transition"
                  placeholder="+62..."
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <MapPin size={16} />
                  Location
                </span>
                <input
                  value={form.location}
                  onChange={(event) =>
                    updateField("location", event.target.value)
                  }
                  className="control-surface w-full rounded-xl px-4 py-3 text-sm transition"
                  placeholder="Canggu, Ubud, Seminyak..."
                />
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <CalendarDays size={16} />
                  Rental duration
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
                  <option>6+ months</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <MessageSquare size={16} />
                  Notes
                </span>
                <textarea
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  className="control-surface min-h-24 w-full resize-none rounded-xl px-4 py-3 text-sm transition"
                  placeholder="Timing, floor access, preferred delivery window..."
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
                Submit inquiry
                <CheckCircle2 size={18} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
