"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { ArrowRight, Download, ChevronDown, Terminal, Activity, Sparkles, Database, ShieldCheck } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import CountUp from "@/components/ui/CountUp";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll parallax for giant watermark
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.8], [0.045, 0.01]);

  // Mouse parallax for abstract composition (moves opposite to mouse)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const cardX = useSpring(mouseX, springConfig);
  const cardY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      // 14px shift opposite to cursor
      mouseX.set(-xPercent * 14);
      mouseY.set(-yPercent * 12);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden select-none"
    >
      {/* ─── 01. GIANT FAINT WATERMARK "ROHAN" ─── */}
      <motion.div
        style={{ y: watermarkY, opacity: watermarkOpacity }}
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 w-full text-center"
      >
        <span className="font-[family-name:var(--font-inter)] font-black text-[24vw] leading-none tracking-tighter text-[var(--text-primary)] block">
          ROHAN
        </span>
      </motion.div>

      {/* ─── 02. MAIN HERO TWO-COLUMN CONTENT ─── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 my-auto">
        {/* Left Column: Headline, Bio & Buttons */}
        <div className="flex-1 space-y-7 max-w-2xl text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--surface-card)] border border-[var(--border-color)] text-xs font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[var(--text-muted)] font-medium">Available for freelance &amp; full-time</span>
          </div>

          {/* Identity Label */}
          <div className="font-mono text-xs uppercase tracking-widest text-[#7C83FF]">
            ROHAN GAWANDE · FULL STACK DEVELOPER
          </div>

          {/* Headline: Sans heavy for "Full Stack", only "Developer." in Instrument Serif italic */}
          <h1 className="font-[family-name:var(--font-inter)] text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-[-0.04em] leading-[1.04] text-[var(--text-primary)]">
            Full Stack <br />
            <span className="font-serif italic font-normal text-[var(--accent-highlight)]">
              Developer.
            </span>
          </h1>

          {/* Subline */}
          <p className="text-lg sm:text-xl text-[var(--text-muted)] font-light leading-relaxed max-w-xl">
            I turn ideas into production-ready products from scalable SaaS platforms and AI-powered systems to complete client applications, websites and more.
          </p>

          {/* Action Pills (Magnetic) */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <MagneticButton>
              <a
                href="#project"
                className="px-6 py-3.5 min-h-[44px] rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] font-semibold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer shadow-lg shadow-black/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
              >
                <span>Explore work</span>
                <ArrowRight size={16} />
              </a>
            </MagneticButton>

            <MagneticButton>
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 min-h-[44px] rounded-full border border-[var(--border-color)] bg-[var(--surface-card)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--accent-pill)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
              >
                Let&apos;s talk
              </button>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/Rohan-Gawande-Resume.pdf"
                download="Rohan-Gawande-Resume.pdf"
                className="px-5 py-3.5 min-h-[44px] rounded-full border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] font-mono text-xs hover:border-[var(--accent-pill)] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
              >
                <span>Resume</span>
                <Download size={13} />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: Abstract Code & Product Stack (NO PHOTO) */}
        <div className="relative flex-1 flex items-center justify-center lg:justify-end w-full min-h-[380px] sm:min-h-[440px]">
          <motion.div
            style={{ x: shouldReduceMotion ? 0 : cardX, y: shouldReduceMotion ? 0 : cardY }}
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="relative w-full max-w-[420px] h-[380px] flex items-center justify-center"
          >
            {/* Card 1: Top-Left Floating Terminal Snippet */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 -left-2 sm:-left-6 w-[270px] sm:w-[290px] rounded-2xl p-4 bg-[#121218]/90 backdrop-blur-xl border border-white/10 shadow-2xl z-10 font-mono text-[11px]"
            >
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[9px] text-white/40">
                  <Terminal size={11} />
                  <span>api.crm.internal</span>
                </div>
              </div>
              <div className="space-y-1.5 text-white/70">
                <p className="text-white/40">$ curl -X POST /v1/auth/login</p>
                <p className="text-emerald-400">&gt; 200 OK · Schema Validated</p>
                <p className="text-[#7C83FF]">&gt; RBAC: Level 5 Verified</p>
              </div>
            </motion.div>

            {/* Card 2: Center Dashboard Wireframe */}
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-24 -right-2 sm:-right-4 w-[280px] sm:w-[310px] rounded-2xl p-5 bg-[var(--surface-card)]/90 backdrop-blur-xl border border-[var(--border-color-strong)] shadow-2xl z-20 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity size={15} className="text-[#7C83FF]" />
                  <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                    System Architecture
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#7C83FF]/15 text-[#7C83FF] text-[10px] font-mono">
                  RBAC Validated
                </span>
              </div>

              {/* Abstract decorative equalizer bars (no fake numbers) */}
              <div className="h-10 flex items-end gap-1.5 pt-2" aria-hidden="true">
                {[40, 60, 80, 50, 90, 70, 85, 60, 75, 55].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#7C83FF]/30 to-[#7C83FF]/80"
                  />
                ))}
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)] pt-1">
                <span>PostgreSQL schema-per-tenant</span>
                <span className="text-[var(--text-primary)] font-medium">FastAPI + Neon</span>
              </div>
            </motion.div>

            {/* Card 3: Bottom Monogram & Tech Cluster */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-4 sm:left-8 w-[290px] sm:w-[320px] rounded-2xl p-4 bg-[#121218]/95 backdrop-blur-xl border border-white/15 shadow-2xl z-30 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7C83FF] to-[#4338CA] flex items-center justify-center font-mono font-black text-xl text-white shadow-lg shrink-0">
                RG
              </div>
              <div className="space-y-1 truncate">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-white">Full Stack Stack</span>
                  <Sparkles size={12} className="text-[#F3E9C6]" />
                </div>
                <div className="flex flex-wrap gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/80">Next.js 16</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/80">FastAPI</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-white/80">Gemini AI</span>
                </div>
              </div>
            </motion.div>

            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7C83FF]/25 via-transparent to-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* ─── 03. STATS ROW (COUNT-UP METRICS) & SCROLL CUE ─── */}
      {/* <div className="relative z-10 w-full max-w-6xl mx-auto pt-12 mt-12 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-start md:items-end gap-6"> */}
      {/* Count-Up Metrics */}
      {/* <div className="grid grid-cols-3 gap-6 sm:gap-12">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--text-primary)]">
              <CountUp end={10} suffix="+" />
            </div>
            <div className="text-xs font-mono text-[var(--text-muted)] mt-1">
              Live client projects
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--text-primary)]">
              <CountUp end={5} suffix="-Level" />
            </div>
            <div className="text-xs font-mono text-[var(--text-muted)] mt-1">
              RBAC multi-tenant CRM
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[var(--text-primary)]">
              AI + ML
            </div>
            <div className="text-xs font-mono text-[var(--text-muted)] mt-1">
              Privacy-first Gemini layer
            </div>
          </div>
        </div> */}

      {/* Scroll Cue */}
      {/* <a
          href="#work"
          aria-label="Scroll to Work section"
          className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors group cursor-pointer"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown
            size={15}
            className="group-hover:translate-y-1 transition-transform animate-bounce"
          />
        </a> */}
      {/* </div> */}
    </section>
  );
}
