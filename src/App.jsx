import React, { useState } from "react";
import Sidebar from "./components/TempSidebar";
import Dashboard from "./components/Dashboard";
import RoomsBooking from "./components/RoomsBooking";
import LandingPage from "./components/LandingPage";
import UserHome from "./components/UserHome";

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
      case "room-booking": // Sidebar se linked ID
        return <RoomsBooking setIsMobileOpen={setIsMobileOpen} />;

      // User (Guest) View
      case "user-home":
        return <UserHome setIsMobileOpen={setIsMobileOpen} />;

      default:
        return <Dashboard setIsMobileOpen={setIsMobileOpen} />;
    }
  };

  if (activeTab === "home") {
    return <LandingPage setActiveTab={handleNavigation} />;
  }

  return (
    <div className="flex h-screen bg-[#070b14] overflow-hidden">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        userRole={userRole}
      />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;