export interface Config {
  priceReplacement: number;
  priceKwh: number;
  profitPercentage: number;
  printerWattage: number;
  printerLifespanHours: number;
}

export interface PrintCalculation {
  id: string;
  name: string;
  filamentPricePerKg: number;
  filamentConsumed: number;
  printingHours: number;
  productionCost: number;
  salePrice: number;
  profit: number;
  createdAt: Date;
}

export interface Product {
  createdAt: Date;
  id: string;
  img: string;
  material: string;
  materialAmount: number;
  name: string;
  printTime: number;
}
