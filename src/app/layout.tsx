import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Akhyar Mualif | AI Agent Builder & Technopreneur",
  description:
    "Portfolio Akhyar Mualif - Mahasiswa Teknik Informatika Universitas Ma'arif Nahdlatul Ulama Kebumen. AI Agent Builder, Full-Stack Developer, dan Continuous Learner dengan 45+ Sertifikasi.",
  keywords: [
    "Akhyar Mualif",
    "Akhyar",
    "AI Agent Builder",
    "Technopreneur",
    "Universitas Ma'arif Nahdlatul Ulama Kebumen",
    "Teknik Informatika",
    "Full-Stack Developer",
    "RAG AI",
    "Portfolio Next.js",
  ],
  authors: [{ name: "Akhyar Mualif", url: "https://github.com/Vraken9" }],
  openGraph: {
    title: "Akhyar Mualif | AI Agent Builder & Technopreneur",
    description:
      "Transforming Ideas into Production-Ready Digital Products with AI Agents",
    type: "website",
    url: "https://github.com/Vraken9/portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} light scroll-smooth`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-screen bg-zinc-50 text-zinc-900 font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-900">
        {children}
      </body>
    </html>
  );
}
