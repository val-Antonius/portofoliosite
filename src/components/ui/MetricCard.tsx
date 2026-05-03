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
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col gap-1 p-3 rounded-lg ${className}`}
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
    >
      <span
        className="text-[9px] font-mono uppercase tracking-widest"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </span>
      <span
        className="font-mono text-2xl font-bold leading-none"
        style={{ color: isPositive ? "var(--accent-green)" : "var(--accent-red)" }}
      >
        {prefix}
        {count}
        {suffix}
      </span>
    </div>
  );
}
