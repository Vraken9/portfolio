"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { Marquee } from "@/components/ui/marquee";
import { BauhausGenerator } from "@/components/ui/bauhaus-generator";
import { Star12, Star15, Star28, Star3, Star40 } from "@/components/ui/star-icons";
import { BrandIcons } from "@/components/ui/brand-icons";
import { BackgroundSnippets } from "@/components/ui/background-snippets";
import { cn } from "@/lib/utils";

interface SkillContent {
  id: string;
  title: string;
  subtitle: string;
  tools: Array<{
    name: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    color: string;
  }>;
}

const skillsData: Record<string, SkillContent> = {
  ai_agent: {
    id: "ai_agent",
    title: "AI Agent Builder",
    subtitle:
      "Designing autonomous multi-agent systems, function-calling workflows, and tool-augmented LLM architectures.",
    tools: [
      { name: "LangChain", icon: BrandIcons.LangChain, color: "#10B981" },
      { name: "Python", icon: BrandIcons.Python, color: "#3776AB" },
      { name: "OpenAI", icon: BrandIcons.OpenAI, color: "#10A37F" },
      { name: "Claude", icon: BrandIcons.Claude, color: "#D97706" },
      { name: "FastAPI", icon: BrandIcons.FastAPI, color: "#009688" },
    ],
  },
  fullstack: {
    id: "fullstack",
    title: "Full-Stack Developer",
    subtitle:
      "Engineering type-safe, resilient web applications with Next.js 15, TypeScript, Tailwind CSS, and scalable databases.",
    tools: [
      { name: "Next.js", icon: BrandIcons.Nextjs, color: "#18181B" },
      { name: "TypeScript", icon: BrandIcons.TypeScript, color: "#3178C6" },
      { name: "React", icon: BrandIcons.React, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: BrandIcons.Tailwind, color: "#38BDF8" },
      { name: "PostgreSQL", icon: BrandIcons.PostgreSQL, color: "#336791" },
      { name: "Docker", icon: BrandIcons.Docker, color: "#2496ED" },
    ],
  },
  rag_automation: {
    id: "rag_automation",
    title: "RAG & AI Automation",
    subtitle:
      "Building Retrieval-Augmented Generation pipelines, vector embeddings search, and end-to-end intelligent automation flows.",
    tools: [
      { name: "Vector DB", icon: BrandIcons.VectorDB, color: "#6366F1" },
      { name: "LangGraph", icon: BrandIcons.LangGraph, color: "#0EA5E9" },
      { name: "Automation Flow", icon: BrandIcons.AutomationFlow, color: "#F59E0B" },
      { name: "FastAPI RAG", icon: BrandIcons.FastAPI, color: "#009688" },
      { name: "Python", icon: BrandIcons.Python, color: "#3776AB" },
    ],
  },
  technopreneur: {
    id: "technopreneur",
    title: "Technopreneur",
    subtitle:
      "Transforming curious ideas into real-world software, completing rigorous courses, and building production-ready final projects.",
    tools: [
      { name: "Product Strategy", icon: BrandIcons.ProductStrategy, color: "#EF4444" },
      { name: "System Design", icon: BrandIcons.SystemDesign, color: "#3B82F6" },
      { name: "Course Projects", icon: BrandIcons.CourseProjects, color: "#8B5CF6" },
      { name: "Innovation", icon: BrandIcons.Innovation, color: "#EC4899" },
    ],
  },
  uiux: {
    id: "uiux",
    title: "UI/UX & Frontend",
    subtitle:
      "Designing intuitive user experiences and beautiful interfaces. Focused on user-centered design principles and modern design systems.",
    tools: [
      { name: "Figma", icon: BrandIcons.Figma, color: "#F24E1E" },
      { name: "Framer", icon: BrandIcons.Framer, color: "#0055FF" },
      { name: "LottieFiles", icon: BrandIcons.LottieFiles, color: "#00DDB3" },
      { name: "Tailwind CSS", icon: BrandIcons.Tailwind, color: "#38BDF8" },
    ],
  },
};

