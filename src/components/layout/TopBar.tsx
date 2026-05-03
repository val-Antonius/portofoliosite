"use client";

import { User } from "lucide-react";

interface TopBarProps {
  onTogglePanel: () => void;
}

export default function TopBar({ onTogglePanel }: TopBarProps) {
  return (
    <header className="h-12 border-b border-border bg-canvas/80 backdrop-blur-md px-6 md:px-12 flex items-center justify-between">
      <div className="font-mono text-xs text-secondary uppercase tracking-widest">Dashboard</div>
      <button
        onClick={onTogglePanel}
        className="flex items-center gap-2 hover:text-amber transition-colors text-sm font-sans"
      >
        <span className="hidden sm:inline">Antonius Valentino</span>
        <div className="w-6 h-6 rounded-full bg-border flex items-center justify-center text-primary">
          <User size={14} />
        </div>
      </button>
    </header>
  );
}
