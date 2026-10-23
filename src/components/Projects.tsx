"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ExternalLink,
  Play,
  X,
  Maximize2,
  ChevronRight,
  Bot,
  Layers,
  CheckCircle,
  Eye,
} from "lucide-react";
import { PROJECTS, ProjectItem } from "@/data/portfolioData";

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);
  const [activeImageModal, setActiveImageModal] = useState<{ path: string; label: string } | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const activeProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <section id="projects" className="relative py-24 border-b border-white/5 bg-[#07090e]">
      {/* Ambient background glow */}
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Web Applications • Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            4 Masterpiece Proyek Web{" "}
            <span className="text-gradient">Berbasis AI & Full-Stack</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Karya aplikasi web lengkap yang dibangun dengan arsitektur modern, mulai dari SaaS AI Generator guru, asisten cerdas RAG pariwisata, sistem reservasi kos, hingga e-commerce multi-vendor.
          </p>

          {/* Project Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-6">
            {PROJECTS.map((proj) => {
              const isActive = proj.id === activeProject.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                      : "glass-panel text-slate-400 hover:text-white hover:border-cyan-500/30"
                  }`}
                >
                  <span>{proj.title}</span>
                  {proj.videoDemo && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" title="Ada Demo Video" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Project Card Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 bg-[#090e18]/80 shadow-2xl space-y-8">
          
          {/* Top Row: Meta & Badges */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProject.title}
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {activeProject.category}
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 font-medium">
                {activeProject.subtitle}
              </p>
            </div>

            {/* Quick Actions (Video Demo or View Full) */}
            <div className="flex items-center gap-3">
              {activeProject.videoDemo && (
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-xs hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg shadow-amber-500/20 hover:scale-105"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Tonton Demo AI RAG</span>
                </button>
              )}
            </div>
          </div>

          {/* Middle Row: Two Columns (Cover & Problem / AI Breakdown) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Main Featured Cover Image with Click-to-Expand */}
            <div className="lg:col-span-7 space-y-3">
              <div
                onClick={() =>
                  setActiveImageModal({
                    path: activeProject.coverImage,
                    label: `${activeProject.title} - Cover Preview`,
                  })
                }
                className="relative aspect-[16/10] rounded-2xl overflow-hidden glass-panel border border-white/15 cursor-pointer group shadow-xl bg-slate-950"
              >
                <Image
                  src={activeProject.coverImage}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                  <Maximize2 className="w-5 h-5" />
                  <span>Klik untuk Memperbesar Resolusi</span>
                </div>
              </div>
              <p className="text-[11px] font-mono text-slate-400 text-center">
                💡 Tangkapan layar antarmuka asli dari sistem yang berjalan.
              </p>
            </div>

            {/* Right: Technical Details & AI Integration */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Tentang Aplikasi
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeProject.description}
                </p>
              </div>

              {/* Problem Solved */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <h4 className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Solusi yang Dihadirkan
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeProject.problemSolved}
                </p>
              </div>

              {/* AI Integration Highlight */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-cyan-500/30 space-y-1.5">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  Implementasi Kecerdasan Buatan (AI)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeProject.aiIntegration}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Teknologi & Modul Utama
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Row: Screenshot Gallery Grid with Lightbox */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <span>Galeri Halaman & Dashboard</span>
                <span className="text-xs font-mono text-cyan-400 font-normal">
                  ({activeProject.galleryImages.length} tangkapan layar)
                </span>
              </h4>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Klik gambar untuk mode layar penuh
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {activeProject.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageModal(img)}
                  className="group relative aspect-video rounded-xl overflow-hidden glass-panel border border-white/10 cursor-pointer hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 bg-slate-950 shadow-md"
                >
                  <Image
                    src={img.path}
                    alt={img.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 250px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                    <p className="text-[10px] font-medium text-white line-clamp-2 leading-tight">
                      {img.label}
                    </p>
                    <span className="text-[9px] font-mono text-cyan-300 mt-1 flex items-center gap-1">
                      <Eye className="w-3 h-3" /> Perbesar
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Image Modal */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#090d16]">
              <p className="text-sm font-semibold text-white truncate max-w-[80%]">
                {activeImageModal.label}
              </p>
              <button
                onClick={() => setActiveImageModal(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                aria-label="Tutup Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black">
              <Image
                src={activeImageModal.path}
                alt={activeImageModal.label}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Video Modal for Nusa Bali RAG */}
      {isVideoModalOpen && activeProject.videoDemo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-950 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#090d16]">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <p className="text-sm font-bold text-white">
                  Demo Rekaman AI RAG Chatbot - Nusa Bali
                </p>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                aria-label="Tutup Video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black">
              <video
                src={activeProject.videoDemo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Browser Anda tidak mendukung tag video HTML5.
              </video>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
