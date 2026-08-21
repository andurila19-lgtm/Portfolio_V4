"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ProjectModalProps {
  project: any | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setActiveImgIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && project?.images?.length > 1) {
        setActiveImgIndex((prev) => (prev + 1) % project.images.length);
      }
      if (e.key === "ArrowLeft" && project?.images?.length > 1) {
        setActiveImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!mounted || !project) return null;

  const projectImages =
    project.images && project.images.length > 0
      ? project.images
      : [`/images/projects/${project.slug}-1.png`];

  const modalContent = (
    <AnimatePresence>
      <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-[99999] flex h-screen w-screen items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
        {/* Full Viewport Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Card - Centered Perfectly */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-4xl rounded-3xl border border-white/[0.12] bg-[#0c0d14] p-5 sm:p-6 shadow-2xl backdrop-blur-2xl"
        >
          {/* 1. Top Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[9px] font-black uppercase tracking-wider text-cyan-400">
                {project.category_en || "WEB APP"}
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">
                CASE STUDY
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {project.link_demo && (
                <a
                  href={project.link_demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-3.5 py-1 font-mono text-[10px] font-black uppercase tracking-wider text-black shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all hover:bg-cyan-300 hover:scale-105"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black animate-pulse" />
                  <span>LIVE DEMO</span>
                  <FiArrowUpRight size={13} />
                </a>
              )}

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FiX size={16} />
              </button>
            </div>
          </div>

          {/* 2. Middle Section: 3-Photo Mockup Carousel & Details */}
          <div className="grid grid-cols-1 gap-4 pt-4 lg:grid-cols-12 lg:gap-5 items-center">
            {/* Left Mockup Carousel Card (6 Cols) */}
            <div className="space-y-2 lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121524] shadow-inner h-[190px] flex items-center justify-center group">
                {/* Active Photo */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImgIndex}
                    src={projectImages[activeImgIndex]}
                    alt={`${project.title} Preview ${activeImgIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="h-full w-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </AnimatePresence>

                {/* Dark Vignette Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0d14]/70 via-transparent to-transparent" />

                {/* Navigation Arrows */}
                {projectImages.length > 1 && (
                  <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImgIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
                      }}
                      className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md opacity-80 transition-opacity hover:opacity-100"
                    >
                      <FiChevronLeft size={14} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImgIndex((prev) => (prev + 1) % projectImages.length);
                      }}
                      className="pointer-events-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md opacity-80 transition-opacity hover:opacity-100"
                    >
                      <FiChevronRight size={14} />
                    </button>
                  </div>
                )}

                {/* Open App Button */}
                {project.link_demo && (
                  <div className="absolute bottom-2.5 right-2.5">
                    <a
                      href={project.link_demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-black/80 px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-400 hover:text-cyan-300"
                    >
                      <span>OPEN APP</span>
                      <FiArrowUpRight size={10} />
                    </a>
                  </div>
                )}
              </div>

              {/* 3 Clickable Thumbnails Row */}
              {projectImages.length > 1 && (
                <div className="flex items-center gap-2 pt-0.5">
                  {projectImages.map((imgUrl: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative h-11 flex-1 overflow-hidden rounded-lg border transition-all ${
                        activeImgIndex === idx
                          ? "border-cyan-400 ring-1 ring-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                          : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        className="h-full w-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Details (6 Cols) */}
            <div className="space-y-2 lg:col-span-6">
              <h2 className="text-lg font-black uppercase tracking-tight text-white sm:text-xl line-clamp-1">
                {project.title}
              </h2>

              <p className="text-xs font-light leading-relaxed text-slate-300 line-clamp-3">
                {project.description_id || project.description_en}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stacks?.map((stack: string) => (
                  <span
                    key={stack}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[8px] font-bold text-slate-300"
                  >
                    {stack.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Three-Column Architectural Breakdown */}
          <div className="mt-4 grid grid-cols-1 gap-2.5 border-t border-white/[0.08] pt-3.5 md:grid-cols-3 md:gap-3">
            {/* Column 1: The Problem */}
            <div className="space-y-1 rounded-xl border border-white/[0.04] bg-white/[0.01] p-3">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-amber-400">
                01. THE PROBLEM
              </span>
              <p className="text-[11px] font-light leading-relaxed text-slate-300 line-clamp-3">
                {project.problem_id || project.problem_en || "Legacy architectures faced operational bottlenecks and slow mobile responses."}
              </p>
            </div>

            {/* Column 2: Approach */}
            <div className="space-y-1 rounded-xl border border-white/[0.04] bg-white/[0.01] p-3">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-cyan-400">
                02. APPROACH
              </span>
              <p className="text-[11px] font-light leading-relaxed text-slate-300 line-clamp-3">
                {project.solution_id || project.solution_en || "Architected a reactive component system with optimized query payload caching."}
              </p>
            </div>

            {/* Column 3: Impact & Outcome */}
            <div className="space-y-1 rounded-xl border border-white/[0.04] bg-white/[0.01] p-3">
              <span className="font-mono text-[9px] font-black uppercase tracking-wider text-emerald-400">
                03. IMPACT &amp; OUTCOME
              </span>
              <p className="text-[11px] font-light leading-relaxed text-slate-300 line-clamp-3">
                {project.result_id || project.result_en || "Delivered 100% operational uptime and seamless transaction speeds."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
