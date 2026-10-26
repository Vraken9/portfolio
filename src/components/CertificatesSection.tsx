"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  CERTIFICATES_DATA,
  CertificateItem,
} from "@/data/certificatesData";
import { WorksWheel, WorksWheelItem } from "@/components/works-wheel";
import { ShaderMetal } from "@/components/ui/shader-metal";
import {
  ExternalLink,
  Award,
  X,
  FileText,
} from "lucide-react";

export function CertificatesSection() {
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
      className="relative w-full border-t border-b border-black/10 bg-[#faf8fd] text-zinc-900 overflow-hidden pt-10 sm:pt-12 pb-0"
    >
      <div id="certificates" className="absolute -top-20" />

      {/* Section Header - Clean, Minimalist, Elegant (90% viewport optimized for laptop screens) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-4 sm:mb-6">
        <div
          data-cursor-expand
          data-cursor-scale="1.45"
          className="max-w-3xl cursor-default"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black tracking-tight text-zinc-950 leading-tight">
            Verified Credentials & Training
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-[15px] text-zinc-600 leading-relaxed font-normal">
            Curated certifications completed during academic spare time to accelerate skills across Autonomous AI, Cloud Systems, Cybersecurity, Data Science, and Modern Web Engineering.
          </p>
        </div>
      </div>

      {/* 3D Wheel Interactive Full-Bleed Stage (Pure Radiant Light Mode - Compact Height for Laptop Screen Fit) */}
      <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] overflow-hidden select-none bg-[#fdfcff]">
        {/* Liquid Chrome Shader Metal Background */}
        <ShaderMetal
          metal="chrome"
          color="#EAEBF5"
          ribbons={3}
          speed={0.22}
          iridescence={0.28}
          interactive={true}
          className="opacity-75"
        />

        {/* Ambient Lavender Radial Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none -z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(235, 223, 252, 0.55) 0%, rgba(247, 243, 254, 0.3) 50%, rgba(255, 255, 255, 0.75) 100%)",
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

        {/* Sleek Minimalist Floating Glass Pill (Bottom Left) */}
        {activeCert && (
          <div className="absolute bottom-8 sm:bottom-10 left-6 sm:left-10 z-30 max-w-[320px] sm:max-w-md p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-xl transition-all duration-300 pointer-events-auto">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200">
                {activeCert.groupLabel}
              </span>
              <span className="font-mono text-xs text-zinc-400 font-medium">
                {String(activeIndex + 1).padStart(2, "0")} / {String(CERTIFICATES_DATA.length).padStart(2, "0")}
              </span>
            </div>

            <h4 className="font-bold text-sm sm:text-base text-zinc-900 leading-snug line-clamp-2">
              {activeCert.title}
            </h4>
            <p className="text-xs text-zinc-500 mt-1 font-normal">
              Issuer: <span className="font-medium text-zinc-700">{activeCert.issuer}</span>
            </p>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-3.5 pt-3 border-t border-black/5">
              <button
                type="button"
                id="inspect-active-cert"
                onClick={() => setInspectItem(activeCert)}
                className="cursor-pointer flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 text-white font-medium text-xs hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Inspect</span>
              </button>
              <a
                href={activeCert.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-700 font-medium text-xs hover:bg-zinc-200 transition-colors border border-black/5"
                title="Open original PDF / PNG"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Document</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>
        )}
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
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden border border-black/10 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50/50">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-violet-100 text-violet-700 border border-violet-200">
                  {inspectItem.groupLabel}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-zinc-900 truncate max-w-md">
                  {inspectItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectItem(null)}
                className="cursor-pointer p-1.5 rounded-full hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-zinc-100/60">
              <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-lg border border-black/10 bg-white">
                <img
                  src={inspectItem.image}
                  alt={inspectItem.title}
                  className="w-full h-auto object-contain max-h-[60vh]"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-zinc-100 bg-white">
              <div className="flex flex-wrap gap-1.5">
                {inspectItem.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-700 border border-zinc-200"
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
