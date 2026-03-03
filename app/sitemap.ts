import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://anduril.web.id";
    const locales = ["en", "id"];
    const paths = ["", "/about", "/projects", "/contact", "/achievements"];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        paths.forEach((path) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: "monthly",
                priority: path === "" ? 1.0 : 0.8,
            });
        });
    });

    return sitemapEntries;
}

