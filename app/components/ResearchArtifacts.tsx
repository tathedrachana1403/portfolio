"use client";
import { useState } from "react";

// ─── Shared helpers ───────────────────────────────────────────────────────────
const COLORS = {
  purple: { bg: "#f3eeff", border: "#e4d4f4", text: "#240046", dot: "#9b7fc4" },
  teal:   { bg: "#f0fdfa", border: "#99f6e4", text: "#0f766e", dot: "#0d9488" },
  blue:   { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8", dot: "#2563eb" },
  orange: { bg: "#fff7ed", border: "#fed7aa", text: "#c2410c", dot: "#ea580c" },
  gray:   { bg: "#f9fafb", border: "#e5e7eb", text: "#374151", dot: "#6b7280" },
  yellow: { bg: "#fefce8", border: "#fde68a", text: "#92400e", dot: "#d97706" },
  green:  { bg: "#f0fdf4", border: "#bbf7d0", text: "#166534", dot: "#16a34a" },
};

type ColorKey = keyof typeof COLORS;

function Sticky({ text, color = "purple", rotate = 0, small = false }: {
  text: string; color?: ColorKey; rotate?: number; small?: boolean;
}) {
  const c = COLORS[color];
  return (
    <div
      style={{ transform: `rotate(${rotate}deg)`, background: c.bg, borderColor: c.border, color: c.text }}
      className={`rounded-lg border shadow-sm font-medium leading-snug ${small ? "text-xs px-2.5 py-2" : "text-xs px-3 py-2.5"}`}
    >
      {text}
    </div>
  );
}

function ClusterLabel({ label, color = "gray" }: { label: string; color?: ColorKey }) {
  const c = COLORS[color];
  return (
    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: c.text }}>{label}</p>
  );
}

const SHELL_ACCENT: Record<string, { bar: string; dot1: string; dot2: string; dot3: string; label: string }> = {
  purple: { bar: "#240046",  dot1: "#e4d4f4", dot2: "#f3eeff", dot3: "#cbb8e8", label: "#e4d4f4" },
  teal:   { bar: "#134e4a",  dot1: "#99f6e4", dot2: "#ccfbf1", dot3: "#5eead4", label: "#99f6e4" },
  blue:   { bar: "#1e3a5f",  dot1: "#93c5fd", dot2: "#bfdbfe", dot3: "#60a5fa", label: "#93c5fd" },
  orange: { bar: "#7c2d12",  dot1: "#fdba74", dot2: "#fed7aa", dot3: "#fb923c", label: "#fdba74" },
  gray:   { bar: "#1f2937",  dot1: "#9ca3af", dot2: "#d1d5db", dot3: "#6b7280", label: "#d1d5db" },
};

