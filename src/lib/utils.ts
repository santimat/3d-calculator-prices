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
