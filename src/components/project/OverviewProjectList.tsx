"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../types";
import { ArrowRight } from "lucide-react";

interface OverviewProjectListProps {
  projects: Project[];
  onExplore: (projectId: string) => void;
}

export default function OverviewProjectList({ projects, onExplore }: OverviewProjectListProps) {
  // All projects are collapsed by default
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full border-t border-border">
      {projects.map((project) => {
        const isExpanded = expandedId === project.id;

        return (
          <div
            key={project.id}
            className="border-b border-border py-4 transition-colors"
          >
            <button
              onClick={() => setExpandedId(isExpanded ? null : project.id)}
              className="w-full text-left group flex flex-col justify-start cursor-pointer focus:outline-none py-1.5"
            >
              {/* Timeline, Type & Category row (always visible) */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-secondary mb-1.5">
                <span>{project.timeline}</span>
                <span>•</span>
                <span>{project.type}</span>
                <span>•</span>
                <span className={project.category === 'Data-BI' ? 'text-green font-semibold' : 'text-amber font-semibold'}>
                  {project.category === 'Data-BI' ? 'Data - BI' : 'WEB'}
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="font-display text-lg md:text-xl text-primary group-hover:text-amber transition-colors leading-snug">
                  {project.title}
                </span>
                <motion.span
                  animate={{ rotate: isExpanded ? 45 : 0 }}
                  className="text-secondary group-hover:text-amber text-2xl font-light font-sans shrink-0 ml-4"
                >
                  +
                </motion.span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 pb-2 space-y-4">
                    {/* Tagline */}
                    <p className="text-sm text-secondary leading-relaxed font-light max-w-xl">
                      {project.tagline || project.description}
                    </p>

                    {/* CTA button */}
                    <button
                      onClick={() => onExplore(project.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber border border-amber/30 bg-amber-bg/10 hover:bg-amber-bg/30 hover:border-amber px-4 py-2 rounded transition-all cursor-pointer animate-pulse-subtle"
                    >
                      <span>Explore Project</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
