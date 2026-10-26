"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const emailAddress = "akhyarmualif422006@gmail.com";
  const whatsappNumber = "089530123608";
  const whatsappDisplay = "0895-3012-3608";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    "Halo Akhyar, saya tertarik berdiskusi mengenai proyek / kolaborasi bersama Anda. Bisa kita jadwalkan diskusi lebih lanjut?"
  );

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#faf9fc] text-zinc-900 overflow-hidden border-t border-zinc-200/80"
    >
      {/* Soft Ambient Background Radial Gradients */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] pointer-events-none -z-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(224, 231, 255, 0.7) 0%, rgba(243, 232, 255, 0.4) 50%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 z-10">
        
        {/* Header - Direct & Purposeful */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold tracking-wide mb-4 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open for Projects & Collaborations • 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-950 leading-tight">
            Let&apos;s Connect &amp; Collaborate.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
            Tertarik berdiskusi mengenai proyek perangkat lunak, sistem AI Agent, atau peluang kolaborasi kemitraan? Hubungi saya langsung melalui WhatsApp atau Email.
          </p>
        </div>

        {/* Focused Primary Contact Grid (WhatsApp & Email Direct Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          
          {/* Card 1: WhatsApp Primary */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-white/90 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  <Clock className="w-3 h-3" />
                  <span>Respon Cepat</span>
                </span>
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                WHATSAPP
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 mt-1 mb-1">
                {whatsappDisplay}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Kirim pesan langsung untuk respon instan via WhatsApp.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100">
              <a
                href={`https://wa.me/62${whatsappNumber.replace(/^0/, "")}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full cursor-pointer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Card 2: Email Direct */}
          <div className="relative p-6 sm:p-7 rounded-3xl bg-white/90 border border-zinc-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">
                  Inquiries
                </span>
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
                EMAIL ADDRESS
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 mt-1 mb-1 truncate" title={emailAddress}>
                {emailAddress}
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Untuk pertanyaan formal, dokumen penawaran, atau proposal proyek.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2">
              <a
                href={`mailto:${emailAddress}?subject=Kolaborasi%20Proyek%20-%20Akhyar%20Mualif`}
                className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-sm transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Kirim Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="cursor-pointer p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors border border-zinc-200/80"
                title="Salin Email"
                aria-label="Salin alamat email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Secondary Info: Location & Socials */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-indigo-500" />
            <span>Kebumen, Jawa Tengah, Indonesia</span>
          </div>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 hover:text-black hover:border-zinc-300 shadow-2xs transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 hover:text-blue-600 hover:border-zinc-300 shadow-2xs transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn Network</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;
