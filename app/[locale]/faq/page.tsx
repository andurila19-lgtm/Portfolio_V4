import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import FAQModule from "@/modules/faq/FAQModule";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Frequently Asked Questions (FAQ) ${METADATA.exTitle}`,
  description:
    "Find immediate answers regarding Anduril agency services, project timelines, tech stacks, maintenance guarantees, SEO, and AI optimization.",
  openGraph: {
    title: `Frequently Asked Questions (FAQ) ${METADATA.exTitle}`,
    description: "Clear and transparent answers to key client questions.",
    url: `${METADATA.openGraph.url}/faq`,
    siteName: METADATA.openGraph.siteName,
  },
};

interface FAQPageProps {
  params: { locale: string };
}

const FAQPage = ({ params }: FAQPageProps) => {
  const isId = params?.locale === "id";

  return (
    <Container data-aos="fade-up">
      <SchemaMarkup type="Organization" />
      <PageHeading
        title={isId ? "Pertanyaan yang Sering Diajukan (FAQ)" : "Frequently Asked Questions (FAQ)"}
        description={
          isId
            ? "Semua yang perlu Anda ketahui tentang bekerja sama dengan Anduril digital agency, dari perencanaan proyek hingga dukungan pasca-peluncuran."
            : "Everything you need to know about working with Anduril digital agency, from project discovery to post-launch support."
        }
      />
      <FAQModule />
    </Container>
  );
};

export default FAQPage;
