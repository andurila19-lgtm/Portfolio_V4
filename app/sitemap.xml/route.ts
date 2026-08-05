import { NextResponse } from "next/server";
import { getProjectsData } from "@/services/projects";
import { SERVICES_LIST } from "@/common/constants/serviceData";
import { INDUSTRIES_LIST } from "@/common/constants/industryData";

const BASE_URL = "https://anduril.web.id";

const staticRoutes = [
  { path: "/en", priority: "1.0" },
  { path: "/id", priority: "1.0" },
  { path: "/en/services", priority: "0.9" },
  { path: "/id/services", priority: "0.9" },
  { path: "/en/industries", priority: "0.8" },
  { path: "/id/industries", priority: "0.8" },
  { path: "/en/projects", priority: "0.9" },
  { path: "/id/projects", priority: "0.9" },
  { path: "/en/case-studies", priority: "0.9" },
  { path: "/id/case-studies", priority: "0.9" },
  { path: "/en/pricing", priority: "0.8" },
  { path: "/id/pricing", priority: "0.8" },
  { path: "/en/faq", priority: "0.8" },
  { path: "/id/faq", priority: "0.8" },
  { path: "/en/contents", priority: "0.7" },
  { path: "/id/contents", priority: "0.7" },
  { path: "/en/about", priority: "0.8" },
  { path: "/id/about", priority: "0.8" },
  { path: "/en/contact", priority: "0.9" },
  { path: "/id/contact", priority: "0.9" },
  { path: "/en/achievements", priority: "0.6" },
  { path: "/id/achievements", priority: "0.6" },
  { path: "/en/dashboard", priority: "0.5" },
  { path: "/id/dashboard", priority: "0.5" },
];

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  let dynamicUrls = "";

  // 1. Projects & Case Studies URLs
  try {
    const projects = await getProjectsData();
    if (projects && projects.length > 0) {
      dynamicUrls += projects
        .map(
          (project: { slug: string }) => `
  <url>
    <loc>${BASE_URL}/en/projects/${project.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/id/projects/${project.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/en/case-studies/${project.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/id/case-studies/${project.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
        )
        .join("");
    }
  } catch {
    // If DB fails, static routes render safely
  }

  // 2. Service Detail URLs
  dynamicUrls += SERVICES_LIST.map(
    (s: { slug: string }) => `
  <url>
    <loc>${BASE_URL}/en/services/${s.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${BASE_URL}/id/services/${s.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join("");

  // 3. Industry Detail URLs
  dynamicUrls += INDUSTRIES_LIST.map(
    (ind: { slug: string }) => `
  <url>
    <loc>${BASE_URL}/en/industries/${ind.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/id/industries/${ind.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join("");

  const staticUrls = staticRoutes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${dynamicUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
