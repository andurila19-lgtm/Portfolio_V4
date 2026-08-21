"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  FiMonitor,
  FiDatabase,
  FiZap,
  FiLayers,
  FiCode,
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";
import { IoColorPaletteOutline } from "react-icons/io5";

import PageHeading from "@/common/components/elements/PageHeading";

interface ServiceItem {
  protocol: string;
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
  iconBorder: string;
  protocolColor: string;
  hoverBorder: string;
  hoverGlow: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    protocol: "PROTOCOL 01",
    title: "ADAPTIVE FRONTEND",
    description:
      "Pixel-perfect, high-performance interfaces engineered for absolute consistency across every modern display and resolution.",
    icon: <FiMonitor size={20} className="text-cyan-400" />,
    iconBg: "bg-cyan-950/40",
    iconBorder: "border-cyan-500/20",
    protocolColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/30",
    hoverGlow: "hover:shadow-[0_10px_35px_-10px_rgba(34,211,238,0.15)]",
  },
  {
    protocol: "PROTOCOL 02",
    title: "SCALABLE BACKEND",
    description:
      "Robust server-side architecture featuring secure data management and high-throughput API protocols for massive growth.",
    icon: <FiDatabase size={20} className="text-purple-400" />,
    iconBg: "bg-purple-950/40",
    iconBorder: "border-purple-500/20",
    protocolColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/30",
    hoverGlow: "hover:shadow-[0_10px_35px_-10px_rgba(168,85,247,0.15)]",
  },
  {
    protocol: "PROTOCOL 03",
    title: "EXPERIENCE DESIGN",
    description:
      "Immersive user journeys meticulously crafted with focus on aesthetic elegance, usability and strategic brand cohesion.",
    icon: <IoColorPaletteOutline size={20} className="text-pink-400" />,
    iconBg: "bg-pink-950/40",
    iconBorder: "border-pink-500/20",
    protocolColor: "text-pink-400",
    hoverBorder: "hover:border-pink-500/30",
    hoverGlow: "hover:shadow-[0_10px_35px_-10px_rgba(236,72,153,0.15)]",
  },
  {
    protocol: "PROTOCOL 04",
    title: "CORE OPTIMIZATION",
    description:
      "Refining complex environments for ultra-fast load times, fluid micro-interactions, and superior technical vitals.",
    icon: <FiZap size={20} className="text-amber-400" />,
    iconBg: "bg-amber-950/40",
    iconBorder: "border-amber-500/20",
    protocolColor: "text-amber-400",
    hoverBorder: "hover:border-amber-500/30",
    hoverGlow: "hover:shadow-[0_10px_35px_-10px_rgba(251,191,36,0.15)]",
  },
  {
    protocol: "PROTOCOL 05",
    title: "FULL-STACK ARCHITECTURE",
    description:
      "Comprehensive end-to-end development services—from conceptual intelligence to production scaling and global deployment.",
    icon: <FiLayers size={20} className="text-emerald-400" />,
    iconBg: "bg-emerald-950/40",
    iconBorder: "border-emerald-500/20",
    protocolColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/30",
    hoverGlow: "hover:shadow-[0_10px_35px_-10px_rgba(16,185,129,0.15)]",
  },
  {
    protocol: "PROTOCOL 06",
    title: "SMART INTEGRATIONS",
    description:
      "Seamless harmonization with third-party ecosystems, secure payment channels, and customized API middleware solutions.",
    icon: <FiCode size={20} className="text-blue-400" />,
    iconBg: "bg-blue-950/40",
    iconBorder: "border-blue-500/20",
    protocolColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/30",
    hoverGlow: "hover:shadow-[0_10px_35px_-10px_rgba(59,130,246,0.15)]",
  },
];

export default function ServicesModule() {
  return (
    <div className="space-y-8 pt-1 pb-6">
      {/* Cyber Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>TECHNICAL PROTOCOLS</span>
        </div>

        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          SERVICES{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            & CAPABILITIES.
          </span>
        </h1>
      </div>

      {/* Cyber Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={service.protocol}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d14]/90 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-white/[0.08] dark:bg-[#0c0d14]/90 ${service.hoverBorder} ${service.hoverGlow} hover:-translate-y-0.5`}
          >
            {/* Top Area */}
            <div className="space-y-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl border ${service.iconBorder} ${service.iconBg} shadow-inner transition-transform duration-300 group-hover:scale-105`}
              >
                {service.icon}
              </div>

              <h3 className="text-base font-black tracking-wider text-white sm:text-lg">
                {service.title}
              </h3>

              <p className="text-xs font-normal leading-relaxed text-slate-400">
                {service.description}
              </p>
            </div>

            {/* Bottom Area */}
            <div className="mt-6 flex items-center justify-between pt-2">
              <span
                className={`font-mono text-[9px] font-bold tracking-[0.25em] uppercase ${service.protocolColor}`}
              >
                {service.protocol}
              </span>

              <Link
                href="/contact"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-500 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08] group-hover:text-white"
              >
                <FiArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-950/40 via-neutral-900 to-purple-950/40 p-8 text-center backdrop-blur-xl sm:p-10">
        <div className="mx-auto max-w-xl space-y-4">
          <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            Have a custom requirement?
          </h3>
          <p className="text-sm text-slate-400">
            Let&apos;s discuss your technical architecture and build a tailored solution tailored to your product needs.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary-400"
            >
              <span>Get in Touch</span>
              <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
