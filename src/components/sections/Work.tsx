"use client";

import { Project } from "@/types/project";
import ProjectAccordion from "@/components/work/ProjectAccordion";
import { motion, useReducedMotion } from "motion/react";
import { revealVariants } from "@/lib/motion";

interface WorkSectionProps {
  projects: Project[];
}

export default function Work({ projects }: WorkSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Primary accordion shows only featured projects (excluding hidden)
  const featuredProjects = projects.filter((p) => p.featured && !p.hidden);

  return (
    <section id="work" className="w-full py-24 scroll-mt-24 select-none">
      {/* Section Header */}
      <motion.div
        variants={revealVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C83FF] uppercase tracking-widest mb-3">
            <span>— WORK</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C83FF]" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.04em] text-[var(--text-primary)] leading-[1.05]">
            Things I&apos;ve{" "}
            <span className="font-serif italic font-normal text-[var(--accent-highlight)]">
              built.
            </span>
          </h2>
        </div>

        <p className="text-sm md:text-base text-[var(--text-muted)] max-w-md font-light leading-relaxed">
          Flagship multi-tenant SaaS platforms, clinical telemedicine systems, and bespoke digital commerce solutions.
        </p>
      </motion.div>

      {/* Main Accordion for Featured Projects */}
      <ProjectAccordion projects={featuredProjects} />
    </section>
  );
}
