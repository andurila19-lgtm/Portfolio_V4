import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import IndustriesModule from "@/modules/industries/IndustriesModule";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Industry Solutions ${METADATA.exTitle}`,
  description:
    "Tailored digital solutions across key industry verticals: E-Commerce & Skincare Retail, POS & Commercial Enterprise, EdTech & Academic Systems, and SaaS B2B Software.",
  openGraph: {
    title: `Industry Solutions ${METADATA.exTitle}`,
    description: "Industry-specific digital solutions engineered for growth and performance.",
    url: `${METADATA.openGraph.url}/industries`,
    siteName: METADATA.openGraph.siteName,
  },
};

interface IndustriesPageProps {
  params: { locale: string };
}

const IndustriesPage = ({ params }: IndustriesPageProps) => {
  const isId = params?.locale === "id";

  return (
    <Container data-aos="fade-up">
      <SchemaMarkup type="Organization" />
      <PageHeading
        title={isId ? "Solusi per Industri" : "Industry Solutions"}
        description={
          isId
            ? "Arsitektur digital dan aplikasi web khusus yang dirancang sesuai sektor pasar dan alur kerja bisnis Anda."
            : "Specialized digital architecture and web applications tailored to your specific market sector and business workflow."
        }
      />
      <IndustriesModule />
    </Container>
  );
};

export default IndustriesPage;
