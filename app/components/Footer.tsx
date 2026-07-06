"use client";

import { motion } from "framer-motion";
import { fadeUpSubtle, viewportDefault } from "@/app/lib/motion";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
      variants={fadeUpSubtle}
      className="border-t border-border px-6 py-8"
      data-theme="dark"
      data-section="footer"
    >
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} RevuPulse. All rights reserved.
      </p>
    </motion.footer>
  );
}
