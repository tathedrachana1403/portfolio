import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import {
  BPOShadowingMap,
  BPOWireframeNavigator,
} from "../../components/ResearchArtifacts";
import BPOImageCarousel from "../../components/BPOImageCarousel";

const DARK = "#1e3a5f";
const SOFT = "#eff6ff";
const BORDER = "#bfdbfe";
const MUTED = "#dbeafe";
const DARK_SHADOW = "0 8px 40px rgba(30,58,95,0.25)";

function ChapterHeader({
  number,
  label,
  heading,
  sub,
}: {
  number: string;
  label: string;
  heading: string;
  sub?: string;
}) {
  return (
    <div className="mb-10">
      <div
        className="inline-flex items-center gap-3 rounded-full px-4 py-1.5 mb-5"
        style={{ backgroundColor: SOFT, border: `1.5px solid ${BORDER}` }}
      >
        <span
          className="text-sm font-black tabular-nums"
          style={{ color: DARK }}
        >
          {number}
        </span>
        <span className="w-4 h-px" style={{ backgroundColor: BORDER }} />
        <span
          className="text-sm font-black tracking-[0.14em] uppercase"
          style={{ color: DARK }}
        >
          {label}
        </span>
      </div>
      <h2
        className="text-2xl md:text-3xl font-black leading-[1.2] tracking-tight mb-4"
        style={{ color: DARK, textWrap: "balance" } as React.CSSProperties}
      >
        {heading}
      </h2>
      {sub && (
        <p
          className="text-base text-slate-500 leading-relaxed"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

export default function BPOCoding() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* BREADCRUMB */}
<div className="max-w-4xl mx-auto px-8 pt-8 pb-0">
  <div
    className="flex items-center gap-1.5 text-sm font-medium"
    style={{ color: "#94a3b8" }}
  >
    <Link
      href="/"
      className="hover:opacity-60 transition-opacity"
      style={{ color: DARK }}
    >
      Home
    </Link>

    <span>/</span>

    <span>BPO AI Medical Coding Assistant</span>
  </div>
</div>

{/* HERO */}
<div className="max-w-4xl mx-auto px-8 pt-3 pb-16">

  {/* Case Study Label */}
  <div
    className="inline-flex items-center rounded-full px-3.5 py-1 mb-4"
    style={{
      backgroundColor: SOFT,
      border: `1px solid ${BORDER}`,
    }}
  >
    <span
      className="text-xs font-bold tracking-[0.12em] uppercase"
      style={{ color: DARK }}
    >
      Case Study 02 / 04 · Lead Product Designer
    </span>
  </div>

  {/* Hero Heading */}
  <h1
    className="text-5xl md:text-3xl font-black leading-[1.0] tracking-tight mb-4"
    style={{ color: DARK }}
  >
    Helping medical coders make faster and accurate decisions.
  </h1>

  {/* Hero Description */}
  <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
    The BPO Medical Coding Assistant brings relevant coding guidance
    directly into the chart, helping coders resolve complex cases while
    keeping recommendations editable and traceable.
  </p>

  {/* Hero Image */}
  <div className="w-full overflow-hidden rounded-2xl mb-12">
    <img
      src="/images/bpo/Hero.png"
      alt="BPO AI Medical Coding Assistant"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* PROJECT DETAILS */}
<div
  className="grid grid-cols-1 md:grid-cols-3 pt-4 mb-12"
  style={{ borderTop: `1px solid ${BORDER}` }}
>
  {[
    {
      label: "My Role",
      value:
        "Lead Product Designer - led the UX strategy and end-to-end design of the AI-assisted coding experience.",
    },
    {
      label: "Team",
      value:
        "Product Manager, Engineering, Medical Coding/Domain Experts, and Design.",
    },
    {
      label: "Timeline",
      value: "3 months",
    },
  ].map((m, i) => (
    <div
      key={m.label}
      className="py-4 pr-6"
      style={{
        borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
        paddingLeft: i > 0 ? "1.5rem" : 0,
      }}
    >
      <p
        className="text-xs font-black tracking-[0.14em] uppercase mb-2"
        style={{ color: DARK }}
      >
        {m.label}
      </p>

      <p className="text-sm font-medium leading-relaxed text-slate-500">
        {m.value}
      </p>
    </div>
  ))}
</div>

          {/* Impact strip */}
          <div
            className="rounded-2xl px-8 py-6"
            style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { v: "40%", l: "Fewer billing errors" },
                { v: "33.4%", l: "Fewer claim rejections" },
                { v: "95%", l: "SLA accuracy target met" },
                { v: "QA-ready", l: "Changed decisions traceable" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-xl font-black text-white tabular-nums">
                    {s.v}
                  </p>
                  <p
                    className="text-xs mt-1 leading-snug"
                    style={{ color: MUTED }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* ─────────────────────────────────────────────
    01 — CONTEXT
───────────────────────────────────────────── */}
<section
  style={{
    backgroundColor: "#ffffff",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-4xl mx-auto px-8 py-16">

    {/* Section label */}
    <p
      className="text-sm font-black tracking-[0.12em] uppercase mb-5"
      style={{ color: DARK }}
    >
      01 — Context
    </p>

    {/* Heading */}
    <h2
      className="text-2xl md:text-3xl font-black leading-[1.2] tracking-tight mb-5"
      style={{
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
      Medical coding spans two stages: coding and QA.
    </h2>

    {/* Description */}
    <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-3xl">
      Coders review clinical charts and apply coding rules to assign accurate
      billing codes. Incorrect coding can lead to{" "}
      <strong className="font-semibold" style={{ color: DARK }}>
        claim rejections
      </strong>
      , making accuracy critical to the workflow. After submission, QA
      reviewers validate those coding decisions.
    </p>

    <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-3xl mt-5">
      The workflow therefore needs to support{" "}
      <strong className="font-semibold" style={{ color: DARK }}>
        accurate coding decisions and effective QA review
      </strong>
      .
    </p>

  </div>
</section>


{/* ─────────────────────────────────────────────
    §02 RESEARCH
───────────────────────────────────────────── */}
<section
  style={{
    backgroundColor: "#ffffff",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-4xl mx-auto px-8 py-16">

    {/* SECTION HEADER — SAME AS CONTEXT */}
    <div className="mb-7">
      <p
        className="text-sm font-black tracking-[0.14em] uppercase mb-5"
        style={{ color: DARK }}
      >
        02 — Research
      </p>

      <h2
        className="text-2xl md:text-3xl font-black leading-[1.2] tracking-tight"
        style={{
          color: DARK,
          textWrap: "balance",
        } as React.CSSProperties}
      >
        Research revealed where accuracy risk entered the workflow.
      </h2>
    </div>

    {/* RESEARCH PARTICIPANTS */}
    <div
      className="mb-5"
      style={{
        borderLeft: `3px solid ${BORDER}`,
        paddingLeft: "1.25rem",
      }}
    >
      <p className="text-base text-slate-500 leading-relaxed">
        We observed and interviewed{" "}
        <strong style={{ color: DARK }}>8 medical coders</strong> and{" "}
        <strong style={{ color: DARK }}>3 QA reviewers</strong> across the
        coding and QA workflow.
      </p>
    </div>

    {/* RESEARCH FINDINGS */}
    <div>
      <p
        className="text-xs font-black tracking-[0.14em] uppercase mb-3"
        style={{ color: DARK }}
      >
        Research findings
      </p>

      {/* HORIZONTAL FINDINGS */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >

        {/* FINDING 01 */}
        <div
          className="py-6 pr-6"
          style={{
            borderRight: `1px solid ${BORDER}`,
          }}
        >
          <p
            className="text-xs font-black tracking-[0.12em] mb-3"
            style={{ color: DARK }}
          >
            01
          </p>

          <h3
            className="text-base md:text-lg font-black leading-snug mb-3"
            style={{ color: "#0f172a" }}
          >
            Guidance was outside the decision context
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed">
            Coders left the chart to look up rules, then had to remember and
            apply them while reviewing the chart.
          </p>
        </div>

        {/* FINDING 02 */}
        <div
          className="py-6 px-6"
          style={{
            borderRight: `1px solid ${BORDER}`,
          }}
        >
          <p
            className="text-xs font-black tracking-[0.12em] mb-3"
            style={{ color: DARK }}
          >
            02
          </p>

          <h3
            className="text-base md:text-lg font-black leading-snug mb-3"
            style={{ color: "#0f172a" }}
          >
            Coding rules didn't replace clinical judgment
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed">
            Coders interpreted coding rules alongside the clinical context
            before making a final decision.
          </p>
        </div>

        {/* FINDING 03 */}
        <div className="py-6 pl-6">
          <p
            className="text-xs font-black tracking-[0.12em] mb-3"
            style={{ color: DARK }}
          >
            03
          </p>

          <h3
            className="text-base md:text-lg font-black leading-snug mb-3"
            style={{ color: "#0f172a" }}
          >
            Decision rationale was lost after submission
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed">
            QA reviewers had to reconstruct why coding decisions changed.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>

      {/* ─────────────────────────────────────────────
    03 — APPROACH
───────────────────────────────────────────── */}
<section className="max-w-4xl mx-auto px-8 py-10">
  {/* Section label — consistent with Context / Research */}
  <p
    className="text-xs font-black tracking-[0.14em] uppercase mb-4"
    style={{ color: DARK }}
  >
    03 — Approach
  </p>

  {/* Section heading */}
  <h2
    className="text-2xl md:text-3xl font-black leading-[1.2] tracking-tight mb-8"
    style={{
      color: DARK,
      textWrap: "balance",
    } as React.CSSProperties}
  >
    Bring the right guidance into the decision without disrupting the workflow.
  </h2>

  {/* Approach principles */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
    {[
      {
        number: "01",
        title: "Surface relevant guidance",
        body: "Bring applicable coding rules into the chart.",
      },
      {
        number: "02",
        title: "Lead to a coding outcome",
        body: "Use rule-based questions to guide coders to the appropriate outcome.",
      },
      {
        number: "03",
        title: "Automate clear-cut answers",
        body: "Provide direct answers where the rules allow the system to determine them.",
      },
      {
        number: "04",
        title: "Enable informed changes",
        body: "Allow coders to change an outcome and capture the rationale.",
      },
    ].map((item) => (
      <div
        key={item.number}
        className="flex gap-4"
      >
        {/* Number */}
        <div
          className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-xs font-black"
          style={{
            backgroundColor: SOFT,
            color: DARK,
            border: `1px solid ${BORDER}`,
          }}
        >
          {item.number}
        </div>

        {/* Text */}
        <div className="pt-0.5">
          <h3
            className="text-base font-black leading-snug mb-1"
            style={{ color: DARK }}
          >
            {item.title}
          </h3>

          <p className="text-sm leading-relaxed text-slate-500 max-w-md">
            {item.body}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

       {/* ═══════════════════════════════════════════════════════════════
    04 — DECISION ARCHITECTURE
═══════════════════════════════════════════════════════════════ */}
<section
  className="w-full"
  style={{ color: DARK }}
>

  {/* FULL-WIDTH SECTION DIVIDER */}
  <div
    className="w-full"
    style={{
      height: "1px",
      backgroundColor: BORDER,
    }}
  />

  {/* CONTENT */}
  <div className="max-w-4xl mx-auto px-8 pt-16 pb-20">

    {/* SECTION LABEL */}
    <p
      className="text-xs font-black tracking-[0.14em] uppercase mb-5"
      style={{ color: "#64748b" }}
    >
      04 — Decision Architecture
    </p>

    {/* CORE DECISION */}
    <h2 className="text-3xl md:text-4xl font-black leading-[1.12] tracking-tight mb-10">
      The system answers what it can determine;
      <span style={{ color: "#64748b" }}>
        {" "}the coder provides the missing context.
      </span>
    </h2>


    {/* INITIAL → DESIGN DECISION */}
    <div
      className="w-full mb-12 rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${BORDER}`,
      }}
    >

      <div className="grid grid-cols-1 md:grid-cols-[1fr_52px_1fr]">

        {/* INITIAL DIRECTION */}
        <div className="px-7 py-6 bg-white">

          <p
            className="text-[10px] font-black tracking-[0.14em] uppercase mb-3"
            style={{ color: "#94a3b8" }}
          >
            Initial direction
          </p>

          <h3 className="text-lg font-black tracking-tight mb-1">
            Full automation
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed">
            Determine the coding outcome automatically.
          </p>

        </div>


        {/* ARROW */}
        <div
          className="hidden md:flex items-center justify-center"
          style={{
            backgroundColor: "#f8fafc",
            borderLeft: `1px solid ${BORDER}`,
            borderRight: `1px solid ${BORDER}`,
          }}
        >
          <span
            className="text-lg"
            style={{ color: "#94a3b8" }}
          >
            →
          </span>
        </div>


        {/* DESIGN DECISION */}
        <div
          className="px-7 py-6"
          style={{
            backgroundColor: "#f8fafc",
          }}
        >

          <p
            className="text-[10px] font-black tracking-[0.14em] uppercase mb-3"
            style={{ color: "#64748b" }}
          >
            Design decision
          </p>

          <h3 className="text-lg font-black tracking-tight mb-1">
            Guided automation
          </h3>

          <p className="text-sm text-slate-500 leading-relaxed">
            Automate only what the system can reliably determine.
          </p>

        </div>

      </div>


      {/* TRADE-OFF */}
      <div
        className="px-7 py-3.5 flex items-center justify-center"
        style={{
          borderTop: `1px solid ${BORDER}`,
          backgroundColor: "#fff",
        }}
      >
        <p className="text-xs font-bold text-slate-500">
          Maximum automation
          <span
            className="mx-2 font-normal"
            style={{ color: "#94a3b8" }}
          >
            vs.
          </span>
          <span style={{ color: DARK }}>
            decision reliability
          </span>
        </p>
      </div>

    </div>


    {/* WORKFLOW */}
    <div
      className="w-full rounded-xl px-6 md:px-8 py-8"
      style={{
        backgroundColor: "#f8fafc",
        border: `1px solid ${BORDER}`,
      }}
    >

      {/* INITIATE */}
      <div className="flex justify-center">

        <div
          className="px-5 py-2.5 rounded-lg text-[10px] font-black"
          style={{
            backgroundColor: DARK,
            color: "#fff",
          }}
        >
          INITIATE RELEVANT IAG
        </div>

      </div>


      {/* CONNECTOR */}
      <div
        className="w-px h-5 mx-auto"
        style={{ backgroundColor: BORDER }}
      />


      {/* QUESTION */}
      <div className="flex justify-center">

        <div
          className="px-6 py-3.5 rounded-lg bg-white text-center"
          style={{
            border: `1px solid ${BORDER}`,
          }}
        >
          <p className="text-sm font-black">
            Can the system determine the answer?
          </p>
        </div>

      </div>


      {/* SPLIT */}
      <div className="relative max-w-3xl mx-auto h-9">

        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-5"
          style={{ backgroundColor: BORDER }}
        />

        <div
          className="absolute left-[16.66%] right-[16.66%] top-5 h-px"
          style={{ backgroundColor: BORDER }}
        />

      </div>


      {/* BRANCHES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">

        {/* KEEP */}
        <div className="text-center">

          <div
            className="mx-auto w-px h-3"
            style={{ backgroundColor: BORDER }}
          />

          <div
            className="px-5 py-3 rounded-lg bg-white"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <p
              className="text-[10px] font-black tracking-[0.12em] uppercase mb-1"
              style={{ color: "#94a3b8" }}
            >
              YES
            </p>

            <p className="text-sm font-black">
              KEEP
            </p>
          </div>

        </div>


        {/* CHANGE */}
        <div className="text-center">

          <div
            className="mx-auto w-px h-3"
            style={{ backgroundColor: BORDER }}
          />

          <div
            className="px-5 py-3 rounded-lg bg-white"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <p
              className="text-[10px] font-black tracking-[0.12em] uppercase mb-1"
              style={{ color: "#94a3b8" }}
            >
              YES
            </p>

            <p className="text-sm font-black">
              CHANGE
            </p>
          </div>

          <div
            className="mx-auto w-px h-3"
            style={{ backgroundColor: BORDER }}
          />

          <div
            className="inline-flex px-3.5 py-1.5 rounded-md bg-white"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <span className="text-[10px] font-bold text-slate-500">
              Record rationale
            </span>
          </div>

        </div>


        {/* CODER */}
        <div className="text-center">

          <div
            className="mx-auto w-px h-3"
            style={{ backgroundColor: BORDER }}
          />

          <div
            className="px-5 py-3 rounded-lg bg-white"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <p
              className="text-[10px] font-black tracking-[0.12em] uppercase mb-1"
              style={{ color: "#94a3b8" }}
            >
              NO
            </p>

            <p className="text-sm font-black">
              Coder answers
            </p>
          </div>

        </div>

      </div>


      {/* MERGE */}
      <div className="relative max-w-3xl mx-auto h-10">

        <div
          className="absolute left-[16.66%] top-0 w-px h-5"
          style={{ backgroundColor: BORDER }}
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-5"
          style={{ backgroundColor: BORDER }}
        />

        <div
          className="absolute right-[16.66%] top-0 w-px h-5"
          style={{ backgroundColor: BORDER }}
        />

        <div
          className="absolute left-[16.66%] right-[16.66%] top-5 h-px"
          style={{ backgroundColor: BORDER }}
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 top-5 w-px h-5"
          style={{ backgroundColor: BORDER }}
        />

      </div>


      {/* IAG COMPLETE */}
      <div className="flex justify-center">

        <div
          className="px-6 py-2.5 rounded-lg text-sm font-black"
          style={{
            backgroundColor: DARK,
            color: "#fff",
          }}
        >
          IAG COMPLETE
        </div>

      </div>


      {/* QA */}
      <div className="flex flex-col items-center">

        <div
          className="w-px h-4"
          style={{ backgroundColor: BORDER }}
        />

        <p className="text-xs font-bold text-slate-500">
          Review coding outcome
        </p>

        <div
          className="w-px h-4"
          style={{ backgroundColor: BORDER }}
        />

        <div
          className="px-5 py-2 rounded-lg text-[10px] font-black"
          style={{
            backgroundColor: DARK,
            color: "#fff",
          }}
        >
          SUBMIT TO QA
        </div>

        <div
          className="w-px h-4"
          style={{ backgroundColor: BORDER }}
        />

        <p
          className="text-[10px] font-black tracking-[0.12em] uppercase"
          style={{ color: "#64748b" }}
        >
          QA REVIEW
        </p>

        <p className="text-sm font-black mt-1">
          Reviews the final decision and rationale.
        </p>

      </div>

    </div>


    {/* FUTURE DIRECTION */}
    <div
      className="mt-12 pt-7 w-full"
      style={{
        borderTop: `1px solid ${BORDER}`,
      }}
    >

      <p
        className="text-xs font-black tracking-[0.14em] uppercase mb-3"
        style={{ color: "#64748b" }}
      >
        Future direction
      </p>

      <p className="text-base md:text-lg font-bold leading-relaxed max-w-3xl">
        Coder decisions give the system structured feedback, allowing it to
        determine more answers over time and gradually increase automation.
      </p>

    </div>

  </div>
</section>

        {/* §05 INTERACTION DESIGN */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader
              number="05"
              label="Interaction Design"
              heading="We brought system guidance into the coding workflow, reducing context switching."
            />

            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-[3px] h-5 rounded-full shrink-0"
                style={{ backgroundColor: DARK }}
              />
              <h3
                className="text-base font-bold tracking-tight"
                style={{ color: DARK }}
              >
                Wireframe explorations
              </h3>
            </div>
            <div className="mb-10">
              <BPOWireframeNavigator />
            </div>

            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-[3px] h-5 rounded-full shrink-0"
                style={{ backgroundColor: DARK }}
              />
              <h3
                className="text-base font-bold tracking-tight"
                style={{ color: DARK }}
              >
                Final design screens
              </h3>
            </div>
            <BPOImageCarousel />
            <p className="text-base text-slate-400 italic mt-4">

            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-8 py-16">
  <div className="mb-10">
    <h2 className="text-sm font-bold tracking-wide text-gray-900">
      06 — Design Calibration
    </h2>

    <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-gray-900 max-w-3xl mt-4">
      The challenge was surfacing enough context to support accurate decisions
      without adding cognitive load.
    </h3>
  </div>

  <div className="overflow-hidden rounded-xl border border-gray-200">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-200">
          <th className="text-left px-5 py-4 font-semibold text-gray-900">
            Direction
          </th>
          <th className="text-left px-5 py-4 font-semibold text-gray-900">
            Decision
          </th>
          <th className="text-left px-5 py-4 font-semibold text-gray-900">
            Why
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b border-gray-200">
          <td className="px-5 py-4 font-medium text-gray-900">
            Confidence signal
          </td>
          <td className="px-5 py-4 font-semibold text-gray-500">
            Rejected
          </td>
          <td className="px-5 py-4 text-gray-600">
            Didn't tell coders what to verify
          </td>
        </tr>

        <tr className="border-b border-gray-200">
          <td className="px-5 py-4 font-medium text-gray-900">
            Full rule trace
          </td>
          <td className="px-5 py-4 font-semibold text-gray-500">
            Rejected
          </td>
          <td className="px-5 py-4 text-gray-600">
            Added complexity during high-volume work
          </td>
        </tr>

        <tr className="border-b border-gray-200">
          <td className="px-5 py-4 font-medium text-gray-900">
            Contextual guidance
          </td>
          <td className="px-5 py-4 font-semibold text-blue-700">
            Selected
          </td>
          <td className="px-5 py-4 text-gray-600">
            Reduced lookup at the decision point
          </td>
        </tr>

        <tr className="border-b border-gray-200">
          <td className="px-5 py-4 font-medium text-gray-900">
            Editable recommendations
          </td>
          <td className="px-5 py-4 font-semibold text-blue-700">
            Selected
          </td>
          <td className="px-5 py-4 text-gray-600">
            Preserved expert judgment
          </td>
        </tr>

        <tr>
          <td className="px-5 py-4 font-medium text-gray-900">
            Change rationale
          </td>
          <td className="px-5 py-4 font-semibold text-blue-700">
            Selected
          </td>
          <td className="px-5 py-4 text-gray-600">
            Made exceptions reviewable
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="mt-8 border-l-4 border-blue-900 pl-5">
    <p className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">
      Design principle
    </p>

    <p className="text-lg font-semibold text-gray-900">
      Optimize for decision quality, not information volume.
    </p>
  </div>
</div>

        {/* §07 SCALE */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          {/* <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader
              number="07" label="Designing for Scale"
              heading="The rules varied by client. The interaction model needed to remain consistent."
              sub="Different BPO clients introduced different coding requirements, payer rules, modifiers, client policies, and SLA structures."
            />

            <div className="flex items-center gap-3 mb-5">
              <div className="w-[3px] h-5 rounded-full shrink-0" style={{ backgroundColor: DARK }} />
              <h3 className="text-base font-bold tracking-tight" style={{ color: DARK }}>Modular component model</h3>
            </div>
            <div className="grid grid-cols-4 gap-0 mb-10" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
              {[
                { name: "Code Suggestion", desc: "Rules-driven recommendation.", n: "01" },
                { name: "Modifier Alert",  desc: "Applicable modifier guidance.", n: "02" },
                { name: "Client Rule",     desc: "Client-specific requirements.", n: "03" },
                { name: "Change Reason",   desc: "Structured override rationale.", n: "04" },
              ].map((c, i) => (
                <div key={c.name} className="py-6 pr-6" style={{ borderLeft: i > 0 ? `1px solid ${BORDER}` : "none", paddingLeft: i > 0 ? "1.5rem" : 0 }}>
                  <p className="text-xs font-black tabular-nums mb-3" style={{ color: BORDER }}>{c.n}</p>
                  <p className="text-base font-black mb-1" style={{ color: DARK }}>{c.name}</p>
                  <p className="text-base text-slate-500 leading-snug">{c.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              Client-specific rules could change without creating a different workflow for each implementation. The same coder experience scaled across BPO clients with different coding requirements, payer rules, and SLA structures.
            </p>

            <div className="rounded-2xl px-8 py-6" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
              <p className="text-sm font-bold tracking-[0.16em] uppercase mb-3" style={{ color: MUTED }}>Design contribution</p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                I defined the decision model, interaction patterns, guidance structure, change-reason model, and component approach — partnering with Engineering to make the experience <strong className="text-white">configurable at scale.</strong>
              </p>
            </div>
          </div> */}
        </div>

        <div className="max-w-4xl mx-auto px-8 py-10">
  {/* 07 — Outcomes */}
  <div className="mb-12">
    <h2 className="text-sm font-bold tracking-wide text-gray-600">
      07 — Outcomes
    </h2>

    <h3 className="text-3xl md:text-3xl font-bold tracking-tight leading-tight text-gray-900 max-w-3xl mt-4">
      The workflow improved accuracy without removing expert judgment.
    </h3>
  </div>

  {/* Key Outcomes */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4">
    {[
      {
        value: "40%",
        label: "Fewer billing errors",
      },
      {
        value: "33.4%",
        label: "Fewer claim rejections",
      },
      {
        value: "95%",
        label: "SLA accuracy target met",
      },
      {
        value: "QA-ready",
        label: "Changed decisions carried rationale",
      },
    ].map((metric) => (
      <div
        key={metric.value}
        className="rounded-xl border border-gray-200 bg-white p-5"
      >
        <p className="text-xl md:text-2xl font-black tracking-tight text-blue-900">
          {metric.value}
        </p>

        <p className="text-sm font-medium text-gray-600 leading-snug mt-2">
          {metric.label}
        </p>
      </div>
    ))}
  </div>

  {/* Measurement Note */}
  <p className="text-xs text-gray-400 leading-relaxed mb-8">
    Billing error and claim rejection rates measured against a 3-month
    pre-launch baseline from the same BPO cohort.
  </p>

  {/* Stakeholder Outcomes */}
  <div className="border-t border-gray-200 pt-8">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Coder */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-3">
          Coder
        </p>

        <p className="text-sm text-gray-600 leading-relaxed">
          Less lookup and context switching. Guidance appears at the moment
          of decision, not after the chart closes.
        </p>
      </div>

      {/* QA */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-3">
          QA
        </p>

        <p className="text-sm text-gray-600 leading-relaxed">
          Less reconstruction and better decision visibility. The reason
          behind each change travels with the work.
        </p>
      </div>

      {/* Business */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-900 mb-3">
          Business
        </p>

        <p className="text-sm text-gray-600 leading-relaxed">
          Fewer errors and rejected claims. Accuracy improved without
          removing expert judgment from the workflow.
        </p>
      </div>
    </div>
  </div>
</div>

        <div className="max-w-4xl mx-auto px-8 py-16">

  {/* Section heading */}
  <div className="mb-12">
    <p
      className="text-sm font-semibold tracking-tight mb-4"
      style={{ color: "#64748b" }}
    >
      08 — Reflect
    </p>

    <h2
      className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] max-w-3xl"
      style={{ color: DARK }}
    >
      The biggest shift was moving decision support into the workflow itself.
    </h2>
  </div>


  {/* Reflection */}
  <div className="border-t border-slate-200 pt-8">

    <p
      className="text-[11px] font-bold uppercase tracking-[0.18em] mb-5"
      style={{ color: "#64748b" }}
    >
      What changed
    </p>

    <div className="max-w-3xl">
      <p
        className="text-2xl md:text-3xl font-semibold tracking-tight leading-[1.25]"
        style={{ color: DARK }}
      >
        The system didn't replace the coder's expertise.
      </p>

      <p
        className="mt-3 text-lg md:text-xl leading-relaxed"
        style={{ color: "#64748b" }}
      >
        It made expert judgment easier to apply, review, and scale.
      </p>
    </div>

  </div>


  {/* Next opportunity */}
  <div className="mt-12 pt-8 border-t border-slate-200">

    <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 items-start">

      <p
        className="text-[11px] font-bold uppercase tracking-[0.18em]"
        style={{ color: "#64748b" }}
      >
        Next opportunity
      </p>

      <div>
        <p
          className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] max-w-2xl"
          style={{ color: DARK }}
        >
          Move toward fully automated guidance and validation.
        </p>

        <p
          className="mt-3 text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ color: "#64748b" }}
        >
          The long-term opportunity is to automate more of the workflow until
          guidance and validation require minimal manual intervention.
        </p>
      </div>

    </div>

  </div>

</div>

        {/* FOOTER NAV */}
        <div className="py-10 px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link
              href="/work/ambient-notes"
              className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              ← Ambient Notes
            </Link>
            <Link
              href="/work/athenatext"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:opacity-60 transition-opacity"
            >
              Next: athenaText →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
