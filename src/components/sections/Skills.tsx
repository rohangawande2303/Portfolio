"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { skills, skillFamilies, coreConcepts } from "@/data/skills";
import { Skill, SkillFamily } from "@/types/skill";
import SkillTile, { familyTheme } from "@/components/skills/SkillTile";
import DetailPanel from "@/components/skills/DetailPanel";
import { Sparkles, Cpu } from "lucide-react";
import { revealVariants } from "@/lib/motion";

export default function Skills() {
  const [selectedFamily, setSelectedFamily] = useState<SkillFamily | "All">("All");
  const [activeSkill, setActiveSkill] = useState<Skill>(skills[0]); // default to JavaScript
  const shouldReduceMotion = useReducedMotion();

  // Handle family filter change
  const handleFamilyClick = (family: SkillFamily | "All") => {
    setSelectedFamily(family);
    if (family !== "All") {
      const firstInFamily = skills.find((s) => s.family === family);
      if (firstInFamily) {
        setActiveSkill(firstInFamily);
      }
    }
  };

  return (
    <section id="skills" className="w-full py-28 border-t border-[var(--border-color)] scroll-mt-24 select-none">
      {/* ─── 01. SECTION HEADER ─── */}
      <motion.div
        variants={revealVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-4 max-w-3xl mb-12"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] flex items-center gap-2">
          <span>— SKILLS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C83FF]" />
          <span>PRODUCTION STACK</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
          The periodic table{" "}
          <span className="font-serif italic font-normal text-[var(--accent-highlight)]">
            of my stack.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[var(--text-muted)] font-light leading-relaxed">
          Hover a tile to see what I use it for, or pick a family to light it up. Every description is drawn strictly from my production architecture.
        </p>
      </motion.div>

      {/* ─── 02. FAMILY FILTER CHIPS ─── */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10 pb-2">
        {/* All Chip */}
        <button
          type="button"
          onClick={() => handleFamilyClick("All")}
          className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs font-mono font-medium border transition-all duration-200 cursor-pointer flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] ${selectedFamily === "All"
              ? "bg-[var(--accent-pill)] text-[var(--accent-pill-text)] border-[var(--accent-pill)] shadow-md"
              : "bg-[var(--surface-card)] text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
            }`}
        >
          <span>All Elements</span>
          <span className="text-[10px] opacity-70">({skills.length})</span>
        </button>

        {/* 6 Family Chips */}
        {skillFamilies.map((family) => {
          const count = skills.filter((s) => s.family === family).length;
          const theme = familyTheme[family];
          const isActive = selectedFamily === family;

          return (
            <button
              key={family}
              type="button"
              onClick={() => handleFamilyClick(isActive ? "All" : family)}
              style={{
                borderColor: isActive ? theme.text : undefined,
                boxShadow: isActive ? `0 0 16px ${theme.glow}` : undefined,
              }}
              className={`px-4 py-2.5 min-h-[44px] rounded-full text-xs font-mono font-medium border transition-all duration-200 cursor-pointer flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] ${isActive
                  ? `${theme.badge} ring-1 ring-offset-1 ring-offset-[#0B0B0F]`
                  : "bg-[var(--surface-card)] text-[var(--text-muted)] border-[var(--border-color)] hover:border-[var(--border-color-strong)] hover:text-[var(--text-primary)]"
                }`}
            >
              <span
                style={{ backgroundColor: theme.text }}
                className="w-2 h-2 rounded-full shrink-0"
              />
              <span>{family}</span>
              <span className="text-[10px] opacity-60 font-mono">({count})</span>
            </button>
          );
        })}
      </div>

      {/* ─── 03. MAIN PERIODIC TABLE GRID & DESKTOP STICKY DETAIL PANEL ─── */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
        {/* Left Column: Periodic Grid */}
        <div className="flex-1 w-full">
          {/*
            Grid columns:
            Mobile: 3 tiles per row (grid-cols-3)
            Tablet: 4 to 6 columns
            Desktop: 8 columns (grid-cols-8)
          */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-2.5">
            {skills.map((skill, index) => {
              const isDimmed =
                selectedFamily !== "All" && skill.family !== selectedFamily;
              const isSelected = activeSkill.name === skill.name;

              return (
                <SkillTile
                  key={skill.name}
                  skill={skill}
                  index={index}
                  isSelected={isSelected}
                  isDimmed={isDimmed}
                  onSelect={(s) => setActiveSkill(s)}
                />
              );
            })}
          </div>
        </div>

        {/* Right Column (Desktop Only): Sticky Hover Detail Panel */}
        <div className="hidden lg:block w-[380px] xl:w-[410px] shrink-0 sticky top-28 h-fit">
          <DetailPanel skill={activeSkill} />

          {/* Quick instructions under detail panel */}
          <div className="mt-4 px-3 py-2.5 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] flex items-center gap-2.5 text-xs font-mono text-[var(--text-muted)]">
            <Sparkles size={14} className="text-[#7C83FF] shrink-0" />
            <span>Hover any element in the grid to inspect its production purpose.</span>
          </div>
        </div>
      </div>

      {/* ─── 04. MOBILE DETAIL PANEL (Below grid on mobile) ─── */}
      <div className="block lg:hidden mt-8 w-full">
        <DetailPanel skill={activeSkill} />
        <p className="text-center font-mono text-[11px] text-[var(--text-muted)] mt-2">
          Tap any of the 3-per-row tiles above to inspect details.
        </p>
      </div>

      {/* ─── 05. CORE ENGINEERING CONCEPTS CHIPS ─── */}
      <div className="mt-16 pt-8 border-t border-[var(--border-color)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#7C83FF] uppercase tracking-wider font-semibold">
            <Cpu size={14} />
            <span>Core Engineering &amp; Architectural Concepts</span>
          </div>
          <span className="text-[11px] font-mono text-[var(--text-muted)]">
            Production patterns verified across 10+ live deployments
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {coreConcepts.map((concept) => (
            <span
              key={concept}
              className="px-3.5 py-1.5 rounded-xl bg-[var(--surface-card)] border border-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] hover:border-[#7C83FF]/40 transition-colors"
            >
              #{concept}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
