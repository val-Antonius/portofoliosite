"use client";

import { motion } from "framer-motion";
import { TechCategory } from "../../../types";

interface CompetencyBadgesProps {
  techStackCategorized: TechCategory[];
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/**
 * Premium tech stack badges grouped by category.
 * Each category gets a labelled row of pill badges.
 */
export default function CompetencyBadges({ techStackCategorized }: CompetencyBadgesProps) {
  return (
    <motion.div variants={item} className="flex flex-col gap-5">
      <span
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: "var(--text-secondary)" }}
      >
        Competencies
      </span>

      <div className="flex flex-col gap-4">
        {techStackCategorized.map(({ category, items }) => (
          <div key={category} className="flex flex-col gap-2">
            {/* Category label */}
            <span
              className="text-[9px] font-mono uppercase tracking-widest"
              style={{ color: "var(--accent-amber)" }}
            >
              {category}
            </span>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-full"
                  style={{
                    background: "var(--bg-canvas)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
