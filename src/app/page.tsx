"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Marquee } from "@/components/ui/marquee";
import { Sparkles, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-50 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Floating Glassmorphism Navigation */}
      <Navbar />

      {/* Aurora Background Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        <AuroraBackground className="min-h-screen justify-between pt-24 sm:pt-28 pb-8">
          
          {/* Top Spacing to account for fixed navbar */}
          <div className="w-full h-8 sm:h-12" />

          {/* Center Stage: Running Text in Background + Photo in Foreground */}
          <div className="relative w-full flex-1 flex flex-col items-center justify-end overflow-hidden">
            
            {/* Running Text Layer (Positioned behind photo, transparent with stroke border) */}
            <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none z-10 opacity-70">
              
              {/* Row 1: Marquee moving Left */}
              <div className="w-full overflow-hidden">
                <Marquee duration={28} className="py-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-outline-stroke text-7xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-widest uppercase whitespace-nowrap px-6"
                    >
                      AKHYAR MUALIF •
                    </span>
                  ))}
                </Marquee>
              </div>

              {/* Row 2: Marquee moving Right (Reverse) */}
              <div className="w-full overflow-hidden mt-[-10px] sm:mt-[-25px] md:mt-[-40px]">
                <Marquee duration={34} reverse className="py-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span
                      key={i}
                      className="text-outline-stroke-accent text-7xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-widest uppercase whitespace-nowrap px-6"
                    >
                      AKHYAR MUALIF •
                    </span>
                  ))}
                </Marquee>
              </div>

            </div>

            {/* Photo Layer (Foreground in front of Running Text) */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-20 flex flex-col items-center justify-end mt-auto"
            >
              {/* Radial aura glow behind shoulders */}
              <div className="absolute bottom-20 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-t from-indigo-200/40 via-sky-200/30 to-transparent blur-3xl pointer-events-none -z-10" />

              {/* Cutout Half-Body Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile-half.png"
                alt="Akhyar Mualif"
                className="h-[440px] sm:h-[540px] md:h-[620px] lg:h-[680px] w-auto object-contain object-bottom drop-shadow-[0_20px_45px_rgba(0,0,0,0.18)] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] select-none pointer-events-none will-change-transform"
              />

              {/* Subtle Floating Identity Pills around Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute left-4 sm:left-12 bottom-24 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.06)] text-xs font-semibold text-zinc-800"
              >
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Teknik Informatika • UNU Kebumen</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="absolute right-4 sm:right-12 bottom-28 hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.06)] text-xs font-semibold text-zinc-800"
              >
                <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
                <span>AI Agent Builder & Technopreneur</span>
              </motion.div>
            </motion.div>

          </div>

          {/* Bottom subtle indicator */}
          <div className="relative z-30 flex justify-center items-center pt-2">
            <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
              PORTFOLIO 2026 • AKHYAR MUALIF
            </span>
          </div>

        </AuroraBackground>
      </section>
    </main>
  );
}
