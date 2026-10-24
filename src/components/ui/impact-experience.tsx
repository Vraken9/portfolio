"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, Sparkles } from "lucide-react";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  skills: string[];
  image?: string;
  featured?: boolean;
}

const defaultExperiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "AI Agent Builder & Full-Stack Developer",
    company: "Technopreneur Project Hub",
    period: "2024 - Sekarang",
    location: "Kebumen, ID",
    description:
      "Merancang dan mengimplementasikan aplikasi cerdas berbantuan AI Agent, termasuk sistem RAG (Retrieval-Augmented Generation), LLM workflows, dan antarmuka interaktif responsif.",
    skills: ["AI Agents", "Next.js", "TypeScript", "RAG", "Tailwind CSS"],
    image: "/gambar-web-nusa-bali/1.png",
    featured: true,
  },
  {
    id: "exp-2",
    role: "Mahasiswa Teknik Informatika",
    company: "Universitas Ma'arif Nahdlatul Ulama Kebumen",
    period: "2022 - Sekarang",
    location: "Kebumen, ID",
    description:
      "Aktif menyelesaikan kurikulum akademik semester 5, memimpin riset project kolaboratif, serta mengeksekusi 45+ sertifikasi dan final project teknologi internasional.",
    skills: ["Software Engineering", "Algorithms", "System Architecture", "Cloud Fundamentals"],
    image: "/profile.jpeg",
  },
  {
    id: "exp-3",
    role: "Web Application Lead - Kos.id & FloraMart",
    company: "Independent Product Development",
    period: "2023 - 2024",
    location: "Remote",
    description:
      "Membangun platform reservasi kos terintegrasi (Kos.id) dan sistem multi-vendor agritech (FloraMart) dengan manajemen inventaris real-time dan checkout aman.",
    skills: ["React", "State Management", "REST APIs", "UI/UX Architecture"],
    image: "/gambar-web-kos.id/1.png",
  },
];

interface ImpactExperienceProps {
  experiences?: ExperienceItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function ImpactExperience({
  experiences = defaultExperiences,
  title = "Pengalaman & Rekam Jejak",
  subtitle = "Perjalanan membangun produk digital dan eksplorasi intensif AI Agents",
  className = "",
}: ImpactExperienceProps) {
  const [hoveredExp, setHoveredExp] = useState<ExperienceItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className={`relative w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-zinc-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
            {title}
          </h2>
          <p className="mt-2 text-zinc-600 text-sm sm:text-base max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Experience List Table */}
        <div className="relative border-t border-zinc-200 divide-y divide-zinc-200">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onMouseEnter={() => setHoveredExp(exp)}
              onMouseLeave={() => setHoveredExp(null)}
              className="group relative py-8 sm:py-10 transition-colors duration-300 hover:bg-zinc-100/50 rounded-2xl px-4 sm:px-6 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                
                {/* Left: Role and Company */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-zinc-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="text-xs font-mono font-medium text-zinc-400 flex items-center gap-1">
                        • <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-1 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                    <span>{exp.role}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="text-sm font-semibold text-zinc-600 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                {/* Center: Description */}
                <div className="lg:w-1/2">
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Floating Hover-Reveal Image Preview (follows mouse with smooth spring) */}
        <AnimatePresence>
          {hoveredExp?.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePos.x + 24,
                y: mousePos.y - 80,
              }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="pointer-events-none absolute z-30 hidden lg:block w-64 h-40 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/90 bg-zinc-900"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={hoveredExp.image}
                alt={hoveredExp.role}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                <span className="text-xs font-semibold text-white truncate">
                  {hoveredExp.company}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ImpactExperience;
