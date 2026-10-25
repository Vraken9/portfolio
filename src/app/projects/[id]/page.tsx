import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS, ProjectItem } from "@/data/portfolioData";
import {
  ArrowLeft,
  ArrowRight,
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
    title: `${project.title} — Case Study & Details | Akhyar Mualif`,
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
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top Sticky Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/90 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-zinc-600 hover:text-zinc-950 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-colors shadow-xs"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 bg-white text-zinc-800 text-xs font-semibold hover:bg-zinc-100 transition-colors shadow-xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Header Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12">
        {/* Badges Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-mono font-semibold">
            {isMobile ? <Smartphone className="w-3.5 h-3.5 text-indigo-600" /> : <Globe className="w-3.5 h-3.5 text-blue-600" />}
            {project.category}
          </span>

          {project.liveUrl && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Production
            </span>
          )}

          {project.apkUrl && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Android APK Ready
            </span>
          )}

          {project.isPaused && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
              Demo Paused / Maintenance
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.1]">
            {project.title}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-zinc-600 font-medium leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Action Link Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm hover:shadow"
            >
              <span>Open Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.apkUrl && (
            <a
              href={project.apkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all shadow-sm hover:shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download APK (Google Drive)</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-zinc-300 bg-white text-zinc-800 text-sm font-semibold hover:bg-zinc-100 transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}

          {project.isPaused && (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm font-medium">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Live deployment is currently paused for database maintenance.</span>
            </div>
          )}
        </div>

        {/* Featured Showcase Media */}
        <div className="mt-10 rounded-3xl overflow-hidden border border-zinc-200/90 bg-white shadow-xl">
          {project.videoDemo ? (
            <div className="space-y-0">
              <div className="px-5 py-3 bg-zinc-900 text-white text-xs font-mono flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-emerald-400" />
                  Interactive Video Demonstration: AI RAG Chatbot
                </span>
                <span className="text-zinc-400 text-xs">HTML5 Video</span>
              </div>
              <video
                src={project.videoDemo}
                controls
                className="w-full max-h-[640px] object-cover bg-black"
              />
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full max-h-[640px] object-cover object-top"
            />
          )}
        </div>

        {/* Problem Statement & Logical Solution Rationale Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: The Problem */}
          <div className="p-7 rounded-3xl bg-red-50/50 border border-red-200/80 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-700 mb-3">
              <AlertCircle className="w-4 h-4 text-red-600" />
              The Real-World Problem
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-3">
              Why Existing Solutions Fall Short
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              {project.problemSolved}
            </p>
          </div>

          {/* Card 2: Logical Solution Rationale */}
          <div className="p-7 rounded-3xl bg-emerald-50/50 border border-emerald-200/80 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              The Logical Solution Rationale
            </div>
            <h3 className="text-xl font-bold text-zinc-950 mb-3">
              How This Application Solves It
            </h3>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              {project.solutionRationale}
            </p>
          </div>
        </div>

        {/* Detailed Breakdown: Overview & AI Integration */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
              <Layers className="w-4 h-4 text-indigo-600" />
              System Architecture & Core Flow
            </div>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 mb-3">
              <Bot className="w-4 h-4 text-emerald-600" />
              AI & Automation Capabilities
            </div>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              {project.aiIntegration}
            </p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-xs">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-4">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-2xl bg-zinc-100 border border-zinc-200/90 text-xs sm:text-sm font-mono text-zinc-800 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Full Gallery Section */}
        {project.galleryImages.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  Application Screenshots
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 font-mono">
                  {project.galleryImages.length} detailed interface captures
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages.map((image, idx) => (
                <div
                  key={image.path + idx}
                  className="group rounded-3xl overflow-hidden border border-zinc-200 bg-white shadow-xs hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.path}
                      alt={image.label}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 border-t border-zinc-100 bg-white">
                    <p className="text-xs sm:text-sm font-medium text-zinc-800">
                      {image.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Navigation Footer */}
        <div className="mt-20 pt-10 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/projects/${prevProject.id}`}
            className="w-full sm:w-auto p-4 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-400 transition-all flex items-center gap-4 group"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-zinc-950 group-hover:text-white transition-colors shrink-0">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </div>
            <div className="text-left">
              <span className="block text-[11px] font-mono text-zinc-400 uppercase">
                Previous Project
              </span>
              <span className="text-sm font-bold text-zinc-900">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            href="/#projects"
            className="px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-zinc-500 hover:text-zinc-950 transition-colors"
          >
            Back to All Projects Overview
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="w-full sm:w-auto p-4 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-400 transition-all flex items-center justify-between sm:justify-start gap-4 group text-right"
          >
            <div className="text-right">
              <span className="block text-[11px] font-mono text-zinc-400 uppercase">
                Next Project
              </span>
              <span className="text-sm font-bold text-zinc-900">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-zinc-950 group-hover:text-white transition-colors shrink-0">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
