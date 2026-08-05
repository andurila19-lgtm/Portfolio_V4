import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/common/components/elements/Container";
import BackButton from "@/common/components/elements/BackButton";
import PageHeading from "@/common/components/elements/PageHeading";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import IndustryDetailModule from "@/modules/industries/IndustryDetailModule";
import { getIndustryBySlug, INDUSTRIES_LIST } from "@/common/constants/industryData";
import { METADATA } from "@/common/constants/metadata";

interface IndustryDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export const generateStaticParams = () => {
  return INDUSTRIES_LIST.map((ind) => ({
    slug: ind.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: IndustryDetailPageProps): Promise<Metadata> => {
  const locale = params.locale || "en";
  const industry = getIndustryBySlug(params.slug, locale);
  if (!industry) {
    return { title: `Industry Not Found ${METADATA.exTitle}` };
  }

  const pageUrl = `${METADATA.openGraph.url}/${locale}/industries/${industry.slug}`;

  return {
    title: `${industry.title} ${METADATA.exTitle}`,
    description: industry.overview,
    openGraph: {
      title: `${industry.title} ${METADATA.exTitle}`,
      description: industry.overview,
      url: pageUrl,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "article",
      images: [
        {
          url: `${METADATA.openGraph.url}/images/anduril.jpg`,
          width: 1200,
          height: 630,
          alt: industry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.title} ${METADATA.exTitle}`,
      description: industry.overview,
      images: [`${METADATA.openGraph.url}/images/anduril.jpg`],
    },
  };
};

const IndustryDetailPage = ({ params }: IndustryDetailPageProps) => {
  const locale = params?.locale || "en";
  const isId = locale === "id";
  const industry = getIndustryBySlug(params.slug, locale);
  if (!industry) notFound();

  const breadcrumbs = [
    { name: isId ? "Beranda" : "Home", url: `https://anduril.web.id/${locale}` },
    { name: isId ? "Industri" : "Industries", url: `https://anduril.web.id/${locale}/industries` },
    { name: industry.title, url: `https://anduril.web.id/${locale}/industries/${industry.slug}` },
  ];

  return (
    <Container data-aos="fade-up">
      <SchemaMarkup type="BreadcrumbList" items={breadcrumbs} />
      <SchemaMarkup type="FAQPage" questions={industry.faqs} />

      <BackButton url="/industries" />
      <PageHeading title={industry.title} description={industry.tagline} />

      <IndustryDetailModule industry={industry} />
    </Container>
  );
};

export default IndustryDetailPage;
