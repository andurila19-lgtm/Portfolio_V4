import { Metadata } from "next";
import { notFound } from "next/navigation";

import BackButton from "@/common/components/elements/BackButton";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import { LOCAL_PROJECTS } from "@/common/constants/projects";
import { getProjectsDataBySlug } from "@/services/projects";

interface ProjectDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export const generateStaticParams = () => {
  return LOCAL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
};

const getProjectDetail = async (slug: string, locale: string): Promise<ProjectItem | null> => {
  const projects = await getProjectsDataBySlug(slug, locale);
  if (!projects) return null;
  const contents = loadMdxFiles();
  const content = contents.find((item) => item.slug === slug);
  const response = { ...projects, content: content?.content };
  return JSON.parse(JSON.stringify(response));
};

export const generateMetadata = async ({
  params,
}: ProjectDetailPageProps): Promise<Metadata> => {
  const locale = params.locale || "en";
  const project = await getProjectDetail(params?.slug, locale);

  if (!project) {
    return {
      title: `Project Not Found ${METADATA.exTitle}`,
    };
  }

  return {
    title: `${project.title} ${METADATA.exTitle}`,
    description: project.description,
    openGraph: {
      title: `${project.title} ${METADATA.exTitle}`,
      description: project.description,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
      url: `${METADATA.openGraph.url}/${locale}/projects/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "article",
      authors: [METADATA.creator],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} ${METADATA.exTitle}`,
      description: project.description,
      images: [project.image],
    },
    keywords: project.title,
    alternates: {
      canonical: `${process.env.DOMAIN || "https://anduril.web.id"}/${locale}/projects/${params.slug}`,
    },
  };
};

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const data = await getProjectDetail(params?.slug, params?.locale || "en");

  if (!data) {
    notFound();
  }

  return (
    <Container data-aos="fade-up">
      <BackButton url="/projects" />
      <PageHeading title={data?.title} description={data?.description} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default ProjectDetailPage;
