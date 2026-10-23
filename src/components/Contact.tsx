"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  MessageSquare,
  Copy,
  Check,
  Send,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+628930123608");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch (e) {
      // ignore
    }
  };

  const handleConfettiClick = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#07090e]">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-600/15 to-indigo-600/15 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-14 border border-cyan-500/30 text-center relative overflow-hidden bg-gradient-to-b from-[#0c1222]/90 to-[#080d18]/90 shadow-2xl">
          
          {/* Subtle Cyber Grid */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build the Future Together</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Tertarik Berkolaborasi atau Mengembangkan{" "}
              <span className="text-gradient">Solusi AI Agent?</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Saya selalu terbuka untuk diskusi seputar rekayasa perangkat lunak, otomatisasi alur kerja dengan AI Agent, atau kolaborasi proyek inovatif lainnya.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              
              {/* WhatsApp Primary Button */}
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleConfettiClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Kirim Pesan WhatsApp</span>
              </a>

              {/* Copy Phone Number */}
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm hover:text-cyan-300 hover:border-cyan-500/40 transition-all hover:scale-105"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-mono text-xs">Nomor Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Salin No. WhatsApp</span>
                  </>
                )}
              </button>

            </div>

            {/* Social Links Row */}
            <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/Vraken9</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <span className="text-slate-600 hidden sm:inline">•</span>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>linkedin.com/in/akhyar-mualif</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
