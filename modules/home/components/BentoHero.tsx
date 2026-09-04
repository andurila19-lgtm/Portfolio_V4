"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  FiArrowRight,
  FiBriefcase,
  FiMail,
  FiDownload,
  FiActivity,
  FiClock,
  FiCode,
  FiLayers,
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
  SiFigma,
} from "react-icons/si";

export default function BentoHero() {
  const t = useTranslations("HomePage");

  const techIcons = [
    { name: "React", icon: <SiReact className="text-[#61DAFB]" size={20} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-neutral-900 dark:text-white" size={20} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={20} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" size={20} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" size={20} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" size={20} /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={20} /> },
    { name: "Git", icon: <SiGit className="text-[#F05032]" size={20} /> },
    { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" size={20} /> },
  ];

  return (
    <section className="relative w-full space-y-4">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -top-10 left-1/4 h-72 w-72 rounded-full bg-primary-500/10 blur-[100px] dark:bg-primary-500/15" />
      <div className="pointer-events-none absolute -bottom-10 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px] dark:bg-purple-500/15" />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 lg:gap-5 xl:gap-6">
        {/* 1. Main Hero Bio Box (2 Cols x 2 Rows) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-8 xl:p-9"
        >
          <div className="space-y-4">
            {/* Header / Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span>Available for Work</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100/80 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/80 dark:text-neutral-300">
                <span>📍 Madiun, ID</span>
              </div>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl lg:text-5xl">
                  ANDURIL AHMAD
                </h1>
                <div className="h-3 w-3 rotate-45 border-2 border-primary bg-transparent shadow-[0_0_12px_rgba(20,184,166,0.6)]" />
              </div>
              <h2 className="text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-100 sm:text-2xl lg:text-3xl">
                Building{" "}
                <span className="bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-emerald-400">
                  production-grade
                </span>{" "}
                web apps, end to end.
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm font-normal leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
              Full-Stack Developer specializing in modern web architecture, React, Next.js, TypeScript, and high-performance UI/UX engineering. From system design to pixel-perfect interfaces.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-neutral-200/80 bg-neutral-100/60 px-2.5 py-1 text-[11px] font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-6">
            <Link
              href="/projects"
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary-400 hover:shadow-teal-500/20"
            >
              <span>Explore Works</span>
              <FiArrowRight className="transition-transform group-hover/btn:translate-x-1" size={15} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white/80 px-4 py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              <FiMail size={15} />
              <span>Contact Me</span>
            </Link>

            <a
              href="/CV_Anduril_Ahmad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white/80 px-4 py-3 text-xs font-bold uppercase tracking-wider text-neutral-800 shadow-sm transition-all duration-300 hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              <FiDownload size={15} />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* 2. Cyberpunk Profile Card (1 Col x 2 Rows) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="group relative flex h-[320px] flex-col justify-end overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-900 p-5 shadow-sm transition-all duration-500 hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-700 md:col-span-1 lg:col-span-1 lg:row-span-2 lg:h-auto"
        >
          {/* Corner Cyber Brackets */}
          <div className="pointer-events-none absolute inset-0 z-20 p-4 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute left-4 top-4 h-3 w-3 rounded-tl border-l-2 border-t-2 border-primary/70" />
            <div className="absolute right-4 top-4 h-3 w-3 rounded-tr border-r-2 border-t-2 border-primary/70" />
            <div className="absolute bottom-4 left-4 h-3 w-3 rounded-bl border-b-2 border-l-2 border-emerald-500/70" />
            <div className="absolute bottom-4 right-4 h-3 w-3 rounded-br border-b-2 border-r-2 border-emerald-500/70" />
          </div>

          {/* Photo */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/anduril.jpg"
              alt="Anduril Ahmad"
              fill
              className="object-cover object-center grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          </div>

          {/* Nameplate */}
          <div className="relative z-10 space-y-1">
            <div className="h-0.5 w-7 rounded-full bg-primary" />
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Software Engineer</p>
            <h3 className="text-xl font-black tracking-tight text-white">
              ANDURIL AHMAD
            </h3>
          </div>
        </motion.div>

        {/* 3. Performance / Stats Card (1 Col x 1 Row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-emerald-500/40 md:col-span-1 lg:col-span-1 lg:row-span-1"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiActivity className="text-emerald-500 transition-transform group-hover:scale-110" size={16} />
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                Performance
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              Verified
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3">
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-2.5 text-center dark:border-neutral-800 dark:bg-neutral-800/40">
              <div className="text-lg font-black text-neutral-900 dark:text-white">2+</div>
              <div className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">Yrs Exp</div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-2.5 text-center dark:border-neutral-800 dark:bg-neutral-800/40">
              <div className="text-lg font-black text-emerald-500">100%</div>
              <div className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">Success</div>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50/80 px-2.5 py-1.5 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-neutral-300">
            <div className="flex items-center gap-1.5">
              <FiClock className="text-teal-500" size={13} />
              <span className="text-[10px] font-semibold uppercase tracking-wider">Fast Turnaround</span>
            </div>
            <span className="text-[10px] font-bold text-teal-500">&lt; 2 Weeks</span>
          </div>
        </motion.div>

        {/* 4. Tech Stack Bento Card (1 Col x 1 Row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-pink-500/40 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-pink-500/40 md:col-span-1 lg:col-span-1 lg:row-span-1"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiCode className="text-pink-500 transition-transform group-hover:scale-110" size={16} />
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                Core Stacks
              </h3>
            </div>
            <Link
              href="/about"
              className="text-[10px] font-semibold text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              All Skills →
            </Link>
          </div>

          <div className="grid grid-cols-5 gap-1.5 pt-3">
            {techIcons.slice(0, 10).map((tech) => (
              <div
                key={tech.name}
                title={tech.name}
                className="group/icon relative flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50/80 shadow-inner transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-neutral-300 hover:bg-white dark:border-neutral-800 dark:bg-neutral-800/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. Featured Works Preview Card (2 Cols x 1 Row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-teal-500/40 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-teal-500/40 md:col-span-2 lg:col-span-2 lg:row-span-1"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-neutral-900 transition-colors group-hover:text-teal-500 dark:text-white sm:text-lg">
                Selected Works
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Explore latest web apps & software solutions
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700 transition-all hover:bg-teal-500 hover:text-white dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-teal-500 dark:hover:text-white"
            >
              <span>View All</span>
              <FiArrowRight size={13} />
            </Link>
          </div>

          {/* Fanned out interactive cards with authentic project screenshots */}
          <div className="relative mt-3 flex h-28 sm:h-32 items-center justify-end overflow-hidden pr-2 sm:pr-4">
            {/* Card 1: Karya Tim Kontraktor */}
            <Link
              href="/projects/karyatim"
              className="absolute right-[46%] sm:right-[44%] h-24 w-36 sm:h-28 sm:w-44 rotate-[-10deg] rounded-xl border border-neutral-300/80 bg-neutral-900 shadow-xl overflow-hidden transition-all duration-500 hover:z-30 hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-[-13deg] dark:border-neutral-700 block"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/projects/karyatim-1.png"
                  alt="Karya Tim Kontraktor"
                  fill
                  className="object-cover object-top opacity-75 transition-opacity duration-300 group-hover:opacity-95"
                  sizes="(max-width: 768px) 150px, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent p-2.5 flex flex-col justify-end">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-amber-400">Architecture</div>
                  <div className="text-[11px] sm:text-xs font-black text-white truncate leading-tight">Karya Tim</div>
                </div>
              </div>
            </Link>

            {/* Card 2: REAKSY Digital */}
            <Link
              href="/projects/reaksy-digital"
              className="absolute right-[23%] sm:right-[22%] z-10 h-24 w-36 sm:h-28 sm:w-44 rotate-[-2deg] rounded-xl border border-neutral-300/80 bg-neutral-900 shadow-xl overflow-hidden transition-all duration-500 hover:z-30 hover:scale-105 group-hover:-translate-y-3 group-hover:rotate-[-3deg] dark:border-neutral-700 block"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/projects/reaksy-digital-1.png"
                  alt="REAKSY Digital"
                  fill
                  className="object-cover object-top opacity-75 transition-opacity duration-300 group-hover:opacity-95"
                  sizes="(max-width: 768px) 150px, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent p-2.5 flex flex-col justify-end">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-cyan-400">Software House</div>
                  <div className="text-[11px] sm:text-xs font-black text-white truncate leading-tight">REAKSY Platform</div>
                </div>
              </div>
            </Link>

            {/* Card 3: Dashboard NEXS Academy */}
            <Link
              href="/projects/nexs-academy-dashboard"
              className="absolute right-[0%] z-20 h-24 w-36 sm:h-28 sm:w-44 rotate-[6deg] rounded-xl border border-teal-500/50 bg-neutral-900 shadow-2xl overflow-hidden transition-all duration-500 hover:z-30 hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-[3deg] dark:border-teal-500/60 block"
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/projects/nexs-academy-1.png"
                  alt="NEXS Academy LMS Dashboard"
                  fill
                  className="object-cover object-top opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  sizes="(max-width: 768px) 150px, 200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent p-2.5 flex flex-col justify-end">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">EdTech & LMS</div>
                  <div className="text-[11px] sm:text-xs font-black text-white truncate leading-tight">Dashboard NEXS</div>
                </div>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* 6. Experience / Journey Card (1 Col x 1 Row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-purple-500/40 md:col-span-1 lg:col-span-1 lg:row-span-1"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiBriefcase className="text-purple-500 transition-transform group-hover:scale-110" size={16} />
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                Experience
              </h3>
            </div>
            <Link
              href="/about"
              className="text-[10px] font-semibold text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Details →
            </Link>
          </div>

          <div className="space-y-2 pt-2">
            <div className="border-l-2 border-purple-500/50 pl-2.5">
              <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400">2023 - Present</span>
              <div className="text-xs font-bold text-neutral-900 dark:text-white">Fullstack Developer</div>
              <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Freelance & Client Projects</div>
            </div>
          </div>
        </motion.div>

        {/* 7. Let's Build Together CTA Card (1 Col x 1 Row) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-600 to-emerald-700 p-5 text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 md:col-span-1 lg:col-span-1 lg:row-span-1"
        >
          <div className="absolute -bottom-6 -right-6 text-white/10 transition-transform duration-500 group-hover:scale-110">
            <FiMail size={90} />
          </div>

          <div className="relative z-10 space-y-1">
            <h3 className="text-lg font-black leading-tight text-white sm:text-xl">
              Let&apos;s build <br /> together.
            </h3>
            <p className="text-[11px] font-normal text-white/80">
              Open for projects & full-time roles.
            </p>
          </div>

          <div className="relative z-10 pt-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-neutral-900 shadow transition-all duration-300 hover:scale-105 hover:bg-neutral-100"
            >
              <span>Start Project</span>
              <FiArrowRight size={13} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
