"use client";

import { useCountUp } from "../../hooks/useCountUp";

interface MetricCardProps {
  label: string;
  value: number | string;
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
  // Try to parse the value as a number (handling commas if present)
  let numericValue: number | null = null;
  let rawStringValue: string | null = null;

  if (typeof value === "number") {
    numericValue = value;
  } else {
    // Remove commas to check if it's a number (e.g. "522,885" -> "522885")
    const cleanStr = value.replace(/,/g, "");
    const parsed = parseFloat(cleanStr);
    if (!isNaN(parsed)) {
      numericValue = parsed;
    } else {
      rawStringValue = value; // Non-numeric string like "Zero"
    }
  }

  const { count, ref } = useCountUp(numericValue ?? 0, 1200);

  // Helper to format the displayed count/value
  const getDisplayValue = () => {
    if (rawStringValue !== null) {
      return rawStringValue;
    }
    // If it was a string with commas originally, format the animated number with commas
    if (typeof value === "string" && value.includes(",")) {
      return count.toLocaleString("en-US");
    }
    return count;
  };

  const displayVal = getDisplayValue();

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
          {displayVal}
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
        {displayVal}
        {suffix}
      </span>
    </div>
  );
}
