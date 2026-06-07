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
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8 items-start">
        {/* Left Side: Typography */}
        <motion.div variants={panelAnim} className="lg:col-span-6 xl:col-span-7 flex flex-col py-4">
          <span className="font-mono text-xs uppercase tracking-widest text-amber mb-6">Introduction</span>
          <h1 className="font-display tracking-tight text-primary leading-tight mb-8">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold block mb-3">
              I'm <span className="text-amber">Val Antonius</span>
            </span>
            <span className="italic text-secondary font-light block" style={{ fontSize: "clamp(20px, 3vw, 28px)", lineHeight: "1.4" }}>
              Between data and decisions, I look for meaning.
            </span>
          </h1>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_var(--accent-green)] animate-pulse" />
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-secondary font-semibold">
              Data & Business Analyst
            </p>
          </div>
        </motion.div>

        {/* Right Side: Selected Projects */}
        <motion.div variants={panelAnim} className="lg:col-span-6 xl:col-span-5 flex flex-col py-4">
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-secondary shrink-0">selected projects</span>
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

      {/* Bottom: Metrics panel */}
      <motion.div
        variants={panelAnim}
        className="w-full mt-auto pt-6 border-t border-border"
      >
        <div className="grid grid-cols-2 md:grid-cols-4">
          {/* Metric 1 — col 1, row 1 */}
          <div className="flex flex-col items-start pl-0 pr-4 py-4 md:py-0 md:px-8 border-r border-border">
            <MetricCard label="Years Experience" value={yearsExperience} suffix="+" variant="borderless" />
          </div>
          {/* Metric 2 — col 2, row 1 */}
          <div className="flex flex-col items-start pl-4 pr-0 py-4 md:py-0 md:px-8 md:border-r border-border">
            <MetricCard label="Projects" value={totalProjects} variant="borderless" />
          </div>
          {/* Metric 3 — col 1, row 2 */}
          <div className="flex flex-col items-start pl-0 pr-4 py-4 md:py-0 md:px-8 border-t md:border-t-0 border-r border-border">
            <MetricCard label="Case Studies" value={3} variant="borderless" />
          </div>
          {/* Metric 4 — col 2, row 2 */}
          <div className="flex flex-col items-start pl-4 pr-0 py-4 md:py-0 md:px-8 border-t md:border-t-0 border-border">
            <MetricCard label="Domains" value={4} suffix="+" variant="borderless" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
