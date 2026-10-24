"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-5 items-center justify-center px-4 max-w-4xl mx-auto text-center py-20"
      >
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-zinc-200 text-xs font-mono text-zinc-700 shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span>Aurora Background • Light Theme Active</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1]">
          Background lights are{" "}
          <span className="text-gradient">cool you know.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-normal text-base sm:text-xl text-zinc-600 max-w-2xl leading-relaxed">
          Komponen Aurora Background berhasil dipasang dengan tema <strong>Light</strong>. Siap dipadukan dengan foto profil, nama, running text, dan elemen Section 1 Anda.
        </p>

        {/* Action Button */}
        <div className="pt-2">
          <button className="px-6 py-3 rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer">
            Check Now
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
