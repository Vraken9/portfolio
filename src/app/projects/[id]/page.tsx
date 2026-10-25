import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS, ProjectItem, ProjectFlow, FlowStep } from "@/data/portfolioData";
import { PlusSeparator } from "@/components/ui/plus-separator";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Download,
  Sparkles,
  Layers,
  Bot,
  Play,
  CheckCircle2,
  Smartphone,
  Globe,
  AlertCircle,
  Clock,
  ShieldCheck,
  ShoppingBag,
  Store,
  GraduationCap,
  User,
  Check,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function RoleIcon({ name, className = "w-4 h-4" }: { name?: string; className?: string }) {
  switch (name) {
    case "Store":
      return <Store className={className} />;
    case "ShoppingBag":
      return <ShoppingBag className={className} />;
    case "GraduationCap":
      return <GraduationCap className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Smartphone":
      return <Smartphone className={className} />;
    case "Globe":
      return <Globe className={className} />;
    case "User":
    default:
      return <User className={className} />;
  }
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) {
    return {
      title: "Project Not Found — Akhyar Mualif",
    };
  }

  return {
    title: `${project.title} — Case Study & Engineering Flow | Akhyar Mualif`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  const isMobile = project.category.toLowerCase().includes("mobile");

  return (
    <main className="min-h-screen bg-[#faf9fc] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* 1. Top Sticky Navigation matching Hexaa / Bauhaus Clean Standards */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/90 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between font-mono text-xs">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>[all projects]</span>
          </Link>

          <div className="flex items-center gap-2.5 sm:gap-3">
            {project.liveUrl && !project.isPaused && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950 text-white font-medium hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <span>{isMobile ? "[live demo]" : "[visit website]"}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-xs"
              >
                <Download className="w-3 h-3" />
                <span>[download apk]</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 bg-white text-zinc-800 font-medium hover:bg-zinc-100 transition-colors shadow-xs"
              >
                <GithubIcon className="w-3 h-3" />
                <span>[github]</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Grid Spacer Line with Plus Separator */}
      <div className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl h-10 border-x border-zinc-200/80 flex items-center justify-between px-6 sm:px-10">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />
          <span className="font-mono text-xs text-zinc-400">/projects/{project.id}</span>
          <span className="font-mono text-xs text-zinc-500">Case Study & User Flows</span>
        </div>
      </div>

      {/* 2. Hero Header Section */}
      <section className="w-full border-b border-zinc-200/80 bg-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 pb-12 border-x border-zinc-200/80">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-zinc-950 text-white font-medium">
              {isMobile ? <Smartphone className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
              {project.category}
            </span>

            {project.liveUrl && !project.isPaused && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-emerald-100 text-emerald-900 font-medium border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Production
              </span>
            )}

            {project.apkUrl && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-indigo-100 text-indigo-900 font-medium border border-indigo-200">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                Android APK Ready
              </span>
            )}

            {project.isPaused && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-amber-100 text-amber-900 font-medium border border-amber-200">
                <AlertCircle className="w-3 h-3 text-amber-600" />
                Live Demo Paused / Maintenance
              </span>
            )}
          </div>

          {/* Title & One-Sentence Proposition */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.1]">
            {project.title}
          </h1>
          <p className="mt-3.5 text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Bento Metadata Strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 border border-zinc-200/80 bg-zinc-50/70 p-2 rounded-xs font-mono text-xs">
            <div className="p-3 bg-white rounded-xs border border-zinc-200/60">
              <span className="text-zinc-400 block text-[10px] uppercase">Domain</span>
              <span className="font-semibold text-zinc-900 mt-0.5 block">{project.category.split("•")[1] || project.category}</span>
            </div>
            <div className="p-3 bg-white rounded-xs border border-zinc-200/60">
              <span className="text-zinc-400 block text-[10px] uppercase">Architecture</span>
              <span className="font-semibold text-zinc-900 mt-0.5 block">{isMobile ? "Flutter & Supabase" : "Next.js & Full-Stack"}</span>
            </div>
            <div className="p-3 bg-white rounded-xs border border-zinc-200/60">
              <span className="text-zinc-400 block text-[10px] uppercase">AI Integration</span>
              <span className="font-semibold text-zinc-900 mt-0.5 block truncate">{project.aiIntegration.split(",")[0] || "AI Orchestrated"}</span>
            </div>
            <div className="p-3 bg-white rounded-xs border border-zinc-200/60">
              <span className="text-zinc-400 block text-[10px] uppercase">Repository</span>
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold mt-0.5 inline-flex items-center gap-1">
                  <span>github.com</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              ) : (
                <span className="font-semibold text-zinc-500 mt-0.5 block">Private</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem vs Solution Bento Cards */}
      <section className="w-full border-b border-zinc-200/80">
        <div className="relative mx-auto max-w-7xl p-2 border-x border-zinc-200/80 grid grid-cols-1 md:grid-cols-2 gap-2">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          {/* Problem Card */}
          <div className="p-6 sm:p-8 bg-white border border-red-200/80 rounded-xs shadow-2xs relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/80" />
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-red-700 uppercase tracking-wider mb-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span>[the real-world problem]</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              Why Existing Methods Fall Short
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              {project.problemSolved}
            </p>
          </div>

          {/* Solution Rationale Card */}
          <div className="p-6 sm:p-8 bg-white border border-emerald-200/80 rounded-xs shadow-2xs relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500/80" />
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>[the logical solution]</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 tracking-tight">
              How This Application Solves It
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              {project.solutionRationale}
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE CORE FEATURE FLOWS (STEP-BY-STEP ORDERED JOURNEYS) */}
      {project.flows && project.flows.length > 0 && (
        <section className="w-full border-b border-zinc-200/80">
          <div className="relative mx-auto max-w-7xl border-x border-zinc-200/80 px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
            <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

            {/* Section Header */}
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 font-mono text-xs text-zinc-700 mb-3">
                <Layers className="w-3.5 h-3.5 text-zinc-950" />
                <span>[APPLICATION FLOWS & STEP-BY-STEP WALKTHROUGH]</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                Chronological System & User Experience Flows
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
                Walk through every interface and operational step designed to solve the problem—from initial discovery to deep administration.
              </p>
            </div>

            {/* Interactive Video Demonstration for Nusa AI */}
            {project.videoDemo && (
              <div className="mb-14 rounded-xs border border-zinc-200 bg-white overflow-hidden shadow-sm">
                <div className="px-5 py-3 bg-zinc-950 text-white font-mono text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                    <span>Interactive Video Demo: 24/7 Contextual AI RAG Chatbot</span>
                  </div>
                  <span className="text-zinc-400 text-[11px]">[HTML5 VIDEO]</span>
                </div>
                <video
                  src={project.videoDemo}
                  controls
                  className="w-full max-h-[600px] object-cover bg-black"
                />
              </div>
            )}

            {/* Flows Grouped by Roles */}
            <div className="space-y-16">
              {project.flows.map((flowGroup, groupIdx) => (
                <div key={flowGroup.roleTitle + groupIdx} className="space-y-8">
                  {/* Role Group Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-zinc-950 gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xs bg-zinc-950 text-white flex items-center justify-center">
                        <RoleIcon name={flowGroup.roleIcon} className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-zinc-950">
                          {flowGroup.roleTitle}
                        </h3>
                        {flowGroup.roleDescription && (
                          <p className="text-xs text-zinc-500 font-mono mt-0.5">
                            {flowGroup.roleDescription}
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="font-mono text-xs px-2.5 py-1 rounded-xs bg-zinc-100 border border-zinc-200 text-zinc-800 font-semibold self-start sm:self-auto">
                      [{flowGroup.roleBadge}]
                    </span>
                  </div>

                  {/* Steps Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {flowGroup.steps.map((step) => (
                      <div
                        key={step.stepNumber + step.title}
                        className="group flex flex-col rounded-xs border border-zinc-200/90 bg-white hover:border-zinc-400 transition-all shadow-xs overflow-hidden"
                      >
                        {/* Step Top Bar */}
                        <div className="px-5 py-3.5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/60 font-mono text-xs">
                          <span className="font-bold text-zinc-950 px-2 py-0.5 rounded-xs bg-zinc-200/80">
                            STEP {step.stepNumber}
                          </span>
                          {step.tag && (
                            <span className="text-blue-600 font-medium">
                              [{step.tag}]
                            </span>
                          )}
                        </div>

                        {/* Image Showcase */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 border-b border-zinc-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={step.imagePath}
                            alt={step.title}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        {/* Content Area */}
                        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-3">
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-zinc-950 leading-snug">
                              {step.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-zinc-600 mt-2 leading-relaxed">
                              {step.description}
                            </p>
                          </div>

                          {/* Highlights */}
                          {step.highlights && step.highlights.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-100 font-mono text-[11px]">
                              {step.highlights.map((item) => (
                                <span
                                  key={item}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-zinc-100 text-zinc-700"
                                >
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  {item}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Technologies & Architecture Grid */}
      <section className="w-full border-b border-zinc-200/80 bg-white">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-12 border-x border-zinc-200/80">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-zinc-950" />
            <span>[ENGINEERING STACK & TOOLS USED]</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xs bg-zinc-100 border border-zinc-200 text-xs sm:text-sm font-mono text-zinc-800 font-medium hover:bg-zinc-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Project Switcher Footer (Prev / Next Project) */}
      <section className="w-full border-b border-zinc-200/80 bg-zinc-50/70">
        <div className="relative mx-auto max-w-7xl p-2 border-x border-zinc-200/80 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <PlusSeparator position={["top-left", "top-right", "bottom-left", "bottom-right"]} />

          {/* Previous Project */}
          <Link
            href={`/projects/${prevProject.id}`}
            className="p-5 bg-white border border-zinc-200/80 rounded-xs hover:border-zinc-950 transition-all flex items-center gap-4 group"
          >
            <div className="w-9 h-9 rounded-xs bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:bg-zinc-950 group-hover:text-white transition-colors shrink-0">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </div>
            <div>
              <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                [PREVIOUS PROJECT]
              </span>
              <span className="text-sm font-bold text-zinc-950 group-hover:underline">
                {prevProject.title}
              </span>
            </div>
          </Link>

          {/* Next Project */}
          <Link
            href={`/projects/${nextProject.id}`}
            className="p-5 bg-white border border-zinc-200/80 rounded-xs hover:border-zinc-950 transition-all flex items-center justify-between group text-right"
          >
            <div className="text-left sm:text-right flex-1">
              <span className="block font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                [NEXT PROJECT]
              </span>
              <span className="text-sm font-bold text-zinc-950 group-hover:underline">
                {nextProject.title}
              </span>
            </div>
            <div className="w-9 h-9 rounded-xs bg-zinc-100 flex items-center justify-center text-zinc-800 group-hover:bg-zinc-950 group-hover:text-white transition-colors shrink-0 ml-4">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
