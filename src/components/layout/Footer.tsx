"use client";

import { ArrowUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-primary)] transition-colors py-16 px-6 md:px-12 mt-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--surface-card)] border border-[var(--border-color)] flex items-center justify-center font-mono font-bold text-sm text-[var(--accent-pill)]">
              RG
            </div>
            <div>
              <h3 className="font-bold text-base tracking-tight">Rohan Gawande</h3>
              <p className="text-xs font-mono text-[var(--text-muted)]">
                Full Stack Developer · Mumbai, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-[var(--text-muted)]">
            <a
              href="https://github.com/rohangawande2303"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-[var(--text-primary)] transition-colors min-h-[44px] inline-flex items-center px-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/rohan-gawande-5821b1145"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-[var(--text-primary)] transition-colors min-h-[44px] inline-flex items-center px-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://wa.me/9967653844"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-[var(--text-primary)] transition-colors min-h-[44px] inline-flex items-center px-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              WhatsApp ↗
            </a>
            <a
              href="mailto:rohangawande2303@gmail.com"
              aria-label="Send email to rohangawande2303@gmail.com"
              className="hover:text-[var(--text-primary)] transition-colors min-h-[44px] inline-flex items-center px-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              rohangawande2303@gmail.com
            </a>
          </nav>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] font-mono">
          <p>© {new Date().getFullYear()} Rohan Gawande. Built with Next.js 16 & React 19.</p>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-full border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[var(--accent-pill)] hover:text-[var(--text-primary)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
