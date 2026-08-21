"use client";

import useSWR from "swr";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FiFolder, FiArrowRight } from "react-icons/fi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import ProjectCard from "@/modules/projects/components/ProjectCard";
import ProjectSkeleton from "@/modules/projects/components/ProjectSkeleton";
import { fetcher } from "@/services/fetcher";
import { ProjectItem } from "@/common/types/projects";

const FeaturedProjects = () => {
  const locale = useLocale();
  const t = useTranslations("HomePage");
  const { data, isLoading, error } = useSWR(
    `/api/projects?locale=${locale}`,
    fetcher
  );

  const featuredProjects: ProjectItem[] = (data || [])
    .filter((item: ProjectItem) => item?.is_show)
    .sort((a: ProjectItem, b: ProjectItem) => {
      if (a.is_featured && !b.is_featured) return -1;
      if (!a.is_featured && b.is_featured) return 1;
      return b.id - a.id;
    })
    .slice(0, 4);

  if (error) return null;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title={t("featured_projects.title")}
          icon={<FiFolder className="text-neutral-700 dark:text-neutral-300" />}
        />
        <SectionSubHeading>
          <p className="text-neutral-500 dark:text-neutral-400">
            {t("featured_projects.subtitle")}
          </p>
        </SectionSubHeading>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <ProjectSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      )}

      <div className="flex justify-center pt-2">
        <Link
          href="/projects"
          className="group flex items-center gap-2 rounded-xl border border-neutral-300 bg-transparent px-5 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          <span>{t("featured_projects.view_all")}</span>
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
