import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import TechStack from "@/components/TechStack";
import AiWorkflow from "@/components/AiWorkflow";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07090e] text-[#f1f5f9] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Profile Photo & Running Text Marquee */}
      <Hero />

      {/* Key Metrics Credibility Bar */}
      <Metrics />

      {/* Interactive Tech Stack with Cursor Glow Effects */}
      <TechStack />

      {/* Technopreneur Methodology: How I Build with AI Agents */}
      <AiWorkflow />

      {/* 4 Featured Web Applications Showcase & Lightbox */}
      <Projects />

      {/* 45+ Verified Course & Final Project Certifications */}
      <Certificates />

      {/* About Me & Technopreneur Story */}
      <About />

      {/* Contact & Collaborative Hub */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
