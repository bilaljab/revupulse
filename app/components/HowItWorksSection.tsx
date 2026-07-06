"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  fadeUp,
  fadeUpItemLeft,
  fadeUpItemRight,
  badgeScale,
  staggerContainerSlow,
  viewportDefault,
} from "@/app/lib/motion";

const steps = [
  {
    title: "Connect your reviews platform",
    description:
      "Point us at your Google Reviews or Amazon listing. Takes less than a minute — no developer required.",
  },
  {
    title: "Every review gets read, the same day",
    description:
      "Sentiment, complaints, praise — sorted automatically the day each review comes in. You don't lift a finger.",
  },
  {
    title: "Get your report every week",
    description:
      "One email, ready to read over coffee. No logging in, no digging through tabs.",
  },
];

export default function HowItWorksSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      className="px-6 py-24 sm:py-32"
      data-theme="dark"
      data-section="how-it-works"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={fadeUp}
          className="font-heading text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          How it works
        </motion.h2>

        <div ref={timelineRef} className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-border lg:left-1/2 lg:-translate-x-1/2">
            <motion.div
              style={{
                scaleY: shouldReduceMotion ? 1 : lineScale,
                transformOrigin: "top",
              }}
              className="h-full w-full bg-gradient-to-b from-accent/60 via-accent/30 to-accent/60"
            />
          </div>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={viewportDefault}
            variants={staggerContainerSlow}
            className="relative flex flex-col gap-16 lg:gap-20"
          >
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const itemVariant = isEven ? fadeUpItemLeft : fadeUpItemRight;
              const content = (
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );

              return (
                <motion.li
                  key={step.title}
                  variants={itemVariant}
                  className="relative grid grid-cols-1 gap-4 pl-12 lg:grid-cols-2 lg:gap-16 lg:pl-0"
                >
                  <motion.span
                    variants={badgeScale}
                    className="absolute left-4 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-accent text-sm font-semibold text-on-accent lg:left-1/2 lg:h-14 lg:w-14"
                  >
                    {index + 1}
                  </motion.span>

                  {isEven ? (
                    <>
                      <div className="lg:pr-12 lg:text-right">{content}</div>
                      <div aria-hidden="true" className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div aria-hidden="true" className="hidden lg:block" />
                      <div className="lg:pl-12">{content}</div>
                    </>
                  )}
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
