"use client";

import { Layers, Award, CheckCircle2, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Metrics() {
  const iconMap: Record<string, React.ReactNode> = {
    "4": <Layers className="w-5 h-5 text-cyan-400" />,
    "45+": <Award className="w-5 h-5 text-indigo-400" />,
    "100%": <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    "AI Agents": <Cpu className="w-5 h-5 text-purple-400" />,
  };

  return (
    <section className="relative py-12 border-b border-white/5 bg-[#090d16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1 bg-gradient-to-b from-white/[0.03] to-transparent"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  {iconMap[stat.value] || <Cpu className="w-5 h-5 text-cyan-400" />}
                </div>
              </div>
              <h3 className="text-sm font-semibold text-slate-200">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
