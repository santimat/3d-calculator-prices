import { useLocation } from "react-router-dom";

export function Header({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const isHomePage = useLocation().pathname === "/";
  return (
    <header className="p-4">
      <h1 className="font-bold text-3xl">{title}</h1>
      {description && <p className="text-sm text-neutral">{description}</p>}
      {isHomePage && (
        <button className="bg-secondary p-2 border text-primary mt-4 w-full hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
          Añadir nuevo modelo
        </button>
      )}
    </header>
  );
}
