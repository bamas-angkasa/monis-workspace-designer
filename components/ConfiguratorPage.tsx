"use client";

import { useMemo, useState } from "react";
import { roomTemplates, getTemplateDefaults } from "@/data/products";
import { calculateMonthlyTotal, formatPrice } from "@/lib/pricing";
import type {
  CurrencyCode,
  Option,
  SelectedOptionsBySlot,
  TemplateId,
} from "@/types/product";
import { AppHeader } from "./AppHeader";
import { CategoryTabs } from "./CategoryTabs";
import { ConfigurationChips } from "./ConfigurationChips";
import { LivePreview } from "./LivePreview";
import { ProductCard } from "./ProductCard";
import { QuoteModal } from "./QuoteModal";
import { RoomSelector } from "./RoomSelector";
import { SetupSummary } from "./SetupSummary";
import { SuccessState } from "./SuccessState";

const firstTemplate = roomTemplates[0];

function getSelectedLineItems(
  selectedOptionsBySlot: SelectedOptionsBySlot,
  template: typeof firstTemplate,
) {
  return template.slots
    .map((slot) => {
      const option = slot.availableOptions.find(
        (item) => item.id === selectedOptionsBySlot[slot.id],
      );

      return option
        ? { slotId: slot.id, slotName: slot.name, option }
        : undefined;
    })
    .filter(
      (
        item,
      ): item is { slotId: string; slotName: string; option: Option } =>
        Boolean(item),
    );
}

export function ConfiguratorPage() {
  const [selectedRoom, setSelectedRoom] = useState<TemplateId>(firstTemplate.id);
  const [selectedOptionsBySlot, setSelectedOptionsBySlot] =
    useState<SelectedOptionsBySlot>(getTemplateDefaults(firstTemplate));
  const [selectedCategory, setSelectedCategory] = useState(
    firstTemplate.slots[0].id,
  );
  const [selectedPreviewKey, setSelectedPreviewKey] = useState("default");
  const [selectedCurrency, setSelectedCurrency] =
    useState<CurrencyCode>("IDR");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const template =
    roomTemplates.find((room) => room.id === selectedRoom) ?? firstTemplate;
  const selectedLineItems = useMemo(
    () => getSelectedLineItems(selectedOptionsBySlot, template),
    [selectedOptionsBySlot, template],
  );
  const selectedItems = selectedLineItems.map((item) => item.option);
  const monthlyTotal = useMemo(
    () => calculateMonthlyTotal(selectedItems),
    [selectedItems],
  );
  const activeSlot =
    template.slots.find((slot) => slot.id === selectedCategory) ??
    template.slots[0];
  const previewSrc =
    template.previewImages[selectedPreviewKey] ?? template.previewImages.default;

  function updateRoom(roomId: TemplateId) {
    const nextTemplate =
      roomTemplates.find((room) => room.id === roomId) ?? firstTemplate;
    setSelectedRoom(nextTemplate.id);
    setSelectedOptionsBySlot(getTemplateDefaults(nextTemplate));
    setSelectedCategory(nextTemplate.slots[0].id);
    setSelectedPreviewKey("default");
  }

  function selectProduct(slotId: string, option: Option) {
    setSelectedOptionsBySlot((current) => ({
      ...current,
      [slotId]: option.id,
    }));
    setSelectedPreviewKey(option.previewImageKey);
  }

  function removeProduct(slotId: string) {
    setSelectedOptionsBySlot((current) => {
      const next = { ...current };
      delete next[slotId];
      return next;
    });
    setSelectedPreviewKey("default");
  }

  function completeInquiry() {
    setQuoteOpen(false);
    setSuccessOpen(true);
  }

  return (
    <main id="workspace-designer" className="min-h-screen">
      <AppHeader />
      <LivePreview template={template} previewSrc={previewSrc} />

      <section className="mx-auto grid w-full max-w-[1880px] gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[360px_minmax(0,1fr)_380px] lg:px-12">
        <RoomSelector
          rooms={roomTemplates}
          selectedRoom={selectedRoom}
          onSelect={updateRoom}
        />

        <div className="min-w-0 space-y-8">
          <ConfigurationChips
            template={template}
            selectedItems={selectedLineItems}
            onRemove={removeProduct}
          />

          <section>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold">
                  3. Customize Your Setup
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
                  Choose polished variants that map to cinematic room scenes.
                </p>
              </div>
              <p className="hidden text-sm font-extrabold text-[var(--green-dark)] sm:block">
                {formatPrice(monthlyTotal, selectedCurrency)}/mo
              </p>
            </div>

            <CategoryTabs
              slots={template.slots}
              selectedSlotId={activeSlot.id}
              onSelect={setSelectedCategory}
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {activeSlot.availableOptions.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={selectedCurrency}
                  selected={selectedOptionsBySlot[activeSlot.id] === product.id}
                  onSelect={() => selectProduct(activeSlot.id, product)}
                />
              ))}
            </div>
          </section>
        </div>

        <SetupSummary
          total={monthlyTotal}
          currency={selectedCurrency}
          onCurrencyChange={setSelectedCurrency}
          onQuote={() => setQuoteOpen(true)}
        />
      </section>

      <QuoteModal
        open={quoteOpen}
        total={monthlyTotal}
        currency={selectedCurrency}
        onClose={() => setQuoteOpen(false)}
        onSuccess={completeInquiry}
      />
      <SuccessState open={successOpen} onClose={() => setSuccessOpen(false)} />
    </main>
  );
}
