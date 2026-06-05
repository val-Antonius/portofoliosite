"use client";

import { motion } from "framer-motion";
import MetricCard from "../ui/MetricCard";
import ProjectCard from "../project/ProjectCard";
import OverviewProjectList from "../project/OverviewProjectList";
import { portfolioData } from "../../data/portfolio";
import { usePortfolioContext } from "../../context/PortfolioContext";
import { Project } from "../../types";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const panelAnim = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function OverviewChapter() {
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

  const selectedIds = ["xflair-nutmeg-prediction", "credit-scoring-umkm", "whser-laundry-platform"];
  const selectedProjects = selectedIds
    .map(id => portfolioData.projects.find(p => p.id === id))
    .filter((p): p is Project => p !== undefined);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="px-6 md:px-12 pb-12 h-full flex flex-col pt-8 md:pt-12 hidden-scrollbar overflow-y-auto mix-blend-normal"
    >
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 items-center">
        {/* Left Side: Typography */}
        <motion.div variants={panelAnim} className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center py-4 min-h-[300px]">
          <span className="font-mono text-xs uppercase tracking-widest text-amber mb-6">Introduction</span>
          <h1 className="font-display tracking-tight text-primary leading-tight mb-8">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold block mb-3">
              I'm <span className="text-amber">Val Antonius</span>.
            </span>
            <span className="italic text-secondary font-light block" style={{ fontSize: "clamp(20px, 3vw, 28px)", lineHeight: "1.4" }}>
              Between data and decisions, I look for meaning.
            </span>
          </h1>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_var(--accent-green)] animate-pulse" />
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-secondary font-semibold">
              Data Analyst; Business Intelligence
            </p>
          </div>
        </motion.div>

        {/* Right Side: Selected Projects */}
        <motion.div variants={panelAnim} className="lg:col-span-6 xl:col-span-5 flex flex-col h-full justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6B6560] shrink-0">selected projects</span>
            <div className="h-px bg-border flex-1" />
          </div>
          
          {/* Desktop interactive list */}
          <div className="hidden lg:block">
            <OverviewProjectList 
              projects={selectedProjects} 
              onExplore={(id) => {
                setChapter("work");
                setSelectedProjectId(id);
              }}
            />
          </div>

          {/* Mobile standard cards */}
          <div className="block lg:hidden flex flex-col gap-4">
            {selectedProjects.map(project => (
              <ProjectCard 
                key={project.id}
                project={project} 
                onClick={() => {
                  setChapter("work");
                  setSelectedProjectId(project.id);
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom: Metrics panel (Horizontal) */}
      <motion.div 
        variants={panelAnim} 
        className="w-full mt-12 border-t border-b border-border py-8 grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-border"
      >
        <div className="flex justify-center md:justify-start md:px-8 first:pl-0">
          <MetricCard label="Experience" value={yearsExperience} suffix="+ Yrs" variant="borderless" />
        </div>
        <div className="flex justify-center md:justify-start md:px-8 pt-4 md:pt-0">
          <MetricCard label="Projects" value={totalProjects} suffix=" Total" variant="borderless" />
        </div>
        {/* Placeholder for future metric 3 */}
        <div className="flex justify-center md:justify-start md:px-8 pt-4 md:pt-0">
          <div className="flex flex-col gap-1 opacity-25">
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">Case Studies</span>
            <span className="font-mono text-4xl font-bold leading-none text-secondary">--</span>
          </div>
        </div>
        {/* Placeholder for future metric 4 */}
        <div className="flex justify-center md:justify-start md:px-8 pt-4 md:pt-0">
          <div className="flex flex-col gap-1 opacity-25">
            <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">Hours Worked</span>
            <span className="font-mono text-4xl font-bold leading-none text-secondary">--</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
