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
        <div className="max-w-4xl mx-auto px-8 pt-10 pb-0">
          <div className="flex items-center gap-2 text-lg font-medium" style={{ color: "#94a3b8" }}>
            <Link href="/" className="hover:opacity-60 transition-opacity" style={{ color: DARK }}>Home</Link>
            <span>/</span>
            <span>athenaText</span>
          </div>
        </div>

        {/* HERO */}
        <div className="max-w-4xl mx-auto px-8 pt-10 pb-16">
          <p className="text-xs font-bold tracking-[0.16em] uppercase mb-4" style={{ color: "#64748b" }}>Enterprise Communication · Workflow Design · Product Strategy</p>
          <h1 className="text-5xl md:text-6xl font-black leading-[1.0] tracking-tight mb-5" style={{ color: DARK }}>
            athenaText
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
            Turning 300+ customer requests into a clearer communication experience.
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
            {[
              { label: "Role",     value: "Lead Product Designer" },
              { label: "Scale",    value: "209,604 MAU · 20.21M msg/month" },
              { label: "Research", value: "300+ VOC · 102 survey · 14 interviews · Amplitude" },
              { label: "Platform", value: "Desktop web · Mobile · Practice management SaaS" },
            ].map(m => (
              <div key={m.label}>
                <p className="text-xs font-bold tracking-[0.14em] uppercase mb-2 text-slate-400">{m.label}</p>
                <p className="text-sm font-medium leading-snug" style={{ color: DARK }}>{m.value}</p>
              </div>
            ))}
          </div>

          {/* Impact strip — only this gets a dark card */}
          <div className="rounded-2xl px-8 py-6" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {[
                { v: "48%",     l: "Search adoption" },
                { v: "2.2→4.4", l: "Satisfaction" },
                { v: "60%",     l: "Bulk-delete usage" },
                { v: "17M/day", l: "Fewer server calls" },
                { v: "$100K+",  l: "Annual savings" },
                { v: "7+",      l: "Capabilities added" },
              ].map(s => (
                <div key={s.l}>
                  <p className="text-xl font-black text-white tabular-nums">{s.v}</p>
                  <p className="text-xs mt-1 leading-snug" style={{ color: MUTED }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* §01 — WHAT USERS WERE STRUGGLING WITH */}
        <div className="max-w-4xl mx-auto px-8 py-16" style={{ borderTop: `1px solid ${BORDER}` }}>
          <ChapterHeader number="01" label="User Struggles" heading="Customer requests pointed to different problems." />

          {/* 300+ stat emphasis */}
          <div className="rounded-2xl px-8 py-7 mb-10 flex items-center gap-6" style={{ backgroundColor: SOFT }}>
            <div className="shrink-0">
              <p className="text-7xl font-black leading-none tabular-nums" style={{ color: DARK }}>300+</p>
              <p className="text-xs font-bold tracking-[0.14em] uppercase mt-2" style={{ color: "#64748b" }}>Customer requests</p>
            </div>
            <div className="w-px self-stretch" style={{ backgroundColor: BORDER }} />
            <p className="text-base text-slate-500 leading-relaxed">
              Collected across VOC submissions, surveys, and user interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 mb-10">
            {[
              "I can't find an old message.",
              "Important conversations get buried.",
              "My inbox is too cluttered.",
              "I need to know who's available.",
              "I keep typing the same responses.",
            ].map((q, i) => (
              <div key={q} className="flex items-center gap-4 py-3.5 px-5 rounded-xl" style={{ backgroundColor: SOFT }}>
                <span
                  className="text-xs font-black tabular-nums shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: DARK, color: "#fff" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm font-medium italic leading-snug text-slate-600">"{q}"</p>
              </div>
            ))}
          </div>

          <p className="text-base text-slate-500 leading-relaxed mb-6">
            Individually, these looked like separate feature requests. Across the full set, a common problem emerged.
          </p>

          <div className="rounded-2xl px-8 py-6" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
            <p className="text-base font-semibold text-white leading-relaxed">
              Users could send messages. Managing what happened after was harder.
            </p>
          </div>
        </div>

        {/* §02 — WHAT WE FOUND */}
        <div style={{ backgroundColor: "#f8fafc", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader number="02" label="Research" heading="We compared what users said with what they actually did." />

            {/* Research methods — inline pill row */}
            <div className="flex flex-wrap gap-4 mb-14">
              {[
                { n: "102",  l: "survey responses" },
                { n: "14",   l: "user interviews" },
                { n: "300+", l: "VOC items" },
                { n: "✓",    l: "Amplitude data" },
              ].map(r => (
                <div key={r.l} className="flex items-baseline gap-2 px-5 py-3 rounded-full" style={{ backgroundColor: SOFT }}>
                  <span className="text-xl font-black tabular-nums leading-none" style={{ color: DARK }}>{r.n}</span>
                  <span className="text-sm text-slate-500">{r.l}</span>
                </div>
              ))}
            </div>

            {/* Said vs Did — paired contrast rows */}
            <div className="mb-14">
              <div className="grid grid-cols-2 gap-0 mb-4">
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-slate-400">What they said</p>
                <p className="text-xs font-bold tracking-[0.14em] uppercase text-slate-400 pl-8">What data showed</p>
              </div>
              <div className="space-y-0" style={{ borderTop: `1px solid ${BORDER}` }}>
                {[
                  {
                    said: "Urgent conversations were getting buried in message volume.",
                    stat: "3–5×", statLabel: "threads reopened during a single shift",
                    team: "Clinical",
                  },
                  {
                    said: "Follow-up work depended on message history that was hard to retrieve.",
                    stat: "73%", statLabel: "reported difficulty finding older messages",
                    team: "Billing",
                  },
                  {
                    said: "Shared inboxes were difficult to manage at volume.",
                    stat: "Scroll", statLabel: "most common retrieval method — not search",
                    team: "Operations",
                  },
                ].map(r => (
                  <div key={r.team} className="grid grid-cols-2 gap-0 py-6" style={{ borderBottom: `1px solid ${BORDER}` }}>
                    <div className="pr-8" style={{ borderRight: `1px solid ${BORDER}` }}>
                      <p className="text-xs font-black tracking-[0.14em] uppercase mb-2" style={{ color: DARK }}>{r.team}</p>
                      <p className="text-base text-slate-600 leading-relaxed italic">"{r.said}"</p>
                    </div>
                    <div className="pl-8">
                      <p className="text-4xl font-black tabular-nums leading-none mb-2" style={{ color: DARK }}>{r.stat}</p>
                      <p className="text-sm text-slate-500 leading-snug">{r.statLabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl px-8 py-6" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
              <p className="text-base font-semibold text-white leading-relaxed">
                Users weren't struggling with sending messages. They were struggling with finding, managing, and acting on conversations once volume increased.
              </p>
            </div>
          </div>
        </div>

        {/* §03 — PROCESS */}
        <div className="max-w-4xl mx-auto px-8 py-16" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <ChapterHeader number="03" label="Process" heading="How scattered feedback became focused design direction." />

          <div className="space-y-0">
            {[
              { n: "01", tag: "Input",     label: "300+ VOC items",          desc: "Scattered, unstructured customer signals arriving across channels" },
              { n: "02", tag: "Analysis",  label: "Research + data",          desc: "Survey, interviews, and Amplitude mapped against recurring patterns" },
              { n: "03", tag: "Synthesis", label: "5 user jobs identified",   desc: "Find · Prioritise · Manage · Respond · Acknowledge" },
              { n: "04", tag: "Design",    label: "Experience opportunities",  desc: "Design briefs tied to jobs, not feature specs" },
              { n: "05", tag: "Output",    label: "Shipped capabilities",      desc: "Search · Pin · Unread · Bulk delete · AI replies · Reactions" },
            ].map((step, i, arr) => (
              <div key={step.n} className="grid grid-cols-[64px_120px_1fr] gap-6 items-start py-5" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <p className="text-4xl font-black tabular-nums leading-none" style={{ color: i === arr.length - 1 ? DARK : BORDER }}>{step.n}</p>
                <div>
                  <p className="text-xs font-bold tracking-[0.14em] uppercase mb-1" style={{ color: i === arr.length - 1 ? DARK : "#94a3b8" }}>{step.tag}</p>
                  <p className="text-base font-black leading-snug" style={{ color: DARK }}>{step.label}</p>
                </div>
                <p className="text-base text-slate-500 leading-relaxed pt-0.5">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* §04 — WHAT THE PATTERNS MEANT */}
        <div className="max-w-4xl mx-auto px-8 py-16" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <ChapterHeader number="04" label="Pattern Recognition" heading="The requests were different. The underlying jobs were connected." />


          <div className="grid grid-cols-5 mb-12" style={{ borderTop: `2px solid ${BORDER}` }}>
            {[
              { n: "01", job: "Find",        desc: "Locate conversations and information quickly",          features: ["Search"] },
              { n: "02", job: "Prioritise",  desc: "Keep important threads visible across shifts",          features: ["Pin", "Unread"] },
              { n: "03", job: "Manage",      desc: "Clean up volume without one-by-one effort",             features: ["Bulk delete"] },
              { n: "04", job: "Respond",     desc: "Reply to common patterns faster, without risk",         features: ["Suggested replies"] },
              { n: "05", job: "Acknowledge", desc: "Signal receipt or tone without adding message noise",   features: ["Reactions"] },
            ].map((c, i) => (
              <div key={c.job} className="flex flex-col gap-3 pt-5 px-5" style={{ borderRight: i < 4 ? `1px solid ${BORDER}` : "none" }}>
                <span className="text-xs font-black tabular-nums" style={{ color: BORDER }}>{c.n}</span>
                <p className="text-lg font-black leading-tight" style={{ color: DARK }}>{c.job}</p>
                <p className="text-sm text-slate-500 leading-snug flex-1">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {c.features.map(f => (
                    <span key={f} className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: SOFT, color: DARK, border: `1px solid ${BORDER}` }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-base font-semibold leading-relaxed" style={{ color: DARK }}>
            This turned a long list of requests into a smaller set of experience problems.
          </p>
        </div>

        {/* §04 — PRODUCT OPPORTUNITY */}
        <div style={{ backgroundColor: "#f8fafc", borderBottom: `1px solid ${BORDER}` }}>
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader number="05" label="Product Opportunity" heading="Make conversations easier to find, manage, and act on as volume grows." />

            <div className="flex items-stretch mb-8">
              {[
                { label: "Find",        dark: false },
                { label: "Prioritise",  dark: false },
                { label: "Respond",     dark: false },
                { label: "Acknowledge", dark: false },
                { label: "Preserve",    dark: true  },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-stretch flex-1">
                  <div className="flex items-center justify-center px-4 py-5 w-full"
                    style={{
                      backgroundColor: step.dark ? DARK : i === 0 ? SOFT : "white",
                      border: `1.5px solid ${step.dark ? DARK : BORDER}`,
                      borderLeft: i > 0 ? "none" : undefined,
                      borderRadius: i === 0 ? "12px 0 0 12px" : i === arr.length - 1 ? "0 12px 12px 0" : "0",
                      boxShadow: step.dark ? DARK_SHADOW : CARD_SHADOW,
                    }}>
                    <p className="text-sm font-black tracking-[0.1em] uppercase text-center" style={{ color: step.dark ? "white" : DARK }}>{step.label}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="shrink-0 self-stretch w-6 z-10 -mx-3"
                      style={{ backgroundColor: i === arr.length - 2 ? DARK : BORDER, clipPath: "polygon(0 0, 60% 0, 100% 50%, 60% 100%, 0 100%, 40% 50%)" }} />
                  )}
                </div>
              ))}
            </div>

            <p className="text-base text-slate-500 leading-relaxed max-w-2xl">
              This became the design lens for evaluating opportunities — rather than treating each request as an isolated feature.
            </p>
          </div>
        </div>

        {/* §05 — DESIGNING THE EXPERIENCE */}
        <div className="max-w-4xl mx-auto px-8 py-16" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <ChapterHeader number="06" label="Design" heading="Focused on the moments where communication was breaking down." />

          <div className="space-y-14 mb-16">
            {[
              {
                n: "01", job: "Find", feature: "Search",
                img: "/images/atext/1.png",
                title: "Search across message content, people, and topics.",
                body: "Results grouped by type, matching terms highlighted, direct thread navigation without leaving inbox context.",
                metric: "48% adoption", metricSub: "Satisfaction 2.2 → 4.4",
              },
              {
                n: "02", job: "Prioritise", feature: "Pin + Unread",
                img: "/images/atext/3.png",
                title: "Keep important conversations visible after the reply.",
                body: "Pinning and unread states gave lightweight ways to keep threads visible across shifts without additional workflows.",
                metric: null, metricSub: "Shift handoffs no longer required reconstructing context from memory.",
              },
              {
                n: "04", job: "Respond", feature: "Suggested Replies",
                img: "/images/atext/2.png",
                title: "AI suggests — user reviews — user sends.",
                body: "Reduced repetitive typing without auto-sending. In a healthcare context, no message is ever sent without explicit user review.",
                metric: null, metricSub: null,
              },
              {
                n: "05", job: "Acknowledge", feature: "Reactions",
                img: "/images/atext/4.png",
                title: "Acknowledge without adding message noise.",
                body: "Reactions let users signal receipt, agreement, or tone without creating another message.",
                metric: null, metricSub: null,
              },
            ].map(row => (
              <div key={row.n} className="py-10" style={{ borderTop: `1px solid ${BORDER}` }}>
                {/* Header row */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black tabular-nums w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: DARK, color: "#fff" }}>{row.n}</span>
                  <p className="text-lg font-black" style={{ color: DARK }}>{row.job}</p>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: SOFT, color: DARK, border: `1px solid ${BORDER}` }}>{row.feature}</span>
                </div>
                {/* Image full width */}
                {row.img && (
                  <img src={row.img} alt={row.job} className="w-full rounded-xl object-cover mb-5" style={{ border: `1px solid ${BORDER}` }} />
                )}
                {/* Text below */}
                <div className="flex items-start gap-8">
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

        {/* §07 — OUTCOMES */}
        <div style={{ backgroundColor: "#f8fafc", borderBottom: `1px solid ${BORDER}` }}>
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader number="07" label="Outcomes" heading="Experience changes translated into measurable adoption and operational impact." />


            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 mb-8">
              {[
                { v: "48%",      l: "Search adoption" },
                { v: "2.2→4.4",  l: "Search satisfaction" },
                { v: "60%",      l: "Bulk-delete usage" },
                { v: "17M/day",  l: "Fewer server calls" },
                { v: "$100K+",   l: "Annual savings" },
                { v: "7+",       l: "Capabilities added" },
              ].map(s => (
                <div key={s.l}>
                  <p className="text-3xl font-black mb-2 tabular-nums" style={{ color: DARK }}>{s.v}</p>
                  <p className="text-sm text-slate-500">{s.l}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-400 italic">
              Strongest design-attributable: search adoption and satisfaction. Server-call reduction was a cross-functional outcome.
            </p>
          </div>
        </div>

        {/* §09 — REFLECTION */}
        <div className="max-w-4xl mx-auto px-8 py-16">
          <ChapterHeader number="08" label="Reflection" heading="The most valuable work happened before the screens." />

          <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-2xl">
            With hundreds of customer signals, the challenge was not generating more feature ideas. It was identifying the underlying user jobs that explained many of them.
          </p>

          <div className="mb-10 pl-6" style={{ borderLeft: `3px solid ${DARK}` }}>
            <p className="text-base font-semibold leading-relaxed" style={{ color: DARK }}>
              I learned to treat customer feedback as evidence of patterns — not as a list of features to build.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-8" style={{ borderTop: `1px solid ${BORDER}` }}>
            {["300+ scattered requests", "Pattern synthesis", "5 user jobs", "7+ design opportunities", "Measurable outcomes"].map((s, i, arr) => (
              <div key={s} className="flex items-center gap-2">
                <span className="text-sm font-semibold" style={{ color: DARK }}>{s}</span>
                {i < arr.length - 1 && <span className="font-bold" style={{ color: BORDER }}>→</span>}
              </div>
            ))}
          </div>
        </div>

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
