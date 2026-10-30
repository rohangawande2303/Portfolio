"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import { experienceItems } from "@/data/experience";
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { easeExpo } from "@/lib/motion";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress for drawing the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="w-full py-28 border-t border-[var(--border-color)] scroll-mt-24 select-none"
    >
      {/* ─── 01. SECTION HEADER ─── */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: easeExpo }}
        className="space-y-4 max-w-3xl mb-16"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] flex items-center gap-2">
          <span>05 — EXPERIENCE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C83FF]" />
          <span>CAREER &amp; EDUCATION</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
          Where I&apos;ve{" "}
          <span className="font-serif italic font-normal text-[var(--accent-highlight)]">
            worked.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[var(--text-muted)] font-light leading-relaxed">
          Production software engineering, end-to-end client delivery, and computer applications coursework.
        </p>
      </motion.div>

      {/* ─── 02. VERTICAL TIMELINE ─── */}
      <div className="relative pl-6 sm:pl-10 md:pl-12 max-w-4xl">
        {/* Background Track Line */}
        <div
          aria-hidden="true"
          className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-[2px] bg-[var(--border-color)]"
        />

        {/* Scroll-Drawn Progress Line */}
        <motion.div
          aria-hidden="true"
          style={{
            height: shouldReduceMotion ? "100%" : lineHeight,
          }}
          className="absolute left-2.5 sm:left-4 top-4 w-[2px] bg-gradient-to-b from-[#7C83FF] via-[#A855F7] to-[#7C83FF] shadow-[0_0_12px_rgba(124,131,255,0.6)] origin-top"
        />

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16">
          {experienceItems.map((item, index) => {
            const isWork = item.type === "work";
            const Icon = isWork ? Briefcase : GraduationCap;

            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: easeExpo,
                }}
                className="relative group"
              >
                {/* Timeline Node Dot */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[30px] sm:-left-[39px] md:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[var(--background)] border-2 border-[#7C83FF] flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-110"
                >
                  <div className="w-2 h-2 rounded-full bg-[#7C83FF] animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[var(--border-color-strong)] shadow-xl transition-all duration-300 space-y-5">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--border-color)] pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-[#7C83FF]/10 text-[#7C83FF]">
                          <Icon size={16} />
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-primary)] tracking-tight">
                          {item.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">
                          {item.company}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#7C83FF]/10 border border-[#7C83FF]/20 text-xs font-mono font-semibold text-[#7C83FF]">
                      <Calendar size={12} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3">
                    {item.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm sm:text-base text-[var(--text-muted)] font-normal leading-relaxed"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-[#7C83FF] shrink-0 mt-1"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech / Subject Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-[var(--surface)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
