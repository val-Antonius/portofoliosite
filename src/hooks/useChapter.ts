"use client";

import { useState, useCallback } from "react";
import { portfolioData } from "../data/portfolio";

export function useChapter() {
  const [activeChapterId, setActiveChapterId] = useState<string>(portfolioData.chapters[0].id);

  const setChapter = useCallback((id: string) => {
    setActiveChapterId(id);
  }, []);

  const currentChapter = portfolioData.chapters.find(c => c.id === activeChapterId) || portfolioData.chapters[0];

  return {
    chapters: portfolioData.chapters,
    activeChapterId,
    currentChapter,
    setChapter
  };
}