const skillKeys = Object.keys(skillsData);
const ROTATE_INTERVAL_MS = 6500;

export default function AboutSection() {
  const [selectedSkill, setSelectedSkill] = useState<string>("ai_agent");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("");

  // Live dynamic time display (Jakarta / WIB)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Jakarta",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeSkillId = hoveredSkill || selectedSkill;
  const currentContent = skillsData[activeSkillId] || skillsData["ai_agent"];

  // Auto-rotating loop
  useEffect(() => {
    if (isPaused || hoveredSkill) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / ROTATE_INTERVAL_MS) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= ROTATE_INTERVAL_MS) {
        setSelectedSkill((prev) => {
          const currentIndex = skillKeys.indexOf(prev);
          const nextIndex = (currentIndex + 1) % skillKeys.length;
          return skillKeys[nextIndex];
        });
        setProgress(0);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [isPaused, hoveredSkill, selectedSkill]);

  const handleSelectSkill = useCallback((id: string) => {
    setSelectedSkill(id);
    setProgress(0);
    setIsPaused(true);
  }, []);

  return (
    <section id="tentang" className="relative z-0 isolate w-full overflow-hidden text-zinc-900 border-t border-zinc-200/80 bg-white">
      
      {/* 1. Header Bar: [Time] on Left, Bauhaus Artwork on Right */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-3 border-x border-zinc-200/80 flex items-center justify-between">
          <Link
            href="https://time.is/Jakarta"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-expand
            className="font-mono text-xs text-zinc-500 hover:text-zinc-900 transition-colors tracking-wider"
          >
            [{currentTime ? `${currentTime} WIB` : "JAKARTA, ID"}]
          </Link>

          <div data-cursor-expand>
            <BauhausGenerator width={4} height={2} size={18} />
          </div>

          <PlusSeparator position={["top-left", "top-right"]} />
        </div>
      </div>

      {/* 2. Main Bio Narrative (Background Snippet applied specifically to this box above running skills) */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-16 sm:py-20 border-x border-zinc-200/80 overflow-hidden">
          
          {/* Subtle Near-White Upward-Radiating Violet Ambient Glow */}
          <BackgroundSnippets />

          <div className="relative z-10 max-w-3xl">
            
            {/* Animated Typography GIF 'hello.' */}
            <div className="relative mb-5 -mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/typography/hello.webp"
                alt="hello."
                className="w-[115px] sm:w-[135px] h-auto object-contain select-none pointer-events-none [image-rendering:pixelated]"
              />
            </div>

            {/* Paragraph 1: Authentic Student & AI Builder Persona */}
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              i'm akhyar, but my real name is{" "}
              <span className="font-semibold text-zinc-900">Akhyar Mualif</span>. i am an Informatics
              Engineering student at{" "}
              <span className="text-zinc-900 font-medium">Universitas Ma'arif Nahdlatul Ulama Kebumen</span>{" "}
              and an <span className="font-semibold text-zinc-900">AI Agent Builder & Technopreneur</span>.
              growing up, i was fascinated by how software can solve complex challenges, and now i love turning
              curious concepts into real, working applications.
            </p>

            <br />

            {/* Paragraph 2: 'Stay curious and keep learning' Mindset */}
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              my philosophy is simple:{" "}
              <span className="font-semibold text-zinc-900 italic">stay curious and keep learning</span>.
              i genuinely enjoy spending my spare time taking in-depth technical courses and completing their final projects—from
              crafting intelligent AI agent workflows and RAG pipelines to engineering clean, full-stack web products.
              for me, continuous learning isn't a chore; it's the most fulfilling part of being an engineer.
            </p>

          </div>

          <PlusSeparator position={["top-left", "top-right"]} />
        </div>
      </div>

      {/* 3. Running Text Skills Pill Marquee with Star Dividers */}
      <div className="w-full border-b border-zinc-200/80">
        <div
          className="relative mx-auto max-w-7xl border-x border-zinc-200/80 py-3 overflow-hidden select-none"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >

          {/* Interactive Marquee */}
          <Marquee duration={32} pauseOnHover={false} className="py-1">
            {skillKeys.map((key) => {
              const item = skillsData[key];
              const isSelected = selectedSkill === key;

              return (
                <div key={key} className="flex items-center shrink-0 mx-2">
                  <button
                    type="button"
                    onClick={() => handleSelectSkill(key)}
                    onMouseEnter={() => setHoveredSkill(key)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    data-cursor-expand
                    className={cn(
                      "cursor-pointer px-3.5 py-1.5 rounded-xs transition-all duration-200 text-sm sm:text-base md:text-lg font-medium",
                      isSelected
                        ? "bg-zinc-900 text-white shadow-xs"
                        : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70"
                    )}
                  >
                    {item.title}
                  </button>

                  {/* Geometric Star Shapes between items */}
                  <span className="mx-3 text-zinc-400 shrink-0">
                    {key === "ai_agent" && <Star15 size={22} className="opacity-80" />}
                    {key === "fullstack" && <Star12 size={22} className="opacity-80" />}
                    {key === "rag_automation" && <Star28 size={22} className="opacity-80" />}
                    {key === "technopreneur" && <Star40 size={22} className="opacity-80" />}
                    {key === "uiux" && <Star3 size={22} className="opacity-80" />}
                  </span>
                </div>
              );
            })}
          </Marquee>

          <PlusSeparator position={["top-left", "top-right"]} />
        </div>
      </div>

      {/* 4. Active Selected Skill Detail Showcase (Authentic colors revealed on cursor hover) */}
      <div className="w-full border-b border-zinc-200/80">
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-16 sm:py-24 lg:py-28 border-x border-zinc-200/80 min-h-[340px] flex flex-col justify-center items-center overflow-hidden"
        >
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center max-w-3xl"
            >
              {/* Title with Invert Cursor */}
              <h3
                data-cursor-invert
                className="font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tight cursor-default select-none"
              >
                {currentContent.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
                {currentContent.subtitle}
              </p>

              {/* Tools & Tech Icons - Authentic brand colors revealed right inside fluid cursor lens */}
              <div
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="mt-10 mb-8 sm:mb-14 flex flex-wrap items-center justify-center gap-7 sm:gap-11"
              >
                {currentContent.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      data-cursor-logo
                      data-logo-color={tool.color}
                      data-magnetic
                      className="group relative flex flex-col items-center gap-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 select-none"
                    >
                      {/* Radiant Brand Color Aura Halo (Hexaa-style glowing backdrop) */}
                      <div
                        className="absolute -inset-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none blur-lg -z-10"
                        style={{ backgroundColor: `${tool.color}55` }}
                      />

                      {/* Logo Vector Container - Idle grayscale opacity-90, inverted on hover so difference cursor lens restores pure authentic brand color with black interior */}
                      <div
                        className="logo-icon-container relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 transition-all duration-300 filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:invert group-hover:scale-110"
                        style={{ color: tool.color }}
                      >
                        <Icon size={34} className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300" />
                      </div>

                      {/* Tool Name Label - Clean and readable */}
                      <span className="text-xs sm:text-sm font-sans font-medium text-zinc-500 group-hover:text-zinc-900 group-hover:font-semibold transition-colors duration-200 tracking-tight">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicator - Bottom Right */}
          <div className="absolute right-4 sm:right-6 bottom-4 z-20">
            <div className="flex flex-col items-end gap-1.5">
              <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase tabular-nums">
                {isPaused || hoveredSkill ? "Viewing (paused)" : "Auto-rotating"}
              </span>
              <div className="h-1 w-20 sm:w-24 overflow-hidden rounded-full bg-zinc-200">
                <div
                  className="h-full bg-zinc-800 rounded-full transition-all duration-75"
                  style={{
                    width: `${isPaused || hoveredSkill ? 100 : progress}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />
        </div>
      </div>

    </section>
  );
}
