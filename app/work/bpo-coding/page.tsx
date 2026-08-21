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
    className="text-5xl md:text-2.03xl font-black leading-[1.0] tracking-tight mb-4"
    style={{ color: DARK }}
  >
    Helping medical coders make faster and more accurate decisions.
  </h1>

  {/* Hero Description */}
  <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
    The BPO AI Medical Coding Assistant brings relevant coding guidance
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
  className="rounded-2xl px-6 py-5"
  style={{ backgroundColor: DARK }}
>
  <div className="grid grid-cols-3 gap-5">
    <div>
      <p className="text-lg font-black text-white">40%</p>
      <p className="text-xs mt-1" style={{ color: MUTED }}>
        Fewer billing errors
      </p>
    </div>

    <div>
      <p className="text-lg font-black text-white">33.4%</p>
      <p className="text-xs mt-1" style={{ color: MUTED }}>
        Fewer claim rejections
      </p>
    </div>

    <div>
      <p className="text-lg font-black text-white">95%</p>
      <p className="text-xs mt-1" style={{ color: MUTED }}>
        Accuracy target met
      </p>
    </div>
  </div>
</div>
        </div>

        {/* §01 USER CONTEXT */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderTop: `1px solid ${BORDER}`,
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader
              number="01"
              label="User Context"
              heading="Two users. Different responsibilities. One connected workflow."
              sub="Coders made decisions under pressure. QA reviewed those decisions after submission. The design had to serve both."
            />

            <div
              className="grid md:grid-cols-2 gap-0 mb-12"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              {[
                {
                  role: "Medical Coder",
                  task: "Review charts and make accurate coding decisions within strict turnaround targets.",
                  challenges: [
                    {
                      title: "High cognitive load",
                      body: "Codes, modifiers, chart details, client rules, and SLA requirements competed for attention.",
                    },
                    {
                      title: "Context switching",
                      body: "External lookups pulled coders away from the chart.",
                    },
                    {
                      title: "Decision friction",
                      body: "Recommendations still needed to be validated against clinical context.",
                    },
                  ],
                },
                {
                  role: "QA Reviewer",
                  task: "Validate coding decisions and identify recurring issues.",
                  challenges: [
                    {
                      title: "Limited decision context",
                      body: "The final coded value did not always explain why it changed.",
                    },
                    {
                      title: "Manual reconstruction",
                      body: "Reviewers had to retrace the coding process to understand exceptions.",
                    },
                  ],
                },
              ].map((u, i) => (
                <div
                  key={u.role}
                  className="py-8 pr-8"
                  style={{
                    borderBottom: `1px solid ${BORDER}`,
                    paddingLeft: i === 1 ? "2rem" : 0,
                    borderLeft: i === 1 ? `1px solid ${BORDER}` : "none",
                  }}
                >
                  <p
                    className="text-xs font-black tracking-[0.14em] uppercase mb-3"
                    style={{ color: DARK }}
                  >
                    {u.role}
                  </p>
                  <p
                    className="text-base font-semibold mb-6 leading-snug"
                    style={{ color: DARK }}
                  >
                    {u.task}
                  </p>
                  <div className="space-y-4">
                    {u.challenges.map((c) => (
                      <div key={c.title}>
                        <p
                          className="text-base font-black mb-0.5"
                          style={{ color: DARK }}
                        >
                          {c.title}
                        </p>
                        <p className="text-base text-slate-500 leading-relaxed">
                          {c.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}
            >
              <div
                className="px-8 pt-7 pb-5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <p
                  className="text-xs font-black tracking-[0.2em] uppercase mb-2"
                  style={{ color: MUTED }}
                >
                  UX Opportunity
                </p>
                <p className="text-2xl font-black text-white leading-snug">
                  The same workflow. Two different needs.
                </p>
              </div>
              <div
                className="grid md:grid-cols-2"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="px-8 py-7">
                  <p
                    className="text-xs font-bold tracking-[0.12em] uppercase mb-3"
                    style={{ color: MUTED }}
                  >
                    Medical Coder - during the decision
                  </p>
                  <p className="text-lg font-bold text-white leading-snug">
                    Relevant guidance at the moment of coding, inside the chart.
                  </p>
                </div>
                <div
                  className="px-8 py-7"
                  style={{
                    borderLeft: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  }}
                >
                  <p
                    className="text-xs font-bold tracking-[0.12em] uppercase mb-3"
                    style={{ color: MUTED }}
                  >
                    QA Reviewer - after submission
                  </p>
                  <p
                    className="text-lg font-bold leading-snug"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    Decision context traceable after the claim was submitted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* §02 RESEARCH */}
        <div
          className="max-w-4xl mx-auto px-8 py-16"
          style={{ borderBottom: `1px solid ${BORDER}` }}
        >
          <ChapterHeader
            number="02"
            label="Research"
            heading="Shadowing showed where accuracy risk entered the workflow."
            sub="8 medical coders interviewed and shadowed · 3 QA reviewers interviewed and shadowed"
          />

          {/* Stats row — open, no boxes */}
          <div
            className="grid grid-cols-4 gap-0 mb-14"
            style={{
              borderTop: `1px solid ${BORDER}`,
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            {[
              { v: "8", l: "Medical coders shadowed" },
              { v: "3", l: "QA reviewers interviewed" },
              { v: "3×", l: "Tab switches per single claim" },
              { v: "95%", l: "Accuracy target coders worked toward" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="py-6 pr-6"
                style={{
                  borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
                  paddingLeft: i > 0 ? "1.5rem" : 0,
                }}
              >
                <p
                  className="text-3xl font-black tabular-nums leading-none mb-2"
                  style={{ color: DARK }}
                >
                  {s.v}
                </p>
                <p className="text-base text-slate-500">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-[3px] h-5 rounded-full shrink-0"
              style={{ backgroundColor: DARK }}
            />
            <h3
              className="text-base font-bold tracking-tight"
              style={{ color: DARK }}
            >
              What we observed
            </h3>
          </div>
          <div
            className="rounded-2xl overflow-hidden mb-12"
            style={{ border: `1px solid ${BORDER}` }}
          >
            {/* Header */}
            <div
              className="px-7 py-4 flex items-center justify-between"
              style={{ backgroundColor: DARK }}
            >
              <p className="text-sm font-black tracking-[0.1em] uppercase text-white">
                Observed workflow · one claim
              </p>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                8 coders · live sessions
              </span>
            </div>

            {/* Steps 01 + 02 */}
            {[
              {
                n: "01",
                label: "Review chart",
                sub: "Coder opens the chart and starts with confidence",
              },
              {
                n: "02",
                label: "Encounter ambiguity",
                sub: "needs to lookup for the modifier lookup",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="flex items-stretch bg-white"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <div className="flex flex-col items-center w-16 shrink-0 py-5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0 z-10"
                    style={{
                      backgroundColor: SOFT,
                      color: DARK,
                      border: `2px solid ${BORDER}`,
                    }}
                  >
                    {step.n}
                  </div>
                  <div
                    className="flex-1 w-0.5 mt-2"
                    style={{ backgroundColor: BORDER }}
                  />
                </div>
                <div className="flex-1 py-6 pr-7">
                  <p
                    className="text-base font-bold mb-1.5"
                    style={{ color: DARK }}
                  >
                    {step.label}
                  </p>
                  <p className="text-base text-slate-400">{step.sub}</p>
                </div>
              </div>
            ))}

            {/* Friction zone */}
            <div
              style={{
                backgroundColor: "#fef2f2",
                borderTop: "1.5px solid #fca5a5",
                borderBottom: "1.5px solid #fca5a5",
                borderLeft: "5px solid #ef4444",
              }}
            >
              <div className="flex items-center gap-2 px-5 pt-4 pb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                <span className="text-xs font-black text-red-500 tracking-[0.12em] uppercase">
                  Friction zone — where accuracy risk enters
                </span>
              </div>
              <div className="grid grid-cols-2 gap-0">
                <div>
                  {[
                    {
                      n: "03",
                      label: "Leave chart",
                      sub: "Searches reference tabs for the modifier or client rule — loses chart context",
                    },
                    {
                      n: "04",
                      label: "Return to chart",
                      sub: "Re-reads the chart 3× to reorient before making a decision",
                    },
                  ].map((step, i, arr) => (
                    <div key={step.n} className="flex items-stretch">
                      <div className="flex flex-col items-center w-16 shrink-0 py-5">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0 z-10"
                          style={{
                            backgroundColor: "#fee2e2",
                            color: "#ef4444",
                            border: "2px solid #fca5a5",
                          }}
                        >
                          {step.n}
                        </div>
                        {i < arr.length - 1 && (
                          <div
                            className="flex-1 w-0.5 mt-2"
                            style={{ backgroundColor: "#fca5a5" }}
                          />
                        )}
                      </div>
                      <div className="flex-1 py-6 pr-6">
                        <p
                          className="text-base font-bold mb-1.5"
                          style={{ color: "#b91c1c" }}
                        >
                          {step.label}
                        </p>
                        <p className="text-base" style={{ color: "#f87171" }}>
                          {step.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-center px-6 py-6"
                  style={{ borderLeft: "1px solid #fca5a5" }}
                >
                  <div
                    className="w-full rounded-xl overflow-hidden"
                    style={{ border: "1.5px solid #fed7aa" }}
                  >
                    <div
                      className="px-5 py-4"
                      style={{ backgroundColor: "#fff7ed" }}
                    >
                      <p
                        className="text-xs font-black tracking-[0.1em] uppercase mb-1.5"
                        style={{ color: "#c2410c" }}
                      >
                        Pattern 01
                      </p>
                      <p
                        className="text-base font-bold"
                        style={{ color: "#9a3412" }}
                      >
                        Context switching
                      </p>
                      <p
                        className="text-base mt-1.5"
                        style={{ color: "#ea580c" }}
                      >
                        3× tab switches per claim · loses SLA score
                      </p>
                    </div>
                    <div className="px-5 py-4 bg-white">
                      {[
                        "Tab → chart → tab",
                        "Re-reads 3× per claim",
                        "Loses SLA score",
                      ].map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2.5 mb-2 last:mb-0"
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: "#f97316" }}
                          />
                          <span
                            className="text-base font-medium"
                            style={{ color: "#92400e" }}
                          >
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps 05 + 06 */}
            {[
              {
                n: "05",
                label: "Make decision",
                sub: "Applies code from memory - recall error risk is highest here",
                pattern: {
                  num: "02",
                  title: "Memory overload",
                  desc: "Codes + modifiers + rules + SLA in parallel",
                  tags: ["High variation between coders", "SLA pressure"],
                  headBg: "#fefce8",
                  headText: "#92400e",
                  border: "#fde68a",
                  accent: "#d97706",
                },
              },
              {
                n: "06",
                label: "QA review",
                sub: "Claim submitted - but the reason behind the decision was never recorded",
                pattern: {
                  num: "03",
                  title: "QA blind spot",
                  desc: "Rationale lost - reviewers reconstruct after the fact",
                  tags: ["No reason recorded", "Manual reconstruction"],
                  headBg: SOFT,
                  headText: DARK,
                  border: BORDER,
                  accent: "#94a3b8",
                },
              },
            ].map((row, i, arr) => (
              <div
                key={row.n}
                className="grid grid-cols-2 bg-white"
                style={{ borderTop: `1px solid ${BORDER}` }}
              >
                <div className="flex items-stretch">
                  <div className="flex flex-col items-center w-16 shrink-0 py-5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0 z-10"
                      style={{
                        backgroundColor: SOFT,
                        color: DARK,
                        border: `2px solid ${BORDER}`,
                      }}
                    >
                      {row.n}
                    </div>
                    {i < arr.length - 1 && (
                      <div
                        className="flex-1 w-0.5 mt-2"
                        style={{ backgroundColor: BORDER }}
                      />
                    )}
                  </div>
                  <div className="flex-1 py-6 pr-6">
                    <p
                      className="text-base font-bold mb-1.5"
                      style={{ color: DARK }}
                    >
                      {row.label}
                    </p>
                    <p className="text-base text-slate-400">{row.sub}</p>
                  </div>
                </div>
                <div
                  className="flex items-center px-6 py-6"
                  style={{ borderLeft: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-full rounded-xl overflow-hidden"
                    style={{ border: `1.5px solid ${row.pattern.border}` }}
                  >
                    <div
                      className="px-5 py-4"
                      style={{ backgroundColor: row.pattern.headBg }}
                    >
                      <p
                        className="text-xs font-black tracking-[0.1em] uppercase mb-1.5"
                        style={{ color: row.pattern.accent }}
                      >
                        Pattern {row.pattern.num}
                      </p>
                      <p
                        className="text-base font-bold"
                        style={{ color: row.pattern.headText }}
                      >
                        {row.pattern.title}
                      </p>
                      <p
                        className="text-base mt-1.5"
                        style={{ color: row.pattern.accent }}
                      >
                        {row.pattern.desc}
                      </p>
                    </div>
                    <div className="px-5 py-4 bg-white">
                      {row.pattern.tags.map((t) => (
                        <div
                          key={t}
                          className="flex items-center gap-2.5 mb-2 last:mb-0"
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: row.pattern.accent }}
                          />
                          <span
                            className="text-base font-medium"
                            style={{ color: row.pattern.headText }}
                          >
                            {t}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="px-7 py-5 flex items-center gap-4"
              style={{ backgroundColor: DARK }}
            >
              <div
                className="w-1 self-stretch rounded-full shrink-0"
                style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
              />
              <p
                className="text-base font-semibold leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)" }}
              >
                One observed coder switched tabs{" "}
                <strong className="text-white">
                  three times in a single claim.
                </strong>{" "}
                The workflow forced coders to carry context the system could
                carry for them.
              </p>
            </div>
          </div>

          {/* What research changed table */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-[3px] h-5 rounded-full shrink-0"
              style={{ backgroundColor: DARK }}
            />
            <h3
              className="text-base font-bold tracking-tight"
              style={{ color: DARK }}
            >
              What research changed
            </h3>
          </div>
          <div
            className="overflow-hidden rounded-2xl mb-10"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: SOFT }}>
                  {[
                    "What we observed",
                    "What it revealed",
                    "What it changed",
                  ].map((h) => (
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
                    obs: "Coders left the chart for modifier lookups",
                    revealed: "Context switching disrupted the decision",
                    changed: "Bring guidance into the chart",
                  },
                  {
                    obs: "Multiple rules had to be held in memory",
                    revealed: "High cognitive load",
                    changed: "Surface only relevant rules",
                  },
                  {
                    obs: "Coders changed system recommendations",
                    revealed: "Clinical context still required expert judgment",
                    changed: "Keep recommendations editable",
                  },
                  {
                    obs: "QA reconstructed changed decisions",
                    revealed: "Rationale was lost after submission",
                    changed: "Capture structured change reasons",
                  },
                ].map((r, i, arr) => (
                  <tr
                    key={r.obs}
                    style={{ borderBottom: `1px solid ${BORDER}` }}
                  >
                    <td className="px-6 py-4 text-base text-slate-600 align-top">
                      {r.obs}
                    </td>
                    <td className="px-6 py-4 text-base text-slate-500 align-top">
                      {r.revealed}
                    </td>
                    <td className="px-6 py-4 align-top">
                      <span
                        className="text-sm font-semibold leading-snug text-white"
                        style={{
                          backgroundColor: DARK,
                          display: "inline-block",
                          padding: "4px 10px",
                          borderRadius: "6px",
                        }}
                      >
                        {r.changed}
                      </span>
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
              Key insight
            </p>
            <p className="text-white text-xl font-semibold leading-relaxed">
              The opportunity wasn't to automate the coder's decision. It was to
              remove the unnecessary work surrounding it.
            </p>
          </div>
        </div>

        {/* §03 REFRAME */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader
              number="03"
              label="Reframe"
              heading="Reduce the work around the decision - not the judgment within it."
            />

            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <div
                className="rounded-2xl p-6"
                style={{ border: `1px solid ${BORDER}` }}
              >
                <p className="text-xs font-bold tracking-[0.14em] uppercase mb-3 text-slate-400">
                  Before
                </p>
                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                  Automate coding end-to-end.
                </p>
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
                <p className="text-lg font-semibold leading-relaxed text-white">
                  Bring relevant guidance into the coding workflow while keeping
                  final judgment with the coder.
                </p>
              </div>
            </div>

            <p className="text-base text-slate-500 leading-relaxed mb-6">
              This established four experience requirements:
            </p>
            <div className="responsive-process-row flex flex-col sm:flex-row items-stretch">
              {[
                {
                  n: "01",
                  label: "Guide",
                  body: "Surface relevant rules in context.",
                },
                {
                  n: "02",
                  label: "Validate",
                  body: "Keep recommendations editable.",
                },
                {
                  n: "03",
                  label: "Adjust",
                  body: "Capture why decisions change.",
                },
                {
                  n: "04",
                  label: "Review",
                  body: "Carry decision context into QA.",
                },
              ].map((r, i, arr) => (
                <div key={r.label} className="flex items-stretch flex-1">
                  <div
                    className="flex flex-col px-5 py-5 w-full"
                    style={{
                      backgroundColor:
                        i === arr.length - 1 ? DARK : i === 0 ? SOFT : "white",
                      border: `1.5px solid ${i === arr.length - 1 ? DARK : BORDER}`,
                      borderLeft: i > 0 ? "none" : undefined,
                      borderRadius:
                        i === 0
                          ? "12px 0 0 12px"
                          : i === arr.length - 1
                            ? "0 12px 12px 0"
                            : "0",
                      boxShadow: i === arr.length - 1 ? DARK_SHADOW : "none",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black mb-3 shrink-0"
                      style={{
                        backgroundColor:
                          i === arr.length - 1
                            ? "rgba(255,255,255,0.12)"
                            : SOFT,
                        color: i === arr.length - 1 ? "white" : DARK,
                        border: `1px solid ${i === arr.length - 1 ? "rgba(255,255,255,0.15)" : BORDER}`,
                      }}
                    >
                      {r.n}
                    </div>
                    <p
                      className="font-bold text-base mb-1.5"
                      style={{ color: i === arr.length - 1 ? "white" : DARK }}
                    >
                      {r.label}
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color:
                          i === arr.length - 1
                            ? "rgba(255,255,255,0.6)"
                            : "#94a3b8",
                      }}
                    >
                      {r.body}
                    </p>
                  </div>
                  {i < arr.length - 1 && (
                    <div
                      className="shrink-0 self-stretch w-6 z-10 -mx-3"
                      style={{
                        backgroundColor: i === arr.length - 2 ? DARK : BORDER,
                        clipPath:
                          "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* §04 DECISION ARCHITECTURE */}
        <div
          className="max-w-4xl mx-auto px-8 py-16"
          style={{ borderBottom: `1px solid ${BORDER}` }}
        >
          <ChapterHeader
            number="04"
            label="Decision Architecture"
            heading="What should the system own, and what should remain with the expert?"
            sub="The workflow combined three sources of expertise. Defining the boundaries between them was the core design problem."
          />

          {/* Three roles — open grid */}
          <div
            className="grid grid-cols-3 gap-0 mb-12"
            style={{
              borderTop: `1px solid ${BORDER}`,
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            {[
              {
                title: "Rules Engine",
                body: "Provides applicable codes, modifiers, and client requirements.",
                n: "01",
              },
              {
                title: "Coder",
                body: "Interprets the chart and makes the final decision.",
                n: "02",
              },
              {
                title: "QA",
                body: "Reviews decisions and identifies recurring exceptions.",
                n: "03",
              },
            ].map((r, i) => (
              <div
                key={r.title}
                className="py-6 pr-6"
                style={{
                  borderLeft: i > 0 ? `1px solid ${BORDER}` : "none",
                  paddingLeft: i > 0 ? "1.5rem" : 0,
                }}
              >
                <p
                  className="text-xs font-black tabular-nums mb-3"
                  style={{ color: BORDER }}
                >
                  {r.n}
                </p>
                <p
                  className="text-base font-black mb-1.5"
                  style={{ color: DARK }}
                >
                  {r.title}
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  {r.body}
                </p>
              </div>
            ))}
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
              Who owns each step
            </h3>
          </div>
          <div
            className="rounded-2xl overflow-hidden mb-10"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <div
              className="grid grid-cols-[160px_1fr_1fr_1fr_1fr]"
              style={{
                backgroundColor: SOFT,
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <div className="px-5 py-3" />
              {[
                "01 · Guide",
                "02 · Validate",
                "03 · Adjust",
                "04 · Review",
              ].map((h) => (
                <div
                  key={h}
                  className="px-4 py-3 text-xs font-black tracking-[0.1em] uppercase"
                  style={{ color: DARK, borderLeft: `1px solid ${BORDER}` }}
                >
                  {h}
                </div>
              ))}
            </div>
            {[
              {
                actor: "Rules Engine",
                role: "Provides context",
                cells: [true, false, false, false],
                desc: [
                  "Surfaces applicable codes, modifiers, and client rules",
                  null,
                  null,
                  null,
                ],
              },
              {
                actor: "Coder",
                role: "Applies judgment",
                cells: [true, true, true, false],
                desc: [
                  "Rules surface in context — no tab switching needed",
                  "Reviews recommendation against chart",
                  "Accepts, modifies, or overrides - logs reason",
                  null,
                ],
              },
              {
                actor: "QA",
                role: "Reviews decisions",
                cells: [false, false, false, true],
                desc: [
                  null,
                  null,
                  null,
                  "Receives decision + rationale together - no reconstruction",
                ],
              },
            ].map((row, ri) => (
              <div
                key={row.actor}
                className="grid grid-cols-[160px_1fr_1fr_1fr_1fr]"
                style={{
                  borderTop: ri > 0 ? `1px solid ${BORDER}` : undefined,
                }}
              >
                <div
                  className="px-5 py-5 flex flex-col justify-center"
                  style={{
                    backgroundColor:
                      ri === 0 ? "#f0f9ff" : ri === 1 ? SOFT : "#f5f3ff",
                  }}
                >
                  <p
                    className="text-base font-bold mb-0.5"
                    style={{ color: DARK }}
                  >
                    {row.actor}
                  </p>
                  <p className="text-sm text-slate-400">{row.role}</p>
                </div>
                {row.cells.map((active, ci) => (
                  <div
                    key={ci}
                    className="px-4 py-5 flex flex-col justify-center"
                    style={{
                      borderLeft: `1px solid ${BORDER}`,
                      backgroundColor: active
                        ? ri === 0
                          ? "#f0f9ff"
                          : ri === 1
                            ? SOFT
                            : "#f5f3ff"
                        : "white",
                    }}
                  >
                    {active ? (
                      <>
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center mb-2 shrink-0"
                          style={{ backgroundColor: DARK }}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path
                              d="M2 5l2.5 2.5L8 3"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-slate-500 leading-snug">
                          {row.desc[ci]}
                        </p>
                      </>
                    ) : (
                      <div
                        className="w-4 h-0.5 rounded-full"
                        style={{ backgroundColor: "#e2e8f0" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
            <div
              className="px-5 py-3 text-sm text-slate-400 italic"
              style={{
                backgroundColor: SOFT,
                borderTop: `1px solid ${BORDER}`,
              }}
            >
              QA receives the recommendation, final decision, and rationale
              together — no reconstruction needed.
            </div>
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
              Automate what is repetitive. Preserve what requires judgment.
              Capture what requires accountability.
            </p>
          </div>
        </div>

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
              heading="The decision architecture became the interaction model."
            />

            {/* Five steps — open grid */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-[3px] h-5 rounded-full shrink-0"
                style={{ backgroundColor: DARK }}
              />
              <h3
                className="text-base font-bold tracking-tight"
                style={{ color: DARK }}
              >
                Five-step coder workflow
              </h3>
            </div>
            <div
              className="grid grid-cols-5 mb-12"
              style={{ borderTop: `2px solid ${BORDER}` }}
            >
              {[
                {
                  n: "01",
                  label: "Contextual guidance",
                  body: "Rules-driven recommendations appear beside the relevant coding field.",
                },
                {
                  n: "02",
                  label: "Expert validation",
                  body: "The coder reviews the recommendation against the chart.",
                },
                {
                  n: "03",
                  label: "Editable decisions",
                  body: "Suggested fields remain editable so the coder controls the final value.",
                },
                {
                  n: "04",
                  label: "Structured rationale",
                  body: "Overrides capture why the recommendation changed.",
                },
                {
                  n: "05",
                  label: "QA traceability",
                  body: "QA reviews: Recommendation → Final decision → Change rationale.",
                },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col gap-2 pt-5 px-4"
                  style={{
                    borderRight: i < 4 ? `1px solid ${BORDER}` : "none",
                    paddingLeft: i === 0 ? 0 : "1rem",
                  }}
                >
                  <span
                    className="text-xs font-black tabular-nums"
                    style={{ color: BORDER }}
                  >
                    {s.n}
                  </span>
                  <p
                    className="text-base font-black leading-tight"
                    style={{ color: DARK }}
                  >
                    {s.label}
                  </p>
                  <p className="text-sm text-slate-500 leading-snug">
                    {s.body}
                  </p>
                </div>
              ))}
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
