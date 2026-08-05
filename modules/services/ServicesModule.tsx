"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  FiCode,
  FiGlobe,
  FiLayers,
  FiGrid,
  FiCpu,
  FiTool,
  FiZap,
  FiTrendingUp,
  FiServer,
  FiClock,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import { getServicesList, ServiceItem } from "@/common/constants/serviceData";

const iconMap: Record<string, JSX.Element> = {
  FiCode: <FiCode className="text-3xl text-purple-500" />,
  FiGlobe: <FiGlobe className="text-3xl text-amber-500" />,
  FiLayers: <FiLayers className="text-3xl text-teal-500" />,
  FiGrid: <FiGrid className="text-3xl text-blue-500" />,
  FiCpu: <FiCpu className="text-3xl text-indigo-500" />,
  FiTool: <FiTool className="text-3xl text-pink-500" />,
  FiZap: <FiZap className="text-3xl text-amber-400" />,
  FiTrendingUp: <FiTrendingUp className="text-3xl text-emerald-500" />,
  FiServer: <FiServer className="text-3xl text-cyan-500" />,
};

const ServicesModule = () => {
  const locale = useLocale();
  const services = getServicesList(locale);
  const isId = locale === "id";

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service: ServiceItem, index: number) => {
          const icon = iconMap[service.iconName] || <FiCode className="text-3xl text-primary" />;

          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center rounded-xl bg-neutral-100 p-2.5 sm:p-3 dark:bg-neutral-800">
                    {icon}
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                    <FiClock size={11} className="text-primary" />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <h2 className="text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-100">
                    {service.title}
                  </h2>
                  <p className="text-[11px] sm:text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    {service.tagline}
                  </p>
                  <p className="text-[11px] sm:text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 pt-1 line-clamp-2 sm:line-clamp-none">
                    {service.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800/80">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                    {isId ? "Keunggulan Utama:" : "Core Benefits:"}
                  </span>
                  <ul className="mt-1.5 space-y-1 sm:space-y-1.5">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400"
                      >
                        <FiCheck className="text-emerald-500 shrink-0" size={12} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center gap-3">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-3.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold text-neutral-900 shadow-md transition-all duration-300 hover:bg-primary-400"
                >
                  <span>{isId ? "Lihat Detail Layanan & FAQ" : "Explore Service & FAQs"}</span>
                  <FiArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesModule;
