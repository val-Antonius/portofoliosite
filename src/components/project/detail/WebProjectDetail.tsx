"use client";

import { motion } from "framer-motion";
import { Project } from "../../../types";
import MetricCard from "../../ui/MetricCard";
import DarkSummaryBox from "./DarkSummaryBox";
import RationaleGrid from "./RationaleGrid";
import MockupGallery from "./MockupGallery";
import CompetencyBadges from "./CompetencyBadges";

interface WebProjectDetailProps {
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
 * Layout A — Web Engineering case study.
 *
 * Sections (top → bottom):
 *   1. Dark Summary Box + Metric Cards  (two-column on md+)
 *   2. Mockup Gallery
 *   3. Rationale Grid (Problem | Approach | Outcome)
 *   4. Impact Bullets + Competency Badges  (two-column on md+)
 */
export default function WebProjectDetail({ project }: WebProjectDetailProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-10"
    >
      {/* ── 1. Summary + Metrics ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Dark summary (wider) */}
        <div className="md:col-span-3">
          <DarkSummaryBox
            tagline={project.tagline ?? project.description}
            summary={project.description}
            type={project.type}
          />
        </div>

        {/* Metric cards stacked */}
        <div className="md:col-span-2 flex flex-col gap-4">
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

      {/* ── 2. Mockup Gallery ────────────────────────────────────────────── */}
      <MockupGallery
        images={project.mockupImages ?? []}
        projectTitle={project.title}
      />

      {/* ── 3. Rationale Grid ────────────────────────────────────────────── */}
      {project.problem && project.approach && project.outcome && (
        <div className="flex flex-col gap-4">
          <motion.span
            variants={item}
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            Case Study
          </motion.span>
          <RationaleGrid
            problem={project.problem}
            approach={project.approach}
            outcome={project.outcome}
          />
        </div>
      )}

      {/* ── 4. Impact + Competency Badges ────────────────────────────────── */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-6"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {/* Impact bullets */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <span
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            Impact
          </span>
          <ul className="flex flex-col gap-3">
            {project.impact.map((imp, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
                <div
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ background: "var(--accent-amber)" }}
                />
                {imp}
              </li>
            ))}
          </ul>
        </div>

        {/* Competency badges */}
        {project.techStackCategorized && project.techStackCategorized.length > 0 && (
          <div className="md:col-span-2">
            <CompetencyBadges techStackCategorized={project.techStackCategorized} />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
