import { MousePointer2 } from "lucide-react";
import { create } from "zustand";

type State = {
  cursor: React.ReactNode;
};

type Action = {
  changeCursor: (cursor: React.ReactNode) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useCursorStore = create<State & Action>()((set) => ({
  cursor: <MousePointer2 size={28} strokeWidth={1} />,
  changeCursor: (cursor) => set(() => ({ cursor: cursor })),
}));
