"use client";

import React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlusSeparatorProps {
  position: Array<"top-left" | "top-right" | "bottom-left" | "bottom-right">;
  className?: string;
  size?: number;
}

export function PlusSeparator({
  position,
  className,
  size = 10,
}: PlusSeparatorProps) {
  return (
    <>
      {position.includes("top-left") && (
        <Plus
          size={size}
          className={cn(
            "-top-[5px] -left-[5px] absolute text-zinc-400 pointer-events-none select-none z-20",
            className
          )}
        />
      )}
      {position.includes("top-right") && (
        <Plus
          size={size}
          className={cn(
            "-top-[5px] -right-[5px] absolute text-zinc-400 pointer-events-none select-none z-20",
            className
          )}
        />
      )}
      {position.includes("bottom-left") && (
        <Plus
          size={size}
          className={cn(
            "-bottom-[5px] -left-[5px] absolute text-zinc-400 pointer-events-none select-none z-20",
            className
          )}
        />
      )}
      {position.includes("bottom-right") && (
        <Plus
          size={size}
          className={cn(
            "-bottom-[5px] -right-[5px] absolute text-zinc-400 pointer-events-none select-none z-20",
            className
          )}
        />
      )}
    </>
  );
}
