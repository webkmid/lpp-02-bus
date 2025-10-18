// src/components/Header.tsx
import { useState } from 'react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'Tentang' },
  { href: '#product', label: 'Armada' },
  { href: '#gallery', label: 'Galeri' },
];

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-sm border-b border-navy/5">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex gap-2.5 items-center">
          <div className="grid place-items-center w-11 h-11 rounded-lg bg-gradient-to-br from-navy to-blue-700 text-white font-extrabold shadow-lg">
            TB
          </div>
          <div>
            <div className="font-extrabold text-navy">TransBus</div>
            <div className="text-muted text-xs">Premium Bus Services</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-teal-600">
              {link.label}
            </a>
          ))}
          <a href="#booking" className="inline-flex items-center gap-2 py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-navy to-blue-700 text-white font-bold">
            Booking
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2 border border-navy/10 rounded-md">☰</button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="py-2" onClick={() => setMobileMenuOpen(false)}>{link.label}</a>
            ))}
            <a href="#booking" className="py-2.5 mt-2 text-center rounded-xl bg-gradient-to-r from-navy to-blue-700 text-white font-bold" onClick={() => setMobileMenuOpen(false)}>
              Booking
            </a>
          </div>
        </div>
      )}
    </header>
  );
};