function ArtifactShell({ label, children, className = "", accent = "gray" }: {
  label: string; children: React.ReactNode; className?: string; accent?: string;
}) {
  const a = SHELL_ACCENT[accent] ?? SHELL_ACCENT.gray;
  return (
    <div className={`rounded-xl border border-gray-200 bg-white overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-200" style={{ backgroundColor: a.bar }}>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: a.dot1 }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: a.dot2 }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: a.dot3 }} />
        </div>
        <p className="text-sm ml-1 font-semibold" style={{ color: a.label }}>{label}</p>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─── AMBIENT NOTES ────────────────────────────────────────────────────────────

// 1. Clinical workflow map, 5 moments timeline
export function ClinicalWorkflowMap() {
  const moments = [
    { label: "Pre-exam prep", pain: "Pulls up yesterday's notes mentally", n: "01" },
    { label: "Exam room", pain: "Split attention: patient + chart", n: "02" },
    { label: "Between visits", pain: "Memory fades, backlog grows", n: "03" },
    { label: "Workstation review", pain: "Rebuilds encounter from fragments", n: "04" },
    { label: "After-hours catch-up", pain: "1 to 3 hrs of home charting nightly", n: "05" },
  ];
  return (
    <ArtifactShell label="Clinical Workflow Map, 5 documentation moments" accent="purple">
      <p className="text-xs text-gray-400 mb-4">Research with 20 clinicians across primary care &amp; specialty, mapped where documentation broke down</p>
      <div className="artifact-timeline flex gap-0 items-start overflow-x-auto pb-2">
        {moments.map((m, i) => (
          <div key={m.label} className="flex items-start min-w-0">
            <div className="flex flex-col items-center min-w-[130px]">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black mb-2 shrink-0" style={{ background: "#f3eeff", border: "2px solid #e4d4f4", color: "#240046" }}>
                {m.n}
              </div>
              <p className="text-xs font-semibold text-gray-800 text-center mb-1 leading-tight">{m.label}</p>
              <div className="rounded-lg px-2 py-1.5 mt-1" style={{ background: "#f3eeff", border: "1px solid #e4d4f4" }}>
                <p className="text-xs text-center leading-snug" style={{ color: "#240046" }}>{m.pain}</p>
              </div>
            </div>
            {i < moments.length - 1 && (
              <div className="flex items-center pt-4 mx-1 shrink-0">
                <div className="w-6 h-px bg-gray-300" />
                <div className="w-0 h-0 border-l-4 border-l-gray-300 border-y-4 border-y-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 rounded-lg" style={{ background: "#f3eeff", border: "1px solid #e4d4f4" }}>
        <p className="text-xs font-medium" style={{ color: "#240046" }}>Key insight: Documentation wasn't one problem, it broke differently at each moment. A single recording screen couldn't address all 5.</p>
      </div>
    </ArtifactShell>
  );
}

// 2. Interview affinity map
export function AmbientAffinityMap() {
  return (
    <ArtifactShell label="Interview Synthesis, Affinity Map · 20 clinicians" accent="purple">
      <p className="text-xs text-gray-400 mb-4">Themes clustered from 45–60 min sessions · Primary care + specialty practices</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            cluster: "Context Loss", color: "purple" as ColorKey,
            stickies: ["Visit context gone by next patient", "Had to re-read notes twice", "Losing thread mid-consult", "Interruptions reset memory"],
          },
          {
            cluster: "Memory & Recall", color: "blue" as ColorKey,
            stickies: ["Codes + modifiers + chart simultaneously", "After-hours = reconstruction", "7–8 hrs/week re-charting", "Morning backlog anxiety"],
          },
          {
            cluster: "Trust & Verification", color: "yellow" as ColorKey,
            stickies: ["Need to see what AI drafted", "Who is responsible for the note?", "Didn't trust invisible transfer", "Want to approve each section"],
          },
          {
            cluster: "Transfer Anxiety", color: "orange" as ColorKey,
            stickies: ["Did it reach the chart?", "Partial transfer = re-work", "No visibility on failure", "Recovery path unclear"],
          },
        ].map((col) => (
          <div key={col.cluster}>
            <ClusterLabel label={col.cluster} color={col.color} />
            <div className="flex flex-col gap-2">
              {col.stickies.map((s, i) => (
                <Sticky key={s} text={s} color={col.color} rotate={i % 2 === 0 ? -0.8 : 0.6} small />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ArtifactShell>
  );
}

// 3. Wireframe, consent + recording + transfer (3-up mobile)
export function AmbientWireframes() {
  return (
    <ArtifactShell label="Wireframe Exploration, Key screens" accent="purple">
      <p className="text-xs text-gray-400 mb-5">Core interaction decisions: consent as explicit act · visible recording state · section-level transfer</p>
      <div className="grid grid-cols-3 gap-4">
        {/* Screen 1: Consent */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Consent</p>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 aspect-[4/5] flex flex-col gap-2">
            <div className="h-2 w-20 bg-gray-300 rounded mx-auto" />
            <div className="flex-1 flex flex-col items-center justify-center gap-3 px-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "#f3eeff", border: "2px solid #e4d4f4" }}>
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "#cbb8e8" }} />
              </div>
              <div className="w-full space-y-1.5">
                <div className="h-2 bg-gray-200 rounded w-full" />
                <div className="h-2 bg-gray-200 rounded w-4/5 mx-auto" />
                <div className="h-2 bg-gray-100 rounded w-3/4 mx-auto" />
              </div>
              <div className="w-full h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#240046" }}>
                <div className="h-2 w-16 bg-white/70 rounded" />
              </div>
              <div className="w-full h-7 border border-gray-300 rounded-lg" />
            </div>
            <div className="h-1.5 w-10 bg-gray-200 rounded mx-auto" />
          </div>
          <p className="text-xs text-gray-400 text-center mt-2 leading-tight">Consent is explicit, clinician initiates recording</p>
        </div>
        {/* Screen 2: Recording states */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Recording</p>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 aspect-[4/5] flex flex-col gap-2">
            <div className="flex items-center justify-between px-1">
              <div className="h-2 w-12 bg-gray-300 rounded" />
              <div className="h-5 w-14 bg-red-400 rounded-full flex items-center justify-center gap-1 px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <div className="h-1.5 w-8 bg-white/70 rounded" />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 px-1">
              <div className="bg-white rounded-lg border border-gray-200 p-2 space-y-1">
                <div className="h-1.5 w-16 bg-gray-300 rounded" />
                <div className="h-1.5 w-full bg-gray-200 rounded" />
                <div className="h-1.5 w-3/4 bg-gray-200 rounded" />
              </div>
              <div className="flex gap-1.5 mt-auto">
                <div className="h-7 flex-1 bg-gray-200 rounded-lg" />
                <div className="h-7 flex-1 rounded-lg" style={{ backgroundColor: "#240046" }} />
                <div className="h-7 flex-1 bg-gray-200 rounded-lg" />
              </div>
              <div className="flex justify-center gap-2">
                {["Recording", "Paused", "Generating", "Sent"].map(s => (
                  <div key={s} className="text-[7px] text-gray-400 text-center">
                    <div className={`w-4 h-4 rounded-full mx-auto mb-0.5 border ${s === "Recording" ? "bg-red-400 border-red-400" : "bg-gray-100 border-gray-300"}`} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2 leading-tight">4 explicit states, clinician always knows what AI is doing</p>
        </div>
        {/* Screen 3: Transfer state */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 text-center">Transfer</p>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-3 aspect-[4/5] flex flex-col gap-2">
            <div className="h-2 w-24 bg-gray-300 rounded mx-auto" />
            <div className="flex-1 flex flex-col gap-1.5 px-1">
              {[
                { label: "Visit history", status: "sent", pct: "84%" },
                { label: "Assessment & plan", status: "sent", pct: "89%" },
                { label: "Physical exam", status: "action", pct: "" },
                { label: "Patient instructions", status: "sent", pct: "90%" },
              ].map(row => (
                <div key={row.label} className="bg-white rounded-lg border border-gray-200 p-2 flex items-center justify-between gap-1">
                  <div className="h-1.5 w-20 bg-gray-200 rounded" />
                  <div className={`text-[7px] px-1.5 py-0.5 rounded-full font-semibold ${row.status === "sent" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>
                    {row.status === "sent" ? "✓ Sent" : "! Action"}
                  </div>
                </div>
              ))}
              <div className="mt-1 h-7 rounded-lg" style={{ backgroundColor: "#240046" }} />
            </div>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2 leading-tight">Section-level status, clinician sees exactly what reached the chart</p>
        </div>
      </div>
    </ArtifactShell>
  );
}

