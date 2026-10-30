"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { easeExpo } from "@/lib/motion";

interface ContactProps {
  onOpenContact: () => void;
}

export default function Contact({ onOpenContact }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const email = "rohangawande2303@gmail.com";
  const phone = "+91-9967653844";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailLetters = email.split("");

  return (
    <section
      id="contact"
      className="w-full py-28 border-t border-[var(--border-color)] scroll-mt-24 select-none"
    >
      {/* ─── 01. SECTION HEADER ─── */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: easeExpo }}
        className="space-y-4 max-w-3xl mb-16"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] flex items-center gap-2">
          <span>06 — CONTACT</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C83FF]" />
          <span>START A PROJECT</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.05]">
          Let&apos;s build{" "}
          <span className="font-serif italic font-normal text-[var(--accent-highlight)]">
            something.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-[var(--text-muted)] font-light leading-relaxed max-w-2xl">
          Have a product in mind, need a full-stack engineer for your team, or want to build a client platform from scratch? Reach out directly.
        </p>
      </motion.div>

      {/* ─── 02. HUGE EMAIL LINK WITH TEXT-ROLL HOVER EFFECT ─── */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: easeExpo }}
        className="mb-14"
      >
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-3 flex items-center gap-2">
          <Mail size={13} className="text-[#7C83FF]" />
          <span>DIRECT INBOX</span>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label={`Email Rohan at ${email}`}
            className="group relative inline-flex items-center overflow-hidden py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] rounded-lg"
          >
            {/* Split character rolling effect */}
            <div className="relative flex overflow-hidden font-mono font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--text-primary)]">
              {emailLetters.map((char, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden inline-flex flex-col h-[1.15em]"
                >
                  {/* Top Character */}
                  <span
                    style={{
                      transform: isHovered && !shouldReduceMotion ? "translateY(-100%)" : "translateY(0%)",
                      transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.012}s`,
                    }}
                    className="inline-block transition-transform duration-300"
                  >
                    {char}
                  </span>

                  {/* Bottom Character (Rolls up into view) */}
                  <span
                    aria-hidden="true"
                    style={{
                      transform: isHovered && !shouldReduceMotion ? "translateY(-100%)" : "translateY(0%)",
                      transition: `transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.012}s`,
                    }}
                    className="inline-block text-[#7C83FF] transition-transform duration-300"
                  >
                    {char}
                  </span>
                </div>
              ))}
            </div>

            <ArrowUpRight
              size={32}
              className="ml-3 text-[var(--text-muted)] group-hover:text-[#7C83FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 hidden sm:block"
            />
          </a>

          {/* Copy Email Button */}
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="px-4 py-2.5 min-h-[44px] min-w-[44px] rounded-xl bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[var(--text-primary)] text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* ─── 03. CONTACT DETAILS & ACTION BAR ─── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 border-t border-[var(--border-color)]">
        {/* Left: Contact Info Grid (7 cols) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone */}
          <a
            href={`tel:${phone.replace(/-/g, "")}`}
            aria-label={`Call Rohan at ${phone}`}
            className="p-4 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[#7C83FF]/50 transition-colors flex items-center gap-3.5 group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
          >
            <div className="w-10 h-10 rounded-xl bg-[#7C83FF]/10 text-[#7C83FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Phone size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                PHONE
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)] font-mono">
                {phone}
              </span>
            </div>
          </a>

          {/* Location */}
          <div className="p-4 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-color)] flex items-center gap-3.5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                LOCATION
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                Mumbai, India
              </span>
            </div>
          </div>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/rohan-gawande-5821b1145"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rohan's LinkedIn Profile"
            className="p-4 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[#7C83FF]/50 transition-colors flex items-center justify-between group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FaLinkedin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                  NETWORK
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  LinkedIn Profile
                </span>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rohangawande2303"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Rohan's GitHub Profile"
            className="p-4 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-color)] hover:border-[#7C83FF]/50 transition-colors flex items-center justify-between group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-500/10 text-[var(--text-primary)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FaGithub size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                  CODEBASE
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  GitHub Profile
                </span>
              </div>
            </div>
            <ArrowUpRight size={16} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)]" />
          </a>
        </div>

        {/* Right: Big "Start a project" Action (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-center items-start md:items-end gap-3">
          <p className="text-xs font-mono text-[var(--text-muted)] text-left md:text-right">
            Have a clear scope or just an initial idea? Let&apos;s map out the architecture.
          </p>

          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 min-h-[48px] rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] font-bold text-base hover:opacity-90 transition-all duration-200 cursor-pointer shadow-xl shadow-black/15 flex items-center justify-center gap-2 group active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
          >
            <Sparkles size={18} className="text-[#F3E9C6] group-hover:rotate-12 transition-transform" />
            <span>Start a project</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
