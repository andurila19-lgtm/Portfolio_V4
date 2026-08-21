import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import ServicesModule from "@/modules/services/ServicesModule";
import { METADATA } from "@/common/constants/metadata";

export const metadata: Metadata = {
  title: `Engineering & Technical Competencies ${METADATA.exTitle}`,
  description:
    "Explore engineering capabilities: Adaptive Frontend, Scalable Backend, Core Optimization, Full-Stack Architecture, and Smart Integrations.",
  openGraph: {
    title: `Engineering & Technical Competencies ${METADATA.exTitle}`,
    description:
      "Explore engineering capabilities: Adaptive Frontend, Scalable Backend, Core Optimization, Full-Stack Architecture, and Smart Integrations.",
    url: `${METADATA.openGraph.url}/services`,
    siteName: METADATA.openGraph.siteName,
  },
};

const ServicesPage = () => {
  return (
    <Container data-aos="fade-up">
      <ServicesModule />
    </Container>
  );
};

export default ServicesPage;
