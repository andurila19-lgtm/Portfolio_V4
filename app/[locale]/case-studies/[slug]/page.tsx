import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import BackButton from "@/common/components/elements/BackButton";
import PageHeading from "@/common/components/elements/PageHeading";
import ProjectDetail from "@/modules/projects/components/ProjectDetail";
import { ProjectItem } from "@/common/types/projects";
import { METADATA } from "@/common/constants/metadata";
import { loadMdxFiles } from "@/common/libs/mdx";
import { getProjectsDataBySlug } from "@/services/projects";

interface CaseStudyDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

const getProjectDetail = async (slug: string, locale: string): Promise<ProjectItem> => {
  const projects = await getProjectsDataBySlug(slug, locale);
  const contents = loadMdxFiles();
  const content = contents.find((item) => item.slug === slug);
  const response = { ...projects, content: content?.content };
  return JSON.parse(JSON.stringify(response));
};

export const generateMetadata = async ({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> => {
  const locale = params.locale || "en";
  const project = await getProjectDetail(params?.slug, locale);

  return {
    title: `${project.title} Case Study ${METADATA.exTitle}`,
    description: project.description || project.solution,
    openGraph: {
      title: `${project.title} Case Study ${METADATA.exTitle}`,
      description: project.description || project.solution,
      images: [{ url: project.image, alt: project.title }],
      url: `${METADATA.openGraph.url}/${locale}/case-studies/${project.slug}`,
      siteName: METADATA.openGraph.siteName,
    },
  };
};

const CaseStudyDetailPage = async ({ params }: CaseStudyDetailPageProps) => {
  const locale = params?.locale || "en";
  const isId = locale === "id";
  const data = await getProjectDetail(params?.slug, locale);

  return (
    <Container data-aos="fade-up">
      <BackButton url="/case-studies" />
      <PageHeading title={`${data?.title} — ${isId ? "Studi Kasus" : "Case Study"}`} description={data?.description} />
      <ProjectDetail {...data} />
    </Container>
  );
};

export default CaseStudyDetailPage;
