"use client";

import { motion } from "framer-motion";
import { slideInLeft, viewportDefault } from "@/app/lib/motion";
import GlowOrb from "./GlowOrb";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const FILLED_RATIO = 0.7;

const strengthBars = [90, 70, 55];
const complaintBars = [45, 30];

export default function SolutionVisual() {
  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      aria-hidden="true"
      className="relative mx-auto flex w-full max-w-sm flex-col items-center gap-8"
    >
      <GlowOrb className="-left-16 -top-10 h-64 w-64 bg-[var(--gradient-to)]/10" />

      <svg width="140" height="140" viewBox="0 0 140 140" className="relative">
        <circle
          cx="70"
          cy="70"
          r={RADIUS}
          fill="none"
          stroke="var(--border)"
          strokeWidth="10"
        />
        <motion.circle
          cx="70"
          cy="70"
          r={RADIUS}
          fill="none"
          stroke="var(--accent-on-light)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          whileInView={{ strokeDashoffset: CIRCUMFERENCE * (1 - FILLED_RATIO) }}
          viewport={viewportDefault}
          transition={{ duration: 0.9, ease: "easeOut" }}
          transform="rotate(-90 70 70)"
        />
      </svg>

      <div className="w-full space-y-2">
        {strengthBars.map((width, index) => (
          <div
            key={`strength-${index}`}
            className="h-2 rounded-full bg-accent-on-light/70"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>
      <div className="-mt-4 w-full space-y-2">
        {complaintBars.map((width, index) => (
          <div
            key={`complaint-${index}`}
            className="h-2 rounded-full bg-border/60"
            style={{ width: `${width}%` }}
          />
        ))}
      </div>
    </motion.div>
  );
}
