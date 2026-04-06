"use client";

import { motion } from "framer-motion";
import SkillBarChart from "../ui/SkillBarChart";
import { portfolioData } from "../../data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function SkillsChapter() {
  const categories = Array.from(new Set(portfolioData.skills.map(s => s.category)));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="px-6 md:px-12 pb-12 h-full flex flex-col pt-0 overflow-y-auto hidden-scrollbar"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        <motion.div variants={itemAnim} className="panel h-full flex flex-col min-h-[400px]">
          <div className="text-[11px] uppercase tracking-widest text-secondary mb-8">Skill Proficiency</div>
          <div className="flex-1">
             <SkillBarChart data={portfolioData.skills} />
          </div>
        </motion.div>

        <motion.div variants={itemAnim} className="flex flex-col gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="panel">
              <div className="text-[11px] uppercase tracking-widest text-secondary mb-4">{cat}</div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.filter(s => s.category === cat).map(skill => (
                  <span key={skill.name} className="px-3 py-1.5 bg-canvas font-mono text-[11px] rounded-md border border-border text-primary">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
