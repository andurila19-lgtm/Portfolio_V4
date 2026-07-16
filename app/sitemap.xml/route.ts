import { NextResponse } from "next/server";
import { getProjectsData } from "@/services/projects";

const BASE_URL = "https://anduril.web.id";

const staticRoutes = [
  { path: "/en", priority: "1.0" },
  { path: "/id", priority: "1.0" },
  { path: "/en/about", priority: "0.8" },
  { path: "/id/about", priority: "0.8" },
  { path: "/en/projects", priority: "0.8" },
  { path: "/id/projects", priority: "0.8" },
  { path: "/en/achievements", priority: "0.7" },
  { path: "/id/achievements", priority: "0.7" },
  { path: "/en/contact", priority: "0.8" },
  { path: "/id/contact", priority: "0.8" },
  { path: "/en/dashboard", priority: "0.5" },
  { path: "/id/dashboard", priority: "0.5" },
];

export async function GET() {
  const today = new Date().toISOString().split("T")[0];

  let projectUrls = "";
  try {
    const projects = await getProjectsData();
    if (projects && projects.length > 0) {
      projectUrls = projects
        .map(
          (project: { slug: string }) => `
  <url>
    <loc>${BASE_URL}/en/projects/${project.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${BASE_URL}/id/projects/${project.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
        )
        .join("");
    }
  } catch {
    // If database is unavailable, proceed with static routes only
  }

  const staticUrls = staticRoutes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticUrls}${projectUrls}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
