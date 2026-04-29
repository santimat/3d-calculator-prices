import { PrinterIcon } from "@icons/Printer";

export function Header() {
  return (
    <header className="bg-secondary flex gap-4 text-primary py-6 px-4">
      <div>
        <PrinterIcon size={50} />
      </div>
      <div>
        <h1 className="font-bold text-2xl">Gestor de impresiones 3D</h1>
        <p className="text-xs text-gray-400 opacity-70">
          Gestiona y calcula precios de productos 3D
        </p>
      </div>
    </header>
  );
}
