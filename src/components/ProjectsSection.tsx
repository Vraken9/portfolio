"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { GradientBackground } from "@/components/ui/almoayyed";
import { AnimatePresence, motion } from "framer-motion";
import { X, AlertCircle, ArrowUpRight } from "lucide-react";

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
  unmaintained?: boolean;
}

export const HEXAA_PROJECTS: ProjectCardItem[] = [
  {
    id: "modulku",
    title: "ModulKu",
    description:
      "AI-powered educational platform that generates Kurikulum Merdeka teaching modules and exam questions in seconds with API token cost monitoring.",
    imageId: "/parallax-showcase/modulku-home.png",
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
    imageId: "/parallax-showcase/kos-id-home.png",
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
    imageId: "/parallax-showcase/nusa-bali-home.png",
    badge: ["Tourism Tech", "RAG AI", "Chatbot"],
    link: "https://learning-ai-dun.vercel.app/",
    repo: "https://github.com/Vraken9/nusa-bali",
    caseStudy: "/projects/nusa-bali",
  },
  {
    id: "finai",
    title: "FinAI",
    description:
      "An AI-powered personal finance and budgeting mobile app built with Flutter, featuring Gemini AI voice input, receipt OCR scanner, and an intelligent advisor.",
    imageId: "/parallax-showcase/finai-home.png",
    badge: ["Mobile App", "Flutter", "Gemini AI", "FinTech"],
    link: "https://drive.google.com/file/d/1qz8Gfuc_c4nQW1kQnTP53cSR44I87wCM/view?usp=sharing",
    apkLink: "https://drive.google.com/file/d/1qz8Gfuc_c4nQW1kQnTP53cSR44I87wCM/view?usp=sharing",
    repo: "https://github.com/Vraken9/FinAI.git",
    caseStudy: "/projects/finai",
  },
  {
    id: "floramart",
    title: "FloraMart",
    description:
      "A multi-vendor botanical marketplace connecting ornamental plant nurseries with buyers, complete with vendor storefronts, cart checkout, and store analytics.",
    imageId: "/parallax-showcase/floramart-home.png",
    badge: ["E-Commerce", "Multi-Vendor", "Paused"],
    link: "https://floramart.vercel.app/",
    repo: "https://github.com/Vraken9/floramart",
    caseStudy: "/projects/floramart",
    unmaintained: true,
  },
  {
    id: "ai-lab",
    title: "AI Agent & RAG Lab",
    description:
      "Research experiments in autonomous AI agents, multi-step prompt orchestration, and vector knowledge retrieval pipelines.",
    imageId: "/parallax-showcase/modulku-6-admin-api-cost.png",
    badge: ["AI Agents", "Research", "Open Source"],
    link: "https://github.com/Vraken9",
    repo: "https://github.com/Vraken9",
    caseStudy: "https://github.com/Vraken9",
  },
];

