"use client";

import { motion } from "framer-motion";
import MetricCard from "../ui/MetricCard";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const panelAnim = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function OverviewChapter() {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="px-6 md:px-12 pb-12 h-full flex flex-col pt-0"
    >
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 md:grid-rows-[1fr_1fr]">
        {/* Hero Zone */}
        <motion.div variants={panelAnim} className="panel md:col-span-5 md:row-span-2 flex flex-col justify-between h-full">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-secondary mb-4">Information Systems</div>
            <p className="text-lg md:text-xl leading-relaxed text-primary">
              Fresh graduate with hands-on experience in building data-driven web applications, operational dashboards, and workflow automation tools. Strong in analytical problem-solving and system thinking.
            </p>
          </div>
        </motion.div>

        {/* Skills Preview */}
        <motion.div variants={panelAnim} className="panel md:col-span-4 md:row-span-1 flex flex-col justify-between">
          <div className="text-[11px] uppercase tracking-widest text-secondary mb-4">Core Stack</div>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Tailwind CSS", "React Query", "PostgreSQL"].map(s => (
              <span key={s} className="px-3 py-1.5 bg-amber-bg text-amber text-[11px] font-bold tracking-wide rounded-md border border-amber/20">{s}</span>
            ))}
          </div>
        </motion.div>

        {/* Impact Metrics Group */}
        <div className="md:col-span-3 md:row-span-2 flex flex-col gap-4 h-full">
           <motion.div variants={panelAnim} className="flex-1 min-h-[140px]">
             <MetricCard label="System Reliability" value={88} suffix=".9%" isPositive={true} />
           </motion.div>
           <motion.div variants={panelAnim} className="flex-1 min-h-[140px]">
             <MetricCard label="Resource Usage" value={40} prefix="-" suffix="%" isPositive={false} />
           </motion.div>
        </div>

        {/* Mini Timeline */}
        <motion.div variants={panelAnim} className="panel md:col-span-4 md:row-span-1 flex flex-col justify-center">
            <div className="text-[11px] uppercase tracking-widest text-secondary mb-4">Current Status</div>
            <div className="font-bold text-primary">Open for Opportunities</div>
            <div className="text-sm text-secondary">Jakarta, Indonesia</div>
        </motion.div>
      </div>
      
      {/* Status Bar */}
      <motion.div variants={panelAnim} className="mt-8 md:mt-12 h-11 border border-border rounded flex flex-shrink-0 items-center justify-between px-4 text-xs font-mono text-secondary bg-card">
        <div className="flex items-center gap-3">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent-green)" }}></span>
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent-green)" }}></span>
          </div>
          <span>System Online</span>
        </div>
        <span>ALL SYSTEMS NOMINAL</span>
      </motion.div>
    </motion.div>
  );
}
