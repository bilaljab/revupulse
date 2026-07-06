"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cardReveal, viewportDefault } from "@/app/lib/motion";
import GlowOrb from "./visuals/GlowOrb";
import DotGrid from "./visuals/DotGrid";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      id="waitlist"
      className="light-section relative overflow-hidden bg-surface px-6 py-24 sm:py-32"
      data-theme="light"
      data-section="waitlist"
    >
      <GlowOrb className="-left-16 -top-24 h-72 w-72 bg-[var(--gradient-to)]/10" />
      <GlowOrb className="-bottom-20 -right-12 h-56 w-56 bg-[var(--gradient-to)]/15" />
      <DotGrid className="right-0 top-0 h-64 w-64" />

      {status === "success" ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardReveal}
          className="relative mx-auto max-w-xl rounded-2xl border border-border/60 bg-surface/60 px-6 py-10 text-center shadow-2xl shadow-black/40 backdrop-blur-sm sm:px-10 sm:py-12"
        >
          <p className="text-lg font-semibold text-surface-foreground">
            You&apos;re on the list. We&apos;ll email you the moment
            RevuPulse is ready — nothing before that.
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          variants={cardReveal}
          className="relative mx-auto max-w-xl rounded-2xl border border-border/60 bg-surface/60 px-6 py-10 text-center shadow-2xl shadow-black/40 backdrop-blur-sm sm:px-10 sm:py-12"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-surface-foreground sm:text-4xl">
            Join the waitlist
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No spam, just one email the week we open the doors.
          </p>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none sm:max-w-xs"
            />
            <motion.button
              type="submit"
              disabled={status === "loading"}
              data-cta-button
              whileHover={status === "loading" ? undefined : { scale: 1.05 }}
              whileTap={status === "loading" ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="shrink-0 whitespace-nowrap rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-on-accent shadow-lg shadow-accent/30 transition-shadow duration-200 hover:shadow-xl hover:shadow-accent/50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Joining…" : "Join the waitlist"}
            </motion.button>
          </form>
          <p aria-live="polite" className="mt-3 min-h-[1.5rem] text-sm text-error">
            {status === "error" ? errorMessage : ""}
          </p>
        </motion.div>
      )}
    </section>
  );
}
