"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 900;
const PATH_WIDTH = 2080;
const PATH_START_X = -320;
const POINT_COUNT = 240;

type Wave = {
  id: string;
  centerY: number;
  amplitude: number;
  cycles: number;
  phase: number;
  color: string;
  opacity: number;
  strokeWidth: number;
  duration: number;
  driftX: number;
  driftY: number;
};

const waves: Wave[] = [
  {
    id: "gold",
    centerY: 75,
    amplitude: 78,
    cycles: 2.4,
    phase: 0.3,
    color: "#f0a500",
    opacity: 0.62,
    strokeWidth: 20,
    duration: 22,
    driftX: 28,
    driftY: 12,
  },
  {
    id: "blue",
    centerY: 190,
    amplitude: 96,
    cycles: 2.8,
    phase: 1.8,
    color: "#38bdf8",
    opacity: 0.5,
    strokeWidth: 2.5,
    duration: 28,
    driftX: -24,
    driftY: 16,
  },
  {
    id: "rose",
    centerY: 320,
    amplitude: 104,
    cycles: 2.2,
    phase: 2.7,
    color: "#fb7185",
    opacity: 0.42,
    strokeWidth: 30,
    duration: 25,
    driftX: 22,
    driftY: -14,
  },
  {
    id: "violet",
    centerY: 450,
    amplitude: 118,
    cycles: 3.1,
    phase: 0.8,
    color: "#a78bfa",
    opacity: 0.46,
    strokeWidth: 2.5,
    duration: 31,
    driftX: -30,
    driftY: 18,
  },
  {
    id: "cyan",
    centerY: 585,
    amplitude: 105,
    cycles: 2.6,
    phase: 2.1,
    color: "#22d3ee",
    opacity: 0.48,
    strokeWidth: 8,
    duration: 26,
    driftX: 26,
    driftY: -16,
  },
  {
    id: "amber",
    centerY: 720,
    amplitude: 100,
    cycles: 2.9,
    phase: 1.1,
    color: "#ffcc44",
    opacity: 0.54,
    strokeWidth: 2.5,
    duration: 30,
    driftX: -22,
    driftY: 14,
  },
  {
    id: "sky",
    centerY: 855,
    amplitude: 76,
    cycles: 2.3,
    phase: 2.5,
    color: "#7dd3fc",
    opacity: 0.48,
    strokeWidth: 3,
    duration: 24,
    driftX: 30,
    driftY: -12,
  },
];

function wavePath(
  centerY: number,
  amplitude: number,
  cycles: number,
  phase: number,
) {
  const points: string[] = [];

  for (let i = 0; i <= POINT_COUNT; i++) {
    const progress = i / POINT_COUNT;
    const x = PATH_START_X + progress * PATH_WIDTH;
    const angle = progress * cycles * Math.PI * 2 + phase;
    const y = centerY + amplitude * Math.sin(angle);

    points.push(
      `${i === 0 ? "M" : "L"} ${x.toFixed(3)} ${y.toFixed(3)}`,
    );
  }

  return points.join(" ");
}

export default function SineWave() {
  const reduceMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldAnimate = hasMounted && !reduceMotion;

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      focusable="false"
      preserveAspectRatio="none"
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
    >
      {waves.map((wave) => (
        <motion.g
          key={wave.id}
          animate={
            shouldAnimate
              ? {
                  x: [-wave.driftX, wave.driftX, -wave.driftX],
                  y: [-wave.driftY, wave.driftY, -wave.driftY],
                }
              : { x: 0, y: 0 }
          }
          initial={{ x: 0, y: 0 }}
          transition={{
            duration: wave.duration,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <path
            d={wavePath(wave.centerY, wave.amplitude, wave.cycles, wave.phase)}
            fill="none"
            stroke={wave.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity={wave.opacity}
            strokeWidth={wave.strokeWidth}
          />
        </motion.g>
      ))}
    </svg>
  );
}
