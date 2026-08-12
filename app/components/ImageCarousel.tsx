"use client";

import { useRef, useState, useEffect } from "react";

const SCREENS = [
  { src: "/images/ambient/ambient-design-01-schedule.png", label: "01 · Schedule", caption: "Ambient entry point per visit" },
  { src: "/images/ambient/ambient-design-02-recording.png", label: "02 · Recording", caption: "4 explicit states, always visible" },
  { src: "/images/ambient/ambient-design-03-generate-preview.png", label: "03 · Generate Preview", caption: "Draft sections while context is fresh" },
  { src: "/images/ambient/ambient-design-04-transfer.png", label: "04 · Transfer", caption: "Section-level status and recovery" },
  { src: "/images/ambient/ambient-design-05-draft-summary.png", label: "05 · Draft Summary", caption: "Clinician reviews before anything enters chart" },
  { src: "/images/ambient/ambient-design-06-review-finalization.png", label: "06 · Review & Finalization", caption: "Explicit approval at final step" },
];

export default function ImageCarousel() {
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
      {/* Left arrow */}
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

      {/* Right arrow */}
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

      {/* Scroll track */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {SCREENS.map((s, i) => (
          <div key={s.src} className="rounded-xl overflow-hidden border border-gray-200 bg-white shrink-0 w-full snap-center">
            <img src={s.src} alt={s.label} className="w-full object-cover" />
            <div className="px-4 py-3 flex items-center justify-between">
              <p className="text-xs text-gray-400">{s.caption}</p>
              <p className="text-xs text-gray-300">{i + 1} / {SCREENS.length}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-1.5 mt-3">
        {SCREENS.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "w-4" : "bg-gray-300"}`}
            style={i === current ? { backgroundColor: "#240046" } : {}}
            aria-label={`Go to screen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
