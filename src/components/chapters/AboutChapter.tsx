"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Project } from "@/types";
import SkillToken from "@/components/about/SkillToken";
import MarginAnnotation from "@/components/about/MarginAnnotation";

// ─── Skill → Project ID mapping ──────────────────────────────────────────────
// Reordered to reflect BI/Data Analyst positioning:
// data stack first, web engineering as supporting capability.

const SKILL_PROJECT_IDS: Record<string, string[]> = {
  "Python": ["xflair-nutmeg-prediction", "credit-scoring-umkm"],
  "SQL": ["whser-laundry-platform", "vision-plus"],
  "XGBoost / SHAP": ["xflair-nutmeg-prediction", "credit-scoring-umkm"],
  "Tableau": ["whser-laundry-platform"],
  "Machine Learning": ["xflair-nutmeg-prediction", "credit-scoring-umkm"],
  "TypeScript": ["whser-laundry-platform"],
  "React": ["whser-laundry-platform"],
  "REST API Design": ["vision-plus", "whser-laundry-platform"],
  "System Architecture": ["sikumelawit", "vision-plus", "whser-laundry-platform"],
  "IoT Integration": ["sikumelawit"],
  "Figma": ["sikumelawit"],
};

type ProjectPreview = Pick<Project, "id" | "title" | "type" | "category">;

function resolveProjects(skillName: string): ProjectPreview[] {
  const ids = SKILL_PROJECT_IDS[skillName] ?? [];
  return ids
    .map((id) => portfolioData.projects.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined)
    .map(({ id, title, type, category }) => ({ id, title, type, category }));
}

function T({ n }: { n: string }) {
  return <SkillToken name={n} projects={resolveProjects(n)} />;
}

// ─── Mobile-only inline annotation chip ──────────────────────────────────────

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
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutChapter() {
  return (
    <div className="h-full overflow-y-auto hidden-scrollbar px-4 md:px-12 pt-8 md:pt-12 pb-16 md:pb-28">
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
            REV 16
          </span>
        </motion.div>

        {/* ── Two-column layout (desktop) / single-column (mobile) ─────────── */}
        <div className="flex flex-col md:flex-row gap-0 md:items-start">

          {/* ════════════════════════════════════════════════════════════════
              LEFT COLUMN — Main Manuscript
              ════════════════════════════════════════════════════════════════ */}
          <motion.div
            variants={stagger}
            className="flex-[3] pr-0 md:pr-10 space-y-10 md:space-y-14 min-w-0"
          >

            {/* ── § 01 · THE AXIOM ──────────────────────────────────────── */}
            <motion.section variants={fadeUp}>
              <div className="flex items-baseline gap-2 mb-4 md:mb-5">
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-secondary">01</span>
                <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-amber uppercase">
                  · The Axiom
                </span>
              </div>

              <p className="text-primary/80 leading-relaxed text-[14px] md:text-[15px] mb-5 md:mb-6">
                <span className="text-amber font-semibold">Data is only as useful as the decision it enables.</span> My instinct,
                built across every project I have worked on, is that <span className="text-amber font-semibold">most analysis
                fails not at the technical layer — but at the last mile</span>: when a
                finding cannot be explained to the person who needs to act on it,
                it stops being analysis and becomes noise. I build toward that last
                mile from the first line. Every model I train, every dashboard I
                design, is held to one question: <span className="text-amber font-semibold">can the person who needs this
                actually use it?</span>
              </p>

              <div className="ml-3 md:ml-5 pl-4 md:pl-5 border-l-2 border-amber/25">
                <p className="text-primary/45 italic text-[12px] md:text-[13px] leading-relaxed font-display">
                  "An insight that cannot be explained to its audience has not yet
                  been finished."
                </p>
              </div>

              <MobileAnnotation notes={[
                { label: "north star", text: "decisions, not dashboards" },
                { label: "last mile", text: "explainability is not optional" },
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

              <div className="space-y-4 md:space-y-5 text-primary/80 leading-relaxed text-[14px] md:text-[15px]">

                {/* Data layer paragraph */}
                <div>
                  The data layer is where most of my work lives.{" "}
                  <T n="Python" /> is the primary instrument — fast for
                  exploration, rigorous in production. <T n="SQL" /> sits
                  underneath everything: structured, verifiable, honest about
                  what the data actually contains. When the problem calls for
                  prediction, I reach for <T n="XGBoost / SHAP" /> — not
                  because it is fashionable, but because it can be made to
                  explain its own reasoning, and an auditable model is worth
                  more than an accurate one that no one trusts.
                </div>

                {/* Output layer paragraph */}
                <div>
                  Before any output reaches a stakeholder, <T n="Tableau" />{" "}
                  or a custom dashboard translates the numbers into something a
                  non-technical reader can navigate without a guide. That
                  translation is not decoration — it is the product. When a
                  project demands a full operational system, I build the
                  surrounding layer in <T n="TypeScript" /> and{" "}
                  <T n="React" />, with <T n="SQL" /> at the persistence
                  boundary. The web layer serves the data layer, not the other
                  way around.
                </div>

              </div>

              <MobileAnnotation notes={[
                { label: "stack", text: "Python · SQL · XGBoost · SHAP · Tableau" },
                { label: "principle", text: "the web layer serves the data layer" },
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

              <p className="text-primary/80 leading-relaxed text-[14px] md:text-[15px] mb-4 md:mb-5">
                Outside of work I <span className="text-amber font-semibold">write poetry and read fiction</span> — two habits
                that have, unexpectedly, made me a better analyst. Poetry is
                the <span className="text-amber font-semibold">discipline of saying something precise with as few words as
                possible</span>, and knowing which detail to leave out. That instinct
                transfers directly to the work of building a dashboard or
                writing an executive summary: <span className="text-amber font-semibold">most of what you know should not
                be in the final output</span>. Fiction taught me to <span className="text-amber font-semibold">read for what is
                not being said</span> — a skill that proves useful whenever a
                stakeholder brief contains assumptions nobody thought to write
                down.
              </p>

              <p className="text-primary/80 leading-relaxed text-[14px] md:text-[15px]">
                The rest of the time: strong coffee, and long walks without a
                destination decided in advance.
              </p>

              <MobileAnnotation notes={[
                { label: "off clock", text: "poetry · fiction · long walks" },
                { label: "transfer", text: "knowing what to leave out" },
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
                label="north star"
                text="decisions, not dashboards"
                className="border-t-0 pt-0"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="last mile"
                text="explainability is not optional"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="stack"
                text="Python · SQL · XGBoost · SHAP · Tableau"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="principle"
                text="the web layer serves the data layer"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="off clock"
                text="poetry · fiction · long walks"
              />
            </motion.div>

            <motion.div variants={fadeUp}>
              <MarginAnnotation
                label="transfer"
                text="knowing what to leave out"
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