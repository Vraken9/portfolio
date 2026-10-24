"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface MagneticCursorProps {
  magneticFactor?: number;
  blendMode?: "exclusion" | "difference" | "normal";
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
  magneticFactor = 0.55,
  blendMode = "exclusion",
  cursorSize = 36,
  color = "#ffffff",
  children,
}: MagneticCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const isTouchDevice = useRef(false);

  // Position state tracked by GSAP
  const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const isLocked = useRef(false);

  useEffect(() => {
    // Touch detection
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      isTouchDevice.current = true;
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Center cursor offscreen initially
    pos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      pos.current.targetX = clientX;
      pos.current.targetY = clientY;

      // Check if mouse is over an element with data-magnetic
      const target = (e.target as HTMLElement)?.closest("[data-magnetic]") as HTMLElement | null;

      if (target) {
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Pull toward element center
        const distX = clientX - centerX;
        const distY = clientY - centerY;

        pos.current.targetX = centerX + distX * (1 - magneticFactor);
        pos.current.targetY = centerY + distY * (1 - magneticFactor);

        if (!isLocked.current) {
          isLocked.current = true;
          setIsHovered(true);
          gsap.to(cursor, {
            scale: 1.6,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      } else {
        if (isLocked.current) {
          isLocked.current = false;
          setIsHovered(false);
          gsap.to(cursor, {
            scale: 1,
            duration: 0.35,
            ease: "elastic.out(1, 0.4)",
          });
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      gsap.to(cursor, { scale: 0.85, duration: 0.15 });

      // Spawn click particles
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
      setIsClicking(false);
      gsap.to(cursor, { scale: isHovered ? 1.6 : 1, duration: 0.25 });
    };

    // Physics render loop using gsap.ticker
    const updateCursor = () => {
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.18;
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.18;

      gsap.set(cursor, {
        x: pos.current.x - cursorSize / 2,
        y: pos.current.y - cursorSize / 2,
      });

      gsap.set(dot, {
        x: pos.current.targetX - 2.5,
        y: pos.current.targetY - 2.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    gsap.ticker.add(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      gsap.ticker.remove(updateCursor);
    };
  }, [cursorSize, magneticFactor, isHovered]);

  // Particle life decay loop
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
      {/* Magnetic Outer Ring / Blob */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          mixBlendMode: blendMode,
          backgroundColor: color,
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform transition-opacity duration-300 opacity-90 backdrop-blur-[1px] ${
          isTouchDevice.current ? "hidden" : "block"
        }`}
      />

      {/* Tiny inner center pointer */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          mixBlendMode: blendMode,
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] w-[5px] h-[5px] rounded-full bg-white will-change-transform ${
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
          className="fixed top-0 left-0 pointer-events-none z-[9998] w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white"
        />
      ))}

      {children}
    </div>
  );
}

export default MagneticCursor;
