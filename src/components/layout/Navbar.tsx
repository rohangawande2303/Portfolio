"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { easeExpo } from "@/lib/motion";

interface NavbarProps {
  onOpenContact: () => void;
}

const NAV_ITEMS = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("work");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll direction detection (hide on down, show on up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }

      // If at bottom of page, highlight contact
      if (
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        setActiveSection("contact");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Scroll-spy with IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-30% 0px -40% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Navigate to homepage anchor from subpages like /work/[slug]
      window.location.href = `/#${id}`;
    }
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };

  return (
    <>
      {/* Floating Center Navbar Header */}
      <motion.header
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: easeExpo }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none"
      >
        <div
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-4 py-2.5 rounded-full transition-all duration-300 max-w-5xl w-full border ${
            isScrolled
              ? "bg-[var(--surface)]/85 backdrop-blur-xl border-[var(--border-color-strong)] shadow-xl shadow-black/10"
              : "bg-[var(--surface)]/60 backdrop-blur-md border-[var(--border-color)]"
          }`}
        >
          {/* Left: Monogram Logo */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2.5 group cursor-pointer min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] rounded-full px-1"
          >
            <div className="w-9 h-9 rounded-full bg-[var(--surface-card)] border border-[var(--border-color)] flex items-center justify-center font-mono font-bold text-xs text-[var(--accent-pill)] group-hover:scale-105 transition-transform">
              RG
            </div>
            <span className="hidden sm:inline font-bold tracking-tight text-sm text-[var(--text-primary)]">
              Rohan Gawande
            </span>
          </button>

          {/* Center: Desktop Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--surface-card)]/70 p-1 rounded-full border border-[var(--border-color)]">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 min-h-[40px] text-xs font-medium rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] ${
                    isActive
                      ? "text-[var(--accent-pill-text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 bg-[var(--accent-pill)] rounded-full z-0"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Resume Button */}
            <a
              href="/Rohan-Gawande-Resume.pdf"
              download="Rohan-Gawande-Resume.pdf"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded-full border border-[var(--border-color)] text-xs font-mono font-medium hover:border-[var(--accent-pill)] hover:text-[var(--accent-pill)] transition-all cursor-pointer bg-[var(--surface-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              <span>Resume</span>
              <Download size={13} />
            </a>

            {/* Let's Talk Button */}
            <button
              onClick={onOpenContact}
              className="px-4 py-2.5 min-h-[44px] rounded-full text-xs font-semibold bg-[var(--accent-pill)] text-[var(--accent-pill-text)] hover:opacity-90 transition-opacity cursor-pointer shadow-sm flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              Let&apos;s talk
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] rounded-full hover:bg-[var(--surface-card)] transition-colors text-[var(--text-primary)] cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[var(--background)]/95 backdrop-blur-2xl flex flex-col justify-between p-8"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-card)] border border-[var(--border-color)] flex items-center justify-center font-mono font-bold text-sm text-[var(--accent-pill)]">
                RG
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-[var(--border-color)] hover:bg-[var(--surface-card)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-4 my-auto">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07, ease: easeExpo }}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center justify-between text-left group cursor-pointer min-h-[48px] py-2 px-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                >
                  <span className="font-mono text-xs text-[var(--text-muted)] mr-4">
                    0{index + 1}
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-pill)] transition-colors flex-1">
                    {item.label}
                  </span>
                  <ArrowUpRight
                    size={24}
                    className="text-[var(--text-muted)] group-hover:text-[var(--accent-pill)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </motion.button>
              ))}
            </nav>

            {/* Bottom Actions */}
            <div className="space-y-4 pt-6 border-t border-[var(--border-color)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-muted)]">THEME</span>
                <ThemeToggle />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="/Rohan-Gawande-Resume.pdf"
                  download="Rohan-Gawande-Resume.pdf"
                  className="py-3 px-4 min-h-[44px] rounded-full border border-[var(--border-color)] text-xs font-mono text-center flex items-center justify-center gap-2 hover:border-[var(--accent-pill)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                >
                  <span>Resume</span>
                  <Download size={14} />
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="py-3 px-4 min-h-[44px] rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] text-xs font-semibold text-center cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                >
                  Let&apos;s talk →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
