"use client";

import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
  duration?: number;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 2,
  duration,
}: MarqueeProps) {
  const durationStyle = duration ? { animationDuration: `${duration}s` } : undefined;

  return (
    <div
      className={`group relative flex overflow-hidden select-none gap-8 ${className}`}
    >
      {/* Track 1 */}
      <div
        style={durationStyle}
        className={`${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } flex shrink-0 items-center justify-around gap-8 ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <React.Fragment key={i}>{children}</React.Fragment>
        ))}
      </div>

      {/* Track 2 (seamless continuation) */}
      <div
        aria-hidden="true"
        style={durationStyle}
        className={`${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } flex shrink-0 items-center justify-around gap-8 ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <React.Fragment key={i}>{children}</React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
