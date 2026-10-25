"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HeroParallax, ProductItem } from "@/components/ui/hero-parallax";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { PROJECTS } from "@/data/portfolioData";
import {
  ArrowRight,
  ExternalLink,
  Download,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Globe,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// ROW 1: Exclusively ModulKu AI (6 images)
export const ROW_MODULKU: ProductItem[] = [
  {
    id: "modulku-landing",
    projectId: "modulku",
    title: "ModulKu AI — Landing & Platform Portal",
    subtitle: "AI-Powered Curriculum & Lesson Plan Hub for Educators",
    tag: "MODULKU AI",
    category: "EdTech & Generative AI",
    technologies: ["Next.js", "AI Generator", "Tailwind CSS"],
    thumbnail: "/parallax-showcase/modulku-1-landing.png",
    link: "/projects/modulku",
  },
  {
    id: "modulku-dashboard",
    projectId: "modulku",
    title: "ModulKu — Teacher Workspace Suite",
    subtitle: "Centralized Educator Dashboard for Lesson Planning",
    tag: "TEACHER SUITE",
    category: "EdTech SaaS",
    technologies: ["React", "Dashboard UI", "Zustand"],
    thumbnail: "/parallax-showcase/modulku-2-dashboard.png",
    link: "/projects/modulku",
  },
  {
    id: "modulku-bank",
    projectId: "modulku",
    title: "ModulKu — Curriculum Bank & Artifacts",
    subtitle: "Digital Repository for Teaching Modules & Documents",
    tag: "CURRICULUM BANK",
    category: "Curriculum Engine",
    technologies: ["Cloud Storage", "PDF Exporter", "TypeScript"],
    thumbnail: "/parallax-showcase/modulku-3-bank-dokumen.png",
    link: "/projects/modulku",
  },
  {
    id: "modulku-soal",
    projectId: "modulku",
    title: "ModulKu — AI Question Generator",
    subtitle: "Automated Exam & Assessment Builder Powered by AI",
    tag: "AI GENERATOR",
    category: "Generative AI",
    technologies: ["LLM API", "Prompt Eng.", "TypeScript"],
    thumbnail: "/parallax-showcase/modulku-4-soal-generator.png",
    link: "/projects/modulku",
  },
  {
    id: "modulku-metrik",
    projectId: "modulku",
    title: "ModulKu — Platform Analytics & Metrics",
    subtitle: "Admin System Overview, User Engagement & Curriculum Metrics",
    tag: "SUPERADMIN",
    category: "Enterprise Analytics",
    technologies: ["Chart.js", "Metrics Engine", "PostgreSQL"],
    thumbnail: "/parallax-showcase/modulku-5-admin-metrik.png",
    link: "/projects/modulku",
  },
  {
    id: "modulku-cost",
    projectId: "modulku",
    title: "ModulKu — API Hit & Cost Tracking",
    subtitle: "Real-time AI Token Usage, API Cost Tracking & Quota Monitoring",
    tag: "COST MONITOR",
    category: "AI Infrastructure",
    technologies: ["Token Tracking", "API Rate Limiter", "Next.js"],
    thumbnail: "/parallax-showcase/modulku-6-admin-api-cost.png",
    link: "/projects/modulku",
  },
];

// ROW 2: Exclusively FloraMart (4 images)
export const ROW_FLORAMART: ProductItem[] = [
  {
    id: "floramart-home",
    projectId: "floramart",
    title: "FloraMart — Botanical Marketplace",
    subtitle: "Multi-Vendor Ornamental Plants & Gardening E-Commerce",
    tag: "FLORAMART",
    category: "E-Commerce",
    technologies: ["Multi-Vendor", "Cart System", "Tailwind CSS"],
    thumbnail: "/parallax-showcase/floramart-1-beranda.png",
    link: "/projects/floramart",
  },
  {
    id: "floramart-katalog",
    projectId: "floramart",
    title: "FloraMart — Plant Catalog & Filter Hub",
    subtitle: "Dynamic Filtering by Plant Care, Sun Exposure & Price Range",
    tag: "CATALOG HUB",
    category: "E-Commerce",
    technologies: ["Facet Search", "Filter Engine", "React"],
    thumbnail: "/parallax-showcase/floramart-2-katalog.png",
    link: "/projects/floramart",
  },
  {
    id: "floramart-favorit",
    projectId: "floramart",
    title: "FloraMart — Wishlist & Saved Flora",
    subtitle: "Customer Dashboard for Favorite Botanicals & Alerts",
    tag: "USER FAVORITES",
    category: "Customer Experience",
    technologies: ["LocalStorage", "Zustand", "Next.js"],
    thumbnail: "/parallax-showcase/floramart-3-favorit.png",
    link: "/projects/floramart",
  },
  {
    id: "floramart-detail",
    projectId: "floramart",
    title: "FloraMart — Plant Specs & Direct Order",
    subtitle: "Comprehensive Plant Care Specs, Pot Sizing & Checkout",
    tag: "PRODUCT DETAIL",
    category: "E-Commerce",
    technologies: ["Cart System", "Responsive UI", "TypeScript"],
    thumbnail: "/parallax-showcase/floramart-4-detail.png",
    link: "/projects/floramart",
  },
];

// ROW 3: Kos.id, Nusa Bali, and FinAI Mobile (9 images)
export const ROW_KOS_NUSA: ProductItem[] = [
  {
    id: "finai-home",
    projectId: "finai",
    title: "FinAI — Smart Mobile Finance & Gemini AI",
    subtitle: "Personal Finance & Budgeting with Voice & Receipt OCR",
    tag: "FINAI MOBILE",
    category: "Mobile App • FinTech & AI",
    technologies: ["Flutter", "Gemini AI", "Receipt OCR"],
    thumbnail: "/parallax-showcase/finai-home.png",
    link: "/projects/finai",
  },
  {
    id: "kos-id-home",
    projectId: "kos-id",
    title: "Kos.id — Smart Discovery Platform",
    subtitle: "Modern Boarding House Discovery & Property Rental Management",
    tag: "KOS.ID",
    category: "Property Tech",
    technologies: ["Next.js", "Catalog Engine", "Tailwind CSS"],
    thumbnail: "/parallax-showcase/kos-1-beranda.png",
    link: "/projects/kos-id",
  },
  {
    id: "kos-id-detail",
    projectId: "kos-id",
    title: "Kos.id — Room Details & Virtual Tour",
    subtitle: "Immersive Room Breakdown, Facility Amenities & Live Availability",
    tag: "ROOM SHOWCASE",
    category: "Property Booking",
    technologies: ["Image Gallery", "Responsive UI", "TypeScript"],
    thumbnail: "/parallax-showcase/kos-2-detail.png",
    link: "/projects/kos-id",
  },
  {
    id: "kos-id-admin",
    projectId: "kos-id",
    title: "Kos.id — Admin Property Operations",
    subtitle: "Landlord Management Dashboard for Room Inventory & Leases",
    tag: "ADMIN PORTAL",
    category: "Operations SaaS",
    technologies: ["CRUD Engine", "Status Tracker", "PostgreSQL"],
    thumbnail: "/parallax-showcase/kos-3-admin-kelola.png",
    link: "/projects/kos-id",
  },
  {
    id: "nusa-bali-hero",
    projectId: "nusa-bali",
    title: "Nusa AI — Travel Marketplace Portal",
    subtitle: "Curated Tour Package Booking & Digital Tourism Platform for Bali",
    tag: "NUSA AI",
    category: "Tourism Tech",
    technologies: ["Next.js", "Hero Section", "Tailwind CSS"],
    thumbnail: "/parallax-showcase/nusa-bali-1-beranda-hero.png",
    link: "/projects/nusa-bali",
  },
  {
    id: "nusa-bali-destinasi",
    projectId: "nusa-bali",
    title: "Nusa AI — Travel Destinations Showcase",
    subtitle: "Featured Destinations, Hidden Gems & Island Activity Guides",
    tag: "DESTINATIONS",
    category: "Travel Guide",
    technologies: ["Grid Layout", "Framer Motion", "Video Player"],
    thumbnail: "/parallax-showcase/nusa-bali-2-beranda-destinasi.png",
    link: "/projects/nusa-bali",
  },
  {
    id: "nusa-bali-detail",
    projectId: "nusa-bali",
    title: "Nusa AI — AI RAG Assistant & Details",
    subtitle: "Tour Package Itinerary with Integrated Retrieval-Augmented Chatbot",
    tag: "RAG ARCHITECTURE",
    category: "AI Travel Assistant",
    technologies: ["RAG Engine", "Vector Search", "Gemini API"],
    thumbnail: "/parallax-showcase/nusa-bali-3-detail-paket.png",
    link: "/projects/nusa-bali",
  },
  {
    id: "nusa-bali-katalog",
    projectId: "nusa-bali",
    title: "Nusa AI — Tour Package Exploration",
    subtitle: "Interactive Tour Catalog with Duration & Price Filters",
    tag: "TOUR CATALOG",
    category: "Travel Marketplace",
    technologies: ["Search Filters", "Catalog UI", "Next.js"],
    thumbnail: "/parallax-showcase/nusa-bali-4-katalog-header.png",
    link: "/projects/nusa-bali",
  },
  {
    id: "nusa-bali-grid",
    projectId: "nusa-bali",
    title: "Nusa AI — Curated Packages Grid",
    subtitle: "Comprehensive List of Bali Island Escapes & Cultural Tours",
    tag: "PACKAGES GRID",
    category: "Tourism Tech",
    technologies: ["Card System", "Responsive UI", "TypeScript"],
    thumbnail: "/parallax-showcase/nusa-bali-5-katalog-grid.png",
    link: "/projects/nusa-bali",
  },
];

export default function ProjectsSection() {
  const router = useRouter();

  const handleCardSelect = (item: ProductItem) => {
    if (item.projectId) {
      router.push(`/projects/${item.projectId}`);
    }
  };

  return (
    <section id="projects" className="relative z-0 isolate w-full overflow-hidden text-zinc-900 border-t border-zinc-200/80 bg-white">

      {/* Structural Spacing & Grid Separation between Skills and Projects */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-5 sm:py-7 border-x border-zinc-200/80 flex items-center justify-between">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />
        </div>
      </div>

      {/* 3D Auto-Running Showcase Container (No Scroll-Trapping) */}
      <div className="w-full">
        <HeroParallax
          row1={ROW_MODULKU}
          row2={ROW_FLORAMART}
          row3={ROW_KOS_NUSA}
          onSelectProduct={handleCardSelect}
          header={
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 pt-10 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 border-x border-zinc-200/80 w-full left-0 top-0 pointer-events-none">
              <div className="max-w-3xl relative pointer-events-auto p-4 sm:p-6 lg:p-7 rounded-3xl">
                
                {/* Soft Radial White Gradient Glow behind text for supreme readability over moving cards */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/95 via-white/85 to-white/0 backdrop-blur-xs rounded-3xl border border-white/60 shadow-sm pointer-events-none" />

                {/* Main Heading with Enhanced Weight and Invert Cursor */}
                <h2
                  data-cursor-invert
                  className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 leading-[1.1] drop-shadow-xs cursor-default select-none"
                >
                  Crafted Software & AI Agent Ecosystems
                </h2>

                {/* Subtitle with High Legibility */}
                <p className="mt-3 text-xs sm:text-sm md:text-base text-zinc-700 font-semibold leading-relaxed max-w-2xl">
                  Explore practical web and mobile applications engineered to solve everyday problems with modern full-stack development, AI Agent workflows, and RAG architectures.
                </p>
              </div>

              <PlusSeparator position={["bottom-left", "bottom-right"]} />
            </div>
          }
        />
      </div>

      {/* Clean Selected Projects Overview Section (Why Each App Solves Real Problems) */}
      <div className="w-full border-t border-zinc-200/80 bg-[#fbfbfb]">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-16 sm:py-24 border-x border-zinc-200/80">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Selected Production Works
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-zinc-950">
              Solving Real-World Problems with Code & AI
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 font-medium leading-relaxed">
              Here is a clean summary of each project, why it exists, and the logical rationale behind its architecture. Click on any card to explore the full case study with complete screenshots.
            </p>
          </div>

          {/* 5 Project Showcase Cards */}
          <div className="space-y-10 sm:space-y-12">
            {PROJECTS.map((project, idx) => {
              const isMobile = project.category.toLowerCase().includes("mobile");

              return (
                <div
                  key={project.id}
                  className="group relative rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-zinc-400/80 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: 16:9 Cover Screenshot */}
                    <div className="lg:col-span-6 space-y-4">
                      <Link
                        href={`/projects/${project.id}`}
                        data-cursor-expand
                        className="block relative aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100 group/img"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-5">
                          <span className="text-white text-xs font-mono font-semibold flex items-center gap-1.5">
                            Click to explore full case study
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </Link>

                      {/* Status Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-mono font-semibold">
                          {isMobile ? <Smartphone className="w-3.5 h-3.5 text-indigo-600" /> : <Globe className="w-3.5 h-3.5 text-blue-600" />}
                          {project.category}
                        </span>

                        {project.liveUrl && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Live Production Web
                          </span>
                        )}

                        {project.apkUrl && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-mono font-semibold">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            Android App (APK Available)
                          </span>
                        )}

                        {project.isPaused && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold">
                            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                            Paused (Maintenance)
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right: Explanations, Logical Problem Rationale & Actions */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                      <div>
                        {/* Title & Subtitle */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-xs font-mono font-bold text-zinc-400">
                              0{idx + 1} //
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-zinc-600 font-medium">
                          {project.subtitle}
                        </p>

                        {/* Real-World Problem Box */}
                        <div className="mt-4 p-4 rounded-2xl bg-red-50/60 border border-red-200/80 text-xs sm:text-sm text-zinc-700">
                          <span className="font-mono font-bold text-red-700 block mb-1 uppercase tracking-wider text-[11px]">
                            The Problem:
                          </span>
                          {project.problemSolved}
                        </div>

                        {/* Logical Solution Rationale Box */}
                        <div className="mt-3 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 text-xs sm:text-sm text-zinc-700">
                          <span className="font-mono font-bold text-emerald-800 block mb-1 uppercase tracking-wider text-[11px]">
                            The Solution:
                          </span>
                          {project.solutionRationale}
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-zinc-100 border border-zinc-200/90 text-xs font-mono text-zinc-700 font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2.5 py-1 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-400">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/projects/${project.id}`}
                          data-cursor-expand
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-xs"
                        >
                          <span>View Project Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-expand
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-zinc-800 text-xs sm:text-sm font-semibold hover:bg-zinc-100 transition-colors shadow-xs"
                          >
                            <span>Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {project.apkUrl && (
                          <a
                            href={project.apkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-expand
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-xs"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download APK</span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor-expand
                            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-zinc-600 hover:text-zinc-950 text-xs font-mono font-medium transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Bottom Bar */}
      <div className="w-full border-t border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-5 border-x border-zinc-200/80 flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-400 tracking-wider">
            [END OF SELECTED WORKS]
          </span>
          <Link
            href="https://github.com/Vraken9"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-expand
            className="font-mono text-xs text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-1.5"
          >
            <span>Explore all repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <PlusSeparator position={["bottom-left", "bottom-right"]} />
        </div>
      </div>

    </section>
  );
}
