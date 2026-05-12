import React, { useState } from 'react';
import { 
  Menu, Droplets, PlusCircle, X, CheckCircle2, 
  Shirt, Clock, Loader2, Check 
} from 'lucide-react';

function LaundryService({ setIsMobileOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Fake Database for Laundry Requests
  const [requests, setRequests] = useState([
    { id: 1, guest: "Aman Sharma", room: "101", items: 5, service: "Dry Cleaning", status: "WASHING", date: "12 May, 2026", time: "11:20 AM" },
    { id: 2, guest: "Rahul Gupta", room: "204", items: 3, service: "Normal Wash", status: "READY", date: "12 May, 2026", time: "09:15 AM" },
    { id: 3, guest: "Sneha Kapoor", room: "105", items: 2, service: "Ironing Only", status: "DELIVERED", date: "11 May, 2026", time: "06:40 PM" }
  ]);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'WASHING': return <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center gap-1"><Loader2 size={12} className="animate-spin"/> WASHING</span>;
      case 'READY': return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center gap-1"><CheckCircle2 size={12}/> READY</span>;
      default: return <span className="bg-slate-500/10 text-slate-400 border border-slate-500/20 px-3 py-1 rounded-full text-[10px] font-black tracking-widest flex items-center gap-1">DELIVERED</span>;
    }
  };

  return (
    <div className="flex-1 bg-[#070b14] min-h-screen p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
      
      {showToast && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-2xl z-50 animate-bounce">
          <Droplets size={20} /> Request Added Successfully!
        </div>
      )}

      {/* Header */}
      <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-lg" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1">Laundry Services</h1>
            <p className="text-slate-400 text-sm font-medium">Track guest laundry and washing status.</p>
          </div>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-black shadow-lg transition-all hover:-translate-y-1">
          <PlusCircle size={20} /> Add New Request
        </button>
      </header>

      {/* Table Section */}
      <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-[2.5rem] p-6 shadow-xl overflow-x-auto">
        <table className="w-full text-left min-w-[750px]">
          <thead>
            <tr className="border-b border-slate-700/50 text-slate-400 text-[10px] uppercase tracking-[0.2em]">
              <th className="pb-4 font-bold pl-2">Guest Details</th>
              <th className="pb-4 font-bold">Laundry Info</th>
              <th className="pb-4 font-bold">Date & Time</th>
              <th className="pb-4 font-bold text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-b border-slate-700/20 hover:bg-slate-800/50 transition-colors group">
                <td className="py-5 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-black shadow-lg">
                      {req.guest.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-200">{req.guest}</p>
                      <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Room #{req.room}</p>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <p className="text-sm font-bold text-slate-300">{req.service}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{req.items} Items Total</p>
                </td>
                <td className="py-5 text-sm">
                  <p className="font-bold text-slate-300">{req.date}</p>
                  <p className="text-[10px] text-slate-500 font-medium flex items-center gap-1"><Clock size={10}/> {req.time}</p>
                </td>
                <td className="py-5 text-center">
                  <div className="flex justify-center">
                    {getStatusBadge(req.status)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal - Basic Setup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a0f1d] border border-slate-700/50 rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <h2 className="text-xl font-black text-white flex items-center gap-2"><Shirt className="text-blue-400" /> New Laundry Request</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><X size={24} /></button>
            </div>
            <form className="p-6 space-y-6" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); setShowToast(true); setTimeout(() => setShowToast(false), 3000); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Room Number</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 transition-all outline-none" placeholder="101" required />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Guest Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 transition-all outline-none" placeholder="Aman Sharma" required />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Total Items</label>
                  <input type="number" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 transition-all outline-none" placeholder="5" required />
                </div>
                <div>
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Service Type</label>
                  <select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none appearance-none">
                    <option>Normal Wash & Fold</option>
                    <option>Dry Cleaning</option>
                    <option>Ironing Only</option>
                    <option>Express Wash</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">Special Instructions</label>
                  <textarea className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none resize-none" rows="2" placeholder="Handle with care..."></textarea>
                </div>
              </div>
              <div className="flex gap-4 justify-end pt-4 border-t border-slate-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 font-bold text-slate-400">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-8 py-3 rounded-full font-black shadow-lg shadow-blue-500/20 flex items-center gap-2">
                  <Check size={18}/> SUBMIT REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LaundryService;