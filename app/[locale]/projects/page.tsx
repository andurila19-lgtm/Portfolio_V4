import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constants/metadata";

interface ProjectsPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: ProjectsPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  const title = `Projects & Archives ${METADATA.exTitle}`;
  const description = "Digital archive of creative engineering, professional certifications, and technical projects.";

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

const ProjectsPage = async () => {
  return (
    <Container data-aos="fade-up">
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
