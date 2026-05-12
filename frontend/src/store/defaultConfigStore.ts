import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DefaultConfig {
  materialPrice?: number;
  pricekWh?: number;
  updateConfig: (config: DefaultConfig) => void;
  getMaterialCost: (materialAmount: number) => number;
}

export const useDefaultConfigStore = create<DefaultConfig>()(
  persist(
    (set, get) => ({
      materialPrice: 25000,
      pricekWh: 150,
      updateConfig: (config: DefaultConfig) => {
        set((state) => ({ ...state, ...config }));
      },
      getMaterialCost: (materialAmount: number) => {
        const materialPrice = get().materialPrice || 0;
        return materialAmount * materialPrice;
      },
    }),
    {
      name: "default-config",
    },
  ),
);
