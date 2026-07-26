import { BiCodeAlt as SkillsIcon } from "react-icons/bi";
import { useTranslations } from "next-intl";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import GlassIcon from "@/common/components/elements/GlassIcon";
import { STACKS } from "@/common/constants/stacks";

const SkillList = () => {
  const t = useTranslations("HomePage");

  const categories = [
    { key: "frontend", label: t("skills.frontend") },
    { key: "backend", label: t("skills.backend") },
    { key: "languages", label: t("skills.languages") },
    { key: "database", label: t("skills.database") },
    { key: "devops", label: t("skills.devops") },
    { key: "cloud", label: t("skills.cloud") },
    { key: "cybersecurity", label: t("skills.cybersecurity") },
    { key: "tools", label: t("skills.tools") },
  ];

  const groupedSkills = categories
    .map((cat) => {
      const skills = Object.entries(STACKS)
        .filter(([, value]) => value.isActive && value.category === cat.key)
        .map(([name, value]) => ({
          name,
          icon: value.icon,
          background: value.background,
        }));
      return { ...cat, skills };
    })
    .filter((group) => group.skills.length > 0);

  const categoryDescriptions: Record<string, string> = {
    frontend: "Teknologi antarmuka pengguna yang responsif, terstruktur, dan berfokus pada aksesibilitas & UX.",
    backend: "Arsitektur server-side, RESTful API, otentikasi multi-role, dan logika bisnis berskala tinggi.",
    languages: "Bahasa pemrograman inti untuk komputasi frontend, backend, dan analisa keamanan.",
    database: "Sistem manajemen basis data relasional & ORM untuk pengelolaan data yang konsisten.",
    devops: "Versi kontrol, pengelolaan repositori kode, dan otomatisasi deployment.",
    cloud: "Infrastruktur cloud hosting berkecepatan tinggi dengan integrasi CDN global.",
    cybersecurity: "Proteksi standar OWASP Top 10, sanitasi data, dan pengujian celah keamanan sistem.",
    tools: "Perkakas kerja produktivitas pengembangan, pengujian API, dan manajemen proyek.",
  };

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("skills.title")} icon={<SkillsIcon />} />
        <SectionSubHeading>
          <p>{t("skills.sub_title")}</p>
        </SectionSubHeading>
      </div>

      <div className="space-y-8 pt-4">
        {groupedSkills.map((group) => (
          <div key={group.key} className="space-y-3">
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-2">
              <h3 className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                {group.label}
              </h3>
              {categoryDescriptions[group.key] && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {categoryDescriptions[group.key]}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-[2.8em] pb-6 pt-2">
              {group.skills.map((skill, index) => (
                <GlassIcon
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  background={skill.background}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default SkillList;
