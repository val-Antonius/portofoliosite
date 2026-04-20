"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Chapter } from "../../types";
import * as Icons from "lucide-react";

interface ChapterNavProps {
  chapters: Chapter[];
  currentId: string;
  onSelect: (id: string) => void;
}

const poseMap: Record<string, string> = {
  overview: "/svg/profiles.svg",
  work: "/svg/desk.svg",
  skills: "/svg/thinking.svg",
  about: "/svg/welcome.svg",
  contact: "/svg/welcome.svg",
};

export default function ChapterNav({ chapters, currentId, onSelect }: ChapterNavProps) {
  return (
    <div className="relative h-24 border-b border-border bg-canvas px-6 md:px-12 flex items-center">
      {/* Connecting Line */}
      <div className="absolute top-[40%] left-6 right-6 md:left-12 md:right-12 h-[1px] bg-border -translate-y-1/2 z-0"></div>

      {/* Chapters list */}
      <div className="relative z-10 w-full flex justify-between items-center max-w-4xl mx-auto h-full pt-4">
        {chapters.map((chapter) => {
          const iconName = chapter.icon.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
          const Icon = (Icons as any)[iconName] || Icons.Circle;
          const isActive = currentId === chapter.id;

          return (
            <button
              key={chapter.id}
              onClick={() => onSelect(chapter.id)}
              className="flex flex-col items-center gap-3 group relative cursor-pointer"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all bg-card border shadow-sm overflow-hidden ${isActive ? "border-amber text-amber scale-110" : "border-border text-primary group-hover:border-amber"
                  }`}
              >
                <AnimatePresence mode="wait">
                  {isActive ? (
                    <motion.img
                      key="svg-img"
                      src={poseMap[chapter.id]}
                      alt={chapter.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <motion.div
                      key="lucide-icon"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className={`text-[10px] md:text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors ${isActive ? "text-amber font-bold" : "text-secondary font-medium"
                }`}>
                {chapter.id}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
