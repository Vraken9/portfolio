"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GridPulseProps {
  /** Size of each grid cell in pixels (smaller = finer mesh) */
  gridSize?: number;
  /** Hairline grid base line color */
  baseColor?: string;
  /** Glow blur radius for illuminated spectrum lines */
  glowBlur?: number;
  /** How quickly the lit spectrum cells fade (0.85 to 0.96) */
  fadeDecay?: number;
  /** Radius around the pointer that lights up */
  interactionRadius?: number;
  /** Optional class names */
  className?: string;
  /** Whether to show ambient random pulses when idle */
  ambient?: boolean;
}

interface PulseNode {
  col: number;
  row: number;
  x: number;
  y: number;
  alpha: number;
  hue: number;
}

export function GridPulse({
  gridSize = 20, // Small grid cells as requested
  baseColor = "rgba(0, 0, 0, 0.055)",
  glowBlur = 10,
  fadeDecay = 0.94,
  interactionRadius = 75,
  className = "",
  ambient = true,
}: GridPulseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let globalHue = 190; // Start in modern cyan/sky
    const pulses = new Map<string, PulseNode>();

    const updateSize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      width = Math.ceil(rect.width);
      height = Math.ceil(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    // Light up square cells (kotak) around (x, y)
    const triggerPulseAt = (clientX: number, clientY: number, customIntensity = 1) => {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      if (x < -20 || x > width + 20 || y < -20 || y > height + 20) return;

      const minCol = Math.max(0, Math.floor((x - interactionRadius) / gridSize));
      const maxCol = Math.min(Math.floor(width / gridSize), Math.ceil((x + interactionRadius) / gridSize));
      const minRow = Math.max(0, Math.floor((y - interactionRadius) / gridSize));
      const maxRow = Math.min(Math.floor(height / gridSize), Math.ceil((y + interactionRadius) / gridSize));

      for (let c = minCol; c <= maxCol; c++) {
        for (let r = minRow; r <= maxRow; r++) {
          const cellLeft = c * gridSize;
          const cellTop = r * gridSize;
          const centerX = cellLeft + gridSize / 2;
          const centerY = cellTop + gridSize / 2;
          const dist = Math.hypot(centerX - x, centerY - y);

          if (dist <= interactionRadius) {
            const intensity = Math.pow(1 - dist / interactionRadius, 1.25) * customIntensity;
            const key = `${c}_${r}`;
            const hue = (globalHue + c * 7 + r * 7) % 360;

            const existing = pulses.get(key);
            if (existing) {
              existing.alpha = Math.min(1, Math.max(existing.alpha, intensity));
              existing.hue = hue;
            } else {
              pulses.set(key, {
                col: c,
                row: r,
                x: cellLeft,
                y: cellTop,
                alpha: intensity,
                hue,
              });
            }
          }
        }
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      triggerPulseAt(e.clientX, e.clientY, 1);
    };

    const handlePointerDown = (e: PointerEvent) => {
      triggerPulseAt(e.clientX, e.clientY, 1.25);
    };

    const render = () => {
      animId = requestAnimationFrame(render);

      globalHue = (globalHue + 0.35) % 360;

      // Ambient sporadic square pulses (kotak pulse) when idle
      if (ambient && Math.random() < 0.22 && width > 0 && height > 0) {
        const maxCols = Math.floor(width / gridSize);
        const maxRows = Math.floor(height / gridSize);
        if (maxCols > 0 && maxRows > 0) {
          const randomCol = Math.floor(Math.random() * maxCols);
          const randomRow = Math.floor(Math.random() * maxRows);
          const key = `${randomCol}_${randomRow}`;
          if (!pulses.has(key)) {
            pulses.set(key, {
              col: randomCol,
              row: randomRow,
              x: randomCol * gridSize,
              y: randomRow * gridSize,
              alpha: 0.65 + Math.random() * 0.35,
              hue: (globalHue + randomCol * 8 + randomRow * 8) % 360,
            });
          }
        }
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Static Hairline Grid (+0.5 for razor-sharp physical pixel alignment)
      ctx.save();
      ctx.lineWidth = 1;
      ctx.strokeStyle = baseColor;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();
      ctx.restore();

      // 2. Draw Active Spectrum Lit Square Cells (Kotak Grid - Not Lines/Gaps)
      if (pulses.size > 0) {
        ctx.save();

        pulses.forEach((p, key) => {
          if (p.alpha <= 0.015) {
            pulses.delete(key);
            return;
          }

          const cellX = p.col * gridSize;
          const cellY = p.row * gridSize;

          const fillAlpha = Math.min(0.72, p.alpha * 0.65);
          const borderAlpha = Math.min(0.95, p.alpha * 0.9);

          ctx.shadowBlur = glowBlur * p.alpha;
          ctx.shadowColor = `hsla(${p.hue}, 95%, 60%, ${p.alpha * 0.8})`;

          // Fill the square tile (kotak) with glowing radiant spectrum color
          ctx.fillStyle = `hsla(${p.hue}, 92%, 58%, ${fillAlpha})`;
          ctx.fillRect(cellX + 1, cellY + 1, gridSize - 1, gridSize - 1);

          // Crisp glowing outline framing the square tile (kotak)
          ctx.strokeStyle = `hsla(${p.hue}, 95%, 65%, ${borderAlpha})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(cellX + 0.5, cellY + 0.5, gridSize - 1, gridSize - 1);

          // Smooth decay
          p.alpha *= fadeDecay;
        });

        ctx.restore();
      }
    };

    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerdown", handlePointerDown, { passive: true });

    render();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [gridSize, baseColor, glowBlur, fadeDecay, interactionRadius, ambient]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-auto select-none",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full pointer-events-none"
      />
      {/* Soft Vignette Overlay for Seamless Blend with Container */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(255, 255, 255, 0.45) 85%, rgba(255, 255, 255, 0.85) 100%)",
        }}
      />
    </div>
  );
}

export default GridPulse;
