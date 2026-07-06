"use client";

import { motion } from "framer-motion";
import { heroFadeUp, fadeUp, staggerContainer, viewportHero } from "@/app/lib/motion";
import HeroVisual from "./visuals/HeroVisual";

export default function HeroSection() {
  return (
    <motion.section
      className="gradient-hero overflow-hidden px-6 py-24 sm:py-32"
      data-theme="dark"
      data-section="hero"
      initial="hidden"
      whileInView="visible"
      viewport={viewportHero}
      variants={staggerContainer}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.h1
            variants={heroFadeUp}
            className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Your reviews are scattered. Your insights shouldn&apos;t be.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            A one-star review lands on Google Monday morning. A five-star
            lands on Amazon Thursday night. You&apos;re too busy running the
            store to read either — so the complaint that could&apos;ve saved
            a customer, and the praise that could&apos;ve become your best
            marketing, both get lost in the pile.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="#waitlist"
              data-cta-button
              className="inline-block rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-on-accent shadow-lg shadow-accent/30 transition-all duration-200 hover:scale-105 hover:shadow-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Join the waitlist
            </a>
          </motion.div>
        </div>
        <HeroVisual />
      </div>
    </motion.section>
  );
}
