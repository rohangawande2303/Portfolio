"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { revealVariants, easeExpo } from "@/lib/motion";

interface AllProjectsProps {
  projects: Project[];
}

export default function AllProjects({ projects }: AllProjectsProps) {
  const shouldReduceMotion = useReducedMotion();

  // Show all non-hidden projects, sorted by order
  const displayProjects = projects
    .filter((p) => !p.hidden)
    .sort((a, b) => a.order - b.order);

  return (
    <section
      id="projects"
      className="w-full py-28 border-t border-[var(--border-color)] scroll-mt-24 select-none"
    >
      {/* ─── 01. SECTION HEADER ─── */}
      <motion.div
        variants={revealVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-4 max-w-3xl mb-14"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] flex items-center gap-2">
          <span>— PROJECTS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C83FF]" />
          <span>COMPLETE ARCHIVE</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
          All{" "}
          <span className="font-serif italic font-normal text-[var(--accent-highlight)]">
            projects.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[var(--text-muted)] font-light leading-relaxed">
          Every web application, production SaaS platform, and commissioned client system built from end to end.
        </p>
      </motion.div>

      {/* ─── 02. RESPONSIVE GRID (3 col desktop, 2 tablet, 1 mobile) ─── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayProjects.map((project, index) => {
          return (
            <motion.div
              key={project.slug}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
                ease: easeExpo,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="group relative rounded-3xl bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[#7C83FF]/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Primary Card Link wrapping the whole card */}
              <Link
                href={`/work/${project.slug}`}
                data-cursor-text="VIEW"
                aria-label={`View ${project.title}`}
                className="flex-1 flex flex-col cursor-pointer"
              >
                {/* Cover Image Container */}
                <div className="relative w-full aspect-[16/10] bg-[var(--surface)] overflow-hidden border-b border-[var(--border-color)]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-mono font-black text-2xl text-[var(--text-muted)]">
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>
                  )}

                  {/* Gradient Overlay for subtle contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/90">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {project.isClientSite && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-[10px] font-mono font-semibold text-amber-300">
                          Client
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/80">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[#7C83FF] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-[var(--surface)] border border-[var(--border-color)] text-[10px] font-mono text-[var(--text-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] font-mono text-[var(--text-muted)]">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              {/* Action Buttons Row (Outside <a> to allow direct clicks) */}
              <div className="px-5 sm:px-6 pb-4 pt-2 border-t border-[var(--border-color)] flex items-center justify-between text-xs font-mono">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#7C83FF] hover:underline font-semibold min-h-[44px] py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] rounded-lg"
                >
                  <span>Case study</span>
                  <ArrowRight size={13} />
                </Link>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open live demo"
                      aria-label={`Open live demo for ${project.title}`}
                      className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-pill)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View source code on GitHub"
                      aria-label={`View source code for ${project.title} on GitHub`}
                      className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-pill)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                    >
                      <FaGithub size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
