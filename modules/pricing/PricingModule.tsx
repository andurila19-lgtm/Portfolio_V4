"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiChevronDown, FiHelpCircle, FiZap, FiShield, FiTag } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const getPricingData = (locale: string) => {
  const isId = locale === "id";

  const packages = [
    {
      name: isId ? "Starter Profil Perusahaan" : "Starter Corporate",
      tagline: isId
        ? "Cocok untuk Website Company Profile & Bisnis Kecil"
        : "Ideal for Company Profiles & Small Business Sites",
      turnaround: isId ? "3 - 7 Hari Kerja" : "3 - 7 Days",
      features: isId
        ? [
            "Frontend Next.js kustom & responsif",
            "Hingga 5 halaman konten terstruktur",
            "Optimasi SEO on-page & metadata Schema",
            "Integrasi formulir kontak & WhatsApp",
            "Optimasi performa Mobile-First (skor 95+)",
            "Garansi perbaikan bug 1 bulan pasca-rilis",
          ]
        : [
            "Custom responsive Next.js frontend",
            "Up to 5 structured content pages",
            "On-page SEO & Schema metadata",
            "WhatsApp & contact form integration",
            "Mobile-first performance tuning (95+ score)",
            "1-Month post-launch bug warranty",
          ],
      whatsappMsg: "Halo Anduril, saya berminat dengan paket Starter Corporate (Company Profile).",
    },
    {
      name: isId ? "Aplikasi Web Bisnis & POS" : "Business Web App & POS",
      tagline: isId
        ? "Cocok untuk Sistem Kasir POS, Dashboard Inventaris & Portal"
        : "Ideal for Retail POS, Inventory Dashboards & Portals",
      popular: true,
      turnaround: isId ? "7 - 14 Hari Kerja" : "7 - 14 Days",
      features: isId
        ? [
            "Arsitektur Next.js + database PostgreSQL penuh",
            "Dashboard real-time & antarmuka kasir POS",
            "Kontrol akses berbasis peran (RBAC)",
            "Pengurangan stok otomatis & laporan keuangan",
            "Skor performa Lighthouse 95+ Core Web Vitals",
            "Dukungan pemeliharaan gratis 3 bulan",
          ]
        : [
            "Full Next.js + PostgreSQL database architecture",
            "Real-time Dashboard & POS cashier interface",
            "Role-Based Access Control (RBAC)",
            "Automated stock deductions & financial reports",
            "Lighthouse 95+ Core Web Vitals score",
            "3-Month free maintenance support",
          ],
      whatsappMsg: "Halo Anduril, saya berminat dengan paket Business Web App & POS.",
    },
    {
      name: isId ? "Enterprise SaaS Kustom" : "Enterprise Custom SaaS",
      tagline: isId
        ? "Cocok untuk Startup Software & Produk SaaS Berskala"
        : "Ideal for Software Startups & Scalable SaaS Products",
      turnaround: isId ? "14 - 30 Hari Kerja" : "14 - 30 Days",
      features: isId
        ? [
            "Arsitektur cloud SaaS multi-tenant",
            "Gateway pembayaran langganan Stripe / Midtrans",
            "Endpoint API untuk developer & Webhooks",
            "Audit kepatuhan keamanan OWASP Top 10",
            "Optimasi pencarian AEO & GEO",
            "Manajer teknis khusus (retainer)",
          ]
        : [
            "Multi-tenant SaaS cloud architecture",
            "Stripe / Midtrans subscription gateway",
            "Developer API endpoints & Webhooks",
            "OWASP Top 10 security compliance audit",
            "AEO & GEO search engine optimization",
            "Dedicated technical lead retainer",
          ],
      whatsappMsg: "Halo Anduril, saya berminat dengan paket Enterprise Custom SaaS.",
    },
  ];

  const faqs = isId
    ? [
        {
          question: "Apakah ada biaya langganan tersembunyi?",
          answer:
            "Tidak! Kecuali Anda memilih paket pemeliharaan bulanan, biaya pengembangan kami bersifat investasi proyek satu kali. Anda memiliki 100% source code dan database.",
        },
        {
          question: "Bagaimana struktur pembayarannya?",
          answer:
            "Umumnya 50% uang muka (DP) saat kick-off proyek dan persetujuan kebutuhan teknis, dan 50% sisanya saat peluncuran & serah terima final.",
        },
        {
          question: "Apakah bisa memesan scope kustom di luar paket yang tersedia?",
          answer:
            "Ya, tentu. Setiap bisnis memiliki alur kerja unik. Hubungi kami via WhatsApp atau Email untuk mendapatkan penawaran harga yang dirancang khusus sesuai kebutuhan proyek Anda.",
        },
      ]
    : [
        {
          question: "Are there any hidden recurring software fees?",
          answer:
            "No! Unless you opt for an ongoing maintenance retainer, our development quotes are one-time project investments. You own 100% of the source code and database.",
        },
        {
          question: "How are payments structured?",
          answer:
            "Typically 50% initial deposit upon project kick-off and technical requirement sign-off, and the remaining 50% upon final launch and delivery.",
        },
        {
          question: "Do you offer custom scopes outside of preset packages?",
          answer:
            "Yes, absolutely. Every business has unique workflows. Contact us via WhatsApp or Email for a tailored quotation built specifically for your project scope.",
        },
      ];

  const guarantees = isId
    ? {
        speed: { title: "Jaminan Kecepatan", desc: "Skor Lighthouse 95+ untuk Core Web Vitals." },
        security: { title: "Keamanan OWASP", desc: "Endpoint terenkripsi & standar kode bersih." },
        ownership: { title: "100% Kepemilikan Kode", desc: "Tanpa vendor lock-in; semua IP & source code milik Anda." },
      }
    : {
        speed: { title: "Speed Guarantee", desc: "95+ Lighthouse scores for Core Web Vitals." },
        security: { title: "OWASP Security", desc: "Encrypted endpoints & clean code standards." },
        ownership: { title: "100% Code Ownership", desc: "No vendor lock-in; you own all IP & source code." },
      };

  return { packages, faqs, guarantees };
};

