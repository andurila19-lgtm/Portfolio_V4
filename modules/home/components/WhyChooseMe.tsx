"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiCode,
  FiSmartphone,
  FiSearch,
  FiCpu,
  FiMessageCircle,
  FiLifeBuoy,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";


import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const WhyChooseMe = () => {
  const t = useTranslations("HomePage");

  const reasons = [
    {
      title: "Clean Code & Modular",
      desc: "Penulisan kode rapi, terstruktur, mudah di-maintain, dan mengikuti best-practice React / Next.js modern.",
      icon: <FiCode className="text-emerald-500" size={22} />,
    },
    {
      title: "Responsive Across Devices",
      desc: "Tampilan sempurna di semua resolusi layar (320px hingga 1920px+) tanpa overflow atau layout shift.",
      icon: <FiSmartphone className="text-blue-500" size={22} />,
    },
    {
      title: "SEO & Core Web Vitals",
      desc: "Dioptimalkan untuk mesin pencari Google dengan metadata terstruktur, OpenGraph, dan kecepatan LCP/FID tinggi.",
      icon: <FiSearch className="text-amber-500" size={22} />,
    },
    {
      title: "Modern Technology Stack",
      desc: "Menggunakan Next.js App Router, TypeScript, Tailwind CSS, PostgreSQL, dan Supabase untuk skalabilitas bisnis.",
      icon: <FiCpu className="text-purple-500" size={22} />,
    },
    {
      title: "Fast & Transparent Communication",
      desc: "Respon cepat (< 2 jam), pembaruan progres pengerjaan secara berkala, dan komunikasi yang ramah.",
      icon: <FiMessageCircle className="text-pink-500" size={22} />,
    },
    {
      title: "Maintenance & Bug Fix Support",
      desc: "Jaminan garansi pemeliharaan pasca-rilis serta dukungan teknis bila terjadi masalah di kemudian hari.",
      icon: <FiLifeBuoy className="text-indigo-500" size={22} />,
    },
    {
      title: "Secure Coding (OWASP Standard)",
      desc: "Penerapan enkripsi data, proteksi terhadap OWASP Top 10, sanitasi input, dan manajemen autentikasi aman.",
      icon: <FiShield className="text-teal-500" size={22} />,

    },
    {
      title: "Scalable System Architecture",
      desc: "Sistem dirancang untuk siap berkembang seiring pertumbuhan pengguna dan kebutuhan fitur bisnis baru.",
      icon: <FiTrendingUp className="text-amber-600" size={22} />,
    },
  ];

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={t("why_me.title")}
          icon={<FiCheckCircle className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {t("why_me.subtitle")}
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ y: -3 }}
          >
            <div className="space-y-3">
              <div className="inline-flex rounded-xl bg-neutral-100 p-2.5 dark:bg-neutral-800">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                  ✓ {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMe;
