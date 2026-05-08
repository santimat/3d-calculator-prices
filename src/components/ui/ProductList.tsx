import type { Product } from "@components/ui/types.ts";
import { ProductCard } from "@/components/ui/ProductCard";

export function PrintList({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