const PricingModule = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const locale = useLocale();
  const isId = locale === "id";
  const phoneNumber = "6285190830010";
  const { packages, faqs, guarantees } = getPricingData(locale);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((pkg, idx) => {
          const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(pkg.whatsappMsg)}`;
          return (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col justify-between rounded-2xl border p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 ${
                pkg.popular
                  ? "border-primary bg-gradient-to-b from-primary/5 via-white to-white shadow-md dark:border-primary/60 dark:from-primary/10 dark:via-neutral-900/50 dark:to-neutral-900/50"
                  : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                  {isId ? "Paling Populer" : "Most Popular"}
                </div>
              )}

              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-100">
                    {pkg.name}
                  </h2>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                    {pkg.tagline}
                  </p>
                </div>

                <div className="rounded-xl bg-neutral-100/80 p-2.5 sm:p-3 text-center dark:bg-neutral-800/60">
                  <span className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-neutral-50">
                    {isId ? "Harga Kustom" : "Custom Quote"}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {isId ? "Estimasi Waktu" : "Est. Turnaround"}: {pkg.turnaround}
                  </span>
                </div>

                <div className="pt-1.5">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                    {isId ? "Yang Anda Dapatkan:" : "Package Deliverables:"}
                  </span>
                  <ul className="mt-2 space-y-1.5 sm:space-y-2">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
                        <FiCheckCircle size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full rounded-xl px-3.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-primary text-neutral-900 hover:bg-primary-400 shadow-md"
                      : "bg-neutral-100 text-neutral-800 hover:bg-emerald-500 hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-emerald-600"
                  }`}
                >
                  <BsWhatsapp size={13} />
                  <span>{isId ? "Minta Proposal & Penawaran" : "Request Proposal & Quote"}</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <FiZap className="text-primary mt-1" size={20} />
          <div>
            <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">{guarantees.speed.title}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{guarantees.speed.desc}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FiShield className="text-emerald-500 mt-1" size={20} />
          <div>
            <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">{guarantees.security.title}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{guarantees.security.desc}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <FiTag className="text-indigo-500 mt-1" size={20} />
          <div>
            <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">{guarantees.ownership.title}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{guarantees.ownership.desc}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FiHelpCircle size={20} className="text-neutral-700 dark:text-neutral-300" />
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
            {isId ? "FAQ Harga & Pembayaran" : "Pricing FAQs"}
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-4 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition"
                >
                  <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                    {faq.question}
                  </span>
                  <FiChevronDown
                    className={`text-neutral-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                    size={18}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-neutral-100 p-4 pt-2 text-xs leading-relaxed text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 sm:text-sm">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingModule;
