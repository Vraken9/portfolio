"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUp, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HalftoneWordmarkFooterProps {
  wordmark?: string;
  className?: string;
}

interface Dot {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  intensity: number;
}

export function HalftoneWordmarkFooter({
  wordmark = "AKHYAR",
  className = "",
}: HalftoneWordmarkFooterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const setupCanvas = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = 320; // Taller wordmark canvas banner
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      // Create offscreen text canvas to sample dot positions
      const offCanvas = document.createElement("canvas");
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      // Taller, more impactful font size
      const fontSize = Math.min(width / (wordmark.length * 0.48), 260);
      offCtx.font = `900 ${fontSize}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillStyle = "#ffffff";
      offCtx.fillText(wordmark, width / 2, height * 0.52);

      const imgData = offCtx.getImageData(0, 0, width, height);
      const data = imgData.data;

      // Sample grid points for halftone - smaller dots, higher density (more dots)
      const gap = Math.max(4, Math.floor(width / 240));
      const newDots: Dot[] = [];

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          if (alpha > 70) {
            const rad = Math.max((alpha / 255) * (gap * 0.38), 0.9);
            newDots.push({
              x,
              y,
              originX: x,
              originY: y,
              vx: 0,
              vy: 0,
              radius: rad,
              baseRadius: rad,
            });
          }
        }
      }
      dotsRef.current = newDots;
    };

    setupCanvas();

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("resize", handleResize);

    // Animation & Physics loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update ripples
      const activeRipples = ripplesRef.current;
      for (let i = activeRipples.length - 1; i >= 0; i--) {
        const r = activeRipples[i];
        r.radius += 8;
        r.intensity *= 0.94;
        if (r.intensity < 0.05 || r.radius > r.maxRadius) {
          activeRipples.splice(i, 1);
        }
      }

      const mouse = mouseRef.current;
      const dots = dotsRef.current;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];

        // Mouse spring repulsion
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 90;

        if (dist < maxDist && mouse.active) {
          const force = (1 - dist / maxDist) * 9;
          const angle = Math.atan2(dy, dx);
          d.vx += Math.cos(angle) * force;
          d.vy += Math.sin(angle) * force;
        }

        // Ripple impulse
        for (let j = 0; j < activeRipples.length; j++) {
          const r = activeRipples[j];
          const rdx = d.x - r.x;
          const rdy = d.y - r.y;
          const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
          if (Math.abs(rdist - r.radius) < 25) {
            const rforce = r.intensity * 6;
            const rangle = Math.atan2(rdy, rdx);
            d.vx += Math.cos(rangle) * rforce;
            d.vy += Math.sin(rangle) * rforce;
          }
        }

        // Return to origin spring force
        const returnDx = d.originX - d.x;
        const returnDy = d.originY - d.y;
        d.vx += returnDx * 0.08;
        d.vy += returnDy * 0.08;

        // Friction damping
        d.vx *= 0.82;
        d.vy *= 0.82;

        d.x += d.vx;
        d.y += d.vy;

        // Draw dot with heat-shift color
        const velocity = Math.sqrt(d.vx * d.vx + d.vy * d.vy);
        const heat = Math.min(velocity / 6, 1);

        ctx.beginPath();
        ctx.arc(d.x, d.y, Math.max(1, d.radius + heat * 1.5), 0, Math.PI * 2);

        if (heat > 0.15) {
          // Warm up when moving
          ctx.fillStyle = `rgb(${Math.floor(99 + heat * 140)}, ${Math.floor(
            102 - heat * 50
          )}, ${Math.floor(241 - heat * 120)})`;
        } else {
          // Subtle muted dark slate dot
          ctx.fillStyle = "rgba(24, 24, 27, 0.85)";
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [wordmark]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    ripplesRef.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      radius: 5,
      maxRadius: Math.max(rect.width, rect.height) * 0.8,
      intensity: 1,
    });
  };

  return (
    <footer
      className={`relative w-full bg-zinc-100/80 border-t border-zinc-200/80 pt-16 pb-8 overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Info & Link Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-200">
          
          {/* Column 1: Identity & Bio */}
          <div className="md:col-span-2">
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-600 uppercase">
              Technopreneur & AI Portfolio
            </span>
            <h3 className="text-2xl font-extrabold text-zinc-950 mt-1">
              {PERSONAL_INFO.fullName}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 max-w-md leading-relaxed">
              Mahasiswa Teknik Informatika UMNU Kebumen yang berfokus membangun produk digital berbasis AI Agent & Full-Stack Web.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-700 hover:text-black hover:border-zinc-300 transition-colors shadow-xs"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-700 hover:text-blue-600 hover:border-zinc-300 transition-colors shadow-xs"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-700 hover:text-emerald-600 hover:border-zinc-300 transition-colors shadow-xs"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigasi Cepat */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <a href="#hero" className="hover:text-zinc-950 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-zinc-950 transition-colors">
                  Tentang Saya
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-zinc-950 transition-colors">
                  Proyek Web & AI
                </a>
              </li>
              <li>
                <a href="#sertifikat" className="hover:text-zinc-950 transition-colors">
                  Verified Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-zinc-950 transition-colors">
                  Kontak & Kemitraan
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Akademik & Lokasi */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
              Informasi Kampus
            </h4>
            <p className="text-sm text-zinc-800 font-semibold">
              Universitas Ma&apos;arif Nahdlatul Ulama (UMNU) Kebumen
            </p>
            <p className="text-xs text-zinc-500 mt-0.5">
              Teknik Informatika • Semester 5
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Kebumen, Jawa Tengah, Indonesia
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mt-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:border-zinc-400 transition-all shadow-xs"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Kembali ke Atas</span>
            </button>
          </div>

        </div>

        {/* Interactive Halftone Wordmark Canvas */}
        <div
          ref={containerRef}
          className="relative w-full pt-6 flex flex-col items-center justify-center cursor-pointer"
        >
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className="w-full h-[260px] sm:h-[300px] lg:h-[320px] select-none block"
            title="Klik untuk efek shockwave!"
          />
          <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mt-1">
            Gerakkan kursor untuk menggeser halftone • Klik untuk shockwave
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-2">
          <p>© 2026 Akhyar Mualif. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, 21st.dev components & AI Pair Programming
          </p>
        </div>

      </div>
    </footer>
  );
}

export default HalftoneWordmarkFooter;
