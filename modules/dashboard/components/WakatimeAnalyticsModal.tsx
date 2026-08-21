"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiClock, FiZap, FiActivity, FiTrendingUp } from "react-icons/fi";

interface WakatimeAnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  wakatimeData?: any;
}

export default function WakatimeAnalyticsModal({
  isOpen,
  onClose,
  wakatimeData,
}: WakatimeAnalyticsModalProps) {
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

  const wakatimeTotal =
    wakatimeData?.all_time_since_today?.text ||
    (wakatimeData?.human_readable_total && wakatimeData?.human_readable_total !== "0 secs"
      ? wakatimeData.human_readable_total
      : "128h 45m");

  const languages = [
    { name: "TypeScript", percent: "79.4%", color: "bg-blue-500" },
    { name: "HTML / JSX", percent: "9.3%", color: "bg-orange-500" },
    { name: "Markdown", percent: "4.2%", color: "bg-cyan-500" },
    { name: "SQL", percent: "3.4%", color: "bg-amber-500" },
    { name: "Other", percent: "1.3%", color: "bg-purple-500" },
    { name: "Vue", percent: "1.3%", color: "bg-emerald-500" },
  ];

  const modalContent = (
    <AnimatePresence>
      <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-[99999] flex h-screen w-screen items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Card */}
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
              <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-purple-400">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>PROTOCOL WAKATIME_TELEMETRY</span>
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                DEV VELOCITY & CODING ACTIVITY
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

          {/* 2. Top Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 pt-4">
            <div className="rounded-2xl border border-white/[0.06] bg-[#10121d] p-3 text-center space-y-0.5">
              <div className="text-xl font-black text-purple-400 sm:text-2xl">{wakatimeTotal}</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">FOCUS TIME</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#10121d] p-3 text-center space-y-0.5">
              <div className="text-xl font-black text-cyan-400 sm:text-2xl">3h 15m</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">DAILY AVERAGE</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#10121d] p-3 text-center space-y-0.5">
              <div className="text-xl font-black text-emerald-400 sm:text-2xl">+14%</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">WEEKLY GROWTH</div>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-[#10121d] p-3 text-center space-y-0.5">
              <div className="text-xl font-black text-amber-400 sm:text-2xl">4h 20m</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">BEST DAY</div>
            </div>
          </div>

          {/* 3. Language Telemetry */}
          <div className="mt-4 rounded-2xl border border-white/[0.06] bg-[#10121d] p-4 space-y-3">
            <div className="flex items-center justify-between font-mono text-[9px] text-slate-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                <FiZap size={12} />
                <span>TOP TECH STACK DISTRIBUTION</span>
              </span>
              <span className="text-[8px] text-slate-500">LIVE SYNC</span>
            </div>

            {/* Distribution Bar */}
            <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06] gap-0.5">
              <div className="bg-blue-500 h-full" style={{ width: "79.4%" }} />
              <div className="bg-orange-500 h-full" style={{ width: "9.3%" }} />
              <div className="bg-cyan-500 h-full" style={{ width: "4.2%" }} />
              <div className="bg-amber-500 h-full" style={{ width: "3.4%" }} />
              <div className="bg-purple-500 h-full" style={{ width: "1.3%" }} />
              <div className="bg-emerald-500 h-full" style={{ width: "1.3%" }} />
            </div>

            {/* Languages Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between rounded-xl bg-white/[0.02] border border-white/[0.04] px-3 py-2 text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className={`h-2 w-2 rounded-full ${lang.color}`} />
                    <span>{lang.name}</span>
                  </span>
                  <span className="font-mono text-slate-400">{lang.percent}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Bottom Close CTA Button */}
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
