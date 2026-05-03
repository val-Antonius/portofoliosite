"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioContext } from "@/context/PortfolioContext";
import ChapterNav from "@/components/layout/ChapterNav";
import TopBar from "@/components/layout/TopBar";
import CVSidePanel from "@/components/layout/CVSidePanel";
import LoadingScreen from "@/components/layout/LoadingScreen";

import OverviewChapter from "@/components/chapters/OverviewChapter";
import WorkChapter from "@/components/chapters/WorkChapter";
import AboutChapter from "@/components/chapters/AboutChapter";
import ContactChapter from "@/components/chapters/ContactChapter";
import HeadingFormula from "@/components/HeadingFormula";

const chapterComponents: Record<string, React.FC> = {
  overview: OverviewChapter,
  work: WorkChapter,
  about: AboutChapter,
  contact: ContactChapter,
};

export default function PortfolioApp() {
  const [loading, setLoading] = useState(true);
  const [panelOpen, setPanelOpen] = useState(false);
  const { currentChapter, chapters, setChapter } = usePortfolioContext();

  // Prevent body scroll when panel is open to avoid double scrollbars
  useEffect(() => {
    if (panelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [panelOpen]);

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
              <HeadingFormula chapter={currentChapter} />
              
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
