"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Reservasi", href: "/rsvp" },
    { name: "Fasilitas", href: "/wfc" },
    { name: "Lokasi", href: "/lokasi" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Determine if on light background page (/wfc or /lokasi) where text needs to be maroon/red (#5b0612)
  const isLightPage = pathname === "/wfc" || pathname === "/lokasi";
  const textColor = isLightPage ? "text-[#5b0612]" : "text-white";
  const underlineColor = isLightPage ? "after:bg-[#5b0612]" : "after:bg-white";

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent border-b-0">
        <div className="mx-auto flex items-center justify-between max-w-7xl px-6 py-5 md:px-8">
          
          {/* Left: Logo & Brand Name - Enlarged Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
            aria-label="Maroone Caffe - Kembali ke Beranda"
          >
            {/* Logo perbesar */}
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-full aspect-square overflow-hidden border border-[#5b0612]/30 bg-[#3b040b] flex items-center justify-center shadow-lg">
              <img
                src="/icon.png"
                alt="Maroone Logo"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <span className={`font-didot-italic text-2xl sm:text-3xl ${textColor} tracking-wider drop-shadow-sm`}>
              MAROONE&apos;
            </span>
          </Link>

          {/* Center: Desktop nav links */}
          <nav className="hidden md:flex items-center justify-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-inter tracking-wider transition-colors duration-200 py-1 relative drop-shadow-sm after:absolute after:-bottom-1 after:left-0 after:h-0.5 ${underlineColor} after:transition-all after:duration-300 ${
                    active 
                      ? `${textColor} font-medium after:w-full` 
                      : `${isLightPage ? "text-[#5b0612]/80 hover:text-[#5b0612]" : "text-white/80 hover:text-white"} after:w-0 hover:after:w-full`
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop CTA */}
          <div className="hidden md:flex justify-end">
            <Link
              href="/rsvp"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-inter transition-all duration-300 shadow-md ${
                isLightPage
                  ? "bg-[#5b0612] text-white hover:bg-[#7d0919]"
                  : "bg-white text-[#5b0612] hover:bg-white/90"
              }`}
            >
              <span>Reservasi Meja</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile: Hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-center p-2 md:hidden ${textColor} relative w-10 h-10 drop-shadow-sm`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            <Menu 
              className={`h-6 w-6 absolute transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
              }`} 
              aria-hidden="true" 
            />
            <X 
              className={`h-6 w-6 absolute transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
              }`} 
              aria-hidden="true" 
            />
          </button>
        </div>
      </header>

      {/* === MOBILE FULLSCREEN POPUP MENU === */}
      <div 
        className={`fixed inset-0 bg-[#1f0307]/85 backdrop-blur-md z-[998] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="mobile-menu"
        className={`fixed inset-0 z-[999] flex items-center justify-center md:hidden pointer-events-none transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Mobile Navigation"
      >
        <div 
          className={`bg-[#5b0612] text-white rounded-3xl shadow-2xl w-[88vw] max-w-sm p-8 flex flex-col items-center gap-5 border border-white/20 transition-all duration-400 ease-out ${
            isOpen 
              ? "scale-100 translate-y-0 opacity-100 pointer-events-auto" 
              : "scale-90 translate-y-8 opacity-0 pointer-events-none"
          }`}
        >
          {/* Logo inside popup */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="relative h-16 w-16 shrink-0 rounded-full aspect-square overflow-hidden border border-white/30 bg-[#3b040b]">
              <img
                src="/icon.png"
                alt="Maroone Logo"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <span className="font-didot-italic text-3xl text-white tracking-wide">
              MAROONE&apos;
            </span>
          </div>

          <div className="w-12 h-0.5 bg-white/20 rounded-full" />

          {/* Nav links */}
          {navLinks.map((link, i) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-inter tracking-wider transition-all duration-200 py-1 ${
                  active ? "text-white font-medium underline underline-offset-4" : "text-white/80 hover:text-white"
                }`}
                style={{ transitionDelay: isOpen ? `${(i + 1) * 50}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="w-12 h-0.5 bg-white/20 rounded-full" />

          {/* CTA Button */}
          <Link
            href="/rsvp"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-white py-3 text-xs font-inter text-[#5b0612] hover:bg-white/90 transition-colors duration-200"
          >
            <span>Reservasi Meja</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </>
  );
}
