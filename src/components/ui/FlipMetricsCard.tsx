"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderGit2, Repeat, Clock } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { usePortfolioContext } from "../../context/PortfolioContext";
import { useCountUp } from "../../hooks/useCountUp";

export default function FlipMetricsCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { setChapter, setSelectedProjectId } = usePortfolioContext();

  // Dynamic calculations from real data
  const totalProjects = portfolioData.projects.length;

  const getEarliestYear = () => {
    let minYear = new Date().getFullYear();
    portfolioData.projects.forEach(project => {
      const years = project.timeline.match(/\d{4}/g);
      if (years) {
        years.forEach(y => {
          if (parseInt(y) < minYear) minYear = parseInt(y);
        });
      }
    });
    return minYear;
  };
  
  const yearsExperience = Math.max(1, new Date().getFullYear() - getEarliestYear());
  
  // Custom hook for number counting animation
  const { count: expCount, ref: expRef } = useCountUp(yearsExperience, 1500);
  const { count: projCount, ref: projRef } = useCountUp(totalProjects, 1500);

  const handleNavigateToProject = (projectId: string) => {
    setChapter("work");
    setSelectedProjectId(projectId);
  };

  return (
    <div className="relative w-full h-full" style={{ perspective: "1000px" }}>
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT FACE */}
        <div 
          className="w-full h-full panel flex flex-col justify-between"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#6B6560]">Impact Metrics</span>
            <button 
              onClick={() => setIsFlipped(true)}
              className="group flex items-center justify-center p-2 rounded-full border border-border bg-canvas hover:border-amber transition-colors text-secondary cursor-pointer"
              title="View Projects"
            >
              <Repeat size={14} className="group-hover:text-amber transition-colors" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-6 py-4">
            {/* Total Experience */}
            <div className="border-b border-border pb-4">
              <div className="flex items-center gap-2 mb-2 text-secondary">
                <Clock size={16} />
                <span className="text-[11px] font-mono uppercase tracking-widest">Experience</span>
              </div>
              <div ref={expRef} className="font-mono text-4xl md:text-5xl font-bold flex items-baseline gap-1" style={{ color: "var(--accent-green)" }}>
                {expCount}<span className="text-xl md:text-2xl text-secondary font-mono">+ Yrs</span>
              </div>
            </div>

            {/* Total Projects */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-secondary">
                <FolderGit2 size={16} />
                <span className="text-[11px] font-mono uppercase tracking-widest">Projects</span>
              </div>
              <div ref={projRef} className="font-mono text-4xl md:text-5xl font-bold flex items-baseline gap-1" style={{ color: "var(--accent-amber)" }}>
                {projCount}<span className="text-xl md:text-2xl text-secondary font-mono">Total</span>
              </div>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 w-full h-full panel flex flex-col"
          style={{ 
            backfaceVisibility: "hidden", 
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
           <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-sans uppercase tracking-widest text-[#6B6560]">Project Backlog</span>
            <button 
              onClick={() => setIsFlipped(false)}
              className="group flex items-center justify-center p-2 rounded-full border border-border bg-canvas hover:border-amber transition-colors text-secondary cursor-pointer"
              title="Flip Back"
            >
              <Repeat size={14} className="group-hover:text-amber transition-colors" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto hidden-scrollbar flex flex-col gap-3">
            {portfolioData.projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => handleNavigateToProject(project.id)}
                className="group flex flex-col p-3 rounded-md bg-canvas/50 border border-transparent hover:border-amber hover:bg-canvas cursor-pointer transition-all"
              >
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-1 pr-2">
                    <span className="text-[13px] font-bold text-primary leading-tight group-hover:text-amber transition-colors line-clamp-1">
                      {project.title}
                    </span>
                    <span className="text-[10px] font-mono text-secondary">
                      {project.timeline}
                    </span>
                  </div>
                  <ArrowUpRight size={16} className="text-secondary shrink-0 group-hover:text-amber transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
