import { ClockIcon } from "@icons/Clock";
import type { Print } from "@components/ui/types.tsx";
import { formatDate, formatWeight } from "@lib/utils";

export function PrintCard({
  id,
  name,
  material,
  materialAmount,
  createdAt,
  cost,
  img,
  printTime,
}: Print) {
  return (
    <article className="bg-neutral/15 p-4 border border-neutral/50 hover:scale-102 transition-transform">
      <a href={`/${id}`}>
        <div>
          <div className="flex gap-4">
            <div>
              <img src={img} alt={name} className="saturate-0 w-20" />
            </div>
            <div className="relative w-full">
              <div>
                <span className="bg-secondary/70 py-0.5 px-2 rounded-xl absolute right-0 top-0 text-xs uppercase">
                  {material}
                </span>
              </div>
              <h3 className="uppercase text-xl hover:underline">{name}</h3>
              <div className="flex items-center mt-2">
                <ClockIcon className="inline-block mr-1" size={16} />
                <span className="text-neutral text-sm">
                  {formatDate(createdAt)}
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-dashed border-neutral mt-4">
            <ul className="flex justify-between mt-4">
              <li>
                <span className="text-neutral text-md">Material</span>
                <p>{formatWeight(materialAmount)}</p>
              </li>
              <li>
                <span className="text-neutral text-md">Tiempo Imp.</span>
                <p>{printTime}h</p>
              </li>
              <li>
                <span className="text-neutral text-md">Costo</span>
                <p className="text-secondary">${cost.toFixed(2)}</p>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </article>
  );
}
