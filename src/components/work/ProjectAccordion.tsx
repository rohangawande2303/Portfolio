"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Project } from "@/types/project";
import VisualMockup from "./VisualMockup";
import { ArrowUpRight, ArrowRight, Plus, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { defaultSpring, easeExpo } from "@/lib/motion";

interface ProjectAccordionProps {
  projects: Project[];
}

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation across accordion items
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % projects.length;
      setActiveIndex(nextIndex);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (index - 1 + projects.length) % projects.length;
      setActiveIndex(prevIndex);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveIndex(index);
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* ─── DESKTOP HORIZONTAL ACCORDION (hidden on mobile, visible md+) ─── */}
      <div
        role="tablist"
        aria-label="Featured Projects Accordion"
        className="hidden md:flex gap-3 h-[580px] w-full"
      >
        {projects.map((project, index) => {
          const isActive = activeIndex === index;
          const displayNum = String(index + 1).padStart(2, "0");

          return (
            <motion.div
              key={project.slug}
              role="tab"
              id={`tab-${project.slug}`}
              aria-selected={isActive}
              aria-expanded={isActive}
              aria-controls={`panel-${project.slug}`}
              tabIndex={0}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              layout
              transition={{
                layout: { type: "spring", stiffness: 220, damping: 28 },
              }}
              style={{
                flex: isActive ? "5 5 0%" : "0.7 0.7 0%",
              }}
              className={`relative rounded-3xl overflow-hidden cursor-pointer border transition-colors select-none outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] ${
                isActive
                  ? "bg-[var(--surface-card)] border-[var(--border-color-strong)] shadow-2xl"
                  : "bg-[var(--surface)] hover:bg-[var(--surface-card)] border-[var(--border-color)] hover:border-[var(--border-color-strong)]"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isActive ? (
                  // ─── EXPANDED CARD VIEW ───
                  <motion.div
                    key="expanded"
                    id={`panel-${project.slug}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${project.slug}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: easeExpo }}
                    className="w-full h-full p-8 lg:p-10 flex flex-col lg:flex-row gap-8 justify-between overflow-y-auto"
                  >
                    {/* Left Details Column */}
                    <div className="flex-1 flex flex-col justify-between space-y-6 max-w-xl">
                      <div>
                        {/* Meta header */}
                        <div className="flex items-center gap-3 text-xs font-mono mb-3">
                          <span className="font-bold text-[#7C83FF]">
                            {displayNum}
                          </span>
                          <span className="text-[var(--text-muted)]">·</span>
                          <span className="uppercase tracking-widest text-[var(--text-muted)]">
                            {project.category}
                          </span>
                          <span className="text-[var(--text-muted)]">·</span>
                          <span className="text-[var(--text-muted)]">
                            {project.year}
                          </span>
                        </div>

                        {/* Title (Clickable to /work/[slug]) */}
                        <Link href={`/work/${project.slug}`} className="group/title block">
                          <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] leading-snug group-hover/title:text-[#7C83FF] transition-colors">
                            {project.title}
                          </h3>
                        </Link>

                        {/* Description */}
                        <p className="text-sm text-[var(--text-muted)] mt-3 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Bullet Highlights */}
                        <div className="mt-5 space-y-2">
                          {project.highlights.slice(0, 4).map((h, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]"
                            >
                              <CheckCircle2
                                size={14}
                                className="text-[#7C83FF] shrink-0 mt-0.5"
                              />
                              <span className="leading-tight">{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Chips */}
                        <div className="flex flex-wrap gap-1.5 mt-5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-full bg-[var(--surface)] border border-[var(--border-color)] text-[11px] font-mono text-[var(--text-muted)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action CTA Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 min-h-[44px] rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                          >
                            <span>Live demo</span>
                            <ArrowUpRight size={14} />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 min-h-[44px] rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-primary)] text-xs font-mono hover:border-[var(--accent-pill)] transition-colors flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                          >
                            <span>Source code</span>
                            <FaGithub size={14} />
                          </a>
                        )}

                        <Link
                          href={`/work/${project.slug}`}
                          className="px-5 py-3 min-h-[44px] rounded-full border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-pill)] text-xs font-mono transition-colors flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                        >
                          <span>Case study</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                    {/* Right Visual Panel (Clickable to /work/[slug]) */}
                    <Link
                      href={`/work/${project.slug}`}
                      data-cursor-text="VIEW"
                      className="flex-1 flex items-center justify-center cursor-pointer group/mockup"
                    >
                      <VisualMockup project={project} />
                    </Link>
                  </motion.div>
                ) : (
                  // ─── COLLAPSED STRIP VIEW ───
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full flex flex-col justify-between items-center py-8 px-2 select-none"
                  >
                    {/* Index Number */}
                    <span className="font-mono text-sm font-bold text-[var(--text-muted)]">
                      {displayNum}
                    </span>

                    {/* Rotated Title 90 deg */}
                    <div className="flex-1 flex items-center justify-center my-4 overflow-hidden">
                      <span
                        className="font-bold text-sm tracking-wide text-[var(--text-muted)] uppercase whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {project.title}
                      </span>
                    </div>

                    {/* Expand icon pill */}
                    <div className="w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent-pill)] group-hover:border-[var(--accent-pill)] transition-colors">
                      <Plus size={16} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ─── MOBILE VERTICAL ACCORDION (hidden on md+, visible on mobile) ─── */}
      <div className="md:hidden flex flex-col gap-3 w-full max-w-full overflow-hidden">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;
          const displayNum = String(index + 1).padStart(2, "0");

          return (
            <div
              key={project.slug}
              className={`w-full rounded-2xl border transition-colors overflow-hidden ${
                isActive
                  ? "bg-[var(--surface-card)] border-[var(--border-color-strong)] shadow-lg"
                  : "bg-[var(--surface)] border-[var(--border-color)]"
              }`}
            >
              {/* Header Strip Toggle */}
              <button
                onClick={() => setActiveIndex(isActive ? -1 : index)}
                aria-expanded={isActive}
                aria-controls={`mobile-panel-${project.slug}`}
                className="w-full min-h-[52px] flex items-center justify-between p-4 text-left cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#7C83FF]">
                    {displayNum}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                      {project.category}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-7 h-7 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] transition-transform duration-300 ${
                    isActive ? "rotate-45 text-[#7C83FF]" : ""
                  }`}
                >
                  <Plus size={14} />
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    id={`mobile-panel-${project.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easeExpo }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 border-t border-[var(--border-color)] space-y-4">
                      {/* Visual Mockup (Clickable to /work/[slug]) */}
                      <Link href={`/work/${project.slug}`} className="block pt-3 cursor-pointer">
                        <VisualMockup project={project} />
                      </Link>

                      {/* Description */}
                      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-1">
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-[var(--text-primary)]"
                          >
                            <CheckCircle2
                              size={13}
                              className="text-[#7C83FF] shrink-0 mt-0.5"
                            />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 pt-2">
                        {project.tech.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full bg-[var(--surface)] text-[10px] font-mono text-[var(--text-muted)]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action CTA Buttons */}
                      <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-[var(--border-color)]">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 min-h-[44px] rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] text-xs font-semibold flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                          >
                            <span>Live demo</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 min-h-[44px] rounded-full border border-[var(--border-color)] text-xs font-mono flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                          >
                            <span>Source code</span>
                            <FaGithub size={13} />
                          </a>
                        )}

                        <Link
                          href={`/work/${project.slug}`}
                          className="px-4 py-2.5 min-h-[44px] rounded-full border border-[var(--border-color)] text-xs font-mono flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                        >
                          <span>Case study</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
