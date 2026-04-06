"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { portfolioData } from "../../data/portfolio";

interface CVSidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVSidePanel({ isOpen, onClose }: CVSidePanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1C1A17] backdrop-blur-sm cursor-pointer"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full max-w-[520px] h-full bg-card shadow-2xl border-l border-border flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-display text-3xl text-primary">Curriculum Vitae</h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-bg transition-colors text-secondary hover:text-amber"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 md:p-10 text-primary font-sans relative">
              <div className="mb-10">
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Profile</h3>
                <p className="text-base leading-relaxed text-primary">
                  Information Systems Engineer specializing in high-performance frontend architecture and data-driven systems.
                  Combining rigorous methodology with deep technical execution to create systems that scale and perform.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Experience</h3>
                <div className="space-y-8">
                  {portfolioData.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-6 border-l border-border">
                      <div className="absolute w-2.5 h-2.5 rounded-full bg-amber -left-[5px] top-1.5" />
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                        <h4 className="font-bold text-primary text-lg">{exp.role}</h4>
                        <span className="text-sm font-mono text-secondary mt-1 md:mt-0">{exp.period}</span>
                      </div>
                      <div className="text-sm text-secondary mb-3">{exp.company} • {exp.location}</div>
                      <ul className="text-sm space-y-2 list-disc ml-4 text-primary/80 leading-relaxed">
                        {exp.bullets.map((bullet, bidx) => (
                          <li key={bidx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-sans text-secondary uppercase tracking-widest mb-4">Education</h3>
                <div className="relative pl-6 border-l border-border">
                  <div className="absolute w-2 h-2 rounded-full bg-border -left-[4px] top-1.5" />
                  <h4 className="font-bold text-primary text-lg">B.S. Information Systems</h4>
                  <div className="text-sm text-secondary mb-1">Indonesia University</div>
                  <div className="text-xs font-mono text-secondary">Graduated 2024</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
