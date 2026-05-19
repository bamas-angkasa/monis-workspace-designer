"use client";

import Image from "next/image";
import {
  ArrowLeft,
  Box,
  Download,
  Expand,
  MapPin,
  Share2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { RoomTemplate } from "@/types/product";

type LivePreviewProps = {
  template: RoomTemplate;
  previewSrc: string;
};

export function LivePreview({ template, previewSrc }: LivePreviewProps) {
  return (
    <section className="relative overflow-hidden rounded-b-[34px] bg-[var(--foreground)] shadow-[0_30px_90px_rgba(35,30,24,0.24)]">
      <div className="relative h-[520px] sm:h-[620px] lg:h-[680px]">
        <Image
          key={previewSrc}
          src={previewSrc}
          alt={`${template.name} workspace rental preview`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,14,12,0.06),rgba(12,14,12,0.0)_42%,rgba(12,14,12,0.46))]" />

        <div className="absolute left-5 top-6 sm:left-10">
          <button className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/16 px-5 py-3 text-sm font-extrabold text-white shadow-sm backdrop-blur-md transition hover:bg-white/24">
            <ArrowLeft size={17} />
            Back to explore
          </button>
        </div>

        <div className="absolute right-5 top-6 flex gap-2 sm:right-10">
          <PreviewAction icon={Download} label="Download" />
          <PreviewAction icon={Share2} label="Share" />
        </div>

        <div className="absolute bottom-8 left-5 right-5 flex flex-col gap-4 sm:left-10 sm:right-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md rounded-3xl border border-white/24 bg-white/16 p-5 text-white shadow-[0_22px_60px_rgba(0,0,0,0.2)] backdrop-blur-md">
            <h1 className="font-serif text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              {template.name === "Workstation"
                ? "Professional Studio"
                : template.name}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/85">
              <MapPin size={16} />
              Canggu Workspace District
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <PreviewAction icon={Box} label="View in 3D" />
            <PreviewAction icon={Expand} label="Fullscreen" />
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
  icon: LucideIcon;
  label: string;
}) {
  return (
    <button className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/16 px-5 py-3 text-sm font-extrabold text-white shadow-sm backdrop-blur-md transition hover:bg-white/24">
      <Icon size={17} />
      {label}
    </button>
  );
}
