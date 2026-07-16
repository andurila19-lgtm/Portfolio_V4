import { type NextRequest, NextResponse } from "next/server";
import { getProjectsData } from "@/services/projects";

export const revalidate = 60;

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale") || "en";
    const data = await getProjectsData(locale);

    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Project API Error:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 },
    );
  }
};
