"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParallax, ProductItem } from "@/components/ui/hero-parallax";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { BauhausGenerator } from "@/components/ui/bauhaus-generator";
import { PROJECTS, ProjectItem as DetailedProjectItem } from "@/data/portfolioData";
import { X, Sparkles, CheckCircle2, Layers, Bot, ArrowUpRight, Play } from "lucide-react";

export const PARALLAX_PRODUCTS: ProductItem[] = [
  // ROW 1: ModulKu AI (EdTech & Generative AI Platform)
  {
    id: "modulku-landing",
    projectId: "modulku",
    title: "ModulKu AI — Landing Page",
    subtitle: "AI-Powered Curriculum & Lesson Plan Hub for Indonesian Educators",
    tag: "MODULKU AI",
    category: "EdTech & Generative AI",
    technologies: ["Next.js", "AI Generator", "Tailwind CSS"],
    thumbnail: "/gambar-web-modulku/halaman-landing-page.png",
    link: "#projects",
  },
  {
    id: "modulku-soal",
    projectId: "modulku",
    title: "ModulKu — AI Question Generator",
    subtitle: "Automated Exam & Assessment Builder Powered by LLM Orchestration",
    tag: "AI WORKFLOW",
    category: "Generative AI",
    technologies: ["LLM API", "Prompt Eng.", "TypeScript"],
    thumbnail: "/gambar-web-modulku/halaman-dahsboard-guru-soal-generator.png",
    link: "#projects",
  },
  {
    id: "modulku-modul",
    projectId: "modulku",
    title: "ModulKu — Modul Ajar BKPDM",
    subtitle: "Kurikulum Merdeka Teaching Modules & Interactive Student Worksheets",
    tag: "CURRICULUM ENGINE",
    category: "EdTech SaaS",
    technologies: ["Kurikulum Merdeka", "React", "PDF Export"],
    thumbnail: "/gambar-web-modulku/halaman-dashboard-guru-modul-ajar-bkpdm.png",
    link: "#projects",
  },
  {
    id: "modulku-atp",
    projectId: "modulku",
    title: "ModulKu — ATP, Prota & Promes",
    subtitle: "Automated Academic Year Teaching Schemes & Timeline Planner",
    tag: "ACADEMIC HUB",
    category: "EdTech SaaS",
    technologies: ["State Engine", "Zustand", "Full-Stack"],
    thumbnail: "/gambar-web-modulku/halaman-dashboard-guru-atp-prota-promes.png",
    link: "#projects",
  },
  {
    id: "modulku-analytics",
    projectId: "modulku",
    title: "ModulKu — API Cost & Hit Tracking",
    subtitle: "Real-time AI Token Usage, API Cost Analytics & Admin Monitoring",
    tag: "ADMIN ANALYTICS",
    category: "Enterprise Admin",
    technologies: ["API Metrics", "Token Tracker", "PostgreSQL"],
    thumbnail: "/gambar-web-modulku/halaman-admin-pelacakan-hit-dan-biaya-api.png",
    link: "#projects",
  },

  // ROW 2: Nusa Bali (Smart Tourism Marketplace & RAG Chatbot) + Kos.id Booking
  {
    id: "nusa-bali-home",
    projectId: "nusa-bali",
    title: "Nusa Bali — Travel Marketplace",
    subtitle: "Curated Tour Package Booking & Digital Tourism Platform for Bali",
    tag: "NUSA BALI",
    category: "Tourism Tech",
    technologies: ["Next.js", "Catalog System", "Tailwind CSS"],
    thumbnail: "/gambar-web-nusa-bali/Halaman-beranda.png",
    link: "#projects",
  },
  {
    id: "nusa-bali-rag",
    projectId: "nusa-bali",
    title: "Nusa Bali — AI RAG Assistant",
    subtitle: "Retrieval-Augmented Generation Chatbot Answering Tourist Inquiries Contextually",
    tag: "RAG ARCHITECTURE",
    category: "AI Chatbot",
    technologies: ["RAG Engine", "Vector Search", "Gemini API"],
    thumbnail: "/gambar-web-nusa-bali/halaman-detail-paket.png",
    link: "#projects",
  },
  {
    id: "nusa-bali-catalog",
    projectId: "nusa-bali",
    title: "Nusa Bali — Package Exploration",
    subtitle: "Interactive Itineraries, Booking Inquiries & Destination Guides",
    tag: "BOOKING ENGINE",
    category: "Tourism Tech",
    technologies: ["Responsive UI", "Framer Motion", "Video Player"],
    thumbnail: "/gambar-web-nusa-bali/halaman-katalog-paket.png",
    link: "#projects",
  },
  {
    id: "kos-id-home",
    projectId: "kos-id",
    title: "Kos.id — Boarding House Platform",
    subtitle: "Modern Property Discovery & Rental Management Platform",
    tag: "KOS.ID",
    category: "Property Management",
    technologies: ["Booking Engine", "Next.js", "Tailwind CSS"],
    thumbnail: "/gambar-web-kos.id/halaman-beranda.png",
    link: "#projects",
  },
  {
    id: "kos-id-booking",
    projectId: "kos-id",
    title: "Kos.id — Room Reservation Flow",
    subtitle: "Intuitive Multi-Step Room Booking, Date Selection & Occupancy Checks",
    tag: "RESERVATION",
    category: "Property Booking",
    technologies: ["Form Validation", "Real-Time DB", "TypeScript"],
    thumbnail: "/gambar-web-kos.id/halaman-user-pesan-kos.png",
    link: "#projects",
  },

  // ROW 3: Kos.id Payment & Receipts + FloraMart Multi-Vendor Marketplace
  {
    id: "kos-id-proof",
    projectId: "kos-id",
    title: "Kos.id — Payment Verification",
    subtitle: "Automated Payment Proof Upload & Multi-Channel Bank Transfer Verification",
    tag: "FINTECH FLOW",
    category: "Payment Flow",
    technologies: ["Proof Upload", "Verification", "Cloud Storage"],
    thumbnail: "/gambar-web-kos.id/halaman-user-setelah-upload-bukti-pembayaran.png",
    link: "#projects",
  },
  {
    id: "kos-id-receipt",
    projectId: "kos-id",
    title: "Kos.id — Digital Struk Generator",
    subtitle: "Automated Official Digital Rent Receipts with Barcode Verification",
    tag: "STRUK GENERATOR",
    category: "Document Engine",
    technologies: ["PDF Struk", "Print Styles", "Auth System"],
    thumbnail: "/gambar-web-kos.id/halaman-user-cetak-struk-pembayaran.png",
    link: "#projects",
  },
  {
    id: "floramart-home",
    projectId: "floramart",
    title: "FloraMart — Botanical Marketplace",
    subtitle: "Multi-Vendor Ornamental Plants & Gardening E-Commerce Platform",
    tag: "FLORAMART",
    category: "E-Commerce",
    technologies: ["Multi-Vendor", "Cart System", "Tailwind CSS"],
    thumbnail: "/gambar-web-floramart/halaman-beranda.png",
    link: "#projects",
  },
  {
    id: "floramart-owner",
    projectId: "floramart",
    title: "FloraMart — Vendor Owner Dashboard",
    subtitle: "Store Operations, Order Fulfillment, Stock Tracking & Store Settings",
    tag: "OWNER DASHBOARD",
    category: "Vendor SaaS",
    technologies: ["Inventory Mgmt", "Orders Pipeline", "Next.js"],
    thumbnail: "/gambar-web-floramart/halaman-owner-dashboard.png",
    link: "#projects",
  },
  {
    id: "floramart-analytics",
    projectId: "floramart",
    title: "FloraMart — Superadmin Analytics",
    subtitle: "Platform-Wide Revenue Trends, Vendor Metrics & Ecosystem Monitoring",
    tag: "SUPERADMIN",
    category: "Platform Analytics",
    technologies: ["Sales Analytics", "Chart.js", "MySQL/Postgres"],
    thumbnail: "/gambar-web-floramart/halaman-admin-analitik.png",
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
      
      {/* 1. Header Bar: Grid Header consistent with About Section */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-3 border-x border-zinc-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-zinc-500 tracking-wider">
              [02 // PORTFOLIO SHOWCASE]
            </span>
          </div>

          <div data-cursor-expand>
            <BauhausGenerator width={4} height={2} size={18} />
          </div>

          <PlusSeparator position={["top-left", "top-right"]} />
        </div>
      </div>

      {/* 2. Parallax Showcase Container */}
      <div className="w-full">
        <HeroParallax
          products={PARALLAX_PRODUCTS}
          onSelectProduct={handleCardSelect}
          header={
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 pt-16 sm:pt-24 pb-8 border-x border-zinc-200/80 w-full left-0 top-0">
              <div className="max-w-4xl">
                {/* Category Pill Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-mono font-medium tracking-wide border border-zinc-200/80 inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    SELECTED WORKS & ECOSYSTEMS
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    • 4 PRODUCTION APPS
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.1]">
                  Crafted Software & AI Agent Ecosystems
                </h2>

                {/* Subtitle */}
                <p className="mt-5 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed max-w-3xl">
                  Membangun aplikasi digital berdaya guna tinggi dengan mengombinasikan arsitektur full-stack modern, alur orkestrasi AI Agent, integrasi RAG kontekstual, dan antarmuka ramah pengguna.
                </p>

                {/* Feature Highlights Pills */}
                <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-medium text-zinc-700">
                    <Layers className="w-3.5 h-3.5 text-indigo-600" />
                    <span>4 Full-Stack Platforms</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-medium text-zinc-700">
                    <Bot className="w-3.5 h-3.5 text-emerald-600" />
                    <span>RAG & Generative AI</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-medium text-zinc-700">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Production Grade Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200/80 text-xs font-medium text-zinc-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Next.js, TypeScript & Python</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  <span>Scroll down to explore 3D parallax perspectives • Click any card for detailed case study</span>
                </div>
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
