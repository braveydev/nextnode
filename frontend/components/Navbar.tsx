"use client";

import { useState, useEffect } from "react";
import SignIn from "./SignIn"; 
import SignUp from "./SignUp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<"signin" | "signup" | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 mt-4 px-4 md:px-0">
      <nav className="mx-auto flex w-[82%] items-center justify-between rounded-2xl border-[0.5px] border-gray-500 bg-[#1a1a1a]/80 p-3 backdrop-blur-md md:w-[68%] shadow-lg">
        
        {/* LOGO SECTION */}
        <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-600 bg-[#262626] transition-all hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)]">
          <span className="text-xl font-bold text-white group-hover:scale-110 transition">J</span>
        </div>

        {/* PROFILE SECTION WITH DROPDOWN */}
        <div className="relative">
          <div 
            onClick={() => setIsOpen(!isOpen)}
            className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-600 bg-[#262626] transition-all hover:border-fuchsia-500 hover:shadow-[0_0_10px_rgba(192,38,211,0.4)] overflow-hidden"
          >
            <span className="text-xs font-semibold text-gray-400 group-hover:text-white uppercase">Joy</span>
          </div>

          {/* DROPDOWN MENU */}
          {isOpen && (
            <>
              {/* Backdrop to close dropdown */}
              <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)}></div>
              
              <div className="absolute right-0 mt-3 w-40 overflow-hidden rounded-xl border border-gray-500 bg-[#1a1a1a] shadow-2xl z-50">
                <div className="flex flex-col py-1">
                  <button 
                    onClick={() => { setActiveModal("signin"); setIsOpen(false); }}
                    className="px-4 py-2 text-left text-sm text-gray-300 hover:bg-fuchsia-500/10 hover:text-fuchsia-400 transition-colors"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => { setActiveModal("signup"); setIsOpen(false); }}
                    className="px-4 py-2 text-left text-sm text-gray-300 hover:bg-fuchsia-500/10 hover:text-fuchsia-400 transition-colors"
                  >
                    Sign Up
                  </button>
                  
                  {/* Divider */}
                  <div className="my-1 h-[0.5px] bg-gray-800"></div>
                  
                  {/* Sign Out - Always kept here */}
                  <button 
                    onClick={() => { console.log("Logging out..."); setIsOpen(false); }}
                    className="px-4 py-2 text-left text-sm text-rose-500 hover:bg-rose-500/10 transition-colors font-semibold"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* RENDER MODALS */}
      {activeModal === "signin" && (
        <SignIn onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "signup" && (
        <SignUp onClose={() => setActiveModal(null)} />
      )}
    </header>
  );
}