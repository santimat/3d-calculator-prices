import type { Print } from "@components/ui/types.ts";
export function PrintList({ prints }: { prints: Print[] }) {
  return (
    <div className="border border-neutral">
      <article>
        <header className="flex gap-8 bg-neutral/10 p-2">
          <p className="uppercase text-neutral">previsualización</p>
          <p className="uppercase text-neutral">Nombre</p>
        </header>
        <main className="p-4">
          <ul></ul>
        </main>
      </article>
    </div>
  );
}
