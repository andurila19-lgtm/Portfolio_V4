import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ message: "File gambar wajib diunggah" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert file to Base64 Data URL for 100% compatibility with Vercel serverless functions
    const mimeType = file.type || "image/jpeg";
    const base64String = buffer.toString("base64");
    const dataUrl = `data:${mimeType};base64,${base64String}`;

    return NextResponse.json({ url: dataUrl }, { status: 200 });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { message: "Gagal mengunggah gambar", error: error?.message || String(error) },
      { status: 500 }
    );
  }
}
