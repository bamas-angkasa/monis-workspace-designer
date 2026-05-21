import Image from "next/image";
import type {
  AssetOption,
  LayerConfig,
} from "@/src/types/room-configurator";

type ObjectLayerProps<TKey extends string> = {
  option: AssetOption;
  layer: LayerConfig<TKey>;
};

export function ObjectLayer<TKey extends string>({
  option,
  layer,
}: ObjectLayerProps<TKey>) {
  return (
    <div
      className="absolute transition-opacity duration-300 ease-out"
      data-layer-key={layer.key}
      data-option-id={option.id}
      style={{ ...layer.style, zIndex: layer.zIndex }}
      title={option.name}
    >
      <Image
        src={option.src}
        alt=""
        width={900}
        height={900}
        sizes="(max-width: 768px) 100vw, 58vw"
        className="h-auto w-full select-none object-contain drop-shadow-[0_18px_28px_rgba(38,30,22,0.16)] transition duration-300"
        draggable={false}
      />
    </div>
  );
}
