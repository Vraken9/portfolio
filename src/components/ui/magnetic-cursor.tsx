"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface MagneticCursorProps {
  magneticFactor?: number;
  blendMode?: "difference" | "exclusion" | "normal";
  cursorSize?: number;
  color?: string;
  children: React.ReactNode;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
}

export function MagneticCursor({
  magneticFactor = 0.5,
  blendMode = "difference",
  cursorSize = 34,
  color = "#ffffff",
  children,
}: MagneticCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const isTouchDevice = useRef(false);

  // Position & physics state tracked by GSAP
  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const isLocked = useRef(false);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Touch detection
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      isTouchDevice.current = true;
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Start with opacity 0 until first mouse move
    gsap.set(cursor, { opacity: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      pos.current.targetX = clientX;
      pos.current.targetY = clientY;

      // Immediately show cursor on movement
      gsap.to(cursor, { opacity: 1, duration: 0.2, overwrite: "auto" });

      // Reset 1-second idle timer
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        gsap.to(cursor, { opacity: 0, duration: 0.35, ease: "power2.out" });
      }, 1000);

      // Check if mouse is over an element marked for magnetic or inversion effect
      const target = (e.target as HTMLElement)?.closest(
        "[data-magnetic], [data-cursor-invert], a, button"
      ) as HTMLElement | null;

      if (target) {
        const isMagnetic = target.hasAttribute("data-magnetic");

        if (isMagnetic) {
          const rect = target.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          // Pull toward element center with spring resistance
          const distX = clientX - centerX;
          const distY = clientY - centerY;

          pos.current.targetX = centerX + distX * (1 - magneticFactor);
          pos.current.targetY = centerY + distY * (1 - magneticFactor);
        }

        if (!isLocked.current) {
          isLocked.current = true;
          // Scale up for prominent inversion lens
          gsap.to(cursor, {
            scale: 2.2,
            duration: 0.25,
            ease: "power2.out",
          });
        }
      } else {
        if (isLocked.current) {
          isLocked.current = false;
          gsap.to(cursor, {
            scale: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.4)",
          });
        }
      }
    };

    const handleMouseLeave = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    const handleMouseDown = (e: MouseEvent) => {
      gsap.to(cursor, { scale: 0.8, duration: 0.15 });

      // Spawn click burst particles
      const newParticles: Particle[] = Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 6 + (Math.random() - 0.5);
        const speed = Math.random() * 4 + 2;
        return {
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
        };
      });
      setParticles((prev) => [...prev.slice(-12), ...newParticles]);
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: isLocked.current ? 2.2 : 1, duration: 0.25 });
    };

    // Responsive physics render loop with tight lerp (0.35 for snappy immediate response)
    const updateCursor = () => {
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.35;
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.35;

      gsap.set(cursor, {
        x: pos.current.x - cursorSize / 2,
        y: pos.current.y - cursorSize / 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    gsap.ticker.add(updateCursor);

    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      gsap.ticker.remove(updateCursor);
    };
  }, [cursorSize, magneticFactor]);

  // Particle decay loop
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.08,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);
    return () => clearInterval(interval);
  }, [particles]);

  return (
    <div className="relative w-full">
      {/* Fluid Inversion Cursor (No center dot, pure difference blend) */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          mixBlendMode: blendMode,
          backgroundColor: color,
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform ${
          isTouchDevice.current ? "hidden" : "block"
        }`}
      />

      {/* Click burst particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          aria-hidden="true"
          style={{
            transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
            opacity: p.life,
          }}
          className="fixed top-0 left-0 pointer-events-none z-[9998] w-1.5 h-1.5 rounded-full bg-zinc-900"
        />
      ))}

      {children}
    </div>
  );
}

export default MagneticCursor;
