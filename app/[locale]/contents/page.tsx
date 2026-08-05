import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import ContentLinks from "@/modules/contents/ContentLinks";
import { METADATA } from "@/common/constants/metadata";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "ContentsPage" });

  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
    alternates: {
      canonical: `${process.env.DOMAIN}/${locale}/contents`,
    },
    openGraph: {
      title: `${t("title")} ${METADATA.exTitle}`,
      description: t("description"),
      url: `${METADATA.openGraph.url}/${locale}/contents`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [{ url: `${METADATA.openGraph.url}/images/anduril.jpg`, width: 1200, height: 630, alt: t("title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} ${METADATA.exTitle}`,
      description: t("description"),
      images: [`${METADATA.openGraph.url}/images/anduril.jpg`],
    },
  };
}

const ContentsPage = async ({ params: { locale } }: Props) => {
  const t = await getTranslations({ locale, namespace: "ContentsPage" });

  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <ContentLinks />
    </Container>
  );
};

export default ContentsPage;
