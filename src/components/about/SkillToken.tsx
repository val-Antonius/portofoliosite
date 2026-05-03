"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProjectPreview = Pick<Project, "id" | "title" | "type" | "category">;

interface SkillTokenProps {
  name: string;
  projects: ProjectPreview[];
}

// ─── Category accent colours ──────────────────────────────────────────────────

const CATEGORY_DOT: Record<string, string> = {
  web:     "var(--accent-amber)",
  "ds-ml": "var(--accent-green)",
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function SkillToken({ name, projects }: SkillTokenProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  // Close when user taps/clicks anywhere outside the token (mobile support)
  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  return (
    <span
      ref={wrapRef}
      className="relative inline-block align-baseline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* ── Chip ──────────────────────────────────────────────────────────── */}
      <span
        onClick={() => setOpen((v) => !v)}
        className={`
          inline-flex items-center px-2 py-0.5 mx-0.5
          font-mono text-[11px] tracking-wide
          border rounded-sm cursor-pointer select-none
          transition-all duration-200
          ${open
            ? "bg-amber/15 border-amber/50 text-amber"
            : "bg-amber-bg border-amber/20 text-secondary"
          }
        `}
      >
        {name}
      </span>

      {/* ── Popover ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.14 }}
            className="absolute left-0 top-full mt-2 z-50 w-[220px] max-w-[80vw]"
          >
            <div
              className="border border-border/60 rounded-md overflow-hidden shadow-lg"
              style={{ background: "var(--bg-card)" }}
            >
              {/* Popover header */}
              <div
                className="px-3 py-1.5 border-b border-border/40"
                style={{ background: "var(--bg-canvas)" }}
              >
                <span className="font-mono text-[9px] uppercase tracking-widest text-secondary">
                  used in
                </span>
              </div>

              {/* Project list */}
              <ul className="py-1">
                {projects.map((p) => (
                  <li key={p.id} className="flex items-start gap-2.5 px-3 py-2">
                    <span
                      className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{
                        background:
                          CATEGORY_DOT[p.category ?? "web"] ??
                          "var(--accent-amber)",
                      }}
                    />
                    <div className="flex flex-col min-w-0">
                      <span className="text-[12px] text-primary leading-tight">
                        {p.title}
                      </span>
                      <span className="text-[10px] text-secondary font-mono mt-0.5">
                        {p.type}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
