"use client";

import { motion } from "framer-motion";
import { Project } from "../../../types";
import DarkSummaryBox from "./DarkSummaryBox";
import MLPipeline from "./MLPipeline";
import CompetencyBadges from "./CompetencyBadges";
import { useCountUp } from "../../../hooks/useCountUp";

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

import MetricCard from "../../ui/MetricCard";
/**
 * Layout B — Data Science / ML lab report style.
 *
 * Sections (top → bottom):
 *   1. Abstract Box (dark) + compact Key Results panel  [two-column, height-matched]
 *   2. ML Pipeline Diagram  [full-width, visual flow]
 *   3. Methodology narrative card
 *   4. Findings (impact bullets) + Competency Badges  [two-column]
 */
export default function DSMLProjectDetail({ project }: DSMLProjectDetailProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-10"
    >
      {/* ── 1. Abstract + Key Results ──────────────────────────────────────── */}
      <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-5 gap-5 items-start">
        {/* Abstract (wider) */}
        <div className="md:col-span-3">
          <DarkSummaryBox
            tagline={project.tagline ?? project.description}
            summary={project.problem ?? project.description}
            type={project.type}
            link={project.link}
          />
        </div>

        {/* Key Results — compact metric tiles, not full-height cards */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <span
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            Key Results
          </span>
          <div className="grid grid-cols-1 gap-2">
            {project.metrics.map((metric, i) => (
              <MetricCard
                key={i}
                label={metric.label}
                value={Number(metric.value)}
                prefix={metric.prefix}
                suffix={metric.suffix}
                isPositive={metric.isPositive}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── 2. ML Pipeline Diagram ─────────────────────────────────────────── */}
      {project.pipelineSteps && project.pipelineSteps.length > 0 && (
        <MLPipeline steps={project.pipelineSteps} />
      )}

      {/* ── 3. Methodology Narrative ───────────────────────────────────────── */}
      {project.approach && (
        <motion.div
          variants={item}
          className="rounded-lg p-5 flex flex-col gap-3"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] font-mono uppercase tracking-widest"
              style={{ color: "var(--accent-amber)" }}
            >
              Methodology
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
            {project.approach}
          </p>
        </motion.div>
      )}

      {/* ── 4. Findings + Tech Stack ───────────────────────────────────────── */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-6"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {/* Findings */}
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

        {/* Tech stack */}
        {project.techStackCategorized && project.techStackCategorized.length > 0 && (
          <div className="md:col-span-2">
            <CompetencyBadges techStackCategorized={project.techStackCategorized} />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
