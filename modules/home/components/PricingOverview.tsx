"use client";

import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FiTag, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";

const getPricingTiersData = (locale: string) => {
  const isId = locale === "id";
  return [
    {
      name: isId ? "Starter Profil Perusahaan" : "Starter Company Profile",
      tagline: isId
        ? "Kehadiran digital esensial untuk identitas korporat & menghasilkan prospek klien."
        : "Essential web presence for corporate identity & lead generation.",
      price: isId ? "Harga Kustom" : "Custom Quote",
      popular: false,
      turnaround: isId ? "3 - 7 Hari Kerja" : "3 - 7 Business Days",
      features: isId
        ? [
            "Desain Next.js kustom & responsif",
            "Hingga 5 halaman konten terstruktur",
            "Optimasi SEO on-page & metadata Schema",
            "Integrasi formulir kontak & WhatsApp",
            "Dukungan pemeliharaan gratis 1 bulan",
          ]
        : [
            "Custom responsive Next.js design",
            "Up to 5 custom structured pages",
            "On-page SEO & Schema metadata",
            "WhatsApp & contact form integration",
            "1-Month free maintenance support",
          ],
      whatsappMsg: "Halo Anduril, saya tertarik dengan paket Starter Company Profile.",
    },
    {
      name: isId ? "Aplikasi Web Bisnis & POS" : "Business Web App & POS",
      tagline: isId
        ? "Aplikasi web kustom, dashboard, atau sistem inventaris."
        : "Custom web applications, dashboards, or inventory systems.",
      price: isId ? "Harga Kustom" : "Custom Quote",
      popular: true,
      turnaround: isId ? "7 - 14 Hari Kerja" : "7 - 14 Business Days",
      features: isId
        ? [
            "Arsitektur Next.js + database PostgreSQL penuh",
            "Dashboard real-time & sistem kasir POS",
            "Kontrol akses berbasis peran (RBAC)",
            "Pelaporan stok & penjualan otomatis",
            "Jaminan skor performa Lighthouse 95+",
            "Dukungan pemeliharaan gratis 3 bulan",
          ]
        : [
            "Full Next.js + PostgreSQL architecture",
            "Real-time Dashboard & POS cashier system",
            "Role-Based Access Control (RBAC)",
            "Automated stock & sales reporting",
            "Lighthouse 95+ performance guarantee",
            "3-Month free maintenance support",
          ],
      whatsappMsg: "Halo Anduril, saya tertarik dengan paket Business Web App & POS.",
    },
    {
      name: isId ? "Enterprise SaaS Kustom" : "Enterprise Custom SaaS",
      tagline: isId
        ? "Produk SaaS end-to-end, payment gateway, dan arsitektur backend."
        : "End-to-end SaaS products, payment gateways, and backend architecture.",
      price: isId ? "Harga Kustom" : "Custom Quote",
      popular: false,
      turnaround: isId ? "14 - 30 Hari Kerja" : "14 - 30 Business Days",
      features: isId
        ? [
            "Arsitektur cloud SaaS multi-tenant",
            "Gateway pembayaran langganan",
            "Audit kepatuhan keamanan OWASP Top 10",
            "Mesin API & integrasi Webhook",
            "Optimasi pencarian AEO & GEO",
            "Manajer teknis khusus (retainer)",
          ]
        : [
            "Multi-tenant SaaS cloud architecture",
            "Subscription billing & payment gateway",
            "OWASP Top 10 security compliance audit",
            "API engine & Webhook integrations",
            "AEO & GEO search optimization",
            "Dedicated technical manager retainer",
          ],
      whatsappMsg: "Halo Anduril, saya tertarik dengan paket Enterprise Custom SaaS.",
    },
  ];
};

const PricingOverview = () => {
  const locale = useLocale();
  const isId = locale === "id";
  const phoneNumber = "6289523315624";
  const pricingTiers = getPricingTiersData(locale);

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={isId ? "Harga Agency yang Transparan" : "Transparent Agency Pricing"}
          icon={<FiTag className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {isId
              ? "Paket pengembangan fleksibel yang disesuaikan dengan skala bisnis Anda tanpa biaya tersembunyi."
              : "Flexible development packages tailored to your business scale with zero hidden fees."}
          </p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {pricingTiers.map((tier, index) => {
          const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            tier.whatsappMsg
          )}`;

          return (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col justify-between rounded-2xl border p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 ${
                tier.popular
                  ? "border-primary bg-gradient-to-b from-primary/5 via-white to-white shadow-md dark:border-primary/60 dark:from-primary/10 dark:via-neutral-900/50 dark:to-neutral-900/50"
                  : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 right-6 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-900">
                  {isId ? "Paling Populer" : "Most Popular"}
                </div>
              )}

              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-100">
                    {tier.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                    {tier.tagline}
                  </p>
                </div>

                <div className="rounded-xl bg-neutral-100/70 p-2.5 sm:p-3 text-center dark:bg-neutral-800/60">
                  <span className="text-lg sm:text-xl font-extrabold text-neutral-900 dark:text-neutral-50">
                    {tier.price}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {isId ? "Estimasi Waktu" : "Estimated Time"}: {tier.turnaround}
                  </span>
                </div>

                <div className="pt-1.5">
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                    {isId ? "Yang Termasuk:" : "What\u0027s Included:"}
                  </span>
                  <ul className="mt-2 space-y-1.5 sm:space-y-2">
                    {tier.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-[11px] sm:text-xs leading-relaxed text-neutral-600 dark:text-neutral-300"
                      >
                        <FiCheckCircle size={13} className="mt-0.5 shrink-0 text-emerald-500" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full rounded-xl px-3.5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold transition-all duration-300 ${
                    tier.popular
                      ? "bg-primary text-neutral-900 hover:bg-primary-400 shadow-md"
                      : "bg-neutral-100 text-neutral-800 hover:bg-emerald-500 hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-emerald-600"
                  }`}
                >
                  <BsWhatsapp size={13} />
                  <span>{isId ? "Minta Penawaran Harga" : "Request Custom Quote"}</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center pt-2">
        <Link
          href="/pricing"
          className="group flex items-center gap-2 rounded-xl border border-neutral-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          <span>{isId ? "Lihat Daftar Harga Lengkap" : "View Full Pricing Matrix"}</span>
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default PricingOverview;
