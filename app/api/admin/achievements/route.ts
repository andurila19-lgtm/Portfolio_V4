import { type NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getAchievementsData, getCustomAchievements } from "@/services/achievements";
import { revalidatePath } from "next/cache";

const PRIMARY_PATH = path.join(process.cwd(), "contents", "custom_achievements.json");
const TMP_PATH = path.join("/tmp", "custom_achievements.json");

function saveCustomAchievements(data: any[]) {
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
    const data = await getAchievementsData();
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

    const newAch = await req.json();
    if (!newAch.name || !newAch.issuing_organization) {
      return NextResponse.json({ message: "Nama sertifikat dan Organisasi wajib diisi!" }, { status: 400 });
    }

    const existingCustom = getCustomAchievements();
    const updatedCustom = [
      {
        id: Date.now(),
        slug: newAch.slug || `cert-${Date.now()}`,
        name: newAch.name,
        issuing_organization: newAch.issuing_organization,
        issue_date: newAch.issue_date || new Date().toISOString().split("T")[0],
        category: newAch.category || "Certificate",
        image: newAch.image || "",
        credential_url: newAch.credential_url || "",
      },
      ...existingCustom,
    ];

    saveCustomAchievements(updatedCustom);

    revalidatePath("/achievements");
    revalidatePath("/id/achievements");
    revalidatePath("/en/achievements");
    revalidatePath("/");

    return NextResponse.json(
      { message: "Sertifikat berhasil ditambahkan!", achievement: newAch },
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
    const idStr = searchParams.get("id");
    const slug = searchParams.get("slug");

    if (!idStr && !slug) {
      return NextResponse.json({ message: "ID atau Slug wajib disertakan" }, { status: 400 });
    }

    const existingCustom = getCustomAchievements();
    const filteredCustom = existingCustom.filter(
      (a) => String(a.id) !== String(idStr) && a.slug !== slug
    );

    saveCustomAchievements(filteredCustom);

    revalidatePath("/achievements");
    revalidatePath("/id/achievements");
    revalidatePath("/en/achievements");
    revalidatePath("/");

    return NextResponse.json({ message: "Sertifikat berhasil dihapus!" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err?.message }, { status: 500 });
  }
}
