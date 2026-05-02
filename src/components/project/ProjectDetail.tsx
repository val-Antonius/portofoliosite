"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Project } from "../../types";
import WebProjectDetail from "./detail/WebProjectDetail";
import DSMLProjectDetail from "./detail/DSMLProjectDetail";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

/**
 * ProjectDetail — category-aware dispatcher.
 *
 * Handles:
 *  - Back button + header (timeline, title) — common to all layouts
 *  - Route to WebProjectDetail  for category === 'web'
 *  - Route to DSMLProjectDetail for category === 'ds-ml'
 *
 * Scroll: the parent WorkChapter container manages overflow — this component
 * uses `flex flex-col h-full` so it fills available space without adding its
 * own scroll context, keeping scroll behaviour consistent across all chapters.
 */
export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="px-6 md:px-12 pb-16 flex flex-col h-full">
      {/* ── Back button ──────────────────────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onBack}
        className="flex items-center gap-2 text-sm w-fit mb-6 cursor-pointer transition-colors"
        style={{ color: "var(--text-secondary)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-amber)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
      >
        <ArrowLeft size={16} />
        Back to Backlog
      </motion.button>

      {/* ── Project header ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mb-8"
      >
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className="text-[11px] font-mono uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.timeline}
          </span>
          <div
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--border)" }}
          />
          <span
            className="text-[11px] font-sans uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.category === "ds-ml" ? "Data Science / ML" : "Web Engineering"}
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-display leading-tight"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", color: "var(--text-primary)" }}
        >
          {project.title}
        </h2>
      </motion.div>

      {/* ── Content area (scrollable) ─────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto hidden-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.category === "ds-ml" ? (
              <DSMLProjectDetail project={project} />
            ) : (
              <WebProjectDetail project={project} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
