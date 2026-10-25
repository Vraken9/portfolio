"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParallax, ProductItem } from "@/components/ui/hero-parallax";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { PROJECTS, ProjectItem as DetailedProjectItem } from "@/data/portfolioData";
import { X, Sparkles, CheckCircle2, Layers, Bot, ArrowUpRight, Play } from "lucide-react";

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
    link: "#projects",
  },
  {
    id: "modulku-dashboard",
    projectId: "modulku",
    title: "ModulKu — Teacher Workspace Suite",
    subtitle: "Centralized Educator Dashboard for Curriculum Management & Schemes",
    tag: "TEACHER SUITE",
    category: "EdTech SaaS",
    technologies: ["React", "Dashboard UI", "Zustand"],
    thumbnail: "/parallax-showcase/modulku-2-dashboard.png",
    link: "#projects",
  },
  {
    id: "modulku-bank",
    projectId: "modulku",
    title: "ModulKu — Curriculum Bank & Artifacts",
    subtitle: "Digital Repository for Modul Ajar, Prota, Promes & Teaching Artifacts",
    tag: "BANK DOKUMEN",
    category: "Curriculum Engine",
    technologies: ["Cloud Storage", "PDF Exporter", "TypeScript"],
    thumbnail: "/parallax-showcase/modulku-3-bank-dokumen.png",
    link: "#projects",
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
    link: "#projects",
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
    link: "#projects",
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
    link: "#projects",
  },
];

// ROW 2: Exclusively FloraMart (4 images, removed admin-kelola-product)
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
    link: "#projects",
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
    link: "#projects",
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
    link: "#projects",
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
    link: "#projects",
  },
];

