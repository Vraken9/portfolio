"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export interface ProductItem {
  id?: string;
  title: string;
  link: string;
  thumbnail: string;
  subtitle?: string;
  tag?: string;
  category?: string;
  technologies?: string[];
  projectId?: string;
}

export interface HeroParallaxProps {
  products?: ProductItem[];
  row1?: ProductItem[];
  row2?: ProductItem[];
  row3?: ProductItem[];
  header?: React.ReactNode;
  onSelectProduct?: (product: ProductItem) => void;
}

export const HeroParallax = ({
  products = [],
  row1,
  row2,
  row3,
  header,
  onSelectProduct,
}: HeroParallaxProps) => {
  // If distinct rows not provided, dynamically split the products array
  const countPerRow = Math.ceil(products.length / 3);
  const firstRow = row1 || products.slice(0, countPerRow);
  const secondRow = row2 || products.slice(countPerRow, countPerRow * 2);
  const thirdRow = row3 || products.slice(countPerRow * 2);

  // Duplicate items in row if short so infinite marquee loops seamlessly across ultra-wide monitors
  const displayRow1 = firstRow.length < 8 ? [...firstRow, ...firstRow] : firstRow;
  const displayRow2 = secondRow.length < 8 ? [...secondRow, ...secondRow, ...secondRow] : secondRow;
  const displayRow3 = thirdRow.length < 8 ? [...thirdRow, ...thirdRow] : thirdRow;

  return (
    <div className="relative w-full h-[85vh] sm:h-[88vh] lg:h-[92vh] min-h-[620px] max-h-[1050px] overflow-hidden antialiased flex flex-col justify-between select-none bg-white">
      {/* 1. Foreground Header Layer (Interactive, Higher Z-index) */}
      <div className="relative z-20 w-full pointer-events-none">
        {header || <DefaultHeader />}
      </div>

      {/* 2. Background 3D Perspective Plane with Auto-Running Marquee Tracks */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center overflow-hidden [perspective:1200px] [transform-style:preserve-3d] pointer-events-auto">
        <div className="w-[130%] -left-[15%] sm:w-[125%] sm:-left-[12%] lg:w-[120%] lg:-left-[10%] relative flex flex-col gap-2.5 sm:gap-3.5 lg:gap-5 [transform:rotateX(16deg)_rotateZ(9deg)_translateY(-20px)] origin-center">
          
          {/* Row 1: ModulKu AI (Moves Forward / Left) */}
          <div className="w-full">
            <Marquee duration={40} reverse={false} pauseOnHover={true} className="py-1">
              {displayRow1.map((product, idx) => (
                <ProductCard
                  product={product}
                  key={`${product.id || product.title}-r1-${idx}`}
                  onSelect={onSelectProduct}
                />
              ))}
            </Marquee>
          </div>

          {/* Row 2: FloraMart (Moves in Reverse / Right for dynamic opposition) */}
          <div className="w-full">
            <Marquee duration={36} reverse={true} pauseOnHover={true} className="py-1">
              {displayRow2.map((product, idx) => (
                <ProductCard
                  product={product}
                  key={`${product.id || product.title}-r2-${idx}`}
                  onSelect={onSelectProduct}
                />
              ))}
            </Marquee>
          </div>

          {/* Row 3: Kos.id & Nusa Bali (Moves Forward / Left) */}
          <div className="w-full">
            <Marquee duration={46} reverse={false} pauseOnHover={true} className="py-1">
              {displayRow3.map((product, idx) => (
                <ProductCard
                  product={product}
                  key={`${product.id || product.title}-r3-${idx}`}
                  onSelect={onSelectProduct}
                />
              ))}
            </Marquee>
          </div>

        </div>
      </div>
    </div>
  );
};

export const DefaultHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-8 sm:py-12 px-4 sm:px-6 xl:px-10 w-full left-0 top-0 pointer-events-auto">
      <div className="max-w-3xl relative p-5 sm:p-7 rounded-3xl">
        <span className="text-xs font-mono font-semibold tracking-widest text-indigo-600 uppercase mb-2 inline-block">
          [PORTFOLIO // SELECTED WORKS]
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
          Crafted Software & AI Agent Ecosystems
        </h2>
        <p className="text-sm sm:text-base mt-3 text-zinc-600 leading-relaxed font-medium">
          Eksplorasi pembuatan aplikasi nyata bertenaga AI Agent, arsitektur RAG, SaaS pendidikan, hingga platform multi-vendor yang dirancang untuk skala produksi.
        </p>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  onSelect,
}: {
  product: ProductItem;
  onSelect?: (product: ProductItem) => void;
}) => {
  return (
    <div
      onClick={() => onSelect?.(product)}
      data-cursor-expand
      className="group/product h-44 sm:h-52 md:h-56 lg:h-60 xl:h-72 2xl:h-80 w-[18rem] sm:w-[22rem] md:w-[25rem] lg:w-[27rem] xl:w-[32rem] 2xl:w-[36rem] relative shrink-0 rounded-xl sm:rounded-2xl xl:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-sm hover:shadow-2xl hover:border-zinc-400 hover:scale-[1.02] transition-all duration-300 cursor-pointer select-none mx-2 sm:mx-3 lg:mx-4"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Screenshot Image with Smooth Zoom on Hover */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.thumbnail}
          className="object-cover object-top absolute h-full w-full inset-0 transition-transform duration-700 ease-out group-hover/product:scale-105"
          alt={product.title}
          loading="lazy"
        />

        {/* Ambient Top Shadow for Tag Visibility */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/50 via-black/20 to-transparent opacity-60 group-hover/product:opacity-85 transition-opacity duration-300 pointer-events-none" />

        {/* Top Floating Badge Bar */}
        <div className="absolute top-3 inset-x-3 sm:top-4 sm:inset-x-4 flex items-center justify-between z-10 pointer-events-none">
          {product.tag && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 backdrop-blur-md text-zinc-900 text-[9px] sm:text-[11px] font-mono font-bold tracking-wider uppercase shadow-xs border border-zinc-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              {product.tag}
            </span>
          )}

          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md text-zinc-800 flex items-center justify-center opacity-75 group-hover/product:opacity-100 group-hover/product:bg-zinc-950 group-hover/product:text-white transition-all duration-300 shadow-xs border border-zinc-200/60">
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover/product:translate-x-0.5 group-hover/product:-translate-y-0.5" />
          </div>
        </div>

        {/* Bottom Dark Glass Gradient Overlay for High Readability on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/45 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Bottom Details Content */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 translate-y-3 opacity-0 group-hover/product:translate-y-0 group-hover/product:opacity-100 transition-all duration-300 z-10 flex flex-col gap-1 pointer-events-none">
          {product.category && (
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-indigo-300 font-bold">
              {product.category}
            </span>
          )}

          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight leading-snug">
            {product.title}
          </h3>

          {product.subtitle && (
            <p className="text-[11px] sm:text-xs text-zinc-300 line-clamp-2 leading-relaxed">
              {product.subtitle}
            </p>
          )}

          {product.technologies && product.technologies.length > 0 && (
            <div className="mt-0.5 flex flex-wrap gap-1 sm:gap-1.5">
              {product.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-white/15 text-[9px] sm:text-[10px] font-mono text-zinc-200 backdrop-blur-xs border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroParallax;
