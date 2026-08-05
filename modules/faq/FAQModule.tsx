"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle, FiSearch } from "react-icons/fi";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";

const getCategoriesData = (locale: string) => {
  const isId = locale === "id";
  return isId
    ? [
        "Semua Kategori",
        "Pengembangan & Proses",
        "Teknologi & Kecepatan",
        "Harga & Pembayaran",
        "SEO & Optimasi AI",
        "Pemeliharaan & Keamanan",
      ]
    : [
        "All Categories",
        "Development & Process",
        "Technology & Speed",
        "Pricing & Payments",
        "SEO & AI Optimization",
        "Maintenance & Security",
      ];
};

const getFaqsData = (locale: string) => {
  const isId = locale === "id";
  return isId
    ? [
        {
          category: "Pengembangan & Proses",
          question: "Berapa lama estimasi waktu pengerjaan website?",
          answer:
            "Waktu pengerjaan bervariasi tergantung kompleksitas proyek. Landing page sederhana membutuhkan waktu 2 - 5 hari kerja, website Company Profile 3 - 7 hari kerja, sedangkan aplikasi web custom atau sistem POS membutuhkan 7 - 21 hari kerja.",
        },
        {
          category: "Pengembangan & Proses",
          question: "Apakah menerima jasa redesign (perbaikan) website yang sudah ada?",
          answer:
            "Ya, sangat menerima. Kami dapat melakukan perbaikan antarmuka UI/UX, optimasi kecepatan Core Web Vitals, penataan ulang kode agar responsif, serta penambahan fitur baru pada website yang sudah berjalan.",
        },
        {
          category: "Teknologi & Kecepatan",
          question: "Teknologi apa yang digunakan Anduril untuk membangun website?",
          answer:
            "Kami menggunakan Next.js (App Router), React.js, TypeScript, TailwindCSS, PostgreSQL, Supabase, dan Sanity CMS. Teknologi ini menjamin kecepatan loading sub-detik, keamanan tinggi, dan kemudahan skalabilitas.",
        },
        {
          category: "Teknologi & Kecepatan",
          question: "Apakah website yang dibuat dijamin 100% responsif di HP dan Tablet?",
          answer:
            "Ya, 100% responsif. Seluruh desain kami buat dengan pendekatan Mobile-First dan diuji di berbagai resolusi layar smartphone (iOS/Android) serta desktop browser.",
        },
        {
          category: "Harga & Pembayaran",
          question: "Apakah biaya proyek sudah termasuk hosting dan domain?",
          answer:
            "Secara umum kami dapat membantu penyiapan dan konfigurasi hosting (seperti Vercel, Netlify, Cloudflare, atau Cloud VPS) dan integrasi domain kustom. Biaya domain/hosting disesuaikan dengan kesepakatan proyek.",
        },
        {
          category: "Harga & Pembayaran",
          question: "Bagaimana sistem pembayaran dan revisi proyek?",
          answer:
            "Pembayaran dibagi menjadi 2 tahap: 50% uang muka (down payment) di awal proyek dan 50% pelunasan saat peluncuran final. Revisi diberikan secara fleksibel pada setiap tahap pengembangan.",
        },
        {
          category: "SEO & Optimasi AI",
          question: "Apakah website sudah dioptimasi untuk mesin pencari Google (SEO)?",
          answer:
            "Ya! Setiap website dilengkapi dengan OpenGraph metadata, JSON-LD Schema (Organization, Service, FAQ, Breadcrumb), sitemap.xml, robots.txt, dan struktur heading HTML5 yang rapi.",
        },
        {
          category: "SEO & Optimasi AI",
          question: "Apa itu AI Optimization (AEO & GEO)?",
          answer:
            "AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization) adalah teknik penataan konten website agar informasi produk/layanan Anda secara otomatis dikutip dan direkomendasikan oleh mesin pencari AI seperti ChatGPT, Gemini, Claude, Perplexity, dan Copilot.",
        },
        {
          category: "Pemeliharaan & Keamanan",
          question: "Apakah ada garansi pemeliharaan (maintenance) setelah website rilis?",
          answer:
            "Tentu! Setiap proyek mendapatkan garansi perbaikan bug dan pemeliharaan gratis pasca-rilis (1-3 bulan tergantung skala proyek) untuk memastikan aplikasi berjalan tanpa kendala teknis.",
        },
        {
          category: "Pemeliharaan & Keamanan",
          question: "Bagaimana standar keamanan (cyber security) pada aplikasi web yang dibangun?",
          answer:
            "Kami menerapkan standar keamanan OWASP Top 10, enkripsi SSL/TLS, proteksi terhadap Cross-Site Scripting (XSS), SQL Injection, serta pengelolaan token otentikasi yang aman.",
        },
      ]
    : [
        {
          category: "Development & Process",
          question: "How long does it take to develop a website?",
          answer:
            "Development timelines vary by project complexity. A simple landing page takes 2 - 5 business days, Company Profile websites 3 - 7 business days, while custom web apps or POS systems require 7 - 21 business days.",
        },
        {
          category: "Development & Process",
          question: "Do you accept website redesign and improvement projects?",
          answer:
            "Yes, absolutely. We can improve your UI/UX interface, optimize Core Web Vitals speed, restructure code for responsiveness, and add new features to your existing website.",
        },
        {
          category: "Technology & Speed",
          question: "What technologies does Anduril use to build websites?",
          answer:
            "We use Next.js (App Router), React.js, TypeScript, TailwindCSS, PostgreSQL, Supabase, and Sanity CMS. These technologies guarantee sub-second loading speeds, high security, and easy scalability.",
        },
        {
          category: "Technology & Speed",
          question: "Is the website guaranteed to be 100% responsive on mobile and tablet?",
          answer:
            "Yes, 100% responsive. All our designs are built with a Mobile-First approach and tested across various smartphone screen resolutions (iOS/Android) and desktop browsers.",
        },
        {
          category: "Pricing & Payments",
          question: "Does the project cost include hosting and domain?",
          answer:
            "We can assist with hosting setup and configuration (Vercel, Netlify, Cloudflare, or Cloud VPS) and custom domain integration. Hosting/domain costs are adjusted per project agreement.",
        },
        {
          category: "Pricing & Payments",
          question: "How are payments and project revisions structured?",
          answer:
            "Payments are split into 2 phases: 50% down payment at project kick-off and 50% upon final launch. Revisions are provided flexibly at each development stage.",
        },
        {
          category: "SEO & AI Optimization",
          question: "Is the website optimized for Google search (SEO)?",
          answer:
            "Yes! Every website includes OpenGraph metadata, JSON-LD Schema (Organization, Service, FAQ, Breadcrumb), sitemap.xml, robots.txt, and clean HTML5 heading structure.",
        },
        {
          category: "SEO & AI Optimization",
          question: "What is AI Optimization (AEO & GEO)?",
          answer:
            "AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization) are techniques for structuring website content so your product/service information is automatically cited and recommended by AI search engines like ChatGPT, Gemini, Claude, Perplexity, and Copilot.",
        },
        {
          category: "Maintenance & Security",
          question: "Is there a post-launch maintenance warranty?",
          answer:
            "Absolutely! Every project receives a free post-launch bug fix and maintenance warranty (1-3 months depending on project scale) to ensure the application runs without technical issues.",
        },
        {
          category: "Maintenance & Security",
          question: "What security standards are applied to the web applications?",
          answer:
            "We implement OWASP Top 10 security standards, SSL/TLS encryption, protection against Cross-Site Scripting (XSS), SQL Injection, and secure authentication token management.",
        },
      ];
};

