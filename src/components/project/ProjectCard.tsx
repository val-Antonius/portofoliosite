"use client";

import { motion } from "framer-motion";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.2 }}
      className="panel text-left flex flex-col justify-between group h-full cursor-pointer w-full transition-colors hover:border-amber hover:bg-amber-bg/30 p-6"
    >
      <div className="w-full">
        {/* Meta Header */}
        <div className="flex justify-between items-start mb-4 text-[10px] font-mono uppercase tracking-widest text-[#6B6560]">
          <div>{project.timeline}</div>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 rounded bg-canvas border border-border text-primary">{project.type}</span>
            <span className="px-2 py-0.5 rounded bg-amber/10 border border-amber/20 text-amber">{project.category === 'ds-ml' ? 'DS/ML' : 'WEB'}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl text-primary mb-3 group-hover:text-amber transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm text-secondary leading-relaxed font-light">
          {project.tagline || project.description}
        </p>
      </div>
    </motion.button>
  );
}
