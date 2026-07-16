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

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title={t("skills.title")} icon={<SkillsIcon />} />
        <SectionSubHeading>
          <p>{t("skills.sub_title")}</p>
        </SectionSubHeading>
      </div>

      <div className="space-y-10 pt-4">
        {groupedSkills.map((group) => (
          <div key={group.key} className="space-y-4">
            <h3 className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest border-b border-neutral-200 dark:border-neutral-800 pb-2">
              {group.label}
            </h3>
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
