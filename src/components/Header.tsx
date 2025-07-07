"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 border-b border-slate-800/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-12">
            <div className="w-11 h-11 flex items-center justify-center">
              <img
                src="/images/crypto-logo.png"
                alt="Crypto Logo"
                className="w-11 h-11 object-contain"
                onError={(e) => {
                  // Fallback to gradient background if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.className =
                      "w-11 h-11 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg";
                    parent.innerHTML =
                      '<svg class="w-5 h-5 text-slate-900" stroke-width="2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="20 6 9 17 4 12"></polyline></svg>';
                  }
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              <a
                href="#"
                className="text-white font-medium hover:text-orange-400 transition-colors duration-200 relative group"
              >
                Pasar
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-slate-400 font-medium hover:text-orange-400 transition-colors duration-200 relative group"
              >
                Tentang Kami
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                className="text-slate-400 font-medium hover:text-orange-400 transition-colors duration-200 relative group"
              >
                Kontak Kami
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </nav>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2.5 border border-orange-400/80 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-slate-900 transition-all duration-200 font-medium text-sm">
              SIGN IN
            </button>
            <button className="px-6 py-2.5 bg-orange-400 text-slate-900 rounded-lg hover:bg-orange-500 transition-all duration-200 font-medium text-sm shadow-lg hover:shadow-orange-400/25">
              SIGN UP
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 border-t border-slate-800/50">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-6 mb-8">
              <a
                href="#"
                onClick={closeMobileMenu}
                className="text-white font-medium hover:text-orange-400 transition-colors duration-200 px-2"
              >
                Pasar
              </a>
              <a
                href="#"
                onClick={closeMobileMenu}
                className="text-slate-400 font-medium hover:text-orange-400 transition-colors duration-200 px-2"
              >
                Tentang Kami
              </a>
              <a
                href="#"
                onClick={closeMobileMenu}
                className="text-slate-400 font-medium hover:text-orange-400 transition-colors duration-200 px-2"
              >
                Kontak Kami
              </a>
            </nav>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-4 px-2">
              <button
                onClick={closeMobileMenu}
                className="w-full px-6 py-3 border border-orange-400/80 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-slate-900 transition-all duration-200 font-medium text-sm"
              >
                SIGN IN
              </button>
              <button
                onClick={closeMobileMenu}
                className="w-full px-6 py-3 bg-orange-400 text-slate-900 rounded-lg hover:bg-orange-500 transition-all duration-200 font-medium text-sm shadow-lg"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
