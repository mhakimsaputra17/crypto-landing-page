"use client";

import { useState } from "react";
import { Star, TrendingUp, TrendingDown } from "lucide-react";
import type { CryptoData } from "../types";

export default function FavoritesSection() {
  const [activeTab, setActiveTab] = useState("IDR");

  const tabs = ["IDR", "USD", "BNB", "BTC", "ALTS"];

  const tableData: CryptoData[] = [
    {
      pair: "BTC/DAI",
      price: "98,832.93",
      priceIdr: "Rp 1,612,213,281.72",
      change: "+3.89%",
      high: "102,451.34",
      low: "Rp 94,288.07",
      marketCap: "Rp 31,953.008T",
      volume: "1.538M",
    },
    {
      pair: "ETH/DAI",
      price: "3,542.15",
      priceIdr: "Rp 57,845,362.50",
      change: "+2.45%",
      high: "3,621.89",
      low: "Rp 3,498.32",
      marketCap: "Rp 11,524.832T",
      volume: "845K",
    },
    {
      pair: "XRP/ETH",
      price: "2.34",
      priceIdr: "Rp 38,186.42",
      change: "-1.23%",
      high: "2.41",
      low: "Rp 2.28",
      marketCap: "Rp 1,342.156T",
      volume: "2.156M",
    },
    {
      pair: "ADA/IDR",
      price: "0.89",
      priceIdr: "Rp 14,528.75",
      change: "+4.67%",
      high: "0.92",
      low: "Rp 0.84",
      marketCap: "Rp 312.445T",
      volume: "892K",
    },
    {
      pair: "SOL/USDT",
      price: "198.56",
      priceIdr: "Rp 3,240,864.32",
      change: "+6.78%",
      high: "205.23",
      low: "Rp 189.45",
      marketCap: "Rp 9,856.234T",
      volume: "1.234M",
    },
  ];

  return (
    <section className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-slate-700/30">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">
        Favorit
      </h2>

      {/* Tabs */}
      <div className="flex space-x-6 md:space-x-12 mb-6 md:mb-8 border-b border-slate-700/50 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 md:pb-4 px-2 border-b-2 transition-all duration-200 font-medium whitespace-nowrap ${
              activeTab === tab
                ? "border-orange-400 text-orange-400"
                : "border-transparent text-slate-400 hover:text-slate-300 hover:border-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-slate-400 text-sm font-medium">
              <th className="text-left pb-6 pr-6">Pasangan</th>
              <th className="text-left pb-6 pr-6">Harga Terakhir</th>
              <th className="text-left pb-6 pr-6">Perubahan 24jam</th>
              <th className="text-left pb-6 pr-6">
                Tertinggi / Terendah 24jam
              </th>
              <th className="text-left pb-6 pr-6">Kapitalisasi Pasar</th>
              <th className="text-left pb-6">Volume 24 Jam</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors duration-200"
              >
                <td className="py-5 pr-6">
                  <div className="flex items-center space-x-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
                    <span className="text-white font-semibold">{row.pair}</span>
                  </div>
                </td>
                <td className="py-5 pr-6">
                  <div className="flex flex-col">
                    <span className="text-slate-300 text-sm font-medium">
                      {row.price}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {row.priceIdr}
                    </span>
                  </div>
                </td>
                <td className="py-5 pr-6">
                  <span
                    className={`text-sm font-semibold px-2 py-1 rounded ${
                      row.change.startsWith("+")
                        ? "text-green-400 bg-green-400/10"
                        : "text-red-400 bg-red-400/10"
                    }`}
                  >
                    {row.change}
                  </span>
                </td>
                <td className="py-5 pr-6">
                  <div className="flex flex-col">
                    <span className="text-slate-300 text-sm font-medium">
                      {row.high}
                    </span>
                    <span className="text-slate-400 text-xs">{row.low}</span>
                  </div>
                </td>
                <td className="py-5 pr-6 text-slate-300 text-sm font-medium">
                  {row.marketCap}
                </td>
                <td className="py-5 text-slate-300 text-sm font-medium">
                  {row.volume}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tablet Table */}
      <div className="hidden md:block lg:hidden overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-slate-400 text-sm font-medium">
              <th className="text-left pb-4 pr-4">Pasangan</th>
              <th className="text-left pb-4 pr-4">Harga</th>
              <th className="text-left pb-4 pr-4">24h</th>
              <th className="text-left pb-4 pr-4">Volume</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors duration-200"
              >
                <td className="py-4 pr-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {row.pair}
                      </div>
                      <div className="text-slate-400 text-xs">
                        {row.marketCap}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex flex-col">
                    <span className="text-slate-300 text-sm font-medium">
                      {row.price}
                    </span>
                    <span className="text-slate-400 text-xs truncate max-w-[120px]">
                      {row.priceIdr}
                    </span>
                  </div>
                </td>
                <td className="py-4 pr-4">
                  <div className="flex items-center space-x-1">
                    {row.change.startsWith("+") ? (
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    ) : (
                      <TrendingDown className="w-3 h-3 text-red-400" />
                    )}
                    <span
                      className={`text-sm font-semibold ${
                        row.change.startsWith("+")
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {row.change}
                    </span>
                  </div>
                </td>
                <td className="py-4 text-slate-300 text-sm font-medium">
                  {row.volume}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {tableData.map((row, index) => (
          <div
            key={index}
            className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30 hover:bg-slate-800/60 transition-colors duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">{row.pair}</span>
              </div>
              <div className="flex items-center space-x-1">
                {row.change.startsWith("+") ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
                <span
                  className={`text-sm font-semibold ${
                    row.change.startsWith("+")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {row.change}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-slate-400 text-xs mb-1">Harga</div>
                <div className="text-white font-medium">{row.price}</div>
                <div className="text-slate-400 text-xs truncate">
                  {row.priceIdr}
                </div>
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1">Volume 24h</div>
                <div className="text-slate-300 font-medium">{row.volume}</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1">Market Cap</div>
                <div className="text-slate-300 font-medium">
                  {row.marketCap}
                </div>
              </div>
              <div>
                <div className="text-slate-400 text-xs mb-1">24h Range</div>
                <div className="text-slate-300 text-xs">
                  <div>{row.high}</div>
                  <div>{row.low}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
