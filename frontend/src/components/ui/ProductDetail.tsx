import { InfoIcon } from "@icons/Info";
import { PenIcon } from "@icons/Pen";
import { useProductStore } from "@store/printStore";
import type { Product } from "@lib/types";
import {
  formatCurrency,
  formatTime,
  formatWeight,
  calculateMaterialCost,
  calculateEnergyCost,
} from "@/lib/utils";

interface ProductDetailProps {
  productId: string;
}

export function ProductDetail({ productId }: ProductDetailProps) {
  // get method but no suscribe to changes, prevents unnecessary re-renders
  const { findProductById } = useProductStore.getState();
  const product: Product | null = findProductById(productId);

  if (!product) {
    return (
      <div className="p-8 flex justify-center items-center">
        <p className="text-red-500 text-xl font-bold">Producto no encontrado</p>
      </div>
    );
  }

  const {
    name,
    material,
    materialAmount,
    printingHours,
    printingMinutes,
    img,
  } = product;
  const materialCost = calculateMaterialCost(materialAmount);
  const energyCost = calculateEnergyCost(printingHours * 60 + printingMinutes);
  const estimatedTotalCost = materialCost + energyCost;

  return (
    <article className="bg-tertiary p-4 shadow-2xl border border-neutral/50">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <InfoIcon className="text-neutral" />
          <h2 className="uppercase">{name}</h2>
        </div>
      </div>
      <div className="border-t border-b py-4">
        <div className="mb-4 flex gap-4 border-neutral/50 p-2 items-center  border">
          <div className="w-30 border">
            <img className="saturate-0" src={img} alt={`Imagen de ${name}`} />
          </div>
          <div>
            <p className="uppercase text-neutral">Especificaciones</p>
            <ul>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">Material:</span>
                <p>{material}</p>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">Cant. de material:</span>
                <p>{formatWeight(materialAmount)}</p>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">
                  Tiempo de impresión:
                </span>
                <p>{formatTime(printingHours, printingMinutes)}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" border-neutral/50 border p-2 text-neutral">
          <p className="border-b border-neutral/50 uppercase">Costos</p>
          <ul className="border-b border-neutral/50 py-2">
            <li className="flex gap-2 items-center justify-between">
              <span>Costo material</span>
              <p className="text-black">{formatCurrency(materialCost)}</p>
            </li>
            <li className="flex gap-2 items-center justify-between">
              <span>Costo de energía</span>
              <p className="text-black">{formatCurrency(energyCost)}</p>
            </li>
          </ul>
          <div className="flex justify-between text-xl text-secondary pt-2">
            <span>Total Estimado</span>
            <p>{formatCurrency(estimatedTotalCost)}</p>
          </div>
        </div>
      </div>
      <div className="pt-4 flex justify-end text-sm">
        <button className="py-2 px-4 bg-secondary text-white flex items-center gap-2 hover:cursor-pointer hover:scale-105 transition-transform">
          <PenIcon size={15} />
          Editar
        </button>
      </div>
    </article>
  );
}
