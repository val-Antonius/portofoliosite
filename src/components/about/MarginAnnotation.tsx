"use client";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MarginAnnotationProps {
  label: string;
  text: string;
  /** Pass className="border-t-0 pt-0" for the very first block (no top rule) */
  className?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MarginAnnotation({
  label,
  text,
  className = "",
}: MarginAnnotationProps) {
  return (
    <div className={`border-t border-border pt-3 ${className}`}>
      {/* Arrow-prefixed label */}
      <div className="font-mono text-[10px] tracking-widest text-amber mb-1.5">
        → {label}
      </div>

      {/* Annotation body */}
      <p className="text-[11px] leading-snug text-secondary">{text}</p>
    </div>
  );
}
