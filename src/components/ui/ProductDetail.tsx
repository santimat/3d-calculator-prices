import { InfoIcon } from "@icons/Info.tsx";
import { PenIcon } from "@icons/Pen.tsx";
import { useProductStore } from "@store/printStore.ts";

interface ProductDetailProps {
  productId: string;
}

export function ProductDetail({ productId }: ProductDetailProps) {
  // get method but no suscribe to changes, prevents unnecessary re-renders
  const { findProductById } = useProductStore.getState();
  const product = findProductById(productId);

  if (!product) {
    return (
      <div className="p-8 flex justify-center items-center">
        <p className="text-red-500 text-xl font-bold">Producto no encontrado</p>
      </div>
    );
  }

  return (
    <article className="bg-tertiary p-4">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <InfoIcon className="text-neutral" />
          <h2 className="uppercase">{}</h2>
        </div>
      </div>
      <div className="border-t border-b py-4">
        <div className="mb-4 flex gap-4 border-neutral/50 p-2 items-center  border">
          <div className="w-30 border">
            <img className="saturate-0" src="" alt="" />
          </div>
          <div>
            <p className="uppercase text-neutral">Especificaciones</p>
            <ul>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">Material:</span>
                <p>{}</p>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">Cant. de material:</span>
                <p>{}</p>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">
                  Tiempo de impresión:
                </span>
                <p>{}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" border-neutral/50 border p-2 text-neutral">
          <p className="border-b border-neutral/50 uppercase">Costos</p>
          <ul className="border-b border-neutral/50 py-2">
            <li className="flex gap-2 items-center justify-between">
              <span>Costo material</span>
              <p className="text-black">{}</p>
            </li>
            <li className="flex gap-2 items-center justify-between">
              <span>Costo de energía</span>
              <p className="text-black">{}</p>
            </li>
          </ul>
          <div className="flex justify-between text-xl text-secondary pt-2">
            <span>Total Estimado</span>
            <p>{}</p>
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
