import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";

const DARK        = "#1e3a5f";
const SOFT        = "#eff6ff";
const BORDER      = "#bfdbfe";
const MUTED       = "#dbeafe";
const DARK_SHADOW = "0 8px 40px rgba(30,58,95,0.25)";
const CARD_SHADOW = "0 1px 4px rgba(30,58,95,0.06), 0 4px 20px rgba(30,58,95,0.08)";

function ChapterHeader({ number, label, heading, sub }: {
  number: string; label: string; heading: string; sub?: string;
}) {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-3 rounded-full px-4 py-1.5 mb-5" style={{ backgroundColor: SOFT, border: `1.5px solid ${BORDER}` }}>
        <span className="text-sm font-black tabular-nums" style={{ color: DARK }}>{number}</span>
        <span className="w-4 h-px" style={{ backgroundColor: BORDER }} />
        <span className="text-sm font-black tracking-[0.14em] uppercase" style={{ color: DARK }}>{label}</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-black leading-[1.2] tracking-tight mb-4" style={{ color: DARK, textWrap: "balance" } as React.CSSProperties}>
        {heading}
      </h2>
      {sub && <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">{sub}</p>}
    </div>
  );
}

function Divider() {
  return <div className="w-full h-px my-12" style={{ backgroundColor: BORDER }} />;
}

