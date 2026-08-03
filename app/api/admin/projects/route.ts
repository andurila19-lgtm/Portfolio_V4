import { type NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getProjectsData, getCustomProjects } from "@/services/projects";
import { revalidatePath } from "next/cache";

const PRIMARY_PATH = path.join(process.cwd(), "contents", "custom_projects.json");
const TMP_PATH = path.join("/tmp", "custom_projects.json");

function saveCustomProjects(data: any[]) {
  const jsonStr = JSON.stringify(data, null, 2);
  try {
    fs.writeFileSync(PRIMARY_PATH, jsonStr, "utf-8");
  } catch (e) {
    console.warn("Primary path read-only, saving to /tmp:", e);
  }
  try {
    fs.writeFileSync(TMP_PATH, jsonStr, "utf-8");
  } catch (e) {
    console.warn("Could not save to /tmp:", e);
  }
}

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

    saveCustomProjects(updatedCustom);

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

    saveCustomProjects(filteredCustom);

    revalidatePath("/projects");
    revalidatePath("/id/projects");
    revalidatePath("/en/projects");
    revalidatePath("/");

    return NextResponse.json({ message: "Proyek berhasil dihapus!" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err?.message }, { status: 500 });
  }
}
