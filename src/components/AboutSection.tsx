"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PlusSeparator } from "@/components/ui/plus-separator";
import { Marquee } from "@/components/ui/marquee";
import { BauhausGenerator } from "@/components/ui/bauhaus-generator";
import { Star12, Star15, Star28, Star3, Star40 } from "@/components/ui/star-icons";
import { cn } from "@/lib/utils";
import {
  Bot,
  Brain,
  Code2,
  Database,
  Layers,
  Sparkles,
  Workflow,
  Terminal,
  Cpu,
  Globe,
  Rocket,
  Palette,
  FileCode,
  ShieldCheck,
} from "lucide-react";

interface SkillContent {
  id: string;
  title: string;
  subtitle: string;
  tools: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    accent?: string;
  }>;
}

const skillsData: Record<string, SkillContent> = {
  ai_agent: {
    id: "ai_agent",
    title: "AI Agent Builder",
    subtitle:
      "Designing autonomous multi-agent systems, function-calling workflows, and tool-augmented LLM architectures for production environments.",
    tools: [
      { name: "LangChain", icon: Workflow, accent: "#2563EB" },
      { name: "Python", icon: Terminal, accent: "#38BDF8" },
      { name: "OpenAI / Claude", icon: Brain, accent: "#10B981" },
      { name: "CrewAI", icon: Bot, accent: "#8B5CF6" },
      { name: "FastAPI", icon: Cpu, accent: "#059669" },
    ],
  },
  fullstack: {
    id: "fullstack",
    title: "Full-Stack Developer",
    subtitle:
      "Engineering type-safe, resilient web applications with modern Next.js 15, React 19, TypeScript, and high-performance serverless backends.",
    tools: [
      { name: "Next.js", icon: Globe, accent: "#000000" },
      { name: "TypeScript", icon: FileCode, accent: "#3178C6" },
      { name: "React", icon: Code2, accent: "#06B6D4" },
      { name: "PostgreSQL", icon: Database, accent: "#336791" },
      { name: "Docker", icon: Layers, accent: "#2496ED" },
    ],
  },
  rag_automation: {
    id: "rag_automation",
    title: "RAG & AI Automation",
    subtitle:
      "Building Retrieval-Augmented Generation pipelines, vector embeddings search, and end-to-end intelligent automation flows.",
    tools: [
      { name: "Vector DB", icon: Database, accent: "#6366F1" },
      { name: "Embeddings", icon: Brain, accent: "#EC4899" },
      { name: "Automation Flow", icon: Workflow, accent: "#F59E0B" },
      { name: "LangGraph", icon: Bot, accent: "#14B8A6" },
      { name: "FastAPI RAG", icon: Cpu, accent: "#10B981" },
    ],
  },
  technopreneur: {
    id: "technopreneur",
    title: "Technopreneur",
    subtitle:
      "Transforming technological breakthroughs into viable market solutions, scalable digital products, and sustainable business models.",
    tools: [
      { name: "Product Strategy", icon: Rocket, accent: "#EF4444" },
      { name: "System Architecture", icon: Layers, accent: "#3B82F6" },
      { name: "Growth Engineering", icon: Sparkles, accent: "#F59E0B" },
      { name: "45+ Certifications", icon: ShieldCheck, accent: "#10B981" },
    ],
  },
  uiux: {
    id: "uiux",
    title: "UI/UX & Frontend",
    subtitle:
      "Crafting intuitive user experiences, refined glassmorphic aesthetics, and dynamic micro-interactions focused on modern design systems.",
    tools: [
      { name: "Figma", icon: Palette, accent: "#F24E1E" },
      { name: "Tailwind CSS", icon: Code2, accent: "#38BDF8" },
      { name: "Framer Motion", icon: Sparkles, accent: "#A855F7" },
      { name: "Design Systems", icon: Layers, accent: "#6366F1" },
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

  // Auto-rotating progress loop
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
    <section id="tentang" className="relative w-full bg-zinc-50/90 text-zinc-900 border-t border-zinc-200/80">
      
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

      {/* 2. Main Bio & Philosophy Row */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-16 sm:py-20 border-x border-zinc-200/80 flex flex-col xl:flex-row xl:items-start xl:justify-between gap-12">
          
          {/* Left Column: Hello Animated Typography & Narrative Bio */}
          <div className="flex-1 max-w-3xl">
            {/* Animated Typography GIF 'hello.' */}
            <div className="relative mb-5 -mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/typography/hello.webp"
                alt="hello."
                className="w-[115px] sm:w-[135px] h-auto object-contain select-none pointer-events-none [image-rendering:pixelated]"
              />
            </div>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              i'm akhyar, but my real name is{" "}
              <span className="font-semibold text-zinc-900">Akhyar Mualif</span>. i am a{" "}
              <span className="underline decoration-zinc-400 decoration-dashed underline-offset-4 cursor-help">
                20-year-old
              </span>{" "}
              student majoring in Informatics Engineering at{" "}
              <span className="text-zinc-900 font-medium">Universitas Ma'arif Nahdlatul Ulama Kebumen</span>{" "}
              and an <span className="font-semibold text-zinc-900">AI Agent Builder & Technopreneur</span>.
              growing up, i spent countless hours fascinated by how software can solve complex real-world challenges,
              and now i love designing autonomous AI workflows, RAG pipelines, and scalable web solutions.
            </p>

            <br />

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              if you're curious, my journey started with software fundamentals and rapidly expanded into generative AI,
              multi-agent architectures, and technopreneurship. during my spare time, i've invested over{" "}
              <span className="underline decoration-indigo-400 decoration-dashed underline-offset-4 font-mono font-medium text-zinc-900">
                1,400+ hours
              </span>{" "}
              into continuous learning, earning{" "}
              <span className="font-semibold text-zinc-900">45+ professional certifications</span>{" "}
              from leading technology organizations, tackling complex architectural challenges, and turning ambitious
              ideas into solid, production-ready software.
            </p>
          </div>

          {/* Right Column: Philosophy Card */}
          <div className="w-full xl:w-auto flex justify-center xl:justify-end xl:sticky xl:top-24">
            <div
              data-cursor-expand
              className="relative w-full max-w-sm rounded-xs border border-zinc-200/90 bg-white/70 backdrop-blur-md p-6 shadow-xs transition-all duration-300 hover:border-zinc-300 hover:shadow-md"
            >
              <h3 className="font-semibold text-lg text-zinc-900 tracking-tight">philosophy</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                "I'd rather ship slow and solid than fast and fragile. Every project is an opportunity to build
                something that feels precise, calm, and durable, not just 'done'."
              </p>
              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                <Link
                  href="#kontak"
                  className="font-mono text-xs text-indigo-600 hover:text-indigo-800 transition-colors font-medium hover:underline"
                >
                  [/philosophy]
                </Link>
                <span className="text-[11px] font-mono text-zinc-400">UNU KEBUMEN</span>
              </div>
            </div>
          </div>

          <PlusSeparator position={["top-left", "top-right"]} />
        </div>
      </div>

      {/* 3. Running Text Skills Pill Marquee with Star Dividers */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl border-x border-zinc-200/80 py-3 overflow-hidden select-none">
          
          {/* Blind White Shadow Mask Left & Right */}
          <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-16 sm:w-28 md:w-44 bg-gradient-to-r from-zinc-50 via-zinc-50/90 to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-16 sm:w-28 md:w-44 bg-gradient-to-l from-zinc-50 via-zinc-50/90 to-transparent z-10" />

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

      {/* 4. Active Selected Skill Detail Showcase */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 xl:px-10 py-12 sm:py-16 border-x border-zinc-200/80 min-h-[320px] flex flex-col justify-center items-center overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentContent.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center max-w-3xl"
            >
              {/* Title */}
              <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tight">
                {currentContent.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-2xl leading-relaxed">
                {currentContent.subtitle}
              </p>

              {/* Tools & Tech Icons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                {currentContent.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      data-cursor-expand
                      className="group flex flex-col items-center gap-2 p-2.5 rounded-lg hover:bg-zinc-100/80 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 shadow-2xs flex items-center justify-center text-zinc-800 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-900 transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Subtle Ambient Light Glow at Bottom */}
          <div className="pointer-events-none absolute -bottom-10 left-1/4 right-1/4 h-24 bg-gradient-to-t from-indigo-200/25 via-sky-200/20 to-transparent blur-3xl -z-10" />

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
