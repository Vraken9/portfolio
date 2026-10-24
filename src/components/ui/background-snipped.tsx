"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BackgroundSnippedProps {
  className?: string;
}

export function BackgroundSnipped({ className }: BackgroundSnippedProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 h-full w-full pointer-events-none select-none bg-zinc-50/70 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:6rem_4rem]",
        className
      )}
    >
      {/* Soft lavender-violet ambient radial glow matching Aurora palette */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] opacity-40" />
    </div>
  );
}

export const Component = BackgroundSnipped;
export default BackgroundSnipped;
