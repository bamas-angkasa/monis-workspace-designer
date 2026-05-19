"use client";

import { useMemo, useState } from "react";
import { allProducts, chairs, desks } from "@/data/products";
import { calculateMonthlyTotal, formatIdr } from "@/lib/pricing";
import type { WorkspaceConfig } from "@/types/product";
import { ProductSelector } from "./ProductSelector";

const initialConfig: WorkspaceConfig = {
  deskId: desks[0].id,
  chairId: chairs[0].id,
  accessoryIds: ["monitor", "plant", "keyboard"],
};

export function WorkspaceDesigner() {
  const [config, setConfig] = useState<WorkspaceConfig>(initialConfig);

  const total = useMemo(
    () => calculateMonthlyTotal(allProducts, config),
    [config],
  );

  function updateDesk(deskId: string) {
    setConfig((current) => ({ ...current, deskId }));
  }

  function updateChair(chairId: string) {
    setConfig((current) => ({ ...current, chairId }));
  }

  function toggleAccessory(accessoryId: string) {
    setConfig((current) => {
      const selected = current.accessoryIds.includes(accessoryId);

      return {
        ...current,
        accessoryIds: selected
          ? current.accessoryIds.filter((id) => id !== accessoryId)
          : [...current.accessoryIds, accessoryId],
      };
    });
  }

  return (
    <section id="designer" className="brand-shell pb-24">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--green-dark)]">
            Workspace designer
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
            Shape a setup that feels ready before you arrive.
          </h2>
        </div>
        <div className="rounded-3xl border border-[var(--line)] bg-[var(--cream)] px-5 py-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
            Monthly estimate
          </p>
          <p className="mt-1 text-2xl font-extrabold tracking-[-0.03em]">
            {formatIdr(total)}
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
        <ProductSelector
          config={config}
          onDeskChange={updateDesk}
          onChairChange={updateChair}
          onAccessoryToggle={toggleAccessory}
        />
        <div className="soft-card grid min-h-[640px] place-items-center rounded-[28px] p-8 text-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--green-dark)]">
              Live preview next
            </p>
            <h3 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.03em]">
              Selection state is working.
            </h3>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--muted)]">
              Desk, chair, accessories, and pricing are now connected. The
              next slice turns this state into the visual workspace canvas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
