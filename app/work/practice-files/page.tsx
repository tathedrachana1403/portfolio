import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import { PracticeFilesResearch, PracticeFilesCurrentState, PracticeFilesRedesigned } from "../../components/ResearchArtifacts";
import PracticeImageCarousel from "../../components/PracticeImageCarousel";

const DARK        = "#3b0764";
const SOFT        = "#faf5ff";
const BORDER      = "#d8b4fe";
const MUTED       = "#ede9fe";
const DARK_SHADOW = "0 8px 40px rgba(59,7,100,0.25)";

function ChapterHeader({ number, label, heading }: { number: string; label: string; heading: string }) {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-3 rounded-full px-4 py-1.5 mb-5"
        style={{ backgroundColor: SOFT, border: `1.5px solid ${BORDER}` }}>
        <span className="text-sm font-black tabular-nums" style={{ color: DARK }}>{number}</span>
        <span className="w-4 h-px" style={{ backgroundColor: BORDER }} />
        <span className="text-sm font-black tracking-[0.14em] uppercase" style={{ color: DARK }}>{label}</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-black leading-[1.2] tracking-tight mb-4"
        style={{ color: DARK, textWrap: "balance" } as React.CSSProperties}>
        {heading}
      </h2>
    </div>
  );
}

export default function PracticeFiles() {
  return (
    <>
      <Nav />
      <main className="pt-16">

        {/* BREADCRUMB */}
<div className="max-w-4xl mx-auto px-8 pt-10 pb-0">
  <div
    className="flex items-center gap-2 text-lg font-medium"
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

    <span>Practice Files</span>
  </div>
</div>

{/* HERO */}
<div className="max-w-4xl mx-auto px-8 pt-6 pb-16">

  {/* CASE STUDY LABEL */}
  <div
    className="inline-flex items-center gap-3 rounded-full px-4 py-1.5 mb-6"
    style={{
      backgroundColor: SOFT,
      border: `1.5px solid ${BORDER}`,
    }}
  >
    <span
      className="text-sm font-black tabular-nums"
      style={{ color: DARK }}
    >
      04 / 04
    </span>

    <span
      className="w-4 h-px"
      style={{ backgroundColor: BORDER }}
    />

    <span
      className="text-sm font-black tracking-[0.14em] uppercase"
      style={{ color: DARK }}
    >
      Lead Product Designer
    </span>
  </div>

  {/* HEADLINE */}
  <h1
    className="text-5xl md:text-3xl font-black leading-[1.05] tracking-tight mb-6"
    style={{ color: DARK }}
  >
    Turning file management into a workflow built for high-volume operations.
  </h1>

  {/* DESCRIPTION */}
  <p
    className="text-base leading-relaxed mb-10 max-w-3xl"
    style={{ color: "#64748b" }}
  >
    Practice Files is a workspace for Customer Success and Operations teams
    to manage documents across their daily workflows. I redesigned the
    experience to make it easier to find files, take bulk actions, and
    understand the status of work.
  </p>

  {/* HERO IMAGE */}
  <div className="w-full overflow-hidden rounded-2xl mb-12">
    <img
      src="/images/practice/Hero.png"
      alt="Practice Files"
      className="w-full h-auto object-cover"
    />
  </div>

  {/* PROJECT DETAILS */}
  <div
    className="grid grid-cols-1 md:grid-cols-3 pt-4 mb-12"
    style={{ borderTop: `1px solid ${BORDER}` }}
  >
    <div className="p-4">
      <p
        className="text-xs font-black tracking-[0.14em] uppercase mb-1.5"
        style={{ color: DARK }}
      >
        My role
      </p>

      <p className="text-sm font-medium leading-relaxed text-slate-500">
        Lead Product Designer
      </p>
    </div>

    <div
      className="p-4"
      style={{ borderLeft: `1px solid ${BORDER}` }}
    >
      <p
        className="text-xs font-black tracking-[0.14em] uppercase mb-1.5"
        style={{ color: DARK }}
      >
        Team
      </p>

      <p className="text-sm font-medium leading-relaxed text-slate-500">
        Product Manager, Engineering, Operations/Domain Stakeholders, Design
      </p>
    </div>

    <div
      className="p-4"
      style={{ borderLeft: `1px solid ${BORDER}` }}
    >
      <p
        className="text-xs font-black tracking-[0.14em] uppercase mb-1.5"
        style={{ color: DARK }}
      >
        Timeline
      </p>

      <p className="text-sm font-medium leading-relaxed text-slate-500">
        1.5 Months
      </p>
    </div>
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
        { v: "40%", l: "Less file-management time" },
        { v: "30%", l: "Faster document intake" },
        { v: "4×", l: "Productivity improvement" },
        { v: "6", l: "Capabilities shipped" },
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
        {/* 01 — CONTEXT */}
<section className="max-w-4xl mx-auto px-8 mb-20">
  {/* Divider from previous section */}
  <div
    className="w-full mb-12"
    style={{ borderTop: `1px solid ${BORDER}` }}
  />

  <div className="max-w-3xl mx-auto">
    {/* Section label */}
    <div className="flex items-center gap-3 mb-5">
      <span
        className="text-sm font-black tabular-nums"
        style={{ color: DARK }}
      >
        01
      </span>

      <span
        className="w-4 h-px"
        style={{ backgroundColor: BORDER }}
      />

      <span
        className="text-sm font-black tracking-[0.14em] uppercase"
        style={{ color: DARK }}
      >
        Context
      </span>
    </div>

    {/* Heading */}
    <h2
      className="text-2xl md:text-3xl font-black leading-[1.2] tracking-tight mb-6"
      style={{
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
      A centralized system for managing practice documents across the client
      lifecycle.
    </h2>

    {/* Body */}
    <div className="text-base md:text-lg leading-relaxed text-slate-600">
      <p className="mb-5">
        <strong style={{ color: DARK }}>Practice Files</strong> is the
        document system for Athena practices, supporting{" "}
        <strong style={{ color: DARK }}>
          Customer Success, Operations, and Termination teams
        </strong>{" "}
        across document intake, management, access, and practice exports.
      </p>

      <p>
        It serves as the{" "}
        <strong style={{ color: DARK }}>
          system of record for practice-level documents
        </strong>
        , ensuring teams can manage files securely and maintain data ownership
        throughout the client lifecycle.
      </p>
    </div>
  </div>

  {/* Divider before next section */}
  <div
    className="w-full mt-16"
    style={{ borderTop: `1px solid ${BORDER}` }}
  />
</section>

        {/* §02 — RESEARCH */}
        <div className="max-w-4xl mx-auto px-8 py-16" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <ChapterHeader number="02" label="Research" heading="I started with the existing workflow, not the new interface." />

          {/* Research methods */}
          <div className="grid grid-cols-3 gap-0 mb-14" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
            {[
              { n: "6",    l: "CS + Operations users" },
              { n: "4",    l: "Real task scenarios" },
              { n: "Top 5", l: "Contact driver for CS" },
            ].map((r, i) => (
              <div key={r.l} className="py-6 pr-6" style={{ borderLeft: i > 0 ? `1px solid ${BORDER}` : "none", paddingLeft: i > 0 ? "1.5rem" : 0 }}>
                <p className="text-3xl font-black tabular-nums leading-none mb-2" style={{ color: DARK }}>{r.n}</p>
                <p className="text-base text-slate-500">{r.l}</p>
              </div>
            ))}
          </div>

          {/* Friction scores */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-[3px] h-5 rounded-full shrink-0" style={{ backgroundColor: DARK }} />
            <h3 className="text-base font-bold tracking-tight" style={{ color: DARK }}>Where friction was highest</h3>
          </div>
          <div className="space-y-0 mb-10" style={{ borderTop: `1px solid ${BORDER}` }}>
            {[
              { area: "Tracking file activity", score: 4.8, desc: "No trace of what happened after an actions like deletions, downloads, and handoffs left no record." },
              { area: "Finding files",          score: 4.6, desc: "No search or filters. Users scanned full lists every time." },
              { area: "Managing multiple files", score: 4.3, desc: "Every download and delete was one file at a time. Offboarding meant repeating the same action dozens of times." },
            ].map(r => (
              <div key={r.area} className="py-6" style={{ borderBottom: `1px solid ${BORDER}` }}>
                <div className="flex items-center justify-between gap-8 mb-2">
                  <p className="text-base font-black" style={{ color: DARK }}>{r.area}</p>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fcd34d" }}>
                    High friction
                  </span>
                </div>
                {/* severity bar */}
                <div className="w-full rounded-full mb-3" style={{ height: "6px", backgroundColor: "#fef3c7" }}>
                  <div className="h-full rounded-full" style={{ width: `${(r.score / 5) * 100}%`, backgroundColor: "#f59e0b" }} />
                </div>
                <p className="text-base text-slate-500 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl px-8 py-6" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
            <p className="text-base font-semibold text-white leading-relaxed">
              File management was a top-5 contact driver for Customer Success and focus group friction scores matched real support ticket volume.
            </p>
          </div>
        </div>

        {/* §03 — DESIGN */}
        <div style={{ backgroundColor: "#f8fafc", borderBottom: `1px solid ${BORDER}` }}>
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader number="03" label="Design" heading="From a file list to an operational workspace." />

            <p className="text-base text-slate-500 leading-relaxed mb-10">
              The existing table exposed files but not the workflow around them. Six capabilities addressed every gap users had named.
            </p>

            {/* 6 capabilities — 2-col grid */}
            <div className="grid grid-cols-2 gap-0 mb-14" style={{ borderTop: `1px solid ${BORDER}`, borderLeft: `1px solid ${BORDER}` }}>
              {[
                { n: "01", label: "Add",     desc: "Upload files with clear progress, status, and cancel support." },
                { n: "02", label: "Find",    desc: "Search by file name and narrow results with advanced filters." },
                { n: "03", label: "Discover",desc: "Surface recently uploaded and downloaded files at a glance." },
                { n: "04", label: "Act",     desc: "Select multiple files and perform bulk downloads or deletions." },
                { n: "05", label: "Control", desc: "Confirmation for destructive actions, visible progress, and cancellation." },
                { n: "06", label: "Trace",   desc: "Notes and history so the next person understands what happened.", dark: true },
              ].map((step) => (
                <div key={step.n} className="p-7" style={{
                  borderRight: `1px solid ${BORDER}`,
                  borderBottom: `1px solid ${BORDER}`,
                  backgroundColor: step.dark ? DARK : "transparent",
                }}>
                  <p className="text-5xl font-black tabular-nums leading-none mb-4" style={{ color: step.dark ? "rgba(255,255,255,0.2)" : BORDER }}>{step.n}</p>
                  <p className="text-lg font-black mb-1.5" style={{ color: step.dark ? "white" : DARK }}>{step.label}</p>
                  <p className="text-base leading-relaxed" style={{ color: step.dark ? "rgba(255,255,255,0.65)" : "#64748b" }}>{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Before / After — wireframes */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-5 rounded-full shrink-0" style={{ backgroundColor: DARK }} />
              <h3 className="text-base font-bold tracking-tight" style={{ color: DARK }}>Wireframes</h3>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-14">
              <div>
                <p className="text-xs font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "#94a3b8" }}>Before</p>
                <PracticeFilesCurrentState />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] uppercase mb-3" style={{ color: DARK }}>After</p>
                <PracticeFilesRedesigned />
              </div>
            </div>

            {/* Before / After — actual screens */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-5 rounded-full shrink-0" style={{ backgroundColor: DARK }} />
              <h3 className="text-base font-bold tracking-tight" style={{ color: DARK }}>Design screens</h3>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold tracking-[0.14em] uppercase mb-3" style={{ color: "#94a3b8" }}>Before</p>
                <div className="relative w-full rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                  <img src="/images/practice/practice-current-state-audit.png" alt="Current state" className="w-full block" />
                  {/* cover "Design Improvements" heading in image */}
                  <div className="absolute bg-white" style={{ top: "0%", left: "0%", width: "48%", height: "13%" }} />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] uppercase mb-3" style={{ color: DARK }}>After</p>
                <img src="/images/practice/practice-improved-ui-annotated.png" alt="Redesigned" className="w-full rounded-xl" style={{ border: `1px solid ${BORDER}` }} />
              </div>
            </div>
          </div>
        </div>

        {/* §05 — SYSTEM STATE */}
        <div className="max-w-4xl mx-auto px-8 py-16" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <ChapterHeader number="04" label="System State" heading="Users shouldn't have to guess whether the system is working." />

          <div className="grid grid-cols-4 gap-0 mb-12" style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
            {[
              { state: "In progress", desc: "Action is still running" },
              { state: "Completed",   desc: "Operation finished successfully" },
              { state: "Failed",      desc: "User needs to take action" },
              { state: "Cancelled",   desc: "Operation was stopped" },
            ].map((s, i) => (
              <div key={s.state} className="py-6 pr-6" style={{ borderLeft: i > 0 ? `1px solid ${BORDER}` : "none", paddingLeft: i > 0 ? "1.5rem" : 0 }}>
                <p className="text-base font-black mb-1" style={{ color: DARK }}>{s.state}</p>
                <p className="text-base text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-base text-slate-500 leading-relaxed">
            Particularly important for larger file operations where users could otherwise be left wondering whether an action had completed.
          </p>
        </div>

        {/* §05 — TRACEABILITY */}
        <div style={{ backgroundColor: "#f8fafc", borderBottom: `1px solid ${BORDER}` }}>
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader number="05" label="Traceability" heading="File work often continues after the original action." />

            <p className="text-base text-slate-500 leading-relaxed mb-10">
              The next person working with a file could understand its context without relying on verbal handoff or memory.
            </p>

            {/* mock activity log */}
            <div className="rounded-2xl overflow-hidden mb-10" style={{ border: `1px solid ${BORDER}` }}>
              {/* titlebar */}
              <div className="flex items-center gap-2 px-5 py-3" style={{ backgroundColor: DARK }}>
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#e4d4f4" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f3eeff" }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#cbb8e8" }} />
                </div>
                <p className="text-sm font-semibold ml-1" style={{ color: "#e4d4f4" }}>DEMOGRAPHICS_Q4.csv — Activity log</p>
              </div>

              {/* log rows */}
              {[
                { time: "Today, 2:14 pm",    actor: "srout1",          action: "Downloaded",         note: null },
                { time: "Today, 11:05 am",   actor: "mmaratuechsemina",action: "Added note",          note: "Confirmed with client to use this version for compliance review." },
                { time: "Yesterday, 4:51 pm",actor: "lrajamani",       action: "Uploaded new version",note: null },
                { time: "Jul 30, 9:20 am",   actor: "ajain52",         action: "Deleted older copy",  note: null },
              ].map((row, i, arr) => (
                <div key={i} className="flex items-start gap-4 px-5 py-4" style={{ borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none", backgroundColor: i % 2 === 0 ? "white" : SOFT }}>
                  <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ backgroundColor: BORDER }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-black" style={{ color: DARK }}>{row.actor}</span>
                      <span className="text-sm text-slate-400">{row.action}</span>
                    </div>
                    {row.note && (
                      <p className="text-sm text-slate-500 mt-1 italic">"{row.note}"</p>
                    )}
                  </div>
                  <span className="text-xs text-slate-400 shrink-0 mt-0.5">{row.time}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl px-8 py-6" style={{ backgroundColor: DARK, boxShadow: DARK_SHADOW }}>
              <p className="text-base font-semibold text-white leading-relaxed">
                Notes and history meant the next person didn't need to ask what happened — the file told them.
              </p>
            </div>
          </div>
        </div>

        {/* §07 — OUTCOMES */}
        <div className="max-w-4xl mx-auto px-8 py-16" style={{ borderBottom: `1px solid ${BORDER}` }}>
          <ChapterHeader number="06" label="Outcomes" heading="The redesigned workflow reduced manual effort and improved document throughput." />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 mb-10">
            {[
              { v: "40%",    l: "Less file-management time" },
              { v: "30%",    l: "Faster document intake" },
              { v: "4×",     l: "Productivity improvement" },
              { v: "6",      l: "Capabilities shipped" },
            ].map(s => (
              <div key={s.l} className="flex items-start gap-4">
                <div>
                  <p className="text-4xl font-black tabular-nums leading-none mb-2" style={{ color: DARK }}>{s.v}</p>
                  <div className="h-0.5 w-8 rounded mb-2" style={{ backgroundColor: BORDER }} />
                  <p className="text-base text-slate-500 leading-snug">{s.l}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-base text-slate-400 italic leading-relaxed">
            40% time reduction and 30% intake improvement measured through facilitated task timing comparing existing and redesigned workflows using the same task set. 4× productivity improvement is directional, based on focus group difficulty ratings.
          </p>
        </div>

        {/* §08 — WHAT CHANGED */}
        <div style={{ backgroundColor: "#f8fafc", borderBottom: `1px solid ${BORDER}` }}>
          <div className="max-w-4xl mx-auto px-8 py-16">
            <ChapterHeader number="07" label="What Changed" heading="The product moved from storing files to supporting the work around them." />

            <div className="grid grid-cols-2 gap-0 mb-12" style={{ borderTop: `1px solid ${BORDER}` }}>
              {[
                {
                  label: "Before",
                  flow: "Browse → Open → Act → Repeat",
                  items: ["Manual scanning", "Individual actions", "Limited status visibility", "No persistent activity context"],
                  dark: false,
                },
                {
                  label: "After",
                  flow: "Find → Select → Act → Confirm → Track → Hand off",
                  items: ["Search + filters", "Bulk actions", "Visible progress", "Activity history"],
                  dark: true,
                },
              ].map(col => (
                <div key={col.label} className="py-8 pr-8" style={{ borderBottom: `1px solid ${BORDER}`, paddingLeft: col.dark ? "2rem" : 0, borderLeft: col.dark ? `1px solid ${BORDER}` : "none" }}>
                  <p className="text-xs font-bold tracking-[0.14em] uppercase mb-3" style={{ color: col.dark ? DARK : "#94a3b8" }}>{col.label}</p>
                  <p className="text-base font-mono mb-5 leading-relaxed" style={{ color: col.dark ? DARK : "#94a3b8" }}>{col.flow}</p>
                  <div className="space-y-2">
                    {col.items.map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-xs font-black" style={{ color: col.dark ? DARK : BORDER }}>{col.dark ? "+" : "–"}</span>
                        <p className="text-base" style={{ color: col.dark ? DARK : "#94a3b8" }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pl-6 mb-0" style={{ borderLeft: `3px solid ${DARK}` }}>
              <p className="text-base font-semibold leading-relaxed" style={{ color: DARK }}>
                In enterprise products, the object is rarely the whole workflow. Design for what users need to accomplish around it.
              </p>
            </div>
          </div>
        </div>

        {/* NAV FOOTER */}
        <div className="border-t border-gray-100 py-10 px-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/work/athenatext" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">← athenaText</Link>
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:opacity-60 transition-opacity">
              Back to all work →
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
