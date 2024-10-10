import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface ClickedLink {
  section: string;
  id: number;
}

export interface ClickedLinks {
  clickedLinks: ClickedLink[];
  onClickedLink: (clickedLink: ClickedLink) => Promise<void>;
}

export const useClickedLinks = create<ClickedLinks, [["zustand/immer", never]]>(
  immer((set) => ({
    clickedLinks: [],
    async onClickedLink(clickedLink: ClickedLink) {
      set((state) => {
        state.clickedLinks = [...state.clickedLinks, clickedLink];
      });
    },
  })),
);
