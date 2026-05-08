import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@components/ui/types.tsx";

interface ProductStore {
  products: Product[];
  addPrint: (product: Product) => void;
  findProductById: (id: string) => Product | null;
}

export const useProductStore = create<ProductStore>()(
  // persist handles localStorage synching
  persist(
    (set, get) => ({
      products: [],
      addPrint: (product: Product) => {
        const { products } = get();
        set({ products: [...products, product] });
      },
      findProductById: (id: string) =>
        get().products.find((product) => product.id == id) || null,
    }),
    {
      // just save products on localStorage with "saved-products" key
      name: "saved-products",
      partialize: (state) => state.products,
    },
  ),
);
