import { Link } from "@/i18n/navigation";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";
import { useTranslations } from "next-intl";
import { TbPinnedFilled as PinIcon } from "react-icons/tb";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FiExternalLink as LinkIcon, FiBookOpen } from "react-icons/fi";

import Image from "@/common/components/elements/Image";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { ProjectItem } from "@/common/types/projects";
import { STACKS } from "@/common/constants/stacks";

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  category,
  role,
  problem,
  solution,
  result,
  stacks,
  is_featured,
  link_demo,
  link_github,
}: ProjectItem) => {
  const t = useTranslations("ProjectsPage");

  return (
    <SpotlightCard className="group relative flex flex-col justify-between h-full rounded-2xl cursor-pointer">
      <div>
        {is_featured && (
          <div className="absolute right-0 top-0 z-10 flex items-center gap-x-1 rounded-bl-lg rounded-tr-xl bg-primary px-2.5 py-1 text-xs font-bold text-neutral-900 shadow-sm">
            <PinIcon size={14} />
            <span>Featured</span>
          </div>
        )}

        <div className="relative overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={title}
            width={450}
            height={200}
            className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Link
            href={`/projects/${slug}`}
            className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1.5 bg-black/75 text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span>Case Study & Detail</span>
            <ViewIcon size={20} />
          </Link>
        </div>

        <div className="space-y-3.5 p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            {category && (
              <span className="inline-block rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold text-amber-600 dark:bg-amber-400/20 dark:text-amber-300">
                {category}
              </span>
            )}
            {role && (
              <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                Role: {role}
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-neutral-900 transition-all duration-300 group-hover:text-primary dark:text-neutral-100">
            {title}
          </h3>

          <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
            {description}
          </p>

          {/* Problem, Solution & Result Brief */}
          {(problem || solution || result) && (
            <div className="space-y-1.5 rounded-xl border border-neutral-100 bg-neutral-50/80 p-3 text-xs dark:border-neutral-800 dark:bg-neutral-900/50">
              {problem && (
                <p className="text-neutral-600 dark:text-neutral-400">
                  <strong className="text-neutral-800 dark:text-neutral-200">Masalah: </strong>
                  {problem}
                </p>
              )}
              {solution && (
                <p className="text-neutral-600 dark:text-neutral-400">
                  <strong className="text-neutral-800 dark:text-neutral-200">Solusi: </strong>
                  {solution}
                </p>
              )}
              {result && (
                <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                  <strong>Hasil: </strong>
                  {result}
                </p>
              )}
            </div>
          )}

          {/* Tech Stack Icons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {stacks.map((stack: string, index: number) => {
              const stackData = STACKS[stack];
              if (!stackData) return null;
              return (
                <div key={index} className={`${stackData.color}`} title={stack}>
                  {stackData.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 p-4 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          {link_demo && (
            <a
              href={link_demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-neutral-900"
            >
              <LinkIcon size={14} />
              <span>{t("live_demo_text")}</span>
            </a>
          )}
          {link_github && (
            <a
              href={link_github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-all duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
            >
              <GithubIcon size={14} />
              <span>{t("source_code_text")}</span>
            </a>
          )}
        </div>

        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          <FiBookOpen size={13} />
          <span>Case Study</span>
        </Link>
      </div>
    </SpotlightCard>
  );
};

export default ProjectCard;

