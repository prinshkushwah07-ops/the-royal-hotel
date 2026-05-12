import React, { useState } from 'react';
import { 
  Menu, Utensils, PlusCircle, X, ChefHat, 
  Clock, CheckCircle2, Coffee, Receipt
} from 'lucide-react';

function FoodOrdering({ setIsMobileOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Fake Database for Orders
  const [orders, setOrders] = useState([
    { id: "102", room: "204", guest: "Aman Sharma", items: "2x Butter Chicken, 4x Garlic Naan, 1x Coke", amount: 850, status: "PREPARING", time: "10:45 AM" },
    { id: "101", room: "105", guest: "Priya Singh", items: "1x Margherita Pizza, 2x Cold Coffee", amount: 550, status: "DELIVERED", time: "09:30 AM" },
    { id: "100", room: "H-A", guest: "Amit Kumar", items: "15x Veg Sandwich, 15x Tea", amount: 1200, status: "DELIVERED", time: "08:15 AM" }
  ]);

  const [formData, setFormData] = useState({
    room_number: '',
    guest_name: '',
    items: '',
    amount: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newOrder = {
      id: (102 + orders.length).toString(),
      room: formData.room_number,
      guest: formData.guest_name,
      items: formData.items,
      amount: parseFloat(formData.amount),
      status: "PENDING",
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute:'2-digit' })
    };

    setOrders([newOrder, ...orders]);
    setFormData({ room_number: '', guest_name: '', items: '', amount: '' });
    setIsModalOpen(false);
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Status Badge Logic
  const getStatusBadge = (status) => {
    if (status === 'DELIVERED') return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1"><CheckCircle2 size={12}/> DELIVERED</span>;
    if (status === 'PREPARING') return <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1"><ChefHat size={12}/> PREPARING</span>;
    return <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-1"><Clock size={12}/> PENDING</span>;
  };

  return (
    <div className="flex-1 bg-[#070b14] min-h-screen p-4 md:p-8 overflow-y-auto custom-scrollbar relative">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-2xl z-50 animate-bounce">
          <Utensils size={20} /> New Order Sent to Kitchen!
        </div>
      )}

      {/* Header */}
      <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-400 hover:text-white bg-slate-800/50 p-2 rounded-lg" onClick={() => setIsMobileOpen(true)}>
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1 flex items-center gap-3">
               Food Ordering
            </h1>
            <p className="text-slate-400 text-sm font-medium">Manage room service and kitchen orders.</p>
          </div>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-300 hover:to-red-400 text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm font-black shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1"
        >
          <PlusCircle size={20} />
          New Food Order
        </button>
      </header>

      {/* Grid Layout for Food Orders (Instead of Table) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition-all duration-300 group hover:border-orange-500/30">
            
            {/* Card Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-slate-500 text-xs font-black tracking-widest uppercase">Order #{order.id}</span>
                <h3 className="text-lg font-bold text-white mt-1">{order.guest}</h3>
                <p className="text-sm text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                  Room: <span className="text-orange-400 font-bold">{order.room}</span>
                </p>
              </div>
              {getStatusBadge(order.status)}
            </div>

            {/* Order Items */}
            <div className="bg-slate-900/50 rounded-2xl p-4 mb-4 border border-slate-800">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg text-orange-400 mt-1">
                  <Coffee size={16} />
                </div>
                <p className="text-sm text-slate-300 font-medium leading-relaxed">
                  {order.items}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Total Bill</p>
                <p className="text-xl font-black text-white flex items-center gap-1">
                  <span className="text-slate-500 font-medium">₹</span>{order.amount}
                </p>
              </div>
              <p className="text-xs text-slate-500 font-bold flex items-center gap-1">
                <Clock size={12} /> {order.time}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* NEW ORDER MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0a0f1d] border border-slate-700/50 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <Receipt className="text-orange-400" /> Create Food Order
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><X size={24} /></button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Room No.</label>
                  <input type="text" name="room_number" value={formData.room_number} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition-all placeholder:text-slate-600" placeholder="e.g. 101" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Guest Name</label>
                  <input type="text" name="guest_name" value={formData.guest_name} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition-all placeholder:text-slate-600" placeholder="Aman Sharma" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Food Items (Details & Qty)</label>
                <textarea name="items" value={formData.items} onChange={handleInputChange} rows="3" required className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition-all placeholder:text-slate-600 resize-none" placeholder="e.g. 2x Sandwich, 1x Tea..."></textarea>
              </div>

              <div className="mb-6">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Total Amount (₹)</label>
                <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} required className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-500 transition-all placeholder:text-slate-600" placeholder="500" />
              </div>

              <div className="flex gap-4 justify-end pt-4 border-t border-slate-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 rounded-full text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition-all">Cancel</button>
                <button type="submit" className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-300 hover:to-red-400 text-white px-8 py-3 rounded-full text-sm font-black shadow-lg transition-all">Place Order</button>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}

export default FoodOrdering;