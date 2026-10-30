"use client";

import { motion, AnimatePresence } from "motion/react";
import { Skill } from "@/types/skill";
import { familyTheme } from "./SkillTile";
import SkillIcon from "./SkillIcon";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface DetailPanelProps {
  skill: Skill;
  className?: string;
}

export default function DetailPanel({ skill, className = "" }: DetailPanelProps) {
  const theme = familyTheme[skill.family];
  const displayNum = String(skill.number).padStart(2, "0");

  return (
    <div
      className={`w-full rounded-3xl border border-[var(--border-color-strong)] bg-[var(--surface-card)] p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between ${className}`}
    >
      {/* Ambient background glow according to active family */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-25 transition-colors duration-500"
        style={{ backgroundColor: theme.text }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.22 }}
          className="space-y-5 relative z-10"
        >
          {/* Top Row: Atomic # and Family Badge */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[var(--text-muted)] tracking-wider">
              ELEMENT #{displayNum}
            </span>

            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${theme.badge}`}
            >
              {skill.family}
            </span>
          </div>

          {/* Large Symbol & Real Logo Showcase */}
          <div className="flex items-center gap-4 pt-1">
            <div
              style={{
                backgroundColor: theme.bg,
                borderColor: theme.border,
                boxShadow: `0 10px 30px ${theme.glow}`,
              }}
              className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl border flex flex-col items-center justify-center shrink-0 group"
            >
              {/* Chemical Symbol */}
              <span
                className={`font-black text-3xl sm:text-4xl tracking-tight leading-none ${theme.textClass}`}
              >
                {skill.symbol}
              </span>
              {/* Real Logo Overlay */}
              <div
                className={`absolute top-2 right-2 opacity-75 ${theme.textClass}`}
              >
                <SkillIcon name={skill.name} size={15} />
              </div>
            </div>

            <div className="min-w-0">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight truncate">
                {skill.name}
              </h3>
              <p className="font-mono text-xs text-[var(--text-muted)] mt-1 flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                <span>Production Stack Component</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-[var(--border-color)]" />

          {/* What I Use It For (Facts strictly from Resume) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#7C83FF] uppercase tracking-wider font-semibold">
              <Sparkles size={14} />
              <span>WHAT I USE IT FOR</span>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed font-normal">
              {skill.description}
            </p>
          </div>

          {/* Verification Badge */}
          <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
            <CheckCircle2 size={14} className="shrink-0" />
            <span>Tested &amp; deployed in live portfolio projects</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
