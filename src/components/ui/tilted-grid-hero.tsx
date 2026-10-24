"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TiltedGridImage {
  src: string;
  alt?: string;
}

interface TiltedGridHeroProps {
  images: TiltedGridImage[];
  className?: string;
  children?: React.ReactNode;
}

export function TiltedGridHero({
  images,
  className = "",
  children,
}: TiltedGridHeroProps) {
  // Triple the images to allow seamless infinite streaming
  const displayImages = [...images, ...images, ...images];

  return (
    <div
      className={`relative w-full overflow-hidden flex flex-col items-center justify-center ${className}`}
    >
      {/* 3D Perspective Curved Marquee Stage */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40 hover:opacity-70 transition-opacity duration-700"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 sm:gap-8 items-center py-8 will-change-transform"
          style={{
            transform: "rotateX(12deg) rotateY(-4deg) rotateZ(-2deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {displayImages.map((img, idx) => (
            <div
              key={idx}
              className="relative w-44 sm:w-56 md:w-64 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-zinc-200/60 bg-white/40 backdrop-blur-xs flex-shrink-0 transition-transform duration-300 hover:scale-105"
              style={{
                transform: "translateZ(20px)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt || `Visual frame ${idx}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Edge Gradient Mask for seamless soft fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(250,250,250,0.85)_80%,rgb(250,250,250)_100%)]"
      />

      {/* Hero Children / Content Container */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default TiltedGridHero;
