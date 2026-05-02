"use client";

import { motion } from "framer-motion";
import {
  Database,
  GitBranch,
  Cpu,
  BarChart2,
  LayoutDashboard,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PipelineStep } from "../../../types";

interface MLPipelineProps {
  steps: PipelineStep[];
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/** Map icon name strings (from portfolio.ts) to Lucide components */
const ICON_MAP: Record<string, LucideIcon> = {
  database: Database,
  "git-branch": GitBranch,
  cpu: Cpu,
  "bar-chart-2": BarChart2,
  "layout-dashboard": LayoutDashboard,
};

function PipelineStepCard({
  step,
  index,
  total,
}: {
  step: PipelineStep;
  index: number;
  total: number;
}) {
  const Icon = ICON_MAP[step.icon] ?? Database;
  const isLast = index === total - 1;

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-start gap-0 md:gap-0">
      {/* Step card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="flex-1 rounded-lg p-4 flex flex-col gap-2"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        {/* Step number + icon */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded flex items-center justify-center shrink-0"
            style={{
              background: "var(--accent-amber-bg)",
              border: "1px solid var(--accent-amber)",
            }}
          >
            <Icon size={13} style={{ color: "var(--accent-amber)" }} />
          </div>
          <span
            className="text-[9px] font-mono uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            Step {index + 1}
          </span>
        </div>

        {/* Label */}
        <p
          className="text-sm font-bold leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          {step.label}
        </p>

        {/* Description */}
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {step.description}
        </p>
      </motion.div>

      {/* Arrow connector — hidden on mobile after last item */}
      {!isLast && (
        <div className="flex md:items-center justify-center px-1 py-2 md:py-0 md:px-2">
          <ArrowRight
            size={14}
            className="rotate-90 md:rotate-0"
            style={{ color: "var(--border)" }}
          />
        </div>
      )}
    </div>
  );
}

/**
 * Visual ML pipeline diagram — step-by-step card flow with arrow connectors.
 * Stacks vertically on mobile, horizontal on desktop (wraps if > 3 steps).
 */
export default function MLPipeline({ steps }: MLPipelineProps) {
  return (
    <motion.div variants={item} className="flex flex-col gap-4">
      <span
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: "var(--text-secondary)" }}
      >
        ML Pipeline
      </span>

      <div className="flex flex-col md:flex-row md:items-start flex-wrap gap-0">
        {steps.map((step, i) => (
          <PipelineStepCard key={step.label} step={step} index={i} total={steps.length} />
        ))}
      </div>
    </motion.div>
  );
}
