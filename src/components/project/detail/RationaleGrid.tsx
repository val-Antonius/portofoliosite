"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

interface RationaleGridProps {
  problem: string;
  approach: string;
  outcome: string;
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const columns = [
  {
    key: "problem" as const,
    label: "Problem",
    Icon: Target,
    accentVar: "--accent-red",
  },
  {
    key: "approach" as const,
    label: "Approach",
    Icon: Lightbulb,
    accentVar: "--accent-amber",
  },
  {
    key: "outcome" as const,
    label: "Outcome",
    Icon: TrendingUp,
    accentVar: "--accent-green",
  },
];

/**
 * 3-column editorial rationale grid: Problem | Approach | Outcome.
 * Each column has a coloured icon, a label, and a narrative paragraph.
 */
export default function RationaleGrid({ problem, approach, outcome }: RationaleGridProps) {
  const values = { problem, approach, outcome };

  return (
    <motion.div
      variants={item}
      className="grid grid-cols-1 md:grid-cols-3 gap-px"
      style={{ background: "var(--border)", borderRadius: 8, overflow: "hidden" }}
    >
      {columns.map(({ key, label, Icon, accentVar }) => (
        <div
          key={key}
          className="flex flex-col gap-4 p-6"
          style={{ background: "var(--bg-card)" }}
        >
          {/* Icon + label */}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded flex items-center justify-center shrink-0"
              style={{
                background: `color-mix(in srgb, var(${accentVar}) 15%, transparent)`,
                border: `1px solid color-mix(in srgb, var(${accentVar}) 40%, transparent)`,
              }}
            >
              <Icon
                size={14}
                style={{ color: `var(${accentVar})` }}
              />
            </div>
            <span
              className="text-[10px] font-mono uppercase tracking-widest font-bold"
              style={{ color: `var(${accentVar})` }}
            >
              {label}
            </span>
          </div>

          {/* Narrative */}
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {values[key]}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
