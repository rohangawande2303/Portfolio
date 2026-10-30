"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface MoreProjectsGridProps {
  projects: Project[];
}

export default function MoreProjectsGrid({ projects }: MoreProjectsGridProps) {
  if (projects.length === 0) return null;

  return (
    <div className="w-full mt-16 pt-16 border-t border-[var(--border-color)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
            ARCHIVE · SELECTED PRODUCTIONS
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            More projects &amp; client platforms
          </h3>
        </div>
        <span className="font-mono text-xs text-[var(--text-muted)]">
          {projects.length} additional systems
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.slug}
            data-cursor-text="View"
            className="group rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[var(--accent-pill)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Image Preview */}
            <div className="relative w-full aspect-[16/10] bg-[#121218] overflow-hidden border-b border-[var(--border-color)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs font-mono font-medium flex items-center gap-1">
                  Explore details <ArrowRight size={13} />
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-2">
                  <span className="uppercase">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h4 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-pill)] transition-colors leading-snug">
                  {project.title}
                </h4>

                <p className="text-xs text-[var(--text-muted)] mt-2 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full bg-[var(--surface)] text-[10px] font-mono text-[var(--text-muted)] border border-[var(--border-color)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-[var(--border-color)] text-xs font-mono">
                  <Link
                    href={`/work/${project.slug}`}
                    className="hover:text-[var(--accent-pill)] flex items-center gap-1 font-medium transition-colors min-h-[44px] py-2 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] rounded-lg"
                  >
                    <span>Case study</span>
                    <ArrowRight size={13} />
                  </Link>

                  <div className="flex items-center gap-1.5">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo for ${project.title}`}
                        className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code for ${project.title}`}
                        className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
