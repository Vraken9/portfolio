"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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

export const HeroParallax = ({
  products,
  header,
  onSelectProduct,
}: {
  products: ProductItem[];
  header?: React.ReactNode;
  onSelectProduct?: (product: ProductItem) => void;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 140, damping: 25, mass: 0.8 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 850]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -850]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.22], [14, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.18], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.22], [14, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.22], [-500, 150]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-[260vh] lg:min-h-[290vh] py-16 sm:py-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {header || <DefaultHeader />}
      
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="w-full"
      >
        {/* Row 1 (Translates Right) */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10 mb-8 sm:mb-12">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              onSelect={onSelectProduct}
            />
          ))}
        </motion.div>

        {/* Row 2 (Translates Left) */}
        <motion.div className="flex flex-row mb-8 sm:mb-12 space-x-6 sm:space-x-10">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              onSelect={onSelectProduct}
            />
          ))}
        </motion.div>

        {/* Row 3 (Translates Right) */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 sm:space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              onSelect={onSelectProduct}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const DefaultHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-12 sm:py-20 px-4 sm:px-6 xl:px-10 w-full left-0 top-0">
      <span className="text-xs font-mono font-semibold tracking-widest text-indigo-600 uppercase mb-3 inline-block">
        [PORTFOLIO // SELECTED WORKS]
      </span>
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 max-w-4xl leading-tight">
        Crafted Software & AI Agent Ecosystems
      </h2>
      <p className="max-w-2xl text-sm sm:text-base md:text-lg mt-4 text-zinc-600 leading-relaxed">
        Eksplorasi pembuatan aplikasi nyata bertenaga AI Agent, arsitektur RAG, SaaS pendidikan, hingga platform multi-vendor yang dirancang untuk skala produksi.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  onSelect,
}: {
  product: ProductItem;
  translate: MotionValue<number>;
  onSelect?: (product: ProductItem) => void;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      key={product.title}
      onClick={() => onSelect?.(product)}
      data-cursor-expand
      className="group/product h-80 sm:h-96 w-[22rem] sm:w-[28rem] lg:w-[32rem] relative shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/90 bg-zinc-100 shadow-sm hover:shadow-2xl hover:border-zinc-300 transition-all duration-300 cursor-pointer select-none"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Screenshot Image with Smooth Zoom */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.thumbnail}
          className="object-cover object-top absolute h-full w-full inset-0 transition-transform duration-700 ease-out group-hover/product:scale-105"
          alt={product.title}
          loading="lazy"
        />

        {/* Ambient Top Shadow for Tag Visibility */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/50 via-black/20 to-transparent opacity-60 group-hover/product:opacity-85 transition-opacity duration-300 pointer-events-none" />

        {/* Top Floating Badge Bar */}
        <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
          {product.tag && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-zinc-900 text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
              {product.tag}
            </span>
          )}

          <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-zinc-800 flex items-center justify-center opacity-70 group-hover/product:opacity-100 group-hover/product:bg-zinc-950 group-hover/product:text-white transition-all duration-300 shadow-xs">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/product:translate-x-0.5 group-hover/product:-translate-y-0.5" />
          </div>
        </div>

        {/* Bottom Dark Glass Gradient Overlay for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/45 to-transparent opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Bottom Details Content */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 translate-y-3 opacity-0 group-hover/product:translate-y-0 group-hover/product:opacity-100 transition-all duration-300 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.category && (
            <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-300 font-semibold">
              {product.category}
            </span>
          )}

          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
            {product.title}
          </h3>

          {product.subtitle && (
            <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
              {product.subtitle}
            </p>
          )}

          {product.technologies && product.technologies.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1.5">
              {product.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-white/15 text-[10px] font-mono text-zinc-200 backdrop-blur-xs border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroParallax;
