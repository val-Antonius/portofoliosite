"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Project } from "@/types";
import SkillToken from "@/components/about/SkillToken";
import MarginAnnotation from "@/components/about/MarginAnnotation";

// ─── Skill → Project ID mapping ──────────────────────────────────────────────
// Edit this map whenever projects change. One skill can reference many projects;
// one project can be referenced by many skills — intentional cross-linking.

const SKILL_PROJECT_IDS: Record<string, string[]> = {
  "JavaScript":          ["vision-plus"],
  "TypeScript":          ["smart-dashboard"],
  "Python":              ["scoring-credit"],
  "SQL":                 ["vision-plus"],
  "React":               ["smart-dashboard"],
  "Node.js":             ["smart-dashboard"],
  "REST API Design":     ["vision-plus", "smart-dashboard"],
  "Figma":               ["sikumelawit"],
  "System Architecture": ["sikumelawit"],
  "Machine Learning":    ["scoring-credit"],
  "XGBoost / SHAP":      ["scoring-credit"],
  "IoT Integration":     ["sikumelawit"],
};

type ProjectPreview = Pick<Project, "id" | "title" | "type" | "category">;

function resolveProjects(skillName: string): ProjectPreview[] {
  const ids = SKILL_PROJECT_IDS[skillName] ?? [];
  return ids
    .map((id) => portfolioData.projects.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined)
    .map(({ id, title, type, category }) => ({ id, title, type, category }));
}

/** Convenience wrapper so inline JSX stays readable */
function T({ n }: { n: string }) {
  return <SkillToken name={n} projects={resolveProjects(n)} />;
}

// ─── Mobile-only inline annotation chip ──────────────────────────────────────
// Replaces the right-column margin notes on small screens.
// Appears below each section, styled like a border-l comment to echo the
// pull-quote aesthetic and preserve the "annotated document" identity.

