"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export interface NavItem {
  label: string;
  href: string;
}

const defaultNavLinks: NavItem[] = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#tech-stack" },
  { label: "Proyek Web", href: "#projects" },
  { label: "Sertifikat", href: "#certificates" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

export function GlashmorphismNavigation({
  links = defaultNavLinks,
}: {
  links?: NavItem[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      const hash = window.location.hash || "#hero";
      setActiveHash(hash);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pointer-events-none">
      {/* Enlarged Main Container Width (matches max-w-7xl) with Glassmorphism */}
      <div
        className={`pointer-events-auto w-full max-w-7xl rounded-2xl sm:rounded-3xl transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-2xl border border-zinc-200/90 shadow-[0_16px_40px_-8px_rgba(0,0,0,0.08)] py-3.5 px-6 sm:px-10"
            : "bg-white/70 backdrop-blur-xl border border-white/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] py-4 px-6 sm:px-10"
        }`}
      >
        <div className="flex items-center justify-between gap-6">
          
          {/* Desktop Navigation Links - Enlarged & Proportional */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 flex-1">
            {links.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-zinc-950 bg-zinc-100/90 font-semibold shadow-xs"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70 rounded-xl transition-all inline-flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Mobile View Toggle */}
          <div className="flex md:hidden items-center justify-between w-full">
            <span className="text-xs font-mono font-bold tracking-wider text-zinc-700 uppercase">
              Navigasi Portfolio
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-zinc-200/90 rounded-2xl p-5 shadow-2xl flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveHash(link.href);
                setMobileMenuOpen(false);
              }}
              className="px-4 py-3 text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/80 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-100 mt-1 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 text-white font-medium text-sm shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

// Export default and alias for Component to fit any import convention
export const Component = GlashmorphismNavigation;
export default GlashmorphismNavigation;
