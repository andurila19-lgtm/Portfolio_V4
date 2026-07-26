"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";

const CTABanner = () => {
  const t = useTranslations("HomePage");
  const whatsappUrl = "https://wa.me/6289523315624?text=Halo%20Anduril,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website.";

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-8 text-white shadow-xl dark:border dark:border-neutral-800 sm:p-10">
      {/* Decorative Glow */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <FiClock size={13} />
            <span>{t("cta_banner.response_time")}</span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {t("cta_banner.title")}
          </h2>

          <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
            {t("cta_banner.subtitle")}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-600"
          >
            <BsWhatsapp size={17} />
            <span>Konsultasi WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-neutral-900 shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary-400"
          >
            <span>Kirim Pesan Email</span>
            <FiArrowRight size={16} />
          </Link>
        </div>

        {/* Quick Contact & Location Meta */}
        <div className="grid grid-cols-1 gap-4 pt-6 border-t border-neutral-800/80 sm:grid-cols-3 text-xs text-neutral-300">
          <div className="flex items-center gap-2.5">
            <FiMapPin className="text-primary" size={16} />
            <span>Berdomisili di Madiun, Indonesia (Onsite & Remote)</span>
          </div>

          <div className="flex items-center gap-2.5">
            <FiMail className="text-primary" size={16} />
            <span>andurilahmad19@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/andurila19-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
              title="GitHub"
            >
              <BsGithub size={15} />
            </a>
            <a
              href="https://linkedin.com/in/andurilahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition"
              title="LinkedIn"
            >
              <BsLinkedin size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
