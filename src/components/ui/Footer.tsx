import { ArchiveIcon } from "@icons/Archive.tsx";
import { CalculatorIcon } from "@icons/Calculator.tsx";
import { ChartIcon } from "@icons/Chart.tsx";
import { Link } from "./Link";

const footerItems = [
  {
    icon: ArchiveIcon,
    label: "Gestor",
    path: "/",
  },
  {
    path: "/calculadora",
    icon: CalculatorIcon,
    label: "Calculadora",
  },
  {
    icon: ChartIcon,
    label: "Estadísticas",
    path: "/estadisticas",
  },
];

export function Footer() {
  return (
    <footer className="fixed w-full bottom-0 py-2 bg-neutral/30 border-t border-neutral/60">
      <nav>
        <ul className="flex justify-around">
          {footerItems.map((item) => (
            <li key={item.label}>
              <Link to={item.path}>
                <item.icon />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
