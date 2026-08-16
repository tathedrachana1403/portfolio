"use client";

import { motion, useInView, useScroll, useSpring, useMotionValue, useAnimation, AnimatePresence, useMotionTemplate, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";

export type CaseData = {
  number: string;
  slug: string;
  title: string;
  role: string;
  tags: string[];
  metrics: string[];
  description: string;
  dark: string;
  soft: string;
  border: string;
  muted: string;
  barColor: string;
  image?: string;
};

// ─── Scroll progress bar ──────────────────────────────────────────────────────
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%", background: "linear-gradient(90deg, #5b21b6, #3b82f6, #8b5cf6)" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-50"
    />
  );
}

// ─── Spring cursor spotlight ──────────────────────────────────────────────────
export function SpringCursor() {
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.8 });
  const [visible, setVisible] = useState(false);
  const background = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, rgba(139,92,246,0.07), transparent 55%)`;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ background, opacity: visible ? 1 : 0 }}
    />
  );
}

// ─── Keep CursorSpotlight as alias for backward compat ────────────────────────
export { SpringCursor as CursorSpotlight };

// ─── Hero background — mesh gradient + orbs + grain ──────────────────────────
const ORBS = [
  { w: 700, h: 700, x: "-8%",  y: "-30%", color: "rgba(139,92,246,0.18)", dur: 16, dx: [0, 50, -25, 0], scale: [1, 1.1, 0.95, 1] },
  { w: 500, h: 500, x: "55%",  y: "-5%",  color: "rgba(79,70,229,0.13)",  dur: 20, dx: [0, -35, 20, 0], scale: [1, 0.9, 1.08, 1]  },
  { w: 400, h: 400, x: "70%",  y: "50%",  color: "rgba(168,85,247,0.12)", dur: 13, dx: [0, 25, -18, 0], scale: [1, 1.15, 0.93, 1] },
  { w: 300, h: 300, x: "20%",  y: "55%",  color: "rgba(99,102,241,0.09)", dur: 17, dx: [0, -20, 15, 0], scale: [1, 1.05, 0.97, 1] },
];

export function FloatingOrbs() {
  const { scrollY } = useScroll();
  const y0 = useTransform(scrollY, [0, 700], [0, -110]);
  const y1 = useTransform(scrollY, [0, 700], [0, -60]);
  const y2 = useTransform(scrollY, [0, 700], [0, -140]);
  const y3 = useTransform(scrollY, [0, 700], [0, -40]);
  const parallax = [y0, y1, y2, y3];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base mesh gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 0% 0%, rgba(139,92,246,0.10) 0%, transparent 60%)," +
            "radial-gradient(ellipse 80% 60% at 100% 20%, rgba(99,102,241,0.09) 0%, transparent 55%)," +
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(168,85,247,0.07) 0%, transparent 50%)",
        }}
      />
      {/* Orbs */}
      {ORBS.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: o.w, height: o.h, left: o.x, top: o.y,
            background: o.color,
            filter: "blur(72px)",
            y: parallax[i],
          }}
          animate={{ x: o.dx, scale: o.scale }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
        />
      ))}
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
        }}
      />
    </div>
  );
}

// ─── Character-by-character blur reveal ──────────────────────────────────────
export function CharReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  const chars = children.split("");
  return (
    <>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: delay + i * 0.025, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}

// ─── Word-by-word blur reveal (hero heading) ──────────────────────────────────
export function WordReveal({ children, delay = 0 }: { children: string; delay?: number }) {
  const words = children.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: delay + i * 0.03, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
}

// ─── Fade-up (initial load, not scroll) ──────────────────────────────────────
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Scroll reveal — replays every time ──────────────────────────────────────
export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}) {
  const initial =
    direction === "left" ? { opacity: 0, x: -48 }
    : direction === "right" ? { opacity: 0, x: 48 }
    : { opacity: 0, y: 36 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── WorkCard ─────────────────────────────────────────────────────────────────
export function WorkCard({
  c,
  index,
}: {
  c: CaseData;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <ScrollReveal direction="up" delay={index * 0.07}>
      <Link href={`/work/${c.slug}`} className="block group">
        <motion.div
          className="relative overflow-hidden rounded-xl my-2 cursor-pointer"
          style={{
            border: `1px solid ${hovered ? c.border : "#e2e8f0"}`,
            backgroundColor: hovered ? c.soft : "#ffffff",
          }}
          animate={{
            y: hovered ? -3 : 0,
            boxShadow: hovered
              ? "0 10px 26px rgba(15, 23, 42, 0.08)"
              : "0 2px 8px rgba(15, 23, 42, 0.03)",
          }}
          transition={{ duration: 0.2 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >

          {/* Accent bar */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 z-20 w-[4px]"
            style={{ backgroundColor: c.barColor }}
            animate={{ opacity: hovered ? 1 : 0.2 }}
            transition={{ duration: 0.2 }}
          />

          {/* ─── PROJECT IMAGE ──────────────────────────────────────────── */}
<div className="relative w-full aspect-[2/1] overflow-hidden">
  <motion.img
    src={c.image}
    alt={c.title}
    className="absolute inset-0 w-full h-full object-cover"
    animate={{
      scale: hovered ? 1.035 : 1,
    }}
    transition={{
      duration: 0.35,
      ease: "easeOut",
    }}
  />
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundColor: hovered
                  ? "rgba(15, 23, 42, 0.08)"
                  : "rgba(15, 23, 42, 0)",
              }}
              transition={{ duration: 0.2 }}
            />

            {/* Arrow appears only on hover */}
            <motion.div
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm"
              animate={{
                opacity: hovered ? 1 : 0,
                scale: hovered ? 1 : 0.85,
              }}
              transition={{ duration: 0.2 }}
              style={{ color: c.barColor }}
            >
              →
            </motion.div>
          </div>

          {/* ─── PROJECT TEXT ───────────────────────────────────────────── */}
          <div className="px-6 py-5">

            {/* Project number + name */}
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-[10px] font-black tabular-nums"
                style={{ color: c.barColor }}
              >
                {c.number}
              </span>

              <h3
                className="font-black leading-tight"
                style={{
                  fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)",
                  color: "#0f172a",
                }}
              >
                {c.title}
              </h3>
            </div>

            {/* Larger description */}
            <p
              className="text-xl leading-relaxed max-w-4xl"
              style={{ color: "#64748b" }}
            >
              {c.description}
            </p>

          </div>
        </motion.div>
      </Link>
    </ScrollReveal>
  );
}

// ─── 3D tilt + slide-in case card ────────────────────────────────────────────
export function CaseCard({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: ny * -5, y: nx * 5 });
  }, []);

  const initial =
    direction === "left" ? { opacity: 0, x: -60 }
    : direction === "right" ? { opacity: 0, x: 60 }
    : { opacity: 0, y: 32 };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      style={{ transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Count-up stat — replays every time ──────────────────────────────────────
function parseValue(raw: string) {
  const m = raw.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3] };
}

export function CountStat({ value, label, note, dark = false }: { value: string; label: string; note?: string; dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const parsed = parseValue(value);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView || !parsed) return;
    const { num } = parsed;
    const duration = 1100;
    const start = performance.now();
    const isFloat = num % 1 !== 0;
    let raf: number;
    const tick = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(isFloat ? (num * eased).toFixed(1) : String(Math.round(num * eased)));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(isFloat ? String(num) : String(num));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="px-5 py-7 flex flex-col items-start cursor-default"
    >
      <p
        className="text-3xl font-black tabular-nums leading-none mb-2"
        style={{
          color: dark ? "#c4b5fd" : "#0f172a",
          textShadow: dark ? "0 0 32px rgba(196,181,253,0.35)" : "none",
        }}
      >
        {parsed ? `${parsed.prefix}${display}${parsed.suffix}` : value}
      </p>
      <p className="text-xs font-medium leading-snug mb-1.5" style={{ color: dark ? "#e2e8f0" : "#475569" }}>{label}</p>
      {note && (
        <p className="text-[10px] font-semibold tracking-wide" style={{ color: dark ? "#6b5fa8" : "#94a3b8" }}>{note}</p>
      )}
    </motion.div>
  );
}

// ─── Magnetic CTA button ──────────────────────────────────────────────────────
export function MagneticButton({
  children,
  href,
  className,
  style,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springX = useSpring(btnX, { stiffness: 200, damping: 20 });
  const springY = useSpring(btnY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    btnX.set((e.clientX - cx) * 0.3);
    btnY.set((e.clientY - cy) * 0.3);
  };

  const handleMouseLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <motion.a
      href={href}
      style={{ x: springX, y: springY, display: "inline-flex", alignItems: "center", ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

// ─── Animated underline draw link ────────────────────────────────────────────
export function DrawUnderlineLink({
  children,
  href,
  target,
  rel,
  className,
  style,
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`relative inline-block ${className ?? ""}`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-px"
        style={{ backgroundColor: "currentColor" }}
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </a>
  );
}

// ─── Marquee skills band ──────────────────────────────────────────────────────
const MARQUEE_ITEMS = [
  "Human-AI Interaction", "Enterprise Workflows", "Decision Support", "Clinical AI",
  "Product Strategy", "Operational Design", "Verification-first UX", "Audit Trails",
  "Bulk Operations", "System State Visibility", "Stakeholder Alignment", "Risk & Trust Design",
];

export function MarqueeBand() {
  const controls = useAnimation();
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: 28, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  return (
    <div
      className="overflow-hidden border-y border-gray-100 py-3 my-4 select-none"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: ["0%", "-50%"],
          transition: { duration: 28, repeat: Infinity, ease: "linear" },
        })
      }
    >
      <motion.div
        animate={controls}
        className="flex gap-6 whitespace-nowrap w-max"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 text-xs font-medium text-gray-400 uppercase tracking-widest">
            {item}
            <span className="text-purple-300">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Nav scroll shadow ────────────────────────────────────────────────────────
export function NavScrollShadow({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      className="transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 1px 16px 0 rgba(0,0,0,0.07)" : "none" }}
    >
      {children}
    </div>
  );
}

// ─── Stagger tag chips ────────────────────────────────────────────────────────
export function StaggerTags({ children }: { children: React.ReactNode[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {children.map((child, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.82 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: i * 0.05, duration: 0.28, ease: "easeOut" }}
        >
          {child}
        </motion.span>
      ))}
    </div>
  );
}

// ─── Animated section label with draw-underline ───────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative inline-block"
    >
      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">{children}</p>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-2 left-0 right-0 h-px bg-purple-300 origin-left"
      />
    </motion.div>
  );
}
