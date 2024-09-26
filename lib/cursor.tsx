import {
  Footprints,
  Languages,
  MousePointer2,
  Palette,
  Pipette,
  Pointer,
  WandSparkles,
} from "lucide-react";

import { useCursorStore } from "@/store/useCursorStore";

export function pointerCursor() {
  useCursorStore.setState({ cursor: <Pointer size={28} strokeWidth={1} /> });
}

export function defaultCursor() {
  useCursorStore.setState({
    cursor: <MousePointer2 size={28} strokeWidth={1} />,
  });
}

export function languageCursor() {
  useCursorStore.setState({
    cursor: <Languages size={28} strokeWidth={1} />,
  });
}

export function themeCursor() {
  useCursorStore.setState({
    cursor: <Palette size={28} strokeWidth={1} />,
  });
}

export function discoveryCursor() {
  useCursorStore.setState({
    cursor: <WandSparkles size={28} strokeWidth={1} />,
  });
}

export function pathCursor() {
  useCursorStore.setState({
    cursor: <Footprints size={28} strokeWidth={1} />,
  });
}

export function filterCursor() {
  useCursorStore.setState({
    cursor: <Pipette size={28} strokeWidth={1} />,
  });
}
