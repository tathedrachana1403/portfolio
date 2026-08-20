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

        {/* ── 01 THE PROBLEM ── */}
<Section className="pt-14 pb-12">
  {/* Section label */}
  <div className="flex items-center gap-3 mb-2">
    <span
      className="text-xs font-bold tracking-[0.16em] uppercase"
      style={{ color: MUTED }}
    >
      01
    </span>

    <span
      className="text-xs font-bold tracking-[0.16em] uppercase"
      style={{ color: MUTED }}
    >
      The Problem
    </span>
  </div>

  {/* Problem statement */}
  <div className="mb-7">
    <h2
      className="text-2xl md:text-3xl font-bold leading-[1.2] tracking-tight mb-4"
      style={{ color: DARK }}
    >
      Documentation divided attention during patient visits and kept
      clinicians working after hours.
    </h2>

    <p
      className="text-base md:text-lg leading-relaxed max-w-5xl"
      style={{ color: "#64748b" }}
    >
      <strong style={{ color: DARK }}>
        This created a persistent trade-off:
      </strong>{" "}
      documenting in the moment competed with attention to the patient,
      while unfinished documentation carried into the hours after the visit.
    </p>
  </div>

  {/* Initial hypothesis */}
  <div
    className="grid md:grid-cols-[180px_1fr] gap-6 pt-5"
    style={{ borderTop: `1px solid ${BORDER}` }}
  >
    <p
      className="text-xs font-bold tracking-[0.14em] uppercase"
      style={{ color: MUTED }}
    >
      Initial hypothesis
    </p>

    <p
      className="text-base md:text-lg font-medium leading-relaxed max-w-4xl"
      style={{ color: "#475569" }}
    >
      If we reduced the{" "}
      <strong style={{ color: DARK }}>
        time and effort required to document
      </strong>
      , clinicians could stay{" "}
      <strong style={{ color: DARK }}>
        focused on patient care
      </strong>{" "}
      and spend{" "}
      <strong style={{ color: DARK }}>
        less time finishing notes after hours.
      </strong>
    </p>
  </div>
</Section>


        {/* ── 02 DISCOVERY ── white */}
