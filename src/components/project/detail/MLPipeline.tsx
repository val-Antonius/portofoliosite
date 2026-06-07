"use client";

import { motion } from "framer-motion";
import {
  Database,
  GitBranch,
  Cpu,
  BarChart2,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import { PipelineStep } from "../../../types";

const highlightText = (text: string) => {
  if (!text) return "";
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={index} className="text-amber font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

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

/**
 * Visual ML pipeline diagram.
 *
 * Desktop layout — two-row structure:
 *   Row 1: [Step card] ──→── [Step card] ──→── ... (arrows on the connecting line)
 *   Row 2: step labels/descriptions are already inside the cards
 *
 * The connector arrows sit between cards in a separate flex row that aligns
 * with the center of each card icon — giving a clear left-to-right data flow.
 *
 * Mobile layout — single column, arrows pointing downward.
 */
export default function MLPipeline({ steps }: MLPipelineProps) {
  return (
    <motion.div variants={item} className="flex flex-col gap-4">
      {/* Section label */}
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-[10px] font-mono uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}
        >
          Pipeline
        </span>
        <span
          className="text-[10px] font-mono"
          style={{ color: "var(--text-secondary)" }}
        >
          {steps.length} steps
        </span>
      </div>

      {/* ── Desktop: horizontal flow ── */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Cards row */}
          <div
            className="relative grid gap-3"
            style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
          >
            {steps.map((step, i) => {
              const Icon = ICON_MAP[step.icon] ?? Database;

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative flex flex-col group"
                >
                  {/* Icon badge */}
                  <div className="flex flex-col items-center mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center z-10 relative transition-all duration-300 border-2 bg-canvas ${
                        i === 0
                          ? "border-amber shadow-[0_0_0_3px_var(--accent-amber-bg)] text-amber"
                          : "border-border text-secondary group-hover:border-amber group-hover:scale-110"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={`transition-colors duration-300 ${
                          i === 0 ? "text-amber" : "text-secondary group-hover:text-amber"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Card body */}
                  <div
                    className="flex-1 rounded-lg p-3 flex flex-col gap-1.5 transition-all duration-300 border bg-card border-border group-hover:border-amber/60 group-hover:bg-amber-bg/15 group-hover:-translate-y-1 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-[8px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded"
                        style={{
                          background: "var(--accent-amber-bg)",
                          color: "var(--accent-amber)",
                          border: "1px solid var(--accent-amber)",
                          opacity: 0.8,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      className="text-xs font-bold leading-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {step.label}
                    </p>
                    <p
                      className="text-[11px] leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {highlightText(step.description)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical flow ── */}
      <div className="flex flex-col gap-0 md:hidden">
        {steps.map((step, i) => {
          const Icon = ICON_MAP[step.icon] ?? Database;
          const isLast = i === steps.length - 1;

          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex gap-3"
            >
              {/* Left track: icon + vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "var(--accent-amber-bg)",
                    border: "1px solid var(--accent-amber)",
                  }}
                >
                  <Icon size={14} style={{ color: "var(--accent-amber)" }} />
                </div>
                {!isLast && (
                  <div
                    className="w-px flex-1 my-1"
                    style={{ background: "var(--border)", minHeight: 20 }}
                  />
                )}
              </div>

              {/* Right: card */}
              <div
                className="flex-1 rounded-lg p-3 mb-3 flex flex-col gap-1"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-[9px] font-mono uppercase tracking-widest"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Step {i + 1}
                </span>
                <p
                  className="text-sm font-bold leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.label}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {highlightText(step.description)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
