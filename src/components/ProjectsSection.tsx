"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HeroParallax, ProductItem } from "@/components/ui/hero-parallax";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { GradientBackground } from "@/components/ui/almoayyed";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// ==========================================
// 1. 3D RUNNING PARALLAX SHOWCASE (ROWS 1-3)
// ==========================================

// ROW 1: Exclusively ModulKu AI (6 images)
export const ROW_MODULKU: ProductItem[] = [
  {
    id: "modulku-landing",
    projectId: "modulku",
    title: "ModulKu AI — Landing & Platform Portal",
    subtitle: "AI-Powered Curriculum & Lesson Plan Hub for Indonesian Educators",
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
    subtitle: "Centralized Educator Dashboard for Curriculum Management",
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
    subtitle: "Digital Repository for Modul Ajar, Prota, Promes & Teaching Artifacts",
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
    subtitle: "Automated Exam & Assessment Builder Powered by LLM Orchestration",
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
    subtitle: "Admin System Overview, User Engagement & Curriculum Generation Metrics",
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
    subtitle: "Multi-Vendor Ornamental Plants & Gardening E-Commerce Platform",
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
    subtitle: "Customer Dashboard for Favorite Botanicals & Repurchase Alerts",
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
    subtitle: "Comprehensive Plant Care Specs, Pot Sizing, Delivery & Instant Checkout",
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
    subtitle: "Landlord Management Dashboard for Room Inventory & Occupancy Leases",
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
    title: "Nusa AI — Destinasi Impian Showcase",
    subtitle: "Featured Destinations, Hidden Gems & Island Activity Guides",
    tag: "DESTINASI BALI",
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
    subtitle: "Interactive Tour Catalog with Duration, Difficulty & Price Filters",
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
    subtitle: "Comprehensive List of Bali Island Escapes, Snorkeling & Cultural Tours",
    tag: "PACKAGES GRID",
    category: "Tourism Tech",
    technologies: ["Card System", "Responsive UI", "TypeScript"],
    thumbnail: "/parallax-showcase/nusa-bali-5-katalog-grid.png",
    link: "/projects/nusa-bali",
  },
];

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
    link: "https://drive.google.com/file/d/1qz8Gfuc_c4nQW1kQnTP53cSR44I87wCM/view?usp=sharing",
    apkLink: "https://drive.google.com/file/d/1qz8Gfuc_c4nQW1kQnTP53cSR44I87wCM/view?usp=sharing",
    repo: "https://github.com/Vraken9/FinAI.git",
    caseStudy: "/projects/finai",
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

      {/* 1. 3D Auto-Running Showcase Container (HeroParallax) */}
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

                <h2
                  data-cursor-invert
                  className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 leading-[1.1] drop-shadow-xs cursor-default select-none"
                >
                  Crafted Software & AI Agent Ecosystems
                </h2>

                <p className="mt-3 text-xs sm:text-sm md:text-base text-zinc-700 font-semibold leading-relaxed max-w-2xl">
                  Explore practical web and mobile applications engineered to solve everyday problems with modern full-stack development, AI Agent workflows, and RAG architectures.
                </p>
              </div>

              <PlusSeparator position={["bottom-left", "bottom-right"]} />
            </div>
          }
        />
      </div>

      {/* 2. Divider Line with /projects indicator */}
      <div className="w-full border-t border-b border-zinc-200/80">
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

      {/* 3. Header Banner with Original Almoayyed Background */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl min-h-[250px] border-x border-zinc-200/80 overflow-hidden flex items-center">
          <PlusSeparator
            position={["top-left", "top-right", "bottom-left", "bottom-right"]}
            className="z-20"
          />

          {/* Original Almoayyed Gradient Background */}
          <div className="absolute inset-0 z-0">
            <GradientBackground className="w-full h-full" />
          </div>

          {/* Text Overlay: Uses text-white with mix-blend-difference matching hexaa.sh */}
          <div className="relative z-10 w-full h-full text-white mix-blend-difference flex flex-col justify-center px-6 sm:px-10 py-12 pointer-events-none">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              akhyar&apos;s projects.
            </h2>
            <p className="max-w-2xl text-xs sm:text-sm md:text-base mt-2.5 leading-relaxed font-normal">
              here are the projects I&apos;ve worked on, showcasing my skills and passion for software development. each project reflects my commitment to creating impactful solutions and continuous learning.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Projects Grid: 4 Projects with Requested Images & Bottom White Fade Gradient */}
      <div className="relative w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl border-x border-zinc-200/80 p-2 pb-28 grid grid-cols-1 md:grid-cols-2 gap-2">
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

          {/* Smooth White Gradient Overlay covering the bottom of project 3 & 4 */}
          <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 bg-gradient-to-t from-white via-white/90 to-transparent flex flex-col items-center justify-end pb-8 z-20 pointer-events-none">
            {/* Styled button in cohesive Bauhaus / Hexaa theme */}
            <Link
              href="/projects"
              data-cursor-expand
              className="pointer-events-auto group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-zinc-900 bg-white/95 text-zinc-950 font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-zinc-950 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95 backdrop-blur-md"
            >
              <span>[explore all projects on /projects]</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-[11px] font-mono text-zinc-500 mt-2 pointer-events-none">
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
