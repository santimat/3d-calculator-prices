import { Header } from "@/components/ui/Header";
import { PrintList } from "@/components/ui/PrintList";
import { Searcher } from "@/components/ui/Searcher";
import type { Print } from "@/components/ui/types";

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

export function HomePage() {
  return (
    <>
      <Header
        title="Gestor de impresiones"
        description="Gestiona tus impresiones y calcula los precios de tus productos"
      />
      <main className="my-8 max-w-[85%] mx-auto flex flex-col gap-8">
        <Searcher />
        <PrintList prints={mockPrints} />
      </main>
    </>
  );
}
