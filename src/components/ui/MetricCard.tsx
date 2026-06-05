"use client";

import { useCountUp } from "../../hooks/useCountUp";

interface MetricCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  isPositive?: boolean;
  className?: string;
  variant?: "card" | "borderless";
}

export default function MetricCard({ 
  label, 
  value, 
  prefix = "", 
  suffix = "", 
  isPositive = true, 
  className = "",
  variant = "card"
}: MetricCardProps) {
  const { count, ref } = useCountUp(value, 1200);

  if (variant === "borderless") {
    return (
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`flex flex-col gap-1 ${className}`}
      >
        <span
          className="text-[10px] font-mono uppercase tracking-widest"
          style={{ color: "var(--text-secondary)" }}
        >
          {label}
        </span>
        <span
          className="font-mono text-4xl font-bold leading-none"
          style={{ color: isPositive ? "var(--accent-green)" : "var(--accent-amber)" }}
        >
          {prefix}
          {count}
          {suffix}
        </span>
      </div>
    );
  }

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
