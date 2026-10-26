"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Bot,
  Laptop,
  Smartphone,
  Rocket,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { MagnetizeButton } from "@/components/magnetize-button";

interface CollaborationPillar {
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
  tags: string[];
}

const COLLABORATION_PILLARS: CollaborationPillar[] = [
  {
    icon: Bot,
    title: "Autonomous AI Agents & RAG",
    badge: "AI Orchestration",
    description:
      "Design and deploy domain-specific LLM multi-agent systems, context-aware RAG pipelines, and automated tool-calling workflows.",
    tags: ["LangChain", "OpenAI / Claude", "FastAPI", "Vector DB"],
  },
  {
    icon: Laptop,
    title: "Production Web & Enterprise SaaS",
    badge: "Full-Stack Dev",
    description:
      "Architect end-to-end web applications with Next.js App Router, TypeScript, modern UI/UX design systems, and resilient cloud databases.",
    tags: ["Next.js 16", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Smartphone,
    title: "Cross-Platform Mobile Apps",
    badge: "Mobile Systems",
    description:
      "Build native-grade mobile applications with Flutter, state management, offline-first caching, and integrated on-device AI/OCR.",
    tags: ["Flutter", "Gemini API", "OCR", "REST APIs"],
  },
  {
    icon: Rocket,
    title: "Strategic Partnerships & Co-Founding",
    badge: "Technopreneurship",
    description:
      "Open to co-founding tech startups, national hackathon teams, corporate digital transformation, and high-impact venture prototyping.",
    tags: ["MVP Sprint", "Product Architecture", "Hackathons"],
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    "Halo Akhyar, saya tertarik berdiskusi mengenai proyek / kolaborasi kemitraan bersama Anda. Bisa kita jadwalkan diskusi lebih lanjut?"
  );

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-24 lg:py-28 bg-[#faf9fc] text-zinc-900 overflow-hidden border-t border-zinc-200/80"
    >
      {/* Soft Ambient Background Radial Gradients */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none -z-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(224, 231, 255, 0.7) 0%, rgba(243, 232, 255, 0.45) 45%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide mb-4 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Projects & Strategic Partnerships • 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 leading-tight">
              Let&apos;s Build Something Extraordinary Together.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              Whether you need an Autonomous AI Agent solution, production-grade web/mobile platform, or a dedicated technopreneurial co-founder for your next venture, my inbox is always open.
            </p>
          </div>

          {/* Quick Stats or Meta Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-600">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              <span>Kebumen / Remote Worldwide</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-emerald-500" />
              <span>Avg. Response &lt; 24h</span>
            </div>
          </div>
        </div>

        {/* 4 Partnership Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {COLLABORATION_PILLARS.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-3xl bg-white/80 border border-zinc-200/90 hover:border-indigo-300 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 group-hover:text-indigo-600 transition-colors">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-zinc-950 mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100">
                  {pillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Direct Communication Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-indigo-50/20 to-sky-50/30 border border-white/80 p-8 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(99,102,241,0.06)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Message & Direct Pitch */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
                GET IN TOUCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mt-1.5 mb-3 leading-snug">
                Ready to turn an ambitious vision into working software?
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed max-w-xl">
                I am actively taking on select client projects, enterprise AI workflow prototypes, and venture collaborations. Reach out directly via WhatsApp for an immediate consultation or email for formal inquiries.
              </p>

              {/* Direct Channels */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                
                {/* WhatsApp Primary Connect */}
                <a
                  href={`https://wa.me/6287739556828?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>

                {/* Email Copy Pill */}
                <button
                  onClick={handleCopyEmail}
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-3 rounded-full bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-sm border border-zinc-200/90 transition-all duration-200 shadow-2xs hover:border-zinc-300"
                >
                  <Mail className="w-4 h-4 text-zinc-500" />
                  <span>{PERSONAL_INFO.email}</span>
                  {copied ? (
                    <span className="inline-flex items-center text-xs text-emerald-600 font-medium ml-1">
                      <Check className="w-3.5 h-3.5 mr-0.5" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-400 hover:text-zinc-600 ml-1" />
                  )}
                </button>

              </div>
            </div>

            {/* Right: Social & Profile Cards + Magnetize Button */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              
              <div className="w-full max-w-sm p-5 rounded-2xl bg-white/90 border border-zinc-200/80 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-950 text-white">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950">GitHub Profile</h4>
                    <p className="text-xs text-zinc-500">github.com/Vraken9</p>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="w-full max-w-sm p-5 rounded-2xl bg-white/90 border border-zinc-200/80 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#0a66c2] text-white">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-950">LinkedIn Network</h4>
                    <p className="text-xs text-zinc-500">linkedin.com/in/akhyar-mualif</p>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-zinc-950 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Playful Magnetize Button from src/components/magnetize-button.tsx */}
              <div className="w-full max-w-sm flex justify-center sm:justify-end mt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry%20-%20Akhyar%20Mualif`}
                  className="inline-block"
                >
                  <MagnetizeButton
                    particleCount={14}
                    attractRadius={60}
                    className="w-full sm:min-w-48 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200 cursor-pointer shadow-xs"
                  />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;
