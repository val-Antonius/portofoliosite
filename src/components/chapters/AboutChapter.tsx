"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function AboutChapter() {
  return (
    <div className="h-full overflow-y-auto hidden-scrollbar pb-24">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 md:px-12 pb-24 max-w-4xl space-y-16"
      >
        <motion.section variants={itemAnim} className="space-y-6">
          <h2 className="text-2xl font-display text-primary">The Methodology</h2>
          <p className="text-lg md:text-xl leading-relaxed text-secondary border-l-2 border-amber pl-6 font-display italic">
            "A system is only as good as its foundational constraints."
          </p>
          <p className="text-primary/80 leading-relaxed text-base">
            Every application starts as chaos. Messy requirements, competing priorities, and evolving business logic. 
            My approach is systematic: isolate the complexity, build strict data contracts, and create UI components 
            that don't complain when the underlying data changes.
          </p>
        </motion.section>

        <motion.section variants={itemAnim} className="space-y-8">
          <h2 className="text-2xl font-display text-primary">Why I Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="panel bg-canvas/50">
              <div className="w-10 h-10 rounded-full bg-amber-bg flex items-center justify-center mb-6 border border-amber/20">
                <span className="font-mono font-bold text-amber text-xs">01</span>
              </div>
              <h3 className="font-bold text-primary mb-3 text-lg">Performance as a Feature</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Speed isn't a nice-to-have. It's the core metric of user trust. I obsess over bundle sizes, query optimization, and render cycles.
              </p>
            </div>
            <div className="panel bg-canvas/50">
               <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center mb-6">
                <span className="font-mono font-bold text-secondary text-xs">02</span>
              </div>
              <h3 className="font-bold text-primary mb-3 text-lg">Predictable Execution</h3>
              <p className="text-sm text-secondary leading-relaxed">
                I prefer boring, predictable code over clever hacks. When systems break, they should break loudly and informatively.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemAnim} className="space-y-6">
          <h2 className="text-2xl font-display text-primary">Off the Clock</h2>
          <p className="text-primary/80 leading-relaxed">
            When I'm not writing code, I'm usually analyzing data manually, exploring new visual languages, or enjoying a good cup of coffee while reading up on the latest architectural patterns. 
          </p>
        </motion.section>

      </motion.div>
    </div>
  );
}