function MobileAnnotation({ notes }: { notes: Array<{ label: string; text: string }> }) {
  return (
    <div className="mt-5 flex flex-col gap-2 md:hidden">
      {notes.map(({ label, text }) => (
        <div key={label} className="flex items-start gap-2 pl-3 border-l border-amber/25">
          <span className="font-mono text-[9px] tracking-widest text-amber shrink-0">
            → {label}
          </span>
          <span className="font-mono text-[9px] text-secondary leading-snug">{text}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Animation variants ───────────────────────────────────────────────────────

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutChapter() {
  return (
    <div className="px-4 md:px-12 pb-16 md:pb-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-5xl"
      >

        {/* ── Document header ───────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-between mb-6 md:mb-10 pb-2 border-b border-border"
        >
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-secondary">
            Field Notes — Antonius Valentino
          </span>
          <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-secondary">
            REV 15
          </span>
        </motion.div>

        {/* ── Two-column layout (desktop) / single-column (mobile) ─────────── */}
        <div className="flex flex-col md:flex-row gap-0 md:items-start">

          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN — Main Manuscript
              Desktop: ~75% width | Mobile: full width
              ════════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={stagger}
            className="flex-[3] pr-0 md:pr-10 space-y-10 md:space-y-14 min-w-0"
          >

            {/* ── § 01 · THE AXIOM ──────────────────────────────────────── */}
            <motion.section variants={fadeUp}>
              {/* Section label */}
              <div className="flex items-baseline gap-2 mb-4 md:mb-5">
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-secondary">01</span>
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-amber uppercase">
                  · The Axiom
                </span>
              </div>

              {/* === EDITABLE: Main paragraph for § 01 ===
                  Change the body text here whenever the methodology narrative needs updating. */}
              <p className="text-primary/80 leading-relaxed text-[14px] md:text-[15px] mb-5 md:mb-6">
                Every application starts as chaos — messy requirements, competing
                priorities, and business logic that evolves faster than the
                documentation. My approach is to treat that entropy as a design
                input, not an obstacle. I isolate the complexity early, build
                strict data contracts at the boundaries, and write components that
                don't complain when the underlying model changes. Order imposed at
                the contract layer makes everything downstream predictable.
              </p>

              {/* === EDITABLE: Pull-quote for § 01 ===
                  This is the accent annotation that punctuates the main argument. */}
              <div className="ml-3 md:ml-5 pl-4 md:pl-5 border-l-2 border-amber/25">
                <p className="text-primary/45 italic text-[12px] md:text-[13px] leading-relaxed font-display">
                  "A system is only as good as its foundational constraints —
                  the rest is execution detail."
                </p>
              </div>

              {/* Mobile-only: inline annotation notes for this section */}
              <MobileAnnotation notes={[
                { label: "perf",   text: "speed is a feature, not a checkbox" },
                { label: "pred",   text: "predictable > clever, always" },
              ]} />
            </motion.section>

            {/* ── § 02 · TOOLS IN USE ───────────────────────────────────── */}
            <motion.section variants={fadeUp}>
              <div className="flex items-baseline gap-2 mb-4 md:mb-5">
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-secondary">02</span>
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-amber uppercase">
                  · Tools in Use
                </span>
              </div>

              {/* Narrative paragraphs with inline SkillTokens */}
              <div className="space-y-4 md:space-y-5 text-primary/80 leading-relaxed text-[14px] md:text-[15px]">

                {/* Web layer paragraph */}
                <div>
                  For the web layer, I work primarily with <T n="JavaScript" /> for
                  raw flexibility and <T n="TypeScript" /> when team-scale type
                  contracts matter — the compiler as a forcing function for clear
                  thinking. <T n="React" /> handles the composable view layer;{" "}
                  <T n="Node.js" /> paired with <T n="REST API Design" /> defines
                  the boundaries between client and server. Persistence lives
                  in <T n="SQL" />: structured, verifiable, slow to lie.
                </div>

                {/* Data & intelligence paragraph */}
                <div>
                  When the problem shifts from web to intelligence,{" "}
                  <T n="Python" /> becomes the language of choice — fast to
                  prototype, serious in production. When interpretability is a
                  requirement and not a luxury: <T n="Machine Learning" />, and
                  specifically <T n="XGBoost / SHAP" />, to build models that
                  explain their own reasoning — the scorecard a lender can
                  actually read, the prediction an auditor can defend. Before
                  any of this reaches a screen, <T n="Figma" /> serves as the
                  thinking tool — the whiteboard that saves three sprint cycles
                  of UI debate.
                </div>

                {/* Systems paragraph */}
                <div>
                  At the system level, <T n="System Architecture" /> is not a
                  deliverable — it is a discipline. Define the boundaries before
                  writing a single line; let structure constrain the chaos. When
                  the problem escapes the browser and lives at the hardware
                  edge, <T n="IoT Integration" /> closes the loop between raw
                  sensor data and software decision.
                </div>
              </div>

              {/* Mobile-only: inline annotation notes for this section */}
              <MobileAnnotation notes={[
                { label: "domains", text: "web · data · systems" },
                { label: "method",  text: "constraint-first design" },
              ]} />
            </motion.section>

            {/* ── § 03 · OFF THE CLOCK ──────────────────────────────────── */}
            <motion.section variants={fadeUp}>
              <div className="flex items-baseline gap-2 mb-4 md:mb-5">
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-secondary">03</span>
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-amber uppercase">
                  · Off the Clock
                </span>
              </div>

              {/* === EDITABLE: Off the clock paragraph ===
                  Personal narrative — no skill tokens. Ends with the chaos/order callback. */}
              <p className="text-primary/80 leading-relaxed text-[14px] md:text-[15px]">
                Outside the terminal, I tend toward things that reward deliberate
                attention: a quiet morning with strong coffee and an architecture
                paper, a long walk without a destination mapped, or an afternoon
                spent learning how something works simply because it is
                interesting — not because it is on a roadmap. I read widely,
                across disciplines, and I have found that the most useful
                engineering instincts arrive from the strangest directions.
                Somehow, every form of deliberate chaos I encounter outside of
                work ends up informing some future instance of order inside it.
              </p>

              {/* Mobile-only: inline annotation notes + status for this section */}
              <MobileAnnotation notes={[
                { label: "output", text: "ship boring code. debug less." },
              ]} />

              {/* Mobile-only: status indicator */}
              <div className="mt-5 md:hidden flex items-center gap-2 pl-3 border-l border-border">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    background: "var(--accent-green)",
                    boxShadow: "0 0 5px var(--accent-green)",
                  }}
                />
                <span className="font-mono text-[9px] text-secondary tracking-widest uppercase">
                  Open to work
                </span>
              </div>
            </motion.section>

          </motion.div>
          {/* end LEFT column */}

          {/* ════════════════════════════════════════════════════════════════
              RIGHT COLUMN — Margin Annotations (~25%)
              Hidden on mobile — replaced by MobileAnnotation strips above.
              ════════════════════════════════════════════════════════════════ */}
          <motion.aside
            variants={stagger}
            className="hidden md:flex flex-col gap-5 flex-1 pl-7 border-l border-border min-w-[155px] max-w-[210px] sticky top-0"
          >
            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="perf"
                text="speed is a feature, not a checkbox"
                className="border-t-0 pt-0"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="pred"
                text="predictable > clever, always"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="domains"
                text="web · data · systems"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="method"
                text="constraint-first design"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="output"
                text="ship boring code. debug less."
              />
            </motion.div>

            {/* ── Status indicator ────────────────────────────────────── */}
            <motion.div
              variants={fadeUp}
              className="mt-6 border-t border-border pt-4"
            >
              <div className="font-mono text-[10px] tracking-widest text-amber mb-2">
                → status
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{
                    background: "var(--accent-green)",
                    boxShadow: "0 0 6px var(--accent-green)",
                  }}
                />
                <span className="font-mono text-[11px] text-primary/65">
                  Open to work
                </span>
              </div>
            </motion.div>

          </motion.aside>
          {/* end RIGHT column */}

        </div>
      </motion.div>
    </div>
  );
}
