"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring
  const springConfig = { damping: 25, stiffness: 250 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if cursor should be disabled: touch device or prefers-reduced-motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, [role='button'], [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[999] rounded-full transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isHovered
            ? "w-2 h-2 bg-white"
            : "w-1.5 h-1.5 bg-[#7C83FF]"
        }`}
      />

      {/* Trailing Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? (cursorText ? 2.5 : 1.6) : 1,
          borderColor: isHovered ? "rgba(124, 131, 255, 0.7)" : "rgba(124, 131, 255, 0.35)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={`fixed top-0 left-0 pointer-events-none z-[998] rounded-full border flex items-center justify-center transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorText
            ? "w-20 h-20 bg-[#7C83FF]/20 backdrop-blur-sm border-[#7C83FF]"
            : "w-8 h-8"
        }`}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
