"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const saved = window.localStorage.getItem("monis-theme");

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setTheme(getInitialTheme());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("monis-theme", theme);
  }, [isDark, ready, theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel-strong)] px-3 text-sm font-bold text-[var(--foreground)] shadow-sm transition hover:-translate-y-0.5"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--foreground)] text-[var(--background)]">
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </span>
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
