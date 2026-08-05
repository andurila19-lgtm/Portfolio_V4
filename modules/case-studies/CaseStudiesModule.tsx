"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FiTrendingUp, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { fetcher } from "@/services/fetcher";
import { ProjectItem } from "@/common/types/projects";
import ProjectSkeleton from "@/modules/projects/components/ProjectSkeleton";

const CaseStudiesModule = () => {
  const locale = useLocale();
  const isId = locale === "id";
  const { data, isLoading, error } = useSWR(
    `/api/projects?locale=${locale}`,
    fetcher
  );

  const projects: ProjectItem[] = (data || []).filter((item: ProjectItem) => item?.is_show);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {[...Array(4)].map((_, i) => (
          <ProjectSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error || !projects.length) {
    return (
      <div className="p-8 text-center text-sm text-neutral-500">
        {isId ? "Belum ada studi kasus yang tersedia saat ini." : "No case studies available at the moment."}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={project.id || project.slug || index}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
          className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 hover:dark:border-neutral-700"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                <FiTrendingUp size={13} />
                <span>{project.category || (isId ? "Studi Kasus" : "Case Study")}</span>
              </span>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                {project.title}
              </h2>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {isId ? "Peran" : "Role"}: {project.role || "Lead Architect"}
              </p>
              <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 pt-1">
                {project.description}
              </p>
            </div>

            {project.solution && (
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 space-y-1.5">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                  {isId ? "Solusi yang Dibangun:" : "Engineered Solution:"}
                </span>
                <div className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                  <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span>{project.solution}</span>
                </div>
              </div>
            )}

            {project.result && (
              <div className="rounded-xl bg-neutral-50 p-3 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  {isId ? "ROI Bisnis & Hasil:" : "Business ROI & Outcome:"}
                </span>
                <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mt-0.5">
                  {project.result}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
            <Link
              href={`/case-studies/${project.slug}`}
              className="group flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-neutral-900 shadow-md transition-all duration-300 hover:bg-primary-400"
            >
              <span>{isId ? "Baca Detail Studi Kasus Lengkap" : "Read Full Case Study Details"}</span>
              <FiArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CaseStudiesModule;
