"use client";

import Image from "next/image";
import { Testimonial } from "@/types/testimonial";
import { Quote } from "lucide-react";

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
}

export default function TestimonialsMarquee({
  testimonials,
}: TestimonialsMarqueeProps) {
  // Duplicate for seamless infinite horizontal scroll
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="w-full py-24 border-t border-[var(--border-color)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
          <span>— ENDORSEMENTS</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-[var(--text-primary)]">
              Words from <span className="font-serif italic font-normal text-[var(--accent-highlight)]">partners.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-2">
              Feedback from founders, CEOs, and marketing directors I&apos;ve collaborated with.
            </p>
          </div>

          <span className="text-xs font-mono text-[var(--text-muted)] px-3 py-1 rounded-full border border-[var(--border-color)]">
            Hover to pause
          </span>
        </div>
      </div>

      {/* Marquee Scroller Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Gradient Mask for editorial fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

        <div className="marquee-container flex gap-6 w-max hover:[animation-play-state:paused]">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[320px] sm:w-[380px] p-6 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-color)] shadow-sm flex flex-col justify-between shrink-0 select-none hover:border-[var(--accent-pill)] transition-colors"
            >
              <div>
                <Quote size={20} className="text-[#7C83FF]/50 mb-3" />
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed italic line-clamp-5">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-5 mt-4 border-t border-[var(--border-color)]">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white/5 border border-[var(--border-color)] shrink-0 flex items-center justify-center p-1">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  ) : (
                    <span className="font-mono text-xs font-bold text-[var(--accent-pill)]">
                      {item.name.slice(0, 2)}
                    </span>
                  )}
                </div>

                <div className="truncate">
                  <div className="font-bold text-xs text-[var(--text-primary)] truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--text-muted)] truncate">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          animation: marquee 45s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
