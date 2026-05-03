"use client";

import React, { useState, useEffect } from 'react';
import { Chapter } from '@/types';

interface HeadingFormulaProps {
  chapter: Chapter;
}

export default function HeadingFormula({ chapter }: HeadingFormulaProps) {
  const [phase, setPhase] = useState<'initial' | 'question' | 'transition' | 'answer'>('initial');

  useEffect(() => {
    // 5. Patuhi aturan prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setPhase('answer');
      return;
    }

    // Reset on mount
    setPhase('initial');

    // 1. Chapter dimuat -> Pertanyaan muncul perlahan (fade in)
    const t0 = setTimeout(() => setPhase('question'), 50);
    
    // 2. Pertanyaan tertahan selama ~2.5 - 3 detik (total ~3000ms from start)
    const t1 = setTimeout(() => setPhase('transition'), 3000);
    
    // 3. Pertanyaan menghilang perlahan (fade out) -> take ~700ms
    // 4. Jawaban muncul perlahan (fade in) dan menetap seterusnya
    const t2 = setTimeout(() => setPhase('answer'), 3700);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [chapter.id]);

  const renderAnswer = (text: string) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => {
      // 6. Warna aksen (index ganjil setelah split)
      if (i % 2 === 1) {
        return <span key={i} className="font-bold text-amber">{part}</span>;
      }
      return <span key={i} className="font-light text-primary">{part}</span>;
    });
  };

  return (
    <div className="px-6 py-8 md:px-12 md:py-12">
      <div className="grid grid-cols-1 grid-rows-1 items-center relative">
        {/* Question Row */}
        <div 
          className={`col-start-1 row-start-1 transition-opacity duration-[700ms] ease-in-out ${phase === 'question' ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={phase !== 'question'}
          style={{ pointerEvents: phase === 'question' ? 'auto' : 'none' }}
        >
          <p className="font-display italic text-secondary" style={{ fontSize: "clamp(20px, 3.5vw, 28px)" }}>
            "{chapter.headingFormula.question}"
          </p>
        </div>

        {/* Answer Row */}
        <div 
          className={`col-start-1 row-start-1 transition-opacity duration-[700ms] ease-in-out ${phase === 'answer' ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={phase !== 'answer'}
          style={{ pointerEvents: phase === 'answer' ? 'auto' : 'none' }}
        >
          <h1 className="font-display tracking-tight" style={{ fontSize: "clamp(36px, 5vw, 56px)" }}>
            {renderAnswer(chapter.headingFormula.answer)}
          </h1>
        </div>
      </div>
    </div>
  );
}
