"use client";

import Image from "next/image";

export default function BioCard() {
  const coreStack = ["JavaScript", "TypeScript", "React", "NodeJS", "SQL", "Rest API", "Python", "Machine Learning", "System Architecture", "IoT Integration", "Tableau", "Figma"];

  return (
    <div className="panel h-full flex flex-col justify-between">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">

        {/* Left: Profile Picture (Compact) */}
        <div className="flex items-start justify-center md:justify-start md:border-r border-border md:pr-8 py-2 shrink-0">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-border p-1.5 flex-shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-canvas">
              {/* Fallback color if image misses */}
              <img
                src="/pic/profilespic.png"
                alt="Antonius Valentino"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Bio Information (Fluid rest of space) */}
        <div className="flex-1 flex flex-col justify-center py-2">
          <div className="text-[11px] font-mono uppercase tracking-widest text-secondary mb-3">
            Information Systems
          </div>
          <p className="text-base md:text-lg leading-relaxed text-primary mb-6">
            Building <span className="text-amber font-semibold">auditable predictive systems</span> and operational tools that turn complex data into <span className="text-amber font-semibold">decisions</span>
          </p>
          {/* <div className="flex items-center gap-2 text-[13px] text-secondary font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6B6560]/60"></div>
            Open for opportunities • Jakarta
          </div> */}
        </div>
      </div>

      {/* Bottom: Core Stack */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="text-[11px] font-mono uppercase tracking-widest text-secondary mb-4">
          Core Stack
        </div>
        <div className="flex flex-wrap gap-3">
          {coreStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 bg-canvas font-mono text-[13px] text-primary rounded-full border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
