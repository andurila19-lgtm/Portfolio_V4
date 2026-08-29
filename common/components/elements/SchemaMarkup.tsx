import Script from "next/script";

interface OrganizationSchemaProps {
  type: "Organization" | "Person";
}

interface FAQSchemaProps {
  type: "FAQPage";
  questions: { question: string; answer: string }[];
}

interface BreadcrumbSchemaProps {
  type: "BreadcrumbList";
  items: { name: string; url: string }[];
}

interface ServiceSchemaProps {
  type: "Service";
  name: string;
  description: string;
  providerName?: string;
  url?: string;
}

interface SoftwareSchemaProps {
  type: "SoftwareApplication";
  name: string;
  description: string;
  operatingSystem?: string;
  applicationCategory?: string;
}

type SchemaProps =
  | OrganizationSchemaProps
  | FAQSchemaProps
  | BreadcrumbSchemaProps
  | ServiceSchemaProps
  | SoftwareSchemaProps;

const SchemaMarkup = (props: SchemaProps) => {
  let schemaData: any = {};

  if (props.type === "Organization" || props.type === "Person") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Anduril Ahmad",
      url: "https://anduril.web.id",
      image: "https://anduril.web.id/images/anduril.jpg",
      jobTitle: "Software Engineer & Full-Stack Developer",
      description:
        "Official portfolio of Anduril Ahmad, Software Engineer & Full-Stack Developer specializing in high-performance web applications, Next.js, React, TypeScript, and modern UI/UX engineering.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madiun",
        addressCountry: "ID",
      },
      sameAs: [
        "https://github.com/andurila19",
        "https://linkedin.com/in/andurilahmad",
        "https://instagram.com/anduril.tsx",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "andurilahmad19@gmail.com",
        availableLanguage: ["English", "Indonesian"],
      },
    };
  } else if (props.type === "FAQPage") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: props.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    };
  } else if (props.type === "BreadcrumbList") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: props.items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: item.url,
      })),
    };
  } else if (props.type === "Service") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: props.name,
      description: props.description,
      provider: {
        "@type": "Organization",
        name: props.providerName || "Anduril",
        url: "https://anduril.web.id",
      },
      url: props.url || "https://anduril.web.id/services",
    };
  } else if (props.type === "SoftwareApplication") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: props.name,
      description: props.description,
      operatingSystem: props.operatingSystem || "Web Browser",
      applicationCategory: props.applicationCategory || "BusinessApplication",
    };
  }

  return (
    <Script
      id={`schema-${props.type}-${Math.random().toString(36).substring(2, 7)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaMarkup;