// 4. Full product overview wireframe
export function AmbientProductOverview() {
  return (
    <ArtifactShell label="Product Overview, Ambient in athenaOne" accent="purple">
      <p className="text-sm text-gray-400 mb-6">End-to-end flow: Schedule → Consent → Record → Review → Transfer</p>
      <div className="grid grid-cols-6 items-start gap-3 mb-6">
        {[
          { step: "Schedule", sub: "Ambient entry point per visit", color: "gray" as ColorKey, n: "01" },
          { step: "Consent", sub: "Explicit clinician action", color: "purple" as ColorKey, n: "02" },
          { step: "Record", sub: "Pause/resume visible", color: "purple" as ColorKey, n: "03" },
          { step: "AI Draft", sub: "Structured by section", color: "blue" as ColorKey, n: "04" },
          { step: "Review", sub: "Clinician approves each", color: "yellow" as ColorKey, n: "05" },
          { step: "Transfer", sub: "Status + recovery path", color: "green" as ColorKey, n: "06" },
        ].map((s) => (
          <div key={s.step} className="flex flex-col items-center text-center">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black mb-2 border"
              style={{ background: COLORS[s.color].bg, borderColor: COLORS[s.color].border, color: COLORS[s.color].text }}
            >
              {s.n}
            </div>
            <p className="text-sm font-semibold text-gray-800 leading-tight">{s.step}</p>
            <p className="text-xs text-gray-400 leading-snug mt-1">{s.sub}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Design rule", val: "AI assists, clinician owns", color: "purple" as ColorKey },
          { label: "Trust mechanism", val: "Explicit approval at every hand-off", color: "blue" as ColorKey },
          { label: "Recovery", val: "Visible failure + clear next action", color: "green" as ColorKey },
        ].map(d => (
          <div key={d.label} className="p-4 rounded-xl border" style={{ background: COLORS[d.color].bg, borderColor: COLORS[d.color].border }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: COLORS[d.color].text }}>{d.label}</p>
            <p className="text-sm text-gray-700 leading-snug">{d.val}</p>
          </div>
        ))}
      </div>
    </ArtifactShell>
  );
}

// ─── BPO ─────────────────────────────────────────────────────────────────────

