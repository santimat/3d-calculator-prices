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
  return `$${amount.toFixed(2)}`;
}

export function formatTime(hours: number): string {
  const printHours = Math.floor(hours);
  const printMinutes = Math.round((hours - printHours) * 60);
  return `${printHours}h ${printMinutes > 0 ? `${printMinutes}m` : ""}`;
}

export function calculateEnergyCost(
  printTime: number,
  pricekWh: number,
): number {
  const energyCost = printTime * pricekWh;
  return energyCost;
}
