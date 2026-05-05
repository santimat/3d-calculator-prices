import type { Print } from "@components/ui/types.ts";
import { PrintCard } from "@components/ui/Print.tsx";

export function PrintList({ prints }: { prints: Print[] }) {
  return (
    <div>
      {prints.map((print) => (
        <PrintCard key={print.id} {...print} />
      ))}
    </div>
  );
}
