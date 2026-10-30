"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { CheckCircle2, RotateCw } from "lucide-react";

export default function LanyardCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHoverCapable, setIsHoverCapable] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const hasDraggedRef = useRef(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Check hover capability on mount
  useEffect(() => {
    const hoverQuery = window.matchMedia("(hover: hover)");
    setIsHoverCapable(hoverQuery.matches);

    const listener = (e: MediaQueryListEvent) => setIsHoverCapable(e.matches);
    hoverQuery.addEventListener("change", listener);
    return () => hoverQuery.removeEventListener("change", listener);
  }, []);

  // Drag physics & pendulum swing
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Spring physics for pendulum recoil
  const springX = useSpring(dragX, { stiffness: 140, damping: 14 });
  const springY = useSpring(dragY, { stiffness: 140, damping: 14 });

  // Rotate card slightly based on drag displacement
  const rotateZ = useTransform(springX, [-150, 150], [-18, 18]);

  // Flip rotation
  const flipRotation = isFlipped ? 180 : 0;

  // Shimmer effect based on mouse movement
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldReduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Hover flip handlers for desktop (hover: hover)
  const handleMouseEnter = () => {
    if (isHoverCapable && !isDragging && !hasDraggedRef.current) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHoverCapable && !isDragging && !hasDraggedRef.current) {
      setIsFlipped(false);
    }
  };

  // Tap handler for touch devices (guarded against dragging)
  const handleClick = (e: React.MouseEvent) => {
    if (hasDraggedRef.current || isDragging) {
      e.stopPropagation();
      return;
    }
    if (!isHoverCapable) {
      setIsFlipped((prev) => !prev);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-start select-none w-full max-w-[340px] mx-auto py-4">
      {/* ─── 01. LANYARD STRAP & METAL CLIP ─── */}
      <div className="flex flex-col items-center z-20 pointer-events-none">
        {/* Woven Strap */}
        <div className="w-9 h-20 bg-gradient-to-b from-[#181822] to-[#242434] border-x border-white/10 relative flex items-center justify-center shadow-lg">
          <div className="w-1.5 h-full bg-[#7C83FF]/40 border-x border-[#7C83FF]/20" />
          <span className="absolute text-[8px] font-mono tracking-widest text-white/50 -rotate-90 uppercase">
            ROHAN
          </span>
        </div>

        {/* Metal Swivel Clasp */}
        <div className="w-6 h-5 rounded-sm bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 shadow-md border border-white/30 flex items-center justify-center -mt-1">
          <div className="w-2.5 h-2.5 rounded-full bg-neutral-700/60" />
        </div>

        {/* Clip Ring */}
        <div className="w-8 h-4 border-2 border-neutral-400 rounded-b-full -mt-0.5 shadow-sm" />
      </div>

      {/* ─── 02. DRAGGABLE & SWINGING CARD CONTAINER ─── */}
      <motion.div
        ref={cardRef}
        drag={shouldReduceMotion ? false : true}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.4}
        onDragStart={() => {
          if (shouldReduceMotion) return;
          hasDraggedRef.current = true;
          setIsDragging(true);
        }}
        onDrag={(_, info) => {
          if (shouldReduceMotion) return;
          if (Math.hypot(info.offset.x, info.offset.y) > 5) {
            hasDraggedRef.current = true;
          }
        }}
        onDragEnd={(_, info) => {
          if (shouldReduceMotion) return;
          if (Math.hypot(info.offset.x, info.offset.y) > 5) {
            hasDraggedRef.current = true;
          }
          if (isHoverCapable && cardRef.current) {
            const isStillHovered = cardRef.current.matches(":hover");
            setIsFlipped(isStillHovered);
          }
          setTimeout(() => {
            setIsDragging(false);
            hasDraggedRef.current = false;
          }, 250);
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsFlipped((prev) => !prev);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Developer ID Card. On desktop hover to view back, on mobile tap to flip, or press Enter."
        style={{
          x: shouldReduceMotion ? 0 : springX,
          y: shouldReduceMotion ? 0 : springY,
          rotateZ: shouldReduceMotion ? 0 : rotateZ,
          perspective: 1200,
        }}
        className="relative w-[300px] sm:w-[320px] aspect-[1/1.55] cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF] -mt-2 z-10"
      >
        {/* 3D Flip Inner Card */}
        <motion.div
          animate={{ rotateY: flipRotation }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full rounded-2xl shadow-2xl transition-shadow duration-300"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ══════════════════════════════════════════════════
              CARD FRONT (DEVELOPER ID) - STRICTLY NO PHOTO
             ══════════════════════════════════════════════════ */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-b from-[#181822] via-[#121218] to-[#0D0D14] border border-white/15 p-6 flex flex-col justify-between overflow-hidden shadow-2xl text-[#F5F2EA]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Holographic Sheen Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20 mix-blend-color-dodge transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(124, 131, 255, 0.6) 0%, rgba(243, 233, 198, 0.3) 35%, transparent 70%)`,
              }}
            />

            {/* Top Lanyard Slot Punch Hole */}
            <div className="w-10 h-2.5 rounded-full bg-[#08080C] border border-white/20 mx-auto shadow-inner" />

            {/* Card Header */}
            <div className="flex justify-between items-center pt-2 border-b border-white/10 pb-3">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#7C83FF] block">
                  DEVELOPER ID · 2026
                </span>
                <span className="font-bold text-xs tracking-tight text-white">
                  FULL STACK &amp; SAAS
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Monogram Badge (Where photo would normally be) */}
            <div className="my-auto flex flex-col items-center">
              <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-[#252538] via-[#1A1A28] to-[#101018] border border-white/20 flex flex-col items-center justify-center shadow-xl group">
                {/* Holographic rim light */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#7C83FF]/40 to-[#F3E9C6]/20 blur-sm pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  <span className="font-mono font-black text-4xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-[#F5F2EA] to-[#7C83FF]">
                    RG
                  </span>
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#7C83FF] mt-1">
                    VERIFIED DEV
                  </span>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center mt-4">
                <h3 className="font-extrabold text-xl tracking-tight text-white">
                  ROHAN GAWANDE
                </h3>
                <p className="text-xs font-mono text-[#7C83FF] mt-0.5">
                  Full Stack Developer
                </p>
              </div>
            </div>

            {/* Fields Grid */}
            <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-white/[0.04] border border-white/5 text-center font-mono text-[10px]">
              <div>
                <span className="text-white/40 block text-[8px] uppercase">PROJECTS</span>
                <span className="font-semibold text-white">12+</span>
              </div>
              <div>
                <span className="text-white/40 block text-[8px] uppercase">OWNERSHIP</span>
                <span className="font-semibold text-white">100%</span>
              </div>
              <div>
                <span className="text-white/40 block text-[8px] uppercase">City</span>
                <span className="font-semibold text-white">Mumbai</span>
              </div>
            </div>

            {/* Bottom Barcode Strip & Flip Hint */}
            <div className="pt-2 border-t border-white/10 flex justify-between items-center">
              <div className="flex flex-col">
                {/* Visual Barcode */}
                <div className="flex items-center gap-[2px] h-5 opacity-70">
                  <div className="w-[3px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[2px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[4px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[2px] h-full bg-white" />
                  <div className="w-[3px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[2px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[3px] h-full bg-white" />
                </div>
                <span className="font-mono text-[8px] text-white/40 tracking-wider mt-0.5">
                  RG-2026-DEV-ID
                </span>
              </div>

              <div className="flex items-center gap-1 text-[9px] font-mono text-white/50 bg-white/[0.06] px-2 py-1 rounded-md">
                <span>{isHoverCapable ? "HOVER TO VIEW" : "TAP TO FLIP"}</span>
                <RotateCw size={10} />
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════
              CARD BACK ("WHAT I AM" CHECKLIST)
             ══════════════════════════════════════════════════ */}
          <div
            className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-b from-[#161622] via-[#101018] to-[#0B0B0F] border border-[#7C83FF]/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl text-[#F5F2EA]"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Top Lanyard Slot Punch Hole */}
            <div className="w-10 h-2.5 rounded-full bg-[#08080C] border border-white/20 mx-auto shadow-inner" />

            {/* Back Header */}
            <div className="flex justify-between items-center pt-2 border-b border-white/10 pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] font-bold">
                WHAT I AM
              </span>
              <span className="font-mono text-[10px] text-white/40">5/5 VERIFIED</span>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 my-auto">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#7C83FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-white">Full Stack Developer</div>
                  <div className="text-[11px] font-mono text-white/60">
                    Next.js · FastAPI · PostgreSQL
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#7C83FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-white">Product Builder</div>
                  <div className="text-[11px] font-mono text-white/60">
                    Requirements to deployment, solo
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#7C83FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-white">SaaS Architect</div>
                  <div className="text-[11px] font-mono text-white/60">
                    Multi-tenant, RBAC, secure APIs
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#7C83FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-white">AI &amp; LLM Integrator</div>
                  <div className="text-[11px] font-mono text-white/60">
                    Privacy-first AI features
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#7C83FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-xs text-white">Freelancer</div>
                  <div className="text-[11px] font-mono text-white/60">
                    10+ live client projects
                  </div>
                </div>
              </div>
            </div>

            {/* Back Footer */}
            <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-white/40">
              <span>SECURITY LEVEL: 05</span>
              <span>{isHoverCapable ? "LEAVE TO FLIP BACK" : "TAP TO FLIP BACK"} ↺</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
