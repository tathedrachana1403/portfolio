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
{/* 02 — PROBLEM */}
<section className="max-w-4xl mx-auto px-8 mb-20">
  <div className="max-w-3xl mx-auto">

    {/* Section label */}
    <div className="flex items-center gap-3 mb-5">
      <span
        className="text-sm font-black tabular-nums"
        style={{ color: DARK }}
      >
        02
      </span>

      <span
        className="w-4 h-px"
        style={{ backgroundColor: BORDER }}
      />

      <span
        className="text-sm font-black tracking-[0.14em] uppercase"
        style={{ color: DARK }}
      >
        Problem
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
      The existing file experience lacked the tools needed to support
      high-volume document work.
    </h2>

    {/* Problem description */}
    <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-5">
      As document volumes grew, users faced friction across the workflow from{" "}
      <strong style={{ color: DARK }}>
        finding the right files and managing large batches to understanding
        file status, reviewing activity, and completing actions with confidence
      </strong>
      .
    </p>

    <p className="text-base md:text-lg leading-relaxed text-slate-600">
      <strong style={{ color: DARK }}>
        Together, these gaps made high-volume document work slower, harder to
        navigate, and less predictable.
      </strong>
    </p>
  </div>

  {/* Divider */}
  <div
    className="w-full mt-16"
    style={{ borderTop: `1px solid ${BORDER}` }}
  />
</section>

       {/* 03 — RESEARCH & INSIGHTS */}
