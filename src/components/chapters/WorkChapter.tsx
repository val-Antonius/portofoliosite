"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { usePortfolioContext } from "../../context/PortfolioContext";
import ProjectCard from "../project/ProjectCard";
import ProjectDetail from "../project/ProjectDetail";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function WorkChapter() {
  const { selectedProjectId, setSelectedProjectId } = usePortfolioContext();
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'WEB' | 'DS/ML'>('ALL');

  const selectedProject = portfolioData.projects.find(p => p.id === selectedProjectId);

  const categories = [
    { id: 'ALL', label: 'ALL' },
    { id: 'WEB', label: 'WEB ENGINEERING' },
    { id: 'DS/ML', label: 'DATA SCIENCE / ML' }
  ] as const;

  const filteredProjects = portfolioData.projects.filter(p => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'WEB') return p.category === 'web';
    if (activeCategory === 'DS/ML') return p.category === 'ds-ml';
    return true;
  });

  return (
    <div className="h-full relative overflow-hidden flex flex-col items-stretch">
       <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col md:flex-row h-full overflow-hidden pb-12 md:pb-0"
          >
            {/* Mobile Horizontal Chips */}
            <div className="md:hidden w-full px-6 mb-6 overflow-x-auto hidden-scrollbar flex items-center gap-2 shrink-0">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest transition-colors border ${
                    activeCategory === cat.id
                      ? "bg-primary text-canvas border-primary font-bold"
                      : "bg-canvas text-secondary border-border hover:text-primary hover:border-secondary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Desktop Vertical Sidebar */}
            <div className="hidden md:flex flex-col pl-12 pr-6 pt-2 shrink-0">
              <div className="flex flex-col gap-8">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex flex-col items-center gap-4 group"
                  >
                    <span 
                      className={`text-[11px] uppercase tracking-widest transition-all origin-center ${
                        activeCategory === cat.id 
                          ? "text-primary font-bold scale-105" 
                          : "text-secondary hover:text-primary font-light"
                      }`}
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {cat.label}
                    </span>
                    {/* Active Indicator Line */}
                    <div 
                      className={`w-[2px] transition-all duration-300 bg-amber ${
                        activeCategory === cat.id ? 'h-6' : 'h-0 group-hover:h-3'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 px-6 md:px-0 md:pr-12 overflow-y-auto hidden-scrollbar h-full pb-12">
              {filteredProjects.length === 0 ? (
                <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center panel border-dashed">
                  <div className="w-12 h-12 rounded-full bg-canvas border border-border flex items-center justify-center mb-4">
                    <span className="font-mono text-secondary">?</span>
                  </div>
                  <h3 className="text-primary font-display mb-2 text-xl">Coming Soon</h3>
                  <p className="text-secondary text-sm text-center max-w-sm">
                    New case studies focusing on Data Science & Machine Learning are currently being documented.
                  </p>
                </div>
              ) : (
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr pb-12"
                >
                  {filteredProjects.map(project => (
                    <motion.div variants={itemAnim} key={project.id} className="h-full">
                      <ProjectCard 
                        project={project} 
                        onClick={() => setSelectedProjectId(project.id)} 
                      />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 h-full overflow-hidden"
          >
            <ProjectDetail 
              project={selectedProject} 
              onBack={() => setSelectedProjectId(null)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
