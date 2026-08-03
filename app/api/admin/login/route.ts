import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const expectedPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== expectedPassword) {
      return NextResponse.json(
        { message: "Password admin salah!" },
        { status: 401 }
      );
    }

    const response = NextResponse.json(
      { message: "Login Berhasil!" },
      { status: 200 }
    );

    // Set secure HTTP-only cookie for session
    response.cookies.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error server", error: error?.message },
      { status: 500 }
    );
  }
}
