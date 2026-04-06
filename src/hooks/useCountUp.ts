"use client";

import { useEffect, useState } from "react";
import { useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export function useCountUp(endValue: number, durationMs: number = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const t = Math.min(progress / durationMs, 1);
      
      // easeOutExpo
      const easeOut = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      
      setCount(Math.floor(easeOut * endValue));

      if (progress < durationMs) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);
  }, [endValue, durationMs, isInView]);

  return { count, ref };
}
