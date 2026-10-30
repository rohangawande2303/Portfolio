"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, AlertCircle, Send, Sparkles } from "lucide-react";

interface ContactSlideoverProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactSlideover({ isOpen, onClose }: ContactSlideoverProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");

  // Endpoint loaded from environment variable with fallback to preserve existing behavior
  const GOOGLE_SCRIPT_URL =
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
    "https://script.google.com/macros/s/AKfycbyefKfO-DfucLmJlHw9rTTzef0hHtt_e4aqIc3gOhEp-4fR5YA4Uj9oHTGEm66B_hWQ/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const submitData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      countryCode: "+91",
      phone: formData.phone.trim() || "Not provided",
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(submitData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => {
          setSubmitStatus("");
          onClose();
        }, 4000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
          />

          {/* Slide-over Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[480px] md:w-[520px] bg-[var(--background)] border-l border-[var(--border-color-strong)] z-[100] shadow-2xl overflow-y-auto text-[var(--text-primary)]"
          >
            <div className="p-6 sm:p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-8 pb-4 border-b border-[var(--border-color)]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] font-semibold">
                      06 — INQUIRY
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight mt-1 text-[var(--text-primary)]">
                      Let&apos;s talk.
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                      Direct inquiry form · Sent straight to Rohan&apos;s inbox
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close dialog"
                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[var(--surface-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider block">
                      Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name or company"
                      className="w-full bg-[var(--surface-card)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[#7C83FF] focus:ring-1 focus:ring-[#7C83FF] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider block">
                      Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="name@example.com"
                      className="w-full bg-[var(--surface-card)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[#7C83FF] focus:ring-1 focus:ring-[#7C83FF] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider block">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99676 53844"
                      className="w-full bg-[var(--surface-card)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[#7C83FF] focus:ring-1 focus:ring-[#7C83FF] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[var(--text-muted)] uppercase tracking-wider block">
                      Project Details <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell me about your product requirements, scope, or timeline..."
                      className="w-full bg-[var(--surface-card)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[#7C83FF] focus:ring-1 focus:ring-[#7C83FF] transition-all resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-start gap-3 text-emerald-400 text-xs sm:text-sm font-sans"
                    >
                      <CheckCircle size={18} className="shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Message sent successfully!</div>
                        <div className="text-emerald-400/80 text-xs mt-0.5">
                          Thanks for reaching out. I will review your requirements and respond within 24 hours.
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl flex items-start gap-3 text-rose-400 text-xs sm:text-sm font-sans"
                    >
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Could not send message.</div>
                        <div className="text-rose-400/80 text-xs mt-0.5">
                          Please email directly at{" "}
                          <a href="mailto:rohangawande2303@gmail.com" className="underline font-semibold">
                            rohangawande2303@gmail.com
                          </a>{" "}
                          or call{" "}
                          <a href="tel:+919967653844" className="underline font-semibold">
                            +91-9967653844
                          </a>
                          .
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 min-h-[48px] bg-[var(--accent-pill)] hover:opacity-90 text-[var(--accent-pill-text)] font-bold text-sm rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Direct Info Footer */}
              <div className="pt-6 border-t border-[var(--border-color)] text-xs text-[var(--text-muted)] space-y-1 font-mono mt-8">
                <div className="flex items-center gap-1.5 text-[var(--text-primary)] font-semibold">
                  <Sparkles size={12} className="text-[#7C83FF]" />
                  <span>Rohan Gawande · Full Stack Developer</span>
                </div>
                <p>Direct: rohangawande2303@gmail.com</p>
                <p>Phone: +91 9967653844 · Mumbai, India</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
