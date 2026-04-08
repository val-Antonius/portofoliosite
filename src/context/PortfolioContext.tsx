"use client";

import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { portfolioData } from "../data/portfolio";
import { Chapter } from "../types";

interface PortfolioContextType {
  activeChapterId: string;
  currentChapter: Chapter;
  chapters: Chapter[];
  setChapter: (id: string) => void;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [activeChapterId, setActiveChapterId] = useState<string>(portfolioData.chapters[0].id);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const setChapter = useCallback((id: string) => {
    setActiveChapterId(id);
  }, []);

  const currentChapter = portfolioData.chapters.find(c => c.id === activeChapterId) || portfolioData.chapters[0];

  return (
    <PortfolioContext.Provider
      value={{
        activeChapterId,
        currentChapter,
        chapters: portfolioData.chapters,
        setChapter,
        selectedProjectId,
        setSelectedProjectId,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolioContext() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolioContext must be used within a PortfolioProvider");
  }
  return context;
}
