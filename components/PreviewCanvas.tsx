"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { RoomTemplate, SelectedOptionsBySlot } from "@/types/product";
import { SelectedChips } from "./SelectedChips";
import { getSelectedOptions } from "@/data/products";

type PreviewCanvasProps = {
  template: RoomTemplate;
  selectedOptionsBySlot: SelectedOptionsBySlot;
};

function getPreviewKey(
  template: RoomTemplate,
  selectedOptionsBySlot: SelectedOptionsBySlot,
) {
  if (template.id === "workstation") {
    return `${selectedOptionsBySlot.chair}-${selectedOptionsBySlot.desk}`;
  }

  if (template.id === "living-room") {
    return `${selectedOptionsBySlot.sofa}-${selectedOptionsBySlot.tv}`;
  }

  return `${selectedOptionsBySlot["main-vehicle"]}-${selectedOptionsBySlot["secondary-vehicle"]}`;
}

export function PreviewCanvas({
  template,
  selectedOptionsBySlot,
}: PreviewCanvasProps) {
  const selectedItems = useMemo(
    () => getSelectedOptions(template, selectedOptionsBySlot),
    [template, selectedOptionsBySlot],
  );
  const previewKey = getPreviewKey(template, selectedOptionsBySlot);
  const previewSrc =
    template.previewImages[previewKey] ?? template.previewImages.default;
  const [failedSrc, setFailedSrc] = useState("");
  const activeSrc =
    failedSrc === previewSrc ? template.previewImages.default : previewSrc;

  return (
    <section className="grid gap-4">
      <div className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-white/60 bg-[var(--foreground)] shadow-[0_34px_96px_rgba(35,30,24,0.22)] sm:min-h-[620px] xl:min-h-[720px]">
        <Image
          key={activeSrc}
          src={activeSrc}
          alt={`${template.name} cinematic rental setup preview`}
          fill
          priority
          sizes="(min-width: 1280px) 48vw, 100vw"
          className="object-cover"
          onError={() => setFailedSrc(previewSrc)}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,12,0.04)_0%,rgba(11,14,12,0.0)_44%,rgba(11,14,12,0.22)_100%)]" />
        <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/24 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-md">
          {template.name}
        </div>
        <div className="absolute bottom-5 left-5 right-5 max-w-xl rounded-3xl border border-white/35 bg-white/20 p-4 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70">
            Fixed cinematic scene
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            {template.category}
          </h2>
        </div>
      </div>

      <SelectedChips items={selectedItems} />
    </section>
  );
}
