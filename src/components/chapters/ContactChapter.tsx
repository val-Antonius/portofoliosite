"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactChapter() {
  const { contact } = portfolioData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-6 md:px-12 h-full flex flex-col items-center justify-center pt-0 space-y-12 pb-24"
    >
       <div className="text-center max-w-2xl mx-auto space-y-6">

         <p className="text-primary/70 text-lg leading-relaxed">
           Open for new opportunities and interesting technical challenges. If you need a reliable engine for your product, let's talk.
         </p>
       </div>

       <div className="panel w-full max-w-xl flex flex-col items-center p-8 space-y-8">
         {/* Email Section */}
         <a href={`mailto:${contact.email}`} className="group flex flex-col items-center justify-center gap-4 hover:text-amber transition-colors w-full">
           <div className="w-16 h-16 rounded-full bg-amber-bg flex items-center justify-center text-amber group-hover:scale-110 transition-transform">
             <Mail size={24} />
           </div>
           <div className="text-lg font-mono text-secondary group-hover:text-amber transition-colors">
             {contact.email}
           </div>
         </a>

         {/* Divider */}
         <div className="w-full h-px bg-border"></div>

         {/* Social Links Section */}
         <div className="w-full flex flex-col sm:flex-row gap-4">
           <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-4 py-3 bg-canvas border border-border rounded-lg hover:border-amber hover:text-amber transition-colors text-primary">
             <LinkedinIcon size={18} />
             <span className="text-sm font-medium">LinkedIn</span>
           </a>
           <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-4 py-3 bg-canvas border border-border rounded-lg hover:border-amber hover:text-amber transition-colors text-primary">
             <GithubIcon size={18} />
             <span className="text-sm font-medium">GitHub</span>
           </a>
         </div>

         {/* Location */}
         <div className="flex items-center gap-2 pt-2 text-xs text-secondary font-mono">
           <MapPin size={14} />
           {contact.location}
         </div>
       </div>
    </motion.div>
  );
}
