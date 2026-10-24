"use client";

import React, { useCallback, useEffect, useRef, useState, type JSX } from "react";
import { cn } from "@/lib/utils";

const divisions = 2;

export interface BauhausProps {
  width?: number;
  height?: number;
  size?: number;
  colors?: string[];
  className?: string;
}

export function BauhausGenerator({
  width = 4,
  height = 2,
  size = 18,
  colors = ["#F65009", "#F3C11B", "#3D38F5", "#DE7D02"],
  className,
}: BauhausProps) {
  const [svgNodes, setSvgNodes] = useState<JSX.Element[] | null>(null);

  const randomBetween = (min: number, max: number) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const randomBool = () => Math.random() < 0.5;

  const getRandomColor = useCallback(() => {
    if (!colors || colors.length === 0) return "#000000";
    const c = colors[Math.floor(Math.random() * colors.length)];
    return c.startsWith("#") ? c : `#${c}`;
  }, [colors]);

  const shapeSquare = (s: number, color: string) => {
    const level = randomBetween(1, divisions);
    const nodes: JSX.Element[] = [];
    for (let i = 1; i < level + 1; i++) {
      const w = s - (i - 1) * (s / divisions);
      const offset = (i - 1) * (s / divisions / 2);
      nodes.push(
        <rect
          key={`sq-${i}-${Math.random()}`}
          width={w}
          height={w}
          x={offset}
          y={offset}
          fill={color}
        />
      );
    }
    return nodes;
  };

  const shapeCircle = (s: number, color: string) => {
    const level = randomBetween(1, divisions);
    const nodes: JSX.Element[] = [];
    for (let i = 1; i < level + 1; i++) {
      const r = s / 2 - (i - 1) * (s / divisions / 2);
      nodes.push(
        <circle
          key={`c-${i}-${Math.random()}`}
          r={r}
          cx={s / 2}
          cy={s / 2}
          fill={color}
        />
      );
    }
    return nodes;
  };

  const shapeSemi = (s: number, color: string) => {
    const rot = randomBetween(0, 3) * 90;
    return [
      <path
        key={`semi-${Math.random()}`}
        d={`M 0,0 a ${s / 2},${s / 2} 0 0,0 ${s},0 Z`}
        fill={color}
        transform={`rotate(${rot} ${s / 2} ${s / 2})`}
      />,
    ];
  };

  const shapeTriangle = (s: number, color: string) => {
    const rot = randomBetween(0, 3) * 90;
    return [
      <polygon
        key={`tri-${Math.random()}`}
        points={`0,0 ${s},0 0,${s}`}
        fill={color}
        transform={`rotate(${rot} ${s / 2} ${s / 2})`}
      />,
    ];
  };

  const shapeDots = (s: number, color: string) => {
    const dSize = s / 4;
    return [
      <circle key={`d1-${Math.random()}`} r={dSize / 2} cx={s / 4} cy={s / 4} fill={color} />,
      <circle key={`d2-${Math.random()}`} r={dSize / 2} cx={(3 * s) / 4} cy={s / 4} fill={color} />,
      <circle key={`d3-${Math.random()}`} r={dSize / 2} cx={s / 4} cy={(3 * s) / 4} fill={color} />,
      <circle key={`d4-${Math.random()}`} r={dSize / 2} cx={(3 * s) / 4} cy={(3 * s) / 4} fill={color} />,
    ];
  };

  const renderShape = useCallback(
    (shapeType: number, s: number, color: string) => {
      switch (shapeType) {
        case 1:
          return shapeSquare(s, color);
        case 2:
          return shapeCircle(s, color);
        case 3:
          return shapeSemi(s, color);
        case 4:
          return shapeTriangle(s, color);
        case 5:
          return shapeDots(s, color);
        default:
          return shapeSquare(s, color);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [divisions]
  );

  const generateArt = useCallback(() => {
    const totalCols = width;
    const totalRows = height;
    const elements: JSX.Element[] = [];

    for (let r = 0; r < totalRows; r++) {
      for (let c = 0; c < totalCols; c++) {
        const x = c * size;
        const y = r * size;
        const shapeType = randomBetween(1, 5);
        const color = getRandomColor();

        elements.push(
          <g
            key={`cell-${r}-${c}-${Math.random()}`}
            transform={`translate(${x}, ${y})`}
          >
            {renderShape(shapeType, size, color)}
          </g>
        );
      }
    }
    setSvgNodes(elements);
  }, [width, height, size, getRandomColor, renderShape]);

  useEffect(() => {
    generateArt();
  }, [generateArt]);

  return (
    <div
      onClick={generateArt}
      className={cn(
        "cursor-pointer inline-flex items-center justify-center p-1 rounded hover:opacity-80 transition-opacity",
        className
      )}
      title="Click to regenerate Bauhaus artwork"
    >
      <svg
        width={width * size}
        height={height * size}
        viewBox={`0 0 ${width * size} ${height * size}`}
        className="overflow-hidden rounded-xs"
      >
        {svgNodes}
      </svg>
    </div>
  );
}
