"use client";

import { createContext, useContext, useState, ReactNode, useCallback, useEffect } from "react";
import { track } from "@vercel/analytics";
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
    setSelectedProjectId(null);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", "#" + id);
    }
  }, []);

  const setSelectedProjectWithHash = useCallback((projectId: string | null) => {
    setSelectedProjectId(projectId);
    if (typeof window !== "undefined") {
      if (projectId) {
        window.history.pushState(null, "", `#${activeChapterId}/${projectId}`);
      } else {
        window.history.pushState(null, "", `#${activeChapterId}`);
      }
    }
  }, [activeChapterId]);

  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace("#", "");
      if (!fullHash) {
        setActiveChapterId(portfolioData.chapters[0].id);
        setSelectedProjectId(null);
        return;
      }

      const [chapterHash, projectHash] = fullHash.split("/");
      const chapterExists = portfolioData.chapters.some(c => c.id === chapterHash);

      if (chapterExists) {
        setActiveChapterId(chapterHash);
        
        if (projectHash) {
          const projectExists = portfolioData.projects.some(p => p.id === projectHash);
          if (projectExists) {
            setSelectedProjectId(projectHash);
          } else {
            setSelectedProjectId(null);
          }
        } else {
          setSelectedProjectId(null);
        }
      } else {
        setActiveChapterId(portfolioData.chapters[0].id);
        setSelectedProjectId(null);
      }
    };

    // Sync on initial mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    track("navigate_chapter", { chapterId: activeChapterId });
  }, [activeChapterId]);

  useEffect(() => {
    if (selectedProjectId) {
      track("open_project", { projectId: selectedProjectId });
    }
  }, [selectedProjectId]);

  const currentChapter = portfolioData.chapters.find(c => c.id === activeChapterId) || portfolioData.chapters[0];

  return (
    <PortfolioContext.Provider
      value={{
        activeChapterId,
        currentChapter,
        chapters: portfolioData.chapters,
        setChapter,
        selectedProjectId,
        setSelectedProjectId: setSelectedProjectWithHash,
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
