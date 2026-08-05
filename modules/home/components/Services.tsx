"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import {
  FiGlobe,
  FiTrendingUp,
  FiGrid,
  FiCode,
  FiTool,
  FiZap,
  FiLock,
  FiServer,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const Services = () => {
  const t = useTranslations("HomePage");

  const phoneNumber = "6285190830010";

  const servicesData = [
    {
      id: "company-profile",
      icon: <FiGlobe className="text-3xl text-amber-500" />,
      titleKey: "services.company_profile.title",
      descKey: "services.company_profile.desc",
      turnaroundKey: "services.company_profile.turnaround",
      benefits: [
        "Desain Profesional & Modern",
        "SEO On-Page & Schema Metadata",
        "100% Responsif di Semua Layar",
        "Formulir Kontak & Integrasi Medsos",
      ],
      whatsappMsg: "Halo Anduril, saya berminat dengan jasa Pembuatan Website Company Profile.",
    },
    {
      id: "landing-page",
      icon: <FiTrendingUp className="text-3xl text-emerald-500" />,
      titleKey: "services.landing_page.title",
      descKey: "services.landing_page.desc",
      turnaroundKey: "services.landing_page.turnaround",
      benefits: [
        "Copywriting Berdaya Pikat Tinggi",
        "CTA Strategis untuk Konversi Pembeli",
        "Kecepatan Loading Sangat Tinggi",
        "Integrasi Pixel & Analitik",
      ],
      whatsappMsg: "Halo Anduril, saya berminat dengan jasa Pembuatan Landing Page.",
    },
    {
      id: "pos-dashboard",
      icon: <FiGrid className="text-3xl text-blue-500" />,
      titleKey: "services.pos_dashboard.title",
      descKey: "services.pos_dashboard.desc",
      turnaroundKey: "services.pos_dashboard.turnaround",
      benefits: [
        "Transaksi Kasir Cepat (POS)",
        "Manajemen Stok Produk & Inventaris",
        "Laporan Omzet & Analisis Real-Time",
        "Role-Based Access Control (RBAC)",
      ],
      whatsappMsg: "Halo Anduril, saya berminat dengan jasa Dashboard & System POS.",
    },
    {
      id: "web-app",
      icon: <FiCode className="text-3xl text-purple-500" />,
      titleKey: "services.web_dev.title",
      descKey: "services.web_dev.desc",
      turnaroundKey: "services.web_dev.turnaround",
      benefits: [
        "Arsitektur Next.js / React / Node",
        "Struktur Database Scalable (Postgres)",
        "Fitur Custom Sesuai Kebutuhan Bisnis",
        "Arsitektur Kode Clean & Modular",
      ],
      whatsappMsg: "Halo Anduril, saya berminat dengan jasa Pembuatan Web Application Custom.",
    },
    {
      id: "maintenance",
      icon: <FiTool className="text-3xl text-pink-500" />,
      titleKey: "services.maintenance.title",
      descKey: "services.maintenance.desc",
      turnaroundKey: "services.maintenance.turnaround",
      benefits: [
        "Pemeriksaan Routine & Backup Data",
        "Perbaikan Bug & Issue Teknis",
        "Update Library & Security Patch",
        "Dukungan Konsultasi Teknis",
      ],
      whatsappMsg: "Halo Anduril, saya berminat dengan jasa Maintenance & Perbaikan Bug Website.",
    },
    {
      id: "seo-speed",
      icon: <FiZap className="text-3xl text-amber-400" />,
      titleKey: "services.seo_speed.title",
      descKey: "services.seo_speed.desc",
      turnaroundKey: "services.seo_speed.turnaround",
      benefits: [
        "Optimasi Core Web Vitals (Lighthouse 90+)",
        "Peningkatan Kecepatan Loading Gambar",
        "Sitemap, Robots.txt & Structural Data",
        "Ranking Mesin Pencari Google",
      ],
      whatsappMsg: "Halo Anduril, saya berminat dengan jasa Optimasi SEO & Speed Website.",
    },
    {
      id: "api-security",
      icon: <FiLock className="text-3xl text-indigo-500" />,
      titleKey: "services.api_security.title",
      descKey: "services.api_security.desc",
      turnaroundKey: "services.api_security.turnaround",
      benefits: [
        "Pengembangan RESTful / GraphQL API",
        "Integrasi Payment Gateway & WhatsApp",
        "Proteksi Standar OWASP Top 10",
        "Enkripsi Data & Auth Security",
      ],
      whatsappMsg: "Halo Anduril, saya berminat dengan jasa Integrasi API & Keamanan Backend.",
    },
    {
      id: "devops",
      icon: <FiServer className="text-3xl text-cyan-500" />,
      titleKey: "services.devops.title",
      descKey: "services.devops.desc",
      turnaroundKey: "services.devops.turnaround",
      benefits: [
        "Kontainerisasi Docker & Image Portabel",
        "Pipeline CI/CD Otomatis GitHub Actions",
        "Deployment VPS Cloud / Vercel / Nginx",
        "Zero-Downtime Release & Health Check",
      ],
      whatsappMsg: "Halo Anduril, saya berminat dengan jasa DevOps & CI/CD Pipeline.",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={t("services.title")}
          icon={<FiCode className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {t("services.subtitle")}
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => {
          const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            service.whatsappMsg,
          )}`;

          return (
            <motion.div
              key={service.id}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="space-y-2.5 sm:space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 p-2.5 sm:p-3 dark:bg-neutral-800">
                    {service.icon}
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    <FiClock size={11} className="text-primary" />
                    <span>{t(service.turnaroundKey)}</span>
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-1.5">
                  <h3 className="text-sm sm:text-base font-bold text-neutral-800 dark:text-neutral-100">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-2 sm:line-clamp-none">
                    {t(service.descKey)}
                  </p>
                </div>

                <div className="pt-1.5 border-t border-neutral-100 dark:border-neutral-800/80">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                    Manfaat & Fitur:
                  </span>
                  <ul className="mt-1.5 space-y-1 sm:space-y-1.5">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-neutral-100 px-3.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-neutral-800 transition-all duration-300 hover:bg-emerald-500 hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-emerald-600"
                >
                  <BsWhatsapp size={13} />
                  <span>{t("services.cta")}</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center pt-4">
        <Link
          href="/contact"
          className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-neutral-900 shadow-md transition-all duration-300 hover:bg-primary-400 hover:shadow-lg"
        >
          <span>Mulai Konsultasi Proyek Anda</span>
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default Services;

