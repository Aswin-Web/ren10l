import { NextResponse } from "next/server";
import { authenticateUser } from "@/actions/authenticate/authenticate";

export async function GET() {
  try {
    const token = await authenticateUser();

    const response = NextResponse.json({
      message: "Authenticated successfully",
    });
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day expiration
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );
  }
}
