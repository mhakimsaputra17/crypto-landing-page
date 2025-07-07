export interface PriceCardProps {
  pair: string;
  price: string;
  change: string;
  volume: string;
  chartColor: "red" | "green";
}

export interface CryptoData {
  pair: string;
  price: string;
  priceIdr: string;
  change: string;
  high: string;
  low: string;
  marketCap: string;
  volume: string;
}

export interface TabType {
  id: string;
  label: string;
}
