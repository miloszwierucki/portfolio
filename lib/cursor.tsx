import { Languages, MousePointer2, Palette, Pointer } from "lucide-react";
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
