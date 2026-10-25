"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  CERTIFICATES_DATA,
  CERTIFICATE_GROUPS,
  CertificateItem,
} from "@/data/certificatesData";
import { WorksWheel, WorksWheelItem } from "@/components/works-wheel";
import { ShaderMetal } from "@/components/ui/shader-metal";
import {
  ExternalLink,
  Award,
  X,
  FileText,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export function CertificatesSection() {
  const [selectedGroup, setSelectedGroup] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [targetIndex, setTargetIndex] = useState<number | undefined>(undefined);
  const [inspectItem, setInspectItem] = useState<CertificateItem | null>(null);

  // Map certificates data into WorksWheel items
  const wheelItems: WorksWheelItem[] = useMemo(() => {
    return CERTIFICATES_DATA.map((cert) => ({
      title: cert.title,
      image: cert.image,
      badge: cert.groupLabel,
      certData: cert,
    }));
  }, []);

  const activeCert = CERTIFICATES_DATA[activeIndex] || CERTIFICATES_DATA[0];

  // Jump to first certificate of selected category
  const handleSelectGroup = (groupKey: string) => {
    setSelectedGroup(groupKey);
    if (groupKey === "all") {
      setTargetIndex(0);
      return;
    }
    const foundIndex = CERTIFICATES_DATA.findIndex((c) => c.group === groupKey);
    if (foundIndex !== -1) {
      setTargetIndex(foundIndex);
    }
  };

  // Sync selected group pill when rotating wheel
  useEffect(() => {
    if (activeCert) {
      setSelectedGroup(activeCert.group);
    }
  }, [activeCert]);

  // Handle escape key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInspectItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="sertifikat"
      className="relative w-full border-b border-black/10 dark:border-white/10 bg-[#faf8fd] dark:bg-zinc-950 overflow-hidden py-16 sm:py-24"
    >
      <div id="certificates" className="absolute -top-20" />
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/40 text-violet-800 dark:text-violet-300 font-mono text-xs tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[03 // CONTINUOUS LEARNING]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Verified Credentials & Training
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
              Curated certifications completed during academic spare time to
              accelerate skills across Autonomous AI, Cloud Systems,
              Cybersecurity, Data Science, and Modern Web Engineering.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-sm">
              <span className="block font-mono text-2xl font-bold text-zinc-900 dark:text-white">
                {CERTIFICATES_DATA.length}
              </span>
              <span className="block font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                Total Certifications
              </span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-black/5 dark:border-white/10 shadow-sm backdrop-blur-sm">
              <span className="block font-mono text-2xl font-bold text-violet-600 dark:text-violet-400">
                10
              </span>
              <span className="block font-mono text-[11px] text-zinc-500 uppercase tracking-wider">
                Specialized Tracks
              </span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
          {CERTIFICATE_GROUPS.map((grp) => {
            const count =
              grp.key === "all"
                ? CERTIFICATES_DATA.length
                : CERTIFICATES_DATA.filter((c) => c.group === grp.key).length;
            const isSelected = selectedGroup === grp.key;
            return (
              <button
                key={grp.key}
                type="button"
                onClick={() => handleSelectGroup(grp.key)}
                className={`cursor-pointer whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm scale-[1.02]"
                    : "bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-black/5 dark:border-white/10 hover:border-black/20"
                }`}
              >
                <span>{grp.label}</span>
                <span
                  className={`font-mono text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? "bg-white/20 text-white dark:bg-zinc-900/20 dark:text-zinc-900"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Wheel Interactive Stage */}
      <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[740px] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-[#fdfcff] dark:bg-zinc-950">
          {/* Liquid Chrome Shader Metal Background */}
          <ShaderMetal
            metal="chrome"
            color="#EAEBF5"
            ribbons={3}
            speed={0.22}
            iridescence={0.28}
            interactive={true}
            className="opacity-70 dark:opacity-40"
          />

          {/* Ambient Lavender Radial Gradient Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none select-none -z-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(235, 223, 252, 0.45) 0%, rgba(247, 243, 254, 0.25) 50%, rgba(255, 255, 255, 0.6) 100%)",
            }}
          />

          {/* 3D WorksWheel Component */}
          <WorksWheel
            items={wheelItems}
            label="Certifications '24-'26"
            action="Inspect"
            showSideTitle={false}
            targetIndex={targetIndex}
            onActiveChange={(idx) => setActiveIndex(idx)}
            onCardClick={(item) => {
              const cert = CERTIFICATES_DATA.find((c) => c.title === item.title);
              if (cert) setInspectItem(cert);
            }}
            className="size-full bg-transparent"
          />

          {/* Bottom Left Floating Detail HUD */}
          {activeCert && (
            <div className="absolute bottom-6 left-6 z-30 max-w-[340px] sm:max-w-md p-4 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-violet-700 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 px-2 py-0.5 rounded border border-violet-200 dark:border-violet-800/40">
                  {activeCert.groupLabel} // VERIFIED
                </span>
                <span className="font-mono text-[11px] text-zinc-400">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(CERTIFICATES_DATA.length).padStart(2, "0")}
                </span>
              </div>

              <h4 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white leading-tight">
                {activeCert.title}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
                Issuer: {activeCert.issuer} • {activeCert.category}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1 mt-2.5">
                {activeCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-zinc-100 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setInspectItem(activeCert)}
                  className="cursor-pointer flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-xs hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Inspect</span>
                </button>
                <a
                  href={activeCert.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-xs hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors border border-black/5 dark:border-white/10"
                  title="Open original PDF / PNG"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Original Document</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal Preview */}
      {inspectItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setInspectItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/40">
                  {inspectItem.groupLabel}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-white truncate max-w-md">
                  {inspectItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectItem(null)}
                className="cursor-pointer p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-zinc-100/60 dark:bg-zinc-950/60">
              <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-lg border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900">
                <img
                  src={inspectItem.image}
                  alt={inspectItem.title}
                  className="w-full h-auto object-contain max-h-[60vh]"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <div className="flex flex-wrap gap-1.5">
                {inspectItem.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={inspectItem.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm transition-all shadow-md shadow-violet-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Full PDF / Document</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificatesSection;
