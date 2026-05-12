import React from "react";
import { Coffee, Bed, Wind, Utensils, Bell, Star } from "lucide-react";

function UserHome({ setIsMobileOpen }) {
  const services = [
    { title: "Room Service", icon: <Utensils />, desc: "Order gourmet meals" },
    { title: "Spa & Wellness", icon: <Wind />, desc: "Book a massage" },
    { title: "Housekeeping", icon: <Bed />, desc: "Request cleaning" },
    { title: "Concierge", icon: <Bell />, desc: "Special requests" },
  ];

  return (
    <div className="flex-1 bg-white min-h-screen p-6 md:p-12 overflow-y-auto">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-serif text-slate-900 mb-2">
            Welcome Back, Guest
          </h1>
          <p className="text-slate-500 tracking-wide">
            Your luxury stay at{" "}
            <span className="text-amber-600 font-bold">The Royal</span>
          </p>
        </div>
        <div className="hidden md:flex gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={16} className="fill-amber-500 text-amber-500" />
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-amber-200 transition-all cursor-pointer group"
          >
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
            <p className="text-slate-400 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-wrap justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-serif text-slate-900 mb-2">
            Room Suite 405
          </h2>
          <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
            Wifi Pass: ROYAL2026
          </p>
        </div>
        <button className="bg-slate-900 text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-amber-600 transition-all">
          Request Checkout
        </button>
      </div>
    </div>
  );
}
export default UserHome;
