// components/Sidebar.jsx
import { House, BriefcaseBusiness, UserRound, SquareMenu, ScrollText, ListChecks } from "lucide-react";

const menu = ["Dashboard", "Listings", "Users", "Request", "Applications", "Tasks"];
const icons = [House, BriefcaseBusiness, UserRound, SquareMenu, ScrollText, ListChecks];

export default function Sidebar() {
  return (
    <nav className="bg-[#f4f5f6] border-b border-[#e5e7eb] px-14 h-[49px] items-center hidden md:flex">
      <div className="w-full flex items-center justify-between">
        {menu.map((item, i) => {
          const Icon = icons[i];
          return (
            <button
              key={item}
              className={`px-4 h-[30px] rounded-lg text-[13px] font-medium transition flex items-center gap-2 ${
                i === 0 ? "bg-[#cddbd7] text-[#0f5c4a]" : "text-[#4b5563] hover:bg-white"
              }`}
            >
              <Icon size={18} />
              {item}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
