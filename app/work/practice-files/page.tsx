import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";

import {
  PracticeFilesResearch,
  PracticeFilesCurrentState,
  PracticeFilesRedesigned,
} from "../../components/ResearchArtifacts";

import PracticeImageCarousel from "../../components/PracticeImageCarousel";

const DARK = "#3b0764";
const SOFT = "#faf5ff";
const BORDER = "#d8b4fe";
const MUTED = "#ede9fe";
const DARK_SHADOW = "0 8px 40px rgba(59,7,100,0.25)";

/* =========================================================
   SHARED SECTION HEADER
   ========================================================= */

function ChapterHeader({
  number,
  label,
  heading,
}: {
  number: string;
  label: string;
  heading: string;
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-sm font-black tabular-nums"
          style={{ color: DARK }}
        >
          {number}
        </span>

        <span
          className="w-4 h-px shrink-0"
          style={{ backgroundColor: BORDER }}
        />

        <span
          className="text-sm font-black tracking-[0.14em] uppercase"
          style={{ color: DARK }}
        >
          {label}
        </span>
      </div>

      <h2
        className="text-3xl md:text-4xl font-black leading-[1.12] tracking-[-0.025em] max-w-3xl"
        style={
          {
            color: DARK,
            textWrap: "balance",
          } as React.CSSProperties
        }
      >
        {heading}
      </h2>
    </div>
  );
}

/* =========================================================
   SHARED SECTION
   ========================================================= */

function Section({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      style={{
        backgroundColor: dark ? "#f8fafc" : "#ffffff",
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div className="max-w-4xl mx-auto px-8 py-16">
        {children}
      </div>
    </section>
  );
}

/* =========================================================
   SMALL CONTENT LABEL
   ========================================================= */

function ContentLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-[3px] h-5 rounded-full shrink-0"
        style={{ backgroundColor: DARK }}
      />

      <h3
        className="text-base font-bold tracking-tight"
        style={{ color: DARK }}
      >
        {children}
      </h3>
    </div>
  );
}

/* =========================================================
   PRACTICE FILES
   ========================================================= */

