import type { PriceCardProps } from "../types";

export default function PriceCard({
  pair,
  price,
  change,
  volume,
  chartColor,
}: PriceCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/80 group">
      <div className="flex justify-between items-start mb-6">
        <span className="text-slate-400 text-sm font-medium tracking-wide">
          {pair}
        </span>
        <div className="w-16 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <MiniChart color={chartColor} />
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-2xl font-bold text-white leading-none">
          {price}
        </div>
        <div
          className={`text-sm font-semibold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {change}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-700/50">
        <div className="text-slate-400 text-sm">
          <span className="text-slate-500">Volume:</span>{" "}
          <span className="font-medium">{volume}</span>
        </div>
      </div>
    </div>
  );
}

function MiniChart({ color }: { color: "red" | "green" }) {
  const strokeColor = color === "red" ? "#ef4444" : "#22c55e";

  return (
    <svg width="64" height="32" viewBox="0 0 64 32" className="w-full h-full">
      <polyline
        fill="none"
        stroke={strokeColor}
        strokeWidth="2.5"
        points="0,20 8,16 16,24 24,12 32,18 40,8 48,14 56,10 64,16"
        className="drop-shadow-sm"
      />
    </svg>
  );
}
