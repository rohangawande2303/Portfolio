"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import { ShieldCheck, Sparkles, Layers, CheckCircle2 } from "lucide-react";

interface VisualMockupProps {
  project: Project;
}

export default function VisualMockup({ project }: VisualMockupProps) {
  // Check if live URL exists
  const isLive = Boolean(project.liveUrl);

  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] md:min-h-[420px] flex items-center justify-center p-2 sm:p-4">
      {/* Tilted Browser Frame Container */}
      <div
        className="relative w-full max-w-[460px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-[#161620] shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1"
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(124, 131, 255, 0.12)",
        }}
      >
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0e0e15] border-b border-white/10 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.05] border border-white/5 text-[10px] font-mono text-white/50 max-w-[190px] truncate">
            <span>app.{project.slug}.internal</span>
          </div>

          <div className="w-4" />
        </div>

        {/* Mockup Canvas Area */}
        <div className="relative w-full aspect-[16/10] bg-[#121218] overflow-hidden flex items-center justify-center">
          {/* Flagship Graphic Mockups / Placeholders */}
          {/* TODO: Replace with live screenshot when public */}
          {project.slug === "real-estate-crm-saas" ? (
            <div className="w-full h-full p-5 bg-gradient-to-br from-[#12121A] via-[#171726] to-[#0D0D14] flex flex-col justify-between relative overflow-hidden select-none">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#7C83FF]/15 rounded-full blur-3xl pointer-events-none" />

              {/* CRM UI Header Wireframe */}
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#7C83FF]" />
                  <span className="font-mono text-xs font-bold text-white tracking-wide">
                    REAL ESTATE CRM · CLIENT TENANT
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                  Schema Isolated
                </span>
              </div>

              {/* Feature Wireframe Rows (Facts strictly from Resume) */}
              <div className="space-y-2 my-auto">
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80">JWT + 5-Level RBAC</span>
                  <span className="text-emerald-400">Validated</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80">Gemini AI Search &amp; Summaries</span>
                  <span className="text-[#7C83FF]">Active</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80">SQL + JSONB (150+ Attributes)</span>
                  <span className="text-white/60">219-Col Excel Engine</span>
                </div>
              </div>

              {/* Bottom Tech Facts */}
              <div className="flex justify-between items-center text-[10px] font-mono text-white/40 pt-2 border-t border-white/5">
                <span>FastAPI · PostgreSQL Neon · Docker</span>
                <span>Pytest Tenant Isolation Suite</span>
              </div>
            </div>
          ) : project.slug === "healthcare-telemedicine" ? (
            <div className="w-full h-full p-5 bg-gradient-to-br from-[#0E1520] via-[#131F2E] to-[#0A0F17] flex flex-col justify-between relative overflow-hidden select-none">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white">
                    TELEMEDICINE CONSULTATION ROOM
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono">
                  WebRTC P2P
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 my-auto">
                <div className="aspect-[4/3] rounded-lg bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-7 h-7 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs mb-1">
                    DR
                  </div>
                  <span className="text-[10px] font-mono text-white/80">Doctor Portal</span>
                  <span className="text-[9px] font-mono text-emerald-400">Encrypted Stream</span>
                </div>
                <div className="aspect-[4/3] rounded-lg bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center p-2 text-center">
                  <div className="w-7 h-7 rounded-full bg-[#7C83FF]/20 flex items-center justify-center text-[#7C83FF] font-bold text-xs mb-1">
                    PT
                  </div>
                  <span className="text-[10px] font-mono text-white/80">Patient Dashboard</span>
                  <span className="text-[9px] font-mono text-white/40">Socket.io Live Queue</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-white/40 pt-2 border-t border-white/5">
                <span>Flask OpenFDA Safety Service</span>
                <span>Razorpay · Twilio SMS</span>
              </div>
            </div>
          ) : project.slug === "goatwear-streetwear-store" ? (
            <div className="w-full h-full p-5 bg-gradient-to-br from-[#1A1612] via-[#241D17] to-[#14100D] flex flex-col justify-between relative overflow-hidden select-none">
              <div className="absolute top-0 right-0 w-44 h-44 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="font-bold text-xs text-white tracking-widest uppercase">
                  GOATWEAR STREETWEAR STORE
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono">
                  Shopify Liquid
                </span>
              </div>

              <div className="space-y-2 my-auto">
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/80">Custom Drop Lookbooks</span>
                  <span className="text-amber-400">Interactive</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/80">Variant Drawer &amp; Size Guide</span>
                  <span className="text-[#F3E9C6]">Mobile First</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-white/80">Localized Indian Payments</span>
                  <span className="text-emerald-400">UPI / COD</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-white/40 pt-2 border-t border-white/5">
                <span>Tailwind CSS &amp; Vanilla JS</span>
                <span>Shopify APIs</span>
              </div>
            </div>
          ) : (
            /* Real Screenshot from public/assets/portfolio/ */
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
          )}
        </div>
      </div>

      {/* Floating UI Highlights Overlay Chip (only Live Production if actually live) */}
      <div className="absolute -bottom-2 sm:-bottom-3 right-4 sm:right-6 px-3.5 py-2 rounded-xl bg-[#121218]/90 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2 pointer-events-none select-none">
        {isLive ? (
          <>
            <CheckCircle2 size={14} className="text-emerald-400" />
            <span className="font-mono text-xs font-semibold text-white">
              Live Production
            </span>
          </>
        ) : project.slug === "real-estate-crm-saas" ? (
          <>
            <ShieldCheck size={14} className="text-[#7C83FF]" />
            <span className="font-mono text-xs font-semibold text-white">
              Multi-Tenant Architecture
            </span>
          </>
        ) : project.slug === "healthcare-telemedicine" ? (
          <>
            <Sparkles size={14} className="text-cyan-400" />
            <span className="font-mono text-xs font-semibold text-white">
              WebRTC &amp; Microservices
            </span>
          </>
        ) : (
          <>
            <Layers size={14} className="text-[#F3E9C6]" />
            <span className="font-mono text-xs font-semibold text-white">
              Full Stack System
            </span>
          </>
        )}
      </div>
    </div>
  );
}
