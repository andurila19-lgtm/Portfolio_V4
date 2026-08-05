"use client";

import { useTranslations, useLocale } from "next-intl";
import Tooltip from "@/common/components/elements/Tooltip";
import Image from "@/common/components/elements/Image";
import MDXComponent from "@/common/components/elements/MDXComponent";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import { ProjectItem } from "@/common/types/projects";
import { STACKS } from "@/common/constants/stacks";
import ProjectLink from "./ProjectLink";
import { FiCheckCircle, FiAlertTriangle, FiTrendingUp, FiCpu, FiImage, FiInfo } from "react-icons/fi";

const ProjectDetail = (project: ProjectItem) => {
  const t = useTranslations("ProjectsPage");
  const locale = useLocale();
  const isId = locale === "id";
  const {
    title,
    image,
    stacks = [],
    link_demo,
    link_github,
    content,
    category,
    role,
    problem,
    solution,
    result,
    description,
    slug,
  } = project;

  const breadcrumbItems = [
    { name: "Home", url: "https://anduril.web.id" },
    { name: "Projects", url: "https://anduril.web.id/projects" },
    { name: title || "Project Detail", url: `https://anduril.web.id/projects/${slug}` },
  ];

  return (
    <div className="space-y-10">
      <SchemaMarkup type="BreadcrumbList" items={breadcrumbItems} />
      <SchemaMarkup
        type="SoftwareApplication"
        name={title || "Project"}
        description={description || problem || "Digital web application engineered by Anduril."}
      />

      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
              {category || "Web Application"}
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              {isId ? "Peran" : "Role"}: {role || "Lead Developer"}
            </span>
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo || ""}
          link_github={link_github || ""}
        />
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 space-y-3">
        <div className="flex items-center gap-2 text-base font-bold text-neutral-800 dark:text-neutral-100">
          <FiInfo className="text-primary" size={18} />
          <h2>{isId ? "1. Gambaran Umum" : "1. Executive Overview"}</h2>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {description || "High-performance web application engineered to solve critical business bottlenecks."}
        </p>
      </div>

      {problem && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 dark:border-amber-900/40 dark:bg-amber-950/20 space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-amber-800 dark:text-amber-300">
            <FiAlertTriangle size={18} />
            <h2>{isId ? "2. Tantangan yang Dihadapi" : "2. The Challenge"}</h2>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            {problem}
          </p>
        </div>
      )}

      {solution && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/20 space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-emerald-800 dark:text-emerald-300">
            <FiCheckCircle size={18} />
            <h2>{isId ? "3. Solusi yang Dibangun" : "3. Engineered Solution"}</h2>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
            {solution}
          </p>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-neutral-800 dark:text-neutral-100">
          <FiCpu className="text-primary" size={18} />
          <h2>{isId ? "4. Stack Teknologi & Arsitektur" : "4. Tech Stack & Architecture"}</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {stacks.map((stack: string, index: number) => {
            const stackData = STACKS[stack];
            if (!stackData) return (
              <span key={index} className="rounded-lg bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                {stack}
              </span>
            );

            return (
              <Tooltip title={stack} key={index}>
                <div className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                  <div className={`${stackData.color}`}>{stackData.icon}</div>
                  <span>{stack}</span>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>

      {image && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-base font-bold text-neutral-800 dark:text-neutral-100">
            <FiImage className="text-primary" size={18} />
            <h2>{isId ? "5. Galeri & Tampilan Proyek" : "5. Project Gallery & Showcase"}</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <Image
              src={image}
              alt={title || "Project Screenshot"}
              width={1000}
              height={450}
              className="w-full object-cover transition duration-500 hover:scale-[1.03]"
            />
          </div>
        </div>
      )}

      {result && (
        <div className="rounded-2xl border border-blue-200 bg-blue-50/50 p-6 dark:border-blue-900/40 dark:bg-blue-950/20 space-y-3">
          <div className="flex items-center gap-2 text-base font-bold text-blue-800 dark:text-blue-300">
            <FiTrendingUp size={18} />
            <h2>{isId ? "6. Hasil & ROI Bisnis" : "6. Results & Business ROI"}</h2>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-blue-900 dark:text-blue-200 font-medium">
            {result}
          </p>
        </div>
      )}

      {content ? (
        <div className="mt-8 space-y-6 leading-[1.8] dark:text-neutral-300 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <MDXComponent>{content}</MDXComponent>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectDetail;
