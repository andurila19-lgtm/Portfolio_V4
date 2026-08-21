"use client";

import React from "react";
import SkillList from "@/modules/home/components/SkillList";
import Breakline from "@/common/components/elements/Breakline";
import GlassIcon from "@/common/components/elements/GlassIcon";
import { STACKS } from "@/common/constants/stacks";

export default function Skills() {
  const categories = [
    {
      key: "frontend",
      title: "Frontend Development & UI Engineering",
      description: "Modern component-driven architecture, reactive state management, and high-performance user interfaces.",
    },
    {
      key: "backend",
      title: "Backend Architecture & Distributed Systems",
      description: "Server-side business logic, robust REST & GraphQL APIs, authentication, and secure data handling.",
    },
    {
      key: "database",
      title: "Database Management & ORM",
      description: "Relational database modeling, query optimization, migration management, and caching layers.",
    },
    {
      key: "devops",
      title: "DevOps, Containerization & CI/CD",
      description: "Automated deployment pipelines, Docker environments, Git workflows, and cloud provisioning.",
    },
    {
      key: "cybersecurity",
      title: "Security Engineering & Analysis",
      description: "Vulnerability analysis, secure authentication patterns, penetration testing tools, and data protection.",
    },
    {
      key: "tools",
      title: "Productivity & Tooling Suite",
      description: "Modern developer tooling, UI design systems, package managers, and testing frameworks.",
    },
  ];

  return (
    <div className="space-y-12">
      {/* 1. Tech Matrix Hero with Animated Orbit */}
      <SkillList />

      <Breakline className="my-10" />

      {/* 2. Categorized Tech Stacks Breakdown */}
      <div className="space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
            Detailed Tech Inventory
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Comprehensive breakdown of languages, frameworks, libraries, and developer tools in my daily workflow.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category) => {
            const skills = Object.entries(STACKS).filter(
              ([, value]) => value.isActive && value.category === category.key
            );

            if (skills.length === 0) return null;

            return (
              <div
                key={category.key}
                className="space-y-4 rounded-3xl border border-neutral-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-900/50 sm:p-7"
              >
                <div className="space-y-1">
                  <h3 className="text-base font-black tracking-wide text-neutral-900 dark:text-white sm:text-lg">
                    {category.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-2">
                  {skills.map(([name, value]) => (
                    <div
                      key={name}
                      className="group flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-neutral-50/80 p-3 shadow-inner transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:bg-white hover:shadow-md dark:border-neutral-800/80 dark:bg-neutral-800/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-800"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 dark:bg-neutral-900/80 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        {value.icon}
                      </div>
                      <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 truncate">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
