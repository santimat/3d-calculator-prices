import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@lib/types";
import { useDefaultConfigStore } from "@store/defaultConfigStore.ts";

interface ProductState {
  products: Product[];
}

interface ProductActions {
  addPrint: (product: Product) => void;
  findProductById: (id: string) => Product | null;
}

interface ProductStore extends ProductState, ProductActions {}

const exampleProduct: Product = {
  id: "1",
  name: "Producto de ejemplo",
  material: "PLA",
  materialAmount: 100,
  printingHours: 1,
  printingMinutes: 30,
  img: "https://i.pinimg.com/1200x/ee/c2/93/eec293754c9ce69e4c88cc8ac9be27d0.jpg",
  createdAt: new Date(),
};

export const useProductStore = create<ProductStore>()(
  // persist handles localStorage synching
  persist(
    (set, get) => ({
      products: [exampleProduct],
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
