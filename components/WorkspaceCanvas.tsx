"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { accessories, chairs, desks, roomTemplates } from "@/data/products";
import type { Product, TemplateId, WorkspaceConfig } from "@/types/product";

type WorkspaceCanvasProps = {
  config: WorkspaceConfig;
  onAccessoryToggle: (accessoryId: string) => void;
};

type Placement = {
  className: string;
  imageClassName?: string;
};

const appear = {
  initial: { opacity: 0, y: 18, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 12, scale: 0.96 },
  transition: { duration: 0.32, ease: "easeOut" as const },
};

const placements: Record<TemplateId, Record<string, Placement>> = {
  workstation: {
    "minimal-desk": {
      className: "bottom-[17%] left-[24%] z-20 h-[34%] w-[52%]",
    },
    "standing-desk": {
      className: "bottom-[16%] left-[22%] z-20 h-[36%] w-[56%]",
    },
    "ergonomic-chair": {
      className: "bottom-[8%] left-[42%] z-30 h-[38%] w-[24%]",
    },
    "premium-task-chair": {
      className: "bottom-[8%] left-[42%] z-30 h-[38%] w-[24%]",
    },
    monitor: {
      className: "bottom-[43%] left-[43%] z-30 h-[24%] w-[26%]",
    },
    keyboard: {
      className: "bottom-[36%] left-[43%] z-40 h-[9%] w-[22%]",
      imageClassName: "rotate-[1deg]",
    },
    "desk-lamp": {
      className: "bottom-[35%] right-[23%] z-40 h-[28%] w-[15%]",
    },
    plant: {
      className: "bottom-[38%] left-[26%] z-40 h-[18%] w-[12%]",
    },
    "coffee-machine": {
      className: "bottom-[20%] right-[8%] z-30 h-[24%] w-[16%]",
    },
    whiteboard: {
      className: "right-[8%] top-[17%] z-20 h-[24%] w-[22%]",
    },
  },
  "game-room": {
    "gaming-desk": {
      className: "bottom-[18%] left-[26%] z-20 h-[34%] w-[54%]",
      imageClassName: "brightness-75 contrast-125",
    },
    "gaming-chair": {
      className: "bottom-[7%] left-[34%] z-30 h-[42%] w-[25%]",
      imageClassName: "brightness-75 contrast-125",
    },
    monitor: {
      className: "bottom-[44%] left-[40%] z-30 h-[26%] w-[34%]",
      imageClassName: "brightness-90 contrast-125",
    },
    keyboard: {
      className: "bottom-[36%] left-[45%] z-40 h-[9%] w-[22%]",
      imageClassName: "rotate-[1deg] brightness-75 contrast-125",
    },
    "game-console": {
      className: "bottom-[31%] right-[24%] z-40 h-[12%] w-[14%]",
    },
    "gaming-headset": {
      className: "bottom-[35%] right-[15%] z-40 h-[14%] w-[12%]",
    },
    "ambient-light": {
      className: "bottom-[50%] left-[18%] z-30 h-[16%] w-[18%]",
    },
    plant: {
      className: "bottom-[26%] right-[8%] z-30 h-[24%] w-[14%]",
    },
    "coffee-machine": {
      className: "bottom-[21%] left-[12%] z-30 h-[20%] w-[13%]",
    },
  },
  "living-room": {
    "smart-tv": {
      className: "bottom-[42%] left-[38%] z-20 h-[26%] w-[34%]",
    },
    "lounge-speaker": {
      className: "bottom-[24%] right-[22%] z-30 h-[22%] w-[15%]",
    },
    "bean-bag": {
      className: "bottom-[14%] left-[28%] z-30 h-[28%] w-[22%]",
    },
    "game-console": {
      className: "bottom-[29%] left-[52%] z-30 h-[12%] w-[16%]",
    },
    plant: {
      className: "bottom-[28%] right-[10%] z-30 h-[24%] w-[14%]",
    },
    "coffee-machine": {
      className: "bottom-[25%] left-[12%] z-30 h-[20%] w-[13%]",
    },
    "garage-projector": {
      className: "bottom-[46%] right-[18%] z-30 h-[16%] w-[15%]",
    },
  },
  garage: {
    "tool-shelf": {
      className: "bottom-[25%] right-[12%] z-30 h-[34%] w-[25%]",
    },
    "walking-pad": {
      className: "bottom-[12%] left-[30%] z-30 h-[24%] w-[34%]",
    },
    "dumbbell-set": {
      className: "bottom-[12%] left-[10%] z-30 h-[20%] w-[22%]",
    },
    "garage-projector": {
      className: "bottom-[45%] left-[46%] z-30 h-[18%] w-[16%]",
    },
    "coffee-machine": {
      className: "bottom-[28%] left-[16%] z-30 h-[20%] w-[13%]",
    },
  },
};

