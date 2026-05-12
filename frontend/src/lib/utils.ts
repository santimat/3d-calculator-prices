import { useDefaultConfigStore } from "@/store/defaultConfigStore";

export function formatWeight(amount: number): string {
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(2)}kg`;
  }
  return `${amount}g`;
}
export function formatDate(date: Date): string {
  const dateToString = date.toLocaleDateString("es-AR").replaceAll("/", "-");
  return `${dateToString}`;
}

export function formatCurrency(amount: number): string {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });
  return formatter.format(amount);
}

export function formatTime(hours: number, minutes: number): string {
  const days = hours >= 24 ? Math.floor(hours / 24) : 0;
  const remainingHours = hours % 24;
  const formattedTime = `${days > 0 ? `${days}d ` : ""}
  ${remainingHours > 0 ? `${remainingHours}h ` : ""}
  ${minutes > 0 ? `${minutes}m` : ""}`.trim();
  return formattedTime || "0h:0m";
}

export function calculateEnergyCost(printTime: number): number {
  const pricekWh = useDefaultConfigStore.getState().pricekWh;
  const priceKWm = pricekWh / 60;
  const energyCost = printTime * priceKWm;
  return energyCost;
}

export function calculateMaterialCost(materialAmount: number): number {
  const materialPricePerKG =
    useDefaultConfigStore.getState().materialPricePerKG;
  const materialCost = (materialPricePerKG / 1000) * materialAmount;
  return materialCost;
}
