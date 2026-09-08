import { create } from "zustand";

export type CursorVariant =
  | "default"
  | "pointer"
  | "language"
  | "theme"
  | "discovery"
  | "path"
  | "filter";

type State = {
  cursor: CursorVariant;
};

type Action = {
  setCursor: (cursor: CursorVariant) => void;
  resetCursor: () => void;
};

export const useCursorStore = create<State & Action>()((set) => ({
  cursor: "default",
  setCursor: (cursor) =>
    set((state) => (state.cursor === cursor ? state : { cursor })),
  resetCursor: () =>
    set((state) =>
      state.cursor === "default" ? state : { cursor: "default" }
    ),
}));
