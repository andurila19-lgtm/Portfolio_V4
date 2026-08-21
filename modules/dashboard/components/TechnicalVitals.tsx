"use client";

import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { motion } from "framer-motion";
import { FiGithub, FiZap, FiTrendingUp, FiClock, FiActivity } from "react-icons/fi";
import GithubAnalyticsModal from "./GithubAnalyticsModal";
import WakatimeAnalyticsModal from "./WakatimeAnalyticsModal";

export default function TechnicalVitals() {
  const { data: githubRes } = useSWR("/api/github", fetcher);
  const { data: wakatimeRes } = useSWR("/api/read-stats", fetcher);

  const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);
  const [isWakatimeModalOpen, setIsWakatimeModalOpen] = useState(false);

  const calendar = githubRes?.contributionsCollection?.contributionCalendar;
  const totalContributions = calendar?.totalContributions || 450;
  const weeks = calendar?.weeks || [];

  const wakatimeTotal =
    wakatimeRes?.all_time_since_today?.text ||
    (wakatimeRes?.human_readable_total && wakatimeRes?.human_readable_total !== "0 secs"
      ? wakatimeRes.human_readable_total
      : "128h 45m");

  const languages =
    wakatimeRes?.languages && wakatimeRes.languages.length > 0
      ? wakatimeRes.languages
      : [
          { name: "TypeScript", percent: "79.4%", color: "bg-blue-500" },
          { name: "HTML / JSX", percent: "9.3%", color: "bg-orange-500" },
          { name: "Markdown", percent: "4.2%", color: "bg-cyan-500" },
          { name: "SQL", percent: "3.4%", color: "bg-amber-500" },
          { name: "Other", percent: "1.3%", color: "bg-purple-500" },
          { name: "Vue", percent: "1.3%", color: "bg-emerald-500" },
        ];

  // Helper to color commit day according to intensity
  const getDayColor = (count: number) => {
    if (count === 0) return "bg-white/[0.04]";
    if (count <= 2) return "bg-cyan-900 border border-cyan-700/50";
    if (count <= 4) return "bg-cyan-600 shadow-[0_0_6px_rgba(8,145,178,0.6)]";
    return "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]";
  };

  return (
    <div className="space-y-8 pt-1 pb-6">
      {/* 1. Header */}
      <div className="space-y-3 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>SYSTEM INTELLIGENCE</span>
        </div>

        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          TECHNICAL{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            VITALS
          </span>
        </h1>
      </div>

      {/* 2. Two Large Dashboard Cards */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Card 1: GITHUB ENGINE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsGithubModalOpen(true)}
          className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
        >
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/40 text-cyan-400">
                  <FiGithub size={20} />
                </div>
                <div>
                  <h3 className="text-base font-black tracking-wider text-white uppercase sm:text-lg group-hover:text-cyan-300 transition-colors">
                    GITHUB ENGINE
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    CLICK TO VIEW ANALYTICS ↗
                  </p>
                </div>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                <FiActivity size={15} />
              </div>
            </div>

            {/* Top Stats */}
            <div className="grid grid-cols-4 gap-2 pt-2">
              <div className="space-y-0.5">
                <div className="text-2xl font-black text-cyan-400 sm:text-3xl">
                  {totalContributions}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">COMMITS</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl font-black text-white sm:text-3xl">30</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">REPOS</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl font-black text-cyan-400 sm:text-3xl">★ 15+</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">STARS</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl font-black text-purple-400 sm:text-3xl">👥 3</div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">FOLLOWERS</div>
              </div>
            </div>

            {/* Commit Matrix Heatmap */}
            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                <span>ACTIVITY PULSE (52 WEEKS)</span>
                <div className="flex items-center gap-1.5">
                  <span>LESS</span>
                  <div className="flex gap-1">
                    <span className="h-2.5 w-2.5 rounded-xs bg-white/[0.04]" />
                    <span className="h-2.5 w-2.5 rounded-xs bg-cyan-950 border border-cyan-800" />
                    <span className="h-2.5 w-2.5 rounded-xs bg-cyan-600" />
                    <span className="h-2.5 w-2.5 rounded-xs bg-cyan-400" />
                  </div>
                  <span>MORE</span>
                </div>
              </div>

              {/* Real 52-Week GitHub Heatmap Grid */}
              <div className="rounded-2xl border border-white/[0.04] bg-[#07080c] p-4 overflow-x-auto">
                <div className="flex gap-1 min-w-[450px] justify-between">
                  {weeks.length > 0
                    ? weeks.map((week: any, wIdx: number) => (
                        <div key={wIdx} className="flex flex-col gap-1">
                          {week.contributionDays.map((day: any, dIdx: number) => (
                            <div
                              key={dIdx}
                              title={`${day.date}: ${day.contributionCount} contributions`}
                              className={`h-2.5 w-2.5 rounded-xs transition-all ${getDayColor(
                                day.contributionCount
                              )}`}
                            />
                          ))}
                        </div>
                      ))
                    : Array.from({ length: 24 }).map((_, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-1">
                          {Array.from({ length: 7 }).map((_, dIdx) => (
                            <div
                              key={dIdx}
                              className="h-2.5 w-2.5 rounded-xs bg-white/[0.04]"
                            />
                          ))}
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2: DEV VELOCITY */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onClick={() => setIsWakatimeModalOpen(true)}
          className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 sm:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
        >
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-950/40 text-purple-400">
                  <FiZap size={20} />
                </div>
                <div>
                  <h3 className="text-base font-black tracking-wider text-white uppercase sm:text-lg group-hover:text-purple-300 transition-colors">
                    DEV VELOCITY
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    CLICK TO VIEW TELEMETRY ↗
                  </p>
                </div>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-400 group-hover:border-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-all">
                <FiClock size={15} />
              </div>
            </div>

            {/* Velocity Stats */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-2xl font-black text-white sm:text-3xl">
                  <FiClock size={20} className="text-purple-400" />
                  <span>{wakatimeTotal}</span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">FOCUS TIME</div>
                <div className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-400">
                  <FiTrendingUp size={12} />
                  <span>+14% WEEKLY GROWTH</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-2xl font-black text-cyan-400 sm:text-3xl">
                  <FiActivity size={20} />
                  <span>3h 15m</span>
                </div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-slate-400">DAILY AVERAGE</div>
                <div className="font-mono text-[10px] font-bold text-amber-400">
                  ⚡ 4 hrs 20 mins on Aug 18
                </div>
              </div>
            </div>

            {/* Language Telemetry */}
            <div className="space-y-3 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                <span>&lt;&gt; LANGUAGE TELEMETRY</span>
                <span>TOP TECH DISTRIBUTION</span>
              </div>

              {/* Progress Distribution Bar */}
              <div className="flex h-2 w-full overflow-hidden rounded-full bg-white/[0.06] gap-0.5">
                <div className="bg-blue-500 h-full" style={{ width: "79.4%" }} />
                <div className="bg-orange-500 h-full" style={{ width: "9.3%" }} />
                <div className="bg-cyan-500 h-full" style={{ width: "4.2%" }} />
                <div className="bg-amber-500 h-full" style={{ width: "3.4%" }} />
                <div className="bg-purple-500 h-full" style={{ width: "1.3%" }} />
                <div className="bg-emerald-500 h-full" style={{ width: "1.3%" }} />
              </div>

              {/* Languages Matrix */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                {languages.map((lang: any) => (
                  <div key={lang.name} className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className={`h-2 w-2 rounded-full ${lang.color || "bg-cyan-400"}`} />
                      <span>{lang.name}</span>
                    </span>
                    <span className="font-mono text-slate-400">{lang.percent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <GithubAnalyticsModal
        isOpen={isGithubModalOpen}
        onClose={() => setIsGithubModalOpen(false)}
        githubData={githubRes}
      />

      <WakatimeAnalyticsModal
        isOpen={isWakatimeModalOpen}
        onClose={() => setIsWakatimeModalOpen(false)}
        wakatimeData={wakatimeRes}
      />
    </div>
  );
}
