"use client";

import { motion } from "framer-motion";

export default function Background3D() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Deep Canvas Base */}
      <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#030306] transition-colors duration-500" />

      {/* 3D Glowing Gradient Orb 1 - Cyan / Teal (Top Left) */}
      <motion.div
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute -left-16 -top-16 h-72 w-72 sm:h-[450px] sm:w-[450px] rounded-full bg-gradient-to-br from-cyan-500/20 via-teal-500/15 to-transparent blur-[60px] sm:blur-[110px] dark:from-cyan-500/25 dark:via-teal-500/15"
      />

      {/* 3D Glowing Gradient Orb 2 - Purple / Magenta (Top Right & Center) */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 25, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute -right-16 top-[15%] h-80 w-80 sm:h-[500px] sm:w-[500px] rounded-full bg-gradient-to-bl from-purple-600/20 via-pink-600/15 to-transparent blur-[60px] sm:blur-[120px] dark:from-purple-600/20 dark:via-indigo-600/15"
      />

      {/* 3D Glowing Gradient Orb 3 - Emerald / Indigo (Middle Left) */}
      <motion.div
        animate={{
          x: [0, 20, -25, 0],
          y: [0, -25, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute -left-10 top-[55%] h-72 w-72 sm:h-[450px] sm:w-[450px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-600/10 to-transparent blur-[60px] sm:blur-[110px] dark:from-emerald-500/15 dark:via-cyan-600/10"
      />

      {/* 3D Glowing Gradient Orb 4 - Blue / Violet (Bottom Right) */}
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
        className="absolute -bottom-16 right-6 h-72 w-72 sm:h-[450px] sm:w-[450px] rounded-full bg-gradient-to-tl from-blue-600/20 via-purple-500/10 to-transparent blur-[60px] sm:blur-[110px] dark:from-blue-600/20 dark:via-purple-500/15"
      />

      {/* Subtle Cyber Grid Matrix Texture */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.035]"
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

