"use client";

import { motion } from "framer-motion";

export default function Background3D() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep Canvas Base */}
      <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#030306] transition-colors duration-500" />

      {/* 3D Glowing Gradient Orb 1 - Cyan / Teal (Top Left) */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 via-teal-500/15 to-transparent blur-[130px] dark:from-cyan-500/25 dark:via-teal-500/15"
      />

      {/* 3D Glowing Gradient Orb 2 - Purple / Magenta (Top Right & Center) */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-20 top-[15%] h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-purple-600/20 via-pink-600/15 to-transparent blur-[150px] dark:from-purple-600/20 dark:via-indigo-600/15"
      />

      {/* 3D Glowing Gradient Orb 3 - Emerald / Indigo (Middle Left) */}
      <motion.div
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-10 top-[55%] h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-600/10 to-transparent blur-[140px] dark:from-emerald-500/15 dark:via-cyan-600/10"
      />

      {/* 3D Glowing Gradient Orb 4 - Blue / Violet (Bottom Right) */}
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.1, 1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 right-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-blue-600/20 via-purple-500/10 to-transparent blur-[140px] dark:from-blue-600/20 dark:via-purple-500/15"
      />

      {/* Subtle Cyber Grid Matrix Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial Vignette Mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,transparent_0%,rgba(0,0,0,0.4)_100%)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,transparent_0%,rgba(3,3,6,0.6)_100%)]" />
    </div>
  );
}
