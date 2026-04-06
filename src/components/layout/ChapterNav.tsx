"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Chapter } from "../../types";
import Mascot from "../ui/Mascot";
import * as Icons from "lucide-react";

interface ChapterNavProps {
  chapters: Chapter[];
  currentId: string;
  onSelect: (id: string) => void;
}

export default function ChapterNav({ chapters, currentId, onSelect }: ChapterNavProps) {
  const [mascotX, setMascotX] = useState(0);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const currentIndex = chapters.findIndex((c) => c.id === currentId);
    if (currentIndex !== -1 && itemRefs.current[currentIndex]) {
      const el = itemRefs.current[currentIndex];
      if (el) {
        setMascotX(el.offsetLeft + el.offsetWidth / 2 - 20); // 20 is half of small mascot width (40px)
      }
    }
  }, [currentId, chapters]);

  return (
    <div className="relative h-24 border-b border-border bg-canvas px-6 md:px-12 flex items-center">
      {/* Connecting Line */}
      <div className="absolute top-[40%] left-6 right-6 md:left-12 md:right-12 h-[1px] bg-border -translate-y-1/2 z-0"></div>
      
      {/* Dynamic Mascot Positioned on the Line */}
      <motion.div
        animate={{ x: mascotX }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-[40%] -translate-y-[90%] z-20 pointer-events-none pb-0 left-0"
      >
         <Mascot pose={currentId} isSmall={true} />
      </motion.div>

      {/* Chapters list */}
      <div className="relative z-10 w-full flex justify-between items-center max-w-4xl mx-auto h-full pt-4">
        {chapters.map((chapter, i) => {
          const iconName = chapter.icon.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
          const Icon = (Icons as any)[iconName] || Icons.Circle;
          const isActive = currentId === chapter.id;

          return (
            <button
              key={chapter.id}
              ref={(el) => { itemRefs.current[i] = el; }}
              onClick={() => onSelect(chapter.id)}
              className="flex flex-col items-center gap-3 group relative cursor-pointer"
            >
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all bg-card border shadow-sm ${
                  isActive ? "border-amber text-amber scale-110" : "border-border text-primary group-hover:border-amber"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 1.5} />
              </div>
              <span className={`text-[10px] md:text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors ${
                isActive ? "text-amber font-bold" : "text-secondary font-medium"
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
