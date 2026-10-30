"use client";

import Image from "next/image";
import { ClientSite } from "@/types/project";
import { ArrowUpRight } from "lucide-react";

interface ClientSitesStripProps {
  sites: ClientSite[];
}

export default function ClientSitesStrip({ sites }: ClientSitesStripProps) {
  return (
    <div className="w-full mt-20 pt-16 border-t border-[var(--border-color)]">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#7C83FF]">
            COMMISSIONED WORK
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] mt-1">
            Client websites &amp; production platforms
          </h3>
        </div>
        <p className="font-mono text-xs text-[var(--text-muted)] max-w-xs">
          Built, deployed &amp; managed end-to-end for real estate, agency, and industrial clients.
        </p>
      </div>

      {/* Grid of Client Sites */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {sites.map((site) => (
          <a
            key={site.title}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-text="Visit"
            className="group relative rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[var(--accent-pill)] p-3.5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C83FF]"
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#121218] mb-3 border border-white/5">
              {site.image ? (
                <Image
                  src={site.image}
                  alt={site.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 180px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-mono text-xs text-white/40">
                  {site.title.slice(0, 2)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[var(--text-primary)] group-hover:text-[var(--accent-pill)] transition-colors truncate">
                  {site.title}
                </span>
                <ArrowUpRight
                  size={13}
                  className="text-[var(--text-muted)] group-hover:text-[var(--accent-pill)] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <span className="block text-[10px] font-mono text-[var(--text-muted)] truncate">
                {site.category || site.client}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
