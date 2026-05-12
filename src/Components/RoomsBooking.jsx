import React, { useState } from 'react';
import { 
  Menu, PlusCircle, CalendarPlus, X, Phone, 
  Edit, Trash2, CheckCircle2 
} from 'lucide-react';

function RoomBooking({ setIsMobileOpen }) {
  // Modal aur Toast Notification ke states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Fake Database (Portfolio ke liye)
  const [bookings, setBookings] = useState([
    { id: 1, name: "Aman Sharma", phone: "+91 98765 43210", type: "Deluxe Room", room: "101", date: "12 May, 2026", time: "10:30 AM", status: "CHECKED-IN" },
    { id: 2, name: "Priya Singh", phone: "+91 87654 32109", type: "Standard Room", room: "105", date: "11 May, 2026", time: "09:15 AM", status: "CHECKED-OUT" },
  ]);

  // Form Data State
  const [formData, setFormData] = useState({
    guest_name: '',
    guest_phone: '',
    room_type: '',
    room_number: ''
  });

  // Input change handle karna
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit (Fake API)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Nayi booking banana
    const newBooking = {
      id: bookings.length + 1,
      name: formData.guest_name,
      phone: formData.guest_phone,
      type: formData.room_type,
      room: formData.room_number,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit' }),
      status: "CHECKED-IN"
    };

    // Nayi booking ko table mein add karna (Upar ki taraf)
    setBookings([newBooking, ...bookings]);
    
    // Form clear karna aur Modal band karna
    setFormData({ guest_name: '', guest_phone: '', room_type: '', room_number: '' });
    setIsModalOpen(false);
    
    // Success Message dikhana
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // 3 second baad gayab
  };

  // Status Colors
  const getStatusStyle = (status) => {
    if (status === 'CHECKED-IN') return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    if (status === 'CHECKED-OUT') return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
  };

  return (
    <div className="flex-1 bg-[#070b14] min-h-screen p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
      
      {/* Success Toast Notification */}
      {showToast && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-2xl z-50 animate-bounce">
          <CheckCircle2 size={20} />
          Success! Room Booked Successfully.
        </div>
      )}

      {/* Header Section */}
      <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-lg" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1">Room Bookings</h1>
            <p className="text-slate-400 text-sm font-medium">Manage reservations and check-ins.</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-300 hover:to-purple-400 text-slate-900 px-6 py-3 rounded-full flex items-center gap-2 text-sm font-black shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-1"
        >
          <PlusCircle size={20} />
          Create New Booking
        </button>
      </header>

      {/* Bookings Table */}
      <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-xl overflow-x-auto">
        <table className="w-full text-left min-w-[850px]">
          <thead>
            <tr className="border-b border-slate-700/50 text-slate-400 text-[10px] uppercase tracking-[0.2em]">
              <th className="pb-4 font-bold pl-2">Guest Details</th>
              <th className="pb-4 font-bold">Room Info</th>
              <th className="pb-4 font-bold">Booking Date</th>
              <th className="pb-4 font-bold text-center">Status</th>
              <th className="pb-4 font-bold text-right pr-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? bookings.map((booking) => (
              <tr key={booking.id} className="border-b border-slate-700/20 hover:bg-slate-800/50 transition-colors">
                <td className="py-4 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                      {booking.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-200">{booking.name}</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><Phone size={10} /> {booking.phone}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-sm font-bold text-slate-300">{booking.type}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Unit #{booking.room}</p>
                </td>
                <td className="py-4">
                  <p className="text-sm font-bold text-slate-300">{booking.date}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{booking.time}</p>
                </td>
                <td className="py-4 text-center">
                  <span className={`inline-flex items-center border px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${getStatusStyle(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-4 text-right pr-2">
                  <button className="p-2 text-slate-400 hover:text-teal-400 transition-colors"><Edit size={18} /></button>
                  <button className="p-2 text-slate-400 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
                </td>
              </tr>
            )) : (
              <tr><td colSpan="5" className="text-center py-8 text-slate-500 font-bold">No bookings found.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* NEW BOOKING MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a0f1d] border border-slate-700/50 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <CalendarPlus className="text-teal-400" /> Create New Booking
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><X size={24} /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                
                {/* Inputs */}
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Full Guest Name</label>
                  <input type="text" name="guest_name" value={formData.guest_name} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-slate-600" placeholder="e.g. Aman Sharma" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="text" name="guest_phone" value={formData.guest_phone} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-teal-500 transition-all placeholder:text-slate-600" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Room Category</label>
                  <select name="room_type" value={formData.room_type} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-teal-500 transition-all appearance-none">
                    <option value="" disabled>Select Room Type...</option>
                    <option value="Deluxe Room">Deluxe Room</option>
                    <option value="Executive Suite">Executive Suite</option>
                    <option value="Standard Room">Standard Room</option>
                    <option value="Royal Villa">Royal Villa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Assign Room No.</label>
                  <input type="text" name="room_number" value={formData.room_number} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-teal-500 transition-all placeholder:text-slate-600" placeholder="e.g. 101, 204" />
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-end pt-4 border-t border-slate-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 rounded-full text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition-all">Cancel</button>
                <button type="submit" className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-300 hover:to-purple-400 text-slate-900 px-8 py-3 rounded-full text-sm font-black shadow-lg transition-all">Confirm Booking</button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}

export default RoomBooking;