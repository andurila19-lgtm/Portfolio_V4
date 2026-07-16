import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { HiOutlineArrowSmRight as ArrowIcon } from "react-icons/hi";

const Introduction = () => {
  const t = useTranslations("HomePage");

  const paragraphData = [{ index: 1 }, { index: 2 }];

  return (
    <section className="space-y-4 bg-cover bg-no-repeat">
      <div className="space-y-1.5">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          {t("intro")}
        </h1>
        <p className="text-lg font-medium text-neutral-600 dark:text-neutral-400">
          {t("role")}
        </p>
      </div>

      <div className="space-y-6">
        <ul className="ml-5 flex list-disc flex-col gap-x-10 gap-y-2 text-neutral-700 dark:text-neutral-400 md:flex-row">
          <li>{t("location")}</li>
          <li>{t("location_type")}</li>
        </ul>
        <div className="space-y-4 leading-7 text-neutral-600 dark:text-neutral-300">
          {paragraphData.map((paragraph) => (
            <div key={paragraph.index}>
              {t(`resume.paragraph_${paragraph.index}`)}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="group flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-md transition duration-300 hover:scale-105 hover:bg-primary-400"
          >
            <span>{t("cta_projects")}</span>
            <ArrowIcon className="transition-transform group-hover:translate-x-1" size={18} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-transparent px-4 py-2.5 text-sm font-medium text-neutral-700 transition duration-300 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <span>{t("cta_contact")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

