"use client";

import { useRef, useState, useEffect } from "react";

const SCREENS = [
  { src: "/images/practice/practice-current-state-audit.png", label: "Current State Audit", caption: "Annotated gaps in the old table" },
  { src: "/images/practice/practice-improved-ui-annotated.png", label: "Improved UI", caption: "Redesign turned gaps into visible controls" },
];

export default function PracticeImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setCurrent(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * el.offsetWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {current > 0 && (
        <button
          onClick={() => scrollTo(current - 1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {current < SCREENS.length - 1 && (
        <button
          onClick={() => scrollTo(current + 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="text-gray-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {SCREENS.map((s, i) => (
          <div key={s.src} className="rounded-xl overflow-hidden bg-white shrink-0 w-full snap-center">
            <img src={s.src} alt={s.label} className="w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {SCREENS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? "bg-orange-500 w-4" : "bg-gray-300 w-1.5"}`}
            aria-label={`Go to screen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
