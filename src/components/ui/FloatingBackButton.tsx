"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface FloatingBackButtonProps {
  onClick: () => void;
  showMobile: boolean;
}

export default function FloatingBackButton({ onClick, showMobile }: FloatingBackButtonProps) {
  return (
    <>
      {/* ── Desktop View: Floating in left gutter ── */}
      <div className="hidden md:block absolute left-6 top-0 z-30">
        <motion.button
          onClick={onClick}
          whileHover={{ scale: 1.05, borderColor: "var(--accent-amber)", color: "var(--accent-amber)" }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full border border-border bg-card text-secondary flex items-center justify-center shadow-sm cursor-pointer transition-all duration-200"
          title="Back to Backlog"
        >
          <ArrowLeft size={18} />
        </motion.button>
      </div>

      {/* ── Mobile View: Floating bottom-center (only when active) ── */}
      <AnimatePresence>
        {showMobile && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 30, x: "-50%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden fixed bottom-6 left-1/2 z-50 pointer-events-auto"
          >
            <button
              onClick={onClick}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-canvas border border-border/20 shadow-xl font-mono text-[10px] uppercase tracking-widest cursor-pointer font-bold select-none active:scale-95 transition-transform"
            >
              <ArrowLeft size={14} />
              <span>Back to Backlog</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
