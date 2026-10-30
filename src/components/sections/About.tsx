"use client";

import dynamic from "next/dynamic";
import QuickFacts from "@/components/about/QuickFacts";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useReducedMotion } from "motion/react";
import { revealVariants } from "@/lib/motion";

const LanyardCard = dynamic(() => import("@/components/about/LanyardCard"), {
  ssr: false,
  loading: () => (
    <div className="relative flex flex-col items-center justify-start w-full max-w-[340px] mx-auto py-4 animate-pulse">
      <div className="w-9 h-20 bg-neutral-800/40 rounded-t" />
      <div className="w-[300px] sm:w-[320px] aspect-[1/1.55] rounded-2xl bg-neutral-900/40 border border-white/10 -mt-2 flex items-center justify-center">
        <span className="font-mono text-xs text-white/30 tracking-widest uppercase">
          DEVELOPER ID
        </span>
      </div>
    </div>
  ),
});

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="w-full py-28 border-t border-[var(--border-color)] scroll-mt-24">
      {/* Section Header */}
      <motion.div
        variants={revealVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C83FF] uppercase tracking-widest mb-3">
            <span>03 — ABOUT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-[var(--text-primary)] leading-[1.05]">
            Hi, I&apos;m{" "}
            <span className="font-serif italic font-normal text-[var(--accent-highlight)]">
              Rohan.
            </span>
          </h2>
        </div>

        <p className="text-sm md:text-base text-[var(--text-muted)] max-w-md font-light leading-relaxed">
          Full stack developer from Mumbai specializing in production-ready web apps, scalable APIs, and automated digital products.
        </p>
      </motion.div>

      {/* 3-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio Paragraphs & Social Buttons (5 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <p className="text-base sm:text-lg text-[var(--text-primary)] font-normal leading-relaxed">
            I am a self-taught full stack engineer with hands-on experience building complete solutions from requirements to cloud deployment. Every project in my portfolio is architected end-to-end by me.
          </p>

          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-light">
            I specialize in relational data modeling with PostgreSQL, building robust high-throughput APIs with FastAPI and Node.js, and creating fluid, mobile-first web interfaces with Next.js and Tailwind CSS.
          </p>

          {/* Action Links with accessible 44px min tap targets */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="/Rohan-Gawande-Resume.pdf"
              download="Rohan-Gawande-Resume.pdf"
              className="px-5 py-3 min-h-[44px] rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              <span>Resume</span>
              <Download size={14} />
            </a>

            <a
              href="https://github.com/rohangawande2303"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohan's GitHub Profile"
              className="px-4 py-3 min-h-[44px] rounded-full border border-[var(--border-color)] bg-[var(--surface-card)] text-[var(--text-primary)] text-xs font-mono hover:border-[var(--accent-pill)] transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              <span>GitHub</span>
              <FaGithub size={14} />
            </a>

            <a
              href="https://linkedin.com/in/rohan-gawande-5821b1145"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rohan's LinkedIn Profile"
              className="px-4 py-3 min-h-[44px] rounded-full border border-[var(--border-color)] bg-[var(--surface-card)] text-[var(--text-primary)] text-xs font-mono hover:border-[var(--accent-pill)] transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              <span>LinkedIn</span>
              <FaLinkedin size={14} />
            </a>
          </div>
        </div>

        {/* Center Column: Lanyard Hanging ID Card (4 cols) */}
        <div className="lg:col-span-4 flex justify-center py-4">
          <LanyardCard />
        </div>

        {/* Right Column: Quick Facts & Quote (4 cols) */}
        <div className="lg:col-span-4 h-full">
          <QuickFacts />
        </div>
      </div>
    </section>
  );
}
