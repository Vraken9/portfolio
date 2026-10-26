"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  MessageSquare,
  Mail,
  Copy,
  Check,
  RotateCcw,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/Icons";

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = PERSONAL_INFO.email || "akhyarmualif422006@gmail.com";
  const whatsappUrl = `https://wa.me/6289530123608?text=${encodeURIComponent(
    "Halo Akhyar, saya tertarik berdiskusi mengenai proyek / kolaborasi bersama Anda. Bisa kita jadwalkan diskusi lebih lanjut?"
  )}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsClicked(true);

    setTimeout(() => {
      setShowSuccess(true);
    }, 500);
  };

  const handleReset = () => {
    setShowSuccess(false);
    setTimeout(() => {
      setIsClicked(false);
      setIsHovered(false);
    }, 300);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#faf9fc] text-zinc-900 overflow-hidden border-t border-zinc-200/80 flex items-center justify-center px-6"
    >
      {/* Soft Ambient Radial Background Light */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] pointer-events-none -z-0 opacity-55 select-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(224, 231, 255, 0.65) 0%, rgba(243, 232, 255, 0.35) 45%, transparent 75%)",
        }}
      />

      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center gap-10 sm:gap-12 z-10">
        
        {/* ============================================================
            SUCCESS / REVEALED STATE (Let's Talk & Direct Channels)
           ============================================================ */}
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 sm:gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: showSuccess ? 1 : 0,
            transform: showSuccess ? "translateY(0) scale(1)" : "translateY(24px) scale(0.96)",
            pointerEvents: showSuccess ? "auto" : "none",
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-2">
            <span
              className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-zinc-400 transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "100ms",
              }}
            >
              PERFECT • READY TO CONNECT
            </span>
            <h3
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-zinc-950 transition-all duration-500"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "180ms",
              }}
            >
              Let&apos;s talk
            </h3>
            <p
              className="mt-1 text-xs sm:text-sm text-zinc-500 max-w-md transition-all duration-500 leading-relaxed"
              style={{
                transform: showSuccess ? "translateY(0)" : "translateY(10px)",
                opacity: showSuccess ? 1 : 0,
                transitionDelay: "240ms",
              }}
            >
              Tertarik berdiskusi proyek, sistem AI Agent, atau kolaborasi kemitraan? Pilih saluran komunikasi tercepat:
            </p>
          </div>

          {/* Primary Action Buttons: WhatsApp & Email */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-md justify-center transition-all duration-500"
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(15px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "300ms",
            }}
          >
            {/* WhatsApp Primary Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 cursor-pointer group relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <WhatsappIcon className="w-4 h-4 text-white" />
              <span>Chat via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Email Direct Button */}
            <a
              href={`mailto:${emailAddress}`}
              className="w-full sm:w-auto flex-1 cursor-pointer group relative flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200/90 font-medium text-sm transition-all duration-300 shadow-xs hover:shadow-md hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 text-zinc-600" />
              <span>Kirim Email</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Polished Socials Pill & Reset Interaction */}
          <div
            className="flex flex-col items-center gap-4 transition-all duration-500"
            style={{
              transform: showSuccess ? "translateY(0)" : "translateY(12px)",
              opacity: showSuccess ? 1 : 0,
              transitionDelay: "400ms",
            }}
          >
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 border border-zinc-200/80 backdrop-blur-md shadow-2xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mr-1">
                Profiles:
              </span>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full text-zinc-600 hover:text-blue-600 hover:bg-zinc-100 transition-all"
                title="LinkedIn Akhyar Mualif"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full text-zinc-600 hover:text-black hover:bg-zinc-100 transition-all"
                title="GitHub Akhyar Mualif"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full text-zinc-600 hover:text-emerald-600 hover:bg-zinc-100 transition-all"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            {/* Replay/Back button */}
            <button
              type="button"
              onClick={handleReset}
              className="cursor-pointer inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Interaksi</span>
            </button>
          </div>
        </div>

        {/* ============================================================
            INITIAL STATE (Interactive Hero Heading & Social Polishing)
           ============================================================ */}

        {/* Top Status Badge */}
        <div
          className="flex items-center gap-3 transition-all duration-500"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(-20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase text-zinc-500">
            Available for projects &bull; 2026
          </span>
        </div>

        {/* Giant Interactive Heading "Let's work together" */}
        <div
          className="group relative cursor-pointer select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          style={{
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <h2
              className="relative text-center text-5xl font-light tracking-tight text-zinc-950 sm:text-6xl md:text-7xl lg:text-8xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: isClicked ? 0 : 1,
                transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
              }}
            >
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  Let&apos;s work
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                  style={{
                    transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)",
                  }}
                >
                  <span className="text-zinc-400/80 font-extralight">together</span>
                </span>
              </span>
            </h2>

            {/* Circular Expandable Action Button */}
            <div className="relative mt-2 flex size-16 items-center justify-center sm:size-20">
              <div
                className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                style={{
                  borderColor: isClicked ? "#09090b" : isHovered ? "#09090b" : "rgba(0,0,0,0.12)",
                  backgroundColor: isClicked ? "transparent" : isHovered ? "#09090b" : "rgba(255,255,255,0.7)",
                  transform: isClicked ? "scale(3.2)" : isHovered ? "scale(1.12)" : "scale(1)",
                  opacity: isClicked ? 0 : 1,
                  transitionDuration: isClicked ? "700ms" : "500ms",
                  boxShadow: isHovered ? "0 10px 30px -5px rgba(0,0,0,0.15)" : "none",
                }}
              />
              <ArrowUpRight
                className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                style={{
                  transform: isClicked
                    ? "translate(100px, -100px) scale(0.5)"
                    : isHovered
                      ? "translate(2px, -2px)"
                      : "translate(0, 0)",
                  opacity: isClicked ? 0 : 1,
                  color: isHovered && !isClicked ? "#ffffff" : "#09090b",
                  transitionDuration: isClicked ? "600ms" : "500ms",
                }}
              />
            </div>
          </div>

          {/* Left ambient line */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16 pointer-events-none">
            <div
              className="h-px w-8 bg-zinc-300 transition-all duration-500 sm:w-14"
              style={{
                transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.4)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.45,
              }}
            />
          </div>

          {/* Right ambient line */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16 pointer-events-none">
            <div
              className="h-px w-8 bg-zinc-300 transition-all duration-500 sm:w-14"
              style={{
                transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.4)" : "scaleX(1)",
                opacity: isClicked ? 0 : isHovered ? 1 : 0.45,
              }}
            />
          </div>
        </div>

        {/* Bottom Subtext & Polished Socials Pill */}
        <div
          className="flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
          style={{
            opacity: isClicked ? 0 : 1,
            transform: isClicked ? "translateY(20px)" : "translateY(0)",
            pointerEvents: isClicked ? "none" : "auto",
          }}
        >
          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-zinc-500 font-normal">
            Have a project in mind or seeking AI system engineering? Let&apos;s create something impactful together.
          </p>

          {/* Click to Copy Email Bar */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="cursor-pointer group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white border border-black/[0.08] hover:border-black/20 text-xs text-zinc-700 transition-all shadow-2xs"
            title="Klik untuk menyalin email"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-800" />
            <span className="font-mono tracking-wider">{emailAddress}</span>
            {copied ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                <Check className="w-3 h-3" />
                <span>Tersalin!</span>
              </span>
            ) : (
              <Copy className="w-3 h-3 text-zinc-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            )}
          </button>

          {/* Polished Social Media Quick Logos (LinkedIn, GitHub, WhatsApp) */}
          <div className="flex items-center gap-2 mt-1">
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-black/[0.08] bg-white/80 hover:bg-white text-zinc-500 hover:text-blue-600 transition-all hover:scale-110 shadow-2xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-black/[0.08] bg-white/80 hover:bg-white text-zinc-500 hover:text-black transition-all hover:scale-110 shadow-2xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-black/[0.08] bg-white/80 hover:bg-white text-zinc-500 hover:text-emerald-600 transition-all hover:scale-110 shadow-2xs"
              title="WhatsApp Direct"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default LetsWorkTogether;
