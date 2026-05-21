"use client";

import { Copy, RotateCcw, Shuffle } from "lucide-react";
import { CategorySelector } from "./CategorySelector";
import { OptionCard } from "./OptionCard";
import type {
  RoomConfig,
  SelectedRoomOptions,
} from "@/src/types/room-configurator";

type OptionPanelProps<TKey extends string> = {
  room: RoomConfig<TKey>;
  selected: SelectedRoomOptions<TKey>;
  activeCategory: TKey;
  shareJson: string;
  copied: boolean;
  onCategoryChange: (category: TKey) => void;
  onSelectOption: (category: TKey, optionId: string) => void;
  onReset: () => void;
  onRandomize: () => void;
  onCopyJson: () => void;
};

export function OptionPanel<TKey extends string>({
  room,
  selected,
  activeCategory,
  shareJson,
  copied,
  onCategoryChange,
  onSelectOption,
  onReset,
  onRandomize,
  onCopyJson,
}: OptionPanelProps<TKey>) {
  const category =
    room.categories.find((item) => item.key === activeCategory) ??
    room.categories[0];

  const selectedSummary = room.categories
    .map((item) => {
      const option = item.options.find(
        (assetOption) => assetOption.id === selected[item.key],
      );

      return option ? `${item.name}: ${option.name}` : undefined;
    })
    .filter(Boolean);

  return (
    <aside className="rounded-[28px] border border-[#e1d2b9]/80 bg-[#fff8eb]/82 p-4 shadow-[0_24px_70px_rgba(12,20,14,0.2)] backdrop-blur-xl sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f6f46]">
            Object options
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-[#1c2d25]">
            Customize setup
          </h2>
        </div>
      </div>

      <div className="mt-5">
        <CategorySelector
          categories={room.categories}
          activeCategory={activeCategory}
          onSelect={onCategoryChange}
        />
      </div>

      <div className="mt-5 grid gap-3">
        {category.options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            selected={selected[category.key] === option.id}
            onSelect={() => onSelectOption(category.key, option.id)}
          />
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#decfb6] bg-white/70 px-4 py-3 text-sm font-extrabold text-[#23382e] transition hover:bg-white"
        >
          <RotateCcw size={16} />
          Reset
        </button>
        <button
          type="button"
          onClick={onRandomize}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#24513d] px-4 py-3 text-sm font-extrabold text-[#fff8eb] shadow-[0_14px_30px_rgba(36,81,61,0.24)] transition hover:bg-[#183d2e]"
        >
          <Shuffle size={16} />
          Randomize
        </button>
      </div>

      <div className="mt-5 rounded-2xl border border-[#decfb6] bg-white/55 p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-extrabold text-[#1c2d25]">
            Selected setup
          </p>
          <button
            type="button"
            onClick={onCopyJson}
            className="inline-flex items-center gap-2 rounded-full border border-[#decfb6] bg-[#fffaf1] px-3 py-2 text-xs font-extrabold text-[#24513d] transition hover:bg-white"
          >
            <Copy size={14} />
            {copied ? "Copied" : "Copy JSON"}
          </button>
        </div>
        <ul className="mt-3 space-y-2 text-sm font-semibold leading-5 text-[#685b49]">
          {selectedSummary.map((summary) => (
            <li key={summary}>{summary}</li>
          ))}
        </ul>
        <pre className="mt-4 max-h-36 overflow-auto rounded-xl bg-[#182d23] p-3 text-xs leading-5 text-[#f4ead7]">
          {shareJson}
        </pre>
      </div>
    </aside>
  );
}
