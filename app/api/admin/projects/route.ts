import { type NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getProjectsData, getCustomProjects } from "@/services/projects";
import { revalidatePath, revalidateTag } from "next/cache";

const CUSTOM_JSON_PATH = path.join(process.cwd(), "contents", "custom_projects.json");

export async function GET(req: NextRequest) {
  try {
    const data = await getProjectsData("id");
    return NextResponse.json(data, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err?.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get("admin_session")?.value;
    if (sessionCookie !== "authenticated") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const newProject = await req.json();
    if (!newProject.title || !newProject.slug) {
      return NextResponse.json({ message: "Judul dan Slug wajib diisi!" }, { status: 400 });
    }

    const existingCustom = getCustomProjects();
    const updatedCustom = [
      {
        id: Date.now(),
        ...newProject,
        is_show: true,
      },
      ...existingCustom.filter((p) => p.slug !== newProject.slug),
    ];

    fs.writeFileSync(CUSTOM_JSON_PATH, JSON.stringify(updatedCustom, null, 2), "utf-8");

    revalidatePath("/projects");
    revalidatePath("/id/projects");
    revalidatePath("/en/projects");
    revalidatePath("/");

    return NextResponse.json(
      { message: "Proyek berhasil disimpan!", project: newProject },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ message: err?.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get("admin_session")?.value;
    if (sessionCookie !== "authenticated") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ message: "Slug wajib disertakan" }, { status: 400 });
    }

    const existingCustom = getCustomProjects();
    const filteredCustom = existingCustom.filter((p) => p.slug !== slug);

    fs.writeFileSync(CUSTOM_JSON_PATH, JSON.stringify(filteredCustom, null, 2), "utf-8");

    revalidatePath("/projects");
    revalidatePath("/id/projects");
    revalidatePath("/en/projects");
    revalidatePath("/");

    return NextResponse.json({ message: "Proyek berhasil dihapus!" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err?.message }, { status: 500 });
  }
}
