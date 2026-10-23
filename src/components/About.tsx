"use client";

import Image from "next/image";
import { GraduationCap, MapPin, Code, Sparkles, BookOpen, Heart, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="relative py-24 border-b border-white/5 bg-[#07090e]">
      {/* Subtle background aurora */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-600/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Profile & Technopreneur Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tentang <span className="text-gradient">Akhyar Mualif</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Kombinasi antara rasa ingin tahu akademis, dedikasi tiada henti dalam belajar mandiri, dan visi technopreneurship berbasis kecerdasan buatan.
          </p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Academic & Identity Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 bg-[#0a0f1d]/80">
            
            <div className="space-y-4">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-lg shadow-cyan-500/20">
                <Image
                  src="/profile.jpeg"
                  alt="Akhyar Mualif"
                  fill
                  sizes="120px"
                  className="object-cover object-top"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  {PERSONAL_INFO.fullName}
                </h3>
                <p className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                  {PERSONAL_INFO.role}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>
                    <strong>{PERSONAL_INFO.department}</strong> ({PERSONAL_INFO.semester})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.university}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Filosofi Belajar:
              </p>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;Waktu luang adalah kesempatan emas untuk memvalidasi rasa penasaran, menyelesaikan sertifikasi, dan mengonversinya menjadi produk nyata.&rdquo;
              </p>
            </div>

          </div>

          {/* Right Column: Detailed Narrative & Technopreneur Pillars */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6 bg-[#0a0f1d]/80">
            
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Perjalanan & Visi Technopreneur</span>
                <span className="text-xs font-mono text-cyan-400 font-normal">
                  • Technopreneurship 2026
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sebagai mahasiswa semester 5 di <strong>Universitas Ma&apos;arif Nahdlatul Ulama Kebumen</strong>, saya percaya bahwa batas antara rekayasa perangkat lunak dan bisnis digital telah diubah secara fundamental oleh kehadiran <strong>AI Agents</strong>.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Alih-alih sekadar menjadi pemakai teknologi, saya memposisikan diri sebagai <strong>orchestrator & builder</strong>. Melalui berbagai kursus intensif dari institusi dunia seperti <strong>IBM, Google, AWS, dan Cisco</strong>, saya mempelajari prinsip mendalam mulai dari Generative AI, RAG, arsitektur cloud scalable, hingga keamanan data.
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Setiap materi tidak pernah berhenti di atas sertifikat semata. Saya mengimplementasikannya ke dalam empat produk web fungsional: <strong>Modulku</strong> untuk mengotomatisasi administrasi guru, <strong>Nusa Bali</strong> untuk mempermudah turis dengan RAG AI Chatbot, <strong>Kos.id</strong> untuk digitalisasi indekos, dan <strong>FloraMart</strong> untuk pemberdayaan UMKM tanaman hias.
              </p>
            </div>

            {/* 3 Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <h4 className="text-xs font-bold text-white">Pragmatis</h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Membangun solusi yang benar-benar dipakai dan menyelesaikan masalah.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                <h4 className="text-xs font-bold text-white">Cepat & Presisi</h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Mengorkestrasi AI Agent untuk iterasi 10x lebih cepat tanpa mengorbankan kualitas.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-bold text-white">Pembelajar Abadi</h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Konsisten menyelesaikan kurikulum baru dan beradaptasi dengan tren terkini.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