export default function ProjectsSection() {
  const [unmaintainedModalProject, setUnmaintainedModalProject] = useState<ProjectCardItem | null>(null);
  const [useAlmoayyedBg, setUseAlmoayyedBg] = useState(false);

  return (
    <section id="projects" className="relative z-0 w-full overflow-hidden text-zinc-900 bg-white">
      {/* 1. Header Grid Spacer */}
      <div className="w-full border-zinc-200/80 border-b">
        <div className="relative mx-auto max-w-7xl h-14 border-zinc-200/80 border-x flex items-center justify-between px-4">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />
          <span className="font-mono text-xs text-zinc-400">/projects</span>
          <button
            type="button"
            onClick={() => setUseAlmoayyedBg(!useAlmoayyedBg)}
            className="font-mono text-[11px] text-zinc-500 hover:text-zinc-950 px-2 py-0.5 rounded border border-zinc-200 bg-zinc-50 transition-colors"
          >
            {useAlmoayyedBg ? "Switch to Hexaa Blue Grain" : "Switch to Almoayyed Grain"}
          </button>
        </div>
      </div>

      {/* 2. Hexaa Header Banner */}
      <div className="w-full border-zinc-200/80 border-b">
        <div className="relative mx-auto max-w-7xl min-h-[250px] border-zinc-200/80 border-x overflow-hidden flex items-center">
          <PlusSeparator
            position={["top-left", "top-right", "bottom-left", "bottom-right"]}
            className="z-20"
          />

          {/* Background Layer: Blue-Violet Shader Grain Gradient or Almoayyed Grain */}
          {useAlmoayyedBg ? (
            <div className="absolute inset-0 z-0">
              <GradientBackground className="w-full h-full" />
            </div>
          ) : (
            <div className="absolute inset-0 z-0">
              {/* Authentic hexaa.sh blue-purple grainy gradient: ["#3930c6", "#4151be", "#392d39"] */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: "#3930c6",
                  backgroundImage: `
                    radial-gradient(circle at 72% 28%, rgba(65, 81, 190, 0.95) 0%, rgba(65, 81, 190, 0.6) 35%, transparent 70%),
                    radial-gradient(circle at 18% 75%, rgba(57, 45, 57, 0.95) 0%, rgba(57, 45, 57, 0.7) 40%, transparent 75%),
                    radial-gradient(circle at 50% 50%, rgba(57, 48, 198, 1) 0%, rgba(57, 48, 198, 0.8) 50%, transparent 100%),
                    linear-gradient(135deg, #3930c6 0%, #4151be 50%, #2b1f48 100%)
                  `,
                }}
              />
              {/* Film Grain Noise Pass */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full opacity-35 mix-blend-overlay pointer-events-none"
              >
                <filter id="hexaa-grain-overlay">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.75"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#hexaa-grain-overlay)" />
              </svg>
            </div>
          )}

          {/* Text Overlay: Uses text-white with mix-blend-difference, exactly matching hexaa.sh */}
          <div className="relative z-10 w-full h-full text-white mix-blend-difference flex flex-col justify-center px-6 sm:px-10 py-12 pointer-events-none">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              akhyar's projects.
            </h2>
            <p className="max-w-2xl text-xs sm:text-sm md:text-base mt-2.5 leading-relaxed font-normal">
              here are the projects I&apos;ve worked on, showcasing my skills and passion for software development. each project reflects my commitment to creating impactful solutions and continuous learning.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Projects Grid: 2 columns matching hexaa.sh */}
      <div className="w-full border-zinc-200/80 border-b">
        <div className="relative mx-auto max-w-7xl border-zinc-200/80 border-x p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          {HEXAA_PROJECTS.map((project) => (
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
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                    project.unmaintained ? (
                      <button
                        type="button"
                        onClick={() => setUnmaintainedModalProject(project)}
                        className="font-medium text-blue-600 hover:underline cursor-pointer"
                      >
                        [live demo]
                      </button>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        [live demo]
                      </a>
                    )
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
        </div>
      </div>

      {/* 4. Bottom Grid Footer matching hexaa.sh */}
      <div className="w-full border-zinc-200/80 border-b">
        <div className="relative mx-auto max-w-7xl border-zinc-200/80 border-x px-6 sm:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-zinc-950">akhyar.</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              software developer & AI agent enthusiast
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-blue-600">
            <Link href="/#tentang" className="hover:underline">[about me]</Link>
            <Link href="/#projects" className="hover:underline">[projects]</Link>
            <Link href="/#sertifikat" className="hover:underline">[certificates]</Link>
            <a
              href="https://github.com/Vraken9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              <span>[github]</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 5. Unmaintained Alert Dialog (matches hexaa.sh) */}
      <AnimatePresence>
        {unmaintainedModalProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setUnmaintainedModalProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-md bg-white rounded-xl shadow-2xl border border-zinc-200 p-6 z-10"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-950">
                    Unmaintained Project
                  </h4>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    The project <b>{unmaintainedModalProject.title}</b> is currently paused and the live demo may be <b>outdated or undergoing database maintenance</b>. Are you sure you want to continue?
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-3 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setUnmaintainedModalProject(null)}
                  className="px-4 py-2 rounded border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  Cancel
                </button>
                {unmaintainedModalProject.link && (
                  <a
                    href={unmaintainedModalProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setUnmaintainedModalProject(null)}
                    className="px-4 py-2 rounded bg-zinc-950 text-white hover:bg-zinc-800 transition-colors"
                  >
                    Continue anyway
                  </a>
                )}
                {unmaintainedModalProject.caseStudy && (
                  <Link
                    href={unmaintainedModalProject.caseStudy}
                    onClick={() => setUnmaintainedModalProject(null)}
                    className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                  >
                    View Case Study
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
