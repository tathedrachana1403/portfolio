"use client";

import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {
  FadeUp,
  WordReveal,
  CharReveal,
  ScrollReveal,
  CountStat,
  NavScrollShadow,
  ScrollProgressBar,
  FloatingOrbs,
  SpringCursor,
  MarqueeBand,
  WorkCard,
  MagneticButton,
  DrawUnderlineLink,
  type CaseData,
} from "./components/HomeAnimations";
import { motion } from "framer-motion";

// Per-project brand colors pulled from their actual pages
const cases: CaseData[] = [
  {
    number: "01",
    slug: "ambient-notes",
    title: "Ambient Notes",
    subtitle: "Verification-first AI documentation for clinical care",
    role: "Lead Product Designer · 0→1",
    tags: ["Human-AI Interaction", "Enterprise Workflow"],
    metrics: ["9"90%+ Same-day completion", "84→90% Accepted as-is", "36% less after-hours"],
    outcome: "90%+ same-day completion · 84→90% Accepted as-is ·  36% less after-hours documentation",
    description: "Led the design of a clinical AI workflow that records visits, generates a first draft of documentation, and keeps clinicians in control before anything enters the medical record.",
    dark: "#3b0764",
    soft: "#faf5ff",
    border: "#d8b4fe",
    muted: "#ede9fe",
    barColor: "#a855f7",
  },
  {
    number: "02",
    slug: "bpo-coding",
    title: "BPO AI Medical Coding Assistant",
    subtitle: "Rules-driven support for high-volume billing decisions",
    role: "Sole Product Designer",
    tags: ["Decision Support", "Rules-driven Automation"],
    metrics: ["40% fewer errors", "33.4% less rejections"],
    outcome: "40% fewer billing errors · 33.4% fewer claim rejections",
    description: "Led the design of an in-context decision-support workflow for medical coders working under a 95% accuracy target.",
    dark: "#1e40af",
    soft: "#eff6ff",
    border: "#bfdbfe",
    muted: "#dbeafe",
    barColor: "#3b82f6",
  },
  {
    number: "03",
    slug: "athenatext",
    title: "athenaText",
    subtitle: "Turning 300+ customer signals into a focused communication product strategy",
    role: "Lead Product Designer",
    tags: ["Enterprise Communication", "Product Strategy"],
    metrics: ["48% search adoption", "2.2→4.4 satisfaction", "$100K+ saved"],
    outcome: "48% search adoption · satisfaction 2.2→4.4 · $100K+ annual savings",
    description: "Synthesised 300+ customer signals, research, and behavioural data to reframe a fragmented backlog into a connected communication experience across search, bulk actions, pinning, unread states, and AI replies.",
    dark: "#1e40af",
    soft: "#eff6ff",
    border: "#bfdbfe",
    muted: "#dbeafe",
    barColor: "#6366f1",
  },
  {
    number: "04",
    slug: "practice-files",
    title: "Practice Files",
    subtitle: "From file storage to operational workflow",
    role: "Product Designer",
    tags: ["Enterprise Operations", "Document Systems"],
    metrics: ["40% less file time", "30% faster intake"],
    outcome: "40% less file-management time · 30% faster document intake",
    description: "Redesigned a static file table into a workflow for teams managing documents at scale — introducing search, filtering, bulk actions, progress states, notes, and activity history.",
    dark: "#3b0764",
    soft: "#faf5ff",
    border: "#d8b4fe",
    muted: "#ede9fe",
    barColor: "#8b5cf6",
  },
];

const stats = [
  { value: "1M+",    label: "Patient encounters",         note: "Ambient Notes" },
  { value: "209K+",  label: "Monthly active users",       note: "athenaText" },
  { value: "40%",    label: "Fewer billing errors",       note: "BPO Coding" },
  { value: "33.4%",  label: "Fewer claim rejections",     note: "BPO Coding" },
  { value: "3.6m",   label: "Saved per encounter",        note: "Ambient Notes" },
  { value: "$100K+", label: "Annual savings unlocked",    note: "athenaText" },
];

const leadership = [
  {
    tag: "AI Strategy",
    title: "AI Product Standards",
    body: "Defined the verification-first model for Ambient Notes — AI attribution, explicit approval gates, transfer-state visibility, and failure recovery.",
    impact: "Documented the pattern and shared it with two product design teams building AI-assisted workflows.",
  },
  {
    tag: "Product Direction",
    title: "Roadmap Strategy",
    body: "Reframed athenaText from stabilisation work to a communication-control roadmap, shifting prioritisation toward the user jobs behind search, bulk actions, pinning, and AI replies.",
    impact: "Changed how the team evaluated and sequenced the backlog.",
  },
  {
    tag: "Systems Thinking",
    title: "Design Patterns",
    body: "Established reusable patterns across complex workflows: AI verification, decision traceability, batch operations, and system-state visibility.",
    impact: "Patterns outlived the projects they came from.",
  },
];

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <SpringCursor />
      <NavScrollShadow>
        <Nav />
      </NavScrollShadow>

      <main className="pt-16">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative max-w-4xl mx-auto px-8 pt-20 pb-20 overflow-hidden">
          <FloatingOrbs />

          {/* Dot grid — fades to edges and bottom */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              backgroundImage: "radial-gradient(rgba(109,40,217,0.22) 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 90% 80% at 50% 10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 10%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 75%)",
            }}
          />

          {/* Badge row */}
          <FadeUp delay={0}>
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
                style={{ backgroundColor: "#faf5ff", border: "1.5px solid #d8b4fe" }}>
                <motion.span
                  className="w-1.5 h-1.5 rounded-full block shrink-0"
                  style={{ backgroundColor: "#c4b5fd" }}
                  animate={{ scale: [1, 1.7, 1], opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                />
                <span className="text-xs font-bold tracking-[0.14em] uppercase" style={{ color: "#3b0764" }}>Open to new roles</span>
              </div>
            </div>
          </FadeUp>

          {/* Name */}
          <div className="mb-4">
            <span
              className="block italic leading-none"
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                color: "#3b0764",
                letterSpacing: "0.01em",
              }}
            >
              <CharReveal delay={0.05}>{"Rachana Tathed"}</CharReveal>
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-black leading-[1.06] tracking-tight mb-8"
            style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)", color: "#0f172a" }}>
            <WordReveal delay={0.4}>{"Designing"}</WordReveal>{" "}
            <WordReveal delay={0.55}>{"products"}</WordReveal>{" "}
            <WordReveal delay={0.7}>{"people"}</WordReveal>
            <br />
            <WordReveal delay={0.85}>{"trust"}</WordReveal>{" "}
            <span style={{ color: "#3b0764" }}>
              <WordReveal delay={1.0}>{"to get it right."}</WordReveal>
            </span>
          </h1>

          {/* Body */}
          <FadeUp delay={1.2}>
            <p className="text-xl leading-relaxed mb-10 max-w-lg" style={{ color: "#64748b" }}>
              Senior Product Designer with 5 years of experience designing AI,{" "}
              <strong style={{ color: "#1e293b" }}>decision-support, and enterprise</strong> workflows where people need to make accurate, high-stakes decisions.
            </p>
          </FadeUp>


          {/* CTAs */}
          <FadeUp delay={1.5}>
            <div className="flex items-center gap-4">
              <MagneticButton
                href="#work"
                className="gap-3 px-8 py-4 text-sm font-bold rounded-full"
                style={{ backgroundColor: "#3b0764", color: "white", boxShadow: "0 0 0 1px rgba(139,92,246,0.3), 0 8px 32px rgba(59,7,100,0.25)" }}
              >
                See the work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  style={{ display: "inline-block" }}
                >→</motion.span>
              </MagneticButton>
              <DrawUnderlineLink
                href="#about"
                className="text-sm font-semibold"
                style={{ color: "#5b21b6" }}
              >
                About me
              </DrawUnderlineLink>
            </div>
          </FadeUp>
        </section>

        {/* ── MARQUEE ───────────────────────────────────────────────────────── */}
        <MarqueeBand />

        {/* ── STATS ─────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#0f0a1e" }}>
          <div className="max-w-4xl mx-auto px-8 py-14">
            <ScrollReveal>
              <p className="font-black mb-5" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "#a78bfa", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Impact
              </p>
              <h2 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", color: "#f8fafc" }}>
                Real numbers.{" "}
                <span style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontStyle: "italic", color: "#c4b5fd" }}>Shipped products.</span>
              </h2>
              <p className="text-base mb-10" style={{ color: "#6d6a85" }}>Not projections. Not prototypes.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ backgroundColor: "#2d1f4e" }}>
                {stats.map(s => (
                  <div key={s.label} style={{ backgroundColor: "#0f0a1e" }}>
                    <CountStat value={s.value} label={s.label} note={s.note} dark />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── SELECTED WORK ─────────────────────────────────────────────────── */}
        <section id="work" className="max-w-4xl mx-auto px-8 pt-16 pb-16">
          <ScrollReveal>
            <p className="font-black mb-5" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "#5b21b6", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Selected Work
            </p>
            <h2 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", color: "#0f172a" }}>
              Work that ships.{" "}
              <span style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontStyle: "italic", color: "#5b21b6" }}>Work that sticks.</span>
            </h2>
            <p className="text-base mb-10 max-w-xl" style={{ color: "#94a3b8" }}>
        
            </p>
          </ScrollReveal>

          <div className="space-y-2">
            {cases.map((c, i) => <WorkCard key={c.slug} c={c} index={i} />)}
          </div>
        </section>

        {/* ── LEADERSHIP ────────────────────────────────────────────────────── */}
        <section className="py-16" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
          <div className="max-w-4xl mx-auto px-8">
            <ScrollReveal>
              <p className="font-black mb-5" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "#5b21b6", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Leadership
              </p>
              <h2 className="font-black leading-tight mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", color: "#0f172a" }}>
                Work that moved{" "}
                <span style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontStyle: "italic", color: "#5b21b6" }}>beyond the brief.</span>
              </h2>
              <p className="text-base mb-10 max-w-xl leading-relaxed" style={{ color: "#64748b" }}>
                Some work ships a feature. Some work changes how a team thinks. These are the latter.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 items-stretch" style={{ borderTop: "2px solid #5b21b6", borderLeft: "1px solid #d8b4fe" }}>
              {leadership.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.08} className="flex">
                  <div className="flex flex-col p-7 w-full" style={{ borderRight: "1px solid #d8b4fe", borderBottom: "1px solid #d8b4fe" }}>
                    {/* Tag */}
                    <span
                      className="self-start text-xs font-bold px-2.5 py-1 rounded-full mb-5"
                      style={{ backgroundColor: "#ede9fe", color: "#5b21b6" }}
                    >
                      {item.tag}
                    </span>

                    {/* Title */}
                    <p className="text-base font-black mb-2" style={{ color: "#3b0764" }}>{item.title}</p>

                    {/* Body */}
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#64748b" }}>{item.body}</p>

                    {/* Impact line */}
                    <p className="text-xs font-semibold mt-5 pt-4 leading-snug" style={{ color: "#5b21b6", borderTop: "1px solid #ede9fe" }}>
                      ↗ {item.impact}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
        <section id="about" className="max-w-4xl mx-auto px-8 py-16">

          {/* Header */}
          <ScrollReveal>
            <p className="font-black mb-5" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "#5b21b6", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              About
            </p>
            <h2 className="font-black leading-tight mb-0" style={{ fontSize: "clamp(2.5rem, 5vw, 3.8rem)", color: "#0f172a" }}>
              Rachana{" "}
              <span style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontStyle: "italic", color: "#3b0764" }}>Tathed.</span>
            </h2>
          </ScrollReveal>

          {/* Pull quote */}
          <ScrollReveal delay={0.05}>
            <div className="mt-8 mb-10 pl-5" style={{ borderLeft: "3px solid #d8b4fe" }}>
              <p
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  color: "#3b0764",
                  lineHeight: 1.4,
                }}
              >
                "My strongest work is not just designing interfaces it's improving the quality of decisions teams make around them."
              </p>
            </div>
          </ScrollReveal>

          {/* Two-col body */}
          <ScrollReveal delay={0.08}>
            <div className="rounded-2xl overflow-hidden mt-8" style={{ border: "1px solid #e2e8f0" }}>
              <div className="grid md:grid-cols-2">

                {/* Left: bio */}
                <div className="p-7" style={{ borderRight: "1px solid #e2e8f0" }}>
                  <p className="text-sm font-bold tracking-[0.12em] uppercase mb-4" style={{ color: "#c4b5fd" }}>About</p>
                  <p className="text-base text-slate-600 leading-relaxed mb-3">
                    5 years of designing <strong className="text-slate-800">enterprise products</strong> at athenahealth across AI-assisted workflows, clinical decision support, communication, and operational systems.
                  </p>
                  <p className="text-base text-slate-500 leading-relaxed mb-6">
                    I work across AI, operations, and complex systems: turning ambiguous problems into clear workflows, scalable patterns, and products that hold up under pressure.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Human-AI workflows", "Decision support", "Enterprise UX", "Operational design", "Product strategy", "Trust & accountability"].map((f, i) => (
                      <motion.span
                        key={f}
                        initial={{ opacity: 0, y: 4 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: i * 0.04, duration: 0.24 }}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ backgroundColor: "#faf5ff", color: "#5b21b6", border: "1px solid #ede9fe" }}
                      >
                        {f}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Right: experience */}
                <div className="p-7" style={{ backgroundColor: "#faf5ff" }}>
                  <p className="text-sm font-bold tracking-[0.12em] uppercase mb-4" style={{ color: "#c4b5fd" }}>Experience</p>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-base font-black" style={{ color: "#3b0764" }}>Senior UX/UI Designer</p>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full" style={{ backgroundColor: "#ede9fe", color: "#5b21b6" }}>Now</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-1">Enterprise Workflows &amp; Human-AI Systems</p>
                    <p className="text-sm font-semibold mb-1" style={{ color: "#5b21b6" }}>athenahealth</p>
                    <p className="text-sm text-slate-400">Jan 2022 – Present</p>
                  </div>

                  <div className="pt-5" style={{ borderTop: "1px solid #ede9fe" }}>
                    <p className="text-sm font-bold tracking-[0.12em] uppercase mb-3" style={{ color: "#c4b5fd" }}>Specialisation</p>
                    <div className="space-y-2">
                      {["Human-AI interaction design", "Complex enterprise workflows", "Decision support systems"].map(s => (
                        <div key={s} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#d8b4fe" }} />
                          <p className="text-sm text-slate-500">{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-5 pt-4" style={{ borderTop: "1px solid #ede9fe" }}>
                    <motion.span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: "#a78bfa" }}
                      animate={{ scale: [1, 1.8, 1], opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    />
                    <p className="text-sm font-semibold" style={{ color: "#5b21b6" }}>Open to new roles</p>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── CONTACT ───────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 overflow-hidden relative" style={{ backgroundColor: "#0f0a1e" }}>
          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(167,139,250,0.35) 1.5px, transparent 1.5px)",
              backgroundSize: "32px 32px",
              maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,0.5) 0%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,0.5) 0%, transparent 70%)",
            }}
          />
          {/* Ambient glow blobs */}
          <div className="absolute pointer-events-none" style={{ width: 600, height: 600, left: "-10%", top: "-20%", background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="absolute pointer-events-none" style={{ width: 400, height: 400, right: "-5%", bottom: "-10%", background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 70%)", filter: "blur(40px)" }} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 mb-10">
                <motion.span
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full block"
                  style={{ backgroundColor: "#c4b5fd" }}
                />
                <span className="font-black" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "#a78bfa", letterSpacing: "0.06em", textTransform: "uppercase" }}>Contact</span>
              </div>
              <h2 className="font-black leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#f8fafc" }}>
                Let's build products{" "}
                <span style={{ fontFamily: "var(--font-instrument-serif)", fontWeight: 400, fontStyle: "italic", color: "#c4b5fd" }}>where</span>
                <br />
                complexity has to work.
              </h2>
              <p className="mb-10 leading-relaxed text-base" style={{ color: "#9490a8" }}>
                Senior UX/UI Designer · Senior Product Designer · Lead Designer
              </p>
              <div className="flex flex-wrap items-center gap-8 text-sm">
                <DrawUnderlineLink
                  href="mailto:tathedrachana14@gmail.com"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#c4b5fd" }}
                >
                  tathedrachana14@gmail.com
                </DrawUnderlineLink>
                <DrawUnderlineLink
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#c4b5fd" }}
                >
                  LinkedIn ↗
                </DrawUnderlineLink>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
