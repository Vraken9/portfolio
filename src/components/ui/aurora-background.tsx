"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen items-center justify-center bg-zinc-50 text-slate-950 transition-colors duration-300 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)]
            [--aurora:repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert
            after:content-[''] after:absolute after:inset-0 
            after:[background-image:var(--white-gradient),var(--aurora)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:mix-blend-difference
            absolute -inset-[10px] opacity-50 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_125%_135%_at_85%_0%,black_20%,transparent_92%)]`
          )}
          style={
            showRadialGradient
              ? {
                  WebkitMaskImage:
                    "radial-gradient(ellipse 125% 135% at 85% 0%, black 20%, transparent 92%)",
                  maskImage:
                    "radial-gradient(ellipse 125% 135% at 85% 0%, black 20%, transparent 92%)",
                }
              : undefined
          }
        />
      </div>
      <div className="relative z-10 w-full flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default AuroraBackground;
