"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import Image from "next/image";

interface MockupGalleryProps {
  images: string[];
  projectTitle: string;
  /** 'desktop' = browser chrome frame (16:9). 'mobile' = phone frame (9:19.5). */
  frameType?: "desktop" | "mobile";
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// ── Shared nav controls (prev/next buttons + dots) ─────────────────────────
function NavControls({
  count,
  active,
  onPrev,
  onNext,
  onDot,
}: {
  count: number;
  active: number;
  onPrev: () => void;
  onNext: () => void;
  onDot: (i: number) => void;
}) {
  return (
    <>
      {count > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-60"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            aria-label="Previous screen"
          >
            <ChevronLeft size={14} style={{ color: "var(--text-primary)" }} />
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-60"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            aria-label="Next screen"
          >
            <ChevronRight size={14} style={{ color: "var(--text-primary)" }} />
          </button>
        </>
      )}
    </>
  );
}

// ── Desktop browser chrome frame ───────────────────────────────────────────
function DesktopFrame({
  images,
  active,
  projectTitle,
  onPrev,
  onNext,
}: {
  images: string[];
  active: number;
  projectTitle: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{
        border: "1px solid var(--border)",
        background: "var(--bg-canvas)",
        aspectRatio: "16 / 9",
      }}
    >
      {/* Browser bar chrome */}
      <div
        className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2"
        style={{ background: "var(--bg-card)", borderBottom: "1px solid var(--border)" }}
      >
        {(["var(--accent-red)", "var(--accent-amber)", "var(--accent-green)"] as string[]).map(
          (c, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c, opacity: 0.7 }}
            />
          )
        )}
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
          className="absolute inset-0 pt-9"
        >
          <Image
            src={images[active]}
            alt={`${projectTitle} screen ${active + 1}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={active === 0}
          />
        </motion.div>
      </AnimatePresence>

      <NavControls
        count={images.length}
        active={active}
        onPrev={onPrev}
        onNext={onNext}
        onDot={() => {}}
      />
    </div>
  );
}

// ── Mobile phone frame ─────────────────────────────────────────────────────
function MobileFrame({
  images,
  active,
  projectTitle,
  onPrev,
  onNext,
}: {
  images: string[];
  active: number;
  projectTitle: string;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    // Outer centering wrapper — limits max width to feel natural
    <div className="w-full flex justify-center">
      <div className="relative" style={{ width: "min(260px, 52vw)" }}>
        {/* ── Phone shell ── */}
        <div
          className="relative rounded-[36px] overflow-hidden"
          style={{
            aspectRatio: "9 / 19.5",
            background: "var(--bg-card)",
            border: "2px solid var(--border)",
            boxShadow:
              "0 0 0 6px var(--bg-canvas), 0 0 0 7px var(--border), 0 24px 48px rgba(0,0,0,0.5)",
          }}
        >
          {/* Status bar row */}
          <div
            className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-2 pb-1"
            style={{ background: "var(--bg-card)" }}
          >
            <span className="text-[8px] font-mono" style={{ color: "var(--text-secondary)" }}>
              9:41
            </span>
            {/* Dynamic island pill */}
            <div
              className="w-14 h-4 rounded-full"
              style={{ background: "var(--bg-canvas)" }}
            />
            <div className="flex items-center gap-1">
              {/* Signal + wifi + battery icons (SVG inline — light & no deps) */}
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <rect x="0" y="4" width="2" height="4" rx="0.5" fill="var(--text-secondary)" opacity="0.6" />
                <rect x="2.5" y="2.5" width="2" height="5.5" rx="0.5" fill="var(--text-secondary)" opacity="0.8" />
                <rect x="5" y="1" width="2" height="7" rx="0.5" fill="var(--text-secondary)" />
                <rect x="7.5" y="0" width="2" height="8" rx="0.5" fill="var(--text-secondary)" />
              </svg>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M6 2C7.9 2 9.6 2.7 10.9 3.9L12 2.8C10.4 1.1 8.3 0 6 0C3.7 0 1.6 1.1 0 2.8L1.1 3.9C2.4 2.7 4.1 2 6 2Z" fill="var(--text-secondary)" />
                <path d="M6 4C7.3 4 8.5 4.5 9.4 5.3L10.5 4.2C9.3 3.1 7.7 2.5 6 2.5C4.3 2.5 2.7 3.1 1.5 4.2L2.6 5.3C3.5 4.5 4.7 4 6 4Z" fill="var(--text-secondary)" />
                <circle cx="6" cy="7" r="1" fill="var(--text-secondary)" />
              </svg>
              <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
                <rect x="0" y="0.5" width="15" height="8" rx="2" stroke="var(--text-secondary)" strokeWidth="1" />
                <rect x="1" y="1.5" width="11" height="6" rx="1" fill="var(--accent-green)" />
                <path d="M16 3.5V5.5C16.8 5.2 17.5 4.4 17.5 4.5C17.5 4.6 16.8 3.8 16 3.5Z" fill="var(--text-secondary)" />
              </svg>
            </div>
          </div>

          {/* Screen content — image */}
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
                className="object-contain object-top"
                sizes="260px"
                priority={active === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Home indicator bar */}
          <div className="absolute bottom-2 left-0 right-0 z-20 flex justify-center">
            <div
              className="w-20 h-1 rounded-full"
              style={{ background: "var(--text-secondary)", opacity: 0.4 }}
            />
          </div>
        </div>

        {/* Physical side buttons (decorative) */}
        {/* Volume up */}
        <div
          className="absolute rounded-l-sm"
          style={{
            left: -3,
            top: "20%",
            width: 3,
            height: 28,
            background: "var(--border)",
          }}
        />
        {/* Volume down */}
        <div
          className="absolute rounded-l-sm"
          style={{
            left: -3,
            top: "28%",
            width: 3,
            height: 28,
            background: "var(--border)",
          }}
        />
        {/* Power button */}
        <div
          className="absolute rounded-r-sm"
          style={{
            right: -3,
            top: "24%",
            width: 3,
            height: 44,
            background: "var(--border)",
          }}
        />

        {/* Prev / Next positioned outside the phone shell */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute -left-10 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-60"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              aria-label="Previous screen"
            >
              <ChevronLeft size={14} style={{ color: "var(--text-primary)" }} />
            </button>
            <button
              onClick={onNext}
              className="absolute -right-10 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-60"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
              aria-label="Next screen"
            >
              <ChevronRight size={14} style={{ color: "var(--text-primary)" }} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ── Main exported component ────────────────────────────────────────────────
/**
 * Mockup gallery with two frame variants:
 * - 'desktop' (default): browser chrome, 16:9 landscape
 * - 'mobile': phone shell, 9:19.5 portrait with status bar, side buttons, home indicator
 */
export default function MockupGallery({
  images,
  projectTitle,
  frameType = "desktop",
}: MockupGalleryProps) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  // ── Placeholder ────────────────────────────────────────────────────────────
  if (!images || images.length === 0) {
    return (
      <motion.div variants={item} className="w-full">
        <div
          className="w-full h-56 md:h-72 rounded-lg flex flex-col items-center justify-center gap-3"
          style={{ background: "var(--bg-canvas)", border: "2px dashed var(--border)" }}
        >
          <ImageOff size={28} style={{ color: "var(--text-secondary)" }} />
          <p
            className="text-xs font-mono uppercase tracking-widest"
            style={{ color: "var(--text-secondary)" }}
          >
            App mockups coming soon
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div variants={item} className="w-full flex flex-col gap-4">
      {/* Section label */}
      <span
        className="text-[10px] font-mono uppercase tracking-widest"
        style={{ color: "var(--text-secondary)" }}
      >
        App Preview — {images.length} screens
      </span>

      {/* Frame */}
      {frameType === "mobile" ? (
        <MobileFrame
          images={images}
          active={active}
          projectTitle={projectTitle}
          onPrev={prev}
          onNext={next}
        />
      ) : (
        <DesktopFrame
          images={images}
          active={active}
          projectTitle={projectTitle}
          onPrev={prev}
          onNext={next}
        />
      )}

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

      {/* Counter */}
      <p
        className="text-center text-[11px] font-mono"
        style={{ color: "var(--text-secondary)" }}
      >
        {active + 1} / {images.length}
      </p>
    </motion.div>
  );
}
