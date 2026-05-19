import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { WorkspaceDesigner } from "@/components/WorkspaceDesigner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="brand-shell flex min-h-screen flex-col">
        <header className="flex items-center justify-between py-6">
          <a
            href="#designer"
            className="text-xl font-extrabold tracking-[-0.02em] text-[var(--foreground)]"
          >
            monis
          </a>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#designer"
              className="hidden rounded-full border border-[var(--line)] bg-[var(--foreground)] px-5 py-3 text-sm font-bold text-[var(--background)] shadow-sm transition hover:-translate-y-0.5 sm:inline-flex"
            >
              Start designing
            </a>
          </div>
        </header>

        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-4 py-2 text-sm font-bold text-[var(--green-dark)] shadow-sm">
              <Sparkles size={16} />
              Bali workspace rental, thoughtfully bundled
            </div>
            <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.03em] text-[var(--foreground)] sm:text-7xl">
              Rent a workspace that already feels settled.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Curate desks, chairs, and lifestyle gear into one clean monthly
              quote. Pick a room mood, compare currencies, and send Monis a
              ready-to-source setup in minutes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#designer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-4 text-sm font-extrabold text-[var(--background)] shadow-[0_16px_36px_rgba(25,28,27,0.18)] transition hover:-translate-y-0.5"
              >
                Configure setup
                <ArrowRight size={17} />
              </a>
              <a
                href="#designer"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-6 py-4 text-sm font-extrabold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:border-[var(--green)]"
              >
                View estimate
              </a>
            </div>
            <div className="mt-10 grid max-w-xl gap-3 text-sm font-bold text-[var(--muted)] sm:grid-cols-3">
              {["IDR-first pricing", "Monthly flexibility", "Bali delivery"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[var(--green)]" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="premium-panel relative min-h-[560px] overflow-hidden rounded-[30px] p-5">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--surface)_84%,transparent),transparent_54%)]" />
            <div className="relative grid h-full min-h-[520px] grid-rows-[1fr_auto] overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--surface)]">
              <div className="relative">
                <Image
                  src="/assets/15_Office_Windows_Laptop_1_c1221bb234.avif"
                  alt="A calm furnished workspace room"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.22)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/35 bg-white/22 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  curated bundle
                </div>
                <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Desk", "420k IDR"],
                    ["Chair", "360k IDR"],
                    ["Monitor", "260k IDR"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/30 bg-white/22 p-3 text-white shadow-sm backdrop-blur-md"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                        {label}
                      </p>
                      <p className="mt-1 text-lg font-extrabold tracking-[-0.03em]">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 bg-[var(--panel-strong)] p-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                    starting from
                  </p>
                  <p className="mt-1 text-3xl font-extrabold tracking-[-0.04em] text-[var(--foreground)]">
                    Rp1.14m / month
                  </p>
                </div>
                <a
                  href="#designer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-extrabold text-[var(--background)]"
                >
                  Build yours
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkspaceDesigner />
    </main>
  );
}
