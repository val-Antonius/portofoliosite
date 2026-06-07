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
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.06)" }}
      transition={{ duration: 0.2 }}
      className="panel text-left flex flex-col justify-between group h-full cursor-pointer w-full transition-all hover:border-amber hover:bg-amber-bg/20 p-6 relative overflow-hidden"
    >
      <div className="w-full flex-1 flex flex-col justify-between">
        <div className="w-full">
          {/* Top Row: Timeline & Category Tag */}
          <div className="flex justify-between items-center mb-4 text-[10px] font-mono uppercase tracking-widest text-secondary">
            <div>{project.timeline}</div>
            <span
              className={`px-2.5 py-0.5 rounded text-[9px] font-semibold tracking-wider uppercase ${
                project.category === "Data-BI"
                  ? "bg-green/10 border border-green/20 text-green"
                  : "bg-amber/10 border border-amber/20 text-amber"
              }`}
            >
              {project.category === "Data-BI" ? "Data - BI" : "WEB"}
            </span>
          </div>

          {/* Project Type on its own line */}
          <div className="text-[10px] font-mono uppercase tracking-wider text-secondary/80 mb-2 leading-none">
            {project.type}
          </div>

          {/* Title */}
          <h3 className="font-display text-xl md:text-2xl text-primary mb-3 group-hover:text-amber transition-colors line-clamp-2 leading-snug">
            {project.title}
          </h3>

          {/* Tagline / Description */}
          <p className="text-sm text-secondary leading-relaxed font-light line-clamp-3 mb-6">
            {project.tagline || project.description}
          </p>
        </div>

        {/* Tech tags list at the bottom */}
        {project.techTags && project.techTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-border/40 w-full mt-auto">
            {project.techTags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[9px] font-mono tracking-wider rounded bg-canvas border border-border/50 text-secondary"
              >
                {tag}
              </span>
            ))}
            {project.techTags.length > 3 && (
              <span className="text-[9px] font-mono text-secondary/60 pl-0.5">
                +{project.techTags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.button>
  );
}
