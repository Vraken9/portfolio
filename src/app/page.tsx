"use client";

import { motion } from "framer-motion";
import React from "react";
import Navbar from "@/components/Navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-50">
      {/* Floating Glassmorphism Navigation */}
      <Navbar />

      {/* Aurora Background Hero */}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-4xl mx-auto text-center pt-36 pb-20"
        >
          {/* Main Headline styled like the screenshot */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08]">
            Background lights are cool{" "}
            <br className="hidden sm:inline" />
            you know.
          </h1>

          {/* Subtitle */}
          <p className="font-light text-base sm:text-2xl text-slate-600 tracking-tight py-2">
            And this, is chemical burn.
          </p>

          {/* Button styled exactly like the screenshot pill */}
          <button className="bg-black text-white rounded-full px-6 py-2.5 text-xs font-semibold hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground>
    </main>
  );
}
