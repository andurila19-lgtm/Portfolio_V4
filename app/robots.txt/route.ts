import { NextResponse } from "next/server";

export async function GET() {
    const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://anduril.web.id/sitemap.xml`;

    return new NextResponse(robots, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
