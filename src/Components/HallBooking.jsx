import React, { useState } from 'react';
import { 
  Menu, CalendarDays, Users, Building, 
  Search, Filter, Plus, X, CheckCircle2, Clock
} from 'lucide-react';

function HallBooking({ setIsMobileOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Mock Data for Table
  const [events, setEvents] = useState([
    { id: 1, name: "Tech Innovators Summit", venue: "Grand Ballroom", date: "Today", client: "Global Tech", status: "In Progress", type: "Corporate" },
    { id: 2, name: "Smith & Taylor Wedding", venue: "Crystal Banquet", date: "Tomorrow", client: "John Smith", status: "Setup", type: "Wedding" },
  ]);

  // Venue Status Cards Data
  const venues = [
    { name: "Grand Ballroom", cap: 500, status: "In Use", event: "Tech Innovators Summit", time: "09:00 AM - 05:00 PM", color: "border-rose-500", badge: "bg-rose-500/10 text-rose-400" },
    { name: "Executive Boardroom", cap: 20, status: "Available", event: "Financial Q2 Review", time: "Tomorrow, 10:00 AM", color: "border-emerald-500", badge: "bg-emerald-500/10 text-emerald-400" },
    { name: "Crystal Banquet", cap: 250, status: "Preparing", event: "Smith & Taylor Wedding", time: "Today, 07:00 PM", color: "border-amber-500", badge: "bg-amber-500/10 text-amber-400" },
  ];

  return (
    <div className="flex-1 bg-[#070b14] min-h-screen p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
      
      {showToast && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-2xl z-50 animate-bounce">
          <CheckCircle2 size={20} /> Event Booked Successfully!
        </div>
      )}

      {/* Header */}
      <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-lg" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1">Hall & Event Booking</h1>
            <p className="text-slate-400 text-sm font-medium">Manage conference rooms and banquet halls.</p>
          </div>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-black shadow-lg transition-all hover:-translate-y-1">
          <CalendarDays size={20} /> Book an Event
        </button>
      </header>

      {/* Venue Status Cards Grid */}
      <h5 className="text-white font-bold mb-4 px-2">Venue Status Today</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {venues.map((v, i) => (
          <div key={i} className={`bg-slate-800/40 backdrop-blur-sm border-t-4 ${v.color} border-x border-b border-x-slate-700/50 border-b-slate-700/50 rounded-3xl p-6 shadow-xl hover:bg-slate-800/60 transition-all`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold text-white mb-2">{v.name}</h4>
                <div className="bg-slate-900 text-slate-400 text-[10px] font-black px-3 py-1.5 rounded-full flex items-center gap-2 border border-slate-800">
                  <Users size={12} /> CAPACITY: {v.cap}
                </div>
              </div>
              <span className={`${v.badge} border border-current/20 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase`}>
                {v.status}
              </span>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-4 mt-4 border border-slate-800/50">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Current/Next Event</p>
              <p className="text-sm font-bold text-slate-200">{v.event}</p>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Clock size={12}/> {v.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-4 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input type="text" placeholder="Search events..." className="w-full bg-slate-900 border border-slate-800 text-white pl-12 pr-4 py-3 rounded-2xl focus:outline-none focus:border-indigo-500 transition-all" />
          </div>
          <div className="w-full md:w-64">
            <select className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-2xl focus:outline-none appearance-none cursor-pointer">
              <option>All Venues</option>
              <option>Grand Ballroom</option>
              <option>Executive Boardroom</option>
              <option>Crystal Banquet</option>
            </select>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 px-6 py-3 rounded-2xl flex items-center gap-2 font-bold border border-slate-700 transition-all">
            <Filter size={18} /> Filter
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-xl overflow-x-auto">
        <h5 className="text-white font-bold mb-6">Upcoming Bookings</h5>
        <table className="w-full text-left min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-700/50 text-slate-400 text-[10px] uppercase tracking-[0.2em]">
              <th className="pb-4 font-bold pl-2">Event Details</th>
              <th className="pb-4 font-bold">Venue</th>
              <th className="pb-4 font-bold">Date & Time</th>
              <th className="pb-4 font-bold">Client</th>
              <th className="pb-4 font-bold text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <tr key={ev.id} className="border-b border-slate-700/20 hover:bg-slate-800/50 transition-colors group">
                <td className="py-4 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                      <Building size={20} />
                    </div>
                    <p className="text-sm font-bold text-slate-200">{ev.name}</p>
                  </div>
                </td>
                <td className="py-4 text-sm font-bold text-slate-400">{ev.venue}</td>
                <td className="py-4 text-sm font-bold text-slate-200">{ev.date}</td>
                <td className="py-4 text-sm font-medium text-slate-400">{ev.client}</td>
                <td className="py-4 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${ev.status === 'In Progress' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-slate-700 text-slate-400'}`}>
                    {ev.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal - Pure React Logic */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a0f1d] border border-slate-700/50 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <h2 className="text-xl font-black text-white flex items-center gap-2">Book a Hall</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><X size={24} /></button>
            </div>
            <form className="p-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); setShowToast(true); setTimeout(() => setShowToast(false), 3000); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Event Name</label><input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white" placeholder="Conference..." required /></div>
                <div><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Client Name</label><input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white" placeholder="Global Tech" required /></div>
                <div className="md:col-span-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Venue</label><select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white"><option>Grand Ballroom</option><option>Crystal Banquet</option></select></div>
              </div>
              <div className="flex gap-4 justify-end pt-4 border-t border-slate-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 font-bold text-slate-400">Cancel</button>
                <button type="submit" className="bg-indigo-500 text-white px-8 py-3 rounded-full font-black shadow-lg shadow-indigo-500/20">Confirm Booking</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HallBooking;