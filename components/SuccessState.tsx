"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

type SuccessStateProps = {
  open: boolean;
  onClose: () => void;
};

export function SuccessState({ open, onClose }: SuccessStateProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[rgba(10,12,11,0.58)] p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-[var(--line)] bg-[var(--panel-strong)] p-7 text-center shadow-[0_28px_90px_rgba(25,28,27,0.28)]"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--input)] transition hover:border-[var(--green)]"
              aria-label="Close success message"
            >
              <X size={18} />
            </button>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)] shadow-[0_16px_32px_rgba(48,76,59,0.22)]">
              <CheckCircle2 size={28} />
            </div>
            <h2
              id="success-title"
              className="mt-5 font-serif text-3xl font-semibold tracking-[-0.03em]"
            >
              Inquiry sent.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
              Monis has your workspace setup. Expect a calm, practical follow-up
              with availability, delivery timing, and the final quote.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-4 text-sm font-extrabold text-[var(--background)] transition hover:-translate-y-0.5"
            >
              Keep designing
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
