import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import ServicesModule from "@/modules/services/ServicesModule";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Digital Agency Services ${METADATA.exTitle}`,
  description:
    "Explore Anduril's end-to-end digital agency services: Website Development, Company Profile, CMS, POS Dashboard, SaaS Engineering, Maintenance & Security, SEO, and AI Optimization (AEO/GEO).",
  openGraph: {
    title: `Digital Agency Services ${METADATA.exTitle}`,
    description:
      "High-performance website development, custom web applications, POS dashboards, SaaS, SEO, and AI optimization services.",
    url: `${METADATA.openGraph.url}/services`,
    siteName: METADATA.openGraph.siteName,
  },
};

interface ServicesPageProps {
  params: {
    locale: string;
  };
}

const ServicesPage = ({ params }: ServicesPageProps) => {
  const isId = params?.locale === "id";

  return (
    <Container data-aos="fade-up">
      <SchemaMarkup type="Organization" />
      <PageHeading
        title={isId ? "Layanan & Solusi Digital Agency" : "Agency Services & Digital Solutions"}
        description={
          isId
            ? "Layanan lengkap pengembangan website, aplikasi web kustom, sistem POS & dashboard, SEO, serta optimasi mesin pencari AI (AEO/GEO)."
            : "Comprehensive web development, SaaS, dashboard systems, SEO, and AI optimization services engineered for scalable growth."
        }
      />
      <ServicesModule />
    </Container>
  );
};

export default ServicesPage;
