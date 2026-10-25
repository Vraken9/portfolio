"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticCursorProps {
  magneticFactor?: number;
  blendMode?: "difference" | "exclusion" | "normal";
  cursorSize?: number;
  color?: string;
  children: React.ReactNode;
}

export function MagneticCursor({
  magneticFactor = 0.35,
  blendMode = "difference",
  cursorSize = 22,
  color = "#ffffff",
  children,
}: MagneticCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const isHovered = useRef(false);
  const currentScale = useRef(1);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only disable on small touch-only mobile devices (smartphones without fine pointer)
    const isTouchOnly =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px) and (pointer: coarse)").matches;

    if (isTouchOnly) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Enable custom cursor styles on body for desktop/precision pointer devices
    document.body.classList.add("custom-cursor-enabled");

    // Initially hide cursor until first movement
    gsap.set(cursor, { opacity: 0, scale: 1 });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // On first mouse movement, snap directly to pointer coordinates without offscreen jump
      if (pos.current.x < 0) {
        pos.current.x = clientX;
        pos.current.y = clientY;
        gsap.set(cursor, {
          x: clientX - cursorSize / 2,
          y: clientY - cursorSize / 2,
        });
      }

      pos.current.targetX = clientX;
      pos.current.targetY = clientY;

      // Instantly reveal cursor on movement
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.15,
        overwrite: "auto",
        ease: "power1.out",
      });

      // Check if mouse is hovering over interactive elements or text designated for inversion
      const target = (e.target as HTMLElement)?.closest(
        "[data-magnetic], [data-cursor-invert], [data-cursor-logo], [data-cursor-expand], a, button, nav, header, [role='button'], .cursor-pointer"
      ) as HTMLElement | null;

      if (target) {
        // Clear idle timer while hovering interactive elements so the lens remains visible
        if (idleTimer.current) clearTimeout(idleTimer.current);

        const isInvertText = target.hasAttribute("data-cursor-invert") || target.closest("[data-cursor-invert]");
        const logoTarget = (target.hasAttribute("data-cursor-logo") ? target : target.closest("[data-cursor-logo]")) as HTMLElement | null;
        const isLogo = !!logoTarget;
        const logoColor = logoTarget?.getAttribute("data-logo-color") || "#38bdf8";
        const isMagnetic = target.hasAttribute("data-magnetic");

        // Magnetic attraction if element specifically requests magnetic pull
        if (isMagnetic) {
          const rect = target.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distX = clientX - centerX;
          const distY = clientY - centerY;

          pos.current.targetX = centerX + distX * (1 - magneticFactor);
          pos.current.targetY = centerY + distY * (1 - magneticFactor);
        } else if (isLogo && logoTarget) {
          // Anchor fluid cursor firmly to the center of the logo icon with subtle fluid lerp
          const iconElem = (logoTarget.querySelector(".logo-icon-container") || logoTarget) as HTMLElement;
          const rect = iconElem.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const distX = clientX - centerX;
          const distY = clientY - centerY;

          pos.current.targetX = centerX + distX * 0.08;
          pos.current.targetY = centerY + distY * 0.08;
        }

        // Scale factors:
        // Heading text: 2.5x (inverted difference mode)
        // Logo lens: 2.4x (~53px diameter circle) to cleanly cover the 34px brand icon
        // General interactive: 1.85x
        let targetScale = 1.85;
        if (isInvertText) {
          targetScale = 2.5;
        } else if (isLogo) {
          targetScale = 2.4;
        }

        if (isLogo && logoTarget) {
          // Hexaa.sh architecture: The cursor disc uses difference/exclusion mode with white color.
          // Over white site background, white inverts to black!
          // Over the logo (which has group-hover:invert), the difference lens reverses the inversion back to authentic brand color!
          cursor.style.mixBlendMode = blendMode;
          cursor.style.backgroundColor = color;
          cursor.style.border = "1.5px solid rgba(255, 255, 255, 0.85)";
          cursor.style.boxShadow = `0 0 20px 2px ${logoColor}66`;
        } else {
          // Standard difference inversion mode
          cursor.style.mixBlendMode = blendMode;
          cursor.style.backgroundColor = color;
          cursor.style.border = "none";
          cursor.style.boxShadow = "none";
        }

        if (!isHovered.current || currentScale.current !== targetScale) {
          isHovered.current = true;
          currentScale.current = targetScale;
          gsap.to(cursor, {
            scale: targetScale,
            duration: 0.24,
            ease: "power2.out",
          });
        }
      } else {
        // Reset cursor styling when moving away from interactive elements
        cursor.style.mixBlendMode = blendMode;
        cursor.style.backgroundColor = color;
        cursor.style.border = "none";
        cursor.style.boxShadow = "none";

        if (isHovered.current) {
          isHovered.current = false;
          currentScale.current = 1;
          gsap.to(cursor, {
            scale: 1,
            duration: 0.25,
            ease: "power2.out",
          });
        }

        // Reset 1-second (1000ms) inactivity timer only when on empty background
        if (idleTimer.current) clearTimeout(idleTimer.current);
        idleTimer.current = setTimeout(() => {
          gsap.to(cursor, {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        }, 1000);
      }
    };

    const handleMouseLeave = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      gsap.to(cursor, { opacity: 0, duration: 0.25 });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.15 });
    };

    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: currentScale.current * 0.85,
        duration: 0.12,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: currentScale.current,
        duration: 0.2,
      });
    };

    // Responsive physics loop with 0.46 lerp factor for immediate yet fluid response
    const updateCursor = () => {
      pos.current.x += (pos.current.targetX - pos.current.x) * 0.46;
      pos.current.y += (pos.current.targetY - pos.current.y) * 0.46;

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
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      gsap.ticker.remove(updateCursor);
    };
  }, [cursorSize, magneticFactor]);

  return (
    <>
      {/* Fluid Inversion Cursor Disc - Pure fluid lens with signature hexaa.sh difference inversion */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          mixBlendMode: blendMode,
          backgroundColor: color,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform opacity-0 select-none"
      />

      {children}
    </>
  );
}

export default MagneticCursor;
