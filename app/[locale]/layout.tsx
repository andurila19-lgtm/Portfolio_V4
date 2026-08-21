import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "../globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import NextAuthProvider from "@/common/providers/SessionProvider";
import { METADATA } from "@/common/constants/metadata";
import { inter } from "@/common/styles/fonts";
import SkeletonThemeProvider from "@/common/providers/SkeletonThemeProvider";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : process.env.DOMAIN || "https://anduril.web.id",
  ),
  title: {
    default: METADATA.creator,
    template: `%s ${METADATA.exTitle}`,
  },
  description: METADATA.description,

  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    title: METADATA.creator,
    description: METADATA.description,
    images: [
      {
        url: METADATA.profile,
        alt: METADATA.creator,
      },
    ],
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.creator,
    description: METADATA.description,
    images: [METADATA.profile],
  },
};


interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const RootLayout = async ({
  children,
  params: { locale },
}: RootLayoutProps) => {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://anduril.web.id/#person",
        "name": "Anduril Ahmad",
        "url": "https://anduril.web.id",
        "jobTitle": "Software Engineer & Full-Stack Developer",
        "sameAs": [
          "https://github.com/andurila19",
          "https://linkedin.com/in/andurilahmad",
          "https://instagram.com/rm_andurilahmad"
        ],
        "knowsAbout": [
          "Full-Stack Development",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "PostgreSQL",
          "Software Architecture",
          "UI/UX Design Systems"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Madiun",
          "addressRegion": "Jawa Timur",
          "addressCountry": "ID"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://anduril.web.id/#website",
        "url": "https://anduril.web.id",
        "name": "Anduril Ahmad — Software Engineer & Full-Stack Developer Portfolio",
        "publisher": {
          "@id": "https://anduril.web.id/#person"
        },
        "inLanguage": ["id-ID", "en-US"]
      }
    ]
  };

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="cd912b2f-6f76-4633-a28f-93ddd2f841da"
        />

        <NextTopLoader
          color="#fbe400"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #fbe400,0 0 5px #ffffb8"
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NextAuthProvider session={null}>
            <ThemeProviderContext>
              <SkeletonThemeProvider>
                <Layouts>{children}</Layouts>
              </SkeletonThemeProvider>
            </ThemeProviderContext>
          </NextAuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
