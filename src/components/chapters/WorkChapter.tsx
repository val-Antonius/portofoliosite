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
  const [activeCategory, setActiveCategory] = useState<'DATA-BI' | 'WEB' | 'ALL'>('DATA-BI');

  const selectedProject = portfolioData.projects.find(p => p.id === selectedProjectId);

  const categories = [
    { id: 'DATA-BI', label: 'DATA / BI' },
    { id: 'WEB', label: 'WEB ENGINEERING' },
    { id: 'ALL', label: 'ALL' }
  ] as const;

  const filteredProjects = portfolioData.projects.filter(p => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'WEB') return p.category === 'web';
    if (activeCategory === 'DATA-BI') return p.category === 'Data-BI';
    return true;
  });

  // Sort display projects: under 'ALL' tab, 'Data-BI' projects are placed first
  const displayProjects = activeCategory === 'ALL'
    ? [...filteredProjects].sort((a, b) => {
        const aVal = a.category === 'Data-BI' ? 0 : 1;
        const bVal = b.category === 'Data-BI' ? 0 : 1;
        return aVal - bVal;
      })
    : filteredProjects;

  return (
    <div className="h-full relative overflow-hidden flex flex-col items-stretch pt-8 md:pt-12">
       <AnimatePresence mode="wait">
        {!selectedProject ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col h-full overflow-hidden pb-12 md:pb-0"
          >
            {/* Horizontal Filter Tabs at the Top (unified for Mobile & Desktop) */}
            <div className="w-full px-6 md:px-12 mb-6 flex items-center gap-6 overflow-x-auto hidden-scrollbar shrink-0 border-b border-border/30 pb-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative pb-3 text-[11px] font-semibold uppercase tracking-widest transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? "text-primary font-bold"
                      : "text-secondary hover:text-primary font-light"
                  }`}
                >
                  <span>{cat.label}</span>
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex-1 px-6 md:px-12 overflow-y-auto hidden-scrollbar h-full pb-12">
              {displayProjects.length === 0 ? (
                <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center panel border-dashed">
                  <div className="w-12 h-12 rounded-full bg-canvas border border-border flex items-center justify-center mb-4">
                    <span className="font-mono text-secondary">?</span>
                  </div>
                  <h3 className="text-primary font-display mb-2 text-xl">Coming Soon</h3>
                  <p className="text-secondary text-sm text-center max-w-sm">
                    New case studies focusing on Data & Business Intelligence are currently being documented.
                  </p>
                </div>
              ) : (
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr pb-12"
                >
                  {displayProjects.map(project => (
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
