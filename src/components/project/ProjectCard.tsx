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
      className="panel text-left flex flex-col justify-between group h-full cursor-pointer w-full transition-colors hover:border-amber hover:bg-amber-bg/30"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#6B6560]">{project.timeline}</div>
          <div className="text-[10px] bg-canvas border border-border px-2 py-0.5 rounded text-primary">{project.type}</div>
        </div>
        <h3 className="font-display text-2xl text-primary mb-3 group-hover:text-amber transition-colors line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm text-secondary line-clamp-3 leading-relaxed">
          {project.description}
        </p>
      </div>
      
      <div className="mt-8 flex flex-wrap gap-2">
        {project.techTags.slice(0, 3).map(tag => (
          <span key={tag} className="text-[10px] text-secondary bg-canvas px-2 py-1 rounded border border-border font-mono">
            {tag}
          </span>
        ))}
        {project.techTags.length > 3 && (
          <span className="text-[10px] text-secondary bg-canvas px-2 py-1 rounded border border-border font-mono">
            +{project.techTags.length - 3}
          </span>
        )}
      </div>
    </motion.button>
  );
}