<Section className="pt-14 pb-12">

  {/* Chapter heading */}
  <div className="mb-7">
    <p
      className="text-xs font-bold tracking-[0.16em] uppercase mb-2"
      style={{ color: MUTED }}
    >
      02 Discovery
    </p>

    <h2
      className="text-3xl md:text-4xl font-bold tracking-tight leading-tight max-w-4xl"
      style={{ color: DARK }}
    >
      Making documentation faster wouldn't solve the whole problem.
    </h2>

    <p
      className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-4xl mt-3"
    >
      We spoke with 20 clinicians and mapped their end-to-end documentation
      workflow to understand where the burden occurred.
    </p>
  </div>

  {/* ── CURRENT-STATE WORKFLOW ── */}
  <div className="mt-8">

    <p
      className="text-xs font-bold tracking-[0.16em] uppercase mb-3"
      style={{ color: MUTED }}
    >
      Current-state workflow
    </p>

    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#FAFAFA",
        border: `1px solid ${BORDER}`,
        boxShadow: CARD_SHADOW,
      }}
    >

      {/* Workflow */}
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
            className={`relative px-5 py-5 ${
              index !== 0 ? "md:border-l" : ""
            }`}
            style={{
              borderColor: BORDER,
            }}
          >

            {/* Step header */}
            <div className="flex items-center gap-3 mb-4">

              {/* Icon */}
              <div
                className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "white",
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
                  className="text-[9px] font-bold tracking-[0.12em] uppercase mb-0.5"
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
              className="text-sm leading-relaxed text-slate-500"
              style={{ minHeight: "64px" }}
            >
              {step.body}
            </p>

            {/* Workflow friction */}
            <div
              className="mt-4 pt-3"
              style={{
                borderTop: `1px solid ${BORDER}`,
                minHeight: "72px",
              }}
            >
              {step.pain && (
                <div className="flex items-start gap-2.5">

                  <span
                    className="mt-1.5 w-2 h-2 shrink-0 rounded-full"
                    style={{ backgroundColor: "#7C3AED" }}
                  />

                  <p
                    className="text-sm leading-snug font-semibold"
                    style={{ color: "#4C1D95" }}
                  >
                    {step.pain}
                  </p>

                </div>
              )}
            </div>

          </div>

        ))}

      </div>

      {/* Legend */}
      <div
        className="px-5 py-3 flex items-center gap-2"
        style={{
          backgroundColor: "#F7F5FF",
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{ backgroundColor: "#7C3AED" }}
        />

        <p
          className="text-xs font-semibold"
          style={{ color: "#5B21B6" }}
        >
          Documentation friction surfaced at these points in the workflow.
        </p>
      </div>

    </div>
  </div>

  {/* ── SYNTHESIS ── */}
  <div className="mt-7">

    <p
      className="text-xs font-bold tracking-[0.16em] uppercase mb-2"
      style={{ color: MUTED }}
    >
      What this meant
    </p>

    <p
      className="text-xl md:text-2xl font-bold tracking-tight leading-snug max-w-5xl"
      style={{ color: DARK }}
    >
      The opportunity was to make documentation fit into the care workflow
      without disrupting patient care or extending beyond the workday.
    </p>

  </div>

</Section>

        {/* ── 03 REFRAME ── white */}
        <Section className="pt-14 pb-12">
          <ChapterHeader
            number="03" label="Reframe"
            heading="The problem wasn't just writing. It was the work behind it."
            sub="Documentation more than typing required remembering, reconstructing, organizing, and completing the encounter."
          />
          <div className="grid md:grid-cols-2 gap-5 mb-7">
            <div
              className="bg-white rounded-2xl p-7"
              style={{ border: `1px solid ${BORDER}`, boxShadow: CARD_SHADOW }}
            >
              <p className="text-sm font-bold tracking-[0.14em] uppercase mb-4 text-slate-400">Before</p>
              <p className="text-xl text-slate-400 leading-relaxed font-medium">Help clinicians document faster.</p>
            </div>
            <div className="rounded-2xl p-7" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
              <p className="text-sm font-bold tracking-[0.14em] uppercase mb-4" style={{ color: MUTED }}>After</p>
              <p className="text-xl font-semibold leading-relaxed text-white">
                Use AI to reduce the cognitive and manual work — without removing clinical judgment from the clinician.
              </p>
            </div>
          </div>
          <p className="text-base text-slate-500 leading-relaxed">
            This reframed Ambient Notes from an{" "}
            <strong style={{ color: DARK }}>AI note generator</strong> into an{" "}
            <strong style={{ color: DARK }}>AI-assisted documentation workflow</strong> a
            meaningful difference for how we designed accountability and control into every state.
          </p>
        </Section>

        {/* ── 04 Define - Design Principles ── lavender */}
        <Section alt className="pt-14 pb-12">
          <ChapterHeader
            number="04" label="Define"
            heading="AI could reduce the work. Clinicians still had to own the outcome."
            sub="AI could generate clinical content, but clinicians remained responsible for what entered the medical record. This distinction became the foundation for three design principles."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { n: "1", label: "AI accelerates", body: "Capture the encounter and create a structured draft." },
              { n: "2", label: "Clinician owns",  body: "Review, correct, and approve the content." },
              { n: "3", label: "System proves",   body: "Make attribution, transfer status, failure, and recovery visible." },
            ].map((c) => (
              <div
                key={c.label}
                className="bg-white rounded-2xl p-7 flex flex-col"
                style={{ border: `1px solid ${BORDER}`, boxShadow: CARD_SHADOW }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 text-sm font-black"
                  style={{ backgroundColor: SOFT, color: DARK }}
                >
                  {c.n}
                </div>
                <p className="font-bold text-lg mb-2" style={{ color: DARK }}>{c.label}</p>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{c.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 05 DECIDE ── white */}
        <Section className="pt-14 pb-12">
          <ChapterHeader
            number="05" label="Decide"
            heading="The critical question: how much control should AI have?"
            sub="We explored three directions before landing on the one that shipped."
          />
          <div className="grid md:grid-cols-3 gap-4 mb-7">
            {[
              { title: "Full AI authoring",  note: "Fastest on paper, but review could be skipped under time pressure.", verdict: "Rejected", shipped: false },
              { title: "Confidence scores",  note: "Risked either over-trust or hesitation depending on the clinician.", verdict: "Rejected", shipped: false },
              { title: "Verification-first", note: "Clinicians reviewed and approved the draft before transfer, with visibility into what reached the chart.", verdict: "Shipped", shipped: true },
            ].map(t => (
              <div
                key={t.title}
                className="rounded-2xl p-7 flex flex-col"
                style={{
                  backgroundColor: t.shipped ? DARK : "white",
                  border: `1px solid ${t.shipped ? DARK : BORDER}`,
                  boxShadow: t.shipped ? DARK_SHADOW : CARD_SHADOW,
                  opacity: t.shipped ? 1 : 0.65,
                }}
              >
                <span
                  className="self-start text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-[0.1em] uppercase"
                  style={{
                    backgroundColor: t.shipped ? "rgba(255,255,255,0.12)" : SOFT,
                    color: t.shipped ? "#e9d5ff" : DARK,
                    border: t.shipped ? "1px solid rgba(255,255,255,0.15)" : `1px solid ${BORDER}`,
                  }}
                >
                  {t.verdict}
                </span>
                <p
                  className="font-bold text-base mb-3"
                  style={{
                    color: t.shipped ? "white" : DARK,
                    textDecoration: t.shipped ? "none" : "line-through",
                    textDecorationColor: BORDER,
                  }}
                >
                  {t.title}
                </p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: t.shipped ? "rgba(255,255,255,0.65)" : "#94a3b8" }}>
                  {t.note}
                </p>
              </div>
            ))}
          </div>
          <Callout label="Trade-off: Efficiency vs. Accountability">
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Product wanted fewer steps. I advocated for explicit verification because{" "}
              <strong className="text-white font-bold">speed without visible accountability could undermine trust.</strong>{" "}
              Post-launch,{" "}
              <strong className="text-white font-bold">84 to 90% of AI-generated sections were accepted with minimal edits</strong>,
             indicating strong adoption of the verification-first workflow.
            </p>
          </Callout>
        </Section>

        {/* ── 06 DESIGN ── lavender */}
        <Section alt className="pt-14 pb-12">
          <ChapterHeader
            number="06" label="Design"
            heading="The workflow shifted clinicians from reconstructing encounters later to verifying AI-generated documentation while the context was still fresh."
          />

          <Label>The four-step workflow</Label>
          <div className="flex items-stretch mb-8">
            {[
              { n: "01", label: "Capture",  body: "Explicit consent and visible recording states." },
              { n: "02", label: "Draft",    body: "AI structures the encounter into clinical sections." },
              { n: "03", label: "Review",   body: "Clinicians review and approve each section." },
              { n: "04", label: "Transfer", body: "Section-level status shows what was sent, failed, or needs action." },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex items-stretch flex-1">
                <div
                  className="flex flex-col px-5 pt-5 pb-5 w-full"
                  style={{
                    backgroundColor: i === 0 ? SOFT : i === arr.length - 1 ? DARK : "white",
                    border: `1.5px solid ${i === arr.length - 1 ? DARK : BORDER}`,
                    borderLeft: i > 0 ? "none" : undefined,
                    borderRadius: i === 0 ? "12px 0 0 12px" : i === arr.length - 1 ? "0 12px 12px 0" : "0",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black mb-3 shrink-0"
                    style={{
                      backgroundColor: i === arr.length - 1 ? "rgba(255,255,255,0.12)" : SOFT,
                      color: i === arr.length - 1 ? "white" : DARK,
                      border: `1px solid ${i === arr.length - 1 ? "rgba(255,255,255,0.15)" : BORDER}`,
                    }}
                  >{s.n}</div>
                  <p className="font-bold text-sm mb-1.5" style={{ color: i === arr.length - 1 ? "white" : DARK }}>{s.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: i === arr.length - 1 ? "rgba(255,255,255,0.6)" : "#94a3b8" }}>{s.body}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="shrink-0 self-stretch w-6 z-10 -mx-3"
                    style={{
                      backgroundColor: i === arr.length - 2 ? DARK : BORDER,
                      clipPath: "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          <Label>End-to-end flow</Label>
          <div className="mb-8">
            <AmbientProductOverview />
          </div>

          <Label>Wireframe exploration</Label>
          <div className="mb-5">
            <AmbientWireframes />
          </div>
          <p className="text-sm text-slate-400 italic">AI assists. The clinician owns.</p>
        </Section>

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

        {/* ── 08 IMPACT ── white */}
        <Section className="pt-14 pb-12">
          <ChapterHeader
            number="08" label="Impact"
            heading="The workflow shifted clinicians from reconstructing notes to verifying them."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {[
              { v: "90%+",    l: "Same-day completion" },
              { v: "3.6 min", l: "Saved per encounter" },
              { v: "36%",     l: "Less after-hours documentation" },
              { v: "84 to 90%",  l: "AI sections accepted with minimal edits" },
              { v: "1M+",     l: "Patient encounters" },
              { v: "3K+",     l: "Clinicians onboarded" },
            ].map(s => (
              <div
                key={s.l}
                className="rounded-2xl p-6"
                style={{ backgroundColor: SOFT, border: `1px solid ${BORDER}` }}
              >
                <p className="text-4xl font-black mb-2 tabular-nums" style={{ color: DARK }}>{s.v}</p>
                <p className="text-sm text-slate-500 leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl px-8 py-8" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
            <p className="text-5xl md:text-6xl font-black text-white mb-2 tabular-nums">~60,000 hours</p>
            <p className="text-xl font-bold mb-2" style={{ color: "#d8b4fe" }}>of clinician time returned</p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Based on 3.6 minutes saved across approximately 1M encounters.
            </p>
          </div>
        </Section>

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
