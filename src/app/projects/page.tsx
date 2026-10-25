"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { GradientBackground } from "@/components/ui/almoayyed";
import { BackgroundSnippets } from "@/components/ui/background-snippets";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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

export const ALL_PROJECTS: ProjectCardItem[] = [
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
    imageId: "/gambar-web-floramart/halaman-beranda.png",
    badge: ["E-Commerce", "Multi-Vendor", "Paused"],
    link: "https://floramart.vercel.app/",
    repo: "https://github.com/Vraken9/floramart",
    caseStudy: "/projects/floramart",
    unmaintained: true,
  },
];

export default function ProjectsPage() {
  const [unmaintainedModalProject, setUnmaintainedModalProject] = useState<ProjectCardItem | null>(null);

  return (
    <main className="min-h-screen relative bg-[#faf7fe] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top-to-Bottom Bright Purple Gradient Background Snippets */}
      <BackgroundSnippets className="pointer-events-none opacity-90" />

      {/* Top Navbar matching hexaa.sh */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/90 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between font-mono text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>[home]</span>
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/#tentang" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              [about]
            </Link>
            <Link href="/projects" className="text-zinc-950 font-bold underline">
              [projects]
            </Link>
            <Link href="/#sertifikat" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              [certificates]
            </Link>
            <a
              href="https://github.com/Vraken9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-1"
            >
              <span>[github]</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Grid Spacer Line */}
      <section className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl h-14 border-x border-zinc-200/80 flex items-center justify-between px-6 sm:px-10">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />
          <span className="font-mono text-xs text-zinc-400">/projects</span>
          <span className="font-mono text-xs text-zinc-500">5 Projects</span>
        </div>
      </section>

      {/* Hexaa Header Banner with Original Almoayyed Background */}
      <section className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl min-h-[250px] border-x border-zinc-200/80 overflow-hidden flex items-center">
          <PlusSeparator
            position={["top-left", "top-right", "bottom-left", "bottom-right"]}
            className="z-20"
          />

          {/* Original Almoayyed Gradient Background */}
          <div className="absolute inset-0 z-0">
            <GradientBackground className="w-full h-full" />
          </div>

          {/* Text Overlay: Uses text-white with mix-blend-difference */}
          <div className="relative z-10 w-full h-full text-white mix-blend-difference flex flex-col justify-center px-6 sm:px-10 py-12 pointer-events-none">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              akhyar&apos;s projects.
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm md:text-base mt-2.5 leading-relaxed font-normal">
              here are the projects I&apos;ve worked on, showcasing my skills and passion for software development. each project reflects my commitment to creating impactful solutions and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid: 5 Projects total, with the 5th project centered in the middle */}
      <section className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl border-x border-zinc-200/80 p-2 grid grid-cols-1 md:grid-cols-2 gap-2">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          {ALL_PROJECTS.map((project, idx) => {
            const isLastOdd = idx === ALL_PROJECTS.length - 1 && ALL_PROJECTS.length % 2 !== 0;

            return (
              <div
                key={project.id}
                className={cn(
                  "group relative overflow-hidden rounded-xs border border-zinc-200/80 bg-white transition-all hover:border-zinc-400 shadow-xs",
                  isLastOdd && "md:col-span-2 md:max-w-2xl md:w-full md:mx-auto"
                )}
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
                  <h2 className="font-semibold text-lg md:text-xl text-zinc-950 leading-tight">
                    {project.title}
                  </h2>

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
            );
          })}
        </div>
      </section>

      {/* Hexaa Bottom Footer */}
      <footer className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl border-x border-zinc-200/80 px-6 sm:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl tracking-tight text-zinc-950">akhyar.</span>
            </div>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              software developer & AI agent builder
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-blue-600">
            <Link href="/" className="hover:underline">[home]</Link>
            <Link href="/#tentang" className="hover:underline">[about me]</Link>
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
      </footer>

      {/* Unmaintained Alert Dialog Modal */}
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
                  <h3 className="text-base font-bold text-zinc-950">
                    Unmaintained Project
                  </h3>
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
    </main>
  );
}
