"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FileText, ChevronRight, MoreVertical, Plus } from "lucide-react";

export interface FolderFile {
  name: string;
  meta?: string;
  art?: "aurora" | "dusk" | "ember" | "verdant" | string;
  onClick?: () => void;
}

export interface FolderMenuItem {
  label: string;
  danger?: boolean;
  onClick?: () => void;
}

export interface GlassFolderProps {
  label: string;
  meta?: string;
  art?: "aurora" | "dusk" | "ember" | "verdant" | "none";
  seed?: number;
  appearDelay?: number;
  action?: "add" | "more" | "none";
  labelPlacement?: "top-left" | "top-right" | "bottom";
  files?: FolderFile[];
  menu?: FolderMenuItem[];
  tone?: "light" | "dark";
  className?: string;
}

const ART_GRADIENTS: Record<string, string> = {
  aurora: "from-teal-400/30 via-emerald-400/20 to-indigo-400/30",
  dusk: "from-purple-500/30 via-rose-400/20 to-amber-300/30",
  ember: "from-rose-500/30 via-orange-400/20 to-amber-400/30",
  verdant: "from-lime-400/30 via-emerald-500/20 to-teal-400/30",
  none: "from-zinc-200/20 via-zinc-100/10 to-transparent",
};

export function GlassFolder({
  label,
  meta,
  art = "aurora",
  appearDelay = 0,
  action = "none",
  labelPlacement = "bottom",
  files = [
    { name: "Project-Overview.pdf", meta: "1.2 MB", art: "aurora" },
    { name: "Demo-Walkthrough.mp4", meta: "14.5 MB", art: "dusk" },
    { name: "Architecture-Spec.md", meta: "24 KB", art: "ember" },
  ],
  menu = [],
  tone = "light",
  className = "",
}: GlassFolderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isOpen) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (-y / rect.height) * 16,
      y: (x / rect.width) * 16,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const bgArt = ART_GRADIENTS[art] || ART_GRADIENTS.aurora;
  const isDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: appearDelay / 1000, duration: 0.5 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[340px] select-none ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Folder Container */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative cursor-pointer rounded-2xl p-5 transition-shadow duration-300 ${
          isDark
            ? "bg-zinc-900/80 text-white border border-zinc-700/60 shadow-xl"
            : "bg-white/75 text-zinc-900 border border-white/80 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.06)]"
        } backdrop-blur-xl`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Decorative Folder Tab */}
        <div
          className={`absolute -top-3 left-6 h-4 w-28 rounded-t-xl border-t border-x ${
            isDark
              ? "bg-zinc-900/80 border-zinc-700/60"
              : "bg-white/75 border-white/80"
          } backdrop-blur-xl`}
        />

        {/* Art Glow Backing */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${bgArt} opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none`}
        />

        {/* Top Header Bar */}
        <div className="relative z-10 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div
              className={`p-2 rounded-xl ${
                isDark ? "bg-zinc-800 text-zinc-200" : "bg-zinc-100 text-zinc-800"
              }`}
            >
              <Folder className="w-5 h-5 text-indigo-500" />
            </div>
            {labelPlacement.startsWith("top") && (
              <div>
                <h4 className="font-semibold text-sm leading-tight">{label}</h4>
                {meta && <p className="text-[11px] opacity-60 font-mono">{meta}</p>}
              </div>
            )}
          </div>

          {/* Action icon (more / add) */}
          <div className="flex items-center gap-1">
            {action === "add" && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                title="Add file"
              >
                <Plus className="w-4 h-4 opacity-70" />
              </button>
            )}
            {action === "more" && (
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen(!menuOpen);
                  }}
                  className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  title="Menu"
                >
                  <MoreVertical className="w-4 h-4 opacity-70" />
                </button>
                {menuOpen && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute right-0 top-8 z-30 w-36 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 p-1.5 shadow-xl text-xs"
                  >
                    {menu.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          item.onClick?.();
                          setMenuOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
                          item.danger
                            ? "text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                            : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700/60"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Fanned-out files inside preview */}
        <div className="relative z-10 flex flex-col gap-2 my-2 min-h-[90px] justify-center">
          {files.slice(0, 3).map((f, i) => (
            <motion.div
              key={i}
              animate={
                isOpen
                  ? { y: 0, opacity: 1, scale: 1 }
                  : { y: i * 4, opacity: 1 - i * 0.15, scale: 1 - i * 0.04 }
              }
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => {
                if (isOpen) {
                  e.stopPropagation();
                  f.onClick?.();
                }
              }}
              className={`flex items-center justify-between px-3 py-2 rounded-xl border transition-all ${
                isDark
                  ? "bg-zinc-800/80 border-zinc-700/70 hover:bg-zinc-800 text-zinc-100"
                  : "bg-white/80 border-zinc-200/70 hover:bg-white text-zinc-800"
              } shadow-xs backdrop-blur-md`}
            >
              <div className="flex items-center gap-2 overflow-hidden">
                <FileText className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                <span className="text-xs font-medium truncate">{f.name}</span>
              </div>
              {f.meta && (
                <span className="text-[10px] opacity-60 font-mono ml-2 flex-shrink-0">
                  {f.meta}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Label if not top */}
        {labelPlacement === "bottom" && (
          <div className="relative z-10 mt-3 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-sm leading-tight">{label}</h4>
              {meta && <p className="text-[11px] opacity-60 font-mono">{meta}</p>}
            </div>
            <span className="text-[11px] font-mono opacity-50 flex items-center gap-1 group-hover:opacity-100 transition-opacity">
              {isOpen ? "Tutup" : "Buka"}
              <ChevronRight
                className={`w-3.5 h-3.5 transition-transform ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </span>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default GlassFolder;
