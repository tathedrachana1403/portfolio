import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import {
  ClinicalWorkflowMap,
  AmbientAffinityMap,
  AmbientWireframes,
  AmbientProductOverview,
} from "../../components/ResearchArtifacts";
import ImageCarousel from "../../components/ImageCarousel";

const DARK        = "#240046";
const SOFT        = "#f3eeff";
const BORDER      = "#e4d4f4";
const MUTED       = "#cbb8e8";
const CARD_SHADOW = "0 1px 4px rgba(36,0,70,0.06), 0 4px 20px rgba(36,0,70,0.08)";
const DARK_SHADOW = "0 8px 40px rgba(36,0,70,0.22)";

// ─── Primitives ──────────────────────────────────────────────────────────────

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5"
      style={{ backgroundColor: SOFT, border: `1.5px solid ${BORDER}` }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: DARK }} />
      <span className="text-sm font-bold tracking-[0.12em] uppercase" style={{ color: DARK }}>
        {children}
      </span>
    </div>
  );
}

function ChapterHeader({
  number, label, heading, sub,
}: {
  number: string; label: string; heading: string; sub?: string;
}) {
  return (
    <div className="mb-7">
      <div
        className="inline-flex items-center gap-3 rounded-full px-5 py-2 mb-4"
        style={{ backgroundColor: SOFT, border: `1.5px solid ${BORDER}` }}
      >
        <span className="text-sm font-black tabular-nums" style={{ color: DARK }}>{number}</span>
        <span className="w-5 h-px" style={{ backgroundColor: BORDER }} />
        <span className="text-sm font-black tracking-[0.14em] uppercase" style={{ color: DARK }}>{label}</span>
      </div>
      <h2
        className="text-4xl md:text-[2.75rem] font-black leading-[1.15] tracking-tight mb-0"
        style={{ color: DARK, textWrap: "balance" } as React.CSSProperties}
      >
        {heading}
      </h2>
      {sub && (
        <p className="text-lg text-slate-500 leading-relaxed mt-4" style={{ textWrap: "pretty" } as React.CSSProperties}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-[3px] h-5 rounded-full shrink-0" style={{ backgroundColor: DARK }} />
      <h3 className="text-base font-bold tracking-tight" style={{ color: DARK }}>{children}</h3>
    </div>
  );
}

function Section({
  children, alt = false, className = "",
}: {
  children: React.ReactNode; alt?: boolean; className?: string;
}) {
  return (
    <div style={{ backgroundColor: alt ? "#faf8ff" : "white" }}>
      <div className={`max-w-7xl mx-auto px-16 ${className}`}>{children}</div>
    </div>
  );
}

function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl px-8 py-7" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
      <p className="text-sm font-bold tracking-[0.16em] uppercase mb-4" style={{ color: MUTED }}>{label}</p>
      {children}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AmbientNotes() {
  return (
    <>
      <Nav />
      <main className="pt-16 min-h-screen" style={{ backgroundColor: "#faf8ff" }}>

        {/* BREADCRUMB */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-6">
  <div className="flex items-center gap-2 text-sm">
    <Link
      href="/"
      className="text-slate-500 hover:text-slate-900 transition-colors"
    >
      Home
    </Link>

    <span className="text-slate-300">/</span>

    <span className="text-slate-400">
      Ambient Notes
    </span>
  </div>
</div>

       {/* ── HERO ─────────────────────────────────── */}
<div className="w-full px-4 sm:px-6 lg:px-8 pt-3 pb-14">
  <Chip>Case Study 01 / 04 · Lead Product Designer</Chip>

  <div className="mt-8">
    <h1
      className="font-black leading-[1.05] tracking-tight mb-5"
      style={{
        fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
      Reducing the burden of clinical documentation.
    </h1>

    <p
      className="text-xl md:text-2xl leading-relaxed mb-8"
      style={{ color: "#64748b" }}
    >
      Ambient Notes uses AI to capture patient visits and draft clinical notes,
      helping clinicians spend less time documenting and more time with
      patients.
    </p>

    {/* Project hero image */}
    <div className="w-full overflow-hidden rounded-2xl mb-12">
      <img
        src="/images/ambient/Hero.png"
        alt="Ambient Notes"
        className="w-full h-auto object-cover"
      />
    </div>
            {/* Project details */}
            {/* Project details */}
<div
  className="grid grid-cols-1 md:grid-cols-3 pt-4"
  style={{ borderTop: `1px solid ${BORDER}` }}
>
  {[
    {
      label: "My Role",
      value:
        "Lead Product Designer - led the UX strategy and end-to-end design of the AI-assisted documentation experience.",
    },
    {
      label: "Team",
      value:
        "Product Manager, Engineering, Clinical/Domain Experts, Design, and Patient Safety.",
    },
    {
      label: "Timeline",
      value: "2 months",
    },
  ].map((m, i) => (
                <div
                  key={m.label}
                  className="p-4"
                  style={{
                    borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
                  }}
                >
                  <p className="text-xs font-black tracking-[0.14em] uppercase mb-1.5" style={{ color: DARK }}>
                    {m.label}
                  </p>
                  <p className="text-sm font-medium leading-relaxed text-slate-500">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact stats */}
          <div className="rounded-2xl px-8 py-7 mt-12" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              {[
                { v: "90%+",     l: "Clinical documentation completed same day" },
                { v: "36%",      l: "Less after-hours documentation" },
                { v: "84 → 90%", l: "AI-generated sections accepted" },
                { v: "~60K hrs", l: "Clinician time saved" },
              ].map((s) => (
                <div key={s.l} className="text-center py-4 px-3">
                  <p className="text-3xl font-black text-white mb-1.5 tabular-nums">{s.v}</p>
                  <p className="text-xs leading-snug" style={{ color: MUTED }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       {/* ============================================================
    01 — THE PROBLEM
============================================================ */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <Section className="pt-10 pb-10">

    {/* Chapter Header */}
    <div className="mb-7">

      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          01
        </span>

        <span
          className="h-px w-8"
          style={{ backgroundColor: BORDER }}
        />

        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          The Problem
        </span>
      </div>

      <h2
        className="text-3xl md:text-3xl font-bold tracking-tight leading-[1.08]"
        style={{ color: DARK }}
      >
        Documentation divided attention during patient visits and kept
        clinicians working after hours.
      </h2>

    </div>


    {/* Problem statement */}
    <p
      className="text-base md:text-lg leading-relaxed max-w-5xl"
      style={{ color: "#64748B" }}
    >
      <span
        className="font-semibold"
        style={{ color: DARK }}
      >
        This created a persistent trade-off:
      </span>{" "}
      documenting in the moment competed with attention to the patient,
      while unfinished documentation carried into the hours after the visit.
    </p>


    {/* Initial hypothesis */}
    <div className="mt-7">

      <p
        className="text-xs font-bold tracking-[0.16em] uppercase mb-2"
        style={{ color: MUTED }}
      >
        Initial hypothesis
      </p>

      <p
        className="text-lg md:text-xl font-semibold leading-relaxed"
        style={{ color: DARK }}
      >
        If we reduced the{" "}
        <span style={{ color: "#475569" }}>
          time and effort required to document
        </span>
        , clinicians could stay{" "}
        <span style={{ color: "#475569" }}>
          focused on patient care
        </span>{" "}
        and spend less time finishing notes after hours.
      </p>

    </div>

  </Section>
</section>


{/* ============================================================
    DIVIDER
============================================================ */}
<div
  className="w-full"
  style={{
    height: "1px",
    backgroundColor: BORDER,
  }}
/>


{/* ============================================================
    02 — DISCOVERY
============================================================ */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <Section className="pt-10 pb-10">

    {/* Chapter Header */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          02
        </span>

        <span
          className="h-px w-8"
          style={{ backgroundColor: BORDER }}
        />

        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          Discovery
        </span>
      </div>

      <h2
        className="text-3xl md:text-3xl font-bold tracking-tight leading-[1.08]"
        style={{ color: DARK }}
      >
        Making documentation faster wouldn't solve the whole problem.
      </h2>

      <p
        className="text-lg md:text-xl leading-relaxed mt-3"
        style={{ color: "#64748B" }}
      >
        We spoke with 20 clinicians and mapped their end-to-end documentation
        workflow to understand where the burden occurred.
      </p>

    </div>


    {/* Current-state workflow */}
    <div className="mt-8">

      <p
        className="text-xs font-bold tracking-[0.16em] uppercase mb-4"
        style={{ color: MUTED }}
      >
        Current-state workflow
      </p>


      <div
        className="w-full rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "#FAFAFA",
          border: `1px solid ${BORDER}`,
          boxShadow: CARD_SHADOW,
        }}
      >

        <div className="grid grid-cols-1 md:grid-cols-5">

          {[
            {
              n: "01",
              icon: "calendar",
              title: "Prepare",
              body: "Review patient context and prepare for the visit.",
              pain: null,
            },
            {
              n: "02",
              icon: "patient",
              title: "See the patient",
              body: "Provide care while capturing information.",
              pain: "Attention shifted between the patient and the chart.",
            },
            {
              n: "03",
              icon: "document",
              title: "Document",
              body: "Enter and update the clinical record.",
              pain: "Documentation often remained incomplete during the visit.",
            },
            {
              n: "04",
              icon: "arrow",
              title: "Next patient",
              body: "Continue the clinical schedule.",
              pain: "Unfinished documentation carried forward.",
            },
            {
              n: "05",
              icon: "clock",
              title: "Complete notes",
              body: "Finish remaining documentation later.",
              pain: "Work extended into after hours.",
            },
          ].map((step, index) => (

            <div
              key={step.n}
              className={`px-5 py-6 ${
                index !== 0 ? "md:border-l" : ""
              }`}
              style={{
                borderColor: BORDER,
              }}
            >

              {/* Step header */}
              <div className="flex items-center gap-2.5 mb-4">

                {/* Icon */}
                <div
                  className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${BORDER}`,
                  }}
                >

                  {step.icon === "calendar" && (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-slate-500"
                    >
                      <rect x="3" y="4" width="18" height="17" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  )}

                  {step.icon === "patient" && (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-slate-500"
                    >
                      <circle cx="12" cy="8" r="3.5" />
                      <path d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6" />
                    </svg>
                  )}

                  {step.icon === "document" && (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-slate-500"
                    >
                      <path d="M6 3h9l4 4v14H6z" />
                      <path d="M14 3v5h5M9 13h6M9 17h6" />
                    </svg>
                  )}

                  {step.icon === "arrow" && (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-slate-500"
                    >
                      <path d="M5 12h13M13 6l6 6-6 6" />
                    </svg>
                  )}

                  {step.icon === "clock" && (
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="text-slate-500"
                    >
                      <circle cx="12" cy="12" r="8.5" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  )}

                </div>


                {/* Number + title */}
                <div>
                  <p
                    className="text-[9px] font-bold tracking-[0.12em] uppercase"
                    style={{ color: MUTED }}
                  >
                    {step.n}
                  </p>

                  <p
                    className="text-sm font-bold leading-tight"
                    style={{ color: DARK }}
                  >
                    {step.title}
                  </p>
                </div>

              </div>


              {/* Description */}
              <p
                className="text-sm leading-relaxed min-h-[48px]"
                style={{ color: "#64748B" }}
              >
                {step.body}
              </p>


              {/* Pain point */}
              {step.pain && (
                <div
                  className="mt-4 pt-3"
                  style={{
                    borderTop: "2px solid #DDD6FE",
                  }}
                >

                  <p
                    className="text-sm md:text-[15px] font-semibold leading-relaxed"
                    style={{ color: "#5B21B6" }}
                  >
                    {step.pain}
                  </p>

                </div>
              )}

            </div>

          ))}

        </div>

      </div>


      {/* Workflow takeaway */}
      <p
        className="text-sm font-semibold mt-4"
        style={{ color: "#64748B" }}
      >

      </p>

    </div>


    {/* What this meant */}
    <div className="mt-9">

      <div className="flex items-center gap-3 mb-3">

        <span
          className="h-px w-7"
          style={{ backgroundColor: "#7C3AED" }}
        />

        <p
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: "#7C3AED" }}
        >
          What this meant
        </p>

      </div>

      <p
        className="text-lg md:text-xl font-bold tracking-tight leading-relaxed"
        style={{ color: DARK }}
      >
        The opportunity was to make documentation fit into the care workflow
        without disrupting patient care or extending beyond the workday.
      </p>

    </div>

  </Section>
</section>

        {/* ── 03 THE DECISION ── */}
<section
  className="w-full"
  style={{
    backgroundColor: "#F8FAFC",
    borderTop: `1px solid ${BORDER}`,
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <Section className="pt-14 pb-12">

    {/* ── CHAPTER HEADER ── */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          03
        </span>

        <span
          className="h-px w-8"
          style={{ backgroundColor: BORDER }}
        />

        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          The Decision
        </span>
      </div>

      <h2
        className="text-3xl md:text-3xl font-bold tracking-tight leading-[1.08]"
        style={{ color: DARK }}
      >
        Shift documentation work from the clinician to the system.
      </h2>

      <p
        className="text-lg md:text-xl leading-relaxed mt-3"
        style={{ color: "#64748B" }}
      >
        We explored three approaches to reduce the amount of documentation
        clinicians had to complete themselves.
      </p>

    </div>


    {/* ── THREE APPROACHES ── */}
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        border: `1px solid ${BORDER}`,
        boxShadow: CARD_SHADOW,
      }}
    >

      <div className="grid grid-cols-1 md:grid-cols-3">

        {[
          {
            n: "01",
            title: "Templates & prompts",
            body:
              "Reduced repetitive entry, but clinicians still had to capture and structure information.",
            chosen: false,
          },
          {
            n: "02",
            title: "Assisted documentation",
            body:
              "Helped organize and suggest content, but clinicians still had to actively document during or after the encounter.",
            chosen: false,
          },
          {
            n: "03",
            title: "Ambient documentation",
            body:
              "Captured the encounter in the background and used AI to organize it into a draft for clinician review.",
            chosen: true,
          },
        ].map((option, index) => (

          <div
            key={option.n}
            className={`relative px-6 py-6 md:px-7 md:py-7 ${
              index !== 0 ? "md:border-l" : ""
            }`}
            style={{
              borderColor: BORDER,
              backgroundColor: option.chosen ? "#F3EFFF" : "#FFFFFF",
            }}
          >

            {/* Number + chosen */}
            <div className="flex items-center justify-between mb-4">

              <p
                className="text-xs font-bold tracking-[0.14em] uppercase"
                style={{
                  color: option.chosen ? "#7C3AED" : MUTED,
                }}
              >
                {option.n}
              </p>

              {option.chosen && (
                <span
                  className="text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                  style={{
                    color: "#6D28D9",
                    backgroundColor: "#EDE9FE",
                  }}
                >
                  Chosen
                </span>
              )}

            </div>


            {/* Title */}
            <h3
              className="text-lg md:text-xl font-bold tracking-tight leading-tight mb-2.5"
              style={{ color: DARK }}
            >
              {option.title}
            </h3>


            {/* Description */}
            <p
              className="text-sm md:text-[15px] leading-relaxed"
              style={{
                color: option.chosen ? "#5B21B6" : "#64748B",
              }}
            >
              {option.body}
            </p>

          </div>

        ))}

      </div>

    </div>


    {/* ── WHY THIS DIRECTION ── */}
    <div className="mt-8">

      <div className="flex items-center gap-3 mb-3">

        <span
          className="h-px w-7"
          style={{ backgroundColor: "#7C3AED" }}
        />

        <p
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: "#7C3AED" }}
        >
        Why we chose it
        </p>

      </div>

      <p
        className="text-lg md:text-xl font-bold tracking-tight leading-relaxed"
        style={{ color: DARK }}
      >
        Ambient documentation addressed the root problem by reducing the need
        to actively document during care not simply making documentation faster.
      </p>

    </div>

  </Section>
</section>

        {/* ── 04 WORKFLOW ── */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <Section className="pt-10 pb-10">

    {/* Header */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          04
        </span>

        <span
          className="h-px w-8"
          style={{ backgroundColor: BORDER }}
        />

        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          Workflow
        </span>
      </div>

      <h2
        className="text-3xl md:text-3xl font-bold tracking-tight leading-[1.08]"
        style={{ color: DARK }}
      >
        Designing an AI-assisted documentation workflow around patient care.
      </h2>

      <p
        className="text-lg md:text-xl leading-relaxed mt-3 max-w-5xl"
        style={{ color: "#64748B" }}
      >
        The system captures the encounter and turns it into a draft, while
        clinicians control the final record.
      </p>

    </div>


    {/* Workflow container */}
    <div
      className="rounded-2xl px-5 py-6 md:px-7 md:py-7"
      style={{
        backgroundColor: "#F8FAFC",
        border: `1px solid ${BORDER}`,
      }}
    >

      {/* System / Clinician labels */}
      <div className="grid grid-cols-1 md:grid-cols-7 mb-5">

        <div className="md:col-span-3">
          <div className="flex items-center gap-2">

            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#94A3B8" }}
            />

            <span
              className="text-[10px] font-bold tracking-[0.14em] uppercase"
              style={{ color: "#64748B" }}
            >
              System
            </span>

          </div>
        </div>

        <div className="hidden md:flex md:col-span-3 items-center justify-center">

          <div className="flex items-center gap-2">

            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#8B5CF6" }}
            />

            <span
              className="text-[10px] font-bold tracking-[0.14em] uppercase"
              style={{ color: "#7C3AED" }}
            >
              Clinician
            </span>

          </div>

        </div>

      </div>


      {/* Continuous workflow */}
      <div className="relative">

        {/* Main connector */}
        <div
          className="hidden md:block absolute left-[3.5%] right-[3.5%] top-[24px] h-px"
          style={{ backgroundColor: "#CBD5E1" }}
        />

        {/* Clinician control rail */}
        <div
          className="hidden md:block absolute left-[43.5%] right-[15.5%] top-[22px] h-[5px] rounded-full"
          style={{ backgroundColor: "#DDD6FE" }}
        />


        <div className="grid grid-cols-2 md:grid-cols-7 gap-x-4 gap-y-7">

          {[
            {
              n: "01",
              title: "Capture",
              text: "Captures the conversation in the background.",
              type: "system",
              icon: "mic",
            },
            {
              n: "02",
              title: "Structure",
              text: "Organizes information into clinical sections.",
              type: "system",
              icon: "structure",
            },
            {
              n: "03",
              title: "Generate",
              text: "Creates a structured draft.",
              type: "system",
              icon: "generate",
            },
            {
              n: "04",
              title: "Verify",
              text: "Reviews generated content.",
              type: "clinician",
              icon: "verify",
            },
            {
              n: "05",
              title: "Edit",
              text: "Corrects or refines the draft.",
              type: "clinician",
              icon: "edit",
            },
            {
              n: "06",
              title: "Approve",
              text: "Approves the final record.",
              type: "clinician",
              icon: "approve",
            },
            {
              n: "07",
              title: "Recover",
              text: "Recovers from workflow failures.",
              type: "system",
              icon: "recover",
            },
          ].map((step) => (

            <div
              key={step.n}
              className="relative text-center"
            >

              {/* Step icon */}
              <div
                className="relative z-10 w-12 h-12 mx-auto rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor:
                    step.type === "clinician"
                      ? "#F3E8FF"
                      : "#FFFFFF",

                  border:
                    step.type === "clinician"
                      ? "1px solid #C4B5FD"
                      : `1px solid ${BORDER}`,
                }}
              >

                {step.icon === "mic" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="text-slate-500"
                  >
                    <rect
                      x="9"
                      y="3"
                      width="6"
                      height="12"
                      rx="3"
                    />
                    <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
                  </svg>
                )}

                {step.icon === "structure" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="text-slate-500"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="2"
                    />
                    <path d="M8 8h8M8 12h5M8 16h8" />
                  </svg>
                )}

                {step.icon === "generate" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="text-slate-500"
                  >
                    <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
                    <path d="M19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16z" />
                  </svg>
                )}

                {step.icon === "verify" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M8 12l2.7 2.7L16 9.5" />
                  </svg>
                )}

                {step.icon === "edit" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5z" />
                  </svg>
                )}

                {step.icon === "approve" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3l7 3v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6l7-3z" />
                    <path d="M8.5 12l2.2 2.2 4.8-5" />
                  </svg>
                )}

                {step.icon === "recover" && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="text-slate-500"
                  >
                    <path d="M20 11a8 8 0 0 0-14.8-3.9L4 9" />
                    <path d="M4 4v5h5" />
                    <path d="M4 13a8 8 0 0 0 14.8 3.9L20 15" />
                    <path d="M20 20v-5h-5" />
                  </svg>
                )}

              </div>


              {/* Number */}
              <p
                className="text-[9px] font-bold tracking-[0.14em] mt-2"
                style={{
                  color:
                    step.type === "clinician"
                      ? "#8B5CF6"
                      : MUTED,
                }}
              >
                {step.n}
              </p>


              {/* Title */}
              <h3
                className="text-sm font-bold tracking-tight mt-0.5"
                style={{ color: DARK }}
              >
                {step.title}
              </h3>


              {/* Description */}
              <p
                className="text-[11px] leading-[1.4] mt-1.5 mx-auto max-w-[145px]"
                style={{
                  color:
                    step.type === "clinician"
                      ? "#6D5A8D"
                      : "#64748B",
                }}
              >
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* Workflow summary */}
      <div
        className="mt-7 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
        style={{
          borderTop: `1px solid ${BORDER}`,
        }}
      >

        <p
          className="text-xs font-semibold"
          style={{ color: "#475569" }}
        >
          System handles capture, structuring, and drafting
        </p>

        <p
          className="text-xs font-semibold"
          style={{ color: "#7C3AED" }}
        >
          Clinicians control what becomes the final record
        </p>

      </div>

    </div>


    {/* Key trade-off */}
    <div
      className="mt-7 rounded-2xl px-5 py-4 md:px-6"
      style={{
        backgroundColor: "#F8FAFC",
        border: `1px solid ${BORDER}`,
      }}
    >

      <div className="flex items-start gap-4">

        <div
          className="w-1 shrink-0 rounded-full self-stretch"
          style={{ backgroundColor: "#7C3AED" }}
        />

        <div className="min-w-0">

          <p
            className="text-xs font-bold tracking-[0.16em] uppercase mb-1.5"
            style={{ color: "#7C3AED" }}
          >
            Key trade-off
          </p>

          <p
            className="text-base md:text-lg font-semibold leading-relaxed max-w-5xl"
            style={{ color: DARK }}
          >
            We prioritized controlled efficiency over full automation moving
            documentation work to the system while keeping clinicians
            responsible for the final record.
          </p>

        </div>

      </div>

    </div>

  </Section>
</section>


        {/* ── 06 WIREFRAME ── */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <Section className="pt-14 pb-16">

    {/* Header */}
    <div className="mb-8">

      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          06
        </span>

        <span
          className="h-px w-8"
          style={{ backgroundColor: BORDER }}
        />

        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          Wireframe
        </span>
      </div>

      <h2
        className="text-2xl md:text-3xl font-bold tracking-tight leading-tight whitespace-nowrap"
        style={{ color: DARK }}
      >
        Exploring the core interaction states across the documentation workflow.
      </h2>

    </div>


    {/* Workflow exploration */}
    <div
      className="rounded-2xl p-5 md:p-7"
      style={{
        backgroundColor: "#F8FAFC",
        border: `1px solid ${BORDER}`,
      }}
    >

      {/* Exploration header */}
      <div className="flex items-center gap-4 mb-8">

        <p
          className="text-xs font-bold tracking-[0.16em] uppercase shrink-0"
          style={{ color: MUTED }}
        >
          Workflow exploration
        </p>

        <div
          className="h-px flex-1"
          style={{ backgroundColor: BORDER }}
        />

        <p
          className="hidden md:block text-xs font-medium shrink-0"
          style={{ color: "#94A3B8" }}
        >
          Capture → Draft → Review → Transfer
        </p>

      </div>


      {/* Four wireframe screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


        {/* ── 01 CAPTURE ── */}
        <div>

          <div className="flex items-center gap-2 mb-3">

            <span
              className="text-xs font-bold"
              style={{ color: "#7C3AED" }}
            >
              01
            </span>

            <span
              className="text-sm font-bold"
              style={{ color: DARK }}
            >
              Capture
            </span>

          </div>


          {/* Mobile frame */}
          <div
            className="mx-auto w-full max-w-[210px] rounded-[28px] p-[6px]"
            style={{
              backgroundColor: "#E2E8F0",
              border: "1px solid #CBD5E1",
              boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
            }}
          >

            <div
              className="relative overflow-hidden rounded-[23px]"
              style={{
                backgroundColor: "#FFFFFF",
                aspectRatio: "9 / 19.5",
              }}
            >

              {/* Status bar */}
              <div className="flex items-center justify-between px-4 pt-3">

                <span
                  className="text-[8px] font-bold"
                  style={{ color: DARK }}
                >
                  9:41
                </span>

                <div className="flex gap-1">
                  <span
                    className="w-2 h-1 rounded-full"
                    style={{ backgroundColor: "#CBD5E1" }}
                  />
                  <span
                    className="w-2 h-1 rounded-full"
                    style={{ backgroundColor: "#CBD5E1" }}
                  />
                  <span
                    className="w-3 h-1 rounded-full"
                    style={{ backgroundColor: "#94A3B8" }}
                  />
                </div>

              </div>


              {/* Header */}
              <div className="px-4 pt-6">

                <div
                  className="h-3 w-24 rounded mb-2"
                  style={{ backgroundColor: "#64748B" }}
                />

                <div
                  className="h-1.5 w-16 rounded"
                  style={{ backgroundColor: "#E2E8F0" }}
                />

              </div>


              {/* Recording card */}
              <div className="px-3 pt-6">

                <div
                  className="rounded-xl p-4"
                  style={{
                    backgroundColor: "#F8FAFC",
                    border: `1px solid ${BORDER}`,
                  }}
                >

                  <div className="flex items-center justify-between mb-6">

                    <span
                      className="text-[9px] font-bold"
                      style={{ color: DARK }}
                    >
                      Recording
                    </span>

                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#7C3AED" }}
                    />

                  </div>


                  {/* Waveform */}
                  <div className="flex items-center justify-center gap-[3px] h-10">

                    {[10, 17, 25, 15, 31, 20, 35, 18, 28, 13, 23].map(
                      (height, index) => (
                        <span
                          key={index}
                          className="w-[2px] rounded-full"
                          style={{
                            height: `${height}px`,
                            backgroundColor: "#A78BFA",
                          }}
                        />
                      )
                    )}

                  </div>

                </div>

              </div>


              {/* Bottom state */}
              <div className="absolute bottom-5 left-3 right-3">

                <div
                  className="rounded-xl px-3 py-3"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${BORDER}`,
                  }}
                >

                  <div className="flex items-center justify-between">

                    <span
                      className="text-[8px] font-semibold"
                      style={{ color: "#64748B" }}
                    >
                      Recording
                    </span>

                    <span
                      className="text-[8px] font-bold"
                      style={{ color: "#7C3AED" }}
                    >
                      Active
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          <p
            className="text-xs leading-relaxed mt-3"
            style={{ color: "#64748B" }}
          >
            Recording stays visible while the clinician remains focused on
            the encounter.
          </p>

        </div>


        {/* ── 02 DRAFT ── */}
        <div>

          <div className="flex items-center gap-2 mb-3">

            <span
              className="text-xs font-bold"
              style={{ color: "#7C3AED" }}
            >
              02
            </span>

            <span
              className="text-sm font-bold"
              style={{ color: DARK }}
            >
              Draft
            </span>

          </div>


          {/* Mobile frame */}
          <div
            className="mx-auto w-full max-w-[210px] rounded-[28px] p-[6px]"
            style={{
              backgroundColor: "#E2E8F0",
              border: "1px solid #CBD5E1",
              boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
            }}
          >

            <div
              className="overflow-hidden rounded-[23px]"
              style={{
                backgroundColor: "#FFFFFF",
                aspectRatio: "9 / 19.5",
              }}
            >

              <div className="flex items-center justify-between px-4 pt-3">

                <span
                  className="text-[8px] font-bold"
                  style={{ color: DARK }}
                >
                  9:47
                </span>

                <span
                  className="text-[8px] font-bold"
                  style={{ color: "#7C3AED" }}
                >
                  AI
                </span>

              </div>


              <div className="px-4 pt-6">

                <div
                  className="h-3 w-28 rounded mb-2"
                  style={{ backgroundColor: "#64748B" }}
                />

                <div
                  className="h-1.5 w-20 rounded"
                  style={{ backgroundColor: "#E2E8F0" }}
                />

              </div>


              {/* Clinical sections */}
              <div className="px-3 pt-5 space-y-2">

                {["History", "Assessment", "Plan"].map((section, index) => (

                  <div
                    key={section}
                    className="rounded-xl p-3"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${BORDER}`,
                    }}
                  >

                    <div className="flex items-center justify-between mb-3">

                      <span
                        className="text-[8px] font-bold"
                        style={{ color: DARK }}
                      >
                        {section}
                      </span>

                      {index === 0 && (
                        <span
                          className="text-[7px] font-semibold"
                          style={{ color: "#7C3AED" }}
                        >
                          AI
                        </span>
                      )}

                    </div>

                    <div
                      className="h-1.5 w-full rounded mb-2"
                      style={{ backgroundColor: "#CBD5E1" }}
                    />

                    <div
                      className="h-1.5 rounded mb-2"
                      style={{
                        width: index === 0 ? "90%" : "75%",
                        backgroundColor: "#E2E8F0",
                      }}
                    />

                    <div
                      className="h-1.5 rounded"
                      style={{
                        width: index === 2 ? "60%" : "82%",
                        backgroundColor: "#E2E8F0",
                      }}
                    />

                  </div>

                ))}

              </div>


              <div className="absolute" />

            </div>

          </div>


          <p
            className="text-xs leading-relaxed mt-3"
            style={{ color: "#64748B" }}
          >
            AI converts the encounter into recognizable clinical sections
            instead of a raw transcript.
          </p>

        </div>


        {/* ── 03 REVIEW ── */}
        <div>

          <div className="flex items-center gap-2 mb-3">

            <span
              className="text-xs font-bold"
              style={{ color: "#7C3AED" }}
            >
              03
            </span>

            <span
              className="text-sm font-bold"
              style={{ color: DARK }}
            >
              Review
            </span>

          </div>


          {/* Mobile frame */}
          <div
            className="mx-auto w-full max-w-[210px] rounded-[28px] p-[6px]"
            style={{
              backgroundColor: "#E2E8F0",
              border: "1px solid #CBD5E1",
              boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
            }}
          >

            <div
              className="relative overflow-hidden rounded-[23px]"
              style={{
                backgroundColor: "#FFFFFF",
                aspectRatio: "9 / 19.5",
              }}
            >

              <div className="flex items-center justify-between px-4 pt-3">

                <span
                  className="text-[8px] font-bold"
                  style={{ color: DARK }}
                >
                  9:52
                </span>

                <span
                  className="text-[8px] font-bold"
                  style={{ color: "#64748B" }}
                >
                  Review
                </span>

              </div>


              <div className="px-4 pt-6">

                <div className="flex items-center justify-between">

                  <div>

                    <div
                      className="h-3 w-24 rounded mb-2"
                      style={{ backgroundColor: "#64748B" }}
                    />

                    <div
                      className="h-1.5 w-16 rounded"
                      style={{ backgroundColor: "#E2E8F0" }}
                    />

                  </div>

                  <span
                    className="text-[8px] font-bold"
                    style={{ color: "#7C3AED" }}
                  >
                    AI
                  </span>

                </div>

              </div>


              {/* Generated section */}
              <div className="px-3 pt-5">

                <div
                  className="rounded-xl p-3"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${BORDER}`,
                  }}
                >

                  <div className="flex items-center justify-between mb-3">

                    <span
                      className="text-[8px] font-bold"
                      style={{ color: DARK }}
                    >
                      Assessment
                    </span>

                    <span
                      className="text-[7px] font-semibold"
                      style={{ color: "#7C3AED" }}
                    >
                      Generated
                    </span>

                  </div>


                  <div
                    className="rounded-lg p-3"
                    style={{
                      backgroundColor: "#F8FAFC",
                      border: `1px solid ${BORDER}`,
                    }}
                  >

                    <div
                      className="h-1.5 w-full rounded mb-2"
                      style={{ backgroundColor: "#94A3B8" }}
                    />

                    <div
                      className="h-1.5 w-11/12 rounded mb-2"
                      style={{ backgroundColor: "#CBD5E1" }}
                    />

                    <div
                      className="h-1.5 w-4/5 rounded"
                      style={{ backgroundColor: "#E2E8F0" }}
                    />

                  </div>


                  <div className="flex items-center justify-between mt-3">

                    <span
                      className="text-[7px] font-semibold"
                      style={{ color: "#64748B" }}
                    >
                      Edit section
                    </span>

                    <span
                      className="text-[7px] font-bold"
                      style={{ color: "#7C3AED" }}
                    >
                      AI
                    </span>

                  </div>

                </div>

              </div>


              {/* Approve */}
              <div className="absolute bottom-5 left-3 right-3">

                <div
                  className="h-9 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "#7C3AED",
                  }}
                >

                  <span
                    className="text-[8px] font-bold"
                    style={{ color: "#FFFFFF" }}
                  >
                    Approve
                  </span>

                </div>

              </div>

            </div>

          </div>


          <p
            className="text-xs leading-relaxed mt-3"
            style={{ color: "#64748B" }}
          >
            Generated content remains identifiable and editable before
            becoming part of the final record.
          </p>

        </div>


        {/* ── 04 TRANSFER ── */}
        <div>

          <div className="flex items-center gap-2 mb-3">

            <span
              className="text-xs font-bold"
              style={{ color: "#7C3AED" }}
            >
              04
            </span>

            <span
              className="text-sm font-bold"
              style={{ color: DARK }}
            >
              Transfer
            </span>

          </div>


          {/* Mobile frame */}
          <div
            className="mx-auto w-full max-w-[210px] rounded-[28px] p-[6px]"
            style={{
              backgroundColor: "#E2E8F0",
              border: "1px solid #CBD5E1",
              boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
            }}
          >

            <div
              className="relative overflow-hidden rounded-[23px]"
              style={{
                backgroundColor: "#FFFFFF",
                aspectRatio: "9 / 19.5",
              }}
            >

              <div className="flex items-center justify-between px-4 pt-3">

                <span
                  className="text-[8px] font-bold"
                  style={{ color: DARK }}
                >
                  9:55
                </span>

                <span
                  className="text-[8px] font-bold"
                  style={{ color: "#64748B" }}
                >
                  Transfer
                </span>

              </div>


              {/* Status list */}
              <div className="px-3 pt-6 space-y-2">

                {[
                  ["History", "Sent", true],
                  ["Assessment", "Sent", true],
                  ["Plan", "Action", false],
                  ["Follow-up", "Sent", true],
                ].map(([name, status, success]) => (

                  <div
                    key={name as string}
                    className="flex items-center justify-between px-3 py-3 rounded-xl"
                    style={{
                      backgroundColor: success ? "#FFFFFF" : "#FFFBEB",
                      border: `1px solid ${
                        success ? BORDER : "#FDE68A"
                      }`,
                    }}
                  >

                    <span
                      className="text-[8px] font-semibold"
                      style={{ color: DARK }}
                    >
                      {name}
                    </span>

                    <span
                      className="text-[7px] font-bold"
                      style={{
                        color: success ? "#16A34A" : "#B45309",
                      }}
                    >
                      {success ? "✓" : "!"} {status}
                    </span>

                  </div>

                ))}

              </div>


              {/* Action needed */}
              <div className="absolute bottom-5 left-3 right-3">

                <div
                  className="rounded-xl px-3 py-3"
                  style={{
                    backgroundColor: "#FFFBEB",
                    border: "1px solid #FDE68A",
                  }}
                >

                  <div className="flex items-center justify-between">

                    <span
                      className="text-[8px] font-semibold"
                      style={{ color: "#92400E" }}
                    >
                      Action needed
                    </span>

                    <span
                      className="text-[8px] font-bold"
                      style={{ color: "#B45309" }}
                    >
                      Check status
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          <p
            className="text-xs leading-relaxed mt-3"
            style={{ color: "#64748B" }}
          >
            Section-level status makes the hand-off visible and recoverable.
          </p>

        </div>

      </div>

    </div>

  </Section>
</section>

        {/* ── FINAL DESIGN ── white */}
        <Section className="pt-14 pb-12">
          <div className="mb-10">
            <Chip>Final Design</Chip>
            <h2
              className="text-4xl md:text-[2.75rem] font-black leading-[1.15] tracking-tight mt-5 mb-3"
              style={{ color: DARK }}
            >
              Key screens from the shipped product.
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Consent, control, status, review, transfer, and recovery - all visible in the product itself.
            </p>
          </div>
          <ImageCarousel />
        </Section>

        {/* ── 07 VALIDATE ── lavender */}
        <Section alt className="pt-14 pb-12">
          <ChapterHeader
            number="07" label="Validate"
            heading="We tested the critical workflow before engineering committed to it."
            sub="5 clinician usability sessions. Three findings changed the design before a single line of production code was written."
          />
          <div className="grid md:grid-cols-3 gap-4 mb-7">
            {[
              { n: "01", label: "Entry point", problem: "Ambient was easy to miss during a busy clinic session.", fix: "Moved Ambient to the schedule as a visible, visit-level action so clinicians could access it at the moment documentation began." },
              { n: "02", label: "AI state",    problem: "A generic processing state created uncertainty about what was happening.", fix: "Added explicit recording, generating, sent, failed, and action-needed states." },
              { n: "03", label: "Transfer",    problem: "A global success message hid partial section failures.", fix: "Added section-level transfer status and dedicated recovery actions." },
            ].map(l => (
              <div
                key={l.n}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4"
                style={{ border: `1px solid ${BORDER}`, boxShadow: CARD_SHADOW }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black shrink-0"
                    style={{ backgroundColor: SOFT, color: DARK }}
                  >
                    {l.n}
                  </div>
                  <p className="font-bold text-base" style={{ color: DARK }}>{l.label}</p>
                </div>
                <div className="rounded-xl px-4 py-3" style={{ backgroundColor: SOFT, border: `1px solid ${BORDER}` }}>
                  <p className="text-sm font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: DARK }}>Problem</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{l.problem}</p>
                </div>
                <div className="rounded-xl px-4 py-3" style={{ backgroundColor: DARK }}>
                  <p className="text-sm font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: MUTED }}>Changed to</p>
                  <p className="text-sm leading-relaxed text-white">{l.fix}</p>
                </div>
              </div>
            ))}
          </div>
          <Callout label="Engineering constraint">
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              <strong className="text-white font-bold">Real-time transfer status wasn't technically available.</strong>{" "}
              Rather than masking the limitation, we designed explicit status states and a{" "}
              <strong className="text-white font-bold">Check status</strong> recovery path so clinicians always
              knew what happened to their documentation.
            </p>
          </Callout>
        </Section>

        {/* ── 08 IMPACT ── */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderTop: `1px solid ${BORDER}`,
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <Section className="pt-8 pb-8">

    {/* Header */}
    <div className="mb-5">

      <div className="flex items-center gap-3 mb-2">

        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          08
        </span>

        <span
          className="h-px w-6"
          style={{ backgroundColor: BORDER }}
        />

        <span
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: MUTED }}
        >
          Impact
        </span>

      </div>

      <h2
        className="text-xl md:text-2xl font-bold tracking-tight leading-tight"
        style={{ color: DARK }}
      >
        Less documentation work during and after the visit.
      </h2>

    </div>


    {/* Compact impact metrics */}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden"
      style={{
        backgroundColor: "#F8FAFC",
        border: `1px solid ${BORDER}`,
      }}
    >

      {/* 90%+ */}
      <div
        className="px-4 py-4"
        style={{
          borderBottom: `1px solid ${BORDER}`,
        }}
      >

        <p
          className="text-2xl md:text-[26px] font-black tracking-tight"
          style={{ color: DARK }}
        >
          90%+
        </p>

        <p
          className="text-xs mt-1"
          style={{ color: "#64748B" }}
        >
          Same-day completion
        </p>

      </div>


      {/* 36% */}
      <div
        className="px-4 py-4 lg:border-l"
        style={{
          borderColor: BORDER,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >

        <p
          className="text-2xl md:text-[26px] font-black tracking-tight"
          style={{ color: DARK }}
        >
          36%
        </p>

        <p
          className="text-xs mt-1"
          style={{ color: "#64748B" }}
        >
          Less after-hours documentation
        </p>

      </div>


      {/* 84 → 90% */}
      <div
        className="px-4 py-4 lg:border-l"
        style={{
          borderColor: BORDER,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >

        <p
          className="text-2xl md:text-[26px] font-black tracking-tight"
          style={{ color: DARK }}
        >
          84 → 90%
        </p>

        <p
          className="text-xs mt-1"
          style={{ color: "#64748B" }}
        >
          AI sections accepted with minimal edits
        </p>

      </div>


      {/* ~60K */}
      <div
        className="px-4 py-4 lg:border-l"
        style={{
          borderColor: BORDER,
        }}
      >

        <p
          className="text-2xl md:text-[26px] font-black tracking-tight"
          style={{ color: "#7C3AED" }}
        >
          ~60K
        </p>

        <p
          className="text-xs mt-1"
          style={{ color: "#64748B" }}
        >
          Hours of clinician time returned
        </p>

      </div>

    </div>

  </Section>
</section>

        {/* ── 09 LEARNINGS ── lavender */}
        <Section alt className="pt-14 pb-12">
          <ChapterHeader
            number="09" label="Learnings After Launch"
            heading="Launch gave us a second source of truth: what clinicians actually valued."
            sub="Post-launch feedback showed strong adoption and demand to bring more clinical information into the same workflow — diagnoses, orders, and structured clinical data."
          />
          <Label>Clinician feedback</Label>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { quote: "Ambient gives me time back every encounter. I don't have to work nights and weekends this saves me 7 to 8 hours per week.", attr: "Clinician, VillageMD", context: "~315 encounters" },
              { quote: "I've corrected a few, but I would say probably 85% of it is pertinent and correct.", attr: "Clinician, VIM Clinic", context: "~244 encounters" },
              { quote: "The speed of Ambient made it possible to complete the encounter, correct the transcript, and close the chart on the spot.", attr: "Clinician, CHS", context: "~195 encounters" },
            ].map(q => (
              <div
                key={q.attr}
                className="bg-white rounded-2xl p-7 flex flex-col"
                style={{ border: `1px solid ${BORDER}`, boxShadow: CARD_SHADOW }}
              >
                <span
                  className="text-6xl font-black leading-none mb-3 select-none block"
                  style={{ color: DARK, opacity: 0.1, lineHeight: "0.8" }}
                >
                  "
                </span>
                <p className="text-base text-slate-600 leading-relaxed flex-1 mb-6">{q.quote}</p>
                <div className="pt-5" style={{ borderTop: `1px solid ${BORDER}` }}>
                  <p className="text-sm font-bold" style={{ color: DARK }}>{q.attr}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{q.context}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-base text-slate-500 leading-relaxed">
            The value was not only saving documentation time. Clinicians wanted Ambient to
            become a more complete part of their clinical workflow.
          </p>
        </Section>

        {/* ── 10 SCALE ── white */}
        <Section className="pt-14 pb-12">
          <ChapterHeader
            number="10" label="Scale"
            heading="The work became a reusable model for trustworthy AI."
            sub="The verification-first approach extended beyond Ambient Notes. I documented and shared the pattern with two other product design teams building AI-assisted workflows."
          />
          <div className="grid md:grid-cols-2 gap-5">
            <div
              className="bg-white rounded-2xl p-7"
              style={{ border: `1px solid ${BORDER}`, boxShadow: CARD_SHADOW }}
            >
              <p className="text-sm font-bold tracking-[0.14em] uppercase mb-4" style={{ color: DARK }}>Reusable pattern</p>
              <div className="flex items-stretch">
                {[
                  { n: "01", label: "Attribution" },
                  { n: "02", label: "Approval" },
                  { n: "03", label: "Transfer visibility" },
                  { n: "04", label: "Recovery" },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-stretch flex-1">
                    <div
                      className="flex flex-col items-center justify-center px-2 py-4 w-full text-center"
                      style={{
                        backgroundColor: i === arr.length - 1 ? DARK : SOFT,
                        border: `1.5px solid ${i === arr.length - 1 ? DARK : BORDER}`,
                        borderLeft: i > 0 ? "none" : undefined,
                        borderRadius: i === 0 ? "10px 0 0 10px" : i === arr.length - 1 ? "0 10px 10px 0" : "0",
                      }}
                    >
                      <span className="text-[10px] font-black tabular-nums mb-1" style={{ color: i === arr.length - 1 ? "rgba(255,255,255,0.45)" : MUTED }}>{step.n}</span>
                      <span className="text-xs font-bold leading-snug" style={{ color: i === arr.length - 1 ? "white" : DARK }}>{step.label}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="shrink-0 self-stretch w-5 z-10 -mx-2.5"
                        style={{
                          backgroundColor: i === arr.length - 2 ? DARK : BORDER,
                          clipPath: "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-7" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
              <p className="text-sm font-bold tracking-[0.14em] uppercase mb-5" style={{ color: MUTED }}>Why it generalised</p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Any AI workflow where humans remain accountable for the output needs the same four things: <strong className="text-white">visible attribution, explicit approval, transfer transparency, and a recovery path</strong> when things fail.
              </p>
            </div>
          </div>
        </Section>

        {/* ── 11 REFLECT ── lavender */}
        <Section alt className="pt-14 pb-14">
          <ChapterHeader
            number="11" label="Reflect"
            heading="The next opportunity is to expand Ambient beyond documentation."
            sub="We started with HPI and Assessment & Plan. Clinician feedback showed demand for diagnoses, orders, and structured clinical data to become part of the experience."
          />
          <div className="grid md:grid-cols-2 gap-5">
            <p className="text-base text-slate-500 leading-relaxed">
              The next evolution is to extend Ambient from{" "}
              <strong style={{ color: DARK }}>documentation assistance to broader clinical workflow support</strong>{" "}
             while preserving the principles that made the experience trustworthy: control, transparency, and recovery.
            </p>
            <div
              className="rounded-2xl p-7"
              style={{ backgroundColor: SOFT, border: `1px solid ${BORDER}`, borderLeft: `4px solid ${DARK}` }}
            >
              <p className="text-sm font-bold tracking-[0.14em] uppercase mb-4" style={{ color: DARK }}>What I'd do next</p>
              <ul className="space-y-2.5">
                {[
                  "Extend capture to structured diagnoses and orders",
                  "Build cross-encounter pattern detection",
                  "Design for handoff across care teams, not just one clinician",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: DARK }} />
                    <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ── FOOTER NAV ── */}
        <div className="py-10" style={{ borderTop: `1px solid ${BORDER}`, backgroundColor: "white" }}>
          <div className="max-w-7xl mx-auto px-16 flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ border: `1.5px solid ${BORDER}`, color: DARK, backgroundColor: SOFT }}
            >
              ← Back to work
            </Link>
            <Link
              href="/work/bpo-coding"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-opacity hover:opacity-80 text-white"
              style={{ backgroundColor: DARK }}
            >
              Next: BPO Coding →
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
