"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { ServiceItem } from "@/common/constants/serviceData";
import { STACKS } from "@/common/constants/stacks";
import Tooltip from "@/common/components/elements/Tooltip";
import { BsWhatsapp } from "react-icons/bs";
import { FiCheckCircle, FiChevronDown, FiClock, FiHelpCircle, FiInfo } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceDetailModuleProps {
  service: ServiceItem;
}

const ServiceDetailModule = ({ service }: ServiceDetailModuleProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const locale = useLocale();
  const isId = locale === "id";
  const phoneNumber = "6289523315624";
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.whatsappMsg)}`;

  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 dark:border-primary/40 dark:bg-primary/10">
        <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          <FiInfo className="text-primary" size={18} />
          <span>{isId ? "Ringkasan Eksekutif & Jawaban Langsung" : "Executive Summary & Direct Answer"}</span>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-200 font-medium">
          {service.summary}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1.5 font-semibold">
            <FiClock className="text-primary" size={14} />
            <span>{isId ? "Estimasi Waktu" : "Turnaround"}: {service.turnaround}</span>
          </div>
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>{isId ? "Kategori" : "Category"}: {service.category}</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {isId ? "Gambaran Umum Layanan" : "Service Overview"}
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {service.overview}
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {service.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <FiCheckCircle size={18} className="mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {isId ? "Fitur Utama & Arsitektur" : "Key Features & Architecture"}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {service.features.map((feat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900/50 space-y-2"
            >
              <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                {feat.title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {isId ? "Teknologi yang Digunakan" : "Technologies Utilized"}
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          {service.techStack.map((stack, idx) => {
            const stackData = STACKS[stack];
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
              >
                {stackData?.icon && (
                  <span className={stackData.color}>{stackData.icon}</span>
                )}
                <span>{stack}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {service.comparison.title}
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
              <tr>
                {service.comparison.headers.map((h, idx) => (
                  <th key={idx} className="p-3.5 font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/80 bg-white dark:bg-neutral-900/50">
              {service.comparison.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/40">
                  <td className="p-3.5 font-semibold text-neutral-800 dark:text-neutral-100">
                    {row[0]}
                  </td>
                  <td className="p-3.5 text-emerald-700 font-medium dark:text-emerald-400">
                    {row[1]}
                  </td>
                  <td className="p-3.5 text-neutral-500 dark:text-neutral-400">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FiHelpCircle className="text-neutral-700 dark:text-neutral-300" size={20} />
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
            {isId ? "Pertanyaan yang Sering Diajukan" : "Frequently Asked Questions"}
          </h2>
        </div>
        <div className="space-y-3">
          {service.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-4 text-left transition duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
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

      {/* Action CTA */}
      <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-8 text-white shadow-xl dark:border dark:border-neutral-800 space-y-4">
        <h3 className="text-xl font-extrabold sm:text-2xl">
          {isId
            ? `Siap memulai proyek ${service.title} Anda?`
            : `Ready to start your ${service.title} project?`}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300">
          {isId
            ? "Hubungi Anduril sekarang untuk konsultasi teknis gratis dan proposal scope kustom."
            : "Get in touch with Anduril today for a free technical consultation and custom scope proposal."}
        </p>
        <div className="pt-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-emerald-600"
          >
            <BsWhatsapp size={16} />
            <span>{isId ? "Hubungi via WhatsApp" : "Inquire Via WhatsApp"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModule;
