"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "> Initializing portfolio...",
  "> Loading project data...",
  "> Connecting impact metrics...",
  "> Rendering dashboard panels...",
  "> Welcome, Antonius Valentino.",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    let startTimestamp: number;
    const duration = 2800;
    
    // Animate progress 0 -> 100
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const t = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - t, 3);
      setProgress(Math.floor(easeOut * 100));

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };
    
    requestAnimationFrame(step);

    // Stagger terminal lines
    const lineIntervals = lines.map((_, index) => {
      return setTimeout(() => {
        setVisibleLines(index + 1);
      }, index * 500);
    });

    return () => {
      lineIntervals.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-canvas text-primary font-mono"
    >
      <div className="w-full max-w-lg px-6 flex flex-col gap-8">
        <div className="flex flex-col gap-2 min-h-[160px]">
          <AnimatePresence>
            {lines.slice(0, visibleLines).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm md:text-base text-secondary"
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm uppercase tracking-widest text-secondary">System Boot</span>
          <span className="text-2xl font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
