import React from "react";

const LandingPage = ({ setActiveTab }) => {
  return (
    // BACKGROUND SECTION
    <div 
      className="min-h-screen bg-[#070b14] text-white flex flex-col font-sans relative overflow-x-hidden bg-cover bg-center bg-no-repeat"
      style={{
        // BHAISAAB YAHAN APNI ASLI BACKGROUND IMAGE KA PATH DAAL DIJIYEGA
        backgroundImage: "url('background.png')" 
      }}
    >
      
      {/* Ek dark overlay taaki white text padhne mein aasaani ho */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* === HEADER SECTION === */}
        <header className="flex flex-col items-center pt-8 px-4 w-full">
          
          {/* Top Buttons (Staff & User Login) */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 w-full">
            <button
              onClick={() => setActiveTab("dashboard")}
              className="px-6 py-2 border border-white text-xs tracking-widest hover:bg-white hover:text-black transition-all"
            >
              STAFF LOGIN
            </button>
            <button
              onClick={() => setActiveTab("user-home")}
              className="px-6 py-2 border border-white text-xs tracking-widest hover:bg-white hover:text-black transition-all"
            >
              USER LOGIN
            </button>
          </div>

          {/* Logo Section */}
          <div className="mb-6">
            {/* APNA TRH WALA LOGO YAHAN DAALEIN */}
            <img 
              src='logo.png' 
              alt="TRH Logo" 
              className="h-20 w-auto object-contain" 
            />
          </div>

          {/* Navigation Links - (flex-wrap add kiya h mobile ke liye) */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs tracking-[0.2em] font-semibold mt-2">
            <button className="border-b-2 border-[#d4af37] pb-1 text-[#d4af37]">ROOMS</button>
            <button className="pb-1 hover:text-[#d4af37] transition-colors">WELLNESS</button>
            <button className="pb-1 hover:text-[#d4af37] transition-colors">GASTRO</button>
            <button className="pb-1 hover:text-[#d4af37] transition-colors">RESORT</button>
          </nav>
        </header>

        {/* === MIDDLE HERO SECTION === */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center mt-10 md:mt-0">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
            Wellness &<br />Spa
          </h1>
          <p className="text-base md:text-lg tracking-widest mb-10 max-w-2xl mx-auto">
            Extensive wellness. Thermal spring.<br />Team of therapists.
          </p>
          <button className="px-10 py-3 border border-white text-sm tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all">
            EXPLORE
          </button>
        </main>

        {/* === FOOTER SECTION === */}
        {/* MOBILE KE LIYE FIX: flex-col md:flex-row lagaya hai taaki text pichke nahi */}
        <footer className="w-full mt-auto bg-black/60 pt-16 pb-8 px-6 md:px-20 lg:px-40 backdrop-blur-sm">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8 mb-12 text-center md:text-left">
            
            {/* Left Side: Brand */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif text-[#d4af37] mb-4">The Royal Hotel</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
                Experience ultimate relaxation and luxury. Your sanctuary for premium wellness, gastronomy, and unforgettable private events.
              </p>
            </div>

            {/* Right Side: Contact */}
            <div className="w-full md:w-1/2 flex flex-col md:items-end">
              <h2 className="text-xl font-serif text-white mb-4">Contact Us</h2>
              <div className="text-gray-300 text-sm md:text-base space-y-2">
                <p>123 Luxury Avenue, Paradise City</p>
                <p>+91 98765 43210</p>
                <p>reservations@theroyalhotel.com</p>
              </div>
            </div>

          </div>

          {/* Copyright Line */}
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-xs text-gray-400 tracking-wider">
              &copy; 2026 The Royal Hotel. All rights reserved.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default LandingPage;