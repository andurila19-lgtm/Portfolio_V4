"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiArrowUpRight, FiLayers } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";

interface TimelineItem {
  id: string;
  type: "work" | "education";
  role: string;
  organization: string;
  period: string;
  isActive?: boolean;
  description: string;
  tags?: string[];
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "1",
    type: "work",
    role: "Fullstack Freelancer & Developer",
    organization: "Self-Employed",
    period: "2023 - Present",
    isActive: true,
    description:
      "Engineering high-performance web applications, scalable platforms, and modern frontend architecture, focusing on React, Next.js, and cloud infrastructure.",
    tags: ["#React", "#Next.js", "#PostgreSQL", "#UI/UX"],
  },
  {
    id: "2",
    type: "education",
    role: "University Student (Informatics)",
    organization: "Universitas PGRI Madiun",
    period: "2025 - Present",
    isActive: true,
    description:
      "Pursuing academic excellence in Computer Science & Informatics, deepening knowledge in distributed systems, software architecture, and AI engineering.",
    tags: ["#ComputerScience", "#Algorithms", "#SoftwareEng"],
  },
  {
    id: "3",
    type: "work",
    role: "Backend Laravel Developer",
    organization: "PT Sinar Mas Agro Resources and Technology Tbk",
    period: "2024 - 2025",
    isActive: false,
    description:
      "Designed and optimized robust backend services using Laravel for internal operations systems, managing large-scale data payloads across departments.",
    tags: ["#Laravel", "#PHP", "#DatabaseOptimization", "#APIs"],
  },
  {
    id: "4",
    type: "work",
    role: "Frontend Web Developer",
    organization: "CV. Griyo Electrical",
    period: "2023 - 2024",
    isActive: false,
    description:
      "Architected company web profile, catalog interfaces, and optimized performance metrics achieving high conversion rates.",
    tags: ["#Frontend", "#TailwindCSS", "#WebDesign"],
  },
  {
    id: "5",
    type: "education",
    role: "High School Graduate (Science & Tech)",
    organization: "SMAN 1 Geger",
    period: "2022 - 2025",
    isActive: false,
    description:
      "Graduated with strong foundations in Mathematics, Physics, and Informatics, actively participating in competitive programming and technology showcases.",
    tags: ["#Informatics", "#Mathematics", "#Physics"],
  },
];

export default function EvolutionLog() {
  const [filter, setFilter] = useState<"all" | "work" | "education">("all");

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const counts = {
    all: TIMELINE_DATA.length,
    work: TIMELINE_DATA.filter((i) => i.type === "work").length,
    education: TIMELINE_DATA.filter((i) => i.type === "education").length,
  };

  return (
    <div className="relative w-full space-y-8 pt-1 pb-6">
      {/* 1. Header */}
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          THE{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            EVOLUTION
          </span>{" "}
          LOG
        </h2>
        <p className="mx-auto max-w-2xl text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
          A systematic chronicle of technical milestones, corporate contributions, and academic growth.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-wider transition-all duration-300 sm:text-[11px] ${
              filter === "all"
                ? "border-cyan-500/40 bg-cyan-500/20 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            <FiLayers size={13} />
            <span>ALL PROTOCOLS</span>
            <span className="rounded-full bg-cyan-400/20 px-1.5 py-0.2 text-[9px] text-cyan-300">
              {counts.all}
            </span>
          </button>

          <button
            onClick={() => setFilter("work")}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-wider transition-all duration-300 sm:text-[11px] ${
              filter === "work"
                ? "border-cyan-500/40 bg-cyan-500/20 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            <FiBriefcase size={13} />
            <span>WORK EXPERIENCE</span>
            <span className="rounded-full bg-cyan-400/20 px-1.5 py-0.2 text-[9px] text-cyan-300">
              {counts.work}
            </span>
          </button>

          <button
            onClick={() => setFilter("education")}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-wider transition-all duration-300 sm:text-[11px] ${
              filter === "education"
                ? "border-purple-500/40 bg-purple-500/20 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            <LuGraduationCap size={14} />
            <span>EDUCATION</span>
            <span className="rounded-full bg-purple-400/20 px-1.5 py-0.2 text-[9px] text-purple-300">
              {counts.education}
            </span>
          </button>
        </div>
      </div>

      {/* 2. Alternating Zig-Zag Timeline */}
      <div className="relative mx-auto max-w-5xl">
        {/* Center Vertical Line */}
        <div className="absolute bottom-0 left-6 top-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {filteredItems.map((item, index) => {
            const isRight = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isRight ? "md:justify-end" : "md:justify-start"
                }`}
              >
                {/* Glowing Center Node on the Timeline */}
                <div className="absolute left-6 top-6 z-20 flex -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div className="h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#030306] shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                </div>

                {/* Card Container */}
                <div
                  className={`w-full pl-12 md:pl-0 ${
                    isRight ? "md:w-[46%] md:pl-6" : "md:w-[46%] md:pr-6"
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_-10px_rgba(34,211,238,0.15)]">
                    {/* Top Header: Icon, Role & Organization */}
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                          item.type === "work"
                            ? "border-cyan-500/30 bg-cyan-950/40 text-cyan-400"
                            : "border-purple-500/30 bg-purple-950/40 text-purple-400"
                        } shadow-inner transition-transform duration-300 group-hover:scale-105`}
                      >
                        {item.type === "work" ? (
                          <FiBriefcase size={20} />
                        ) : (
                          <LuGraduationCap size={22} />
                        )}
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-black tracking-tight text-white sm:text-lg">
                          {item.role}
                        </h3>
                        <p className="font-mono text-xs text-slate-400">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    {/* Status & Period Badges */}
                    <div className="flex flex-wrap items-center gap-2 pt-3">
                      {item.isActive && (
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>ACTIVE</span>
                        </div>
                      )}

                      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[9px] font-mono text-slate-300">
                        <span>📅 {item.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="pt-4 text-xs font-light leading-relaxed text-slate-400 sm:text-sm">
                      {item.description}
                    </p>

                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-white/[0.04] bg-white/[0.02] px-2 py-0.5 font-mono text-[9px] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 3. Bottom CTA Button */}
      <div className="flex justify-center pt-8">
        <a
          href="/CV_Anduril_Ahmad.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0d14] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#121622] hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
        >
          <span>DOWNLOAD TECHNICAL RESUME</span>
          <FiArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
