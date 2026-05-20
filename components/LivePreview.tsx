"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Download, MapPin, Share2 } from "lucide-react";
import type {
  Option,
  RoomTemplate,
  SelectedOptionsBySlot,
  TemplateId,
} from "@/types/product";
import { ObjectLayer } from "./ObjectLayer";

type LivePreviewProps = {
  template: RoomTemplate;
  selectedOptionsBySlot: SelectedOptionsBySlot;
};

const sceneLayout: Record<TemplateId, Record<string, { left: string; top: string; width: string; zIndex: number }>> = {
  workstation: {
    storage: { left: "10%", top: "58%", width: "22%", zIndex: 10 },
    plant: { left: "16%", top: "44%", width: "16%", zIndex: 25 },
    desk: { left: "36%", top: "50%", width: "40%", zIndex: 20 },
    chair: { left: "44%", top: "62%", width: "24%", zIndex: 35 },
    monitor: { left: "48%", top: "34%", width: "22%", zIndex: 40 },
    lamp: { left: "64%", top: "28%", width: "16%", zIndex: 30 },
  },
  "living-room": {
    sofa: { left: "34%", top: "48%", width: "48%", zIndex: 20 },
    "coffee-table": { left: "46%", top: "66%", width: "24%", zIndex: 35 },
    tv: { left: "52%", top: "22%", width: "20%", zIndex: 45 },
    "bean-bag": { left: "18%", top: "60%", width: "18%", zIndex: 25 },
    console: { left: "42%", top: "24%", width: "16%", zIndex: 40 },
    lighting: { left: "10%", top: "26%", width: "18%", zIndex: 15 },
  },
  garage: {
    "main-vehicle": { left: "30%", top: "46%", width: "42%", zIndex: 20 },
    "secondary-vehicle": { left: "10%", top: "60%", width: "20%", zIndex: 15 },
    helmet: { left: "64%", top: "36%", width: "16%", zIndex: 35 },
    tools: { left: "62%", top: "54%", width: "18%", zIndex: 30 },
    storage: { left: "72%", top: "48%", width: "18%", zIndex: 25 },
    accessories: { left: "56%", top: "68%", width: "20%", zIndex: 40 },
  },
};

export function LivePreview({ template, selectedOptionsBySlot }: LivePreviewProps) {
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

          <div className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-white/15 bg-[var(--surface)] shadow-[inset_0_0_80px_rgba(0,0,0,0.12)]">
            <Image
              src={template.backgroundAsset}
              alt={`${template.name} room background`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,17,0.06),rgba(16,20,16,0.42))]" />

            <AnimatePresence mode="popLayout">
              {selectedObjects.map(({ slot, option }) => {
                const position = sceneLayout[template.id]?.[slot.id];

                if (!position) {
                  return null;
                }

                return (
                  <motion.div
                    key={`${slot.id}-${option.id}`}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="absolute overflow-hidden rounded-[28px]"
                    style={{
                      left: position.left,
                      top: position.top,
                      width: position.width,
                      aspectRatio: "1 / 1.05",
                      zIndex: position.zIndex,
                    }}
                  >
                    <ObjectLayer
                      slotId={slot.id}
                      optionId={option.id}
                      optionName={option.name}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <div className="absolute bottom-5 left-5 right-5 rounded-[28px] border border-white/20 bg-white/15 p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
                Realtime asset composition
              </p>
              <p className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                {template.name} preview
              </p>
              <p className="mt-2 text-sm leading-6 text-white/80">
                Change a slot on the left and see the room update immediately in a layered scene.
              </p>
            </div>
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
  icon: (props: { size: number }) => JSX.Element;
  label: string;
}) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
      <Icon size={16} />
      {label}
    </button>
  );
}
