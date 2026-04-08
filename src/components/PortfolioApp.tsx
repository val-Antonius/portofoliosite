"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioContext } from "@/context/PortfolioContext";
import ChapterNav from "@/components/layout/ChapterNav";
import TopBar from "@/components/layout/TopBar";
import CVSidePanel from "@/components/layout/CVSidePanel";
import LoadingScreen from "@/components/layout/LoadingScreen";

import OverviewChapter from "@/components/chapters/OverviewChapter";
import WorkChapter from "@/components/chapters/WorkChapter";
import SkillsChapter from "@/components/chapters/SkillsChapter";
import AboutChapter from "@/components/chapters/AboutChapter";
import ContactChapter from "@/components/chapters/ContactChapter";

const chapterComponents: Record<string, React.FC> = {
  overview: OverviewChapter,
  work: WorkChapter,
  skills: SkillsChapter,
  about: AboutChapter,
  contact: ContactChapter,
};

export default function PortfolioApp() {
  const [loading, setLoading] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);
  const { currentChapter, chapters, setChapter } = usePortfolioContext();

  const ActiveComponent = chapterComponents[currentChapter.id] || OverviewChapter;

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen flex flex-col w-full overflow-hidden">
        {/* Navigation & Header Layer */}
        <div className="relative z-40 bg-canvas">
          <TopBar onTogglePanel={() => setPanelOpen(!panelOpen)} />
          <ChapterNav chapters={chapters} currentId={currentChapter.id} onSelect={setChapter} />
        </div>

        {/* Content Layer */}
        <main className={`flex-1 relative z-10 w-full max-w-7xl mx-auto ${currentChapter.id !== 'about' ? 'overflow-hidden' : 'overflow-y-auto'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentChapter.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full"
            >
              {/* Heading Formula */}
              <div className="px-6 py-8 md:px-12 md:py-12">
                <h1 className="font-display tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
                  <span className="font-light text-primary">Antonius is </span>
                  <span className="font-bold text-amber">{currentChapter.keyword}.</span>
                </h1>
              </div>
              
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* CV Sidebar Panel Layer */}
        <CVSidePanel isOpen={panelOpen} onClose={() => setPanelOpen(false)} />
      </div>
    </>
  );
}
