"use client";

export default function QuickFacts() {
  const facts = [
    { label: "Based in", value: "Mumbai, India" },
    { label: "Studying", value: "BCA" },
    { label: "Batch", value: "2026" },
    { label: "Focus", value: "Full stack · AI · Web" },
    { label: "Experience", value: "Freelance, 2024 – present" },
    { label: "Open to", value: "Full-time & freelance" },
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-8 select-none">
      {/* Quick Facts Table */}
      <div className="space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-[#7C83FF]">
          QUICK FACTS
        </span>

        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] divide-y divide-[var(--border-color)] overflow-hidden shadow-sm">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex justify-between items-center px-4 sm:px-5 py-3 text-xs font-mono"
            >
              <span className="text-[var(--text-muted)] uppercase text-[11px]">
                {fact.label}
              </span>
              <span className="font-semibold text-[var(--text-primary)] text-right">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Serif Italic Quote */}
      <div className="pt-4 border-t border-[var(--border-color)]">
        <blockquote className="font-serif italic text-2xl sm:text-3xl text-[var(--accent-highlight)] leading-snug">
          &ldquo;From the database to the last pixel.&rdquo;
        </blockquote>
        <span className="block font-mono text-[11px] text-[var(--text-muted)] mt-2">
          — Product Engineering Philosophy
        </span>
      </div>
    </div>
  );
}
