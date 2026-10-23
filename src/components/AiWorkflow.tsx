"use client";

import { Target, Boxes, Sparkles, Rocket, ArrowRight } from "lucide-react";
import { WORKFLOW_STEPS } from "@/data/portfolioData";

export default function AiWorkflow() {
  const iconMap: Record<string, React.ReactNode> = {
    Target: <Target className="w-6 h-6 text-cyan-400" />,
    Boxes: <Boxes className="w-6 h-6 text-indigo-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    Rocket: <Rocket className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section id="workflow" className="relative py-24 border-b border-white/5 bg-[#090d16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technopreneur Mindset & Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bagaimana Saya Membangun dengan{" "}
            <span className="text-gradient">AI Agents</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Sebagai mahasiswa technopreneur, saya memadukan analisis masalah nyata dengan kecepatan dan presisi agen kecerdasan buatan untuk merilis produk digital berkualitas tinggi.
          </p>
        </div>

        {/* 4 Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl"
            >
              {/* Step Number Background Watermark */}
              <div className="absolute top-4 right-4 text-4xl font-extrabold font-mono text-white/5 group-hover:text-cyan-500/15 transition-colors select-none">
                {step.step}
              </div>

              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-cyan-500/10">
                    {iconMap[step.icon]}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:text-cyan-300 transition-colors">
                    {step.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {step.description}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Fase {step.step}</span>
                {idx < WORKFLOW_STEPS.length - 1 ? (
                  <ArrowRight className="w-4 h-4 text-cyan-400/50 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1" />
                ) : (
                  <span className="text-emerald-400 font-semibold">Tuntas ✓</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout */}
        <div className="mt-12 p-6 rounded-2xl glass-panel border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-indigo-950/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Hasil Nyata: 4 Aplikasi Web Siap Pakai
            </h4>
            <p className="text-xs text-slate-400">
              Metodologi di atas telah diterapkan langsung pada platform Modulku, Nusa Bali, Kos.id, dan FloraMart.
            </p>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition-colors shadow-lg shadow-cyan-500/20"
          >
            Lihat Proyek di Bawah ↓
          </a>
        </div>

      </div>
    </section>
  );
}
