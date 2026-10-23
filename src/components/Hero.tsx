"use client";

import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Terminal, Bot, Award, ExternalLink, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO, RUNNING_TEXT_ITEMS } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Decorative Gradients & Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Top-center radial aurora spotlight */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-b from-cyan-500/20 via-indigo-600/15 to-transparent blur-[120px] rounded-full" />
        {/* Bottom-right purple ambient aura */}
        <div className="absolute bottom-[5%] right-[-10%] w-[450px] h-[450px] bg-purple-600/15 blur-[130px] rounded-full" />
        {/* Left deep cyan accent */}
        <div className="absolute top-[35%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/15 blur-[110px] rounded-full" />
        
        {/* Subtle Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Badges & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-500/10 hover:border-cyan-400/50 transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Technopreneur Portfolio 2026 • AI Agent Builder</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Halo, saya{" "}
                <span className="text-gradient underline decoration-cyan-400/30 underline-offset-8">
                  {PERSONAL_INFO.fullName}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                Mahasiswa <span className="text-cyan-300 font-semibold">{PERSONAL_INFO.department}</span> di{" "}
                <span className="text-indigo-300 font-semibold">{PERSONAL_INFO.university}</span> ({PERSONAL_INFO.semester}) yang mengorkestrasi kekuatan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-bold">
                  AI Agent
                </span>{" "}
                untuk membangun produk digital fungsional & siap produksi.
              </p>
            </div>

            {/* Paragraph / Value Proposition */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              Gemar memanfaatkan waktu luang untuk menyelesaikan pelatihan teknologi bergengsi, menghasilkan{" "}
              <strong className="text-slate-200">45+ sertifikat</strong> dan{" "}
              <strong className="text-slate-200">4 aplikasi web full-stack</strong> (termasuk SaaS EdTech dengan AI Generator, platform pariwisata RAG Chatbot, sistem reservasi kos, dan marketplace e-commerce).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 group"
              >
                <span>Lihat 4 Proyek Web</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#certificates"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 font-semibold text-sm hover:text-cyan-300 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Award className="w-4 h-4 text-cyan-400" />
                <span>Eksplorasi 45+ Sertifikat</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl glass-panel text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Micro Badges */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-slate-400 border-t border-white/5 w-full">
              <div className="flex items-center gap-1.5">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>Agentic AI Orchestrator</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>IBM, Google, AWS Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Next.js & Python</span>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Picture with 3D Card Glow and Floating Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[300px] sm:w-[350px] aspect-[4/5] group">
              
              {/* Animated Glow Backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700 animate-pulse" />
              
              {/* Outer Card Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-white/15 p-2 bg-[#090d16]/90 shadow-2xl">
                
                {/* Photo Container */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/profile.jpeg"
                    alt="Akhyar Mualif - AI Agent Builder & Technopreneur"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                  />
                  
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent opacity-60" />
                  
                  {/* Name Tag on Photo Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
                    <p className="text-xs uppercase tracking-wider text-cyan-400 font-mono font-bold">
                      {PERSONAL_INFO.department}
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {PERSONAL_INFO.fullName}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      UNU Kebumen • Indonesia
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: 45+ Verified Certs */}
              <div className="absolute -top-4 -left-6 sm:-left-8 px-3.5 py-2 rounded-xl glass-panel border border-cyan-500/40 bg-[#0b0f19]/90 shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Pelatihan Selesai</p>
                  <p className="text-xs font-bold text-white">45+ Sertifikat</p>
                </div>
              </div>

              {/* Floating Badge 2: AI Agent & Fullstack */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl glass-panel border border-indigo-500/40 bg-[#0b0f19]/90 shadow-xl flex items-center gap-2.5 animate-bounce [animation-duration:5s]">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">Vibe Coding & Agentic</p>
                  <p className="text-xs font-bold text-white">AI Builder</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Running Text / Infinite Marquee Bands */}
      <div className="mt-20 w-full overflow-hidden border-y border-white/10 bg-slate-950/70 backdrop-blur-md py-3.5 relative">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...RUNNING_TEXT_ITEMS, ...RUNNING_TEXT_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-slate-300 hover:text-cyan-300 transition-colors cursor-default">
                {item}
              </span>
              <span className="text-cyan-400 text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
