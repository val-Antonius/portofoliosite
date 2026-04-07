"use client";

import { motion } from "framer-motion";
import MetricCard from "../ui/MetricCard";
import BioCard from "../ui/BioCard";

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
      className="px-6 md:px-12 pb-12 h-full flex flex-col pt-0 hidden-scrollbar overflow-y-auto mix-blend-normal"
    >
      <div className="flex-1 grid grid-cols-1 xl:grid-cols-12 gap-6 h-full mb-8">

        {/* Massive Hero Zone (Bio Card absorbing previous timeline and skills) */}
        <motion.div variants={panelAnim} className="xl:col-span-8 h-full">
          <BioCard />
        </motion.div>

        {/* Impact Metrics Group */}
        <div className="xl:col-span-4 flex flex-col sm:flex-row xl:flex-col gap-6 h-full">
          <motion.div variants={panelAnim} className="flex-1">
            <MetricCard label="System Reliability" value={88} suffix=".9%" isPositive={true} />
          </motion.div>
          <motion.div variants={panelAnim} className="flex-1">
            <MetricCard label="Resource Usage" value={40} prefix="-" suffix="%" isPositive={false} />
          </motion.div>
        </div>
      </div>

      {/* Status Bar */}
      <motion.div variants={panelAnim} className="h-11 border border-border rounded flex flex-shrink-0 items-center justify-between px-4 text-xs font-mono text-secondary bg-card">
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
