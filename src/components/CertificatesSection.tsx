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

      {/* 3D Wheel Interactive Full-Bleed Stage (Expansive Height - No Cutting Off) */}
      <div className="relative w-full h-[660px] sm:h-[740px] lg:h-[820px] overflow-hidden select-none bg-[#fdfcff]">
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

        {/* 3D WorksWheel Component with Side Title and Right Index */}
        <WorksWheel
          items={wheelItems}
          label="Certifications '24-'26"
          action="Inspect"
          showSideTitle={true}
          targetIndex={targetIndex}
          onActiveChange={(idx) => setActiveIndex(idx)}
          onCardClick={(item) => {
            const cert = CERTIFICATES_DATA.find((c) => c.title === item.title);
            if (cert) setInspectItem(cert);
          }}
          className="size-full bg-transparent"
        />
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
