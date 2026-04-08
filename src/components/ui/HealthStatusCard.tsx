"use client";

import { usePortfolioContext } from "../../context/PortfolioContext";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";

export default function HealthStatusCard() {
  const { setChapter } = usePortfolioContext();

  return (
    <div className="panel h-full flex flex-col justify-between relative overflow-hidden group">
      {/* Decorative pulse background */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-green-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors duration-700"></div>

      <div className="relative z-10 w-full mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] font-sans uppercase tracking-widest text-secondary">System Health</span>
          <div className="flex items-center gap-2 text-[10px] font-mono text-green-600 bg-green-500/10 px-2 py-1 rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            ONLINE
          </div>
        </div>

        <div className="space-y-4">
          {/* Availability */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-secondary">
              <Briefcase size={14} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-0.5">Availability</div>
              <div className="text-[13px] font-medium text-primary">Open for Full-time</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-secondary">
              <MapPin size={14} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-0.5">Location</div>
              <div className="text-[13px] font-medium text-primary">Jakarta (Remote-friendly)</div>
            </div>
          </div>

          {/* Response Time */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 text-secondary">
              <Clock size={14} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-secondary mb-0.5">Response Time</div>
              <div className="text-[13px] font-medium text-primary">&lt; 24 Hours</div>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setChapter("contact")}
        className="relative z-10 flex items-center justify-between w-full p-3 rounded bg-canvas border border-border hover:border-amber hover:text-amber text-primary transition-all group/btn cursor-pointer"
      >
        <span className="text-xs font-mono uppercase tracking-widest font-semibold">Initiate Contact</span>
        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}
