import { ArchiveIcon } from "@icons/Archive.tsx";
import { CalculatorIcon } from "../icons/Calculator";
import { ChartIcon } from "../icons/Chart";

const footerItems = [
  {
    icon: CalculatorIcon,
    label: "Calculadora",
  },
  {
    icon: ChartIcon,
    label: "Estadísticas",
  },
  {
    icon: ArchiveIcon,
    label: "Gestor",
  },
];

export function Footer() {
  return (
    <footer className="fixed w-full bottom-0 p-2 bg-neutral/30 border-t border-neutral/60">
      <nav>
        <ul className="flex justify-between">
          {footerItems.map((item) => (
            <li
              key={item.label}
              className="flex flex-col items-center uppercase text-sm text-neutral"
            >
              <item.icon />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
