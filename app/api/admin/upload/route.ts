import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/common/utils/server";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ message: "File gambar wajib diunggah" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const rawBuffer = Buffer.from(bytes);

    // 1. Optimize image buffer with sharp (resize max 1200px width, convert to webp)
    let optimizedBuffer: Buffer;
    try {
      optimizedBuffer = await sharp(rawBuffer)
        .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();
    } catch {
      optimizedBuffer = rawBuffer;
    }

    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}.webp`;

    // 2. Try uploading to Supabase Storage bucket
    try {
      const supabase = createClient();
      if (supabase) {
        const { data: uploadData, error: uploadErr } = await supabase.storage
          .from("projects")
          .upload(fileName, optimizedBuffer, {
            contentType: "image/webp",
            upsert: true,
          });

        if (!uploadErr && uploadData) {
          const { data: publicUrlData } = supabase.storage
            .from("projects")
            .getPublicUrl(fileName);
          if (publicUrlData?.publicUrl) {
            return NextResponse.json({ url: publicUrlData.publicUrl }, { status: 200 });
          }
        }
      }
    } catch (sbErr) {
      console.warn("Supabase Storage upload fallback to WebP DataURL:", sbErr);
    }

    // 3. Fallback: Compact WebP Data URL
    const base64String = optimizedBuffer.toString("base64");
    const dataUrl = `data:image/webp;base64,${base64String}`;

    return NextResponse.json({ url: dataUrl }, { status: 200 });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { message: "Gagal mengunggah gambar", error: error?.message || String(error) },
      { status: 500 }
    );
  }
}

