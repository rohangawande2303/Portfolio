"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-white/10 flex items-center justify-center opacity-0 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = (resolvedTheme || theme) === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center border border-[var(--border-color)] bg-[var(--surface-card)] text-[var(--text-primary)] hover:border-[var(--accent-pill)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] ${className}`}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="flex items-center justify-center pointer-events-none"
      >
        {isDark ? (
          <Sun size={18} className="text-[#F3E9C6]" />
        ) : (
          <Moon size={18} className="text-[#1B1F3B]" />
        )}
      </motion.div>
    </button>
  );
}
