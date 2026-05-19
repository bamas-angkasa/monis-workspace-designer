"use client";

import { Bell, CircleUserRound } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--panel-strong)]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1880px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <div className="flex min-w-0 items-center gap-5">
          <a
            href="#workspace-designer"
            className="shrink-0 text-2xl font-extrabold tracking-[-0.03em] text-[var(--green-dark)]"
          >
            monis.rent
          </a>
          <span className="hidden h-5 w-px bg-[var(--line)] sm:block" />
          <p className="hidden text-sm font-bold text-[var(--muted)] sm:block">
            Workspace Designer
          </p>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-extrabold text-[var(--muted)] lg:flex">
          <a className="border-b-2 border-[var(--green-dark)] py-2 text-[var(--green-dark)]" href="#workspace-designer">
            Explore
          </a>
          <a className="py-2 transition hover:text-[var(--green-dark)]" href="#gallery">
            Gallery
          </a>
          <a className="py-2 transition hover:text-[var(--green-dark)]" href="#projects">
            My Projects
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden rounded-xl bg-[var(--green-dark)] px-5 py-3 text-sm font-extrabold text-[var(--background)] shadow-sm transition hover:-translate-y-0.5 sm:inline-flex">
            Save Design
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] text-[var(--foreground)] transition hover:border-[var(--green)]"
            aria-label="Notifications"
          >
            <Bell size={19} />
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel-strong)] text-[var(--foreground)] transition hover:border-[var(--green)]"
            aria-label="Profile"
          >
            <CircleUserRound size={21} />
          </button>
        </div>
      </div>
    </header>
  );
}
