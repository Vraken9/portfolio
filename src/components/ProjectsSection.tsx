"use client";

import React from "react";
import Link from "next/link";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// Re-export showcase rows from dedicated data module
export { ROW_MODULKU, ROW_FLORAMART, ROW_KOS_NUSA } from "@/data/parallaxShowcaseData";







// ==========================================
// 2. PROJECT CARDS (REQUESTED HOMEPAGE IMAGES)
// ==========================================
export interface ProjectCardItem {
  id: string;
  title: string;
  description: string;
  imageId: string;
  badge: string[];
  link?: string;
  apkLink?: string;
  repo: string;
  caseStudy?: string;
}

// 4 Featured Projects on Homepage
export const HOMEPAGE_PROJECTS: ProjectCardItem[] = [
  {
    id: "modulku",
    title: "ModulKu",
    description:
      "AI-powered educational platform that generates Kurikulum Merdeka teaching modules and exam questions in seconds with API token cost monitoring.",
    imageId: "/gambar-web-modulku/halaman-landing-page.png",
    badge: ["EdTech", "Generative AI", "Next.js"],
    link: "https://modul-ku.vercel.app/",
    repo: "https://github.com/Vraken9/modulku",
    caseStudy: "/projects/modulku",
  },
  {
    id: "kos-id",
    title: "Kos.id",
    description:
      "A full-stack boarding house reservation and management system with room filters, payment proof upload, and automated PDF receipt generator.",
    imageId: "/gambar-web-kos.id/halaman-beranda.png",
    badge: ["Property Tech", "Booking Engine", "Full-Stack"],
    link: "https://kos-id.vercel.app/",
    repo: "https://github.com/Vraken9/kos-id",
    caseStudy: "/projects/kos-id",
  },
  {
    id: "nusa-bali",
    title: "Nusa AI",
    description:
      "Smart Bali tourism marketplace featuring an interactive AI chatbot powered by Retrieval-Augmented Generation (RAG) answering visitor questions 24/7.",
    imageId: "/gambar-web-nusa-bali/halaman-beranda-destinasi.png",
    badge: ["Tourism Tech", "RAG AI", "Chatbot"],
    link: "https://learning-ai-dun.vercel.app/",
    repo: "https://github.com/Vraken9/nusa-bali",
    caseStudy: "/projects/nusa-bali",
  },
  {
    id: "finai",
    title: "FinAI Mobile",
    description:
      "An AI-powered personal finance and budgeting mobile app built with Flutter, featuring Gemini AI voice input, receipt OCR scanner, and an intelligent advisor.",
    imageId: "/gambar-finai/finai-card-banner.png",
    badge: ["Mobile App", "Flutter", "Gemini AI", "FinTech"],
    link: "https://drive.google.com/drive/folders/1d9zsDj80XVgeccTvx8CXiNqXpxrSJ_Uq?usp=sharing",
    apkLink: "https://drive.google.com/file/d/1qz8Gfuc_c4nQW1kQnTP53cSR44I87wCM/view?usp=sharing",
    repo: "https://github.com/Vraken9/FinAI.git",
    caseStudy: "/projects/finai",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-0 isolate w-full overflow-hidden text-zinc-900 border-t border-zinc-200/80 bg-white">
      {/* 1. Divider Line with /projects indicator */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl h-14 border-x border-zinc-200/80 flex items-center justify-between px-6 sm:px-10">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />
          <span className="font-mono text-xs text-zinc-400">/projects</span>
          <Link
            href="/projects"
            data-cursor-expand
            className="font-mono text-xs text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            <span>[view all projects]</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 3. Header Banner with About Section Gradient */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl min-h-[250px] border-x border-zinc-200/80 overflow-hidden flex items-center bg-white">
          <PlusSeparator
            position={["top-left", "top-right", "bottom-left", "bottom-right"]}
            className="z-20"
          />

          {/* Authentic Gradient Background Matching About Section */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(135% 100% at 50% 100%, #ebdffc 0%, #f7f3fe 42%, #ffffff 82%)",
              }}
            />
          </div>

          {/* Text Overlay: Crisp dark text matching About Section */}
          <div
            data-cursor-expand
            data-cursor-scale="1.45"
            className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-10 py-12 pointer-events-auto cursor-default"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-zinc-950">
              akhyar&apos;s projects.
            </h2>
            <p className="max-w-2xl text-xs sm:text-sm md:text-base mt-2.5 leading-relaxed font-normal text-zinc-600">
              here are the projects I&apos;ve worked on, showcasing my skills and passion for software development. each project reflects my commitment to creating impactful solutions and continuous learning.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Projects Grid: 4 Projects with Requested Images & Raised Bottom White Fade Gradient */}
      <div className="relative w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl border-x border-zinc-200/80 p-2 pb-20 grid grid-cols-1 md:grid-cols-2 gap-2">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          {HOMEPAGE_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xs border border-zinc-200/80 bg-white transition-all hover:border-zinc-400"
            >
              {/* Image Section */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-zinc-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.imageId}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col gap-3.5 p-6">
                {/* Badges */}
                {project.badge && project.badge.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.badge.map((badgeText) => (
                      <span
                        key={badgeText}
                        className="inline-flex items-center justify-center rounded-xs px-2 py-0.5 text-xs font-mono font-medium bg-zinc-950 text-white"
                      >
                        {badgeText}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="font-semibold text-lg md:text-xl text-zinc-950 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="max-w-lg text-zinc-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-sm">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      [github]
                    </a>
                  )}

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      [live demo]
                    </a>
                  )}

                  {project.apkLink && (
                    <a
                      href={project.apkLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      [download apk]
                    </a>
                  )}

                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="font-medium text-zinc-500 hover:text-zinc-950 hover:underline"
                    >
                      [case study]
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Smooth Raised White Gradient Overlay covering higher up on projects 3 & 4 */}
          <div className="absolute inset-x-0 bottom-0 h-[440px] sm:h-[500px] bg-gradient-to-t from-white via-white/95 via-35% to-transparent flex flex-col items-center justify-end pb-12 sm:pb-16 z-20 pointer-events-none">
            {/* Styled button in cohesive Bauhaus / Hexaa theme */}
            <Link
              href="/projects"
              data-cursor-expand
              className="pointer-events-auto group inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-zinc-900 bg-white/95 text-zinc-950 font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-zinc-950 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 backdrop-blur-md"
            >
              <span>[explore all projects on /projects]</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-[11px] font-mono text-zinc-500 mt-2.5 pointer-events-none">
              Showing 4 featured projects — click to explore the full directory
            </span>
          </div>
        </div>
      </div>

      {/* 5. Section Bottom Bar */}
      <div className="w-full border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-5 border-x border-zinc-200/80 flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-400 tracking-wider">
            [END OF FEATURED SHOWCASE]
          </span>
          <Link
            href="/projects"
            data-cursor-expand
            className="font-mono text-xs text-blue-600 hover:underline inline-flex items-center gap-1.5"
          >
            <span>View full project directory</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <PlusSeparator position={["bottom-left", "bottom-right"]} />
        </div>
      </div>
    </section>
  );
}
