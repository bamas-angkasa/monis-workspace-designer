"use client";

import { useEffect, useMemo, useState } from "react";
import { OptionPanel } from "./OptionPanel";
import { RoomPreview } from "./RoomPreview";
import type {
  LayerConfig,
  RoomConfig,
  SelectedRoomOptions,
} from "@/src/types/room-configurator";

type WorkspaceConfiguratorPageProps<TKey extends string> = {
  room: RoomConfig<TKey>;
  layerPositions: Record<TKey, LayerConfig<TKey>>;
  layerOrder: TKey[];
};

function isValidSelection<TKey extends string>(
  room: RoomConfig<TKey>,
  value: unknown,
): value is SelectedRoomOptions<TKey> {
  if (!value || typeof value !== "object") {
    return false;
  }

  const selection = value as Record<string, unknown>;

  return room.categories.every((category) =>
    category.options.some((option) => option.id === selection[category.key]),
  );
}

export function WorkspaceConfiguratorPage<TKey extends string>({
  room,
  layerPositions,
  layerOrder,
}: WorkspaceConfiguratorPageProps<TKey>) {
  const [selected, setSelected] = useState<SelectedRoomOptions<TKey>>(
    room.initialSelected,
  );
  const [activeCategory, setActiveCategory] = useState<TKey>(
    room.categories[0].key,
  );
  const [copied, setCopied] = useState(false);
  const [hasRestored, setHasRestored] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(room.storageKey);

      if (stored) {
        const parsed = JSON.parse(stored);

        if (isValidSelection(room, parsed)) {
          setSelected(parsed);
        }
      }
    } catch {
      window.localStorage.removeItem(room.storageKey);
    } finally {
      setHasRestored(true);
    }
  }, [room]);

  useEffect(() => {
    if (!hasRestored) {
      return;
    }

    window.localStorage.setItem(room.storageKey, JSON.stringify(selected));
  }, [hasRestored, room.storageKey, selected]);

  const shareJson = useMemo(
    () =>
      JSON.stringify(
        {
          roomId: room.id,
          roomName: room.name,
          selected,
        },
        null,
        2,
      ),
    [room.id, room.name, selected],
  );

  function selectOption(category: TKey, optionId: string) {
    setSelected((current) => ({
      ...current,
      [category]: optionId,
    }));
    setCopied(false);
  }

  function resetConfiguration() {
    setSelected(room.initialSelected);
    setActiveCategory(room.categories[0].key);
    setCopied(false);
  }

  function randomizeConfiguration() {
    const next = room.categories.reduce((selection, category) => {
      const randomIndex = Math.floor(Math.random() * category.options.length);
      selection[category.key] = category.options[randomIndex].id;
      return selection;
    }, {} as SelectedRoomOptions<TKey>);

    setSelected(next);
    setCopied(false);
  }

  async function copyJson() {
    try {
      await navigator.clipboard.writeText(shareJson);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#102019] text-[#f7f0df]">
      <div className="min-h-screen bg-[linear-gradient(145deg,#102019_0%,#1d3528_42%,#7a5b37_100%)]">
        <div className="mx-auto grid min-h-screen w-full max-w-[1680px] gap-6 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-8 lg:py-8">
          <div className="flex min-w-0 flex-col justify-center">
            <RoomPreview
              room={room}
              selected={selected}
              layerPositions={layerPositions}
              layerOrder={layerOrder}
            />
            <p className="mt-5 max-w-3xl text-sm font-semibold leading-7 text-[#e4d5ba]">
              {room.description}
            </p>
          </div>

          <div className="flex items-center lg:py-10">
            <OptionPanel
              room={room}
              selected={selected}
              activeCategory={activeCategory}
              shareJson={shareJson}
              copied={copied}
              onCategoryChange={setActiveCategory}
              onSelectOption={selectOption}
              onReset={resetConfiguration}
              onRandomize={randomizeConfiguration}
              onCopyJson={copyJson}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
