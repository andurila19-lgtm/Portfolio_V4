"use client";

import React, { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "@/services/fetcher";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiClock,
  FiGithub,
  FiAward,
  FiImage,
  FiArrowUpRight,
  FiLayers,
  FiFolder,
  FiMapPin,
  FiBookOpen,
  FiStar,
  FiUsers,
  FiGitBranch,
  FiX,
  FiExternalLink,
} from "react-icons/fi";
import { LOCAL_PROJECTS } from "@/common/constants/projects";
import realAchievements from "@/contents/ach.json";
import ProjectModal from "./ProjectModal";
import GithubAnalyticsModal from "@/modules/dashboard/components/GithubAnalyticsModal";
import WakatimeAnalyticsModal from "@/modules/dashboard/components/WakatimeAnalyticsModal";

const SUPABASE_STORAGE_URL = "https://wayzampdzzjqbyckmuva.supabase.co/storage/v1/object/public";

export default function ProjectRepository() {
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "certificates" | "gallery">("overview");
  const [selectedCert, setSelectedCert] = useState<any | null>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [isGithubModalOpen, setIsGithubModalOpen] = useState(false);
  const [isWakatimeModalOpen, setIsWakatimeModalOpen] = useState(false);

  // Live telemetry data fetching from GitHub and Wakatime API
  const { data: githubRes } = useSWR("/api/github", fetcher);
  const { data: wakatimeRes } = useSWR("/api/read-stats", fetcher);

  const totalContributions =
    githubRes?.contributionsCollection?.contributionCalendar?.totalContributions ?? 450;
  const wakatimeTotal =
    wakatimeRes?.all_time_since_today?.text ||
    (wakatimeRes?.human_readable_total && wakatimeRes?.human_readable_total !== "0 secs"
      ? wakatimeRes.human_readable_total
      : "128h 45m");
  const wakatimeLangs =
    wakatimeRes?.languages && wakatimeRes.languages.length > 0
      ? wakatimeRes.languages
      : [
          { name: "TypeScript / React", percent: 79.4 },
          { name: "Next.js / HTML", percent: 9.3 },
          { name: "PostgreSQL / SQLite", percent: 5.8 },
          { name: "Tailwind CSS", percent: 5.5 },
        ];

  const featuredProject = LOCAL_PROJECTS[0]; // EraStack
  const recentCert = realAchievements[4] || realAchievements[0];

  const galleryItems = [
    {
      title: "Informatics & Software Engineering Showcase",
      location: "Universitas PGRI Madiun, ID",
      category: "Academic & Tech",
    },
    {
      title: "Fullstack Architecture & Systems Session",
      location: "Madiun, ID",
      category: "Engineering",
    },
    {
      title: "Competitive Programming & Web Deployment",
      location: "East Java, ID",
      category: "Showcase",
    },
  ];

  return (
    <div className="space-y-8 pt-1 pb-10">
      {/* 1. Top Section Header */}
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>PROJECT REPOSITORY</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            PROJECTS{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
              & ARCHIVES.
            </span>
          </h1>
        </div>

        <p className="max-w-md text-xs font-light leading-relaxed text-slate-400 sm:text-sm lg:text-right">
          Digital archive of creative engineering, professional certifications, career gallery, and live telemetry explorations.
        </p>
      </div>

      {/* 2. Sub-Tabs Bar */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-4">
        {[
          { id: "overview", label: "OVERVIEW", icon: <FiLayers size={14} /> },
          { id: "projects", label: `PROJECTS (${LOCAL_PROJECTS.length})`, icon: <FiFolder size={14} /> },
          { id: "certificates", label: `CERTIFICATES (${realAchievements.length})`, icon: <FiAward size={14} /> },
          { id: "gallery", label: "GALLERY", icon: <FiImage size={14} /> },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 rounded-xl px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === tab.id
                ? "border border-cyan-500/40 bg-cyan-500/20 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 3. Main Bento Overview Grid */}
      <AnimatePresence mode="wait">
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 lg:space-y-5"
          >
            {/* Top Row: 3 Bento Cards (6 Cols, 3 Cols, 3 Cols) */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
              {/* Card 1: Large Featured Project Card (6 Cols) */}
              <div
                onClick={() => setSelectedProject(featuredProject)}
                className="group relative flex min-h-[340px] cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_10px_40px_-10px_rgba(34,211,238,0.2)] lg:col-span-6"
              >
                {/* Featured Project Real Screenshot Preview */}
                <div className="absolute inset-0 z-0 opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-[#0c0d14]/70 to-[#0c0d14]/30 z-10" />
                  {featuredProject.images?.[0] ? (
                    <img
                      src={featuredProject.images[0]}
                      alt={featuredProject.title}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="h-full w-full bg-[#111422]" />
                  )}
                </div>

                {/* Top Header Badge & Arrow */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-teal-400">
                    <span>FEATURED • POS PLATFORM</span>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                    <FiArrowUpRight size={15} />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-2 pt-16">
                  <h3 className="text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                    {featuredProject.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed text-slate-300 line-clamp-2">
                    {featuredProject.description_id || featuredProject.description_en}
                  </p>
                </div>
              </div>

              {/* Card 2: Coding Activity (3 Cols) */}
              <div
                onClick={() => setIsWakatimeModalOpen(true)}
                className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] lg:col-span-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/20 bg-cyan-950/40 text-cyan-400">
                      <FiClock size={16} />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      CODING ACTIVITY
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest group-hover:text-cyan-400 transition-colors">
                    ANALYTICS ↗
                  </span>
                </div>

                <div className="my-4 space-y-1">
                  <div className="text-3xl font-black text-white sm:text-4xl">
                    {wakatimeTotal}
                  </div>
                  <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-400">
                    TOTAL TIME LOGGED
                  </div>
                </div>

                {/* Progress bars */}
                <div className="space-y-2 text-xs">
                  {wakatimeLangs.slice(0, 4).map((lang: any, i: number) => {
                    const colors = ["bg-blue-500", "bg-orange-500", "bg-cyan-400", "bg-amber-400"];
                    const percent = typeof lang.percent === "number" ? Math.round(lang.percent * 10) / 10 : 25;

                    return (
                      <div key={lang.name || i} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="flex items-center gap-1.5 text-slate-300">
                            <span className={`h-2 w-2 rounded-full ${colors[i % colors.length]}`} /> {lang.name}
                          </span>
                          <span className="font-mono text-slate-400">{percent}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
                          <div
                            className={`h-full ${colors[i % colors.length]} rounded-full`}
                            style={{ width: `${Math.min(percent, 100)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card 3: Open Source / GitHub (3 Cols) */}
              <div
                onClick={() => setIsGithubModalOpen(true)}
                className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] lg:col-span-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-950/40 text-purple-400">
                      <FiGitBranch size={16} />
                    </div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      OPEN SOURCE
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest group-hover:text-purple-400 transition-colors">
                    ANALYTICS ↗
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-y-5 gap-x-4 py-4">
                  <div className="space-y-0.5">
                    <div className="text-3xl font-black text-white">{totalContributions}</div>
                    <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-purple-400">
                      <span>↳</span>
                      <span>CONTRIBUTIONS</span>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-3xl font-black text-white">30</div>
                    <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      <FiBookOpen size={10} />
                      <span>REPOSITORIES</span>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-3xl font-black text-white">15+</div>
                    <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      <FiStar size={10} />
                      <span>STARS EARNED</span>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-3xl font-black text-white">3</div>
                    <div className="flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                      <FiUsers size={10} />
                      <span>FOLLOWERS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 2 Bento Cards (6 Cols, 6 Cols) */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
              {/* Card 4: Real Recent Certification with Image Preview (6 Cols) */}
              <div
                onClick={() => setSelectedCert(recentCert)}
                className="group relative flex min-h-[150px] cursor-pointer items-center justify-between overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-5 sm:p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] lg:col-span-6"
              >
                <div className="flex items-center gap-4">
                  {/* Real Certificate Photo Thumbnail */}
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-inner">
                    <img
                      src={`${SUPABASE_STORAGE_URL}/achievements/${recentCert.slug}.webp`}
                      alt={recentCert.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-cyan-950/30 text-cyan-400">
                      <FiAward size={20} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-cyan-400">
                      RECENT CERTIFICATION • CLICK TO PREVIEW
                    </span>
                    <h4 className="text-sm font-black text-white sm:text-base line-clamp-1 group-hover:text-cyan-300 transition-colors">
                      {recentCert.name}
                    </h4>
                    <p className="font-mono text-xs text-slate-400">
                      {recentCert.issuing_organization} • {recentCert.issue_date}
                    </p>
                  </div>
                </div>

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black">
                  <FiArrowUpRight size={15} />
                </div>
              </div>

              {/* Card 5: Real Latest from Gallery / Campus (6 Cols) */}
              <div className="group relative flex min-h-[150px] flex-col justify-center overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0d14]/90 p-5 sm:p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30 lg:col-span-6">
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0c0d14] via-[#0c0d14]/80 to-transparent opacity-90 z-10" />
                <div className="absolute inset-0 bg-[#121420] opacity-40 group-hover:scale-105 transition-transform duration-500" />

                <div className="relative z-20 space-y-1">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-pink-400">
                    LATEST FROM GALLERY
                  </span>
                  <h4 className="text-base font-black text-white sm:text-lg">
                    {galleryItems[0].title}
                  </h4>
                  <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
                    <FiMapPin size={12} className="text-pink-400" />
                    <span>{galleryItems[0].location}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab: Real Projects Catalog */}
        {activeTab === "projects" && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {LOCAL_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_-10px_rgba(34,211,238,0.2)]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2 py-0.5 font-mono text-[9px] font-bold text-cyan-400">
                      {project.category_en}
                    </span>
                    {project.link_demo ? (
                      <a
                        href={project.link_demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-mono text-slate-300 transition-colors hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink size={12} />
                      </a>
                    ) : (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                        <FiArrowUpRight size={14} />
                      </div>
                    )}
                  </div>

                  <h4 className="text-lg font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs font-light leading-relaxed text-slate-400 line-clamp-3">
                    {project.description_id || project.description_en}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/[0.06] pt-3">
                  {project.stacks.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-white/[0.04] bg-white/[0.02] px-1.5 py-0.5 font-mono text-[9px] text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab: Real Certificates List with Photos & Click to Zoom */}
        {activeTab === "certificates" && (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {realAchievements.map((cert) => {
              const imageUrl = `${SUPABASE_STORAGE_URL}/achievements/${cert.slug}.webp`;

              return (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14]/90 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_-10px_rgba(34,211,238,0.2)]"
                >
                  {/* Certificate Photo Banner */}
                  <div className="relative h-44 w-full overflow-hidden bg-black/80 border-b border-white/[0.06]">
                    <img
                      src={imageUrl}
                      alt={cert.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLElement).style.opacity = "0.3";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-transparent to-transparent opacity-80" />

                    <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 transition-opacity group-hover:opacity-100">
                      <FiArrowUpRight size={14} />
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2 py-0.5 font-mono text-[9px] font-bold text-cyan-400 uppercase">
                        {cert.issuing_organization}
                      </span>
                      <FiAward className="text-cyan-400" size={16} />
                    </div>

                    <h4 className="text-sm font-black text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                      {cert.name}
                    </h4>

                    <div className="pt-2 border-t border-white/[0.06] font-mono text-[10px] text-slate-400">
                      Issued: {cert.issue_date}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* Tab: Gallery */}
        {activeTab === "gallery" && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 shadow-xl backdrop-blur-xl transition-all hover:border-pink-500/30"
              >
                <div className="space-y-2">
                  <span className="font-mono text-[9px] font-bold text-pink-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h4 className="text-base font-black text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
                    <FiMapPin size={12} className="text-pink-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Interactive Project Detail Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 5. Live GitHub Analytics Modal */}
      <GithubAnalyticsModal
        isOpen={isGithubModalOpen}
        onClose={() => setIsGithubModalOpen(false)}
        githubData={githubRes}
      />

      {/* 6. Live Wakatime Analytics Modal */}
      <WakatimeAnalyticsModal
        isOpen={isWakatimeModalOpen}
        onClose={() => setIsWakatimeModalOpen(false)}
        wakatimeData={wakatimeRes}
      />

      {/* 7. Full-Screen Certificate Image Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-cyan-500/30 bg-[#0c0d14] p-6 shadow-2xl backdrop-blur-2xl sm:p-8"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <FiX size={18} />
              </button>

              <div className="space-y-5">
                <div className="space-y-1 pr-10">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    {selectedCert.issuing_organization}
                  </span>
                  <h3 className="text-xl font-black text-white sm:text-2xl">
                    {selectedCert.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-400">
                    Issued Date: {selectedCert.issue_date}
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <img
                    src={`${SUPABASE_STORAGE_URL}/achievements/${selectedCert.slug}.webp`}
                    alt={selectedCert.name}
                    className="max-h-[55vh] w-full object-contain mx-auto"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
