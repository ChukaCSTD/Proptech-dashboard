// components/StatsCard.jsx
export default function StatsCard({ title, value, positive, accent = "text-[#4f46e5]" }) {
  return (
    <div className="h-auto border border-gray-200 rounded-xl px-4 py-4">
      <h4 className={`font-bold text-xl leading-tight ${accent}`}>{value}</h4>
      <div className="flex items-center mt-2 gap-2">
        <p className="text-[11px] text-gray-500">{title}</p>
        <span className={`text-[11px] font-semibold ${positive ? "text-[#10b981]" : "text-[#ef4444]"}`}>
          {positive ? "● 2.5%" : "● 0.5%"}
        </span>
      </div>
    </div>
  );
}
