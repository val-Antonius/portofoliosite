"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import Image from "next/image";

interface MockupGalleryProps {
  images: string[];
  projectTitle: string;
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

/**
 * Horizontal mockup gallery with navigation dots and prev/next arrows.
 * Shows a placeholder state when no images are available.
 */
export default function MockupGallery({ images, projectTitle }: MockupGalleryProps) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  // ── Placeholder (no images yet) ────────────────────────────────────────────
  if (!images || images.length === 0) {
    return (
      <motion.div variants={item} className="w-full">
        <div
          className="w-full h-56 md:h-72 rounded-lg flex flex-col items-center justify-center gap-3"
          style={{
            background: "var(--bg-canvas)",
            border: "2px dashed var(--border)",
          }}
        >
          <ImageOff size={28} style={{ color: "var(--text-secondary)" }} />
          <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>
            App mockups coming soon
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div variants={item} className="w-full flex flex-col gap-3">
      {/* Section label */}
      <span
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: "var(--text-secondary)" }}
      >
        App Preview — {images.length} screens
      </span>

      {/* Main image frame */}
      <div
        className="relative w-full overflow-hidden rounded-lg"
        style={{
          border: "1px solid var(--border)",
          background: "var(--bg-canvas)",
          aspectRatio: "16 / 9",
        }}
      >
        {/* Subtle browser-bar chrome */}
        <div
          className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2"
          style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}
        >
          {["var(--accent-red)", "var(--accent-amber)", "var(--accent-green)"].map((c, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c, opacity: 0.7 }}
            />
          ))}
          <div
            className="flex-1 mx-2 h-4 rounded text-[9px] font-mono flex items-center px-2"
            style={{ background: "var(--bg-canvas)", color: "var(--text-secondary)" }}
          >
            {projectTitle.toLowerCase().replace(/\s+/g, "-")}.app
          </div>
        </div>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 pt-8"
          >
            <Image
              src={images[active]}
              alt={`${projectTitle} screen ${active + 1}`}
              fill
              className="object-cover object-top pt-9"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next overlays */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-60"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              aria-label="Previous screen"
            >
              <ChevronLeft size={14} style={{ color: "var(--text-primary)" }} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-60"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              aria-label="Next screen"
            >
              <ChevronRight size={14} style={{ color: "var(--text-primary)" }} />
            </button>
          </>
        )}
      </div>

      {/* Navigation dots */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to screen ${i + 1}`}
              className="transition-all duration-200 rounded-full"
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                background: i === active ? "var(--accent-amber)" : "var(--border)",
              }}
            />
          ))}
        </div>
      )}

      {/* Caption */}
      <p
        className="text-center text-[11px] font-mono"
        style={{ color: "var(--text-secondary)" }}
      >
        {active + 1} / {images.length}
      </p>
    </motion.div>
  );
}
