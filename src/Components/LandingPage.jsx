import React from "react";

const LandingPage = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen bg-[#070b14] text-white flex flex-col font-sans relative overflow-x-hidden">
      {/* Background Image Setup */}
      {/* Note: Agar aapne koi real image use ki hai, toh uska path URL mein daal dein */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.4)", // Background thoda dark karne ke liye taaki text dikhe
        }}
      ></div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* === HEADER SECTION === */}
        <header className="flex flex-col items-center pt-8 px-4 w-full">
          {/* Top Buttons (Staff & User Login) */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 w-full">
            <button
              onClick={() => setActiveTab("dashboard")}
              className="px-4 py-2 md:px-6 border border-white text-xs md:text-sm tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
            >
              STAFF LOGIN
            </button>
            <button
              onClick={() => setActiveTab("user-home")}
              className="px-4 py-2 md:px-6 border border-white text-xs md:text-sm tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-300 rounded-sm"
            >
              USER LOGIN
            </button>
          </div>

          {/* Logo Section */}
          <div className="mb-6 flex flex-col items-center">
            {/* TRH Text Logo - (Aap chaho toh iski jagah apni <img> tag laga sakte ho) */}
            <div className="font-serif text-3xl md:text-4xl text-[#d4af37] border-y border-[#d4af37] py-2 px-4 mb-2 tracking-widest">
              TRH
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm tracking-widest font-semibold mt-2">
            <button className="border-b-2 border-[#d4af37] pb-1 text-[#d4af37] uppercase">
              Rooms
            </button>
            <button className="pb-1 hover:text-[#d4af37] transition-colors uppercase">
              Wellness
            </button>
            <button className="pb-1 hover:text-[#d4af37] transition-colors uppercase">
              Gastro
            </button>
            <button className="pb-1 hover:text-[#d4af37] transition-colors uppercase">
              Resort
            </button>
          </nav>
        </header>

        {/* === MIDDLE HERO SECTION === */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center mt-12 md:mt-0">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight drop-shadow-lg">
            Wellness &<br />
            Spa
          </h1>
          <p className="text-sm md:text-base lg:text-lg tracking-widest mb-10 max-w-xl mx-auto drop-shadow-md">
            Extensive wellness. Thermal spring.
            <br className="hidden md:block" /> Team of therapists.
          </p>
          <button className="px-8 py-3 border border-white text-xs md:text-sm tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300">
            EXPLORE
          </button>
        </main>

        {/* === FOOTER SECTION === */}
        {/* Gradient background bottom par text padhne ke liye */}
        <footer className="bg-gradient-to-t from-black/90 to-transparent pt-20 pb-8 px-6 md:px-16 lg:px-32 w-full mt-auto">
          {/* Main Footer Content */}
          {/* YAHI LINE MAIN FIX HAI: flex-col on mobile, flex-row on desktop */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-8 mb-12">
            {/* Left Side: Brand & Description */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-3xl font-serif text-[#d4af37] mb-4 drop-shadow-md">
                The Royal Hotel
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
                Experience ultimate relaxation and luxury. Your sanctuary for
                premium wellness, gastronomy, and unforgettable private events.
              </p>
            </div>

            {/* Right Side: Contact Details */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
              <h2 className="text-xl font-serif text-white mb-4 tracking-wider">
                Contact Us
              </h2>
              <div className="text-gray-300 text-sm md:text-base space-y-2 flex flex-col items-center md:items-end">
                <p>123 Luxury Avenue, Paradise City</p>
                <p className="tracking-wider">+91 98765 43210</p>
                <p className="hover:text-[#d4af37] cursor-pointer transition-colors">
                  reservations@theroyalhotel.com
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Line */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-center items-center">
            <p className="text-xs text-gray-500 tracking-wider text-center">
              &copy; 2026 The Royal Hotel. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
