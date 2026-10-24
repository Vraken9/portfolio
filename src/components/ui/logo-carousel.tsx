"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface LogoItem {
  src: string;
  alt?: string;
  label?: string;
}

interface AnimatedCarouselProps {
  title?: string;
  logos: (string | LogoItem)[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  itemsPerViewMobile?: number;
  itemsPerViewDesktop?: number;
  logoContainerWidth?: string;
  logoContainerHeight?: string;
  logoImageWidth?: string;
  logoImageHeight?: string;
  className?: string;
}

// TextRoll animated title
function TextRoll({ text }: { text: string }) {
  return (
    <div className="overflow-hidden inline-flex">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.02,
            ease: "easeOut",
          }}
          className="inline-block text-sm sm:text-base font-semibold uppercase tracking-wider text-zinc-500"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
}

export function AnimatedCarousel({
  title = "Technologies & Tools",
  logos,
  autoPlay = true,
  autoPlayInterval = 3000,
  logoContainerWidth = "w-36",
  logoContainerHeight = "h-16",
  logoImageWidth = "w-auto",
  logoImageHeight = "h-8 sm:h-9",
  className = "",
}: AnimatedCarouselProps) {
  // Normalize logos
  const normalizedLogos: LogoItem[] = logos.map((item) =>
    typeof item === "string" ? { src: item, alt: "Tech Logo" } : item
  );

  // Duplicate for seamless infinite loop
  const displayLogos = [...normalizedLogos, ...normalizedLogos, ...normalizedLogos];

  return (
    <div className={`relative w-full py-8 flex flex-col items-center overflow-hidden ${className}`}>
      {/* Animated Section Header */}
      {title && (
        <div className="mb-6 text-center">
          <TextRoll text={title} />
        </div>
      )}

      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent" />

      {/* Infinite scrolling reel */}
      <div className="flex w-full overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-6 sm:gap-10 shrink-0 will-change-transform"
        >
          {displayLogos.map((logo, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-center shrink-0 ${logoContainerWidth} ${logoContainerHeight} px-4 py-2 rounded-2xl bg-white/70 border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-300 hover:scale-105 backdrop-blur-xs`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt || "Technology"}
                className={`${logoImageWidth} ${logoImageHeight} max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100`}
                loading="lazy"
              />
              {logo.label && (
                <span className="text-xs font-semibold text-zinc-700 ml-2 truncate">
                  {logo.label}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export const LogoCarousel = AnimatedCarousel;
export default AnimatedCarousel;
