// components/Header.jsx
import { useEffect, useRef, useState } from "react";
import {
  Calculator,
  CalendarRange,
  Search,
  Wallet,
  Store,
  Users,
  HandPlatter,
  MessageSquareMore,
  MapPinned,
  Lock,
  LogOut,
} from "lucide-react";

export default function Header() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }

    function handleEscKey(event) {
      if (event.key === "Escape") {
        setIsProfileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const menuItems = [
    { label: "Teams", icon: Users, danger: false },
    { label: "Snagging", icon: HandPlatter, danger: false },
    { label: "Feedback", icon: MessageSquareMore, danger: false },
    { label: "Geo-Bucket", icon: MapPinned, danger: false },
    { label: "Change password", icon: Lock, danger: false },
    { label: "Logout", icon: LogOut, danger: true },
  ];

  const showProfileTooltip = activeTooltip === "Profile" && !isProfileMenuOpen;

  return (
    <header className="bg-[#0f5c4a] text-white h-[58px] px-14 flex justify-between items-center">
      <div className="flex items-center gap-2.5">
        <span className="text-[15px] opacity-90">✶</span>
        <h1 className="text-[20px] leading-none font-semibold tracking-[-0.02em]">Expert Listing</h1>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="relative"
          onMouseEnter={() => setActiveTooltip("Budgeting")}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip("Budgeting")}
          onBlur={() => setActiveTooltip(null)}
        >
          <button
            type="button"
            aria-label="Budgeting"
            className="h-7 w-7 rounded-lg flex items-center justify-center text-white/90"
          >
            <Calculator size={22} />
          </button>
          <div
            role="tooltip"
            className={`absolute -left-6 top-full z-50 mt-2 w-max -translate-x-1 rounded-lg bg-[#303030] px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_32px_rgba(0,0,0,0.16)] translate-y-1 transition-all duration-200 ${
              activeTooltip === "Budgeting" ? "translate-y-0" : ""
            }`}
            style={{ opacity: activeTooltip === "Budgeting" ? 1 : 0 }}
          >
            Budgeting
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setActiveTooltip("Calendar")}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip("Calendar")}
          onBlur={() => setActiveTooltip(null)}
        >
          <button
            type="button"
            aria-label="Calendar"
            className="h-7 w-7 rounded-lg flex items-center justify-center text-white/90"
          >
            <CalendarRange size={22} />
          </button>
          <div
            role="tooltip"
            className={`absolute -left-6 top-full z-50 mt-2 w-max -translate-x-1 rounded-lg bg-[#303030] px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_32px_rgba(0,0,0,0.16)] translate-y-1 transition-all duration-200 ${
              activeTooltip === "Calendar" ? "translate-y-0" : ""
            }`}
            style={{ opacity: activeTooltip === "Calendar" ? 1 : 0 }}
          >
            Calendar
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setActiveTooltip("Search Activity")}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip("Search Activity")}
          onBlur={() => setActiveTooltip(null)}
        >
          <button
            type="button"
            aria-label="Search Activity"
            className="h-7 w-7 rounded-lg flex items-center justify-center text-white/90"
          >
            <Search size={22} />
          </button>
          <div
            role="tooltip"
            className={`absolute -left-8 top-full z-50 mt-2 w-max -translate-x-1 rounded-lg bg-[#303030] px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_32px_rgba(0,0,0,0.16)] translate-y-1 transition-all duration-200 ${
              activeTooltip === "Search Activity" ? "translate-y-0" : ""
            }`}
            style={{ opacity: activeTooltip === "Search Activity" ? 1 : 0 }}
          >
            Search Activity
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setActiveTooltip("Payout Center")}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip("Payout Center")}
          onBlur={() => setActiveTooltip(null)}
        >
          <button
            type="button"
            aria-label="Payout Center"
            className="h-7 w-7 rounded-lg flex items-center justify-center text-white/90"
          >
            <Wallet size={22} />
          </button>
          <div
            role="tooltip"
            className={`absolute -left-8 top-full z-50 mt-2 w-max -translate-x-1 rounded-lg bg-[#303030] px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_32px_rgba(0,0,0,0.16)] translate-y-1 transition-all duration-200 ${
              activeTooltip === "Payout Center" ? "translate-y-0" : ""
            }`}
            style={{ opacity: activeTooltip === "Payout Center" ? 1 : 0 }}
          >
            Payout Center
          </div>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setActiveTooltip("Store")}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip("Store")}
          onBlur={() => setActiveTooltip(null)}
        >
          <button
            type="button"
            aria-label="Store"
            className="h-7 w-7 rounded-lg flex items-center justify-center text-white/90"
          >
            <Store size={22} />
          </button>

          <div
            role="tooltip"
            className={`absolute -left-3 top-full z-50 mt-2 w-max -translate-x-1 rounded-lg bg-[#303030] px-3 py-2 text-xs font-semibold text-white shadow-[0_10px_32px_rgba(0,0,0,0.16)] translate-y-1 transition-all duration-200 ${
              activeTooltip === "Store" ? "translate-y-0" : ""
            }`}
            style={{ opacity: activeTooltip === "Store" ? 1 : 0 }}
          >
            Store
          </div>
        </div>

        <div
          className="relative"
          ref={profileMenuRef}
          onMouseEnter={() => setActiveTooltip("Profile")}
          onMouseLeave={() => setActiveTooltip(null)}
          onFocus={() => setActiveTooltip("Profile")}
          onBlur={() => setActiveTooltip(null)}
        >
          <button
            type="button"
            aria-label="Dylan Frank"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
            aria-expanded={isProfileMenuOpen}
            className="cursor-pointer h-9 w-9 rounded-full bg-white text-[#0f5c4a] font-semibold flex items-center justify-center text-[17px]"
          >
            D
          </button>
          <div
            role="tooltip"
            className={`absolute -left-20 top-full z-50 mt-2 w-max -translate-x-1 rounded-lg bg-white px-4 py-3 text-left shadow-[0_10px_32px_rgba(0,0,0,0.16)] border border-[#ececec] transition-all duration-200 translate-y-1 ${
              showProfileTooltip ? "translate-y-0" : ""
            }`}
            style={{ opacity: showProfileTooltip ? 1 : 0 }}
          >
            <p className="text-[#222] text-xs font-semibold leading-tight">Dylan Frank</p>
            <p className="text-[#8a8a8a] text-[11px] leading-tight">dylan96@mail.com</p>
          </div>

          <div
            className={`absolute right-0 top-[49px] w-[350px] rounded-[14px] bg-white shadow-[0_10px_32px_rgba(0,0,0,0.16)] border border-[#ececec] py-2.5 z-50 origin-top-right transition-all duration-200 ${
              isProfileMenuOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
            }`}
          >
            <div className="mx-3 mb-3 rounded-[10px] bg-[#ececec] p-6 flex gap-3 items-center">
              <div className="h-12 w-12 rounded-full bg-[#0f8268] text-white text-2xl font-semibold flex items-center justify-center">
                D
              </div>
              <div className="leading-tight">
                <p className="text-[#222] text-md font-semibold leading-loose">Dylan Frank</p>
                <p className="text-[#8a8a8a] text-xs leading-tight">dylan96@mail.com</p>
              </div>
            </div>

            {menuItems.map(({ label, icon: Icon, danger }, index) => (
              <div
                key={label}
                className={index !== menuItems.length - 1 ? "border-b border-[#efefef] mx-3" : "mx-3"}
              >
                <button
                  type="button"
                  className={`w-full py-5 text-left flex items-center gap-2.5 text-md font-extrabold leading-none ${
                    danger ? "text-[#ff5a54]" : "text-[#303030]"
                  }`}
                >
                  <Icon size={21} className={danger ? "text-[#ff5a54]" : "text-[#4b4b4b]"} />
                  <span>{label}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
