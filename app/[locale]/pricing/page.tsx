import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import PricingModule from "@/modules/pricing/PricingModule";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Agency Pricing Packages ${METADATA.exTitle}`,
  description:
    "Transparent development packages and pricing tiers for Company Profiles, Custom Web Apps, POS Systems, SaaS Products, SEO, and Maintenance retainers.",
  openGraph: {
    title: `Agency Pricing Packages ${METADATA.exTitle}`,
    description: "Transparent digital agency pricing tailored to your business scale.",
    url: `${METADATA.openGraph.url}/pricing`,
    siteName: METADATA.openGraph.siteName,
  },
};

interface PricingPageProps {
  params: { locale: string };
}

const PricingPage = ({ params }: PricingPageProps) => {
  const isId = params?.locale === "id";

  return (
    <Container data-aos="fade-up">
      <SchemaMarkup type="Organization" />
      <PageHeading
        title={isId ? "Paket Harga & Investasi" : "Pricing & Investment Tiers"}
        description={
          isId
            ? "Paket pengembangan agensi yang jelas dan transparan, dirancang untuk startup, bisnis berkembang, dan organisasi enterprise."
            : "Clear, transparent agency development packages designed for startups, growing businesses, and enterprise organizations."
        }
      />
      <PricingModule />
    </Container>
  );
};

export default PricingPage;
