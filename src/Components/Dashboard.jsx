import React from "react";
import {
  Menu,
  CalendarDays,
  TrendingUp,
  AlertCircle,
  Phone,
  ArrowUpRight,
  IndianRupee,
  Users,
  BedDouble,
} from "lucide-react";

function Dashboard({ setIsMobileOpen }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const recentBookings = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "+91 98765 43210",
      type: "Deluxe Suite",
      room: "201",
      status: "CHECKED-IN",
    },
    {
      id: 2,
      name: "Priya Singh",
      phone: "+91 87654 32109",
      type: "Standard Room",
      room: "105",
      status: "PENDING",
    },
    {
      id: 3,
      name: "Amit Kumar",
      phone: "+91 76543 21098",
      type: "Premium Hall",
      room: "H-A",
      status: "CHECKED-OUT",
    },
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-4 md:p-10 overflow-y-auto">
      {/* Header */}
      <header className="flex flex-wrap justify-between items-center mb-10 gap-4">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-slate-600 bg-white p-2 rounded-lg shadow-sm"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
          <h1 className="text-3xl font-serif text-slate-900">Admin Overview</h1>
        </div>
        <div className="bg-white border border-slate-200 px-5 py-2 rounded-full flex items-center gap-2 text-sm font-bold text-slate-600 shadow-sm">
          <CalendarDays size={16} className="text-amber-600" /> {today}
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <BedDouble className="text-amber-600 mb-4" size={28} />
          <h6 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
            Active Bookings
          </h6>
          <h2 className="text-4xl font-bold text-slate-900">42</h2>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <IndianRupee className="text-amber-600 mb-4" size={28} />
          <h6 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
            Revenue Today
          </h6>
          <h2 className="text-4xl font-bold text-slate-900">₹12,450</h2>
        </div>
        <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <Users className="text-amber-600 mb-4" size={28} />
          <h6 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
            Requests
          </h6>
          <h2 className="text-4xl font-bold text-slate-900">08</h2>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-200 overflow-hidden">
        <h3 className="text-xl font-serif text-slate-900 mb-6">
          Recent Guest Activity
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-[10px] uppercase tracking-widest">
                <th className="pb-4">Guest</th>
                <th className="pb-4">Room</th>
                <th className="pb-4 text-center">Status</th>
                <th className="pb-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b) => (
                <tr
                  key={b.id}
                  className="border-b border-slate-50 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-5 font-bold text-slate-800">{b.name}</td>
                  <td className="py-5 text-slate-500">
                    {b.type} (#{b.room})
                  </td>
                  <td className="py-5 text-center">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">
                      {b.status}
                    </span>
                  </td>
                  <td className="py-5 text-right">
                    <button className="p-2 hover:bg-amber-500 hover:text-white rounded-xl transition-all">
                      <ArrowUpRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
