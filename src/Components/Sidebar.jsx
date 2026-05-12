import React from "react";
import {
  LayoutGrid,
  Home,
  Key,
  Building,
  Sparkles,
  CalendarDays,
  Utensils,
  Droplet,
  LogOut,
  X,
  Hotel,
  User,
  Coffee,
  Star,
  Bell,
} from "lucide-react";

// 'userRole' prop add kiya hai jo App.jsx se aa raha hai
function Sidebar({
  activeTab,
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
  userRole,
}) {
  // 1. ADMIN (STAFF) MENU ITEMS
  const adminMainItems = [
    { id: "dashboard", name: "Overview", icon: LayoutGrid },
    { id: "home", name: "Landing Page", icon: Home },
  ];

  const adminManagementItems = [
    { id: "room-booking", name: "Room Booking", icon: Key },
    { id: "hall-booking", name: "Hall Booking", icon: Building },
    { id: "cleaning-status", name: "Cleaning Status", icon: Sparkles },
    { id: "table-booking", name: "Table Booking", icon: CalendarDays },
    { id: "food-ordering", name: "Food Ordering", icon: Utensils },
    { id: "laundry-request", name: "Laundry Service", icon: Droplet },
  ];

  // 2. USER (GUEST) MENU ITEMS
  const userMainItems = [
    { id: "user-home", name: "My Stay", icon: Star },
    { id: "home", name: "Landing Page", icon: Home },
  ];

  const userServiceItems = [
    { id: "order-food", name: "Order Food", icon: Utensils },
    { id: "room-service", name: "Room Service", icon: Bell },
    { id: "spa-wellness", name: "Spa & Wellness", icon: Sparkles },
    { id: "concierge", name: "Concierge", icon: User },
  ];

  // Role ke hisab se items select karna
  const mainItems = userRole === "staff" ? adminMainItems : userMainItems;
  const subItems =
    userRole === "staff" ? adminManagementItems : userServiceItems;
  const subTitle = userRole === "staff" ? "Management" : "Guest Services";

  const NavItem = ({ item }) => {
    const isActive = activeTab === item.id;
    const Icon = item.icon;

    return (
      <button
        onClick={() => {
          setActiveTab(item.id);
          setIsMobileOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-xl transition-all duration-300 ${
          isActive
            ? "bg-amber-500/10 text-amber-500 font-bold border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
            : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 font-medium"
        }`}
      >
        <Icon
          size={20}
          className={isActive ? "text-amber-500" : "text-slate-400"}
        />
        <span className="tracking-wide">{item.name}</span>
      </button>
    );
  };

  return (
    <>
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-72 bg-[#050811] border-r border-white/5 flex flex-col z-50 transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <div className="flex items-center gap-3 text-white font-serif text-xl tracking-wider">
            <div className="bg-gradient-to-br from-amber-400 to-amber-700 p-2 rounded-lg text-black shadow-lg shadow-amber-500/20">
              <Hotel size={22} />
            </div>
            The Royal
          </div>

          <button
            className="md:hidden text-slate-400"
            onClick={() => setIsMobileOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {/* Dynamic Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          {/* Main Section */}
          <div className="text-[10px] font-black text-amber-500/50 uppercase tracking-[0.3em] mb-4 px-4">
            Dashboard
          </div>
          {mainItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}

          {/* Role Specific Section */}
          <div className="text-[10px] font-black text-amber-500/50 uppercase tracking-[0.3em] mt-8 mb-4 px-4">
            {subTitle}
          </div>
          {subItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>

        {/* User Info & Logout */}
        <div className="p-4 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-3 px-4 py-3 mb-4 bg-white/5 rounded-2xl">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-xs">
              {userRole === "staff" ? "AD" : "GU"}
            </div>
            <div className="overflow-hidden">
              <p className="text-white text-xs font-bold truncate">
                {userRole === "staff" ? "Admin Staff" : "Guest User"}
              </p>
              <p className="text-slate-500 text-[10px] uppercase tracking-tighter">
                Premium Member
              </p>
            </div>
          </div>

          <button
            onClick={() => setActiveTab("home")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors font-bold text-sm uppercase tracking-widest"
          >
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;