// 5. Shadowing observation map
export function BPOShadowingMap() {
  const BPO_DARK = "#1e3a5f";
  const BPO_SOFT = "#eff6ff";
  const BPO_BORDER = "#bfdbfe";
  const BPO_MUTED = "#dbeafe";

  const themes = [
    {
      n: "01",
      theme: "Context switching",
      impact: "3× tab switches per claim",
      stickies: ["Tab → chart → tab", "Re-reads 3× per claim", "Loses SLA score"],
      color: "orange" as ColorKey,
    },
    {
      n: "02",
      theme: "Memory overload",
      impact: "Competing demands in parallel",
      stickies: ["Codes + modifiers + rules + SLA in parallel", "High variation between coders"],
      color: "yellow" as ColorKey,
    },
    {
      n: "03",
      theme: "QA blind spot",
      impact: "Rationale lost after submission",
      stickies: ["Changed fields leave no reason", "Reviewers reconstruct after the fact"],
      color: "blue" as ColorKey,
    },
  ];

  return (
    <ArtifactShell label="Shadowing Observations · 8 coders · Live workflow sessions" accent="blue">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">Three recurring failure patterns</p>
      <div className="flex flex-col gap-3">
        {themes.map((g) => (
          <div key={g.theme} className="rounded-xl overflow-hidden" style={{ border: `1.5px solid ${COLORS[g.color].border}` }}>
            <div className="flex items-center gap-3 px-4 py-3" style={{ backgroundColor: COLORS[g.color].bg }}>
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0"
                style={{ backgroundColor: "white", color: COLORS[g.color].text, border: `1px solid ${COLORS[g.color].border}` }}
              >
                {g.n}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold" style={{ color: COLORS[g.color].text }}>{g.theme}</p>
                <p className="text-xs" style={{ color: COLORS[g.color].text, opacity: 0.65 }}>{g.impact}</p>
              </div>
            </div>
            <div className="px-4 py-3 bg-white flex flex-wrap gap-1.5">
              {g.stickies.map(s => (
                <span
                  key={s}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{ backgroundColor: COLORS[g.color].bg, color: COLORS[g.color].text, border: `1px solid ${COLORS[g.color].border}` }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 rounded-xl px-4 py-3 flex items-center gap-3" style={{ backgroundColor: BPO_SOFT, border: `1.5px solid ${BPO_BORDER}` }}>
        <div className="w-1 self-stretch rounded-full shrink-0" style={{ backgroundColor: BPO_DARK }} />
        <p className="text-xs font-semibold leading-relaxed" style={{ color: BPO_DARK }}>
          All three patterns pointed to the same root cause: <strong>the workflow forced coders to carry context that the system could carry for them.</strong>
        </p>
      </div>
    </ArtifactShell>
  );
}

// 6+7. BPO Wireframe Navigator — stepped tab view, all 5 frames
const DARK_NAV = "#1e293b";
const SPOT = "#1e3a5f"; // navy spotlight accent (matches portfolio brand)
const SPOT_BG = "#eff6ff";
const SPOT_BORDER = "#bfdbfe";

function WireframeChrome() {
  return (
    <div className="px-3 py-2 flex items-center gap-2" style={{ background: DARK_NAV }}>
      <div className="flex gap-1.5">
        {["#ef4444","#f59e0b","#22c55e"].map(c => (
          <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.6 }} />
        ))}
      </div>
      <div className="flex-1 mx-3 h-4 rounded" style={{ background: "rgba(255,255,255,0.07)" }} />
      <div className="h-4 w-12 rounded" style={{ background: "rgba(255,255,255,0.07)" }} />
    </div>
  );
}

function FrameGuide({ n }: { n: 1 | 2 }) {
  return (
    <div className="p-4 flex gap-3" style={{ minHeight: 200, background: "#f8fafc" }}>
      <div className="w-4 shrink-0 flex flex-col gap-2 pt-1">
        {[1,2,3,4].map(i => <div key={i} className="h-1.5 rounded" style={{ background: i===1?"#cbd5e1":"#e2e8f0", width: i===1?"100%":"60%" }} />)}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-3 w-32 rounded" style={{ background: "#cbd5e1" }} />
          <div className="h-3 w-14 rounded" style={{ background: "#e2e8f0" }} />
        </div>
        <div className="h-1.5 w-full rounded" style={{ background: "#e2e8f0" }} />
        <div className="h-1.5 w-4/5 rounded" style={{ background: "#e2e8f0" }} />
        <div className="h-1.5 w-3/5 rounded" style={{ background: "#e2e8f0" }} />
        {n === 2 && (
          <div className="mt-2 rounded-lg p-2.5" style={{ background: SPOT_BG, border: `1.5px solid ${SPOT_BORDER}` }}>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ background: SPOT }} />
              <div className="h-1.5 w-24 rounded" style={{ background: SPOT_BORDER }} />
            </div>
            <div className="h-5 w-full rounded" style={{ background: "white", border: `1px solid ${SPOT_BORDER}` }} />
          </div>
        )}
      </div>
      <div className="w-28 shrink-0 rounded-lg p-2.5 flex flex-col" style={{ background: SPOT_BG, border: `1.5px solid ${SPOT_BORDER}` }}>
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="w-2 h-2 rounded-full" style={{ background: SPOT }} />
          <div className="h-1.5 w-14 rounded" style={{ background: SPOT_BORDER }} />
        </div>
        <div className="space-y-2 flex-1">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-start gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full shrink-0 mt-0.5" style={{ background: SPOT }} />
              <div className="h-1.5 flex-1 rounded" style={{ background: SPOT_BORDER, opacity: 0.7 }} />
            </div>
          ))}
        </div>
        {n === 1 && (
          <div className="mt-3 h-5 w-full rounded text-[7px] font-bold flex items-center justify-center" style={{ background: DARK_NAV, color: "white" }}>
            Guidance ready
          </div>
        )}
      </div>
    </div>
  );
}

