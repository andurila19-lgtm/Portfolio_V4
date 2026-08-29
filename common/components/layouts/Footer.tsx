"use client";

import React from "react";
import { Link } from "@/i18n/navigation";
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTiktok as TiktokIcon,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/andurila19",
      icon: <GithubIcon size={18} />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/andurilahmad",
      icon: <LinkedinIcon size={18} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/anduril.tsx",
      icon: <InstagramIcon size={18} />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@andrl19",
      icon: <TiktokIcon size={18} />,
    },
    {
      name: "Email",
      href: "mailto:andurila19@gmail.com",
      icon: <SiGmail size={18} />,
    },
  ];

  return (
    <footer className="mt-20 border-t border-neutral-200/80 bg-neutral-50/50 py-12 dark:border-neutral-800/80 dark:bg-neutral-950/50">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-10 xl:px-12">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-2">
            <span className="text-base font-black tracking-tight text-neutral-900 dark:text-white">
              ANDURIL AHMAD
            </span>
            <div className="h-2 w-2 rotate-45 border-2 border-primary" />
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {currentYear} Anduril Ahmad. All rights reserved.
          </p>
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-neutral-600 dark:text-neutral-400">
          <Link href="/" className="hover:text-neutral-900 dark:hover:text-white">
            Home
          </Link>
          <Link href="/projects" className="hover:text-neutral-900 dark:hover:text-white">
            Projects
          </Link>
          <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white">
            About
          </Link>
          <Link href="/contents" className="hover:text-neutral-900 dark:hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-neutral-900 dark:hover:text-white">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-all duration-300 hover:scale-110 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
