"use client";

import { motion } from "framer-motion";
import { Project } from "../../../types";
import MetricCard from "../../ui/MetricCard";
import DarkSummaryBox from "./DarkSummaryBox";
import MLPipeline from "./MLPipeline";
import CompetencyBadges from "./CompetencyBadges";

interface DSMLProjectDetailProps {
  project: Project;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/**
 * Layout B — Data Science / ML lab report style.
 *
 * Sections (top → bottom):
 *   1. Abstract Box (dark) + Key Results (metric cards)  [two-column]
 *   2. ML Pipeline Diagram
 *   3. Technical Findings (impact bullets as "findings")
 *   4. Tech Stack by layer (Competency Badges)
 */
export default function DSMLProjectDetail({ project }: DSMLProjectDetailProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-10"
    >
      {/* ── 1. Abstract + Key Results ─────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Abstract (wider) */}
        <div className="md:col-span-3">
          <DarkSummaryBox
            tagline={project.tagline ?? project.description}
            summary={project.problem ?? project.description}
            type={project.type}
          />
        </div>

        {/* Key Results — metric cards */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <span
            className="text-[10px] font-mono uppercase tracking-widest mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Key Results
          </span>
          <div className="flex flex-col gap-3 flex-1">
            {project.metrics.map((metric, i) => (
              <motion.div variants={item} key={i} className="flex-1">
                <MetricCard
                  label={metric.label}
                  value={Number(metric.value)}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  isPositive={metric.isPositive}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. ML Pipeline Diagram ───────────────────────────────────────── */}
      {project.pipelineSteps && project.pipelineSteps.length > 0 && (
        <MLPipeline steps={project.pipelineSteps} />
      )}

      {/* ── 3. Approach Narrative ────────────────────────────────────────── */}
      {project.approach && (
        <motion.div
          variants={item}
          className="rounded-lg p-6"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <span
            className="block text-[10px] font-mono uppercase tracking-widest mb-3"
            style={{ color: "var(--accent-amber)" }}
          >
            Methodology
          </span>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {project.approach}
          </p>
        </motion.div>
      )}

      {/* ── 4. Findings + Tech Stack ─────────────────────────────────────── */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-6"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {/* Findings (impact bullets) */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            Findings
          </span>
          <ul className="flex flex-col gap-3">
            {project.impact.map((finding, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: "var(--text-primary)" }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ background: "var(--accent-green)" }}
                />
                {finding}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack by layer */}
        {project.techStackCategorized && project.techStackCategorized.length > 0 && (
          <div className="md:col-span-2">
            <CompetencyBadges techStackCategorized={project.techStackCategorized} />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
