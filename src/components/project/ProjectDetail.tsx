"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Project } from "../../types";
import MetricCard from "../ui/MetricCard";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="px-6 md:px-12 pb-12 flex flex-col h-full"
    >
      <motion.button 
        variants={item}
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-secondary hover:text-amber transition-colors w-fit mb-6 cursor-pointer"
      >
        <ArrowLeft size={16} />
        Back to Backlog
      </motion.button>

      <div className="flex-1 overflow-y-auto pr-4 hidden-scrollbar relative bg-canvas">
        <motion.div variants={item} className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
             <div className="text-[11px] font-mono uppercase tracking-widest text-[#6B6560]">{project.timeline}</div>
             <div className="w-1 h-1 rounded-full bg-border"></div>
             <div className="text-[11px] font-sans uppercase tracking-widest text-secondary">{project.type}</div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight">{project.title}</h2>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {project.metrics.map((metric, i) => (
            <MetricCard 
              key={i}
              label={metric.label}
              value={Number(metric.value)}
              prefix={metric.prefix}
              suffix={metric.suffix}
              isPositive={metric.isPositive}
              className="py-6"
            />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
          <motion.div variants={item} className="md:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-primary">Challenge & Impact</h3>
            <p className="text-primary/80 leading-relaxed text-base">{project.description}</p>
            
            <ul className="space-y-4 mt-8">
              {project.impact.map((imp, i) => (
                <li key={i} className="flex gap-4 text-primary/80 leading-relaxed text-base">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2.5 shrink-0"></div>
                  {imp}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="md:col-span-1 space-y-6">
            <h3 className="text-xl font-bold text-primary">Technology</h3>
            <div className="flex flex-col gap-3 border-l border-border pl-5">
              {project.techTags.map(tag => (
                <div key={tag} className="text-[13px] text-secondary font-mono tracking-wide">{tag}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
