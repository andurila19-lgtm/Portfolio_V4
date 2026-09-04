import { useTranslations } from "next-intl";
import { LuDownload as DownloadIcon } from "react-icons/lu";

const Resume = () => {
  const t = useTranslations("AboutPage");

  const RESUME_URL = "/CV_Anduril_Ahmad.pdf";

  return (
    <a
      href={RESUME_URL}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="group flex w-fit items-center gap-2 rounded-lg border border-neutral-400 bg-neutral-100 px-3 py-2 text-sm transition duration-100 hover:text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:text-neutral-200"
      data-umami-event="click_resume_download_button"
    >
      <DownloadIcon />
      <span>{t("resume_download_button")}</span>
    </a>
  );
};

export default Resume;

