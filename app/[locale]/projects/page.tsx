import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constants/metadata";

interface ProjectsPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: ProjectsPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  const title = `${t("title")} ${METADATA.exTitle}`;
  const description = t("description");

  return {
    title,
    description,
    keywords: "portfolio, software engineer, web developer, projects, anduril ahmad",
    openGraph: {
      title,
      description,
      images: [{ url: METADATA.profile, alt: title }],
      url: `${METADATA.openGraph.url}/${locale}/projects`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [METADATA.profile],
    },
    alternates: {
      canonical: `${process.env.DOMAIN || "https://anduril.web.id"}/${locale}/projects`,
    },
  };
}

const ProjectsPage = async ({ params: { locale } }: ProjectsPageProps) => {
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
