"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import type {
  Option,
  RoomTemplate,
  SelectedOptionsBySlot,
} from "@/types/product";
import { ObjectLayer } from "./ObjectLayer";

type LivePreviewProps = {
  template: RoomTemplate;
  selectedOptionsBySlot: SelectedOptionsBySlot;
};

export function LivePreview({ template, selectedOptionsBySlot }: LivePreviewProps) {
  const layerOrder: Record<string, number> = {
    desk: 1,
    storage: 2,
    monitor: 3,
    lamp: 4,
    plant: 5,
    chair: 8,
  };
  const selectedObjects = template.slots
    .map((slot) => ({
      slot,
      option: slot.availableOptions.find(
        (item) => item.id === selectedOptionsBySlot[slot.id],
      ),
    }))
    .filter(
      (
        item,
      ): item is { slot: typeof template.slots[number]; option: Option } =>
        Boolean(item.option),
    );
  const orderedObjects = selectedObjects
    .filter(({ option }) => Boolean(option.layerAsset))
    .sort(
      (a, b) => (layerOrder[a.slot.id] ?? 10) - (layerOrder[b.slot.id] ?? 10),
    );

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(231,219,190,0.18),_transparent_28%),linear-gradient(180deg,rgba(247,245,239,0.92),rgba(228,219,204,0.98))] pb-8 pt-10 shadow-[0_32px_100px_rgba(15,18,14,0.18)]">
      <div className="mx-auto grid max-w-[1880px] gap-8 px-5 sm:px-8 lg:grid-cols-[1.05fr_minmax(380px,0.95fr)] lg:px-12">
        <div className="space-y-6 text-[var(--foreground)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--green-soft)] bg-[var(--green-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--green-dark)]">
            Designer-first configurator
          </div>
          <div className="space-y-4">
            <h1 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">
              Build your dream room in real time.
            </h1>
            <p className="max-w-2xl text-sm font-semibold leading-7 text-[var(--muted)] sm:text-base">
              Swap furniture, style the scene, and preview your setup instantly with layered room composition. Monis turns setup design into an immersive lifestyle studio.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel-strong)] p-5 shadow-[0_20px_44px_rgba(35,30,24,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green-dark)]">
                Room type
              </p>
              <p className="mt-3 text-lg font-extrabold">{template.name}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{template.description}</p>
            </div>
            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel-strong)] p-5 shadow-[0_20px_44px_rgba(35,30,24,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--green-dark)]">
                Selected objects
              </p>
              <p className="mt-3 text-lg font-extrabold">{selectedObjects.length} items in scene</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Every slot is a replaceable asset layer, not a flat room image.
              </p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[var(--panel-strong)] p-5 shadow-[0_36px_110px_rgba(15,18,14,0.24)]">
          <div className="flex items-center justify-between gap-3 pb-4">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
              <ArrowLeft size={16} /> Back to explore
            </button>
            <div className="flex gap-2">
              <PreviewAction icon={Download} label="Download" />
              <PreviewAction icon={Share2} label="Share" />
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-[30px] border border-white/15 bg-[var(--surface)] shadow-[inset_0_0_80px_rgba(0,0,0,0.12)]">
            <Image
              src={template.backgroundAsset}
              alt={`${template.name} room preview`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />

            <AnimatePresence mode="popLayout">
              {orderedObjects.map(({ slot, option }) => (
                <motion.div
                  key={`${slot.id}-${option.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="absolute inset-0"
                  style={{ zIndex: layerOrder[slot.id] ?? 10 }}
                >
                  <ObjectLayer
                    src={option.layerAsset}
                    optionName={option.name}
                    optionId={option.id}
                    slotId={slot.id}
                    templateId={template.id}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function PreviewAction({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ size: number }>;
  label: string;
}) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
      <Icon size={16} />
      {label}
    </button>
  );
}
