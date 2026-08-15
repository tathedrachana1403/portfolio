"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-gray-900 tracking-tight"
        >
          Rachana Tathed
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#work"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <a
            href="mailto:tathedrachana14@gmail.com"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
          <a
            href="/Rachana_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold px-4 py-1.5 rounded-full transition-colors"
            style={{ backgroundColor: "#3b0764", color: "white" }}
          >
            Resume ↗
          </a>
        </nav>
        <button
          className="md:hidden text-gray-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link
            href="/#work"
            className="text-sm text-gray-700"
            onClick={() => setOpen(false)}
          >
            Work
          </Link>
          <Link
            href="/#about"
            className="text-sm text-gray-700"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <a
            href="mailto:tathedrachana14@gmail.com"
            className="text-sm text-gray-700"
          >
            Contact
          </a>
          <a
            href="/Rachana_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold"
            style={{ color: "#3b0764" }}
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
}
