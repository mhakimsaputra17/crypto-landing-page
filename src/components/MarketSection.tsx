import PriceCard from "./PriceCard";
import type { PriceCardProps } from "../types";

export default function MarketSection() {
  const priceData: PriceCardProps[] = [
    {
      pair: "TKO/IDR",
      price: "Rp 5,261.3",
      change: "-3.82%",
      volume: "2,258 IDR",
      chartColor: "red" as const,
    },
    {
      pair: "ETH/IDR",
      price: "Rp 25,261.3",
      change: "-2.15%",
      volume: "5,458 IDR",
      chartColor: "red" as const,
    },
    {
      pair: "BTC/IDR",
      price: "Rp 1,525,261.3",
      change: "+3.82%",
      volume: "12,258 IDR",
      chartColor: "green" as const,
    },
    {
      pair: "ADA/IDR",
      price: "Rp 8,261.3",
      change: "+5.24%",
      volume: "8,958 IDR",
      chartColor: "green" as const,
    },
  ];

  return (
    <section className="mb-16">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-6 text-white leading-tight">
          Pasar
        </h1>
        <p className="text-slate-400 text-xl leading-relaxed max-w-3xl">
          Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {priceData.map((data, index) => (
          <PriceCard key={index} {...data} />
        ))}
      </div>
    </section>
  );
}
