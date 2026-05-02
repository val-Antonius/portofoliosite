"use client";

import { motion } from "framer-motion";

interface DarkSummaryBoxProps {
  tagline: string;
  summary: string;
  type: string;
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/**
 * Dark editorial summary panel — the first thing a reader sees in a case study.
 * Uses --bg-canvas (the darkest surface) for maximum contrast against the card bg.
 */
export default function DarkSummaryBox({ tagline, summary, type }: DarkSummaryBoxProps) {
  return (
    <motion.div
      variants={item}
      className="relative overflow-hidden rounded-lg p-6 md:p-8"
      style={{ background: "var(--bg-canvas)", border: "1px solid var(--border)" }}
    >
      {/* Decorative corner accent */}
      <div
        className="absolute top-0 left-0 w-24 h-24 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, var(--accent-amber), transparent 70%)",
        }}
      />

      {/* Type badge */}
      <div className="mb-4">
        <span
          className="inline-block text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded"
          style={{
            background: "var(--accent-amber-bg)",
            color: "var(--accent-amber)",
            border: "1px solid var(--accent-amber)",
          }}
        >
          {type}
        </span>
      </div>

      {/* Tagline */}
      <p
        className="font-display leading-snug mb-4"
        style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--text-primary)" }}
      >
        &ldquo;{tagline}&rdquo;
      </p>

      {/* Divider */}
      <div className="w-8 h-px mb-4" style={{ background: "var(--accent-amber)" }} />

      {/* Summary paragraph */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {summary}
      </p>
    </motion.div>
  );
}