function RoomItem({
  product,
  placement,
}: {
  product: Product;
  placement: Placement;
}) {
  return (
    <motion.div
      key={product.id}
      className={`absolute ${placement.className}`}
      {...appear}
    >
      <Image
        src={product.imageSrc}
        alt={product.name}
        fill
        sizes="(min-width: 1024px) 28vw, 42vw"
        className={`object-contain drop-shadow-[0_24px_24px_rgba(25,28,27,0.28)] ${
          placement.imageClassName ?? ""
        }`}
      />
    </motion.div>
  );
}

function AddCard({
  product,
  className,
  onToggle,
}: {
  product: Product;
  className: string;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`absolute z-50 rounded-2xl border border-dashed border-[rgba(25,28,27,0.42)] bg-white/62 p-3 text-left shadow-[0_18px_36px_rgba(25,28,27,0.14)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/82 ${className}`}
    >
      <span className="relative mx-auto block h-16 w-20">
        <Image
          src={product.imageSrc}
          alt=""
          fill
          sizes="80px"
          className="object-contain"
        />
      </span>
      <span className="mt-2 flex items-center justify-center gap-1 rounded-xl border border-[var(--line)] bg-white px-2 py-1.5 text-xs font-extrabold">
        <Plus size={14} />
        Add {product.name}
      </span>
    </button>
  );
}

export function WorkspaceCanvas({
  config,
  onAccessoryToggle,
}: WorkspaceCanvasProps) {
  const template =
    roomTemplates.find((option) => option.id === config.templateId) ??
    roomTemplates[0];
  const templatePlacements = placements[template.id];
  const selectedProducts = [
    desks.find((product) => product.id === config.deskId),
    chairs.find((product) => product.id === config.chairId),
    ...accessories.filter((product) => config.accessoryIds.includes(product.id)),
  ].filter((product): product is Product => Boolean(product));
  const availableAdds = accessories
    .filter((product) => product.templateIds.includes(template.id))
    .filter((product) => !config.accessoryIds.includes(product.id))
    .slice(0, 4);

  return (
    <div className="relative min-h-[680px] overflow-hidden rounded-[32px] border border-[rgba(255,255,255,0.48)] bg-[var(--foreground)] shadow-[0_30px_90px_rgba(25,28,27,0.18)] lg:min-h-[760px]">
      <Image
        src={template.imageSrc}
        alt={`${template.name} template`}
        fill
        priority
        sizes="(min-width: 1024px) 70vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,247,0.1)_0%,rgba(25,28,27,0.02)_44%,rgba(25,28,27,0.28)_100%)]" />

      <div className="absolute left-6 top-6 z-50 rounded-full border border-white/40 bg-white/24 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm backdrop-blur-md">
        {template.name}
      </div>

      <AnimatePresence>
        {selectedProducts.map((product) => {
          const placement = templatePlacements[product.id];

          return placement ? (
            <RoomItem
              key={`${template.id}-${product.id}`}
              product={product}
              placement={placement}
            />
          ) : null;
        })}
      </AnimatePresence>

      {availableAdds.map((product, index) => (
        <AddCard
          key={product.id}
          product={product}
          className={
            [
              "right-[5%] top-[15%] w-36",
              "right-[5%] top-[36%] w-36",
              "right-[22%] top-[15%] w-36",
              "right-[22%] top-[36%] w-36",
            ][index]
          }
          onToggle={() => onAccessoryToggle(product.id)}
        />
      ))}

      <div className="absolute inset-x-6 bottom-6 z-50 rounded-3xl border border-white/42 bg-white/58 p-3 shadow-[0_20px_46px_rgba(25,28,27,0.16)] backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {selectedProducts.map((product) => (
            <span
              key={`chip-${product.id}`}
              className="rounded-full bg-white/82 px-3 py-2 text-xs font-extrabold text-[var(--foreground)] shadow-sm"
            >
              {product.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
