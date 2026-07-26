"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  FiAward,
  FiShoppingBag,
  FiBookOpen,
  FiGrid,
  FiHeart,
  FiLayers,
} from "react-icons/fi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const CredibilitySection = () => {
  const t = useTranslations("HomePage");

  // TODO: Tambahkan logo/nama klien resmi tambahan jika data spesifik telah disetujui.
  const domains = [
    {
      title: "E-Commerce & Retail",
      desc: "Toko online modern, katalog produk skincare, integrasi checkout WhatsApp, & payment gateway.",
      icon: <FiShoppingBag className="text-amber-500" size={24} />,
      count: "3+ Projects",
    },
    {
      title: "Academic & EdTech",
      desc: "Sistem Informasi Manajemen Akademik (SIM) perguruan tinggi berbasis multi-role (Admin, Dosen, Mahasiswa).",
      icon: <FiBookOpen className="text-blue-500" size={24} />,
      count: "Multi-Role SIM",
    },
    {
      title: "Point of Sale (POS)",
      desc: "Aplikasi kasir modern, pemantauan inventaris real-time, manajemen transaksi, & laporan keuangan.",
      icon: <FiGrid className="text-emerald-500" size={24} />,
      count: "Enterprise POS",
    },
    {
      title: "Beauty & Skincare",
      desc: "Platform katalog digital elegan, reservasi perawatan kecantikan, & edukasi produk interaktif.",
      icon: <FiHeart className="text-pink-500" size={24} />,
      count: "Brand Catalog",
    },
    {
      title: "Custom Web Apps",
      desc: "Sistem manajemen internal, dashboard admin responsive, REST API scalable, & audit keamanan OWASP.",
      icon: <FiLayers className="text-purple-500" size={24} />,
      count: "Custom Solution",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={t("credibility.title")}
          icon={<FiAward className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {t("credibility.subtitle")}
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((item, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            whileHover={{ y: -3 }}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="inline-flex rounded-xl bg-neutral-100 p-3 dark:bg-neutral-800">
                  {item.icon}
                </div>
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  {item.count}
                </span>
              </div>
              <div className="space-y-1.5 pt-1">
                <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">
                  {item.title}
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

export default CredibilitySection;
