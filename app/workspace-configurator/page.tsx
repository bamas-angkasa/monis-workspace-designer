import type { Metadata } from "next";
import { WorkspaceConfiguratorPage } from "@/components/room-configurator/WorkspaceConfiguratorPage";
import { workstationRoomConfig } from "@/src/config/workstation-assets";
import {
  workstationLayerOrder,
  workstationLayerPositions,
} from "@/src/config/workstation-layer-position";

export const metadata: Metadata = {
  title: "Monis Workspace Configurator",
  description:
    "Customize a workstation room with live layered transparent PNG assets.",
};

export default function Page() {
  return (
    <WorkspaceConfiguratorPage
      room={workstationRoomConfig}
      layerPositions={workstationLayerPositions}
      layerOrder={workstationLayerOrder}
    />
  );
}
