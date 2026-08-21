"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FiFileText, FiArrowRight, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const getCaseStudiesData = (locale: string) => {
  const isId = locale === "id";
  return [
    {
      id: "erastack",
      title: isId ? "EraStack — Platform POS Modern Offline-First" : "EraStack — Offline-First Modern POS Platform",
      category: isId ? "POS & Sistem Operasional" : "POS & Enterprise Operations",
      client: isId ? "Retail, Minimarket & Usaha Komersial" : "Retail & Commercial Enterprises",
      metrics: isId
        ? [
            "Operasi transaksi 100% mandiri tanpa koneksi internet",
            "Penyimpanan database SQLite lokal dengan mutasi stok atomic",
            "Dukungan printer ESC/POS thermal & USB barcode scanner",
          ]
        : [
            "100% offline operational independence without internet connectivity",
            "Local SQLite database storage with atomic inventory mutation",
            "Hardware support for ESC/POS thermal printers & USB barcode scanners",
          ],
      slug: "erastack",
    },
    {
      id: "istana-gypsum",
      title: isId ? "Istana Gypsum — Showroom Digital & Kalkulator RAB" : "Istana Gypsum — Digital Showroom & RAB Estimator",
      category: isId ? "Arsitektur & Material Bangunan" : "Architecture & Building Materials",
      client: isId ? "Kontraktor & Desain Interior" : "Contractors & Interior Design",
      metrics: isId
        ? [
            "+65% efisiensi konsultasi lewat simulator kalkulator biaya interaktif",
            "Tabel perbandingan material plafon & partisi terstruktur",
            "Performa web sub-detik dengan skor Core Web Vitals 98+",
          ]
        : [
            "+65% consultation efficiency via interactive cost estimator simulator",
            "Structured material comparison tables for gypsum & partitions",
            "Sub-second web performance with 98+ Core Web Vitals score",
          ],
      slug: "istana-gypsum",
    },
    {
      id: "mommy-skincare",
      title: isId ? "Mommy Skincare — Katalog Layanan & Produk" : "Mommy Skincare — Services & Products Catalog",
      category: isId ? "Healthcare & Skincare" : "Healthcare & Skincare",
      client: isId ? "Klinik & Perawatan Kecantikan" : "Aesthetics & Skincare Clinic",
      metrics: isId
        ? [
            "+40% peningkatan kemudahan reservasi dan konsultasi online",
            "Skor performa Lighthouse & Core Web Vitals 95+",
            "Antarmuka responsif ramah smartphone",
          ]
        : [
            "+40% increase in online reservation and consultation ease",
            "95+ Lighthouse Performance & Core Web Vitals score",
            "Mobile-first responsive aesthetic interface",
          ],
      slug: "mommy-skincare",
    },
  ];
};

const FeaturedCaseStudies = () => {
  const locale = useLocale();
  const isId = locale === "id";
  const caseStudiesData = getCaseStudiesData(locale);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={isId ? "Studi Kasus & ROI Bisnis" : "Case Studies & Business ROI"}
          icon={<FiFileText className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {isId
              ? "Bukti nyata keunggulan teknis dan hasil bisnis terukur untuk klien kami."
              : "Real-world proof of technical excellence and measurable business results for our clients."}
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {caseStudiesData.map((cs, idx) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                  <FiTrendingUp size={11} />
                  <span>{cs.category}</span>
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-neutral-800 dark:text-neutral-100">
                  {cs.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                  {isId ? "Klien" : "Client"}: <span className="font-medium text-neutral-700 dark:text-neutral-300">{cs.client}</span>
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                  {isId ? "Metrik & Hasil Utama:" : "Key Metrics & Results:"}
                </span>
                <ul className="mt-1.5 space-y-1.5 sm:space-y-2">
                  {cs.metrics.map((metric, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs leading-relaxed text-neutral-600 dark:text-neutral-400"
                    >
                      <FiCheckCircle className="mt-0.5 shrink-0 text-emerald-500" size={13} />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
              <Link
                href={`/projects/${cs.slug}`}
                className="group flex items-center justify-center gap-2 w-full rounded-xl bg-neutral-100 px-3.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-neutral-800 transition-all duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
              >
                <span>{isId ? "Baca Studi Kasus Lengkap" : "Read Full Case Study"}</span>
                <FiArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center pt-2">
        <Link
          href="/case-studies"
          className="group flex items-center gap-2 rounded-xl border border-neutral-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          <span>{isId ? "Lihat Semua Studi Kasus" : "View All Case Studies"}</span>
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
