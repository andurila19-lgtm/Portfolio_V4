import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import TechnicalVitals from "@/modules/dashboard/components/TechnicalVitals";
import { METADATA } from "@/common/constants/metadata";

type Props = { params: { locale: string } };

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  return {
    title: `Technical Vitals & Stats ${METADATA.exTitle}`,
    description: "System intelligence, GitHub contributions, coding velocity, and telemetry metrics.",
    alternates: { canonical: `${process.env.DOMAIN}/${locale}/stats` },
    openGraph: {
      title: `Technical Vitals & Stats ${METADATA.exTitle}`,
      description: "System intelligence, GitHub contributions, coding velocity, and telemetry metrics.",
      url: `${METADATA.openGraph.url}/${locale}/stats`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [{ url: `${METADATA.openGraph.url}/images/anduril.jpg`, width: 1200, height: 630, alt: "Stats" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Technical Vitals & Stats ${METADATA.exTitle}`,
      description: "System intelligence, GitHub contributions, coding velocity, and telemetry metrics.",
      images: [`${METADATA.openGraph.url}/images/anduril.jpg`],
    },
  };
}

const StatsPage = async () => {
  return (
    <Container data-aos="fade-up">
      <TechnicalVitals />
    </Container>
  );
};

export default StatsPage;
