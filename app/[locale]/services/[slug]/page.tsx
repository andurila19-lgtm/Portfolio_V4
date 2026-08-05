import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/common/components/elements/Container";
import BackButton from "@/common/components/elements/BackButton";
import PageHeading from "@/common/components/elements/PageHeading";
import SchemaMarkup from "@/common/components/elements/SchemaMarkup";
import ServiceDetailModule from "@/modules/services/ServiceDetailModule";
import { getServiceBySlug, SERVICES_LIST } from "@/common/constants/serviceData";
import { METADATA } from "@/common/constants/metadata";

interface ServiceDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export const generateStaticParams = () => {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: ServiceDetailPageProps): Promise<Metadata> => {
  const locale = params.locale || "en";
  const service = getServiceBySlug(params.slug, locale);
  if (!service) {
    return {
      title: `Service Not Found ${METADATA.exTitle}`,
    };
  }

  const pageUrl = `${METADATA.openGraph.url}/${locale}/services/${service.slug}`;

  return {
    title: `${service.title} ${METADATA.exTitle}`,
    description: service.summary,
    openGraph: {
      title: `${service.title} ${METADATA.exTitle}`,
      description: service.summary,
      url: pageUrl,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "article",
      images: [
        {
          url: `${METADATA.openGraph.url}/images/anduril.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} ${METADATA.exTitle}`,
      description: service.summary,
      images: [`${METADATA.openGraph.url}/images/anduril.jpg`],
    },
    keywords: `${service.title}, ${service.category}, ${service.techStack.join(", ")}, Anduril agency`,
  };
};

const ServiceDetailPage = ({ params }: ServiceDetailPageProps) => {
  const locale = params?.locale || "en";
  const service = getServiceBySlug(params.slug, locale);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: locale === "id" ? "Beranda" : "Home", url: `https://anduril.web.id/${locale}` },
    { name: locale === "id" ? "Layanan" : "Services", url: `https://anduril.web.id/${locale}/services` },
    { name: service.title, url: `https://anduril.web.id/${locale}/services/${service.slug}` },
  ];

  return (
    <Container data-aos="fade-up">
      <SchemaMarkup type="BreadcrumbList" items={breadcrumbItems} />
      <SchemaMarkup
        type="Service"
        name={service.title}
        description={service.summary}
        url={`https://anduril.web.id/${locale}/services/${service.slug}`}
      />
      <SchemaMarkup type="FAQPage" questions={service.faqs} />

      <BackButton url="/services" />
      <PageHeading title={service.title} description={service.tagline} />

      <ServiceDetailModule service={service} />
    </Container>
  );
};

export default ServiceDetailPage;
