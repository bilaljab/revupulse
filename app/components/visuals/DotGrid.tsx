"use client";

import { useId } from "react";

export default function DotGrid({ className = "" }: { className?: string }) {
  const patternId = useId();

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      style={{
        maskImage:
          "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 40%, transparent 75%)",
      }}
    >
      <defs>
        <pattern
          id={patternId}
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="var(--border)" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
