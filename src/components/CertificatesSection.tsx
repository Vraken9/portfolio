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
          action="View"
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

      {/* Lightbox Minimalist Modal Preview */}
      {inspectItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setInspectItem(null)}
        >
          {/* Floating Close Button */}
          <button
            type="button"
            onClick={() => setInspectItem(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 cursor-pointer p-2.5 rounded-full bg-zinc-900/80 hover:bg-black text-white/80 hover:text-white border border-white/20 shadow-xl backdrop-blur-md transition-all hover:scale-105"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Enlarged Certificate and Small Full Document Button */}
          <div
            className="relative flex flex-col items-center justify-center max-w-5xl xl:max-w-6xl w-full max-h-[90vh] select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enlarged Certificate Image */}
            <div className="relative rounded-xl overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-white/20 bg-white">
              <img
                src={
                  inspectItem.documentUrl.toLowerCase().endsWith(".pdf")
                    ? inspectItem.image
                    : inspectItem.documentUrl
                }
                alt={inspectItem.title}
                className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-xl"
              />
            </div>

            {/* Small button to navigate to full document */}
            <div className="mt-4 flex items-center justify-center">
              <a
                href={inspectItem.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/90 hover:bg-black text-white border border-zinc-700 hover:border-zinc-400 text-xs sm:text-sm font-medium transition-all shadow-xl backdrop-blur-md hover:scale-105"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-300" />
                <span>Open Full Document</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificatesSection;
