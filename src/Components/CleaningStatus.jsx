import React, { useState } from 'react';
import { 
  Menu, Sparkles, Trash2, RefreshCw, Wrench, 
  Users, Plus, X, Clock, CheckCircle2, AlertTriangle 
} from 'lucide-react';

function CleaningStatus({ setIsMobileOpen }) {
  // Modal states: 'none', 'roster', or 'assign'
  const [activeModal, setActiveModal] = useState('none');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Assign Task Form State
  const [assignData, setAssignData] = useState({ room: '', staff: '', desc: '' });

  // Open Assign Modal with specific room (optional)
  const openAssignModal = (roomNo = '') => {
    setAssignData({ ...assignData, room: roomNo });
    setActiveModal('assign');
  };

  const handleAssignSubmit = (e) => {
    e.preventDefault();
    setActiveModal('none');
    setToastMessage(`Task for Room ${assignData.room} assigned to ${assignData.staff}!`);
    setShowToast(true);
    setAssignData({ room: '', staff: '', desc: '' }); // Reset
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex-1 bg-[#070b14] min-h-screen p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-2xl z-50 animate-bounce">
          <CheckCircle2 size={20} /> {toastMessage}
        </div>
      )}

      {/* Header Section */}
      <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-lg" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1 flex items-center gap-3">
               Housekeeping
            </h1>
            <p className="text-slate-400 text-sm font-medium">Real-time room status and maintenance tracking.</p>
          </div>
        </div>
        
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={() => setActiveModal('roster')}
            className="flex-1 md:flex-none bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm font-bold border border-slate-700 transition-all"
          >
            <Users size={18} /> Roster
          </button>
          <button 
            onClick={() => openAssignModal()}
            className="flex-1 md:flex-none bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-400 hover:to-teal-300 text-slate-900 px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm font-black shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1"
          >
            <Plus size={18} /> Assign
          </button>
        </div>
      </header>

      {/* Overview Stats (4 Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800/40 backdrop-blur-sm border-t-4 border-teal-500 border-x border-b border-x-slate-700/50 border-b-slate-700/50 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="bg-teal-500/10 text-teal-400 p-3 rounded-xl"><Sparkles size={24} /></div>
          <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Clean</p><h2 className="text-3xl font-black text-white">24</h2></div>
        </div>
        <div className="bg-slate-800/40 backdrop-blur-sm border-t-4 border-rose-500 border-x border-b border-x-slate-700/50 border-b-slate-700/50 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="bg-rose-500/10 text-rose-400 p-3 rounded-xl"><Trash2 size={24} /></div>
          <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Dirty</p><h2 className="text-3xl font-black text-white">12</h2></div>
        </div>
        <div className="bg-slate-800/40 backdrop-blur-sm border-t-4 border-orange-500 border-x border-b border-x-slate-700/50 border-b-slate-700/50 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="bg-orange-500/10 text-orange-400 p-3 rounded-xl"><RefreshCw size={24} /></div>
          <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Progress</p><h2 className="text-3xl font-black text-white">5</h2></div>
        </div>
        <div className="bg-slate-800/40 backdrop-blur-sm border-t-4 border-slate-400 border-x border-b border-x-slate-700/50 border-b-slate-700/50 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="bg-slate-500/10 text-slate-400 p-3 rounded-xl"><Wrench size={24} /></div>
          <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Repair</p><h2 className="text-3xl font-black text-white">2</h2></div>
        </div>
      </div>

      <h3 className="text-lg font-black text-white mb-4">Floor 1 Overview</h3>
      
      {/* Detailed Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: In Progress */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 flex flex-col h-full shadow-xl hover:-translate-y-1 transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-black text-white mb-1">101</h4>
              <span className="text-slate-400 text-xs font-bold">Standard Double</span>
            </div>
            <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">IN PROGRESS</span>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white">MJ</div>
                <span className="text-sm font-bold text-slate-300">Maria J.</span>
              </div>
              <span className="text-xs font-black text-orange-400">65%</span>
            </div>
            {/* Custom Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 h-1.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        {/* Card 2: Dirty */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 flex flex-col h-full shadow-xl hover:-translate-y-1 transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-black text-white mb-1">102</h4>
              <span className="text-slate-400 text-xs font-bold">Deluxe King</span>
            </div>
            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">DIRTY</span>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50">
            <button onClick={() => openAssignModal('102')} className="w-full bg-slate-900 hover:bg-rose-500/20 text-rose-400 border border-slate-800 hover:border-rose-500/30 py-2.5 rounded-xl text-xs font-bold transition-all">
              Assign Housekeeper
            </button>
          </div>
        </div>

        {/* Card 3: Clean */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 flex flex-col h-full shadow-xl hover:-translate-y-1 transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-black text-white mb-1">103</h4>
              <span className="text-slate-400 text-xs font-bold">Suite</span>
            </div>
            <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">CLEAN</span>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-between items-center">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1"><Clock size={12}/> 2h ago</span>
            <CheckCircle2 size={20} className="text-teal-400" />
          </div>
        </div>

        {/* Card 4: Maintenance */}
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 flex flex-col h-full shadow-xl hover:-translate-y-1 transition-all group">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-2xl font-black text-white mb-1">104</h4>
              <span className="text-slate-400 text-xs font-bold">Standard Single</span>
            </div>
            <span className="bg-slate-500/10 text-slate-400 border border-slate-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider">MAINTENANCE</span>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-700/50">
            <p className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1"><AlertTriangle size={12} className="text-orange-400"/> AC Repair needed</p>
            <button className="w-full bg-slate-900 hover:bg-slate-700 text-white border border-slate-800 py-2.5 rounded-xl text-xs font-bold transition-all">
              View Ticket
            </button>
          </div>
        </div>

      </div>

      {/* MODALS OVERLAY */}
      {activeModal !== 'none' && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          
          {/* 1. Roster Modal */}
          {activeModal === 'roster' && (
            <div className="bg-[#0a0f1d] border border-slate-700/50 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center p-6 border-b border-slate-800">
                <h2 className="text-xl font-black text-white flex items-center gap-2"><Users className="text-blue-400" /> Today's Staff Roster</h2>
                <button onClick={() => setActiveModal('none')} className="text-slate-400 hover:text-white"><X size={24} /></button>
              </div>
              <div className="p-4">
                <div className="bg-slate-900 rounded-2xl p-4 mb-3 flex justify-between items-center border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">MJ</div>
                    <div><h6 className="font-bold text-white text-sm mb-0.5">Maria J.</h6><p className="text-[10px] text-slate-500 uppercase tracking-widest">Housekeeping • 8AM-4PM</p></div>
                  </div>
                  <span className="bg-orange-500/10 text-orange-400 px-2 py-1 rounded text-[10px] font-bold">3 Tasks</span>
                </div>
                <div className="bg-slate-900 rounded-2xl p-4 mb-3 flex justify-between items-center border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">RS</div>
                    <div><h6 className="font-bold text-white text-sm mb-0.5">Rahul Sharma</h6><p className="text-[10px] text-slate-500 uppercase tracking-widest">Housekeeping • 8AM-4PM</p></div>
                  </div>
                  <span className="bg-teal-500/10 text-teal-400 px-2 py-1 rounded text-[10px] font-bold">Free</span>
                </div>
                <div className="bg-slate-900 rounded-2xl p-4 flex justify-between items-center border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-500/20 text-slate-400 flex items-center justify-center font-bold">DK</div>
                    <div><h6 className="font-bold text-white text-sm mb-0.5">David K.</h6><p className="text-[10px] text-slate-500 uppercase tracking-widest">Maintenance Team</p></div>
                  </div>
                  <span className="bg-rose-500/10 text-rose-400 px-2 py-1 rounded text-[10px] font-bold">1 Ticket</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. Assign Task Modal */}
          {activeModal === 'assign' && (
            <div className="bg-[#0a0f1d] border border-slate-700/50 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center p-6 border-b border-slate-800">
                <h2 className="text-xl font-black text-white flex items-center gap-2"><Plus className="text-blue-400" /> Assign Task</h2>
                <button onClick={() => setActiveModal('none')} className="text-slate-400 hover:text-white"><X size={24} /></button>
              </div>
              <form onSubmit={handleAssignSubmit} className="p-6">
                <div className="mb-4">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Room No.</label>
                  <input type="text" value={assignData.room} onChange={e => setAssignData({...assignData, room: e.target.value})} className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600" placeholder="e.g. 102" required />
                </div>
                <div className="mb-4">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Staff Member</label>
                  <select value={assignData.staff} onChange={e => setAssignData({...assignData, staff: e.target.value})} className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-all" required>
                    <option value="" disabled>-- Select Staff --</option>
                    <option value="Maria J.">Maria J. (Housekeeping)</option>
                    <option value="Rahul Sharma">Rahul Sharma (Housekeeping)</option>
                    <option value="David K.">David K. (Maintenance)</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Description</label>
                  <textarea value={assignData.desc} onChange={e => setAssignData({...assignData, desc: e.target.value})} className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-slate-600 resize-none" rows="3" placeholder="Deep cleaning required..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-400 hover:to-teal-300 text-slate-900 py-3 rounded-full text-sm font-black shadow-lg transition-all">Confirm Assignment</button>
              </form>
            </div>
          )}

        </div>
      )}

    </div>
  );
}

export default CleaningStatus;