import { create } from "zustand";

type State = {
  theme: string;
};

type Action = {
  changeTheme: (theme: string) => void;
};

export const useThemeStore = create<State & Action>()((set) => ({
  theme: "system",
  changeTheme: (theme) => set(() => ({ theme: theme })),
}));
