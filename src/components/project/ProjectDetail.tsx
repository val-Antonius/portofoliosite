"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import { track } from "@vercel/analytics";
import { Project } from "../../types";
import WebProjectDetail from "./detail/WebProjectDetail";
import DSMLProjectDetail from "./detail/DSMLProjectDetail";
import FloatingBackButton from "../ui/FloatingBackButton";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const SELECTED_IDS = ["xflair-nutmeg-prediction", "credit-scoring-umkm", "whser-laundry-platform"];

/**
 * ProjectDetail — category-aware dispatcher.
 *
 * Handles:
 *  - Floating back button + header (timeline, title) — common to all layouts
 *  - Route to WebProjectDetail  for category === 'web'
 *  - Route to DSMLProjectDetail for category === 'ds-ml'
 */
export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const isSelected = SELECTED_IDS.includes(project.id);
  const [showMobileBack, setShowMobileBack] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerMobileButton = () => {
    setShowMobileBack(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowMobileBack(false);
    }, 1500);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      triggerMobileButton();
    };

    const handleTouch = () => {
      triggerMobileButton();
    };

    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }

    // Capture touch events on window to detect any touch on the mobile screen
    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative px-6 md:pl-24 md:pr-12 pb-16 flex flex-col h-full overflow-hidden">
      {/* Floating Back Button */}
      <FloatingBackButton onClick={onBack} showMobile={showMobileBack} />

      {/* ── Project header ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="mb-6 pt-0"
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
            {project.category === "Data-BI" ? "Data - BI" : "Web Engineering"}
          </span>
        </div>

        {/* Title */}
        <h2
          className="font-display leading-tight"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)", color: "var(--text-primary)" }}
        >
          {project.title}
        </h2>
      </motion.div>

      {/* ── Case Study Action Box (Only for Selected Projects) ──────────────── */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mb-8 p-4 rounded-lg border border-amber/30 bg-amber-bg/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 rounded bg-amber/10 border border-amber/20 text-amber mt-0.5 shrink-0">
              <BookOpen size={18} />
            </div>
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                Case Study Booklet (2026)
              </h4>
              <p className="text-xs text-secondary mt-0.5 leading-relaxed">
                Read or download the <span className="text-amber font-semibold">comprehensive case study</span> for this project.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 items-center">
            {/* Read HTML buttons */}
            <div className="flex items-center rounded-md border border-border bg-card overflow-hidden">
              <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-secondary border-r border-border bg-canvas select-none">
                Read
              </span>
              <a
                href="/case_study.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("read_case_study", { language: "id", projectId: project.id })}
                className="px-2.5 py-1 text-[10px] font-mono font-medium text-secondary hover:text-amber hover:bg-amber-bg/20 transition-all border-r border-border/40"
              >
                ID
              </a>
              <a
                href="/case_study_english.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("read_case_study", { language: "en", projectId: project.id })}
                className="px-2.5 py-1 text-[10px] font-mono font-medium text-secondary hover:text-amber hover:bg-amber-bg/20 transition-all"
              >
                EN
              </a>
            </div>

            {/* Download PDF buttons */}
            <div className="flex items-center rounded-md border border-border bg-card overflow-hidden">
              <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider text-secondary border-r border-border bg-canvas select-none">
                Download PDF
              </span>
              <a
                href="/Case Study 2026 - Data Analyst & Business Intelligence.pdf"
                download="Case Study 2026 - Data Analyst & Business Intelligence.pdf"
                onClick={() => track("download_case_study", { language: "id", projectId: project.id })}
                className="px-2.5 py-1 text-[10px] font-mono font-medium text-secondary hover:text-amber hover:bg-amber-bg/20 transition-all border-r border-border/40"
              >
                ID
              </a>
              <a
                href="/Case Study 2026 - Data Analyst & Business Intelligence - eng.pdf"
                download="Case Study 2026 - Data Analyst & Business Intelligence - eng.pdf"
                onClick={() => track("download_case_study", { language: "en", projectId: project.id })}
                className="px-2.5 py-1 text-[10px] font-mono font-medium text-secondary hover:text-amber hover:bg-amber-bg/20 transition-all"
              >
                EN
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── Content area (scrollable) ─────────────────────────────────────── */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto hidden-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.category === "Data-BI" ? (
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
