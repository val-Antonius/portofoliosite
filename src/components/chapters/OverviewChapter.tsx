"use client";

import { motion } from "framer-motion";
import BioCard from "../ui/BioCard";
import FlipMetricsCard from "../ui/FlipMetricsCard";
import HealthStatusCard from "../ui/HealthStatusCard";

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
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-12 gap-6 mb-8">

        {/* Bio Card (Left large column) */}
        <motion.div variants={panelAnim} className="lg:col-span-1 xl:col-span-6 h-full">
          <BioCard />
        </motion.div>

        {/* Flip Metrics Card (Middle column) */}
        <motion.div variants={panelAnim} className="lg:col-span-1 xl:col-span-3 h-full">
          <FlipMetricsCard />
        </motion.div>

        {/* Health Status Card (Right column) */}
        <motion.div variants={panelAnim} className="lg:col-span-1 xl:col-span-3 h-full">
          <HealthStatusCard />
        </motion.div>
      </div>
    </motion.div>
  );
}
