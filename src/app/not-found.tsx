import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--text-primary)] px-6 relative overflow-hidden select-none">
      {/* Giant faint watermark "404" */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
      >
        <span className="font-mono font-black text-[30vw] leading-none tracking-tighter text-[var(--text-primary)] opacity-[0.03]">
          404
        </span>
      </div>

      <div className="relative z-10 max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-[var(--surface-card)] border border-[var(--border-color)] shadow-2xl">
        {/* Monogram Badge */}
        <div className="w-14 h-14 rounded-2xl bg-[#7C83FF]/15 border border-[#7C83FF]/30 mx-auto flex items-center justify-center font-mono font-black text-xl text-[#7C83FF] shadow-inner">
          RG
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#7C83FF] font-semibold block">
            ERROR 404 · ROUTE NOT FOUND
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Lost in the stack.
          </h1>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
            The page you are looking for doesn&apos;t exist, was moved, or has a different URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[var(--accent-pill)] text-[var(--accent-pill-text)] text-xs font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <Home size={14} />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-primary)] text-xs font-mono hover:border-[#7C83FF] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles size={14} className="text-[#7C83FF]" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
