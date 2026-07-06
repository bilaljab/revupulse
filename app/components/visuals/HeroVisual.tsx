"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { staggerContainerFast, scatterChip, reportCardPop } from "@/app/lib/motion";
import GlowOrb from "./GlowOrb";
import DotGrid from "./DotGrid";

function StarIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        d="M10 1.5l2.47 5.51 6.03.58-4.53 4.06 1.32 5.92L10 14.77l-5.29 2.8 1.32-5.92L1.5 7.59l6.03-.58L10 1.5z"
        className="fill-accent"
      />
    </svg>
  );
}

function BubbleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 18" className={className} aria-hidden="true">
      <path
        d="M2 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9l-5 4v-4H5a3 3 0 0 1-3-3V3z"
        className="fill-accent"
      />
      <rect x="6" y="5.5" width="12" height="1.6" rx="0.8" className="fill-on-accent/40" />
      <rect x="6" y="9" width="8" height="1.6" rx="0.8" className="fill-on-accent/40" />
    </svg>
  );
}

const chips = [
  { position: "left-[6%] top-[10%]", x: -50, y: -40, rotate: -10, type: "star" as const },
  { position: "right-[8%] top-[16%]", x: 55, y: -30, rotate: 8, type: "bubble" as const },
  { position: "left-[2%] top-[54%]", x: -60, y: 20, rotate: 6, type: "bubble" as const },
  { position: "right-[4%] top-[58%]", x: 50, y: 30, rotate: -8, type: "star" as const },
  { position: "left-[18%] top-[82%]", x: -30, y: 45, rotate: 5, type: "bubble" as const },
  { position: "right-[20%] top-[84%]", x: 35, y: 40, rotate: -5, type: "star" as const },
];

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      variants={staggerContainerFast}
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : parallaxY }}
        className="pointer-events-none absolute -right-12 -top-16 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      />
      <GlowOrb className="-bottom-12 -left-12 h-56 w-56 bg-accent/10" />
      <DotGrid className="inset-0 h-full w-full" />

      {chips.map((chip, index) => (
        <motion.div
          key={index}
          variants={scatterChip(chip.x, chip.y, chip.rotate)}
          className={`absolute flex h-9 w-16 items-center justify-center rounded-lg border border-border/60 bg-surface/80 shadow-sm ${chip.position}`}
        >
          {chip.type === "star" ? (
            <div className="flex items-center justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-2 w-2" />
              ))}
            </div>
          ) : (
            <BubbleIcon className="h-4 w-6" />
          )}
        </motion.div>
      ))}

      <motion.div
        variants={reportCardPop}
        className="absolute left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-accent/30 bg-surface p-4 shadow-lg shadow-accent/10"
      >
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-2 w-full rounded-full bg-foreground/10" />
          <div className="h-2 w-2/3 rounded-full bg-foreground/10" />
        </div>
        <div className="mt-4 flex items-end gap-1">
          <div className="h-4 w-2 rounded-sm bg-accent/40" />
          <div className="h-6 w-2 rounded-sm bg-accent/70" />
          <div className="h-3 w-2 rounded-sm bg-accent/40" />
        </div>
      </motion.div>
    </motion.div>
  );
}
