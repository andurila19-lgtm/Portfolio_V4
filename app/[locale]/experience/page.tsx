import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import EvolutionLog from "@/modules/about/components/EvolutionLog";
import { METADATA } from "@/common/constants/metadata";

type Props = { params: { locale: string } };

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  return {
    title: `Experience & Evolution Log ${METADATA.exTitle}`,
    description: "A systematic chronicle of technical milestones, corporate contributions, and academic growth.",
    alternates: { canonical: `${process.env.DOMAIN}/${locale}/experience` },
    openGraph: {
      title: `Experience & Evolution Log ${METADATA.exTitle}`,
      description: "A systematic chronicle of technical milestones, corporate contributions, and academic growth.",
      url: `${METADATA.openGraph.url}/${locale}/experience`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "profile",
      images: [{ url: `${METADATA.openGraph.url}/images/anduril.jpg`, width: 1200, height: 630, alt: "Experience" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Experience & Evolution Log ${METADATA.exTitle}`,
      description: "A systematic chronicle of technical milestones, corporate contributions, and academic growth.",
      images: [`${METADATA.openGraph.url}/images/anduril.jpg`],
    },
  };
}

const ExperiencePage = async () => {
  return (
    <Container data-aos="fade-up">
      <EvolutionLog />
    </Container>
  );
};

export default ExperiencePage;
