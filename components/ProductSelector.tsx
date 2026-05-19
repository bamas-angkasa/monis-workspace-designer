"use client";

import { accessories, chairs, desks } from "@/data/products";
import type { WorkspaceConfig } from "@/types/product";
import { AccessoryToggle } from "./AccessoryToggle";
import { ProductCard } from "./ProductCard";

type ProductSelectorProps = {
  config: WorkspaceConfig;
  onDeskChange: (deskId: string) => void;
  onChairChange: (chairId: string) => void;
  onAccessoryToggle: (accessoryId: string) => void;
};

export function ProductSelector({
  config,
  onDeskChange,
  onChairChange,
  onAccessoryToggle,
}: ProductSelectorProps) {
  return (
    <aside className="soft-card rounded-[28px] p-4 sm:p-5">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--green-dark)]">
          Configure
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em]">
          Curate the setup.
        </h2>
      </div>

      <div className="mt-6 space-y-7">
        <section>
          <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
            Desk
          </h3>
          <div className="grid gap-3">
            {desks.map((desk) => (
              <ProductCard
                key={desk.id}
                product={desk}
                selected={config.deskId === desk.id}
                onSelect={() => onDeskChange(desk.id)}
              />
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
            Chair
          </h3>
          <div className="grid gap-3">
            {chairs.map((chair) => (
              <ProductCard
                key={chair.id}
                product={chair}
                selected={config.chairId === chair.id}
                onSelect={() => onChairChange(chair.id)}
              />
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
            Accessories
          </h3>
          <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible">
            {accessories.map((accessory) => (
              <AccessoryToggle
                key={accessory.id}
                product={accessory}
                selected={config.accessoryIds.includes(accessory.id)}
                onToggle={() => onAccessoryToggle(accessory.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}
