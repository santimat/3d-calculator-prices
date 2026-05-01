export function Header() {
  return (
    <header className="p-4">
      <h1 className="font-bold text-3xl">Gestor de impresiones</h1>
      <p className="text-pretty">
        Gestiona tus impresiones y calcula los precios de tus productos
      </p>
      <button className="bg-secondary p-2 border text-primary mt-4 w-full hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
        Añadir nuevo modelo
      </button>
    </header>
  );
}
