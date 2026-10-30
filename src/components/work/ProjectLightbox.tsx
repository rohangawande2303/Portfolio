"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ProjectGalleryItem } from "@/types/project";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ProjectLightboxProps {
  gallery?: ProjectGalleryItem[];
  slug: string;
}

export default function ProjectLightbox({ gallery, slug }: ProjectLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const images = gallery || [];
  const hasImages = images.length > 0;

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % images.length);
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
  }, [selectedIndex, images.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation: Arrow keys & Escape
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold 50px
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  if (!hasImages) {
    return (
      <div className="w-full space-y-4">
        {/* Placeholder block with TODO comment and visible-in-dev note */}
        {process.env.NODE_ENV === "development" && (
          <div className="p-6 rounded-3xl border border-dashed border-[var(--border-color)] bg-[var(--surface-card)] text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] font-semibold block">
              // TODO: Screenshot Gallery
            </span>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              Drop screenshot assets into public/images/projects/{slug}/ and declare in gallery array.
            </p>
            <p className="text-[11px] font-mono text-[var(--text-muted)]/60">
              (This developer note is visible in dev mode only)
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] font-semibold">
          SCREENSHOT GALLERY ({images.length})
        </h3>
        <span className="font-mono text-xs text-[var(--text-muted)]">
          Click any image to enlarge
        </span>
      </div>

      {/* Thumbnails Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--border-color)] hover:border-[#7C83FF]/60 bg-[var(--surface-card)] transition-all cursor-pointer shadow-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-mono flex items-center gap-1.5">
                <Maximize2 size={12} />
                <span>Enlarge</span>
              </span>
            </div>
            {item.caption && (
              <div className="absolute bottom-0 inset-x-0 p-2.5 bg-black/70 backdrop-blur-md text-white text-[11px] font-mono truncate">
                {item.caption}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
          >
            {/* Top Bar */}
            <div
              className="flex justify-between items-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-mono text-xs text-white/70">
                {selectedIndex + 1} / {images.length}
              </span>

              <button
                type="button"
                onClick={handleClose}
                aria-label="Close Lightbox"
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Active Image */}
            <div
              className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] sm:h-[75vh]">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Prev Button */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous screenshot"
                  className="absolute left-2 sm:left-4 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next screenshot"
                  className="absolute right-2 sm:right-4 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-all cursor-pointer shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div
              className="text-center z-10 pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-mono text-white/90">
                {images[selectedIndex].caption || images[selectedIndex].alt}
              </p>
              <p className="text-[11px] font-mono text-white/40 mt-1">
                Use Arrow Keys or Swipe to navigate · Esc to close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
