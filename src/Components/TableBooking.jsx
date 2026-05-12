import React, { useState } from 'react';
import { 
  Menu, Users, CalendarPlus, Clock, 
  MapPin, UserPlus, CheckCircle2, X, ChevronRight 
} from 'lucide-react';

function TableBooking({ setIsMobileOpen }) {
  const [activeFloor, setActiveFloor] = useState('Main Dining');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Mock Table Data
  const tables = [
    { id: 'T-01', seats: 4, status: 'available' },
    { id: 'T-02', seats: 2, status: 'occupied', guest: 'Walk-in', time: '45m seated' },
    { id: 'T-03', seats: 6, status: 'reserved', guest: 'J. Smith', time: '7:00 PM' },
    { id: 'T-04', seats: 2, status: 'available' },
    { id: 'T-05', seats: 4, status: 'occupied', guest: 'M. Davis', time: '15m seated' },
    { id: 'T-06', seats: 8, status: 'reserved', guest: 'L. Taylor', time: '8:30 PM' },
    { id: 'T-07', seats: 4, status: 'available' },
    { id: 'T-08', seats: 2, status: 'available' },
  ];

  const getStatusClasses = (status) => {
    switch(status) {
      case 'available': return 'border-t-emerald-500 bg-emerald-500/5 text-emerald-400';
      case 'occupied': return 'border-t-rose-500 bg-rose-500/5 text-rose-400';
      case 'reserved': return 'border-t-blue-500 bg-blue-500/5 text-blue-400';
      default: return 'border-t-slate-500 bg-slate-800';
    }
  };

  return (
    <div className="flex-1 bg-[#070b14] min-h-screen p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
      
      {showToast && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-2xl z-50 animate-bounce">
          <CheckCircle2 size={20} /> Reservation Confirmed!
        </div>
      )}

      {/* Header */}
      <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-lg" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1">Table Reservations</h1>
            <p className="text-slate-400 text-sm font-medium">Manage dining floor plan and upcoming guests.</p>
          </div>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-black shadow-lg transition-all hover:-translate-y-1">
          <CalendarPlus size={20} /> New Reservation
        </button>
      </header>

      {/* Stats Quick View */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800/40 p-4 rounded-3xl border border-slate-700/50 shadow-xl">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Tables</p>
          <h3 className="text-3xl font-black text-white">24</h3>
        </div>
        <div className="bg-emerald-500/10 p-4 rounded-3xl border border-emerald-500/20 shadow-xl">
          <p className="text-[10px] font-black text-emerald-500/60 uppercase tracking-widest mb-1">Available</p>
          <h3 className="text-3xl font-black text-emerald-400">8</h3>
        </div>
        <div className="bg-rose-500/10 p-4 rounded-3xl border border-rose-500/20 shadow-xl">
          <p className="text-[10px] font-black text-rose-500/60 uppercase tracking-widest mb-1">Occupied</p>
          <h3 className="text-3xl font-black text-rose-400">12</h3>
        </div>
        <div className="bg-blue-500/10 p-4 rounded-3xl border border-blue-500/20 shadow-xl">
          <p className="text-[10px] font-black text-blue-500/60 uppercase tracking-widest mb-1">Reserved</p>
          <h3 className="text-3xl font-black text-blue-400">4</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Floor Plan Area */}
        <div className="lg:col-span-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-[2.5rem] p-6 shadow-2xl">
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <h5 className="text-xl font-bold text-white">{activeFloor} Overview</h5>
            <div className="bg-slate-900 p-1 rounded-full flex border border-slate-800">
              {['Main Dining', 'Patio', 'VIP Lounge'].map(floor => (
                <button 
                  key={floor}
                  onClick={() => setActiveFloor(floor)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeFloor === floor ? 'bg-blue-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {floor}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tables.map((table) => (
              <div key={table.id} className={`border-t-4 border-x border-b border-x-transparent border-b-transparent rounded-3xl p-5 flex flex-col items-center justify-center transition-all hover:scale-105 hover:bg-slate-800/80 ${getStatusClasses(table.status)}`}>
                <span className="text-[10px] font-black px-2 py-1 bg-white/10 rounded-full mb-3">{table.seats} SEATS</span>
                <div className="text-2xl font-black mb-1">{table.id}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-80">{table.status}</div>
                {table.guest && (
                  <div className="mt-2 text-center">
                    <p className="text-xs font-black truncate max-w-[100px]">{table.guest}</p>
                    <p className="text-[9px] font-medium opacity-60 flex items-center justify-center gap-1"><Clock size={10}/> {table.time}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Area */}
        <div className="lg:col-span-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-[2.5rem] p-6 shadow-2xl">
          <h5 className="text-xl font-bold text-white mb-6">Upcoming Arrivals</h5>
          
          <div className="space-y-6 relative before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-700/50">
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#070b14] z-10"></div>
              <p className="text-xs font-black text-blue-400 mb-1 tracking-widest">7:00 PM</p>
              <h6 className="text-white font-bold mb-1">Smith Party <span className="bg-slate-700 text-[10px] px-2 py-0.5 rounded ml-2">Table T-03</span></h6>
              <p className="text-xs text-slate-500 font-medium mb-3">6 Guests • Birthday Celebration</p>
              <button className="text-xs font-black text-blue-400 flex items-center gap-1 hover:gap-2 transition-all">
                SEAT GUESTS <ChevronRight size={14} />
              </button>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-[#070b14] z-10"></div>
              <p className="text-xs font-black text-slate-500 mb-1 tracking-widest">8:30 PM</p>
              <h6 className="text-white font-bold mb-1">Taylor Party <span className="bg-slate-700 text-[10px] px-2 py-0.5 rounded ml-2">Table T-06</span></h6>
              <p className="text-xs text-slate-500 font-medium">8 Guests • VIP Client</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-slate-900/50 rounded-[2rem] border border-slate-800 text-center">
             <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-500">
                <UserPlus size={24} />
             </div>
             <h6 className="text-white font-bold mb-1">Waiting List</h6>
             <p className="text-xs text-slate-500 mb-4 font-medium">0 parties currently waiting</p>
             <button className="w-full bg-white text-slate-900 py-3 rounded-2xl text-xs font-black hover:bg-slate-200 transition-all">
               ADD TO WAITLIST
             </button>
          </div>
        </div>

      </div>

      {/* Modal - Basic Setup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a0f1d] border border-slate-700/50 rounded-[2rem] w-full max-w-xl overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <h2 className="text-xl font-black text-white flex items-center gap-2"><MapPin className="text-blue-500" /> New Reservation</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><X size={24} /></button>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); setShowToast(true); setTimeout(() => setShowToast(false), 3000); }}>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Guest Name" className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-white outline-none focus:border-blue-500" required />
                <input type="text" placeholder="Phone Number" className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-white outline-none focus:border-blue-500" required />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input type="date" className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-white outline-none" required />
                <input type="time" className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-white outline-none" required />
                <input type="number" placeholder="Guests" className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-white outline-none" min="1" required />
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-500/20">CONFIRM RESERVATION</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TableBooking;