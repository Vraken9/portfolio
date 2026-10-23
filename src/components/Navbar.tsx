"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Menu, X, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Keahlian", href: "#tech-stack" },
    { label: "Alur AI", href: "#workflow" },
    { label: "4 Proyek Web", href: "#projects" },
    { label: "45+ Sertifikat", href: "#certificates" },
    { label: "Tentang", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090e]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-wide flex items-center gap-1.5">
                {PERSONAL_INFO.callName}
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-mono">
                AI BUILDER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Status Badge & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] text-emerald-300 font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              UNU Kebumen • Smt 5
            </div>

            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-xs hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 mt-3 px-4 py-4 space-y-2 bg-[#07090e]/95 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs"
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
