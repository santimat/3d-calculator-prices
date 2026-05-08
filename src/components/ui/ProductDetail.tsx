import {
  formatCurrency,
  formatTime,
  formatWeight,
  calculateEnergyCost,
} from "@lib/utils.ts";
import { InfoIcon } from "@icons/Info.tsx";
import { DEFAULTS } from "@lib/defaults.ts";
import { PenIcon } from "@icons/Pen.tsx";

const testPrint = {
  id: "1",
  name: "Turbina housing",
  material: "PLA",
  printTime: 2.5,
  materialAmount: 15,
  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbCOTvvZHlNOpsRfZydfX7HnxhZMRE4Azjv4M_hKzMHzIzHc43mvoY14Avs2D9x16lzeTLp8GUWWOwF8VWYqlzN8-27kKvspfNlR3OYyLeiOo0vC-irNYR9iquPO7T3P2qVX3jopL7QTQmrbv0Ms_fZ-dt6HeShyIpr-evz6Q1G12S6AyAlRaxxyyA0ZVo1XGkCTrCR99vnBBaG2Dgg7NJhljdHL4egNSzcTnRF1A0q0MWmXDDqytO15DvNhMpWkG6TYA-ypIBEG4",
  createdAt: new Date(),
};

const materialCost = DEFAULTS.materialCost / testPrint.materialAmount;
export function ProductDetail() {
  return (
    <article className="bg-tertiary p-4">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <InfoIcon className="text-neutral" />
          <h2 className="uppercase">{testPrint.name}</h2>
        </div>
      </div>
      <div className="border-t border-b py-4">
        <div className="mb-4 flex gap-4 border-neutral/50 p-2 items-center  border">
          <div className="w-30 border">
            <img
              className="saturate-0"
              src={testPrint.img}
              alt={testPrint.name}
            />
          </div>
          <div>
            <p className="uppercase text-neutral">Especificaciones</p>
            <ul>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">Material:</span>
                <p>{testPrint.material}</p>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">Cant. de material:</span>
                <p>{formatWeight(testPrint.materialAmount)}</p>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-neutral text-sm">
                  Tiempo de impresión:
                </span>
                <p>{formatTime(testPrint.printTime)}</p>
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
              <p className="text-black">
                {formatCurrency(
                  calculateEnergyCost(testPrint.printTime, DEFAULTS.pricekWh),
                )}
              </p>
            </li>
          </ul>
          <div className="flex justify-between text-xl text-secondary pt-2">
            <span>Total Estimado</span>
            <p>
              {formatCurrency(
                materialCost +
                  calculateEnergyCost(testPrint.printTime, DEFAULTS.pricekWh),
              )}
            </p>
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
