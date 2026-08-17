"use client";

import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ambientHero from "../images/ambient/Hero.png";
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
  role: "Lead Product Designer · 0→1",
  tags: [],
  metrics: [],
  image: "/images/ambient/Hero.png",
  description:
    "Led the design of an AI-assisted clinical documentation workflow that helped clinicians reduce documentation burden, with 90%+ of documentation completed the same day.",
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
  role: "Sole Product Designer",
  tags: [],
  metrics: [],
  image: "/images/bpo/Hero.png",
  description:
    "Led the design of an AI-assisted coding workflow that helped medical coders reduce cognitive load and billing errors by 40%.",
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
  role: "Lead Product Designer",
  tags: [],
  metrics: [],
  image: "/images/atext/Hero.png",
  description:
    "Synthesized 300+ customer requests and research insights to shape new capabilities for a healthcare messaging product, increasing satisfaction from 2.2 to 4.4.",
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
  role: "Product Designer",
  tags: [],
  metrics: [],
  image: "/images/practice/Hero.png",
  description:
    "Redesigned file management for Customer Success and Operations teams to make finding, managing, and tracking documents easier, reducing file-management time by 40%.",
  dark: "#3b0764",
  soft: "#faf5ff",
  border: "#d8b4fe",
  muted: "#ede9fe",
  barColor: "#8b5cf6",
},
];



const leadership = [
  {
    tag: "AI Strategy",
    title: "AI Product Standards",
    body: "Defined the verification first model for Ambient Notes AI attribution, explicit approval gates, transfer-state visibility, and failure recovery.",
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
<section
  className="relative w-full overflow-hidden"
  style={{
    background:
      "linear-gradient(180deg, #faf5ff 0%, #f8f3ff 58%, #ffffff 100%)",
  }}
>
  <FloatingOrbs />

  {/* Dot grid — fades to edges and bottom */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(rgba(109,40,217,0.16) 1.5px, transparent 1.5px)",
      backgroundSize: "28px 28px",
      maskImage:
        "radial-gradient(ellipse 90% 80% at 50% 10%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 40%, transparent 75%)",
      WebkitMaskImage:
        "radial-gradient(ellipse 90% 80% at 50% 10%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 40%, transparent 75%)",
    }}
  />

  {/* Hero content */}
  <div className="relative max-w-4xl mx-auto px-8 pt-20 pb-20 md:pt-24 md:pb-24">

    {/* Name */}
    <FadeUp delay={0}>
      <div className="mb-5">
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
          <CharReveal delay={0.05}>
            {"Rachana Tathed"}
          </CharReveal>
        </span>
      </div>
    </FadeUp>

    {/* Main headline */}
    <h1
      className="font-black tracking-[-0.045em] leading-[0.96] mb-7"
      style={{
        fontSize: "clamp(2.7rem, 6.5vw, 5rem)",
        color: "#0f172a",
      }}
    >
      <span className="block">
        <WordReveal delay={0.4}>{"I design"}</WordReveal>
      </span>

      <span className="block">
        <WordReveal delay={0.55}>{"products that"}</WordReveal>
      </span>

      <span className="block">
        <WordReveal delay={0.7}>{"simplify complex"}</WordReveal>
      </span>

      <span
        className="block"
        style={{
          color: "#3b0764",
        }}
      >
        <WordReveal delay={0.85}>{"workflows"}</WordReveal>
      </span>
    </h1>

    {/* Body */}
    <FadeUp delay={1.05}>
      <p
        className="text-xl md:text-[1.45rem] leading-[1.5] mb-9 max-w-2xl"
        style={{
          color: "#64748b",
        }}
      >
        I turn complexity into clear,{" "}
        <strong
          style={{
            color: "#1e293b",
          }}
        >
          useful experiences
        </strong>{" "}
        that help people focus on what matters.
      </p>
    </FadeUp>

    {/* CTAs */}
    <FadeUp delay={1.3}>
      <div className="flex items-center gap-4">
        <MagneticButton
          href="#work"
          className="gap-3 px-8 py-4 text-sm font-bold rounded-full"
          style={{
            backgroundColor: "#3b0764",
            color: "white",
            boxShadow:
              "0 0 0 1px rgba(139,92,246,0.3), 0 8px 32px rgba(59,7,100,0.22)",
          }}
        >
          See the work

          <motion.span
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
            }}
          >
            →
          </motion.span>
        </MagneticButton>

        <DrawUnderlineLink
          href="#about"
          className="text-sm font-semibold"
          style={{
            color: "#5b21b6",
          }}
        >
          About me
        </DrawUnderlineLink>
      </div>
    </FadeUp>

  </div>
