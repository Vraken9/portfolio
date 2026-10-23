"use client";

import { ArrowUp, Terminal, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/10 bg-[#05070b] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-white text-sm">
                {PERSONAL_INFO.fullName}
              </p>
              <p className="text-[11px] text-slate-500">
                {PERSONAL_INFO.department} • {PERSONAL_INFO.university}
              </p>
            </div>
          </div>

          {/* Technopreneur Course Attribution */}
          <div className="text-center sm:text-right space-y-1">
            <p className="text-slate-400">
              Dibuat untuk Portofolio Mata Kuliah <strong>Technopreneur</strong> (Semester 5).
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Next.js 16 • Tailwind CSS v4 • Framer Motion • 21st.dev Inspirations
            </p>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel hover:text-cyan-300 hover:border-cyan-500/40 transition-all text-xs font-mono"
            aria-label="Kembali ke atas"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-slate-600 text-[11px]">
          © 2026 Akhyar Mualif. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
