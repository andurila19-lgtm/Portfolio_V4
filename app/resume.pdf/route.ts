import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const GET = async () => {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="resume.pdf"',
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return new NextResponse("File Not Found", { status: 404 });
  }
};
