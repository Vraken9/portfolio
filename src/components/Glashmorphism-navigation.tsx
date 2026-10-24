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
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      {/* Pill capsule with aurora-blended glassmorphism - Sized comfortably (+5-10% boost) */}
      <div
        className={`pointer-events-auto w-full max-w-[1140px] rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/70 bg-gradient-to-r from-white/85 via-indigo-50/30 to-sky-50/40 backdrop-blur-2xl border border-white/90 shadow-[0_16px_36px_-6px_rgba(99,102,241,0.12),inset_0_1px_2px_rgba(255,255,255,0.95)] py-2.5 px-6 sm:px-8"
            : "bg-white/50 bg-gradient-to-r from-white/65 via-indigo-50/25 to-sky-50/35 backdrop-blur-xl border border-white/80 shadow-[0_12px_30px_-4px_rgba(99,102,241,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] py-3 px-6 sm:px-8"
        }`}
      >
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Desktop Navigation Links - Sized 5-10% larger (14.5px / 15px font) */}
          <nav className="hidden md:flex items-center gap-2 flex-1">
            {links.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-magnetic
                  onClick={() => setActiveHash(link.href)}
                  className={`px-4.5 py-2 text-sm sm:text-[14.5px] font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-zinc-950 bg-white/95 shadow-[0_2px_14px_rgba(99,102,241,0.1)] border border-white/90"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons - 5-10% larger */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="px-4.5 py-2 text-sm sm:text-[14.5px] font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-white/60 rounded-full transition-all duration-200 inline-flex items-center gap-1.5 border border-transparent hover:border-white/70"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-700" />
            </a>

            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-6.5 sm:py-3 rounded-full bg-zinc-950 text-white font-semibold text-sm sm:text-[14.5px] hover:bg-zinc-800 transition-all duration-200 shadow-sm hover:shadow-[0_4px_18px_rgba(99,102,241,0.25)] hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-indigo-300" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Mobile View Toggle */}
          <div className="flex md:hidden items-center justify-between w-full py-0.5">
            <span className="text-xs font-mono font-bold tracking-wider text-zinc-800 uppercase">
              PORTFOLIO
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/75 hover:bg-white/95 text-zinc-900 border border-white/80 transition-colors shadow-xs"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-white/85 bg-gradient-to-b from-white/95 via-indigo-50/20 to-sky-50/30 backdrop-blur-2xl border border-white/80 rounded-3xl p-5 shadow-[0_16px_40px_rgba(99,102,241,0.12)] flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveHash(link.href);
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800 hover:text-zinc-950 hover:bg-white/70 rounded-full transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-200/60 mt-1 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-zinc-950 text-white font-semibold text-xs shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-indigo-300" />
              <span>Hubungi via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export const Component = GlashmorphismNavigation;
export default GlashmorphismNavigation;
