'use client';

import { useState } from 'react';
import { Wrench, Phone, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '#uslugi', label: 'Usługi' },
    { href: '#cennik', label: 'Cennik' },
    { href: '#o-nas', label: 'O nas' },
    { href: '#faq', label: 'FAQ' },
    { href: '#opinie', label: 'Opinie' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className="bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 text-white shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xl md:text-2xl font-bold">
            <Wrench className="w-6 h-6 md:w-7 md:h-7 text-yellow-400" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Auto Serwis</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="hover:text-yellow-400 transition-all duration-300 hover:scale-105 text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Call Button */}
            <a 
              href="tel:+48123456789" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 px-3 md:px-6 py-1.5 md:py-2.5 rounded-lg font-semibold text-sm md:text-base hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Zadzwoń</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 max-h-screen visible'
              : 'opacity-0 max-h-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block py-3 px-4 rounded-lg hover:bg-gray-800/50 hover:text-yellow-400 transition-all duration-200 text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

