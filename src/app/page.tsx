"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Marquee } from "@/components/ui/marquee";
import { MagneticCursor } from "@/components/ui/magnetic-cursor";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
    <MagneticCursor blendMode="difference" cursorSize={22}>
      <main className="relative min-h-screen bg-zinc-50 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
        {/* Floating Glassmorphism Navigation (Sweet spot +5-10% size) */}
        <Navbar />

        {/* Aurora Background Hero Section */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden">
          <AuroraBackground className="min-h-screen justify-between pt-24 sm:pt-28 pb-6">
            
            {/* Top Spacing to account for fixed navbar */}
            <div className="w-full h-10 sm:h-16" />

            {/* Center Stage: 1 Single Massive Running Text Row (Centered, Non-stopping, Clean Outline) */}
            <div className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden my-auto py-12">
              
              {/* Massive Hollow Running Text - Never pauses on hover */}
              <div
                data-cursor-invert
                className="w-full overflow-hidden select-none py-4 pointer-events-auto"
              >
                <Marquee duration={28} pauseOnHover={false} className="py-2">
                  <span className="text-outline-stroke-hero text-9xl sm:text-[140px] md:text-[200px] lg:text-[270px] xl:text-[340px] font-black tracking-widest uppercase whitespace-nowrap px-10 sm:px-16 lg:px-24 select-none leading-none">
                    AKHYAR MUALIF
                  </span>
                  <span className="text-outline-stroke-hero text-9xl sm:text-[140px] md:text-[200px] lg:text-[270px] xl:text-[340px] font-black tracking-widest uppercase whitespace-nowrap px-10 sm:px-16 lg:px-24 select-none leading-none">
                    AKHYAR MUALIF
                  </span>
                </Marquee>
              </div>

              {/* Sub-label below running text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 flex flex-col items-center text-center px-4"
              >
                <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-500 uppercase">
                  AI Agent Builder & Technopreneur • Universitas Ma'arif Nahdlatul Ulama Kebumen
                </p>
              </motion.div>

            </div>

            {/* Bottom Indicator */}
            <div className="relative z-30 flex flex-col items-center justify-center pt-2 pb-1 gap-1.5">
              <span className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
                PORTFOLIO 2026 • AKHYAR MUALIF
              </span>
              <a
                href="#about"
                data-magnetic
                className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-800 transition-colors animate-bounce"
                aria-label="Scroll down to About section"
              >
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </div>

          </AuroraBackground>
        </section>
      </main>
    </MagneticCursor>
  );
}
