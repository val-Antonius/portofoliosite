"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChapter } from "../hooks/useChapter";
import ChapterNav from "./layout/ChapterNav";
import TopBar from "./layout/TopBar";
import CVSidePanel from "./layout/CVSidePanel";
import LoadingScreen from "./layout/LoadingScreen";

import OverviewChapter from "./chapters/OverviewChapter";
import WorkChapter from "./chapters/WorkChapter";
import SkillsChapter from "./chapters/SkillsChapter";
import AboutChapter from "./chapters/AboutChapter";
import ContactChapter from "./chapters/ContactChapter";

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
  const { currentChapter, chapters, setChapter } = useChapter();

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
