"use server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import * as jose from "jose";
import { AUTH_SECRET } from "./config/config";
import { AdminMiddleware } from "./utils/middlewarehelpers/admin.middleware";
const alg = "HS256";
// import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin") || pathname.startsWith("/api/v1/admin")) {
    return await AdminMiddleware(request); // ✅ Apply middleware for /app
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/app/v1/admin/:path*"],
};
