import { ArrowRight, Sparkles } from "lucide-react";
import { WorkspaceDesigner } from "@/components/WorkspaceDesigner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="brand-shell flex min-h-screen flex-col">
        <header className="flex items-center justify-between py-6">
          <a
            href="#designer"
            className="text-xl font-semibold tracking-[-0.02em] text-[var(--foreground)]"
          >
            monis
          </a>
          <a
            href="#designer"
            className="hidden rounded-full border border-[var(--line)] bg-[var(--cream)] px-5 py-3 text-sm font-semibold text-[var(--green-dark)] shadow-sm transition hover:border-[var(--green)] sm:inline-flex"
          >
            Start designing
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--cream)] px-4 py-2 text-sm font-semibold text-[var(--green-dark)]">
              <Sparkles size={16} />
              Workspace rental made calm
            </div>
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.03em] text-[var(--foreground)] sm:text-7xl">
              Design your perfect workspace in Bali.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Build a focused setup with curated desks, chairs, and productivity
              essentials. Preview the mood, understand the monthly estimate,
              then send a rental inquiry in minutes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#designer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-4 text-sm font-bold text-white shadow-[0_16px_36px_rgba(25,28,27,0.2)] transition hover:-translate-y-0.5"
              >
                Configure setup
                <ArrowRight size={17} />
              </a>
              <a
                href="#designer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--cream)] px-6 py-4 text-sm font-bold text-[var(--green-dark)] transition hover:border-[var(--green)]"
              >
                View estimate
              </a>
            </div>
          </div>

          <div
            className="soft-card relative min-h-[520px] overflow-hidden rounded-[32px] p-6"
            aria-label="A calm Monis workspace preview placeholder"
          >
            <div className="absolute inset-x-8 top-8 h-48 rounded-[28px] bg-[linear-gradient(135deg,#f8efe3,#dfe8dd)]" />
            <div className="absolute left-14 top-14 h-36 w-28 rounded-t-full bg-[rgba(255,253,247,0.78)]" />
            <div className="absolute right-12 top-16 rounded-full bg-[var(--cream)] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--green-dark)]">
              live preview
            </div>
            <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(233,220,203,0),rgba(233,220,203,0.9))]" />
            <div className="absolute bottom-24 left-1/2 h-8 w-[68%] -translate-x-1/2 rounded-full bg-[rgba(25,28,27,0.08)] blur-xl" />
            <div className="absolute bottom-32 left-1/2 h-28 w-[62%] -translate-x-1/2 rounded-[18px] bg-[var(--wood)] shadow-[0_22px_42px_rgba(78,54,32,0.22)]">
              <div className="absolute left-10 top-7 h-16 w-28 rounded-xl bg-[var(--foreground)]">
                <div className="absolute inset-2 rounded-lg bg-[#dfe8dd]" />
              </div>
              <div className="absolute right-16 top-8 h-14 w-10 rounded-full bg-[var(--green)]" />
              <div className="absolute bottom-[-64px] left-10 h-64 w-4 rounded-full bg-[#6e5235]" />
              <div className="absolute bottom-[-64px] right-10 h-64 w-4 rounded-full bg-[#6e5235]" />
            </div>
            <div className="absolute bottom-20 left-[19%] h-36 w-28 rounded-[26px] bg-[var(--green-dark)] shadow-[0_18px_42px_rgba(48,76,59,0.26)]" />
          </div>
        </div>
      </section>

      <WorkspaceDesigner />
    </main>
  );
}
