"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { accessories, chairs, desks, roomTemplates } from "@/data/products";
import { categoryLabel, type Copy } from "@/lib/localization";
import { currencyOptions } from "@/lib/pricing";
import type {
  CurrencyCode,
  Product,
  ProductCategory,
  WorkspaceConfig,
} from "@/types/product";
import { AccessoryToggle } from "./AccessoryToggle";
import { ProductCard } from "./ProductCard";

type CategoryFilter = ProductCategory | "all";

type ProductSelectorProps = {
  config: WorkspaceConfig;
  currency: CurrencyCode;
  copy: Copy;
  onDeskChange: (deskId: string) => void;
  onChairChange: (chairId: string) => void;
  onTemplateChange: (templateId: WorkspaceConfig["templateId"]) => void;
  onCurrencyChange: (currency: CurrencyCode) => void;
  onAccessoryToggle: (accessoryId: string) => void;
};

export function ProductSelector({
  config,
  currency,
  copy,
  onDeskChange,
  onChairChange,
  onTemplateChange,
  onCurrencyChange,
  onAccessoryToggle,
}: ProductSelectorProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const normalizedQuery = query.trim().toLowerCase();
  const categories: CategoryFilter[] = ["all", "desk", "chair", "accessory"];

  function matchesFilters(product: Product) {
    const matchesTemplate = product.templateIds.includes(config.templateId);
    const matchesCategory = category === "all" || product.category === category;
    const searchable =
      `${product.name} ${product.description} ${product.vibe}`.toLowerCase();

    return (
      matchesTemplate &&
      matchesCategory &&
      searchable.includes(normalizedQuery)
    );
  }

  const filteredDesks = desks.filter(matchesFilters);
  const filteredChairs = chairs.filter(matchesFilters);
  const filteredAccessories = accessories.filter(matchesFilters);
  const hasResults =
    filteredDesks.length + filteredChairs.length + filteredAccessories.length >
    0;

  return (
    <aside className="soft-card max-h-none rounded-2xl p-4 sm:p-5 lg:max-h-[710px] lg:overflow-y-auto">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--green-dark)]">
          {copy.configure}
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold tracking-[-0.03em]">
          {copy.curate}
        </h2>
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
            Template
          </p>
          <div className="grid gap-2">
            {roomTemplates.map((template) => (
              <button
                key={template.id}
                type="button"
                onClick={() => onTemplateChange(template.id)}
                className={`rounded-xl border px-4 py-3 text-left transition ${
                  config.templateId === template.id
                    ? "border-[var(--green)] bg-[var(--panel-strong)] shadow-sm"
                    : "border-[var(--line)] bg-[var(--input)] hover:border-[var(--green)]"
                }`}
              >
                <span className="block text-sm font-extrabold">
                  {template.name}
                </span>
                <span className="mt-1 block text-xs font-semibold leading-5 text-[var(--muted)]">
                  {template.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
            {copy.currency}
          </span>
          <select
            value={currency}
            onChange={(event) =>
              onCurrencyChange(event.target.value as CurrencyCode)
            }
            className="control-surface w-full rounded-xl px-3 py-3 text-sm font-bold"
          >
            {currencyOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.label} - {option.region}
              </option>
            ))}
          </select>
        </label>

        <label className="relative block">
          <Search
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="control-surface w-full rounded-xl py-3 pl-11 pr-4 text-sm font-semibold transition"
            placeholder={copy.search}
            type="search"
          />
        </label>

        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
            {copy.category}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCategory(option)}
                className={`rounded-full border px-3 py-2 text-xs font-extrabold transition ${
                  category === option
                    ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]"
                    : "border-[var(--line)] bg-[var(--input)] text-[var(--muted)] hover:border-[var(--green)]"
                }`}
              >
                {categoryLabel(copy, option)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-7">
        {filteredDesks.length > 0 ? (
          <section>
            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
              {copy.desk}
            </h3>
            <div className="grid gap-3">
              {filteredDesks.map((desk) => (
                <ProductCard
                  key={desk.id}
                  product={desk}
                  selected={config.deskId === desk.id}
                  currency={currency}
                  copy={copy}
                  onSelect={() => onDeskChange(desk.id)}
                />
              ))}
            </div>
          </section>
        ) : null}

        {filteredChairs.length > 0 ? (
          <section>
            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
              {copy.chair}
            </h3>
            <div className="grid gap-3">
              {filteredChairs.map((chair) => (
                <ProductCard
                  key={chair.id}
                  product={chair}
                  selected={config.chairId === chair.id}
                  currency={currency}
                  copy={copy}
                  onSelect={() => onChairChange(chair.id)}
                />
              ))}
            </div>
          </section>
        ) : null}

        {filteredAccessories.length > 0 ? (
          <section>
            <h3 className="mb-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--muted)]">
              {copy.accessory}
            </h3>
            <div className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-2 lg:grid lg:grid-cols-2 lg:overflow-visible">
              {filteredAccessories.map((accessory) => (
                <AccessoryToggle
                  key={accessory.id}
                  product={accessory}
                  selected={config.accessoryIds.includes(accessory.id)}
                  currency={currency}
                  onToggle={() => onAccessoryToggle(accessory.id)}
                />
              ))}
            </div>
          </section>
        ) : null}

        {!hasResults ? (
          <p className="rounded-xl border border-dashed border-[var(--line)] bg-[var(--input)] px-4 py-5 text-sm font-semibold text-[var(--muted)]">
            {copy.noResults}
          </p>
        ) : null}
      </div>
    </aside>
  );
}
