import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ConfigState {
  materialPricePerKG: number;
  pricekWh: number;
}

interface ConfigActions {
  updateConfig: (config: Partial<ConfigState>) => void;
}

interface DefaultConfig extends ConfigState, ConfigActions {}

export const useDefaultConfigStore = create<DefaultConfig>()(
  persist(
    (set) => ({
      materialPricePerKG: 25000,
      pricekWh: 150,
      // Partial<> allows receive just the propertias that exist on ConfigState
      updateConfig: (config: Partial<ConfigState>) => {
        set(() => config);
      },
    }),
    {
      name: "default-config",
    },
  ),
);
