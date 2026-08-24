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

/* ─────────────────────────────────────────────
   CONSISTENT CHAPTER HEADER
───────────────────────────────────────────── */

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
      <p
        className="text-xs font-black tracking-[0.14em] uppercase mb-4"
        style={{ color: DARK }}
      >
        {number} — {label}
      </p>

      <h2
        className="text-2xl font-black leading-[1.2] tracking-tight max-w-3xl"
        style={{
          color: DARK,
          textWrap: "balance",
        } as React.CSSProperties}
      >
        {heading}
      </h2>

      {sub && (
        <p
          className="mt-4 text-base leading-relaxed text-slate-500 max-w-3xl"
          style={{ textWrap: "pretty" } as React.CSSProperties}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION DIVIDER
───────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div
      className="w-full"
      style={{ borderTop: `1px solid ${BORDER}` }}
    />
  );
}

export default function BPOCoding() {
  return (
    <>
      <Nav />

      <main className="pt-16">

        {/* ─────────────────────────────────────────────
            BREADCRUMB
        ───────────────────────────────────────────── */}

        <div className="max-w-4xl mx-auto px-8 pt-8">
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

        {/* ─────────────────────────────────────────────
            HERO
        ───────────────────────────────────────────── */}

        <div className="max-w-4xl mx-auto px-8 pt-3 pb-16">

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

          <h1
            className="text-3xl md:text-4xl font-black leading-[1.05] tracking-tight mb-4"
            style={{ color: DARK }}
          >
            Helping medical coders make faster and accurate decisions.
          </h1>

          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-3xl">
            The BPO Medical Coding Assistant brings relevant coding guidance
            directly into the chart, helping coders resolve complex cases while
            keeping recommendations editable and traceable.
          </p>

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
                  borderLeft:
                    i > 0 ? `1px solid ${BORDER}` : "none",
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

          {/* IMPACT */}

          <div
            className="rounded-2xl px-8 py-6"
            style={{
              backgroundColor: DARK,
              boxShadow: DARK_SHADOW,
            }}
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

        <SectionDivider />

        <section className="max-w-4xl mx-auto px-8 py-16">

          <ChapterHeader
            number="01"
            label="Context"
            heading="Medical coding spans two stages: coding and QA."
          />

          <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-3xl">
            Coders review clinical charts and apply coding rules to assign
            accurate billing codes. Incorrect coding can lead to{" "}
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

        </section>

        {/* ─────────────────────────────────────────────
            02 — RESEARCH
        ───────────────────────────────────────────── */}

        <SectionDivider />

        <section className="max-w-4xl mx-auto px-8 py-16">

          <ChapterHeader
            number="02"
            label="Research"
            heading="Research revealed where accuracy risk entered the workflow."
          />

          <div
            className="mb-6"
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

          <p
            className="text-xs font-black tracking-[0.14em] uppercase mb-3"
            style={{ color: DARK }}
          >
            Research findings
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{
              borderTop: `1px solid ${BORDER}`,
              borderBottom: `1px solid ${BORDER}`,
            }}
          >
            {[
              {
                n: "01",
                title: "Guidance was outside the decision context",
                body:
                  "Coders left the chart to look up rules, then had to remember and apply them while reviewing the chart.",
              },
              {
                n: "02",
                title: "Coding rules didn't replace clinical judgment",
                body:
                  "Coders interpreted coding rules alongside the clinical context before making a final decision.",
              },
              {
                n: "03",
                title: "Decision rationale was lost after submission",
                body:
                  "QA reviewers had to reconstruct why coding decisions changed.",
              },
            ].map((item, i) => (
              <div
                key={item.n}
                className={`py-6 ${
                  i === 0
                    ? "pr-6"
                    : i === 1
                    ? "px-6"
                    : "pl-6"
                }`}
                style={{
                  borderRight:
                    i < 2 ? `1px solid ${BORDER}` : "none",
                }}
              >
                <p
                  className="text-xs font-black tracking-[0.12em] mb-3"
                  style={{ color: DARK }}
                >
                  {item.n}
                </p>

                <h3
                  className="text-base font-black leading-snug mb-3"
                  style={{ color: DARK }}
                >
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* ─────────────────────────────────────────────
            03 — APPROACH
        ───────────────────────────────────────────── */}

        <SectionDivider />

        <section className="max-w-4xl mx-auto px-8 py-16">

          <ChapterHeader
            number="03"
            label="Approach"
            heading="Bring the right guidance into the decision without disrupting the workflow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
            {[
              {
                number: "01",
                title: "Surface relevant guidance",
                body: "Bring applicable coding rules into the chart.",
              },
              {
                number: "02",
                title: "Lead to a coding outcome",
                body:
                  "Use rule-based questions to guide coders to the appropriate outcome.",
              },
              {
                number: "03",
                title: "Automate clear-cut answers",
                body:
                  "Provide direct answers where the rules allow the system to determine them.",
              },
              {
                number: "04",
                title: "Enable informed changes",
                body:
                  "Allow coders to change an outcome and capture the rationale.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="flex gap-4"
              >
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

        {/* ─────────────────────────────────────────────
            04 — DECISION ARCHITECTURE
        ───────────────────────────────────────────── */}

        <SectionDivider />

        <section className="max-w-4xl mx-auto px-8 py-16">

          <ChapterHeader
            number="04"
            label="Decision Architecture"
            heading="The system answers what it can determine; the coder provides the missing context."
          />

          {/* DESIGN DECISION */}

          <div
            className="w-full mb-12 rounded-xl overflow-hidden"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">

              <div className="px-7 py-6 bg-white">
                <p
                  className="text-[10px] font-black tracking-[0.14em] uppercase mb-3"
                  style={{ color: "#94a3b8" }}
                >
                  Initial direction
                </p>

                <h3
                  className="text-lg font-black tracking-tight mb-1"
                  style={{ color: DARK }}
                >
                  Full automation
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  Determine the coding outcome automatically.
                </p>
              </div>

              <div
                className="px-7 py-6"
                style={{ backgroundColor: "#f8fafc" }}
              >
                <p
                  className="text-[10px] font-black tracking-[0.14em] uppercase mb-3"
                  style={{ color: "#64748b" }}
                >
                  Design decision
                </p>

                <h3
                  className="text-lg font-black tracking-tight mb-1"
                  style={{ color: DARK }}
                >
                  Guided automation
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  Automate only what the system can reliably determine.
                </p>
              </div>

            </div>

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

            <div
              className="w-px h-5 mx-auto"
              style={{ backgroundColor: BORDER }}
            />

            <div className="flex justify-center">
              <div
                className="px-6 py-3.5 rounded-lg bg-white text-center"
                style={{ border: `1px solid ${BORDER}` }}
              >
                <p className="text-sm font-black">
                  Can the system determine the answer?
                </p>
              </div>
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">

              {[
                {
                  status: "YES",
                  title: "KEEP",
                  rationale: null,
                },
                {
                  status: "YES",
                  title: "CHANGE",
                  rationale: "Record rationale",
                },
                {
                  status: "NO",
                  title: "Coder answers",
                  rationale: null,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="text-center"
                >
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
                      {item.status}
                    </p>

                    <p className="text-sm font-black">
                      {item.title}
                    </p>
                  </div>

                  {item.rationale && (
                    <>
                      <div
                        className="mx-auto w-px h-3"
                        style={{ backgroundColor: BORDER }}
                      />

                      <div
                        className="inline-flex px-3.5 py-1.5 rounded-md bg-white"
                        style={{ border: `1px solid ${BORDER}` }}
                      >
                        <span className="text-[10px] font-bold text-slate-500">
                          {item.rationale}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}

            </div>

            <div className="flex flex-col items-center mt-10">

              <div
                className="w-px h-5"
                style={{ backgroundColor: BORDER }}
              />

              <div
                className="px-6 py-2.5 rounded-lg text-sm font-black"
                style={{
                  backgroundColor: DARK,
                  color: "#fff",
                }}
              >
                IAG COMPLETE
              </div>

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
            className="mt-12 pt-7"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <p
              className="text-xs font-black tracking-[0.14em] uppercase mb-3"
              style={{ color: "#64748b" }}
            >
              Future direction
            </p>

            <p
              className="text-base md:text-lg font-bold leading-relaxed max-w-3xl"
              style={{ color: DARK }}
            >
              Coder decisions give the system structured feedback, allowing it
              to determine more answers over time and gradually increase
              automation.
            </p>
          </div>

        </section>

        {/* ─────────────────────────────────────────────
            05 — INTERACTION DESIGN
        ───────────────────────────────────────────── */}

        <SectionDivider />

        <section
          style={{
            backgroundColor: "#f8fafc",
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

          </div>
        </section>

        {/* ─────────────────────────────────────────────
            06 — DESIGN CALIBRATION
        ───────────────────────────────────────────── */}

        <SectionDivider />

        <section className="max-w-4xl mx-auto px-8 py-16">

          <ChapterHeader
            number="06"
            label="Design Calibration"
            heading="The challenge was surfacing enough context to support accurate decisions without adding cognitive load."
          />

          <div
            className="overflow-hidden rounded-xl"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f8fafc",
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <th className="text-left px-5 py-4 font-semibold" style={{ color: DARK }}>
                    Direction
                  </th>

                  <th className="text-left px-5 py-4 font-semibold" style={{ color: DARK }}>
                    Decision
                  </th>

                  <th className="text-left px-5 py-4 font-semibold" style={{ color: DARK }}>
                    Why
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Confidence signal",
                    "Rejected",
                    "Didn't tell coders what to verify",
                  ],
                  [
                    "Full rule trace",
                    "Rejected",
                    "Added complexity during high-volume work",
                  ],
                  [
                    "Contextual guidance",
                    "Selected",
                    "Reduced lookup at the decision point",
                  ],
                  [
                    "Editable recommendations",
                    "Selected",
                    "Preserved expert judgment",
                  ],
                  [
                    "Change rationale",
                    "Selected",
                    "Made exceptions reviewable",
                  ],
                ].map(([direction, decision, why], i) => (
                  <tr
                    key={direction}
                    style={{
                      borderBottom:
                        i < 4 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <td className="px-5 py-4 font-medium" style={{ color: DARK }}>
                      {direction}
                    </td>

                    <td
                      className="px-5 py-4 font-semibold"
                      style={{
                        color:
                          decision === "Selected"
                            ? DARK
                            : "#64748b",
                      }}
                    >
                      {decision}
                    </td>

                    <td className="px-5 py-4 text-slate-500">
                      {why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="mt-8 pl-5"
            style={{ borderLeft: `3px solid ${DARK}` }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: DARK }}
            >
              Design principle
            </p>

            <p
              className="text-lg font-semibold"
              style={{ color: DARK }}
            >
              Optimize for decision quality, not information volume.
            </p>
          </div>

        </section>

        {/* ─────────────────────────────────────────────
            07 — OUTCOMES
        ───────────────────────────────────────────── */}

        <SectionDivider />

        <section className="max-w-4xl mx-auto px-8 py-16">

          <ChapterHeader
            number="07"
            label="Outcomes"
            heading="The workflow improved accuracy without removing expert judgment."
          />

          {/* KEY OUTCOMES */}

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
                className="rounded-xl p-5"
                style={{
                  border: `1px solid ${BORDER}`,
                  backgroundColor: "#fff",
                }}
              >
                <p
                  className="text-xl md:text-2xl font-black tracking-tight"
                  style={{ color: DARK }}
                >
                  {metric.value}
                </p>

                <p className="text-sm font-medium text-slate-600 leading-snug mt-2">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 leading-relaxed mb-8">
            Billing error and claim rejection rates measured against a 3-month
            pre-launch baseline from the same BPO cohort.
          </p>

          {/* STAKEHOLDER OUTCOMES */}

          <div
            className="pt-8"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="grid md:grid-cols-3 gap-8">

              {[
                {
                  title: "Coder",
                  body:
                    "Less lookup and context switching. Guidance appears at the moment of decision, not after the chart closes.",
                },
                {
                  title: "QA",
                  body:
                    "Less reconstruction and better decision visibility. The reason behind each change travels with the work.",
                },
                {
                  title: "Business",
                  body:
                    "Fewer errors and rejected claims. Accuracy improved without removing expert judgment from the workflow.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: DARK }}
                  >
                    {item.title}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </section>

        {/* ─────────────────────────────────────────────
            08 — REFLECT
        ───────────────────────────────────────────── */}

        <SectionDivider />

        <section className="max-w-4xl mx-auto px-8 py-16">

          <ChapterHeader
            number="08"
            label="Reflect"
            heading="The biggest shift was moving decision support into the workflow itself."
          />

          {/* WHAT I LEARNED */}

          <div className="mt-10">
            <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 items-start">

              <p
                className="text-xs font-black tracking-[0.14em] uppercase"
                style={{ color: DARK }}
              >
                What I learned
              </p>

              <p
                className="text-base md:text-lg leading-relaxed max-w-2xl text-slate-600"
              >
                Reducing context switching helped coders make more accurate
                decisions with less interruption.
              </p>

            </div>
          </div>

          {/* NEXT OPPORTUNITY */}

          <div
            className="mt-10 pt-10"
            style={{ borderTop: `1px solid ${BORDER}` }}
          >
            <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 items-start">

              <p
                className="text-xs font-black tracking-[0.14em] uppercase"
                style={{ color: DARK }}
              >
                Next opportunity
              </p>

              <div className="max-w-3xl">

                <p
                  className="text-xl md:text-2xl font-black tracking-tight leading-[1.25]"
                  style={{ color: DARK }}
                >
                  Move toward fully automated guidance and validation.
                </p>

                <p className="mt-3 text-base md:text-lg leading-relaxed max-w-2xl text-slate-600">
                  Automate more of the workflow over time, reducing the need
                  for manual guidance and validation.
                </p>

              </div>

            </div>
          </div>

        </section>

        {/* ─────────────────────────────────────────────
            FOOTER NAV
        ───────────────────────────────────────────── */}

        <div
          className="py-10 px-6"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
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