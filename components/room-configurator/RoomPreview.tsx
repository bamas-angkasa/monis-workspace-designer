"use client";

import Image from "next/image";
import { ObjectLayer } from "./ObjectLayer";
import type {
  AssetOption,
  LayerConfig,
  RoomConfig,
  SelectedRoomOptions,
} from "@/src/types/room-configurator";

type RoomPreviewProps<TKey extends string> = {
  room: RoomConfig<TKey>;
  selected: SelectedRoomOptions<TKey>;
  layerPositions: Record<TKey, LayerConfig<TKey>>;
  layerOrder: TKey[];
};

function findSelectedOption<TKey extends string>(
  room: RoomConfig<TKey>,
  key: TKey,
  selectedId: string,
): AssetOption | undefined {
  return room.categories
    .find((category) => category.key === key)
    ?.options.find((option) => option.id === selectedId);
}

export function RoomPreview<TKey extends string>({
  room,
  selected,
  layerPositions,
  layerOrder,
}: RoomPreviewProps<TKey>) {
  return (
    <section className="min-w-0">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8f6f46]">
            {room.eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#f7f0df] sm:text-5xl lg:text-6xl">
            {room.name}
          </h1>
        </div>
        <div className="hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e9ddc5] backdrop-blur-md md:block">
          Live preview
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#efe4d0] p-3 shadow-[0_34px_90px_rgba(5,12,8,0.36)] sm:p-4">
        <div className="relative aspect-video overflow-hidden rounded-[20px] bg-[#d8c9af]">
          <Image
            src={room.background.src}
            alt={room.background.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 62vw"
            className="select-none object-cover"
            draggable={false}
          />

          {layerOrder.map((key) => {
            const option = findSelectedOption(room, key, selected[key]);
            const layer = layerPositions[key];

            if (!option || !layer) {
              return null;
            }

            return (
              <ObjectLayer
                key={`${key}-${option.id}`}
                option={option}
                layer={layer}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
