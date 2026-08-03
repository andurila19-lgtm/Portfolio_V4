import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logout Berhasil" },
    { status: 200 }
  );

  response.cookies.delete("admin_session");
  return response;
}
