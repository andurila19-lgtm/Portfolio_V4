"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FiBriefcase, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { getIndustriesList } from "@/common/constants/industryData";

const IndustriesModule = () => {
  const locale = useLocale();
  const industries = getIndustriesList(locale);
  const isId = locale === "id";

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {industries.map((ind, index) => (
        <motion.div
          key={ind.slug}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
          className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 p-3 dark:bg-neutral-800 text-primary">
              <FiBriefcase size={24} />
            </div>

            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                {ind.title}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {ind.tagline}
              </p>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 pt-1">
                {ind.overview}
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                {isId ? "Solusi Rekayasa:" : "Engineered Solutions:"}
              </span>
              <ul className="mt-2 space-y-1.5">
                {ind.solutions.map((sol, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400"
                  >
                    <FiCheckCircle className="text-emerald-500 shrink-0" size={13} />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
            <Link
              href={`/industries/${ind.slug}`}
              className="group flex items-center justify-center gap-2 w-full rounded-xl bg-neutral-100 px-4 py-2.5 text-xs font-bold text-neutral-800 transition-all duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
            >
              <span>{isId ? "Lihat Detail Industri & Studi Kasus" : "Explore Industry Detail & Case Study"}</span>
              <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default IndustriesModule;
