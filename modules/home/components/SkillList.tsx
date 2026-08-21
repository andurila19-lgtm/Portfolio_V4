"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCode,
  FiZap,
  FiLayout,
  FiSliders,
  FiServer,
  FiDatabase,
  FiRadio,
  FiCloud,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiHtml5,
  SiVite,
  SiRedux,
  SiFigma,
} from "react-icons/si";

export default function SkillList() {
  const innerOrbitIcons = [
    { icon: <SiNextdotjs size={18} className="text-white" />, label: "Next.js", color: "bg-[#000000] border-white/20" },
    { icon: <SiReact size={18} className="text-[#61DAFB]" />, label: "React", color: "bg-[#0c1e28] border-cyan-500/40" },
    { icon: <SiTailwindcss size={18} className="text-[#38B2AC]" />, label: "Tailwind", color: "bg-[#091f24] border-teal-500/40" },
    { icon: <SiTypescript size={18} className="text-[#3178C6]" />, label: "TypeScript", color: "bg-[#0a1829] border-blue-500/40" },
    { icon: <SiNodedotjs size={18} className="text-[#339933]" />, label: "Node.js", color: "bg-[#0c1f10] border-green-500/40" },
  ];

  const outerOrbitIcons = [
    { icon: <SiPostgresql size={18} className="text-[#4169E1]" />, label: "PostgreSQL", color: "bg-[#0c1628] border-indigo-500/40" },
    { icon: <SiDocker size={18} className="text-[#2496ED]" />, label: "Docker", color: "bg-[#0a1829] border-blue-500/40" },
    { icon: <SiGit size={18} className="text-[#F05032]" />, label: "Git", color: "bg-[#250d09] border-orange-500/40" },
    { icon: <SiHtml5 size={18} className="text-[#E34F26]" />, label: "HTML5", color: "bg-[#220e09] border-orange-600/40" },
    { icon: <SiVite size={18} className="text-[#646CFF]" />, label: "Vite", color: "bg-[#181030] border-purple-500/40" },
    { icon: <SiRedux size={18} className="text-[#764ABC]" />, label: "Redux", color: "bg-[#1b0e2b] border-purple-600/40" },
    { icon: <SiFigma size={18} className="text-[#F24E1E]" />, label: "Figma", color: "bg-[#250d09] border-pink-500/40" },
  ];

  const frontendSkills = [
    { title: "REACT ECOSYSTEM", level: "EXPERT", levelColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", icon: <FiCode className="text-cyan-400" size={14} /> },
    { title: "STATE MANAGEMENT", level: "ADVANCED", levelColor: "bg-purple-500/20 text-purple-400 border-purple-500/30", icon: <FiZap className="text-purple-400" size={14} /> },
    { title: "VISUAL ENGINEERING", level: "EXPERT", levelColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", icon: <FiLayout className="text-cyan-400" size={14} /> },
    { title: "ADVANCED STYLING", level: "EXPERT", levelColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30", icon: <FiSliders className="text-cyan-400" size={14} /> },
  ];

  const backendSkills = [
    { title: "SERVER ARCHITECTURE", level: "ADVANCED", levelColor: "bg-purple-500/20 text-purple-400 border-purple-500/30", icon: <FiServer className="text-purple-400" size={14} /> },
    { title: "DATABASE DESIGN", level: "ADVANCED", levelColor: "bg-purple-500/20 text-purple-400 border-purple-500/30", icon: <FiDatabase className="text-purple-400" size={14} /> },
    { title: "API PROTOCOLS", level: "ADVANCED", levelColor: "bg-purple-500/20 text-purple-400 border-purple-500/30", icon: <FiRadio className="text-purple-400" size={14} /> },
    { title: "DEVOPS & CLOUD", level: "PROFICIENT", levelColor: "bg-blue-500/20 text-blue-400 border-blue-500/30", icon: <FiCloud className="text-blue-400" size={14} /> },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Heading & Skill Badges (7 Cols) */}
        <div className="space-y-8 lg:col-span-6 xl:col-span-7">
          {/* Cyber Header */}
          <div className="space-y-3">
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-cyan-400 uppercase">
              — CORE COMPETENCIES
            </span>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[0.95]">
              TECH <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-500 bg-clip-text text-transparent">
                MATRIX
              </span>
            </h2>

            <p className="max-w-xl text-xs font-normal leading-relaxed text-slate-400 sm:text-sm">
              A meticulously curated arsenal of modern technologies. Engineered for high performance, scalability, and seamless user experiences across the stack.
            </p>
          </div>

          {/* 1. FRONTEND / UI Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <h3 className="font-mono text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                FRONTEND / UI
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {frontendSkills.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#0d1017]/90 px-3.5 py-2 shadow-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#121622] hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                >
                  <div className="flex items-center gap-1.5">
                    {item.icon}
                    <span className="text-xs font-black tracking-wider text-white">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`rounded-md border px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase ${item.levelColor}`}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. BACKEND / SYSTEMS Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <h3 className="font-mono text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                BACKEND / SYSTEMS
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {backendSkills.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#0d1017]/90 px-3.5 py-2 shadow-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-[#151122] hover:shadow-[0_0_20px_rgba(168,85,247,0.12)]"
                >
                  <div className="flex items-center gap-1.5">
                    {item.icon}
                    <span className="text-xs font-black tracking-wider text-white">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`rounded-md border px-1.5 py-0.5 text-[9px] font-black tracking-wider uppercase ${item.levelColor}`}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Animated Orbit Radar (5 Cols) */}
        <div className="relative flex h-[460px] w-full items-center justify-center lg:col-span-6 lg:h-[540px] xl:col-span-5">
          {/* Ambient Radial Glow */}
          <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent blur-[80px]" />

          {/* Radar Background Crosshair Lines */}
          <div className="pointer-events-none absolute h-[440px] w-[440px] rounded-full border border-white/[0.04]" />
          <div className="pointer-events-none absolute h-[440px] w-[1px] bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
          <div className="pointer-events-none absolute h-[1px] w-[440px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <div className="pointer-events-none absolute h-[440px] w-[1px] rotate-45 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
          <div className="pointer-events-none absolute h-[440px] w-[1px] -rotate-45 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />

          {/* Outer Orbit Ring (Radius ~200px) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            className="absolute flex h-[400px] w-[400px] items-center justify-center rounded-full border border-purple-500/20"
          >
            {outerOrbitIcons.map((item, idx) => {
              const angle = (idx / outerOrbitIcons.length) * 2 * Math.PI;
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={item.label}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className="absolute"
                >
                  {/* Counter-rotation to keep icons upright */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                    className={`group/icon relative flex h-9 w-9 items-center justify-center rounded-xl border ${item.color} shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-125`}
                  >
                    {item.icon}
                    <div className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-neutral-950 px-2 py-0.5 text-[9px] font-bold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover/icon:opacity-100">
                      {item.label}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Inner Orbit Ring (Radius ~130px) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute flex h-[260px] w-[260px] items-center justify-center rounded-full border border-cyan-500/25"
          >
            {innerOrbitIcons.map((item, idx) => {
              const angle = (idx / innerOrbitIcons.length) * 2 * Math.PI;
              const radius = 130;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={item.label}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  className="absolute"
                >
                  {/* Counter-rotation to keep icons upright */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    className={`group/icon relative flex h-9 w-9 items-center justify-center rounded-xl border ${item.color} shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-125`}
                  >
                    {item.icon}
                    <div className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-neutral-950 px-2 py-0.5 text-[9px] font-bold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover/icon:opacity-100">
                      {item.label}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Center Profile Avatar */}
          <div className="relative z-20 flex h-[130px] w-[130px] items-center justify-center sm:h-[145px] sm:w-[145px]">
            {/* Glowing Accent Rings */}
            <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/20 blur-xl" />
            <div className="absolute -inset-2 rounded-full border border-cyan-400/40" />

            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-cyan-400/90 shadow-[0_0_35px_rgba(34,211,238,0.4)]">
              <Image
                src="/images/anduril.jpg"
                alt="Anduril Ahmad"
                fill
                className="object-cover object-center grayscale-[0.2] transition-all duration-500 hover:scale-110 hover:grayscale-0"
                sizes="150px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
