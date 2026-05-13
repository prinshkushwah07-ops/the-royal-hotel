import React, { useState } from "react";
// Dhyan dijiye: Yahan sabhi imports mein 'C' capital kar diya gaya hai
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import RoomsBooking from "./Components/RoomsBooking";
import LandingPage from "./Components/LandingPage";
import UserHome from "./Components/UserHome";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Helper function to handle role and tab switching
  const handleNavigation = (tab) => {
    setActiveTab(tab);
    if (tab === "dashboard" || tab === "room-booking") {
      setUserRole("staff");
    } else if (tab === "user-home") {
      setUserRole("user");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <LandingPage setActiveTab={handleNavigation} />;

      // Admin (Staff) Views
      case "dashboard":
        return <Dashboard setIsMobileOpen={setIsMobileOpen} />;
      case "room-booking":
        return <RoomsBooking setIsMobileOpen={setIsMobileOpen} />;

      // User (Guest) View
      case "user-home":
        return <UserHome setIsMobileOpen={setIsMobileOpen} />;

      default:
        return <Dashboard setIsMobileOpen={setIsMobileOpen} />;
    }
  };

  // Agar 'home' tab active hai, toh sirf Landing Page dikhayenge (bina sidebar ke)
  if (activeTab === "home") {
    return <LandingPage setActiveTab={handleNavigation} />;
  }

  return (
    // 'relative' aur 'w-full' add kiya hai taaki mobile par sidebar overlap theek se kaam kare
    <div className="flex h-screen bg-[#070b14] overflow-hidden relative w-full">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        userRole={userRole}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative z-0">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