</section>
        {/* ── MARQUEE ───────────────────────────────────────────────────────── */}
        <MarqueeBand />

        
        {/* ── SELECTED WORK ─────────────────────────────────────────────────── */}
        <section id="work" className="max-w-4xl mx-auto px-8 pt-16 pb-16">
  <ScrollReveal>
    <p
      className="font-black mb-8"
      style={{
        fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
        color: "#5b21b6",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      Selected Work
    </p>
  </ScrollReveal>

  <div className="space-y-2">
    {cases.map((c, i) => (
      <WorkCard key={c.slug} c={c} index={i} />
    ))}
  </div>
</section>

        {/* ── LEADERSHIP ────────────────────────────────────────────────────── */}
        {false && (
  <section className="py-16" style={{ backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
          <div className="max-w-4xl mx-auto px-8">
            <ScrollReveal>
  <p
    className="font-black mb-5"
    style={{
      fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
      color: "#5b21b6",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    }}
  >
    Leadership
  </p>

  <h2
    className="font-black leading-tight mb-10"
    style={{
      fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
      color: "#0f172a",
    }}
  >
    Beyond the brief.
  </h2>
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
)}

        {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
<section id="about" className="max-w-4xl mx-auto px-8 py-16">

  {/* Section heading */}
  <ScrollReveal>
    <p
      className="font-black mb-8"
      style={{
        fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
        color: "#5b21b6",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      About
    </p>
  </ScrollReveal>

  {/* About + Experience */}
  <ScrollReveal delay={0.08}>
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        border: "1px solid #e2e8f0",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr]">

        {/* Left: About */}
        <div className="p-7 md:p-8">

          <p className="text-base md:text-[1.05rem] text-slate-600 leading-relaxed mb-5">
            Nearly 5 years designing enterprise SaaS at athenahealth.
          </p>

          <p className="text-base text-slate-500 leading-relaxed mb-5">
            I’m drawn to problems that aren’t well defined yet. My strength is
            making sense of complex workflows, understanding the real problem,
            and shaping it into a clear design direction.
          </p>

          <p className="text-base text-slate-500 leading-relaxed mb-5">
            I use research, data, and business needs to understand the problem
            from different angles. That work often challenges assumptions,
            uncovers opportunities the roadmap missed, and changes what we
            decide to build — with outcomes that matter to both users and the
            business.
          </p>

          <p className="text-base text-slate-500 leading-relaxed">
            I work closely with product, engineering, and domain experts to
            challenge assumptions, make complex problems clearer, and turn them
            into thoughtful, useful experiences.
          </p>

        </div>

        {/* Right: Experience */}
        <div
          className="p-7 md:p-8"
          style={{
            backgroundColor: "#faf5ff",
            borderLeft: "1px solid #e2e8f0",
          }}
        >

          <p
            className="text-sm font-bold tracking-[0.12em] uppercase mb-6"
            style={{
              color: "#5b21b6",
            }}
          >
            Experience
          </p>

          <p
            className="text-sm font-semibold mb-5"
            style={{
              color: "#5b21b6",
            }}
          >
            athenahealth
          </p>

          {/* Senior */}
          <div className="mb-6">
            <p
              className="text-base font-black"
              style={{
                color: "#0f172a",
              }}
            >
              Senior Product Designer
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Jul 2024 – Jun 2026
            </p>
          </div>

          {/* Associate */}
          <div
            className="pt-5"
            style={{
              borderTop: "1px solid #ede9fe",
            }}
          >
            <p
              className="text-base font-black"
              style={{
                color: "#0f172a",
              }}
            >
              Associate Product Designer
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Jan 2022 – Jun 2024
            </p>
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
              <h2
  className="font-black leading-tight mb-6"
  style={{
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    color: "#f8fafc",
  }}
>
  Have a product problem
  <br />
  worth solving?
  <br />
  <span style={{ color: "#c4b5fd" }}>
    Let’s talk.
  </span>
</h2>
              <div className="mb-10" />
              <div className="flex flex-wrap items-center gap-8 text-sm">
                <DrawUnderlineLink
                  href="mailto:tathedrachana14@gmail.com"
                  className="text-sm font-medium transition-colors"
                  style={{ color: "#c4b5fd" }}
                >
                  tathedrachana14@gmail.com
                </DrawUnderlineLink>
               <DrawUnderlineLink
  href="https://www.linkedin.com/in/rachana-tathed-5355a317b/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-medium transition-colors"
  style={{ color: "#c4b5fd" }}
>
  LinkedIn
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
