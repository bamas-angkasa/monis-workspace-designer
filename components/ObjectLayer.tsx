import Image from "next/image";
import type { CSSProperties } from "react";
import type { TemplateId } from "@/types/product";

type ObjectLayerProps = {
  src: string;
  optionName: string;
  optionId: string;
  slotId: string;
  templateId: TemplateId;
};

type Placement = Pick<
  CSSProperties,
  "height" | "left" | "top" | "transform" | "width"
>;

const workstationPlacements: Record<string, Placement> = {
  desk: { left: "25.7%", top: "38.8%", width: "50.2%", height: "45.7%" },
  monitor: { left: "37.4%", top: "31.9%", width: "25.7%", height: "25.5%" },
  lamp: { left: "58.9%", top: "33.5%", width: "9.6%", height: "27.6%" },
  plant: { left: "57.7%", top: "43.6%", width: "6.9%", height: "12.2%" },
  storage: { left: "57.7%", top: "55.3%", width: "9.6%", height: "23.4%" },
  chair: { left: "35.6%", top: "42.5%", width: "20.3%", height: "47.8%" },
};

const fallbackPlacement: Placement = {
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "34%",
  height: "52%",
};

function getPlacement(templateId: TemplateId, slotId: string): Placement {
  if (templateId === "workstation") {
    return workstationPlacements[slotId] ?? fallbackPlacement;
  }

  return fallbackPlacement;
}

export function ObjectLayer({
  src,
  optionName,
  optionId,
  slotId,
  templateId,
}: ObjectLayerProps) {
  const placement = getPlacement(templateId, slotId);

  return (
    <div
      className="absolute"
      data-option-id={optionId}
      style={placement}
      title={optionName}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-contain"
      />
    </div>
  );
}
