"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";
import { Project } from "@/types/project";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSlideover from "@/components/ContactSlideover";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  User,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Award,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { easeExpo } from "@/lib/motion";

const ProjectLightbox = dynamic(() => import("@/components/work/ProjectLightbox"), {
  ssr: false,
});

interface ProjectDetailViewProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

export default function ProjectDetailView({
  project,
  prevProject,
  nextProject,
}: ProjectDetailViewProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const overviewText = project.longDescription || project.description;
  const featuresList = project.features || project.highlights;

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--background)] text-[var(--text-primary)] transition-colors">
      {/* Floating Navbar (navigates back to /#id) */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Detail Container with Page Transition */}
      <motion.main
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeExpo }}
        className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-16"
      >
        {/* ─── 01. BACK LINK & HEADER ─── */}
        <div className="space-y-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[#7C83FF] transition-colors group cursor-pointer min-h-[44px] py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] rounded-lg"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to all projects</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-[#7C83FF]/10 text-[#7C83FF] border border-[#7C83FF]/20 font-semibold">
                {project.category}
              </span>
              {project.isClientSite && (
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">
                  Commissioned Client Project
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.06]">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-[var(--text-muted)] font-light leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </div>

          {/* Meta Row & Action Buttons */}
          <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-[var(--text-muted)]">
              <div className="flex items-center gap-1.5">
                <User size={14} className="text-[#7C83FF]" />
                <span className="text-[var(--text-primary)] font-medium">
                  {project.role}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#7C83FF]" />
                <span>{project.year}</span>
              </div>

              {project.duration && (
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#7C83FF]" />
                  <span>{project.duration}</span>
                </div>
              )}
            </div>

            {/* Live & GitHub Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 min-h-[44px] rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
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
                  className="px-5 py-3 min-h-[44px] rounded-full border border-[var(--border-color)] bg-[var(--surface-card)] text-[var(--text-primary)] text-xs font-mono hover:border-[var(--accent-pill)] transition-colors flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                >
                  <span>Source code</span>
                  <FaGithub size={14} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ─── 02. LARGE HERO COVER IMAGE ─── */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-[var(--border-color-strong)] bg-[var(--surface-card)] shadow-2xl">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center font-mono font-black text-3xl text-[var(--text-muted)]">
              {project.title}
            </div>
          )}
        </div>

        {/* ─── 03. OVERVIEW & SCOPE ─── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C83FF] uppercase tracking-widest font-semibold">
            <Layers size={14} />
            <span>PROJECT OVERVIEW</span>
          </div>
          <p className="text-base sm:text-lg text-[var(--text-primary)] font-normal leading-relaxed">
            {overviewText}
          </p>
        </div>

        {/* ─── 04. KEY FEATURES ─── */}
        <div className="space-y-6 pt-6 border-t border-[var(--border-color)]">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Key Architecture &amp; Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuresList.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-color)] flex items-start gap-3.5"
              >
                <CheckCircle2
                  size={18}
                  className="text-[#7C83FF] shrink-0 mt-0.5"
                />
                <span className="text-sm text-[var(--text-primary)] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 05. TECH STACK ─── */}
        <div className="space-y-4 pt-6 border-t border-[var(--border-color)]">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            Technologies &amp; Tools Used
          </h2>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ─── 06. CHALLENGES & ENGINEERING SOLUTIONS (Only if provided) ─── */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-[var(--border-color)]">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
              <AlertTriangle size={14} />
              <span>ENGINEERING CHALLENGES</span>
            </div>

            <div className="space-y-3">
              {project.challenges.map((challenge, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border-color)] text-sm text-[var(--text-muted)] leading-relaxed flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-[#7C83FF] font-bold mt-0.5">
                    0{cIdx + 1}.
                  </span>
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── 07. RESULTS & IMPACT (Only if provided) ─── */}
        {project.results && project.results.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-[var(--border-color)]">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
              <Award size={14} />
              <span>DELIVERY &amp; OUTCOMES</span>
            </div>

            <div className="space-y-3">
              {project.results.map((result, rIdx) => (
                <div
                  key={rIdx}
                  className="p-4 rounded-xl bg-[var(--surface-card)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] leading-relaxed flex items-start gap-3"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-400 shrink-0 mt-0.5"
                  />
                  <span>{result}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── 08. SCREENSHOTS GALLERY & LIGHTBOX ─── */}
        <div className="pt-6 border-t border-[var(--border-color)]">
          <ProjectLightbox gallery={project.gallery} slug={project.slug} />
        </div>

        {/* ─── 09. PREVIOUS / NEXT PROJECT NAVIGATION ─── */}
        <div className="pt-12 border-t border-[var(--border-color)] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[#7C83FF]/50 transition-colors flex flex-col justify-between group"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] group-hover:text-[#7C83FF] transition-colors">
                <ArrowLeft size={13} />
                <span>PREVIOUS PROJECT</span>
              </div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mt-2 group-hover:text-[#7C83FF] transition-colors truncate">
                {prevProject.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/work/${nextProject.slug}`}
              className="p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[#7C83FF]/50 transition-colors flex flex-col justify-between items-end text-right group"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] group-hover:text-[#7C83FF] transition-colors">
                <span>NEXT PROJECT</span>
                <ArrowRight size={13} />
              </div>
              <h4 className="text-lg font-bold text-[var(--text-primary)] mt-2 group-hover:text-[#7C83FF] transition-colors truncate">
                {nextProject.title}
              </h4>
            </Link>
          )}
        </div>
      </motion.main>

      {/* Footer */}
      <Footer />

      {/* Slideover Modal */}
      <ContactSlideover
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
