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
              Less lookup for coders. Less reconstruction for QA.
            </p>
          </div>
        </div>

        {/* §06 DESIGN CALIBRATION */}
        <div
          className="max-w-4xl mx-auto px-8 py-16"
          style={{ borderBottom: `1px solid ${BORDER}` }}
        >
          <ChapterHeader
            number="06"
            label="Design Calibration"
            heading="The challenge was not showing more information. It was showing the right information."
          />

          <div
            className="overflow-hidden rounded-2xl mb-10"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: SOFT }}>
                  {["Direction", "Decision", "Why"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-6 py-3 text-sm font-bold tracking-[0.12em] uppercase"
                      style={{
                        color: DARK,
                        borderBottom: `1px solid ${BORDER}`,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    dir: "Confidence signal",
                    decision: "Rejected",
                    why: "Didn't tell coders what to verify",
                    shipped: false,
                  },
                  {
                    dir: "Full rule trace",
                    decision: "Rejected",
                    why: "Added complexity during high-volume work",
                    shipped: false,
                  },
                  {
                    dir: "Contextual guidance",
                    decision: "Selected",
                    why: "Reduced lookup at the decision point",
                    shipped: true,
                  },
                  {
                    dir: "Editable recommendations",
                    decision: "Selected",
                    why: "Preserved expert judgment",
                    shipped: true,
                  },
                  {
                    dir: "Change rationale",
                    decision: "Selected",
                    why: "Made exceptions reviewable",
                    shipped: true,
                  },
                ].map((r, i, arr) => (
                  <tr
                    key={r.dir}
                    style={{
                      borderBottom:
                        i < arr.length - 1 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <td
                      className="px-6 py-4 text-base font-medium align-top"
                      style={{
                        color: DARK,
                        textDecoration: !r.shipped ? "line-through" : "none",
                        textDecorationColor: BORDER,
                        opacity: r.shipped ? 1 : 0.5,
                      }}
                    >
                      {r.dir}
                    </td>
                    <td className="px-6 py-4 align-top">
                      <span
                        className="text-sm font-bold px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: r.shipped ? SOFT : "#fef2f2",
                          color: r.shipped ? DARK : "#ef4444",
                          border: `1px solid ${r.shipped ? BORDER : "#fecaca"}`,
                        }}
                      >
                        {r.decision}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-base text-slate-500 align-top">
                      {r.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="rounded-2xl px-8 py-6"
            style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}
          >
            <p
              className="text-sm font-bold tracking-[0.16em] uppercase mb-3"
              style={{ color: MUTED }}
            >
              Design principle
            </p>
            <p className="text-white text-xl font-semibold leading-relaxed">
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

        {/* §08 OUTCOMES */}
        <div
          className="max-w-4xl mx-auto px-8 py-16"
          style={{ borderBottom: `1px solid ${BORDER}` }}
        >
          <ChapterHeader
            number="07"
            label="Outcomes"
            heading="The workflow improved accuracy without removing expert judgment."
          />

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 mb-4"
            style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}
          >
            {[
              { v: "40%", l: "Fewer billing errors" },
              { v: "33.4%", l: "Fewer claim rejections" },
              { v: "95%", l: "SLA accuracy target met" },
              { v: "QA-ready", l: "Changed decisions carried rationale" },
            ].map((s) => (
              <div key={s.l}>
                <p
                  className="text-4xl font-black tabular-nums leading-none mb-2"
                  style={{ color: DARK }}
                >
                  {s.v}
                </p>
                <div
                  className="h-0.5 w-8 rounded mb-2"
                  style={{ backgroundColor: BORDER }}
                />
                <p className="text-base text-slate-500 leading-snug">{s.l}</p>
              </div>
            ))}
          </div>

          <p className="text-base text-slate-400 italic mb-10">
            Billing error and claim rejection rates measured against a 3-month
            pre-launch baseline from the same BPO cohort.
          </p>

          <div
            className="space-y-0"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            {[
              {
                who: "Coder",
                body: "Less lookup and context switching. Guidance appears at the moment of decision, not after the chart closes.",
              },
              {
                who: "QA",
                body: "Less reconstruction and better decision visibility. The reason behind each change travels with the work.",
              },
              {
                who: "Business",
                body: "Fewer errors and rejected claims. Accuracy improved without removing expert judgment from the workflow.",
              },
            ].map((e) => (
              <div
                key={e.who}
                className="py-6"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <p
                  className="text-xs font-black tracking-[0.14em] uppercase mb-2"
                  style={{ color: DARK }}
                >
                  {e.who}
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* §09 REFLECTION */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader
              number="08"
              label="Reflect"
              heading="The biggest shift was moving decision support into the workflow itself."
            />

            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <div
                className="rounded-2xl p-6"
                style={{ border: `1px solid ${BORDER}` }}
              >
                <p className="text-xs font-bold tracking-[0.14em] uppercase mb-3 text-slate-400">
                  Before
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    "Memory",
                    "Lookup",
                    "Reorientation",
                    "Decision",
                    "Hidden rationale",
                  ].map((s, i, arr) => (
                    <div key={s} className="flex items-center gap-2">
                      <span
                        className="text-base text-slate-400"
                        style={{
                          textDecoration: "line-through",
                          textDecorationColor: "#fca5a5",
                        }}
                      >
                        {s}
                      </span>
                      {i < arr.length - 1 && (
                        <span className="text-slate-300">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}
              >
                <p
                  className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
                  style={{ color: MUTED }}
                >
                  After
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {["Guidance", "Review", "Judgment", "Rationale", "QA"].map(
                    (s, i, arr) => (
                      <div key={s} className="flex items-center gap-2">
                        <span className="text-base text-white font-medium">
                          {s}
                        </span>
                        {i < arr.length - 1 && (
                          <span className="text-base" style={{ color: MUTED }}>
                            →
                          </span>
                        )}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <p className="text-base text-slate-500 leading-relaxed mb-8">
              The system didn't replace the coder's expertise.{" "}
              <strong style={{ color: DARK }}>
                It made expert judgment easier to exercise, easier to review,
                and easier to scale.
              </strong>
            </p>

            <div className="pl-6" style={{ borderLeft: `3px solid ${DARK}` }}>
              <p className="text-base font-bold mb-3" style={{ color: DARK }}>
                Next opportunity to make guidance adaptive:
              </p>
              <div className="space-y-1.5 mb-4">
                {[
                  "Lower-risk claims → Lightweight support",
                  "Complex or high-risk claims → Stronger checks",
                ].map((item) => (
                  <p
                    key={item}
                    className="text-base text-slate-600 leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <p
                className="text-base font-semibold italic"
                style={{ color: DARK }}
              >
                More support where risk is high. Less friction where it isn't.
              </p>
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
