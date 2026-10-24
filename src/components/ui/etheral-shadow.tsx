"use client";

import React, { useId } from "react";
import { motion } from "framer-motion";

export interface EtheralShadowProps {
  color?: string;
  animation?: {
    scale?: number;
    speed?: number;
  };
  noise?: {
    opacity?: number;
    scale?: number;
  };
  sizing?: "fill" | "contain";
  className?: string;
  children?: React.ReactNode;
}

export function EtheralShadow({
  color = "rgba(99, 102, 241, 0.35)",
  animation = { scale: 100, speed: 90 },
  noise = { opacity: 0.15, scale: 1.2 },
  sizing = "fill",
  className = "",
  children,
}: EtheralShadowProps) {
  const filterId = useId().replace(/:/g, "");

  const speedDuration = Math.max(4, 20 - (animation.speed || 50) * 0.15);

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${
        sizing === "fill" ? "w-full h-full min-h-[360px]" : "w-auto h-auto"
      } ${className}`}
    >
      {/* SVG Turbulence & Displacement Filter */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id={`etheral-filter-${filterId}`}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={animation.scale || 60}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Animated Ethereal Shadow Blobs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.25, 0.95, 1.15, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: speedDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: `url(#etheral-filter-${filterId}) blur(40px)`,
            background: `radial-gradient(circle, ${color} 0%, rgba(244, 114, 182, 0.2) 50%, transparent 70%)`,
          }}
          className="w-[380px] sm:w-[520px] h-[380px] sm:h-[520px] rounded-full opacity-70 will-change-transform"
        />

        {/* Secondary counter-rotating ambient light */}
        <motion.div
          animate={{
            scale: [1.1, 0.9, 1.2, 1],
            rotate: [360, 240, 120, 0],
          }}
          transition={{
            duration: speedDuration * 1.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            filter: `blur(60px)`,
            background: `radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 65%)`,
          }}
          className="w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full opacity-60 will-change-transform"
        />
      </div>

      {/* Noise grain overlay texture */}
      {noise.opacity && noise.opacity > 0 ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            opacity: noise.opacity,
            backgroundImage: `radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)`,
            backgroundSize: `${16 * (noise.scale || 1)}px ${16 * (noise.scale || 1)}px`,
          }}
        />
      ) : null}

      {/* Content slot */}
      <div className="relative z-20 flex flex-col items-center justify-center p-6 text-center">
        {children}
      </div>
    </div>
  );
}

export const Component = EtheralShadow;
export default EtheralShadow;
