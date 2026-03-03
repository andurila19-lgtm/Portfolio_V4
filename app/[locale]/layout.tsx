import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { getServerSession } from "next-auth";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "../globals.css";

import Layouts from "@/common/components/layouts";
import ThemeProviderContext from "@/common/stores/theme";
import NextAuthProvider from "@/SessionProvider";
import { METADATA } from "@/common/constants/metadata";
import { inter } from "@/common/styles/fonts";
import SkeletonThemeProvider from "@/SkeletonThemeProvider";
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
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: "website",
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
  const session = await getServerSession();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: METADATA.creator,
    url: "https://anduril.web.id",
    sameAs: [
      "https://www.instagram.com/rm_andurilahmad",
      "https://www.linkedin.com/in/anduril-ahmad-silvera-burhani-837492387/",
      "https://github.com/andurila19-lgtm",
      "https://www.tiktok.com/@amad.ddd",
    ],
    jobTitle: "Software Engineer",
    description: METADATA.description,
  };

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="cd912b2f-6f76-4633-a28f-93ddd2f841da"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className={inter.className}>
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
          <NextAuthProvider session={session}>
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
