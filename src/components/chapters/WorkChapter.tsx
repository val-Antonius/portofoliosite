"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
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
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = portfolioData.projects.find(p => p.id === selectedProjectId);

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
            className="flex-1 px-6 md:px-12 pb-12 overflow-y-auto hidden-scrollbar"
          >
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr h-full"
            >
              {portfolioData.projects.map(project => (
                <motion.div variants={itemAnim} key={project.id} className="h-full">
                  <ProjectCard 
                    project={project} 
                    onClick={() => setSelectedProjectId(project.id)} 
                  />
                </motion.div>
              ))}
            </motion.div>
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
