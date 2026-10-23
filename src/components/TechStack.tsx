"use client";

import { useState, useRef, MouseEvent } from "react";
import {
  Bot,
  Sparkles,
  Cpu,
  BrainCircuit,
  Wand2,
  Layout,
  Code2,
  Palette,
  Flame,
  Server,
  Terminal,
  Database,
  Cloud,
  ShieldCheck,
  GitBranch,
  Layers,
  Info,
} from "lucide-react";
import { TECH_STACKS, TechItem } from "@/data/portfolioData";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  const categories = [
    "All",
    "AI & Agents",
    "Frontend",
    "Backend & DB",
    "Cloud & Security",
  ];

  const filteredTech =
    activeCategory === "All"
      ? TECH_STACKS
      : TECH_STACKS.filter((t) => t.category === activeCategory);

  // Icon mapping
  const renderIcon = (iconName: string, color: string) => {
    const props = { className: "w-6 h-6", style: { color } };
    switch (iconName) {
      case "Bot":
        return <Bot {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      case "Cpu":
        return <Cpu {...props} />;
      case "BrainCircuit":
        return <BrainCircuit {...props} />;
      case "Wand2":
        return <Wand2 {...props} />;
      case "Layout":
        return <Layout {...props} />;
      case "Code2":
        return <Code2 {...props} />;
      case "Palette":
        return <Palette {...props} />;
      case "Flame":
        return <Flame {...props} />;
      case "Server":
        return <Server {...props} />;
      case "Terminal":
        return <Terminal {...props} />;
      case "Database":
        return <Database {...props} />;
      case "Cloud":
        return <Cloud {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "GitBranch":
        return <GitBranch {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  return (
    <section id="tech-stack" className="relative py-24 border-b border-white/5 bg-[#07090e]">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Tech Stack & Cursor Effects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Alat & Teknologi{" "}
            <span className="text-gradient">AI-Augmented Development</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Arahkan kursor Anda ke setiap kartu untuk melihat efek pencahayaan dinamis, rotasi 3D tilt, serta penjelasan use-case dari setiap teknologi yang saya gunakan.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25"
                    : "glass-panel text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid with Cursor Glow Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTech.map((tech, idx) => (
            <TechCard
              key={idx}
              tech={tech}
              renderIcon={renderIcon}
              onHover={setHoveredTech}
            />
          ))}
        </div>

        {/* Dynamic Tooltip / Detail Banner when Hovering */}
        {hoveredTech && (
          <div className="mt-8 p-4 rounded-2xl glass-panel border border-cyan-500/30 bg-[#0c1220]/90 max-w-2xl mx-auto flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div
              className="p-3 rounded-xl border border-white/10 shrink-0"
              style={{ backgroundColor: `${hoveredTech.accentColor}15` }}
            >
              {renderIcon(hoveredTech.iconName, hoveredTech.accentColor)}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {hoveredTech.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-white/10 text-cyan-300">
                  {hoveredTech.level}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  ({hoveredTech.category})
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {hoveredTech.description}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// Individual Tech Card with Mouse Follow Glow and 3D Tilt
interface TechCardProps {
  tech: TechItem;
  renderIcon: (name: string, color: string) => React.ReactNode;
  onHover: (tech: TechItem | null) => void;
}

function TechCard({ tech, renderIcon, onHover }: TechCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Calculate 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(tech);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    onHover(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: isHovered
          ? "transform 0.1s ease-out, box-shadow 0.2s"
          : "transform 0.4s ease-out, box-shadow 0.3s",
      }}
      className="relative rounded-2xl p-6 glass-panel border border-white/10 overflow-hidden cursor-pointer group bg-gradient-to-b from-white/[0.04] to-transparent shadow-lg"
    >
      {/* Mouse Follow Radial Spotlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${tech.accentColor}25, transparent 75%)`,
          }}
        />
      )}

      {/* Subtle Border Glow on Cursor Hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `inset 0 0 0 1px ${tech.accentColor}50`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full justify-between">
        
        {/* Top: Icon & Category */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${tech.accentColor}18` }}
          >
            {renderIcon(tech.iconName, tech.accentColor)}
          </div>

          <span
            className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-slate-300 group-hover:border-cyan-400/40 transition-colors"
            style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
          >
            {tech.level}
          </span>
        </div>

        {/* Middle: Name & Description */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
            {tech.name}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors">
            {tech.description}
          </p>
        </div>

        {/* Bottom Tag */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>{tech.category}</span>
          <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            Detail <Info className="w-3 h-3" />
          </span>
        </div>

      </div>
    </div>
  );
}
