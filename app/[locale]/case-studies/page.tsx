import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import CaseStudiesModule from "@/modules/case-studies/CaseStudiesModule";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Case Studies & ROI ${METADATA.exTitle}`,
  description:
    "Explore Anduril agency case studies: In-depth technical engineering, challenges overcome, solutions architected, and business ROI metrics achieved.",
  openGraph: {
    title: `Case Studies & ROI ${METADATA.exTitle}`,
    description: "Deep-dive case studies showcasing technical solutions and business results.",
    url: `${METADATA.openGraph.url}/case-studies`,
    siteName: METADATA.openGraph.siteName,
  },
};

interface CaseStudiesPageProps {
  params: { locale: string };
}

const CaseStudiesPage = ({ params }: CaseStudiesPageProps) => {
  const isId = params?.locale === "id";

  return (
    <Container data-aos="fade-up">
      <SchemaMarkup type="Organization" />
      <PageHeading
        title={isId ? "Studi Kasus & ROI Teknis" : "Case Studies & Technical ROI"}
        description={
          isId
            ? "Pembahasan mendalam tentang tantangan teknis, solusi yang dibangun, dan metrik nyata yang diberikan untuk klien kami."
            : "Detailed breakdowns of technical challenges, engineered solutions, and tangible metrics delivered for our clients."
        }
      />
      <CaseStudiesModule />
    </Container>
  );
};

export default CaseStudiesPage;
