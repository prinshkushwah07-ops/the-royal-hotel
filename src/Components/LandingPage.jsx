import React, { useState } from "react";
import { X, Crown } from "lucide-react";

function LandingPage({ setActiveTab }) {
  // Modal control state
  const [loginModal, setLoginModal] = useState({ isOpen: false, type: "" });

  // Form Submit Handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginModal.type === "staff") {
      setLoginModal({ isOpen: false, type: "" });
      setActiveTab("dashboard");
    } else {
      setLoginModal({ isOpen: false, type: "" });
      setActiveTab("user-home");
    }
  };

  return (
    <div className="relative w-full text-white font-sans overflow-x-hidden flex flex-col selection:bg-amber-500/30">
      {/* BACKGROUND IMAGE - Fixed behind all content */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col w-full">
        {/* HEADER SECTION */}
        <header className="w-full flex flex-col items-center pt-5 pb-4 relative border-b border-white/20">
          {/* Top Login Buttons */}
          <div className="absolute top-10 right-4 md:right-10 flex flex-row gap-3 z-50">
            <button
              onClick={() => setLoginModal({ isOpen: true, type: "staff" })}
              className="text-white text-[10px] md:text-xs font-bold tracking-[0.1em] border border-white/60 px-4 py-1.5 md:px-5 md:py-2 hover:bg-white hover:text-black transition-all uppercase rounded-sm"
            >
              Staff Login
            </button>
            <button
              onClick={() => setLoginModal({ isOpen: true, type: "user" })}
              className="text-white text-[10px] md:text-xs font-bold tracking-[0.1em] border border-white/60 px-4 py-1.5 md:px-5 md:py-2 hover:bg-white hover:text-black transition-all uppercase rounded-sm"
            >
              User Login
            </button>
          </div>

          {/* Logo */}
          <div className="mb-4 mt-12 md:mt-2">
            <img
              src="/logo.png"
              alt="The Royal Logo"
              className="h-16 md:h-20 object-contain"
            />
          </div>

          {/* Navigation */}
          <nav className="flex justify-center items-center gap-5 md:gap-12 flex-wrap px-4 mt-2">
            <button className="text-[#fbbf24] border-b-2 border-[#fbbf24] pb-1 text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase transition-all">
              ROOMS
            </button>
            <button className="text-white hover:text-[#fbbf24] text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase transition-all">
              WELLNESS
            </button>
            <button className="text-white hover:text-[#fbbf24] text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase transition-all">
              GASTRO
            </button>
            <button className="text-white hover:text-[#fbbf24] text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase transition-all">
              RESORT
            </button>
          </nav>
        </header>

        {/* HERO CONTENT */}
        <main className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 mt-[-50px]">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif font-light tracking-wider text-white mb-6 leading-tight drop-shadow-2xl">
            Wellness & Spa
          </h1>
          <p className="text-white text-sm md:text-lg font-medium tracking-[0.15em] max-w-3xl mx-auto mb-10 drop-shadow-lg px-2 opacity-95">
            Extensive wellness. Thermal spring. Team of therapists.
          </p>
          <button className="bg-transparent border border-white text-white px-10 md:px-14 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 shadow-xl">
            Explore
          </button>
        </main>

        {/* FOOTER SECTION */}
        <footer className="w-full bg-[#0a0a0a]/90 backdrop-blur-sm border-t border-white/10 py-10 px-8 lg:px-16 mt-auto">
          <div className="max-w-5xl mx-auto flex flex-row justify-between items-start w-full">
            <div className="w-1/2 pr-4 text-left">
              <h3 className="font-serif text-[1.25rem] md:text-[1.5rem] text-[#fbbf24] mb-3 tracking-wide">
                The Royal Hotel
              </h3>
              <p className="text-[#cbd5e1] text-[13px] md:text-[15px] leading-relaxed max-w-[350px] text-justify tracking-[0.5px]">
                Experience ultimate relaxation and luxury. Your sanctuary for
                premium wellness, gastronomy, and unforgettable private events.
              </p>
            </div>

            <div className="w-1/2 flex justify-end text-left">
              <div>
                <h3 className="font-serif text-[1.15rem] md:text-[1.25rem] text-white font-bold mb-3 tracking-wide">
                  Contact Us
                </h3>
                <p className="text-[#cbd5e1] text-[13px] md:text-[15px] leading-relaxed tracking-[0.5px]">
                  123 Luxury Avenue, Paradise City
                  <br />
                  +91 98765 43210
                  <br />
                  reservations@theroyalhotel.com
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center mt-8 pt-4 border-t border-[#333333]">
            <p className="text-[#64748b] text-[11px] md:text-[13px]">
              &copy; {new Date().getFullYear()} The Royal Hotel. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* LOGIN MODAL (POPUP) */}
      {loginModal.isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#050505] border border-white/10 p-8 w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setLoginModal({ isOpen: false, type: "" })}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center mb-8">
              <Crown
                size={40}
                className="text-[#fbbf24] mb-4"
                strokeWidth={1.5}
              />
              <h2 className="text-2xl font-serif tracking-[0.1em] uppercase text-white">
                {loginModal.type === "staff" ? "Staff Login" : "User Login"}
              </h2>
              <p className="text-[#94a3b8] text-xs tracking-widest uppercase mt-2">
                Sign in to continue
              </p>
            </div>

            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div>
                <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block">
                  Username or Email
                </label>
                <input
                  type="text"
                  defaultValue={
                    loginModal.type === "staff" ? "admin_royal" : "guest_user"
                  }
                  className="w-full bg-[#111] border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#fbbf24] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue="••••••••"
                  className="w-full bg-[#111] border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#fbbf24] transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#fbbf24] text-black font-bold tracking-[0.2em] uppercase py-3 mt-4 hover:bg-white transition-colors"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