export default function AthenaText() {
  return (
    <>
      <Nav />
      <main className="pt-16 bg-white">

       {/* BREADCRUMB */}
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

    <span>athenaText</span>
  </div>
</div>

{/* HERO */}
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
      Case Study 03 / 04 · Lead Product Designer
    </span>
  </div>

  <h1
    className="text-3xl md:text-4xl font-black leading-[1.05] tracking-tight mb-4"
    style={{ color: DARK }}
  >
    Making everyday communication easier for providers.
  </h1>

  <p className="text-lg md:text-1 text-slate-500 leading-relaxed mb-8 max-w-3.5xl">
    athenaText was a daily communication platform for providers and care
    teams, but basic workflow gaps made communication unnecessarily difficult.
    Through Voice of Customer insights and provider research, I identified the
    highest-impact gaps and helped shift the roadmap beyond stabilization
    toward everyday communication needs.
  </p>

  <div className="w-full overflow-hidden rounded-2xl mb-10">
    <img
      src="/images/atext/Hero.png"
      alt="athenaText"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* PROJECT DETAILS */}
  <div
    className="grid grid-cols-1 md:grid-cols-3 pt-4 mb-10"
    style={{ borderTop: `1px solid ${BORDER}` }}
  >
    {[
      {
        label: "My Role",
        value:
          "Lead Product Designer - led UX strategy, research synthesis, and end-to-end design.",
      },
      {
        label: "Team",
        value:
          "Product Manager, Engineering, Design, and cross-functional stakeholders.",
      },
      {
        label: "Timeline",
        value: "6 months",
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
        { v: "48%", l: "Search adoption" },
        { v: "2.2 to 4.4", l: "Satisfaction" },
        { v: "17M/day", l: "Fewer server calls" },
        { v: "$100K+", l: "Annual savings" },
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
    01 — THE PROBLEM
───────────────────────────────────────────── */}

<div
  className="w-full"
  style={{ borderTop: `1px solid ${BORDER}` }}
>
  <section className="max-w-4xl mx-auto px-8 py-10">

    <p
      className="text-xs font-black tracking-[0.14em] uppercase mb-4"
      style={{ color: DARK }}
    >
      01 The Problem
    </p>

    <h2
      className="text-2xl md:text-2xl font-black leading-[1.2] tracking-tight max-w-4xl"
      style={{
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
      Important conversations were difficult to find, track, and act on.
    </h2>

    <p className="mt-5 text-base md:text-lg text-slate-500 leading-relaxed max-w-4xl">
      As message volume grew, providers spent unnecessary time searching through
      threads, keeping track of messages that needed attention, and composing
      simple responses.
    </p>

    <p
      className="mt-3 text-base md:text-lg font-semibold leading-relaxed max-w-4xl"
      style={{ color: DARK }}
    >
      The opportunity was to remove friction from the everyday tasks providers used to
      perform.
    </p>

  </section>
</div>

       {/* ============================================================
    02 — RESEARCH
============================================================ */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderTop: `1px solid ${BORDER}`,
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-4xl mx-auto px-8 pt-8 pb-10">

    <p
      className="text-xs font-bold tracking-[0.16em] uppercase mb-3"
      style={{ color: "#64748b" }}
    >
      02 — Research
    </p>

    <h2
      className="text-2xl md:text-3xl font-black leading-[1.15] tracking-tight max-w-4xl"
      style={{
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
      Research identified four recurring sources of friction in everyday
      communication.
    </h2>

    <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-4xl">
      I synthesized{" "}
      <span className="font-semibold" style={{ color: DARK }}>
        300+ Voice of Customer requests, 102 survey responses, 14 provider
        interviews, and product usage data
      </span>{" "}
      to identify the workflow gaps with the greatest impact on providers.
    </p>

    {/* Research findings */}
    <div
      className="mt-7 overflow-hidden rounded-2xl"
      style={{
        border: `1px solid ${BORDER}`,
      }}
    >
      {/* Header */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ backgroundColor: SOFT }}
      >
        <div
          className="px-5 py-3 text-[11px] font-bold tracking-[0.12em] uppercase"
          style={{ color: DARK }}
        >
          Research finding
        </div>

        <div
          className="px-5 py-3 text-[11px] font-bold tracking-[0.12em] uppercase border-t md:border-t-0 md:border-l"
          style={{
            color: DARK,
            borderColor: BORDER,
          }}
        >
          Evidence
        </div>

        <div
          className="px-5 py-3 text-[11px] font-bold tracking-[0.12em] uppercase border-t md:border-t-0 md:border-l"
          style={{
            color: DARK,
            borderColor: BORDER,
          }}
        >
          Design opportunity
        </div>
      </div>

      {[
        {
          finding: "Conversations were difficult to retrieve.",
          evidence: "73%",
          evidenceText: "Reported difficulty finding older messages.",
          opportunity: "Search",
          opportunityText: "Find relevant messages faster.",
        },
        {
          finding:
            "Important conversations were easy to lose in a busy inbox.",
          evidence: "3–5×",
          evidenceText: "Threads reopened during a single shift.",
          opportunity: "Unread",
          opportunityText: "Keep messages needing attention visible.",
        },
        {
          finding: "Common responses created repetitive work.",
          evidence: "~2 min/response",
          evidenceText: "Time spent composing routine replies.",
          opportunity: "Suggested replies",
          opportunityText: "Reduce effort for routine responses.",
        },
        {
          finding:
            "Acknowledging a message often required another reply.",
          evidence: "Top 10",
          evidenceText:
            "Emoji/reactions ranked among the most requested features.",
          opportunity: "Reactions",
          opportunityText:
            "Acknowledge without creating another message.",
        },
      ].map((item) => (
        <div
          key={item.opportunity}
          className="grid grid-cols-1 md:grid-cols-3"
          style={{
            borderTop: `1px solid ${BORDER}`,
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="px-5 py-4">
            <p
              className="text-sm font-semibold leading-snug"
              style={{ color: DARK }}
            >
              {item.finding}
            </p>
          </div>

          <div
            className="px-5 py-4 border-t md:border-t-0 md:border-l"
            style={{ borderColor: BORDER }}
          >
            <p
              className="text-lg font-black leading-none tabular-nums"
              style={{ color: DARK }}
            >
              {item.evidence}
            </p>

            <p className="mt-1.5 text-xs text-slate-500 leading-snug">
              {item.evidenceText}
            </p>
          </div>

          <div
            className="px-5 py-4 border-t md:border-t-0 md:border-l"
            style={{ borderColor: BORDER }}
          >
            <p
              className="text-sm font-bold leading-snug"
              style={{ color: DARK }}
            >
              {item.opportunity}
            </p>

            <p className="mt-1.5 text-xs text-slate-500 leading-snug">
              {item.opportunityText}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Research synthesis */}
    <div
      className="mt-7 rounded-2xl px-6 py-5"
      style={{
        backgroundColor: SOFT,
        border: `1px solid ${BORDER}`,
      }}
    >
      <p
        className="text-[11px] font-bold tracking-[0.14em] uppercase mb-2"
        style={{ color: "#64748b" }}
      >
        Research synthesis
      </p>

      <p
        className="text-base font-semibold leading-relaxed"
        style={{ color: DARK }}
      >

Research shifted the roadmap from stabilizing the existing messaging experience to addressing the everyday communication needs that continued to create friction for providers.
      </p>
    </div>

  </div>
</section>

       {/* ============================================================
    03 — DESIGN DECISIONS
============================================================ */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-5xl mx-auto px-8 pt-8 pb-10">

    <p
      className="text-xs font-bold tracking-[0.16em] uppercase mb-3"
      style={{ color: "#64748b" }}
    >
      03 — Design Decisions
    </p>

    <h2
      className="text-2xl md:text-3xl font-black leading-[1.15] tracking-tight max-w-5xl mb-8"
      style={{
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
     Turn communication friction into focused product improvements.
    </h2>

    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{
        borderTop: `1px solid ${BORDER}`,
        borderLeft: `1px solid ${BORDER}`,
        borderRight: `1px solid ${BORDER}`,
      }}
    >

      {/* Search */}
      <div
        className="px-6 py-6 border-b md:border-r"
        style={{ borderColor: BORDER }}
      >
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
          style={{ color: "#64748b" }}
        >
          Search
        </p>

        <h3
          className="text-lg md:text-xl font-bold leading-snug mb-2"
          style={{ color: DARK }}
        >
          Optimize for retrieval, not exploration.
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed">
          Prioritized fast access to relevant conversations over advanced
          filtering.
        </p>
      </div>

      {/* Unread */}
      <div
        className="px-6 py-6 border-b"
        style={{ borderColor: BORDER }}
      >
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
          style={{ color: "#64748b" }}
        >
          Unread
        </p>

        <h3
          className="text-lg md:text-xl font-bold leading-snug mb-2"
          style={{ color: DARK }}
        >
          Extend familiar behavior, don't introduce task management.
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed">
          Used unread state to support follow-up without creating another
          system to maintain.
        </p>
      </div>

      {/* Suggested Replies */}
      <div
        className="px-6 py-6 md:border-r"
        style={{ borderColor: BORDER }}
      >
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
          style={{ color: "#64748b" }}
        >
          Suggested Replies
        </p>

        <h3
          className="text-lg md:text-xl font-bold leading-snug mb-2"
          style={{ color: DARK }}
        >
          Assist the response, not author it.
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed">
          Reduced repetitive typing while keeping the provider responsible
          for the final message.
        </p>
      </div>

      {/* Reactions */}
      <div
        className="px-6 py-6"
        style={{ borderColor: BORDER }}
      >
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
          style={{ color: "#64748b" }}
        >
          Reactions
        </p>

        <h3
          className="text-lg md:text-xl font-bold leading-snug mb-2"
          style={{ color: DARK }}
        >
          Separate acknowledgement from conversation.
        </h3>

        <p className="text-sm text-slate-500 leading-relaxed">
          Enabled lightweight acknowledgement without adding another
          message to the thread.
        </p>
      </div>

    </div>

  </div>
</section>

        {/* §05 — DESIGNING THE EXPERIENCE */}
        <div className="max-w-5xl mx-auto px-4 py-10" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <ChapterHeader number="06" label="Design" heading="Focused on the moments where communication was breaking down." />

          <div className="space-y-4 mb-4">
            {[
              {
                n: "01", job: "Search" ,
                img: "/images/atext/1.png",
                title: "Make finding the right conversation faster and more precise.",
                body: "Search supported keywords, topics, and participants, with matching terms highlighted to help providers quickly identify and open the right conversation.",
  
              },
              {
                n: "02", job: "Mark as Unread", feature: "Pin + Unread",
                img: "/images/atext/3.png",
                title: "Keep important conversations visible when follow-up is needed",
                body: "Unread states helped providers keep track of important threads and return to conversations requiring action, reducing the cognitive load of remembering what still needed attention.",
        
              },
              {
                n: "04", job: "AI-Suggested Replies", feature: "Suggested Replies",
                img: "/images/atext/2.png",
                title: "Make responses faster to compose",
                body: "Suggested replies reduced typing while allowing providers to review, edit, and send the response themselves.",
                metric: null, metricSub: null,
              },
              {
                n: "05", job: "Quick Reactions", feature: "Reactions",
                img: "/images/atext/4.png",
                title: "Acknowledge without adding another message",
                body: "Reactions let providers quickly acknowledge a message or signal agreement without needing to write a response.",
                metric: null, metricSub: null,
              },
            ].map(row => (
              <div key={row.n} className="py-10" style={{ borderTop: `1px solid ${BORDER}` }}>
                {/* Header row */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black tabular-nums w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: DARK, color: "#fff" }}>{row.n}</span>
                  <p className="text-lg font-black" style={{ color: DARK }}>{row.job}</p>
                  
                </div>
                {/* Image full width */}
                {row.img && (
                  <img src={row.img} alt={row.job} className="w-full rounded-xl object-cover mb-5" style={{ border: `1px solid ${BORDER}` }} />
                )}
                {/* Text below */}
                <div className="flex items-start gap-5">
                  <div className="flex-1">
                    <p className="text-base font-bold mb-1.5 leading-snug" style={{ color: DARK }}>{row.title}</p>
                    <p className="text-base text-slate-500 leading-relaxed">{row.body}</p>
                  </div>
                  {row.metric && (
                    <div className="shrink-0 rounded-xl px-5 py-3 text-right" style={{ backgroundColor: DARK }}>
                      <p className="text-xl font-black text-white tabular-nums">{row.metric}</p>
                      <p className="text-xs leading-snug mt-0.5" style={{ color: MUTED }}>{row.metricSub}</p>
                    </div>
                  )}
                  {!row.metric && row.metricSub && (
                    <p className="shrink-0 max-w-[200px] text-sm text-slate-400 leading-relaxed italic">{row.metricSub}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
    07 — OUTCOMES
============================================================ */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-4xl mx-auto px-8 pt-8 pb-10">

    <p
      className="text-xs font-bold tracking-[0.16em] uppercase mb-3"
      style={{ color: "#64748b" }}
    >
      07 — Outcomes
    </p>

    <h2
      className="text-2xl md:text-3xl font-black leading-[1.15] tracking-tight max-w-3xl mb-8"
      style={{
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
      The redesigned experience drove adoption, satisfaction, and operational efficiency.
    </h2>

    <div
      className="grid grid-cols-2 md:grid-cols-4"
      style={{
        borderTop: `1px solid ${BORDER}`,
        borderLeft: `1px solid ${BORDER}`,
      }}
    >

      {/* Search adoption */}
      <div
        className="px-5 py-6 border-b border-r"
        style={{ borderColor: BORDER }}
      >
        <p
          className="text-3xl md:text-4xl font-black tracking-tight mb-2"
          style={{ color: DARK }}
        >
          48%
        </p>

        <p
          className="text-sm font-medium leading-snug"
          style={{ color: "#64748b" }}
        >
          Search adoption
        </p>
      </div>

      {/* Search satisfaction */}
      <div
        className="px-5 py-6 border-b border-r"
        style={{ borderColor: BORDER }}
      >
        <p
          className="text-3xl md:text-4xl font-black tracking-tight mb-2"
          style={{ color: DARK }}
        >
          2.2 → 4.4
        </p>

        <p
          className="text-sm font-medium leading-snug"
          style={{ color: "#64748b" }}
        >
          Search satisfaction
        </p>
      </div>

      {/* Server calls */}
      <div
        className="px-5 py-6 border-b border-r"
        style={{ borderColor: BORDER }}
      >
        <p
          className="text-3xl md:text-4xl font-black tracking-tight mb-2"
          style={{ color: DARK }}
        >
          17M/day
        </p>

        <p
          className="text-sm font-medium leading-snug"
          style={{ color: "#64748b" }}
        >
          Fewer server calls
        </p>
      </div>

      {/* Annual savings */}
      <div
        className="px-5 py-6 border-b border-r"
        style={{ borderColor: BORDER }}
      >
        <p
          className="text-3xl md:text-4xl font-black tracking-tight mb-2"
          style={{ color: DARK }}
        >
          $100K+
        </p>

        <p
          className="text-sm font-medium leading-snug"
          style={{ color: "#64748b" }}
        >
          Annual savings
        </p>
      </div>

    </div>

    <div
      className="mt-6 pt-5"
      style={{
        borderTop: `1px solid ${BORDER}`,
      }}
    >
      <p
        className="text-sm font-medium"
        style={{ color: "#64748b" }}
      >
        <span style={{ color: DARK, fontWeight: 700 }}>7+ capabilities</span>{" "}
        shipped across the messaging experience.
      </p>
    </div>

  </div>
</section>

       {/* ============================================================
    08 — REFLECTION
============================================================ */}
<section
  className="w-full"
  style={{
    backgroundColor: "#FFFFFF",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-4xl mx-auto px-8 pt-8 pb-12">

    <p
      className="text-xs font-bold tracking-[0.16em] uppercase mb-3"
      style={{ color: "#64748b" }}
    >
      08 — Reflection
    </p>

    <h2
      className="text-2xl md:text-3xl font-black leading-[1.15] tracking-tight max-w-3xl mb-5"
      style={{
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
      The biggest shift was learning to design for the need behind the request.
    </h2>

    <p
      className="text-base md:text-lg leading-relaxed max-w-3xl mb-7"
      style={{ color: "#475569" }}
    >
      Hundreds of requests initially looked like separate problems. Connecting
      them revealed a smaller set of workflow needs that could guide the
      product direction.
    </p>

    <div
      className="rounded-2xl px-6 py-5"
      style={{
        backgroundColor: SOFT,
        border: `1px solid ${BORDER}`,
      }}
    >
      <p
        className="text-base md:text-lg font-semibold leading-relaxed"
        style={{ color: DARK }}
      >
        The lesson I took forward: use customer feedback to shape the problem,
        not prescribe the solution.
      </p>
    </div>

  </div>
</section>

        {/* FOOTER NAV */}
        <div className="py-8" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="max-w-4xl mx-auto px-8 flex justify-between items-center">
            <Link href="/work/bpo-coding" className="text-sm font-semibold transition-opacity hover:opacity-60" style={{ color: DARK }}>← BPO Coding</Link>
            <Link href="/work/practice-files" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-80" style={{ backgroundColor: DARK }}>
              Next: Practice Files →
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
