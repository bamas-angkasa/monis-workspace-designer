"use client";

import { useMemo, useState } from "react";
import { allProducts, chairs, desks, roomTemplates } from "@/data/products";
import { dictionary, languages } from "@/lib/localization";
import {
  calculateMonthlyTotal,
  currencyOptions,
  formatPrice,
} from "@/lib/pricing";
import type {
  CurrencyCode,
  LanguageCode,
  WorkspaceConfig,
} from "@/types/product";
import { CheckoutModal } from "./CheckoutModal";
import { ProductSelector } from "./ProductSelector";
import { SetupSummary } from "./SetupSummary";
import { SuccessState } from "./SuccessState";
import { WorkspaceCanvas } from "./WorkspaceCanvas";

const initialConfig: WorkspaceConfig = {
  templateId: "workstation",
  deskId: desks[0].id,
  chairId: chairs[0].id,
  accessoryIds: ["monitor", "plant", "keyboard"],
};

export function WorkspaceDesigner() {
  const [config, setConfig] = useState<WorkspaceConfig>(initialConfig);
  const [currency, setCurrency] = useState<CurrencyCode>("IDR");
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const copy = dictionary[language];

  const total = useMemo(
    () => calculateMonthlyTotal(allProducts, config),
    [config],
  );

  const selectedDesk = desks.find((product) => product.id === config.deskId);
  const selectedChair = chairs.find(
    (product) => product.id === config.chairId,
  );
  const selectedAccessories = allProducts.filter(
    (product) =>
      product.category === "accessory" &&
      config.accessoryIds.includes(product.id),
  );

  function updateDesk(deskId: string) {
    setConfig((current) => ({ ...current, deskId }));
  }

  function updateChair(chairId: string) {
    setConfig((current) => ({ ...current, chairId }));
  }

  function updateTemplate(templateId: WorkspaceConfig["templateId"]) {
    const template =
      roomTemplates.find((option) => option.id === templateId) ??
      roomTemplates[0];

    setConfig({
      templateId,
      deskId: template.defaultDeskId,
      chairId: template.defaultChairId,
      accessoryIds: template.defaultAccessoryIds,
    });
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

  function completeInquiry() {
    setCheckoutOpen(false);
    setSuccessOpen(true);
  }

  return (
    <section id="designer" className="brand-shell pb-24 pt-8">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--green-dark)]">
            {copy.workspaceDesigner}
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
            {copy.headline}
          </h2>
        </div>
        <div className="premium-panel grid gap-3 rounded-2xl px-5 py-4 sm:grid-cols-[1fr_auto_auto] sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
              {copy.monthlyEstimate}
            </p>
            <p className="mt-1 text-2xl font-extrabold tracking-[-0.03em] text-[var(--foreground)]">
              {formatPrice(total, currency)}
            </p>
          </div>
          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
              {copy.currency}
            </span>
            <select
              value={currency}
              onChange={(event) =>
                setCurrency(event.target.value as CurrencyCode)
              }
              className="control-surface w-full rounded-xl px-3 py-2 text-sm font-bold"
            >
              {currencyOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label} - {option.region}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
              {copy.language}
            </span>
            <select
              value={language}
              onChange={(event) =>
                setLanguage(event.target.value as LanguageCode)
              }
              className="control-surface w-full rounded-xl px-3 py-2 text-sm font-bold"
            >
              {languages.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-[330px_minmax(0,1fr)_340px]">
        <div className="order-2 xl:order-1">
          <ProductSelector
            config={config}
            currency={currency}
            copy={copy}
            onDeskChange={updateDesk}
            onChairChange={updateChair}
            onTemplateChange={updateTemplate}
            onCurrencyChange={setCurrency}
            onAccessoryToggle={toggleAccessory}
          />
        </div>
        <div className="order-1 xl:order-2">
          <WorkspaceCanvas
            config={config}
            onAccessoryToggle={toggleAccessory}
          />
        </div>
        <div className="order-3">
          <SetupSummary
            desk={selectedDesk}
            chair={selectedChair}
            accessories={selectedAccessories}
            total={total}
            currency={currency}
            copy={copy}
            onRent={() => setCheckoutOpen(true)}
          />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[80] border-t border-[var(--line)] bg-[var(--panel-strong)] px-4 py-3 shadow-[0_-18px_42px_rgba(25,28,27,0.12)] backdrop-blur-xl xl:hidden">
        <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted)]">
              {copy.estimate}
            </p>
            <p className="text-lg font-extrabold tracking-[-0.03em]">
              {formatPrice(total, currency)}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setCheckoutOpen(true)}
            className="rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-extrabold text-[var(--background)] shadow-[0_12px_26px_rgba(25,28,27,0.2)]"
          >
            {copy.rentSetup}
          </button>
        </div>
      </div>

      <CheckoutModal
        open={checkoutOpen}
        total={total}
        currency={currency}
        copy={copy}
        onClose={() => setCheckoutOpen(false)}
        onSuccess={completeInquiry}
      />
      <SuccessState open={successOpen} onClose={() => setSuccessOpen(false)} />
    </section>
  );
}
