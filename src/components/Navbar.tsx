"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Menu, X, Sparkles, ExternalLink } from "lucide-react";
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
    { label: "Tentang", href: "#about" },
    { label: "Keahlian", href: "#tech-stack" },
    { label: "Proyek Web", href: "#projects" },
    { label: "Sertifikat", href: "#certificates" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border border-zinc-200/90 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.08)] py-2.5 px-4 sm:px-6"
            : "bg-white/60 backdrop-blur-lg border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 px-5 sm:px-7"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Status */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 text-zinc-900 hover:text-sky-600 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              AM
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-extrabold tracking-tight flex items-center gap-1.5 leading-none">
                {PERSONAL_INFO.callName}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-wider">
                AI BUILDER
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/70 p-1 rounded-full border border-zinc-200/60">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-950 hover:bg-white rounded-full transition-all duration-200 shadow-none hover:shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 text-white font-medium text-xs hover:bg-zinc-800 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl border border-zinc-200/80 rounded-2xl p-4 shadow-xl flex flex-col gap-2 md:hidden animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-zinc-700 hover:text-sky-600 hover:bg-zinc-50 rounded-xl transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-100 mt-1">
            <a
              href={PERSONAL_INFO.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-900 text-white font-medium text-xs shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Langsung</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
