import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects — Akhyar Mualif",
  description:
    "Here are the projects I've worked on, showcasing my skills and passion for software development and AI Agents.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Top Navbar matching hexaa.sh */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/90 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between font-mono text-xs">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-950 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>[home]</span>
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/#tentang" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              [about]
            </Link>
            <Link href="/projects" className="text-zinc-950 font-bold underline">
              [projects]
            </Link>
            <Link href="/#sertifikat" className="text-zinc-600 hover:text-zinc-950 transition-colors">
              [certificates]
            </Link>
            <a
              href="https://github.com/Vraken9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-950 transition-colors inline-flex items-center gap-1"
            >
              <span>[github]</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Hexaa Projects Section */}
      <ProjectsSection />
    </main>
  );
}
