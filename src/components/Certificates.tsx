"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Award,
  Search,
  FileText,
  ExternalLink,
  X,
  CheckCircle2,
  Filter,
  Sparkles,
  Download,
} from "lucide-react";
import { CERTIFICATES, CertificateItem } from "@/data/portfolioData";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [selectedIssuer, setSelectedIssuer] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCertModal, setSelectedCertModal] = useState<CertificateItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = [
    "Semua",
    "AI & Data Science",
    "Cloud & DevOps",
    "Cybersecurity",
    "Web & Programming",
  ];

  const issuers = ["Semua", "Google", "IBM", "AWS", "Cisco", "Dicoding", "Kominfo"];

  const filteredCertificates = useMemo(() => {
    return CERTIFICATES.filter((cert) => {
      const matchCategory =
        activeCategory === "Semua" || cert.category === activeCategory;
      const matchIssuer =
        selectedIssuer === "Semua" || cert.issuerCategory === selectedIssuer;
      const matchSearch =
        searchQuery === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchIssuer && matchSearch;
    });
  }, [activeCategory, selectedIssuer, searchQuery]);

  const displayedCerts = filteredCertificates.slice(0, visibleCount);

  // Issuer badge styles
  const getIssuerBadgeStyle = (issuerCat: string) => {
    switch (issuerCat) {
      case "Google":
        return "bg-rose-950/60 text-rose-300 border-rose-500/30";
      case "IBM":
        return "bg-blue-950/60 text-blue-300 border-blue-500/30";
      case "AWS":
        return "bg-amber-950/60 text-amber-300 border-amber-500/30";
      case "Cisco":
        return "bg-cyan-950/60 text-cyan-300 border-cyan-500/30";
      case "Dicoding":
        return "bg-emerald-950/60 text-emerald-300 border-emerald-500/30";
      case "Kominfo":
        return "bg-indigo-950/60 text-indigo-300 border-indigo-500/30";
      default:
        return "bg-purple-950/60 text-purple-300 border-purple-500/30";
    }
  };

  return (
    <section id="certificates" className="relative py-24 border-b border-white/5 bg-[#090d16]/60">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-600/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
            <Award className="w-3.5 h-3.5" />
            <span>Continuous Learning & Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            45+ Sertifikat Pelatihan &{" "}
            <span className="text-gradient">Final Project</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Bukti nyata dedikasi saya mengisi waktu luang untuk menyelesaikan kurikulum intensif, menguasai AI Agents, Cloud, Keamanan Siber, dan Pemrograman dari institusi global dan nasional.
          </p>
        </div>

        {/* Filter Controls: Search & Categories */}
        <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/10 mb-10 space-y-4 bg-[#0a0f1d]/70">
          
          {/* Search Bar & Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari sertifikat (contoh: AI, AWS, Google, Python, Cyber)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs font-mono text-slate-400">
              Menampilkan <span className="text-cyan-300 font-bold">{filteredCertificates.length}</span> dari {CERTIFICATES.length} sertifikat
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
            <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Bidang:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(12);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Issuer Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
            <span className="text-xs font-mono text-slate-400 mr-2">Penerbit:</span>
            {issuers.map((iss) => (
              <button
                key={iss}
                onClick={() => {
                  setSelectedIssuer(iss);
                  setVisibleCount(12);
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                  selectedIssuer === iss
                    ? "bg-indigo-500 text-white font-bold"
                    : "bg-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                {iss}
              </button>
            ))}
          </div>

        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayedCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between bg-gradient-to-b from-white/[0.03] to-transparent shadow-lg"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${getIssuerBadgeStyle(
                      cert.issuerCategory
                    )}`}
                  >
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                    {cert.isPdf ? "PDF" : "PNG"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-400 font-mono mb-4">
                  Kategori: {cert.category}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCertModal(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Lihat Dokumen</span>
                </button>

                <a
                  href={cert.filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Buka File di Tab Baru"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredCertificates.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-6 py-3 rounded-xl glass-panel border border-cyan-500/30 text-cyan-300 font-semibold text-xs hover:bg-cyan-500/10 transition-colors shadow-lg"
            >
              Muat Lebih Banyak ({filteredCertificates.length - visibleCount} lagi) ↓
            </button>
          </div>
        )}

      </div>

      {/* Certificate Viewer Modal */}
      {selectedCertModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCertModal(null)}
        >
          <div
            className="relative max-w-4xl w-full h-[85vh] bg-slate-950 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#090d16]">
              <div className="flex items-center gap-2 max-w-[80%]">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <p className="text-sm font-semibold text-white truncate">
                  {selectedCertModal.title} — {selectedCertModal.issuer}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedCertModal.filePath}
                  download
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                  title="Unduh File"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setSelectedCertModal(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                  aria-label="Tutup Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: PDF iframe or Image */}
            <div className="flex-1 w-full bg-slate-900 relative overflow-hidden">
              {selectedCertModal.isPdf ? (
                <iframe
                  src={`${selectedCertModal.filePath}#toolbar=0`}
                  title={selectedCertModal.title}
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <Image
                    src={selectedCertModal.filePath}
                    alt={selectedCertModal.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
