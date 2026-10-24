"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Marquee } from "@/components/ui/marquee";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";

export default function Home() {
  return (
    <MagneticCursor blendMode="exclusion" cursorSize={32}>
      <main className="relative min-h-screen bg-zinc-50 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        {/* Floating Glassmorphism Navigation (Scaled down 20%) */}
        <Navbar />

        {/* Aurora Background Hero Section */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          <AuroraBackground className="min-h-screen justify-between pt-24 sm:pt-28 pb-4">
            
            {/* Top Spacing to account for fixed navbar */}
            <div className="w-full h-8 sm:h-12" />

            {/* Center Stage: 1 Single Massive Running Text in Background + Enlarged Photo in Foreground */}
            <div className="relative w-full flex-1 flex flex-col items-center justify-end overflow-hidden">
              
              {/* 1 Single Massive Running Text Row (Positioned behind photo, hardware accelerated) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10 opacity-75">
                <div className="w-full overflow-hidden">
                  <Marquee duration={26} className="py-2">
                    <span className="text-outline-stroke-hero text-8xl sm:text-[140px] md:text-[200px] lg:text-[280px] xl:text-[360px] font-black tracking-widest uppercase whitespace-nowrap px-8 sm:px-14 lg:px-20 select-none leading-none">
                      AKHYAR MUALIF
                    </span>
                    <span className="text-outline-stroke-hero text-8xl sm:text-[140px] md:text-[200px] lg:text-[280px] xl:text-[360px] font-black tracking-widest uppercase whitespace-nowrap px-8 sm:px-14 lg:px-20 select-none leading-none">
                      AKHYAR MUALIF
                    </span>
                  </Marquee>
                </div>
              </div>

              {/* Enlarged Photo Layer (Foreground in front of Running Text) */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-20 flex flex-col items-center justify-end mt-auto"
              >
                {/* Radial aura glow behind shoulders */}
                <div className="absolute bottom-24 w-[360px] sm:w-[520px] md:w-[620px] h-[360px] sm:h-[520px] md:h-[620px] rounded-full bg-gradient-to-t from-indigo-200/40 via-sky-200/30 to-transparent blur-3xl pointer-events-none -z-10" />

                {/* Cutout Half-Body Photo - Scaled up significantly */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                
              </motion.div>

            </div>

            {/* Bottom subtle indicator */}
            <div className="relative z-30 flex justify-center items-center pt-2 pb-1">
              <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
                PORTFOLIO 2026 • AKHYAR MUALIF
              </span>
            </div>

          </AuroraBackground>
        </section>
      </main>
    </MagneticCursor>
  );
}
