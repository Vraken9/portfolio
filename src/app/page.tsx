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

        {/* Hero Section: 3D Running Parallax Showcase with Glassmorphism Aesthetic */}
        <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-50/60 text-zinc-950">
          {/* Luminous Ambient Glassmorphism Light Mesh Orbs */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none -z-0 overflow-hidden select-none">
            {/* Top-left soft lavender-indigo glow */}
            <div className="absolute -top-[10%] left-[5%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(224,231,255,0.85)_0%,rgba(238,242,255,0.4)_45%,transparent_70%)] blur-3xl opacity-85" />
            
            {/* Top-right soft cyan-sky glow */}
            <div className="absolute top-[3%] right-[5%] w-[680px] h-[680px] rounded-full bg-[radial-gradient(circle_at_center,rgba(224,242,254,0.8)_0%,rgba(219,234,254,0.35)_45%,transparent_70%)] blur-3xl opacity-80" />
            
            {/* Center-left soft violet glow positioned right behind the glass card */}
            <div className="absolute top-[26%] left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(243,232,255,0.75)_0%,rgba(245,243,255,0.3)_45%,transparent_70%)] blur-3xl opacity-80" />
            
            {/* Bottom-right gentle mint-emerald glow */}
            <div className="absolute bottom-[2%] right-[12%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(209,250,229,0.5)_0%,rgba(236,253,245,0.2)_45%,transparent_70%)] blur-3xl opacity-60" />

            {/* Subtle top-to-bottom frosted reflection sheet */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(248,250,252,0.45) 50%, rgba(255,255,255,0.85) 100%)",
              }}
            />
          </div>

          {/* Top Spacing to account for fixed navbar */}
          <div className="w-full h-12 sm:h-16" />

          {/* 3D Running Image Parallax Showcase with Glassmorphic Branding Header */}
          <div className="relative w-full flex-1 flex flex-col justify-center">
            <HeroParallax
              row1={ROW_MODULKU}
              row2={ROW_FLORAMART}
              row3={ROW_KOS_NUSA}
              onSelectProduct={handleCardSelect}
              className="min-h-[700px] h-[86vh] sm:h-[88vh] lg:h-[92vh]"
              header={
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 pt-14 sm:pt-20 lg:pt-24 pb-4 sm:pb-6 w-full left-0 top-0 pointer-events-none">
                  {/* Authentic Frosted Glassmorphism Card */}
                  <div className="max-w-3xl relative pointer-events-auto p-5 sm:p-7 lg:p-8 rounded-3xl border border-white/80 bg-white/35 backdrop-blur-2xl sm:backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.08),inset_0_1px_2px_0_rgba(255,255,255,0.9)]">
                    {/* Inner subtle specular light gradient */}
                    <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/45 via-white/10 to-transparent pointer-events-none" />

                    {/* Headline */}
                    <h1
                      data-cursor-invert
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-zinc-950 leading-[1.08] drop-shadow-xs cursor-default select-none"
                    >
                      Architecting Autonomous AI Agents & Production Software Ecosystems.
                    </h1>

                    {/* Description with Informatics Engineering undergraduate at UMNU Kebumen */}
                    <p className="mt-3.5 text-xs sm:text-sm md:text-base text-zinc-800 font-semibold leading-relaxed max-w-2xl drop-shadow-2xs">
                      Hi, I&apos;m <span className="font-bold text-zinc-950">Akhyar Mualif</span> — Informatics Engineering undergraduate at <span className="font-bold text-zinc-950">UMNU Kebumen</span>. I engineer full-stack platforms, LLM orchestration workflows, and scalable digital solutions tailored for real-world impact.
                    </p>

                    {/* Quick Action CTA Buttons with Glassmorphic Harmony */}
                    <div className="mt-5 flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href="#projects"
                        data-cursor-expand
                        className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950/90 text-white hover:bg-zinc-950 transition-all text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg backdrop-blur-md"
                      >
                        <span>Explore Projects</span>
                        <ArrowDown className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="#sertifikat"
                        data-cursor-expand
                        className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/45 text-zinc-900 hover:bg-white/80 transition-all text-xs sm:text-sm font-semibold border border-white/70 backdrop-blur-md shadow-xs"
                      >
                        <span>Verified Credentials ({CERTIFICATES_DATA.length})</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
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
