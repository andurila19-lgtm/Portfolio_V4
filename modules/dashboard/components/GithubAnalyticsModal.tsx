"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiActivity, FiBookOpen, FiStar, FiUsers, FiClock } from "react-icons/fi";

interface GithubAnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  githubData?: any;
}

export default function GithubAnalyticsModal({
  isOpen,
  onClose,
  githubData,
}: GithubAnalyticsModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const calendar = githubData?.contributionsCollection?.contributionCalendar;
  const totalContributions = calendar?.totalContributions || 450;
  const weeks = calendar?.weeks || [];

  const getDayColor = (count: number) => {
    if (count === 0) return "bg-white/[0.04]";
    if (count <= 2) return "bg-cyan-900 border border-cyan-700/50";
    if (count <= 4) return "bg-cyan-600 shadow-[0_0_6px_rgba(8,145,178,0.6)]";
    return "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]";
  };

  const activeRepos = [
    { name: "PORTFOLIO_V4", lang: "TYPESCRIPT", time: "1d ago", url: "https://github.com/andurila19-lgtm/Portfolio_V4" },
    { name: "ORYONWEB", lang: "TYPESCRIPT", time: "3d ago", url: "https://github.com/andurila19-lgtm/oryonweb" },
    { name: "SOBAT_SKS_AI", lang: "TYPESCRIPT", time: "1w ago", url: "https://github.com/andurila19-lgtm/Sobat_SKS_AI" },
    { name: "SIM-MAHASISWA", lang: "TYPESCRIPT", time: "2w ago", url: "https://github.com/andurila19-lgtm/SIM-Mahasiswa" },
  ];

  const months = ["AUG", "SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"];

  const modalContent = (
    <AnimatePresence>
      <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-[99999] flex h-screen w-screen items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
        {/* Full Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Card - Single Screen Fit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 my-auto w-full max-w-3xl rounded-3xl border border-white/[0.12] bg-[#0c0d14] p-5 sm:p-7 shadow-2xl backdrop-blur-2xl"
        >
          {/* 1. Header */}
          <div className="flex items-start justify-between border-b border-white/[0.08] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>PROTOCOL SYNC_STATUS</span>
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                GITHUB ANALYTICS
              </h2>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <FiX size={16} />
            </button>
          </div>

          {/* 2. Four Metrics Grid */}
          <div className="grid grid-cols-4 gap-2.5 pt-4">
            <div className="rounded-2xl border border-white/[0.06] bg-[#10121d] p-3 text-center space-y-0.5">
              <div className="text-xl font-black text-cyan-400 sm:text-2xl">{totalContributions}</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">COMMITS</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#10121d] p-3 text-center space-y-0.5">
              <div className="text-xl font-black text-white sm:text-2xl">15+</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">STARS</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#10121d] p-3 text-center space-y-0.5">
              <div className="text-xl font-black text-white sm:text-2xl">30</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">REPOS</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#10121d] p-3 text-center space-y-0.5">
              <div className="text-xl font-black text-white sm:text-2xl">3</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">FOLLOWERS</div>
            </div>
          </div>

          {/* 3. Annual Performance Overview (Heatmap Box) */}
          <div className="mt-4 rounded-2xl border border-white/[0.06] bg-[#10121d] p-4 space-y-2.5">
            <div className="flex items-center justify-between font-mono text-[9px] text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <FiActivity size={12} />
                <span>ANNUAL PERFORMANCE OVERVIEW</span>
              </span>
              <div className="flex items-center gap-1.5 text-[8px]">
                <span>LESS</span>
                <div className="flex gap-0.5">
                  <span className="h-2 w-2 rounded-xs bg-white/[0.04]" />
                  <span className="h-2 w-2 rounded-xs bg-cyan-900" />
                  <span className="h-2 w-2 rounded-xs bg-cyan-600" />
                  <span className="h-2 w-2 rounded-xs bg-cyan-400" />
                </div>
                <span>MORE</span>
              </div>
            </div>

            {/* Months row */}
            <div className="flex justify-between font-mono text-[8px] text-slate-500 px-1">
              {months.map((m, i) => (
                <span key={i}>{m}</span>
              ))}
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto">
              <div className="flex gap-1 min-w-[500px] justify-between">
                {weeks.length > 0
                  ? weeks.map((week: any, wIdx: number) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {week.contributionDays.map((day: any, dIdx: number) => (
                          <div
                            key={dIdx}
                            title={`${day.date}: ${day.contributionCount} contributions`}
                            className={`h-2.5 w-2.5 rounded-xs transition-all hover:scale-125 ${getDayColor(
                              day.contributionCount
                            )}`}
                          />
                        ))}
                      </div>
                    ))
                  : Array.from({ length: 30 }).map((_, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-1">
                        {Array.from({ length: 7 }).map((_, dIdx) => (
                          <div key={dIdx} className="h-2.5 w-2.5 rounded-xs bg-white/[0.04]" />
                        ))}
                      </div>
                    ))}
              </div>
            </div>
          </div>

          {/* 4. Active Repositories Section */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400">
              <FiBookOpen size={12} className="text-cyan-400" />
              <span>ACTIVE REPOSITORIES</span>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {activeRepos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/[0.06] bg-[#10121d] px-3.5 py-2.5 transition-all hover:border-cyan-500/40 hover:bg-[#141726]"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                      {repo.name}
                    </span>
                    <span className="rounded border border-cyan-500/20 bg-cyan-950/40 px-1.5 py-0.5 font-mono text-[8px] font-bold text-cyan-400">
                      {repo.lang}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[9px] text-slate-500">
                    <FiClock size={10} />
                    <span>{repo.time}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 5. Bottom Close CTA Button */}
          <div className="mt-5 flex justify-center">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 font-mono text-[10px] font-black uppercase tracking-wider text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:bg-slate-200 hover:scale-105"
            >
              RETURN TO TELEMETRY
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
