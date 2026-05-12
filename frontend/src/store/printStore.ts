import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@lib/types";
import { useDefaultConfigStore } from "@store/defaultConfigStore.ts";

interface ProductStore {
  products: Product[];
  addPrint: (product: Product) => void;
  findProductById: (id: string) => Product | null;
}

const exampleProduct: Product = {
  id: "1",
  name: "Producto de ejemplo",
  material: "PLA",
  materialAmount: 100,
  printTime: 60,
  img: "https://via.placeholder.com/150",
  createdAt: new Date(),
};

export const useProductStore = create<ProductStore>()(
  // persist handles localStorage synching
  persist(
    (set, get) => ({
      products: [exampleProduct],
      getMaterialCost: (product: Product) => {
        // .getState() gives the value without suscribe to changes, prevents unnecessary re-renders
        const { materialPrice } = useDefaultConfigStore.getState();
        return product.materialAmount * (materialPrice || 0);
      },
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
