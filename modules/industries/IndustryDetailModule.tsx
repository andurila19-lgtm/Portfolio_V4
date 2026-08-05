"use client";

import { useLocale } from "next-intl";
import { IndustryItem } from "@/common/constants/industryData";
import { Link } from "@/i18n/navigation";
import { FiCheckCircle, FiArrowRight, FiFileText } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

interface IndustryDetailModuleProps {
  industry: IndustryItem;
}

const IndustryDetailModule = ({ industry }: IndustryDetailModuleProps) => {
  const locale = useLocale();
  const isId = locale === "id";

  const whatsappUrl = `https://wa.me/6289523315624?text=${encodeURIComponent(
    `Halo Anduril, saya ingin berkonsultasi mengenai solusi website untuk industri ${industry.title}.`
  )}`;

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50 space-y-4">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {isId ? "Gambaran Industri & Dinamika Pasar" : "Industry Overview & Market Dynamics"}
        </h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {industry.overview}
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {isId ? "Solusi Rekayasa Khusus" : "Tailored Engineering Solutions"}
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {industry.solutions.map((sol, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900/50"
            >
              <FiCheckCircle size={18} className="mt-0.5 shrink-0 text-emerald-500" />
              <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {sol}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 dark:border-primary/40 dark:bg-primary/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
            <FiFileText size={14} />
            <span>{isId ? "Studi Kasus Unggulan" : "Featured Case Study"}</span>
          </div>
          <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-100">
            {industry.caseStudyRef.title}
          </h3>
        </div>
        <Link
          href={`/projects/${industry.caseStudyRef.slug}`}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-neutral-900 shadow-md transition hover:bg-primary-400 shrink-0"
        >
          <span>{isId ? "Lihat Studi Kasus" : "View Case Study"}</span>
          <FiArrowRight size={14} />
        </Link>
      </div>

      <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-8 text-white shadow-xl dark:border dark:border-neutral-800 space-y-4">
        <h3 className="text-xl font-extrabold sm:text-2xl">
          {isId
            ? `Konsultasikan proyek ${industry.title} Anda`
            : `Consult on your ${industry.title} project`}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300">
          {isId
            ? "Mari bangun platform digital yang disesuaikan dengan kebutuhan industri Anda."
            : "Let\u0027s build a digital platform customized to your industry requirements."}
        </p>
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-600"
          >
            <BsWhatsapp size={16} />
            <span>{isId ? "Konsultasi dengan Ahli" : "Talk to an Expert"}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetailModule;
