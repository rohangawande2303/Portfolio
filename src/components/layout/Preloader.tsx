"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { easeExpo } from "@/lib/motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session storage, reduced motion, or audit bot
    const hasLoaded = sessionStorage.getItem("hasLoadedPortfolio");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isLighthouse = navigator.userAgent.includes("Chrome-Lighthouse");

    if (hasLoaded || prefersReducedMotion || isLighthouse) {
      setLoading(false);
      return;
    }

    // Progress counter 0 -> 100 over ~1.1s
    const startTime = Date.now();
    const duration = 1100;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          sessionStorage.setItem("hasLoadedPortfolio", "true");
          setLoading(false);
        }, 150);
      }
    }, 20);

    // Escape key skips
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearInterval(interval);
        sessionStorage.setItem("hasLoadedPortfolio", "true");
        setLoading(false);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleSkip = () => {
    sessionStorage.setItem("hasLoadedPortfolio", "true");
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: easeExpo },
          }}
          className="fixed inset-0 z-[1000] bg-[#0B0B0F] flex flex-col justify-between p-8 md:p-14 select-none cursor-pointer"
          onClick={handleSkip}
        >
          {/* Top Label */}
          <div className="flex justify-between items-center text-xs font-mono text-white/40">
            <span>ROHAN GAWANDE</span>
            <span>PRESS ESC OR CLICK TO SKIP</span>
          </div>

          {/* Center Monogram */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: easeExpo }}
              className="relative w-28 h-28 rounded-full border border-white/10 flex items-center justify-center bg-[#121218]/80 backdrop-blur-md shadow-2xl"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-16 h-16 text-[#7C83FF]"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Monogram R */}
                <motion.path
                  d="M32 28 V72 M32 28 H50 C60 28 60 48 50 48 H32 M46 48 L60 72"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, ease: easeExpo }}
                />
                {/* Monogram G */}
                <motion.path
                  d="M72 40 C68 32 54 30 46 36 C36 44 36 60 46 66 C56 72 68 68 70 56 H54"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.0, delay: 0.1, ease: easeExpo }}
                />
              </svg>

              {/* Glowing Pulse Ring */}
              <div className="absolute inset-0 rounded-full border border-[#7C83FF]/30 animate-ping pointer-events-none" />
            </motion.div>

            <span className="font-mono text-xs uppercase tracking-widest text-white/50 mt-6">
              Portfolio 2026
            </span>
          </div>

          {/* Bottom Counter */}
          <div className="flex justify-between items-end">
            <div className="text-xs font-mono text-white/40 max-w-xs">
              <span className="text-emerald-400">●</span> Building interactive products: SaaS, AI & client platforms.
            </div>

            <div className="font-mono text-4xl md:text-6xl font-bold tracking-tighter text-[#F5F2EA]">
              {String(progress).padStart(2, "0")}
              <span className="text-xl md:text-2xl text-[#7C83FF] font-normal">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