// ROW 3: Exclusively Kos.id & Nusa Bali (8 images, removed pesan-kos)
export const ROW_KOS_NUSA: ProductItem[] = [
  {
    id: "kos-id-home",
    projectId: "kos-id",
    title: "Kos.id — Smart Discovery Platform",
    subtitle: "Modern Boarding House Discovery & Property Rental Management",
    tag: "KOS.ID",
    category: "Property Tech",
    technologies: ["Next.js", "Catalog Engine", "Tailwind CSS"],
    thumbnail: "/parallax-showcase/kos-1-beranda.png",
    link: "#projects",
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
    link: "#projects",
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
    link: "#projects",
  },
  {
    id: "nusa-bali-hero",
    projectId: "nusa-bali",
    title: "Nusa Bali — Travel Marketplace Portal",
    subtitle: "Curated Tour Package Booking & Digital Tourism Platform for Bali",
    tag: "NUSA BALI",
    category: "Tourism Tech",
    technologies: ["Next.js", "Hero Section", "Tailwind CSS"],
    thumbnail: "/parallax-showcase/nusa-bali-1-beranda-hero.png",
    link: "#projects",
  },
  {
    id: "nusa-bali-destinasi",
    projectId: "nusa-bali",
    title: "Nusa Bali — Destinasi Impian Showcase",
    subtitle: "Featured Destinations, Hidden Gems & Island Activity Guides",
    tag: "DESTINASI BALI",
    category: "Travel Guide",
    technologies: ["Grid Layout", "Framer Motion", "Video Player"],
    thumbnail: "/parallax-showcase/nusa-bali-2-beranda-destinasi.png",
    link: "#projects",
  },
  {
    id: "nusa-bali-detail",
    projectId: "nusa-bali",
    title: "Nusa Bali — AI RAG Assistant & Details",
    subtitle: "Tour Package Itinerary with Integrated Retrieval-Augmented Chatbot",
    tag: "RAG ARCHITECTURE",
    category: "AI Travel Assistant",
    technologies: ["RAG Engine", "Vector Search", "Gemini API"],
    thumbnail: "/parallax-showcase/nusa-bali-3-detail-paket.png",
    link: "#projects",
  },
  {
    id: "nusa-bali-katalog",
    projectId: "nusa-bali",
    title: "Nusa Bali — Tour Package Exploration",
    subtitle: "Interactive Tour Catalog with Duration, Difficulty & Price Filters",
    tag: "TOUR CATALOG",
    category: "Travel Marketplace",
    technologies: ["Search Filters", "Catalog UI", "Next.js"],
    thumbnail: "/parallax-showcase/nusa-bali-4-katalog-header.png",
    link: "#projects",
  },
  {
    id: "nusa-bali-grid",
    projectId: "nusa-bali",
    title: "Nusa Bali — Curated Packages Grid",
    subtitle: "Comprehensive List of Bali Island Escapes, Snorkeling & Cultural Tours",
    tag: "PACKAGES GRID",
    category: "Tourism Tech",
    technologies: ["Card System", "Responsive UI", "TypeScript"],
    thumbnail: "/parallax-showcase/nusa-bali-5-katalog-grid.png",
    link: "#projects",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<DetailedProjectItem | null>(null);

  const handleCardSelect = (item: ProductItem) => {
    if (item.projectId) {
      const found = PROJECTS.find((p) => p.id === item.projectId);
      if (found) {
        setSelectedProject(found);
      }
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
                  Membangun aplikasi digital berdaya guna tinggi dengan mengombinasikan arsitektur full-stack modern, alur orkestrasi AI Agent, integrasi RAG kontekstual, dan antarmuka ramah pengguna.
                </p>
              </div>

              <PlusSeparator position={["bottom-left", "bottom-right"]} />
            </div>
          }
        />
      </div>

      {/* 3. Section Bottom Bar */}
      <div className="w-full border-t border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-4 border-x border-zinc-200/80 flex items-center justify-between">
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

      {/* 4. Interactive Project Detail Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-zinc-200/90 overflow-hidden z-10 flex flex-col"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200/80 bg-zinc-50/80">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 uppercase">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  data-cursor-expand
                  className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-200/70 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-base sm:text-lg text-zinc-600 font-medium">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Cover Image or Video Demo */}
                <div className="relative rounded-2xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-inner">
                  {selectedProject.videoDemo ? (
                    <div className="space-y-2">
                      <div className="px-4 py-2 bg-zinc-900 text-white text-xs font-mono flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <Play className="w-3.5 h-3.5 text-emerald-400" />
                          Interactive Demo Video: RAG Chatbot
                        </span>
                        <span className="text-zinc-400 text-[10px]">HTML5 Video</span>
                      </div>
                      <video
                        src={selectedProject.videoDemo}
                        controls
                        className="w-full max-h-[420px] object-cover bg-black"
                      />
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={selectedProject.coverImage}
                      alt={selectedProject.title}
                      className="w-full max-h-[420px] object-cover object-top"
                    />
                  )}
                </div>

                {/* Grid Info: Overview, Problem Solved, AI Integration */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-indigo-600" />
                      Ringkasan Solusi
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-emerald-600" />
                      Integrasi AI & Automasi
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {selectedProject.aiIntegration}
                    </p>
                  </div>
                </div>

                {/* Problem Solved */}
                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    Problem Solved & Dampak Pengguna
                  </h4>
                  <p className="text-sm text-indigo-950/80 leading-relaxed">
                    {selectedProject.problemSolved}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
                    Teknologi & Fitur Utama
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-800 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gallery Images */}
                {selectedProject.galleryImages.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-4">
                      Tangkapan Layar Sistem ({selectedProject.galleryImages.length} Halaman)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProject.galleryImages.map((img) => (
                        <div
                          key={img.path}
                          className="group relative rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={img.path}
                            alt={img.label}
                            className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 to-transparent text-white text-[11px] font-sans">
                            {img.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-zinc-200/80 bg-zinc-50 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">
                  Project ID: #{selectedProject.id}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  data-cursor-expand
                  className="px-4 py-2 rounded-xl bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors"
                >
                  Tutup Tinjauan
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
