// components/Dashboard.jsx
import { Building2, ChevronLeft, ChevronRight, MessagesSquare, UserRound } from "lucide-react";
import StatsCard from "./StatsCard";
import ListingCard from "./ListingCard";

const bars = [
  [45, 34, 14],
  [8, 34, 18],
  [22, 14, 8],
  [22, 32, 18],
  [18, 5, 16],
  [50, 70, 20],
  [30, 48, 22],
  [30, 9, 17],
  [45, 42, 8],
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

export default function Dashboard() {
  return (
    <main className="px-[54px] py-3 pb-5">
      <h2 className="text-[20px] leading-none font-extrabold mb-[20px]">Welcome, Ahmed</h2>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-[14px] items-stretch">
        <div className="xl:col-span-2 bg-white border border-[#d8dce2] rounded-[14px] overflow-hidden">
          <div className="px-4 py-[20px] border-b border-[#eceff3]">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-[20px] leading-none">Sales Overview</h3>
                <p className="text-[11px] font-medium text-gray-500 mt-[10px]">Showing overview Jan 2022 - Sep 2022</p>
              </div>
              <div className="flex flex-col pt-1 items-end gap-[20px]">
                <button className="h-9.5 px-6.5 rounded-full border border-[#cfd5dc] text-[10px] font-semibold text-gray-700">
                  View Transactions
                </button>
                <div className="flex justify-end gap-2">
                  <button className="h-8 px-3 rounded-md text-[12px] font-medium text-gray-500">1 Week</button>
                  <button className="h-8 px-3 rounded-md text-[12px] font-medium text-gray-500">1 Month</button>
                  <button className="h-8 px-4 rounded-md bg-[#e8eaed] text-[12px] font-semibold text-gray-700">
                    1 Year
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[18px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[10px] items-start">
            <div>
              <div className="relative rounded-xl px-[14px] pt-3 py-2 h-[200px]">
                <div className="absolute left-8 right-3 top-4 space-y-5">
                  {[50, 40, 30, 20, 10].map((tick) => (
                    <div key={tick} className="border-t border-dashed border-[#edf0f4]" />
                  ))}
                </div>
                <div className="absolute left-[30px] top-3 bottom-8 w-8 border-r border-r-gray-100 text-[9px] font-medium text-gray-400 flex flex-col justify-between">
                  <span>50m</span>
                  <span>40m</span>
                  <span>30m</span>
                  <span>20m</span>
                  <span>10m</span>
                </div>
                <div className="absolute left-20 right-9 bottom-5 flex items-end justify-between">
                  {bars.map((group, idx) => (
                    <div key={months[idx]} className="flex flex-col items-center gap-1">
                      <div className="flex items-end gap-1 h-[102px]">
                        <span className="w-[4px] bg-[#4361ee] rounded-full" style={{ height: `${group[0] * 2}px` }} />
                        <span className="w-[4px] bg-[#22c55e] rounded-full" style={{ height: `${group[1] * 2}px` }} />
                        <span className="w-[4px] bg-[#ef4444] rounded-full" style={{ height: `${group[2] * 2}px` }} />
                      </div>
                      <span className="text-[9px] font-medium text-[#9ca3af]">{months[idx]}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-y-0 left-0 right-0 pointer-events-none">
                  <button
                    className="absolute left-1 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#eef1f4] text-gray-500 flex items-center justify-center shadow-[0_0_0_1px_rgba(209,213,219,0.8)] pointer-events-auto"
                    aria-label="Previous chart range"
                  >
                    <ChevronLeft className="font-extrabold" size={12} />
                  </button>
                  <button
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#eef1f4] text-gray-500 flex items-center justify-center shadow-[0_0_0_1px_rgba(209,213,219,0.8)] pointer-events-auto"
                    aria-label="Next chart range"
                  >
                    <ChevronRight className="font-extrabold" size={12} />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <StatsCard title="Total Inflow" value="₦120,000,000.00" positive accent="text-[#4f46e5]" />
              <StatsCard title="MRR" value="₦50,000,000.00" positive accent="text-[#16a34a]" />
              <StatsCard title="Commission Revenue" value="₦200,000,000.00" positive accent="text-[#14b8a6]" />
              <StatsCard title="GMV" value="₦100,000,000.00" accent="text-[#ef4444]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] h-full">
          <div className="bg-white rounded-[14px] border border-[#d8dce2] overflow-hidden flex-1">
            <div className="p-6 border-b border-[#eceff3] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Building2 size={18} className="text-[#6366f1]" />
                <h4 className="font-semibold text-gray-700 text-[13px]">Listings Overview</h4>
              </div>
              <button className="text-[11px] text-[#4f46e5] font-semibold flex items-center gap-1">
                View all <ChevronRight size={12} />
              </button>
            </div>
            <div className="grid grid-cols-3 p-6">
              <div>
                <p className="text-[12px] text-gray-500">Total</p>
                <p className="font-semibold text-2xl leading-none mt-2">1.8k</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500">Active</p>
                <p className="font-semibold text-2xl leading-none mt-2">80</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500">Archived</p>
                <p className="font-semibold text-2xl leading-none mt-2">1k</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[14px] border border-[#d8dce2] overflow-hidden flex-1">
            <div className="p-6 border-b border-[#eceff3] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <UserRound size={18} className="text-[#8b5cf6]" />
                <h4 className="font-semibold text-gray-700 text-[13px]">Users Overview</h4>
              </div>
              <button className="text-[11px] text-[#4f46e5] font-semibold flex items-center gap-1">
                View all <ChevronRight size={12} />
              </button>
            </div>
            <div className="grid grid-cols-3 p-6">
              <div>
                <p className="text-[12px] text-gray-500">Total</p>
                <p className="font-semibold text-2xl leading-none mt-2">20.7k</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500">Riders</p>
                <p className="font-semibold text-2xl leading-none mt-2">8.5k</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500">Subscribers</p>
                <p className="font-semibold text-2xl leading-none mt-2">7.5k</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-[14px]">
        <ListingCard
          image="https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=900&q=80"
          label="MOST CLICKED"
        />
        <ListingCard
          image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
          label="MOST WATCHLISTED"
        />
        <ListingCard
          image="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80"
          label="HOTTEST LISTING"
        />
      </section>

      <button className="fixed bottom-30 right-10 h-[52px] w-[52px] rounded-full bg-[#21252d] text-white flex items-center justify-center shadow-xl cursor-pointer">
        <MessagesSquare size={22} />
      </button>
    </main>
  );
}
