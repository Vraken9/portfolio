"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroParallax, ProductItem } from "@/components/ui/hero-parallax";
import { ROW_MODULKU, ROW_FLORAMART, ROW_KOS_NUSA } from "@/data/parallaxShowcaseData";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import { LetsWorkTogether } from "@/components/lets-work";
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";
import { CERTIFICATES_DATA } from "@/data/certificatesData";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const handleCardSelect = (item: ProductItem) => {
    if (item.projectId) {
      router.push(`/projects/${item.projectId}`);
    }
  };

  return (
    <MagneticCursor blendMode="difference" cursorSize={22}>
      <main className="relative min-h-screen bg-zinc-50 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        {/* Floating Glassmorphism Navigation */}
        <Navbar />

        {/* Hero Section: 3D Running Parallax Showcase - Clean Pure White Aesthetic */}
        <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-white text-zinc-950">
          {/* Subtle Ambient Radial White Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] pointer-events-none -z-0 opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(245, 246, 250, 0.9) 0%, rgba(250, 251, 253, 0.5) 50%, transparent 80%)",
            }}
          />

          {/* Top Spacing to account for fixed navbar */}
          <div className="w-full h-12 sm:h-16" />

          {/* 3D Running Image Parallax Showcase with Option A Branding Header */}
          <div className="relative w-full flex-1 flex flex-col justify-center">
            <HeroParallax
              row1={ROW_MODULKU}
              row2={ROW_FLORAMART}
              row3={ROW_KOS_NUSA}
              onSelectProduct={handleCardSelect}
              className="min-h-[700px] h-[86vh] sm:h-[88vh] lg:h-[92vh]"
              header={
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 pt-14 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 w-full left-0 top-0 pointer-events-none">
                  <div className="max-w-3xl relative pointer-events-auto p-5 sm:p-7 lg:p-8 rounded-3xl border border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur-md">
                    {/* Headline */}
                    <h1
                      data-cursor-invert
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-zinc-950 leading-[1.08] drop-shadow-xs cursor-default select-none"
                    >
                      Architecting Autonomous AI Agents & Production Software Ecosystems.
                    </h1>

                    {/* Description with Informatics Engineering undergraduate at UMNU Kebumen */}
                    <p className="mt-3.5 text-xs sm:text-sm md:text-base text-zinc-700 font-semibold leading-relaxed max-w-2xl">
                      Hi, I&apos;m <span className="font-bold text-zinc-950">Akhyar Mualif</span> — Informatics Engineering undergraduate at <span className="font-bold text-zinc-950">UMNU Kebumen</span>. I engineer full-stack platforms, LLM orchestration workflows, and scalable digital solutions tailored for real-world impact.
                    </p>

                    {/* Quick Action CTA Buttons */}
                    <div className="mt-5 flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href="#projects"
                        data-cursor-expand
                        className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg"
                      >
                        <span>Explore Projects</span>
                        <ArrowDown className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="#sertifikat"
                        data-cursor-expand
                        className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-800 hover:bg-zinc-100 transition-all text-xs sm:text-sm font-semibold border border-zinc-200 shadow-xs"
                      >
                        <span>Verified Credentials ({CERTIFICATES_DATA.length})</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          {/* Bottom Indicator */}
          <div className="relative z-30 flex flex-col items-center justify-center pt-2 pb-3 gap-1.5 pointer-events-auto">
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              SCROLL TO EXPLORE • 2026
            </span>
            <a
              href="#tentang"
              data-cursor-expand
              className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-800 transition-colors animate-bounce"
              aria-label="Scroll down to About section"
            >
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* Ambient Aurora Zone: About Me & Featured Projects */}
        <div className="relative w-full overflow-hidden bg-[#fafafc]">
          <AuroraBackground
            className="min-h-0 bg-transparent text-zinc-900 border-t border-zinc-200/80 justify-start"
            showRadialGradient={false}
          >
            {/* About Me Section - Inspired by Hexaa.sh Architecture */}
            <AboutSection />

            {/* Selected Works - Streamlined Projects Section */}
            <ProjectsSection />
          </AuroraBackground>
        </div>

        {/* Continuous Learning & Verified Credentials - WorksWheel + ShaderMetal */}
        <CertificatesSection />

        {/* Contact & Open Partnership Section */}
        <LetsWorkTogether />

        {/* Interactive Halftone Wordmark Footer */}
        <HalftoneWordmarkFooter wordmark="AKHYAR" />
      </main>
    </MagneticCursor>
  );
}