export default function PracticeFiles() {
  return (
    <>
      <Nav />

      <main className="pt-16">

        {/* =====================================================
            BREADCRUMB
        ===================================================== */}

        <div className="max-w-4xl mx-auto px-8 pt-10">
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

        {/* =====================================================
            HERO
        ===================================================== */}

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
            className="text-5xl md:text-6xl font-black leading-[1.02] tracking-[-0.04em] mb-6"
            style={{ color: DARK }}
          >
            Turning file management into a workflow built for high-volume
            operations.
          </h1>

          {/* DESCRIPTION */}

          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-3xl"
            style={{ color: "#64748b" }}
          >
            Practice Files is a workspace for Customer Success and Operations
            teams to manage documents across their daily workflows. I
            redesigned the experience to make it easier to find files, take
            bulk actions, and understand the status of work.
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
            style={{
              borderTop: `1px solid ${BORDER}`,
            }}
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
              style={{
                borderLeft: `1px solid ${BORDER}`,
              }}
            >
              <p
                className="text-xs font-black tracking-[0.14em] uppercase mb-1.5"
                style={{ color: DARK }}
              >
                Team
              </p>

              <p className="text-sm font-medium leading-relaxed text-slate-500">
                Product Manager, Engineering, Operations / Domain
                Stakeholders, Design
              </p>
            </div>

            <div
              className="p-4"
              style={{
                borderLeft: `1px solid ${BORDER}`,
              }}
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
                {
                  value: "40%",
                  label: "Less file-management time",
                },
                {
                  value: "30%",
                  label: "Faster document intake",
                },
                {
                  value: "4×",
                  label: "Productivity improvement",
                },
                {
                  value: "6",
                  label: "Capabilities shipped",
                },
              ].map((metric) => (
                <div key={metric.label}>
                  <p className="text-xl font-black text-white tabular-nums">
                    {metric.value}
                  </p>

                  <p
                    className="text-xs mt-1 leading-snug"
                    style={{ color: MUTED }}
                  >
                    {metric.label}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* =====================================================
            01 — CONTEXT
        ===================================================== */}

        <Section>

          <ChapterHeader
            number="01"
            label="Context"
            heading="A centralized system for managing practice documents across the client lifecycle."
          />

          <div className="max-w-3xl">

            <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-5">
              <strong style={{ color: DARK }}>
                Practice Files
              </strong>{" "}
              is the document system for Athena practices, supporting{" "}
              <strong style={{ color: DARK }}>
                Customer Success, Operations, and Termination teams
              </strong>{" "}
              across document intake, management, access, and practice
              exports.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              It serves as the{" "}
              <strong style={{ color: DARK }}>
                system of record for practice-level documents
              </strong>
              , ensuring teams can manage files securely and maintain data
              ownership throughout the client lifecycle.
            </p>

          </div>
        </Section>

        {/* =====================================================
            02 — PROBLEM
        ===================================================== */}

        <Section>

          <ChapterHeader
            number="02"
            label="Problem"
            heading="The existing file experience lacked the tools needed to support high-volume document work."
          />

          <div className="max-w-3xl">

            <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-5">
              As document volumes grew, users faced friction across the
              workflow — from{" "}
              <strong style={{ color: DARK }}>
                finding the right files and managing large batches to
                understanding file status, reviewing activity, and completing
                actions with confidence
              </strong>
              .
            </p>

            <p className="text-base md:text-lg leading-relaxed text-slate-600">
              Together, these gaps made high-volume document work slower,
              harder to navigate, and less predictable.
            </p>

          </div>
        </Section>

        {/* =====================================================
            03 — RESEARCH & INSIGHTS
        ===================================================== */}

        <Section>

          <ChapterHeader
            number="03"
            label="Research & Insights"
            heading="We evaluated the workflows users relied on most."
          />

          <div className="max-w-3xl">

            {/* METHOD */}

            <div
              className="grid md:grid-cols-[1fr_180px] gap-7 items-stretch mb-8"
            >
              <div
                className="py-5 pr-6"
                style={{
                  borderTop: `1px solid ${BORDER}`,
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                <p className="text-base leading-relaxed text-slate-600">
                  We ran a{" "}
                  <strong style={{ color: DARK }}>
                    task-based usability study
                  </strong>{" "}
                  across finding, uploading, downloading, and deleting files.
                  Participants completed each task and rated the ease of the
                  experience.
                </p>
              </div>

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

            {/* FINDINGS */}

            <div>

              {[
                {
                  number: "01",
                  title: "Finding files",
                  text:
                    "Large file sets made retrieval inefficient without stronger search, filtering, sorting, and recent activity.",
                },
                {
                  number: "02",
                  title: "Managing files",
                  text:
                    "File-by-file downloads and deletions created unnecessary effort at scale.",
                },
                {
                  number: "03",
                  title: "Understanding system state",
                  text:
                    "Limited progress and status feedback made file operations difficult to follow.",
                },
                {
                  number: "04",
                  title: "Tracking activity",
                  text:
                    "Limited history and notes made it harder to understand what happened to a file.",
                },
              ].map((finding) => (
                <div
                  key={finding.number}
                  className="grid grid-cols-[36px_1fr] gap-4 py-4"
                  style={{
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <span
                    className="text-xs font-black tabular-nums pt-1"
                    style={{ color: DARK }}
                  >
                    {finding.number}
                  </span>

                  <div>
                    <h3
                      className="text-base font-black tracking-tight mb-1"
                      style={{ color: DARK }}
                    >
                      {finding.title}
                    </h3>

                    <p className="text-sm md:text-base leading-relaxed text-slate-600">
                      {finding.text}
                    </p>
                  </div>
                </div>
              ))}

            </div>

            {/* INSIGHT */}

            <div className="mt-8 pt-6">
              <p
                className="text-xs font-black tracking-[0.12em] uppercase mb-2"
                style={{ color: DARK }}
              >
                Key insight
              </p>

              <p
                className="text-lg md:text-xl font-black leading-[1.3] tracking-tight"
                style={{
                  color: DARK,
                  textWrap: "balance",
                } as React.CSSProperties}
              >
                The opportunity was to reduce operational effort while giving
                users greater speed, visibility, and control over file
                actions.
              </p>
            </div>

          </div>
        </Section>

        {/* =====================================================
            04 — WORKFLOW
        ===================================================== */}

        <Section dark>

          <ChapterHeader
            number="04"
            label="Workflow"
            heading="Structuring the file workflow around real user actions."
          />

          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mb-10">
            The redesigned workflow connects discovery, file actions, system
            feedback, and context while making key decisions and recovery paths
            explicit.
          </p>

          {/* WORKFLOW MAP */}

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "#ffffff",
              border: `1px solid ${BORDER}`,
            }}
          >

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

            <div className="p-7 overflow-x-auto">

              <div
                className="min-w-[900px]"
                style={{
                  position: "relative",
                }}
              >

                {/* PRIMARY SPINE */}

                <div
                  className="absolute"
                  style={{
                    top: "20px",
                    left: "5%",
                    right: "5%",
                    height: "1px",
                    backgroundColor: BORDER,
                  }}
                />

                <div className="grid grid-cols-5 gap-5 relative">

                  {/* DISCOVER */}

                  <div className="relative">

                    <div className="flex items-center gap-2 relative z-10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: DARK,
                          color: "#fff",
                        }}
                      >
                        <span className="text-xs font-black">01</span>
                      </div>

                      <p
                        className="text-sm font-black"
                        style={{ color: DARK }}
                      >
                        Discover
                      </p>
                    </div>

                    <div className="relative mt-7 ml-5 pl-5 border-l">
                      <div style={{ borderColor: BORDER }}>

                        <div className="relative mb-5">
                          <span
                            className="absolute -left-[24px] top-1.5 w-2 h-2 rounded-full"
                            style={{ backgroundColor: DARK }}
                          />

                          <p
                            className="text-xs font-bold"
                            style={{ color: DARK }}
                          >
                            Search
                          </p>

                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {[
                              "File / user name",
                              "3+ characters",
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

                        <div className="relative">
                          <span
                            className="absolute -left-[24px] top-1.5 w-2 h-2 rounded-full"
                            style={{ backgroundColor: DARK }}
                          />

                          <p
                            className="text-xs font-bold"
                            style={{ color: DARK }}
                          >
                            Refine
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

                  {/* ADD */}

                  <div className="relative">

                    <div className="flex items-center gap-2 relative z-10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: DARK,
                          color: "#fff",
                        }}
                      >
                        <span className="text-xs font-black">02</span>
                      </div>

                      <p
                        className="text-sm font-black"
                        style={{ color: DARK }}
                      >
                        Add
                      </p>
                    </div>

                    <div className="relative mt-7 ml-5 pl-5 border-l">
                      <div style={{ borderColor: BORDER }}>

                        <div className="relative mb-5">
                          <span
                            className="absolute -left-[24px] top-1.5 w-2 h-2 rounded-full"
                            style={{ backgroundColor: DARK }}
                          />

                          <p
                            className="text-xs font-bold"
                            style={{ color: DARK }}
                          >
                            Select files
                          </p>

                          <p className="text-[10px] text-slate-400 mt-1">
                            One or more files
                          </p>
                        </div>

                        <div className="relative">
                          <span
                            className="absolute -left-[24px] top-1.5 w-2 h-2 rounded-full"
                            style={{ backgroundColor: DARK }}
                          />

                          <p
                            className="text-xs font-bold"
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

                          {/* UPLOAD BRANCH */}

                          <div className="ml-4 mt-4 pl-4 border-l">
                            <div style={{ borderColor: BORDER }}>

                              <div className="relative mb-4">
                                <span
                                  className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full"
                                  style={{
                                    backgroundColor: SOFT,
                                    border: `1px solid ${DARK}`,
                                  }}
                                />

                                <p
                                  className="text-[11px] font-bold"
                                  style={{ color: DARK }}
                                >
                                  Complete
                                </p>
                              </div>

                              <div className="relative mb-4">
                                <span
                                  className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full"
                                  style={{
                                    backgroundColor: "#fff",
                                    border: `1px solid ${DARK}`,
                                  }}
                                />

                                <p
                                  className="text-[11px] font-bold"
                                  style={{ color: DARK }}
                                >
                                  Cancel
                                </p>

                                <p className="text-[10px] text-slate-400 mt-1">
                                  Confirm → cancelled
                                </p>
                              </div>

                              <div className="relative">
                                <span
                                  className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full"
                                  style={{
                                    backgroundColor: "#fff",
                                    border: `1px solid ${DARK}`,
                                  }}
                                />

                                <p
                                  className="text-[11px] font-bold"
                                  style={{ color: DARK }}
                                >
                                  Retry
                                </p>
                              </div>

                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>

                  {/* MANAGE */}

                  <div className="relative">

                    <div className="flex items-center gap-2 relative z-10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: DARK,
                          color: "#fff",
                        }}
                      >
                        <span className="text-xs font-black">03</span>
                      </div>

                      <p
                        className="text-sm font-black"
                        style={{ color: DARK }}
                      >
                        Manage
                      </p>
                    </div>

                    <div className="relative mt-7 ml-5 pl-5 border-l">
                      <div style={{ borderColor: BORDER }}>

                        <div className="relative mb-5">
                          <span
                            className="absolute -left-[24px] top-1.5 w-2 h-2 rounded-full"
                            style={{ backgroundColor: DARK }}
                          />

                          <p
                            className="text-xs font-bold"
                            style={{ color: DARK }}
                          >
                            Select
                          </p>

                          <p className="text-[10px] text-slate-400 mt-1">
                            Single or multiple files
                          </p>
                        </div>

                        {/* ACTION BRANCH */}

                        <div className="ml-4 pl-4 border-l">
                          <div style={{ borderColor: BORDER }}>

                            {/* DOWNLOAD */}

                            <div className="relative mb-5">
                              <span
                                className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor: SOFT,
                                  border: `1px solid ${DARK}`,
                                }}
                              />

                              <p
                                className="text-[11px] font-bold"
                                style={{ color: DARK }}
                              >
                                Download
                              </p>

                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {[
                                  "Progress",
                                  "Complete",
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

                            {/* DELETE */}

                            <div className="relative">
                              <span
                                className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full"
                                style={{
                                  backgroundColor: "#fff",
                                  border: `1px solid ${DARK}`,
                                }}
                              />

                              <p
                                className="text-[11px] font-bold"
                                style={{ color: DARK }}
                              >
                                Delete
                              </p>

                              <div className="ml-4 mt-3 pl-4 border-l">
                                <div style={{ borderColor: BORDER }}>

                                  <div className="relative mb-4">
                                    <span
                                      className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full"
                                      style={{
                                        backgroundColor: "#fff",
                                        border: `1px solid ${DARK}`,
                                      }}
                                    />

                                    <p
                                      className="text-[10px] font-bold"
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

                                  <div className="relative">
                                    <span
                                      className="absolute -left-[20px] top-1.5 w-2 h-2 rounded-full"
                                      style={{
                                        backgroundColor: SOFT,
                                        border: `1px solid ${DARK}`,
                                      }}
                                    />

                                    <p
                                      className="text-[10px] font-bold"
                                      style={{ color: DARK }}
                                    >
                                      Complete
                                    </p>
                                  </div>

                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* UNDERSTAND */}

                  <div className="relative">

                    <div className="flex items-center gap-2 relative z-10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: DARK,
                          color: "#fff",
                        }}
                      >
                        <span className="text-xs font-black">04</span>
                      </div>

                      <p
                        className="text-sm font-black"
                        style={{ color: DARK }}
                      >
                        Understand
                      </p>
                    </div>

                    <div className="relative mt-7 ml-5 pl-5 border-l">
                      <div style={{ borderColor: BORDER }}>

                        {[
                          {
                            title: "History",
                            text: "Previous actions",
                          },
                          {
                            title: "Notes",
                            text: "File-specific context",
                          },
                          {
                            title: "Metadata",
                            text: "Modified by · Date",
                          },
                        ].map((item, index) => (
                          <div
                            key={item.title}
                            className={index === 0 ? "relative mb-5" : "relative mb-5"}
                          >
                            <span
                              className="absolute -left-[24px] top-1.5 w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: "#fff",
                                border: `1px solid ${
                                  index === 0 ? DARK : BORDER
                                }`,
                              }}
                            />

                            <p
                              className="text-xs font-bold"
                              style={{ color: DARK }}
                            >
                              {item.title}
                            </p>

                            <p className="text-[10px] text-slate-400 mt-1">
                              {item.text}
                            </p>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>

                  {/* COMPLETE */}

                  <div className="relative">

                    <div className="flex items-center gap-2 relative z-10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: DARK,
                          color: "#fff",
                        }}
                      >
                        <span className="text-xs font-black">05</span>
                      </div>

                      <p
                        className="text-sm font-black"
                        style={{ color: DARK }}
                      >
                        Complete
                      </p>
                    </div>

                    <div className="relative mt-7 ml-5 pl-5 border-l">
                      <div style={{ borderColor: BORDER }}>

                        {[
                          "Success",
                          "Cancelled",
                          "Recovered",
                        ].map((item, index) => (
                          <div
                            key={item}
                            className="relative mb-5"
                          >
                            <span
                              className="absolute -left-[24px] top-1.5 w-2 h-2 rounded-full"
                              style={{
                                backgroundColor:
                                  index === 0 ? SOFT : "#fff",
                                border: `1px solid ${DARK}`,
                              }}
                            />

                            <p
                              className="text-xs font-bold"
                              style={{ color: DARK }}
                            >
                              {item}
                            </p>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* WORKFLOW KEY */}

            <div
              className="mt-8 pt-5 flex flex-wrap gap-x-6 gap-y-2"
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
        </Section>

        {/* =====================================================
            05 — DESIGN
        ===================================================== */}

        <Section dark>

          <ChapterHeader
            number="05"
            label="Design"
            heading="Designing the workflow, not just the file list."
          />

          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mb-10">
            The redesign turned a fragmented set of file actions into a
            workflow built for scale.
          </p>

          {/* WIREFRAMES */}

          <ContentLabel>
            Wireframes
          </ContentLabel>

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

          {/* SCREENS */}

          <ContentLabel>
            Design screens
          </ContentLabel>

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
                style={{
                  border: `1px solid ${BORDER}`,
                }}
              >
                <img
                  src="/images/practice/practice-current-state-audit.png"
                  alt="Current state"
                  className="w-full block"
                />

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
                style={{
                  border: `1px solid ${BORDER}`,
                }}
              />
            </div>

          </div>

          {/* DESIGN RESPONSE */}

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
              The redesigned experience made high-volume file management
              faster, more visible, and easier to control.
            </p>
          </div>

        </Section>

        {/* =====================================================
            06 — VALIDATION
        ===================================================== */}

        <Section>

          <ChapterHeader
            number="06"
            label="Validation"
            heading="Testing the experience before engineering pickup."
          />

          <p className="text-base text-slate-500 leading-relaxed max-w-2xl mb-10">
            Wireframes were tested across core file-management tasks to assess
            clarity, efficiency, and confidence.
          </p>

          <div
            className="grid md:grid-cols-[0.8fr_1.2fr] rounded-2xl overflow-hidden"
            style={{
              border: `1px solid ${BORDER}`,
            }}
          >

            {/* SCORE */}

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

              <p
                className="text-xs mt-1"
                style={{ color: "#94a3b8" }}
              >
                Baseline: 11/25
              </p>
            </div>

            {/* TAKEAWAY */}

            <div
              className="px-7 py-8 flex items-center"
              style={{
                backgroundColor: "#ffffff",
              }}
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
                  with clearer feedback when actions succeeded or were
                  cancelled.
                </p>

              </div>
            </div>

          </div>

        </Section>

        {/* =====================================================
            07 — OUTCOMES
        ===================================================== */}

        <Section>

          <ChapterHeader
            number="07"
            label="Outcomes"
            heading="The redesigned experience made file management faster and more efficient."
          />

          <div
            className="grid grid-cols-3 mt-2"
            style={{
              borderTop: `1px solid ${BORDER}`,
              borderLeft: `1px solid ${BORDER}`,
            }}
          >

            {[
              {
                value: "40%",
                label: "Less time managing files",
              },
              {
                value: "30%",
                label: "Faster document intake",
              },
              {
                value: "6",
                label: "Capabilities shipped",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="px-6 py-7"
                style={{
                  borderRight: `1px solid ${BORDER}`,
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >

                <p
                  className="text-5xl font-black tracking-[-0.04em] leading-none tabular-nums"
                  style={{ color: DARK }}
                >
                  {metric.value}
                </p>

                <p
                  className="text-sm font-bold leading-snug mt-4 max-w-[150px]"
                  style={{ color: "#64748b" }}
                >
                  {metric.label}
                </p>

              </div>
            ))}

          </div>

          <p
            className="text-xs leading-relaxed mt-5 max-w-2xl"
            style={{ color: "#94a3b8" }}
          >
            40% less time and 30% faster intake were validated through
            comparative task testing using the same task set across the
            existing and redesigned workflows.
          </p>

        </Section>

        {/* =====================================================
            08 — LEARNINGS
        ===================================================== */}

        <Section>

          <ChapterHeader
            number="08"
            label="Learnings"
            heading="The goal isn’t to simplify the system. It’s to simplify how people work within it."
          />

          <div className="max-w-3xl">

            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-7">
              Practice Files already had the capabilities users needed. The
              challenge was structuring them around the way work actually
              happens, so users could move through complex tasks without
              having to manage that complexity themselves.
            </p>

            <div
              className="rounded-xl px-6 py-5"
              style={{
                backgroundColor: SOFT,
                border: `1px solid ${BORDER}`,
              }}
            >

              <p
                className="text-base font-black leading-[1.4] tracking-tight"
                style={{ color: DARK }}
              >
                That distinction simplifying the experience without
                oversimplifying the system is the principle I’d carry into
                future enterprise products.
              </p>

            </div>

          </div>

        </Section>

        {/* =====================================================
            NAV FOOTER
        ===================================================== */}

        <div className="border-t border-gray-100 py-10 px-6">

          <div className="max-w-4xl mx-auto flex justify-between items-center">

            <Link
              href="/work/athenatext"
              className="text-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              ← athenaText
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:opacity-60 transition-opacity"
            >
              Back to all work →
            </Link>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}