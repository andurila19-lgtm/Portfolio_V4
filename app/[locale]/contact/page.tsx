import { Metadata } from "next";
import Container from "@/common/components/elements/Container";
import Contact from "@/modules/contact";
import { METADATA } from "@/common/constants/metadata";

type Props = { params: { locale: string } };

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  return {
    title: `Contact & Collaboration ${METADATA.exTitle}`,
    description: "Let's start a conversation. Open for web engineering and technical collaboration.",
    alternates: { canonical: `${process.env.DOMAIN}/${locale}/contact` },
    openGraph: {
      title: `Contact & Collaboration ${METADATA.exTitle}`,
      description: "Let's start a conversation. Open for web engineering and technical collaboration.",
      url: `${METADATA.openGraph.url}/${locale}/contact`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [{ url: `${METADATA.openGraph.url}/images/anduril.jpg`, width: 1200, height: 630, alt: "Contact" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `Contact & Collaboration ${METADATA.exTitle}`,
      description: "Let's start a conversation. Open for web engineering and technical collaboration.",
      images: [`${METADATA.openGraph.url}/images/anduril.jpg`],
    },
  };
}

const ContactPage = async () => {
  return (
    <Container data-aos="fade-up">
      <Contact />
    </Container>
  );
};

export default ContactPage;