<section className="max-w-5xl mx-auto px-8 mb-16">
  <div className="max-w-3xl mx-auto">

    {/* Section label */}
    <div className="flex items-center gap-3 mb-4">
      <span
        className="text-sm font-black tabular-nums"
        style={{ color: DARK }}
      >
        03
      </span>

      <span
        className="w-4 h-px"
        style={{ backgroundColor: BORDER }}
      />

      <span
        className="text-sm font-black tracking-[0.14em] uppercase"
        style={{ color: DARK }}
      >
        Research &amp; Insights
      </span>
    </div>

    {/* Heading */}
    <h2
      className="text-3xl md:text-4xl font-black leading-[1.12] tracking-tight max-w-2xl"
      style={{
        color: DARK,
        textWrap: "balance",
      } as React.CSSProperties}
    >
      We evaluated the workflows users relied on most.
    </h2>

    {/* Research summary + baseline */}
    <div className="mt-6 mb-7">
      <div
        className="grid md:grid-cols-[1fr_180px] gap-7 items-stretch"
      >
        {/* Research method */}
        <div
          className="py-5 pr-6"
          style={{
            borderTop: `1px solid ${BORDER}`,
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <p className="text-base leading-relaxed text-slate-600 max-w-xl">
            We ran a{" "}
            <strong style={{ color: DARK }}>
              task-based usability study
            </strong>{" "}
            across finding, uploading, downloading, and deleting files.
            Participants completed each task and rated the ease of the
            experience.
          </p>
        </div>

        {/* Baseline score */}
        <div
          className="py-5 px-5 flex flex-col justify-center"
          style={{
            backgroundColor: SOFT,
            borderTop: `1px solid ${BORDER}`,
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <span
            className="text-xs font-black tracking-[0.12em] uppercase mb-2"
            style={{ color: DARK }}
          >
            Baseline
          </span>

          <span
            className="text-3xl font-black tracking-tight"
            style={{ color: DARK }}
          >
            11 / 25
          </span>

          <span className="text-sm text-slate-500 mt-1">
            Task usability score
          </span>
        </div>
      </div>
    </div>

    {/* Findings */}
    <div>

      {/* 01 */}
      <div
        className="grid grid-cols-[36px_1fr] gap-4 py-4"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <span
          className="text-xs font-black tabular-nums pt-1"
          style={{ color: DARK }}
        >
          01
        </span>

        <div>
          <h3
            className="text-base font-black tracking-tight mb-1"
            style={{ color: DARK }}
          >
            Finding files
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-slate-600">
            Large file sets made retrieval inefficient without stronger search,
            filtering, sorting, and recent activity.
          </p>
        </div>
      </div>

      {/* 02 */}
      <div
        className="grid grid-cols-[36px_1fr] gap-4 py-4"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <span
          className="text-xs font-black tabular-nums pt-1"
          style={{ color: DARK }}
        >
          02
        </span>

        <div>
          <h3
            className="text-base font-black tracking-tight mb-1"
            style={{ color: DARK }}
          >
            Managing files
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-slate-600">
            File-by-file downloads and deletions created unnecessary effort at
            scale.
          </p>
        </div>
      </div>

      {/* 03 */}
      <div
        className="grid grid-cols-[36px_1fr] gap-4 py-4"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <span
          className="text-xs font-black tabular-nums pt-1"
          style={{ color: DARK }}
        >
          03
        </span>

        <div>
          <h3
            className="text-base font-black tracking-tight mb-1"
            style={{ color: DARK }}
          >
            Understanding system state
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-slate-600">
            Limited progress and status feedback made file operations difficult
            to follow.
          </p>
        </div>
      </div>

      {/* 04 */}
      <div
        className="grid grid-cols-[36px_1fr] gap-4 py-4"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <span
          className="text-xs font-black tabular-nums pt-1"
          style={{ color: DARK }}
        >
          04
        </span>

        <div>
          <h3
            className="text-base font-black tracking-tight mb-1"
            style={{ color: DARK }}
          >
            Tracking activity
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-slate-600">
            Limited history and notes made it harder to understand what
            happened to a file.
          </p>
        </div>
      </div>

    </div>

    {/* Key insight */}
    <div className="mt-7 pt-6">
      <p
        className="text-xs font-black tracking-[0.12em] uppercase mb-2"
        style={{ color: DARK }}
      >
        Key insight
      </p>

      <p
        className="text-lg md:text-xl font-black leading-[1.3] tracking-tight max-w-2xl"
        style={{
          color: DARK,
          textWrap: "balance",
        } as React.CSSProperties}
      >
        The opportunity was to reduce operational effort while giving users
        greater speed, visibility, and control over file actions.
      </p>
    </div>

  </div>
</section>

{/* §03 — WORKFLOW */}
<div
  style={{
    backgroundColor: "#f8fafc",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-4xl mx-auto px-8 py-16">

    <ChapterHeader
      number="03"
      label="Workflow"
      heading="Structuring the file workflow around real user actions."
    />

    <p className="text-base text-slate-500 leading-relaxed max-w-2xl mt-3 mb-10">
      The redesigned workflow connects file discovery, actions, feedback, and
      recovery into a clear end-to-end experience.
    </p>

    {/* WORKFLOW MAP */}
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        border: `1px solid ${BORDER}`,
      }}
    >
      {/* Workflow header */}
      <div
        className="px-7 py-5"
        style={{
          backgroundColor: SOFT,
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <p
          className="text-xs font-black tracking-[0.14em] uppercase"
          style={{ color: DARK }}
        >
          Redesigned workflow
        </p>
      </div>

      <div className="p-7">

        {/* ========================================================= */}
        {/* PRIMARY WORKFLOW SPINE */}
        {/* ========================================================= */}

        <div className="relative">

          {/* Main horizontal connection */}
          <div
            className="absolute hidden md:block"
            style={{
              top: "19px",
              left: "7%",
              right: "7%",
              height: "1px",
              backgroundColor: BORDER,
            }}
          />

          <div className="grid md:grid-cols-4 gap-8 relative">

            {/* ===================================================== */}
            {/* 01 — SEARCH */}
            {/* ===================================================== */}

            <div>

              {/* Primary node */}
              <div className="flex items-center gap-3 relative z-10">

                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: DARK,
                    color: "#fff",
                  }}
                >
                  <span className="text-xs font-black">01</span>
                </div>

                <p
                  className="text-base font-black tracking-tight"
                  style={{ color: DARK }}
                >
                  Search
                </p>
              </div>

              {/* Branching area */}
              <div className="relative mt-7 ml-4">

                {/* vertical trunk */}
                <div
                  className="absolute left-0 top-0 bottom-0"
                  style={{
                    width: "1px",
                    backgroundColor: BORDER,
                  }}
                />

                {/* Find */}
                <div className="relative pl-6">

                  <div
                    className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                    style={{
                      backgroundColor: "#fff",
                      border: `2px solid ${DARK}`,
                    }}
                  />

                  <p
                    className="text-sm font-bold"
                    style={{ color: DARK }}
                  >
                    Find
                  </p>

                  <div className="mt-2 space-y-1.5">
                    {[
                      "File / user name",
                      "3+ characters",
                    ].map((item) => (
                      <div
                        key={item}
                        className="px-2.5 py-1.5 rounded-md text-[11px]"
                        style={{
                          backgroundColor: "#f8fafc",
                          color: "#64748b",
                          border: `1px solid ${BORDER}`,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="relative pl-6 mt-6">

                  <div
                    className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                    style={{
                      backgroundColor: "#fff",
                      border: `2px solid ${DARK}`,
                    }}
                  />

                  <p
                    className="text-sm font-bold"
                    style={{ color: DARK }}
                  >
                    Results
                  </p>

                  {/* Branch from results */}
                  <div className="mt-4 relative ml-4">

                    <div
                      className="absolute left-0 top-0 bottom-0"
                      style={{
                        width: "1px",
                        backgroundColor: BORDER,
                      }}
                    />

                    {/* Filter */}
                    <div className="relative pl-5">

                      <div
                        className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                        style={{
                          backgroundColor: SOFT,
                          border: `2px solid ${DARK}`,
                        }}
                      />

                      <p
                        className="text-xs font-bold"
                        style={{ color: DARK }}
                      >
                        Filter
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {[
                          "Category",
                          "Type",
                          "Modified by",
                          "Date",
                        ].map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 rounded text-[10px]"
                            style={{
                              backgroundColor: "#fff",
                              color: "#64748b",
                              border: `1px solid ${BORDER}`,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="text-[10px] text-slate-400 mt-2">
                        Refines results
                      </p>
                    </div>

                    {/* Select */}
                    <div className="relative pl-5 mt-5">

                      <div
                        className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                        style={{
                          backgroundColor: "#fff",
                          border: `2px solid ${BORDER}`,
                        }}
                      />

                      <p
                        className="text-xs font-bold"
                        style={{ color: DARK }}
                      >
                        Select
                      </p>

                      <p className="text-[10px] text-slate-400 mt-1">
                        Continue to file actions
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>


            {/* ===================================================== */}
            {/* 02 — ADD */}
            {/* ===================================================== */}

            <div>

              <div className="flex items-center gap-3 relative z-10">

                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: DARK,
                    color: "#fff",
                  }}
                >
                  <span className="text-xs font-black">02</span>
                </div>

                <p
                  className="text-base font-black tracking-tight"
                  style={{ color: DARK }}
                >
                  Add
                </p>
              </div>

              <div className="relative mt-7 ml-4">

                <div
                  className="absolute left-0 top-0 bottom-0"
                  style={{
                    width: "1px",
                    backgroundColor: BORDER,
                  }}
                />

                {/* Select */}
                <div className="relative pl-6">

                  <div
                    className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                    style={{
                      backgroundColor: "#fff",
                      border: `2px solid ${DARK}`,
                    }}
                  />

                  <p
                    className="text-sm font-bold"
                    style={{ color: DARK }}
                  >
                    Select files
                  </p>

                  <p className="text-[10px] text-slate-400 mt-1">
                    Choose one or more files
                  </p>
                </div>

                {/* Upload */}
                <div className="relative pl-6 mt-5">

                  <div
                    className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                    style={{
                      backgroundColor: "#fff",
                      border: `2px solid ${DARK}`,
                    }}
                  />

                  <p
                    className="text-sm font-bold"
                    style={{ color: DARK }}
                  >
                    Upload
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[
                      "Progress",
                      "Status",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 rounded text-[10px]"
                        style={{
                          backgroundColor: "#f8fafc",
                          color: "#64748b",
                          border: `1px solid ${BORDER}`,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Upload branches */}
                  <div
                    className="relative ml-4 mt-4"
                    style={{
                      borderLeft: `1px solid ${BORDER}`,
                    }}
                  >

                    {/* Success */}
                    <div className="relative pl-5">

                      <div
                        className="absolute -left-[4px] top-[6px] w-[8px] h-[8px] rounded-full"
                        style={{
                          backgroundColor: SOFT,
                          border: `2px solid ${DARK}`,
                        }}
                      />

                      <p
                        className="text-xs font-bold"
                        style={{ color: DARK }}
                      >
                        Complete
                      </p>

                      <p className="text-[10px] text-slate-400 mt-1">
                        Upload successful
                      </p>
                    </div>

                    {/* Cancel */}
                    <div className="relative pl-5 mt-4">

                      <div
                        className="absolute -left-[4px] top-[6px] w-[8px] h-[8px] rounded-full"
                        style={{
                          backgroundColor: "#fff",
                          border: `2px solid ${BORDER}`,
                        }}
                      />

                      <p
                        className="text-xs font-bold"
                        style={{ color: DARK }}
                      >
                        Cancel
                      </p>

                      <p className="text-[10px] text-slate-400 mt-1">
                        Confirm → cancelled
                      </p>
                    </div>

                    {/* Retry */}
                    <div className="relative pl-5 mt-4">

                      <div
                        className="absolute -left-[4px] top-[6px] w-[8px] h-[8px] rounded-full"
                        style={{
                          backgroundColor: "#fff",
                          border: `2px solid ${BORDER}`,
                        }}
                      />

                      <p
                        className="text-xs font-bold"
                        style={{ color: DARK }}
                      >
                        Retry
                      </p>

                      <p className="text-[10px] text-slate-400 mt-1">
                        Resume failed upload
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>


            {/* ===================================================== */}
            {/* 03 — MANAGE */}
            {/* ===================================================== */}

            <div>

              <div className="flex items-center gap-3 relative z-10">

                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: DARK,
                    color: "#fff",
                  }}
                >
                  <span className="text-xs font-black">03</span>
                </div>

                <p
                  className="text-base font-black tracking-tight"
                  style={{ color: DARK }}
                >
                  Manage
                </p>
              </div>

              <div className="relative mt-7 ml-4">

                <div
                  className="absolute left-0 top-0 bottom-0"
                  style={{
                    width: "1px",
                    backgroundColor: BORDER,
                  }}
                />

                {/* Selection */}
                <div className="relative pl-6">

                  <div
                    className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                    style={{
                      backgroundColor: "#fff",
                      border: `2px solid ${DARK}`,
                    }}
                  />

                  <p
                    className="text-sm font-bold"
                    style={{ color: DARK }}
                  >
                    Select files
                  </p>

                  <p className="text-[10px] text-slate-400 mt-1">
                    Single or bulk selection
                  </p>
                </div>

                {/* Action branch */}
                <div
                  className="relative ml-4 mt-5"
                  style={{
                    borderLeft: `1px solid ${BORDER}`,
                  }}
                >

                  {/* DOWNLOAD */}
                  <div className="relative pl-5">

                    <div
                      className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                      style={{
                        backgroundColor: SOFT,
                        border: `2px solid ${DARK}`,
                      }}
                    />

                    <p
                      className="text-xs font-bold"
                      style={{ color: DARK }}
                    >
                      Download
                    </p>

                    <div className="mt-2 space-y-1.5">
                      {[
                        "Progress",
                        "Complete",
                      ].map((item) => (
                        <div
                          key={item}
                          className="px-2.5 py-1.5 rounded-md text-[10px]"
                          style={{
                            backgroundColor: "#f8fafc",
                            color: "#64748b",
                            border: `1px solid ${BORDER}`,
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* DELETE */}
                  <div className="relative pl-5 mt-5">

                    <div
                      className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                      style={{
                        backgroundColor: "#fff",
                        border: `2px solid ${BORDER}`,
                      }}
                    />

                    <p
                      className="text-xs font-bold"
                      style={{ color: DARK }}
                    >
                      Delete
                    </p>

                    {/* Delete branch */}
                    <div
                      className="relative ml-3 mt-3"
                      style={{
                        borderLeft: `1px solid ${BORDER}`,
                      }}
                    >

                      {/* Confirmation */}
                      <div className="relative pl-5">

                        <div
                          className="absolute -left-[4px] top-[6px] w-[8px] h-[8px] rounded-full"
                          style={{
                            backgroundColor: "#fff",
                            border: `2px solid ${DARK}`,
                          }}
                        />

                        <p
                          className="text-[11px] font-bold"
                          style={{ color: DARK }}
                        >
                          Confirm
                        </p>

                        <div className="flex gap-1.5 mt-2">
                          <span
                            className="px-2 py-1 rounded text-[10px]"
                            style={{
                              backgroundColor: SOFT,
                              color: DARK,
                              border: `1px solid ${BORDER}`,
                            }}
                          >
                            Yes
                          </span>

                          <span
                            className="px-2 py-1 rounded text-[10px]"
                            style={{
                              backgroundColor: "#fff",
                              color: "#64748b",
                              border: `1px solid ${BORDER}`,
                            }}
                          >
                            No
                          </span>
                        </div>

                      </div>

                      {/* Outcome */}
                      <div className="relative pl-5 mt-4">

                        <div
                          className="absolute -left-[4px] top-[6px] w-[8px] h-[8px] rounded-full"
                          style={{
                            backgroundColor: SOFT,
                            border: `2px solid ${DARK}`,
                          }}
                        />

                        <p
                          className="text-[11px] font-bold"
                          style={{ color: DARK }}
                        >
                          Deleted
                        </p>

                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>


            {/* ===================================================== */}
            {/* 04 — UNDERSTAND */}
            {/* ===================================================== */}

            <div>

              <div className="flex items-center gap-3 relative z-10">

                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: DARK,
                    color: "#fff",
                  }}
                >
                  <span className="text-xs font-black">04</span>
                </div>

                <p
                  className="text-base font-black tracking-tight"
                  style={{ color: DARK }}
                >
                  Understand
                </p>
              </div>

              <div className="relative mt-7 ml-4">

                <div
                  className="absolute left-0 top-0 bottom-0"
                  style={{
                    width: "1px",
                    backgroundColor: BORDER,
                  }}
                />

                {/* Context branch */}
                <div className="relative pl-6">

                  <div
                    className="absolute -left-[4px] top-[7px] w-[9px] h-[9px] rounded-full"
                    style={{
                      backgroundColor: "#fff",
                      border: `2px solid ${DARK}`,
                    }}
                  />

                  <p
                    className="text-sm font-bold"
                    style={{ color: DARK }}
                  >
                    File context
                  </p>

                  <div
                    className="relative ml-4 mt-4"
                    style={{
                      borderLeft: `1px solid ${BORDER}`,
                    }}
                  >

                    {/* History */}
                    <div className="relative pl-5">

                      <div
                        className="absolute -left-[4px] top-[6px] w-[8px] h-[8px] rounded-full"
                        style={{
                          backgroundColor: "#fff",
                          border: `2px solid ${DARK}`,
                        }}
                      />

                      <p
                        className="text-xs font-bold"
                        style={{ color: DARK }}
                      >
                        History
                      </p>

                      <p className="text-[10px] text-slate-400 mt-1">
                        Previous actions
                      </p>
                    </div>

                    {/* Notes */}
                    <div className="relative pl-5 mt-5">

                      <div
                        className="absolute -left-[4px] top-[6px] w-[8px] h-[8px] rounded-full"
                        style={{
                          backgroundColor: "#fff",
                          border: `2px solid ${BORDER}`,
                        }}
                      />

                      <p
                        className="text-xs font-bold"
                        style={{ color: DARK }}
                      >
                        Notes
                      </p>

                      <p className="text-[10px] text-slate-400 mt-1">
                        File-specific context
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="relative pl-5 mt-5">

                      <div
                        className="absolute -left-[4px] top-[6px] w-[8px] h-[8px] rounded-full"
                        style={{
                          backgroundColor: "#fff",
                          border: `2px solid ${BORDER}`,
                        }}
                      />

                      <p
                        className="text-xs font-bold"
                        style={{ color: DARK }}
                      >
                        Metadata
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {[
                          "Modified by",
                          "Date",
                        ].map((item) => (
                          <span
                            key={item}
                            className="px-2 py-1 rounded text-[10px]"
                            style={{
                              backgroundColor: "#f8fafc",
                              color: "#64748b",
                              border: `1px solid ${BORDER}`,
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* WORKFLOW KEY */}
        {/* ========================================================= */}

        <div
          className="mt-9 pt-5 flex flex-wrap gap-x-6 gap-y-2"
          style={{
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: DARK }}
            />
            <span className="text-[11px] text-slate-500">
              Primary stage
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: "#fff",
                border: `1px solid ${DARK}`,
              }}
            />
            <span className="text-[11px] text-slate-500">
              Action
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: SOFT,
                border: `1px solid ${DARK}`,
              }}
            />
            <span className="text-[11px] text-slate-500">
              Outcome
            </span>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>

       {/* §03 — DESIGN */}
<div style={{ backgroundColor: "#f8fafc", borderBottom: `1px solid ${BORDER}` }}>
  <div className="max-w-4xl mx-auto px-8 py-16">

    <ChapterHeader
      number="03"
      label="Design"
      heading="Designing the workflow, not just the file list."
    />

    <p className="text-base text-slate-500 leading-relaxed max-w-2xl mb-10">
      The redesign turned a fragmented set of file actions into a workflow
      built for scale.
    </p>

    {/* Before / After — wireframes */}
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-[3px] h-5 rounded-full shrink-0"
        style={{ backgroundColor: DARK }}
      />
      <h3
        className="text-base font-bold tracking-tight"
        style={{ color: DARK }}
      >
        Wireframes
      </h3>
    </div>

    <div className="grid grid-cols-2 gap-6 mb-12">
      <div>
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
          style={{ color: "#94a3b8" }}
        >
          Before
        </p>
        <PracticeFilesCurrentState />
      </div>

      <div>
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
          style={{ color: DARK }}
        >
          After
        </p>
        <PracticeFilesRedesigned />
      </div>
    </div>

    {/* Before / After — actual screens */}
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-[3px] h-5 rounded-full shrink-0"
        style={{ backgroundColor: DARK }}
      />
      <h3
        className="text-base font-bold tracking-tight"
        style={{ color: DARK }}
      >
        Design screens
      </h3>
    </div>

    <div className="space-y-8">
      <div>
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
          style={{ color: "#94a3b8" }}
        >
          Before
        </p>

        <div
          className="relative w-full rounded-xl overflow-hidden"
          style={{ border: `1px solid ${BORDER}` }}
        >
          <img
            src="/images/practice/practice-current-state-audit.png"
            alt="Current state"
            className="w-full block"
          />

          {/* cover "Design Improvements" heading in image */}
          <div
            className="absolute bg-white"
            style={{
              top: "0%",
              left: "0%",
              width: "48%",
              height: "13%",
            }}
          />
        </div>
      </div>

      <div>
        <p
          className="text-xs font-bold tracking-[0.14em] uppercase mb-3"
          style={{ color: DARK }}
        >
          After
        </p>

        <img
          src="/images/practice/practice-improved-ui-annotated.png"
          alt="Redesigned"
          className="w-full rounded-xl"
          style={{ border: `1px solid ${BORDER}` }}
        />
      </div>
    </div>

    {/* Design synthesis */}
    <div className="mt-10 max-w-2xl">
      <p
        className="text-xs font-black tracking-[0.12em] uppercase mb-2"
        style={{ color: DARK }}
      >
        Design response
      </p>

      <p
        className="text-lg md:text-xl font-black leading-[1.3] tracking-tight"
        style={{ color: DARK }}
      >
        The redesigned experience made high-volume file management faster,
        more visible, and easier to control.
      </p>
    </div>

  </div>
</div>

        {/* §04 — VALIDATION */}
<div
  style={{
    backgroundColor: "#ffffff",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-4xl mx-auto px-8 py-16">

    <ChapterHeader
      number="04"
      label="Validation"
      heading="Testing the redesigned workflow before engineering pickup."
    />

    <p className="text-base text-slate-500 leading-relaxed max-w-2xl mb-10">
      We tested the wireframes across core file-management tasks to validate
      whether the redesigned workflow was easier to understand and use.
    </p>

    {/* Validation score */}
    <div
      className="rounded-2xl p-7 mb-10"
      style={{
        backgroundColor: SOFT,
        border: `1px solid ${BORDER}`,
      }}
    >
      <div className="flex items-end gap-4">

        <div>
          <p
            className="text-5xl font-black tracking-tight leading-none tabular-nums"
            style={{ color: DARK }}
          >
            11/25
          </p>

          <div
            className="h-px w-8 my-3"
            style={{ backgroundColor: BORDER }}
          />

          <p
            className="text-5xl font-black tracking-tight leading-none tabular-nums"
            style={{ color: DARK }}
          >
            23/25
          </p>
        </div>

        <div className="pb-1">
          <p
            className="text-sm font-black"
            style={{ color: DARK }}
          >
            Workflow usability score
          </p>

          <p className="text-xs text-slate-500 mt-1">
            Before → After
          </p>
        </div>

      </div>
    </div>

    {/* Key takeaway */}
    <div
      className="rounded-xl px-6 py-5"
      style={{
        backgroundColor: "#f8fafc",
        border: `1px solid ${BORDER}`,
      }}
    >
      <p
        className="text-[10px] font-black tracking-[0.14em] uppercase mb-2"
        style={{ color: "#94a3b8" }}
      >
        Key takeaway
      </p>

      <p
        className="text-lg font-black leading-[1.35] tracking-tight max-w-2xl"
        style={{ color: DARK }}
      >
        The redesigned workflow reduced ambiguity at the moments users needed
        to act, confirm, or recover.
      </p>
    </div>

  </div>
</div>

       {/* §04 — VALIDATION */}
<div
  style={{
    backgroundColor: "#ffffff",
    borderBottom: `1px solid ${BORDER}`,
  }}
>
  <div className="max-w-4xl mx-auto px-8 py-16">

    <ChapterHeader
      number="04"
      label="Validation"
      heading="Testing the experience before engineering pickup."
    />

    <p className="text-base text-slate-500 leading-relaxed max-w-2xl mb-10">
      Wireframes were tested across core file-management tasks to assess
      clarity, efficiency, and confidence.
    </p>

    {/* Score + takeaway */}
    <div
      className="grid md:grid-cols-[0.8fr_1.2fr] rounded-2xl overflow-hidden mb-10"
      style={{
        border: `1px solid ${BORDER}`,
      }}
    >

      {/* Score */}
      <div
        className="px-7 py-8"
        style={{
          backgroundColor: SOFT,
          borderRight: `1px solid ${BORDER}`,
        }}
      >
        <p
          className="text-6xl font-black tracking-[-0.04em] leading-none tabular-nums"
          style={{ color: DARK }}
        >
          23/25
        </p>

        <p
          className="text-xs font-bold mt-3"
          style={{ color: "#64748b" }}
        >
          Post-test score
        </p>
      </div>

      {/* Takeaway */}
      <div
        className="px-7 py-8 flex items-center"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div>
          <p
            className="text-[10px] font-black tracking-[0.14em] uppercase mb-3"
            style={{ color: "#94a3b8" }}
          >
            What testing showed
          </p>

          <p
            className="text-lg font-black leading-[1.35] tracking-tight max-w-lg"
            style={{ color: DARK }}
          >
            Core file actions became easier to understand and complete,
            with clearer feedback when actions succeeded or were cancelled.
          </p>
        </div>
      </div>

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
