"use client";

import { motion } from "motion/react";
import { Skill, SkillFamily } from "@/types/skill";
import SkillIcon from "./SkillIcon";

interface SkillTileProps {
  skill: Skill;
  isSelected: boolean;
  isDimmed: boolean;
  onSelect: (skill: Skill) => void;
  index: number;
}

// Colors tailored by family for periodic table aesthetics with AA contrast in both themes
export const familyTheme: Record<
  SkillFamily,
  {
    bg: string;
    border: string;
    text: string;
    textClass: string;
    badge: string;
    glow: string;
    dot: string;
  }
> = {
  Languages: {
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.3)",
    text: "#D97706",
    textClass: "text-amber-800 dark:text-amber-400",
    badge: "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30",
    glow: "rgba(245, 158, 11, 0.2)",
    dot: "bg-amber-500",
  },
  Frontend: {
    bg: "rgba(14, 165, 233, 0.08)",
    border: "rgba(14, 165, 233, 0.3)",
    text: "#0284C7",
    textClass: "text-sky-800 dark:text-sky-400",
    badge: "bg-sky-500/15 text-sky-800 dark:text-sky-300 border-sky-500/30",
    glow: "rgba(14, 165, 233, 0.2)",
    dot: "bg-sky-500",
  },
  Backend: {
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.3)",
    text: "#059669",
    textClass: "text-emerald-800 dark:text-emerald-400",
    badge: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30",
    glow: "rgba(16, 185, 129, 0.2)",
    dot: "bg-emerald-500",
  },
  Databases: {
    bg: "rgba(168, 85, 247, 0.08)",
    border: "rgba(168, 85, 247, 0.3)",
    text: "#7E22CE",
    textClass: "text-purple-800 dark:text-purple-400",
    badge: "bg-purple-500/15 text-purple-800 dark:text-purple-300 border-purple-500/30",
    glow: "rgba(168, 85, 247, 0.2)",
    dot: "bg-purple-500",
  },
  "DevOps & Tools": {
    bg: "rgba(244, 63, 94, 0.08)",
    border: "rgba(244, 63, 94, 0.3)",
    text: "#E11D48",
    textClass: "text-rose-800 dark:text-rose-400",
    badge: "bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30",
    glow: "rgba(244, 63, 94, 0.2)",
    dot: "bg-rose-500",
  },
  "AI & ML": {
    bg: "rgba(124, 131, 255, 0.1)",
    border: "rgba(124, 131, 255, 0.35)",
    text: "#4338CA",
    textClass: "text-indigo-800 dark:text-[#7C83FF]",
    badge: "bg-[#7C83FF]/15 text-indigo-800 dark:text-[#7C83FF] border-[#7C83FF]/30",
    glow: "rgba(124, 131, 255, 0.25)",
    dot: "bg-[#7C83FF]",
  },
};

export default function SkillTile({
  skill,
  isSelected,
  isDimmed,
  onSelect,
  index,
}: SkillTileProps) {
  const theme = familyTheme[skill.family];
  const displayNum = String(skill.number).padStart(2, "0");

  // Diagonal wave delay: (col + row) creates a diagonal sweep from top-left to bottom-right
  const col = index % 8;
  const row = Math.floor(index / 8);
  const diagonal = col + row;
  const diagonalDelay = diagonal * 0.032;

  return (
    <motion.button
      type="button"
      onMouseEnter={() => onSelect(skill)}
      onClick={() => onSelect(skill)}
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 16, scale: 0.88 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.4,
        delay: diagonalDelay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      aria-label={`${skill.name} (${skill.symbol}) - ${skill.family}`}
      style={{
        backgroundColor: isDimmed ? "var(--surface)" : theme.bg,
        borderColor: isSelected
          ? theme.text
          : isDimmed
          ? "var(--border-color)"
          : theme.border,
        boxShadow: isSelected ? `0 0 20px ${theme.glow}` : "none",
      }}
      className={`group relative w-full aspect-square rounded-xl p-2 sm:p-2.5 flex flex-col justify-between items-start border transition-all duration-300 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] ${
        isDimmed ? "opacity-25 grayscale-[50%]" : "opacity-100"
      } ${
        isSelected
          ? "ring-2 ring-offset-2 ring-offset-[#0B0B0F] z-10 scale-[1.03]"
          : "hover:border-opacity-100"
      }`}
    >
      {/* Top Bar: Atomic Number & Real Icon */}
      <div className="w-full flex items-center justify-between">
        <span className="font-mono text-[9px] sm:text-[10px] text-[var(--text-muted)] font-medium">
          {displayNum}
        </span>
        <div
          className={`opacity-60 group-hover:opacity-100 transition-opacity ${
            isDimmed ? "text-[var(--text-muted)]" : theme.textClass
          }`}
        >
          <SkillIcon name={skill.name} size={12} />
        </div>
      </div>

      {/* Center: Large Chemical Symbol */}
      <div className="w-full text-center my-auto">
        <span
          className={`font-black text-base sm:text-lg md:text-xl tracking-tight block leading-none transition-colors ${
            isDimmed ? "text-[var(--text-muted)]" : theme.textClass
          }`}
        >
          {skill.symbol}
        </span>
      </div>

      {/* Bottom: Skill Name */}
      <span className="w-full text-center font-mono text-[9px] sm:text-[10px] text-[var(--text-primary)] font-medium truncate block leading-tight">
        {skill.name}
      </span>
    </motion.button>
  );
}
