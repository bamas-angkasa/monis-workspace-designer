import Image from "next/image";

type ObjectLayerProps = {
  src: string;
  optionName: string;
};

export function ObjectLayer({ src, optionName }: ObjectLayerProps) {
  return (
    <div className="absolute inset-0" title={optionName}>
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
