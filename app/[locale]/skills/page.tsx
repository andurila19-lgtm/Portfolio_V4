import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Skills from "@/modules/skills/components/Skills";
import { METADATA } from "@/common/constants/metadata";

type Props = { params: { locale: string } };

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "HomePage" });
  return {
    title: `Skills & Tech Matrix ${METADATA.exTitle}`,
    description: "Explore technical competencies, modern stacks, languages, frameworks, and architecture tools.",
    alternates: { canonical: `${process.env.DOMAIN}/${locale}/skills` },
    openGraph: {
      title: `Skills & Tech Matrix ${METADATA.exTitle}`,
      description: "Explore technical competencies, modern stacks, languages, frameworks, and architecture tools.",
      url: `${METADATA.openGraph.url}/${locale}/skills`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [{ url: `${METADATA.openGraph.url}/images/anduril.jpg`, width: 1200, height: 630, alt: "Skills" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Skills & Tech Matrix ${METADATA.exTitle}`,
      description: "Explore technical competencies, modern stacks, languages, frameworks, and architecture tools.",
      images: [`${METADATA.openGraph.url}/images/anduril.jpg`],
    },
  };
}

const SkillsPage = async ({ params: { locale } }: Props) => {
  return (
    <Container data-aos="fade-up">
      <Skills />
    </Container>
  );
};

export default SkillsPage;