function FrameValidate() {
  return (
    <div className="p-4 flex gap-3" style={{ minHeight: 200, background: "#f8fafc" }}>
      <div className="w-4 shrink-0 flex flex-col gap-2 pt-1">
        {[1,2,3,4].map(i => <div key={i} className="h-1.5 rounded" style={{ background: i===1?"#cbd5e1":"#e2e8f0", width: i===1?"100%":"60%" }} />)}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-3 w-32 rounded" style={{ background: "#cbd5e1" }} />
        </div>
        <div className="h-1.5 w-full rounded" style={{ background: "#e2e8f0" }} />
        <div className="h-1.5 w-3/5 rounded" style={{ background: "#e2e8f0" }} />
        <div className="mt-2 space-y-1.5">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1.5 w-14 rounded shrink-0" style={{ background: "#e2e8f0" }} />
              <div className="h-6 flex-1 rounded" style={{ background: "white", border: `1px solid ${SPOT_BORDER}` }} />
              <div className="h-6 px-2 rounded text-[7px] font-bold flex items-center" style={{ background: SPOT_BG, color: SPOT, border: `1px solid ${SPOT_BORDER}` }}>Edit</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FrameAdjust() {
  return (
    <div className="p-4 flex gap-3" style={{ minHeight: 200, background: "#f8fafc" }}>
      <div className="w-4 shrink-0 flex flex-col gap-2 pt-1">
        {[1,2,3,4].map(i => <div key={i} className="h-1.5 rounded" style={{ background: i===1?"#cbd5e1":"#e2e8f0", width: i===1?"100%":"60%" }} />)}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="h-3 w-32 rounded mb-1" style={{ background: "#cbd5e1" }} />
        <div className="h-1.5 w-full rounded" style={{ background: "#e2e8f0" }} />
        <div className="h-1.5 w-3/5 rounded" style={{ background: "#e2e8f0" }} />
        <div className="mt-2 rounded-lg p-3" style={{ background: SPOT_BG, border: `1.5px solid ${SPOT_BORDER}` }}>
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full" style={{ background: SPOT }} />
            <span className="text-[8px] font-semibold" style={{ color: SPOT }}>Why did this change?</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Rule exception", "Client policy", "Chart context"].map(r => (
              <div key={r} className="text-[8px] px-2 py-1 rounded font-medium" style={{ background: "white", border: `1.5px solid ${SPOT_BORDER}`, color: SPOT }}>{r}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FrameQA() {
  return (
    <div className="p-4" style={{ minHeight: 200, background: "#f8fafc" }}>
      <div className="flex items-center justify-between mb-3">
        <div className="h-2.5 w-32 rounded" style={{ background: "#cbd5e1" }} />
        <div className="h-5 px-2 rounded text-[8px] font-semibold flex items-center" style={{ background: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0" }}>
          3 changes
        </div>
      </div>
      <div className="space-y-2">
        {[
          { original: "M54.5",  coder: "M54.51", reason: "Chart specifies lumbar" },
          { original: "–",      coder: "25",     reason: "Separate E/M same day" },
          { original: "99213",  coder: "99214",  reason: "Extended time documented" },
        ].map((row, i) => (
          <div key={i} className="rounded-lg overflow-hidden" style={{ border: `1px solid ${SPOT_BORDER}`, background: "white" }}>
            <div className="px-3 py-1.5 flex items-center justify-between" style={{ background: "#f8fafc", borderBottom: `1px solid ${SPOT_BORDER}` }}>
              <div className="h-1.5 w-20 rounded" style={{ background: "#e2e8f0" }} />
              <div className="flex items-center gap-2">
                <span className="text-[8px]" style={{ color: "#94a3b8", textDecoration: "line-through" }}>{row.original}</span>
                <span className="text-[8px] font-bold" style={{ color: SPOT }}>→ {row.coder}</span>
              </div>
            </div>
            <div className="px-3 py-1.5 flex items-center gap-1.5" style={{ background: SPOT_BG }}>
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: SPOT }} />
              <span className="text-[8px]" style={{ color: "#1e3a5f" }}>
                <span style={{ opacity: 0.5 }}>Reason: </span>
                <span className="font-semibold">{row.reason}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BPOWireframeNavigator() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      label: "01 · Guide",
      title: "Guidance visible before chart opens",
      body: "Coders could see when system support was available before entering a dense chart.",
      frame: <FrameGuide n={1} />,
    },
    {
      label: "02 · Validate",
      title: "Guidance at the decision point",
      body: "Rules-driven support moved inline instead of living in memory or separate tabs.",
      frame: <FrameGuide n={2} />,
    },
    {
      label: "03 · Adjust",
      title: "Expert control preserved",
      body: "Prefilled fields stayed editable — the system supported judgment without overriding it.",
      frame: <FrameValidate />,
    },
    {
      label: "04 · Reason",
      title: "Changes became reviewable",
      body: "When coders changed a field, the reason traveled with the work instead of disappearing.",
      frame: <FrameAdjust />,
    },
    {
      label: "05 · Review",
      title: "QA received the decision trail",
      body: "Reviewers saw the original guidance, coder edits, and change reasons together — no reconstruction needed.",
      frame: <FrameQA />,
    },
  ];

  const s = steps[active];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${SPOT_BORDER}` }}>
      {/* Step tabs */}
      <div className="flex" style={{ background: DARK_NAV }}>
        {steps.map((st, i) => {
          const [num, ...rest] = st.label.split(" · ");
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex-1 px-4 py-5 text-center transition-colors"
              style={{
                background: i === active ? "rgba(255,255,255,0.1)" : "transparent",
                borderBottom: i === active ? `3px solid ${SPOT_BORDER}` : "3px solid transparent",
                cursor: "pointer",
              }}
            >
              <span className="text-xs font-bold block mb-1" style={{ color: i === active ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)" }}>{num}</span>
              <span className="text-base font-bold block" style={{ color: i === active ? "white" : "rgba(255,255,255,0.45)" }}>{rest.join(" · ")}</span>
            </button>
          );
        })}
      </div>

      {/* Frame chrome + content */}
      <WireframeChrome />
      {s.frame}

      {/* Caption + navigation */}
      <div className="px-5 py-4 flex items-center gap-4" style={{ background: "white", borderTop: `1px solid ${SPOT_BORDER}` }}>
        {/* Prev */}
        <button
          onClick={() => setActive(i => Math.max(0, i - 1))}
          disabled={active === 0}
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"
          style={{ background: active === 0 ? "#f1f5f9" : SPOT_BG, border: `1px solid ${active === 0 ? "#e2e8f0" : SPOT_BORDER}`, cursor: active === 0 ? "default" : "pointer" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M7.5 2L4 6l3.5 4" stroke={active === 0 ? "#cbd5e1" : SPOT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold mb-0.5" style={{ color: SPOT }}>{s.title}</p>
          <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
        </div>

        {/* Next */}
        <button
          onClick={() => setActive(i => Math.min(steps.length - 1, i + 1))}
          disabled={active === steps.length - 1}
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"
          style={{ background: active === steps.length - 1 ? "#f1f5f9" : SPOT_BG, border: `1px solid ${active === steps.length - 1 ? "#e2e8f0" : SPOT_BORDER}`, cursor: active === steps.length - 1 ? "default" : "pointer" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M4.5 2L8 6l-3.5 4" stroke={active === steps.length - 1 ? "#cbd5e1" : SPOT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// keep old exports as aliases so page.tsx doesn't break
export function BPOWireframes(_: { step: string; title: string; body: string }) { return null; }
export function BPOQAWireframe() { return null; }

// ─── ATHENATEXT ───────────────────────────────────────────────────────────────

// 8. Survey synthesis, 116 users
export function AthenaTextResearchSynthesis() {
  return (
    <ArtifactShell label="Research Synthesis, 116 users · 3 methods" accent="blue">
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        {[
          {
            method: "Survey", n: "102 users", color: "blue" as ColorKey, icon: "📊",
            finds: ["Satisfaction avg 2.2/5", "73% can't find old messages", "Inbox cleanup: manual & slow"],
          },
          {
            method: "Interviews", n: "14 users", color: "purple" as ColorKey, icon: "🎙",
            finds: ["Clinical: urgent msgs buried", "Billing: history hard to retrieve", "Ops: no availability signals"],
          },
          {
            method: "Amplitude data", n: "Behaviour", color: "teal" as ColorKey, icon: "📈",
            finds: ["Scroll-to-find most common path", "Threads reopened 3–5× per shift", "Bulk delete not attempted once"],
          },
        ].map(m => (
          <div key={m.method} className="p-3 rounded-xl border" style={{ background: COLORS[m.color].bg, borderColor: COLORS[m.color].border }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{m.icon}</span>
              <div>
                <p className="text-xs font-bold" style={{ color: COLORS[m.color].text }}>{m.method}</p>
                <p className="text-xs text-gray-400">{m.n}</p>
              </div>
            </div>
            <div className="space-y-1.5">
              {m.finds.map(f => (
                <div key={f} className="flex items-start gap-1.5">
                  <span className="text-xs mt-0.5" style={{ color: COLORS[m.color].dot }}>→</span>
                  <p className="text-xs text-gray-600 leading-snug">{f}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 bg-blue-900 rounded-xl">
        <p className="text-xs font-bold text-blue-200 uppercase tracking-wide mb-1">Converging insight across all 3 methods</p>
        <p className="text-sm text-white font-medium">athenaText worked for sending. It failed at recovery, management, and availability, the jobs users needed after the message was sent.</p>
      </div>
    </ArtifactShell>
  );
}

// 9. Roadmap reframe visual
export function AthenaTextRoadmapVisual() {
  return (
    <ArtifactShell label="Roadmap Reframe, Before vs After" accent="blue">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-3">❌ Before, Stabilisation list</p>
          <div className="space-y-1.5">
            {["Fix notification reliability", "Improve load time", "Resolve sync errors", "Surface polish"].map(i => (
              <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="w-4 h-4 rounded border-2 border-gray-300 shrink-0" />
                <p className="text-xs text-gray-500 line-through">{i}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">✅ After, Communication control</p>
          <div className="space-y-1.5">
            {[
              { item: "Search, recover conversations", tag: "48% adoption" },
              { item: "Bulk delete, clean up volume", tag: "60% usage" },
              { item: "Pinning + unread states", tag: "Shipped" },
              { item: "Out-of-office availability", tag: "Shipped" },
              { item: "AI suggested replies", tag: "Shipped" },
              { item: "Emoji reactions", tag: "Shipped" },
            ].map(i => (
              <div key={i.item} className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="w-4 h-4 rounded bg-blue-500 flex items-center justify-center shrink-0">
                  <span className="text-white text-[8px]">✓</span>
                </div>
                <p className="text-xs text-blue-900 flex-1">{i.item}</p>
                <span className="text-[9px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full">{i.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ArtifactShell>
  );
}

// 10. athenaText screen wireframes
export function AthenaTextScreenWireframe({ label, type }: { label: string; type: "search" | "ai-reply" | "emoji" | "preserve" }) {
  return (
    <div>
      <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden mb-3 aspect-video">
        <div className="bg-blue-700 px-3 py-2 flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-white/20" />
          <div className="h-1.5 w-28 bg-white/30 rounded" />
          <div className="ml-auto h-5 w-12 bg-white/20 rounded" />
        </div>
        <div className="flex h-[calc(100%-32px)]">
          {/* Sidebar */}
          <div className="w-1/3 border-r border-gray-200 p-2 space-y-1.5">
            {type === "search" && (
              <div className="bg-blue-50 border border-blue-200 rounded px-2 py-1 flex items-center gap-1 mb-2">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <div className="h-1.5 flex-1 bg-blue-200 rounded" />
              </div>
            )}
            {[1,2,3,4].map(i => (
              <div key={i} className={`rounded px-2 py-1.5 ${i === 2 ? "bg-blue-100 border border-blue-200" : "bg-white border border-gray-100"}`}>
                <div className="flex items-center gap-1 mb-0.5">
                  <div className={`w-4 h-4 rounded-full ${i === 2 ? "bg-blue-300" : "bg-gray-200"}`} />
                  <div className="h-1.5 w-14 bg-gray-200 rounded" />
                </div>
                <div className="h-1 w-full bg-gray-100 rounded" />
              </div>
            ))}
          </div>
          {/* Thread */}
          <div className="flex-1 p-2 flex flex-col justify-between">
            <div className="space-y-2">
              {[1,2].map(i => (
                <div key={i} className={`flex gap-1.5 ${i % 2 === 0 ? "justify-end" : ""}`}>
                  {i % 2 !== 0 && <div className="w-4 h-4 rounded-full bg-gray-200 shrink-0 mt-0.5" />}
                  <div className={`max-w-[70%] rounded-lg px-2 py-1.5 ${i % 2 === 0 ? "bg-blue-500" : "bg-white border border-gray-200"}`}>
                    <div className={`h-1.5 w-20 rounded ${i % 2 === 0 ? "bg-white/50" : "bg-gray-200"}`} />
                    {type === "emoji" && i === 1 && (
                      <div className="flex gap-0.5 mt-1">
                        {["👍","✅","👀"].map(e => <span key={e} className="text-[10px]">{e}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {type === "ai-reply" && (
                <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-[8px] text-blue-600 font-semibold mb-1">✨ Suggested replies</p>
                  <div className="flex gap-1 flex-wrap">
                    {["Acknowledged", "Will follow up", "Confirmed"].map(r => (
                      <div key={r} className="text-[8px] px-1.5 py-0.5 bg-white border border-blue-200 rounded text-blue-700">{r}</div>
                    ))}
                  </div>
                </div>
              )}
              {type === "preserve" && (
                <div className="flex gap-1 mt-1">
                  <div className="flex items-center gap-0.5 text-[8px] text-blue-600 bg-blue-50 border border-blue-200 rounded px-1.5 py-0.5">
                    <span>📌</span> Pinned
                  </div>
                  <div className="flex items-center gap-0.5 text-[8px] text-gray-500 bg-gray-50 border border-gray-200 rounded px-1.5 py-0.5">
                    <span>🔵</span> Unread
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex-1 h-6 bg-white border border-gray-200 rounded-lg" />
              <div className="h-6 w-6 rounded-full bg-blue-500" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs font-medium text-gray-600 text-center">{label}</p>
    </div>
  );
}

// ─── PRACTICE FILES ───────────────────────────────────────────────────────────

// 11. Focus group synthesis
export function PracticeFilesResearch() {
  return (
    <ArtifactShell label="Focus Group Synthesis, 6 users · Real task walkthroughs" accent="purple">
      <p className="text-sm text-gray-400 mb-5">Participants walked through compliance export, document handoff, batch upload, rated friction 1–5 at each step</p>
      <div className="grid md:grid-cols-3 gap-3 mb-4">
        {[
          { pain: "Finding files was slow", score: 4.6, detail: "No search or filters. Users scanned full lists manually every time." },
          { pain: "Bulk work was invisible", score: 4.3, detail: "Every action one-at-a-time. Offboarding teams had no way to act on batches." },
          { pain: "Compliance actions undocumented", score: 4.8, detail: "Deletions, downloads, handoffs left no trace. Teams couldn't prove what happened." },
        ].map(p => (
          <div key={p.pain} className="p-4 rounded-xl border" style={{ background: COLORS.purple.bg, borderColor: COLORS.purple.border }}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <p className="text-sm font-bold leading-snug" style={{ color: COLORS.purple.text }}>{p.pain}</p>
              <span className="text-sm font-bold rounded-full px-2.5 py-0.5 shrink-0" style={{ color: "#7c3aed", backgroundColor: "#ede9fe", border: "1px solid #c4b5fd" }}>
                {p.score}/5
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-snug">{p.detail}</p>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-xl" style={{ backgroundColor: "#240046" }}>
        <p className="text-sm font-bold uppercase tracking-wide mb-1.5" style={{ color: COLORS.purple.border }}>Triangulated with support ticket data</p>
        <p className="text-base text-white leading-relaxed">File management was a top-5 contact driver for Customer Success, focus group findings matched real ticket volume.</p>
      </div>
    </ArtifactShell>
  );
}

// 12. Current state annotated wireframe
export function PracticeFilesCurrentState() {
  return (
    <ArtifactShell label="Current State, Annotated gap audit" accent="purple">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* toolbar */}
        <div className="bg-gray-100 border-b border-gray-200 px-3 py-2 flex items-center gap-2">
          <div className="h-5 w-28 bg-gray-300 rounded" />
          <div className="ml-auto h-5 w-20 bg-gray-200 border border-gray-300 rounded flex items-center justify-center">
            <div className="h-1.5 w-12 bg-gray-400 rounded" />
          </div>
        </div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                {["File name", "Type", "Date", "Actions"].map(h => (
                  <th key={h} className="text-left px-3 py-2 text-xs text-gray-400 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[1,2,3].map(i => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="px-3 py-2"><div className="h-2 w-32 bg-gray-200 rounded" /></td>
                  <td className="px-3 py-2"><div className="h-2 w-16 bg-gray-200 rounded" /></td>
                  <td className="px-3 py-2"><div className="h-2 w-20 bg-gray-200 rounded" /></td>
                  <td className="px-3 py-2">
                    <div className="flex gap-1">
                      <div className="h-5 w-12 bg-gray-100 border border-gray-200 rounded" />
                      <div className="h-5 w-12 bg-gray-100 border border-gray-200 rounded" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ArtifactShell>
  );
}

// 13. Redesigned state wireframe
export function PracticeFilesRedesigned() {
  return (
    <ArtifactShell label="Redesigned Practice Files, Full workflow" accent="purple">
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {/* header with search */}
        <div className="border-b px-3 py-2 flex items-center gap-2" style={{ backgroundColor: COLORS.purple.bg, borderColor: COLORS.purple.border }}>
          <div className="h-5 w-28 rounded" style={{ backgroundColor: COLORS.purple.border }} />
          <div className="flex-1 h-6 bg-white rounded flex items-center px-2 gap-1" style={{ border: `1px solid ${COLORS.purple.border}` }}>
            <span className="text-gray-300 text-xs">🔍</span>
            <div className="h-1.5 w-20 bg-gray-200 rounded" />
          </div>
          <div className="flex gap-1.5">
            <div className="h-6 w-14 bg-white border border-gray-200 rounded flex items-center justify-center">
              <div className="h-1.5 w-8 bg-gray-300 rounded" />
            </div>
            <div className="h-6 w-20 rounded flex items-center justify-center" style={{ backgroundColor: "#7c3aed" }}>
              <div className="h-1.5 w-12 rounded" style={{ backgroundColor: "rgba(255,255,255,0.7)" }} />
            </div>
          </div>
        </div>
        {/* bulk action bar */}
        <div className="border-b px-3 py-1.5 flex items-center gap-2" style={{ backgroundColor: COLORS.purple.bg, borderColor: COLORS.purple.border }}>
          <div className="w-4 h-4 rounded border-2 flex items-center justify-center" style={{ backgroundColor: "#7c3aed", borderColor: "#7c3aed" }}>
            <div className="h-1 w-2 bg-white rounded" />
          </div>
          <p className="text-xs font-medium" style={{ color: "#5b21b6" }}>3 selected</p>
          <div className="flex gap-1 ml-2">
            {["Download", "Delete", "Add note"].map(a => (
              <div key={a} className="h-5 px-2 bg-white rounded text-[9px] flex items-center" style={{ border: `1px solid ${COLORS.purple.border}`, color: "#5b21b6" }}>{a}</div>
            ))}
          </div>
        </div>
        {/* table */}
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-2 py-2 w-6"><div className="w-3 h-3 rounded border border-gray-300" /></th>
              {["File name", "Category", "Status", "Last action", "Actions"].map(h => (
                <th key={h} className="text-left px-2 py-2 text-xs text-gray-400 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { status: "Reviewed", color: "bg-green-100 text-green-700" },
              { status: "Pending", color: "bg-yellow-100 text-yellow-700" },
              { status: "Uploaded", color: "bg-blue-100 text-blue-700" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-gray-100" style={{ backgroundColor: i === 0 ? COLORS.purple.bg : undefined }}>
                <td className="px-2 py-2">
                  <div className="w-3 h-3 rounded border" style={{ backgroundColor: i === 0 ? "#7c3aed" : undefined, borderColor: i === 0 ? "#7c3aed" : "#d1d5db" }} />
                </td>
                <td className="px-2 py-2"><div className="h-2 w-28 bg-gray-200 rounded" /></td>
                <td className="px-2 py-2"><div className="h-2 w-14 bg-gray-100 rounded" /></td>
                <td className="px-2 py-2">
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${row.color}`}>{row.status}</span>
                </td>
                <td className="px-2 py-2"><div className="h-2 w-16 bg-gray-100 rounded" /></td>
                <td className="px-2 py-2">
                  <div className="flex gap-0.5">
                    <div className="h-5 w-10 bg-gray-100 border border-gray-200 rounded" />
                    <div className="h-5 w-5 bg-gray-100 border border-gray-200 rounded" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ArtifactShell>
  );
}
