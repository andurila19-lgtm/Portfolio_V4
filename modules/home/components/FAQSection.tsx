"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { FiHelpCircle, FiChevronDown } from "react-icons/fi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const FAQSection = () => {
  const t = useTranslations("HomePage");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Berapa lama estimasi waktu pengerjaan website?",
      answer:
        "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Landing page sederhana membutuhkan waktu 2 - 5 hari kerja, website Company Profile 3 - 7 hari kerja, sedangkan aplikasi web custom atau sistem POS membutuhkan 7 - 21 hari kerja.",
    },
    {
      question: "Apakah menerima jasa redesign (perbaikan) website yang sudah ada?",
      answer:
        "Ya, sangat menerima. Saya dapat melakukan perbaikan antarmuka UI/UX, optimasi kecepatan Core Web Vitals, penataan ulang kode agar responsif, serta penambahan fitur baru pada website yang sudah berjalan.",
    },
    {
      question: "Apakah biaya proyek sudah termasuk hosting dan domain?",
      answer:
        "Secara umum saya dapat membantu penyiapan dan konfigurasi hosting (seperti Vercel, Netlify, atau Cloud VPS) dan integrasi domain kustom. Biaya domain/hosting dapat disesuaikan dengan paket kesepakatan proyek.",
    },
    {
      question: "Apakah ada garansi pemeliharaan (maintenance) setelah website rilis?",
      answer:
        "Tentu! Setiap proyek mendapatkan garansi perbaikan bug dan pemeliharaan gratis pasca-rilis (1-3 bulan tergantung skala proyek) untuk memastikan aplikasi berjalan tanpa kendala teknis.",
    },
    {
      question: "Berapa kali batas revisi yang diberikan?",
      answer:
        "Revisi diberikan secara fleksibel pada setiap tahap pengerjaan (tahap desain prototipe & tahap development). Biasanya mencakup 2-3 putaran revisi besar tanpa mengubah scope utama yang telah disepakati di awal.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={t("faq.title")}
          icon={<FiHelpCircle className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {t("faq.subtitle")}
          </p>
        </SectionSubHeading>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-5 text-left transition duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
              >
                <span className="text-sm font-bold text-neutral-800 dark:text-neutral-100 sm:text-base">
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
                    <div className="border-t border-neutral-100 px-5 pb-5 pt-3 text-xs leading-relaxed text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 sm:text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
