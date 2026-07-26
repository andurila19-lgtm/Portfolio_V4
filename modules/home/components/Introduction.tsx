import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HiOutlineArrowSmRight as ArrowIcon, HiCheckCircle } from "react-icons/hi";
import { FiBriefcase } from "react-icons/fi";

import WhatsAppButton from "@/common/components/elements/WhatsAppButton";
import Resume from "@/modules/about/components/Resume";
import CountUp from "@/common/components/elements/CountUp";

const Introduction = () => {
  const t = useTranslations("HomePage");

  const paragraphData = [{ index: 1 }, { index: 2 }];

  const badges = [
    t("badges.responsive"),
    t("badges.seo"),
    t("badges.fast"),
    t("badges.modern"),
    t("badges.secure"),
  ];

  // TODO: Sesuaikan statistik angka jika ada pembaruan data proyek real terbaru.
  const stats = [
    { value: 10, suffix: "+", label: t("stats.projects") },
    { value: 3, suffix: "+", label: t("stats.experience") },
    { value: 15, suffix: "+", label: t("stats.tech") },
    { value: 100, suffix: "%", label: t("stats.satisfaction") },
  ];

  return (
    <section className="space-y-6 bg-cover bg-no-repeat">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary dark:bg-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
          </span>
          <span>Available for Hire & Freelance Projects</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          {t("intro")}
        </h1>
        <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
          {t("role")} — Membangun Aplikasi Web Berkecepatan Tinggi, Aman, & Berkonversi Tinggi
        </p>
      </div>

      {/* Badges Section */}
      <div className="flex flex-wrap gap-2.5 pt-1">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-neutral-50/80 px-2.5 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300"
          >
            <HiCheckCircle className="text-emerald-500" size={14} />
            <span>{badge}</span>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <ul className="ml-5 flex list-disc flex-col gap-x-10 gap-y-2 text-sm text-neutral-700 dark:text-neutral-400 md:flex-row">
          <li>{t("location")}</li>
          <li>{t("location_type")}</li>
        </ul>

        <div className="space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base">
          {paragraphData.map((paragraph) => (
            <div key={paragraph.index}>
              {t(`resume.paragraph_${paragraph.index}`)}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-neutral-900 shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary-400 hover:shadow-lg"
          >
            <FiBriefcase size={17} />
            <span>{t("cta_hire")}</span>
            <ArrowIcon className="transition-transform group-hover:translate-x-1" size={18} />
          </Link>
          
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            <span>{t("cta_projects")}</span>
          </Link>

          <Resume />
          <WhatsAppButton floating={false} />
        </div>

        {/* Statistics Counter */}
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200 bg-neutral-50/60 p-4 dark:border-neutral-800 dark:bg-neutral-900/40 sm:grid-cols-4 sm:p-5">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1 text-center sm:text-left">
              <div className="text-2xl font-extrabold text-neutral-900 dark:text-neutral-50 sm:text-3xl">
                <CountUp to={stat.value} duration={2} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;