const FAQModule = () => {
  const locale = useLocale();
  const isId = locale === "id";
  const categories = getCategoriesData(locale);
  const allFaqs = getFaqsData(locale);

  const [selectedCat, setSelectedCat] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchCat = selectedCat === categories[0] || faq.category === selectedCat;
    const matchQuery =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="space-y-8">
      <SchemaMarkup type="FAQPage" questions={allFaqs} />

      <div className="space-y-4">
        <div className="relative">
          <FiSearch className="absolute left-4 top-3.5 text-neutral-400" size={18} />
          <input
            type="text"
            placeholder={
              isId
                ? "Cari pertanyaan atau kata kunci (contoh: SEO, Garansi, Next.js, Biaya)..."
                : "Search questions or keywords (e.g. SEO, Warranty, Next.js, Pricing)..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-neutral-200 bg-white py-3 pl-11 pr-4 text-xs sm:text-sm text-neutral-800 focus:border-primary focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedCat === cat
                  ? "bg-primary text-neutral-900 shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all dark:border-neutral-800 dark:bg-neutral-900/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left transition duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
                >
                  <div className="space-y-1 pr-4">
                    <span className="inline-block rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-bold uppercase text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                      {faq.category}
                    </span>
                    <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-100 sm:text-base">
                      {faq.question}
                    </h3>
                  </div>
                  <FiChevronDown
                    className={`shrink-0 text-neutral-500 transition-transform duration-300 ${
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
          })
        ) : (
          <div className="rounded-2xl border border-neutral-200 p-8 text-center text-xs text-neutral-500 dark:border-neutral-800">
            {isId
              ? "Tidak ada pertanyaan yang sesuai dengan kata kunci pencarian Anda."
              : "No questions match your search keyword."}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQModule;
