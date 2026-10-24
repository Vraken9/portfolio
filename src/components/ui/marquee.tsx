"use client";

import React from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  repeat?: number;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = true,
  children,
  repeat = 2,
}: MarqueeProps) {
  return (
    <div
      className={`group relative flex overflow-hidden select-none gap-8 ${className}`}
    >
      {/* Track 1 */}
      <div
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
