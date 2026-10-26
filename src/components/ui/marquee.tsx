"use client";

import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  duration?: number;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  duration = 28,
}: MarqueeProps) {
  const durationStyle = {
    animationDuration: `${duration}s`,
  };

  return (
    <div
      className={`group relative flex overflow-hidden select-none w-full ${className}`}
    >
      {/* Track 1 */}
      <div
        style={durationStyle}
        className={`${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } flex shrink-0 items-center will-change-transform [transform:translateZ(0)] [backface-visibility:hidden] ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>

      {/* Track 2 (exact clone for 100% seamless infinite loop) */}
      <div
        aria-hidden="true"
        style={durationStyle}
        className={`${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } flex shrink-0 items-center will-change-transform [transform:translateZ(0)] [backface-visibility:hidden] ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Marquee;
