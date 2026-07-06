"use client";

import { motion } from "framer-motion";
import { slideInRight, viewportDefault } from "@/app/lib/motion";
import SolutionVisual from "./visuals/SolutionVisual";

export default function SolutionSection() {
  return (
    <section
      className="light-section relative overflow-hidden bg-surface px-6 py-24 sm:py-32"
      data-theme="light"
      data-section="solution"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <SolutionVisual />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={slideInRight}
          className="order-1 text-center lg:order-2 lg:text-right"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-surface-foreground sm:text-4xl">
            One weekly report. Every review, understood.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every week, one email tells you what&apos;s working and
            what&apos;s not — your top 5 complaints, your top 5 strengths, and
            where customer sentiment is heading. Pulled from every review on
            your platform, so you&apos;re not the one digging through them
            after closing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
