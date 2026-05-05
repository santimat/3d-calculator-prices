import { create } from "zustand";
import type { Print } from "@components/ui/types.tsx";

interface PrintStore {
  prints: Print[];
}

export const usePrintStore = create<PrintStore>()((set) => ({
  prints: [],
}));
