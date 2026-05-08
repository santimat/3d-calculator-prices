import { create } from "zustand";
import type { Product } from "@components/ui/types.tsx";

interface ProductStore {
  products: Product[];
  addPrint: (product: Product) => void;
}

export const useProductStore = create<ProductStore>()((set, get) => ({
  products: [],
  addPrint: (product: Product) => {
    const { products } = get();
    set({ products: [...products, product] });
  },
}));
