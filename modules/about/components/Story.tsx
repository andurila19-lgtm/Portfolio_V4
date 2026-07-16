import Image from "@/common/components/elements/Image";
import { useTranslations } from "next-intl";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

const Story = () => {
  const t = useTranslations("AboutPage");

  const paragraphData = [{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }];

  return (
    <section className="space-y-4 leading-7 text-neutral-800 dark:text-neutral-300">
      {paragraphData.map((paragraph) => (
        <div key={paragraph.index}>
          {t(`resume.paragraph_${paragraph.index}`)}
        </div>
      ))}
      <Image
        src="/images/Andrl%20-blue.png"
        alt="Anduril Ahmad"
        width={100}
        height={100}
      />
      {/* 
      <div className="flex flex-wrap gap-4 pt-4">
        <Resume />
        <Portfolio />
      </div>
      */}
    </section>
  );
};

export default Story;
