"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

export interface MagnetizeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number;
  attractRadius?: number;
  particleColor?: string;
  href?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

export function MagnetizeButton({
  className,
  children,
  particleCount = 14,
  attractRadius = 50,
  particleColor,
  href,
  ...props
}: MagnetizeButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particlesControl = useAnimation();

  useEffect(() => {
    // Generate particles in an orbit ring around the button center
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const angle = (i / particleCount) * 2 * Math.PI + (Math.random() - 0.5) * 0.4;
      const distance = 80 + Math.random() * 60;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      };
    });
    setParticles(newParticles);
  }, [particleCount]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      scale: 0.65,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((i) => ({
      x: particles[i]?.x ?? 0,
      y: particles[i]?.y ?? 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 85,
        damping: 15,
      },
    }));
  }, [particlesControl, particles]);

  const innerContent = (
    <>
      {particles.map((p, index) => (
        <motion.div
          key={p.id}
          custom={index}
          initial={{ x: p.x, y: p.y, scale: 1 }}
          animate={particlesControl}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 -ml-1 -mt-1 w-2 h-2 rounded-full",
            particleColor || "bg-zinc-800 dark:bg-zinc-200",
            "transition-opacity duration-300 shadow-xs",
            isAttracting ? "opacity-100 scale-110" : "opacity-45 scale-90"
          )}
        />
      ))}
      <span className="relative z-10 w-full flex items-center justify-center gap-2">
        {children ?? (
          <>
            <Magnet
              className={cn(
                "w-4 h-4 transition-transform duration-300",
                isAttracting && "scale-110"
              )}
            />
            <span>{isAttracting ? "Attracting" : "Hover me"}</span>
          </>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "relative touch-none overflow-visible inline-flex items-center justify-center select-none",
          className
        )}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <Button
      className={cn(
        "relative touch-none overflow-visible select-none",
        className
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {innerContent}
    </Button>
  );
}

export default MagnetizeButton;