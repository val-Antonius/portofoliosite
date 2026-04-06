"use client";

import { useCountUp } from "../../hooks/useCountUp";

interface MetricCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  isPositive?: boolean;
  className?: string;
}

export default function MetricCard({ label, value, prefix = "", suffix = "", isPositive = true, className = "" }: MetricCardProps) {
  const { count, ref } = useCountUp(value, 1200);

  return (
    <div className={`panel flex flex-col justify-between h-full ${className}`}>
      <span className="text-[11px] font-sans uppercase tracking-widest text-[#6B6560]">{label}</span>
      <div 
        ref={ref}
        className="font-mono text-4xl md:text-5xl font-bold mt-4"
        style={{ color: isPositive ? "var(--accent-green)" : "var(--accent-amber)" }}
      >
        {prefix}{count}{suffix}
      </div>
    </div>
  );
}
