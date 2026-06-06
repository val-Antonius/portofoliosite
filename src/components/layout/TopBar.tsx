"use client";

import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { usePortfolioContext } from "@/context/PortfolioContext";

const poseMap: Record<string, string> = {
  overview: "/svg/profiles.svg",
  work: "/svg/desk.svg",
  skills: "/svg/thinking.svg",
  about: "/svg/thinking.svg",
  contact: "/svg/welcome.svg",
};

export default function TopBar() {
  const { currentChapter, chapters, setChapter } = usePortfolioContext();

  return (
    <header className="h-16 border-b border-border bg-canvas/80 backdrop-blur-md px-4 md:px-12 flex items-center gap-4">
      {/* Left side: Brand/Dashboard — desktop only */}
      <div className="font-mono text-xs text-secondary uppercase tracking-widest shrink-0 hidden md:block w-[100px]">
        Dashboard
      </div>

      {/* Center: Navigation — fills all remaining space */}
      <nav className="flex items-center gap-4 md:gap-6 overflow-x-auto hidden-scrollbar py-1 flex-1 justify-start md:justify-center">
        {chapters.map((chapter) => {
          const iconName = chapter.icon
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join("");
          const Icon = (Icons as any)[iconName] || Icons.Circle;
          const isActive = currentChapter.id === chapter.id;

          return (
            <button
              key={chapter.id}
              onClick={() => setChapter(chapter.id)}
              className="flex items-center gap-2 group relative cursor-pointer shrink-0"
            >
              {/* Icon circle — hidden on mobile, visible on sm+ */}
              <div
                className={`hidden sm:flex w-8 h-8 rounded-full items-center justify-center transition-all bg-card border shadow-sm overflow-hidden ${
                  isActive
                    ? "border-amber text-amber scale-105"
                    : "border-border text-primary group-hover:border-amber"
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
                      <Icon size={14} strokeWidth={1.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Text label — always visible */}
              <span
                className={`text-[10px] md:text-[11px] uppercase tracking-widest whitespace-nowrap transition-colors ${
                  isActive ? "text-amber font-bold" : "text-secondary font-medium"
                }`}
              >
                {chapter.id}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Right side: Download CV — "CV" on mobile, "Download CV" on md+ */}
      <div className="shrink-0">
        <a
          href="/Antonius Valentino-CV.pdf"
          download="Antonius Valentino-CV.pdf"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-amber transition-colors cursor-pointer"
        >
          <span className="md:hidden">CV</span>
          <span className="hidden md:inline">Download CV</span>
          <Icons.Download size={14} />
        </a>
      </div>
    </header>
  );
}
