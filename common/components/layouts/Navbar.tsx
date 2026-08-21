"use client";

import React, { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { MENU_ITEMS } from "@/common/constants/menu";
import ThemeToggle from "./sidebar/ThemeToggle";
import IntlToggle from "./sidebar/IntlToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeMenus = MENU_ITEMS.filter((item) => item.isShow);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-200/80 bg-white/85 py-2.5 shadow-sm backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-950/85"
          : "bg-white/40 py-2.5 backdrop-blur-md dark:bg-neutral-950/40"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="text-xl font-black tracking-tighter text-neutral-900 transition-colors group-hover:text-primary dark:text-white sm:text-2xl">
            ANDURIL
          </span>
          <div className="h-2.5 w-2.5 rotate-45 border-2 border-primary bg-transparent shadow-[0_0_10px_rgba(20,184,166,0.6)] transition-all duration-300 group-hover:bg-primary group-hover:scale-110" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-neutral-200/80 bg-neutral-100/80 p-1.5 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80 md:flex">
          {activeMenus.map((menu) => {
            const isActive =
              menu.href === "/"
                ? pathname === "/"
                : pathname.startsWith(menu.href);

            return (
              <Link
                key={menu.href}
                href={menu.href}
                className={`relative rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "text-neutral-900 dark:text-white"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-neutral-800"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {menu.title}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <IntlToggle />
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary-400 hover:shadow-teal-500/20 md:flex"
          >
            <span>Hire Me</span>
            <FiArrowRight size={14} />
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-700 transition-colors hover:bg-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 md:hidden"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-neutral-200 bg-white/95 px-4 py-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-neutral-950/95 md:hidden"
          >
            <div className="flex flex-col space-y-1">
              {activeMenus.map((menu) => {
                const isActive =
                  menu.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(menu.href);

                return (
                  <Link
                    key={menu.href}
                    href={menu.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-primary/10 text-primary dark:bg-primary/20"
                        : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                    }`}
                  >
                    <span className="text-neutral-500">{menu.icon}</span>
                    <span>{menu.title}</span>
                  </Link>
                );
              })}

              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-neutral-900 shadow"
                >
                  <span>Hire Me / Contact</span>
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
