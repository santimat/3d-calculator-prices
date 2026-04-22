type CONFIG = {
  priceReplacement: number;
  priceKwh: number;
  profitPercentage: number;
  printerWattage: number;
  printerLifespanHours: number;
};

const DEFAULT_CONFIG = {
  priceReplacement: 35000,
  priceKwh: 140,
  profitPercentage: 1.3,
  printerWattage: 150,
  printerLifespanHours: 4500,
} satisfies CONFIG;
