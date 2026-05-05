import type { Print } from "@components/ui/types.ts";
import { PrintCard } from "@components/ui/Print.tsx";

const mockPrints: Print[] = [
  {
    id: "1",
    name: "Turbina housing",
    material: "PLA",
    cost: 28.0,
    printTime: 2.5,
    materialAmount: 15,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbCOTvvZHlNOpsRfZydfX7HnxhZMRE4Azjv4M_hKzMHzIzHc43mvoY14Avs2D9x16lzeTLp8GUWWOwF8VWYqlzN8-27kKvspfNlR3OYyLeiOo0vC-irNYR9iquPO7T3P2qVX3jopL7QTQmrbv0Ms_fZ-dt6HeShyIpr-evz6Q1G12S6AyAlRaxxyyA0ZVo1XGkCTrCR99vnBBaG2Dgg7NJhljdHL4egNSzcTnRF1A0q0MWmXDDqytO15DvNhMpWkG6TYA-ypIBEG4",
    createdAt: new Date(),
  },
];
export function PrintList({ prints }: { prints: Print[] }) {
  return (
    <div>
      {mockPrints.map((print) => (
        <PrintCard key={print.id} {...print} />
      ))}
    </div>
  );
}
