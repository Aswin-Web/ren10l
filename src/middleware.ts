"use server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import * as jose from "jose";
import { AUTH_SECRET } from "./config/config";
const alg = "HS256";
// import jwt from "jsonwebtoken";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // console.log("🚀 ~ getServerSession:", getServerSession);
  const token = await getToken({
    req: request,
    secret: process.env.NEXT_AUTH_SECRET,
  });
  const accessToken: string = String(token.customToken);
  if (!accessToken) throw new Error(" Not logged in");
  const { payload, protectedHeader } = await jose.jwtVerify(
    accessToken,
    AUTH_SECRET,
    {
      issuer: "urn:example:issuer",
      audience: "urn:example:audience",
    }
  );
  console.log("🚀 ~ middleware ~ payload:", payload);
  // const data = await jwt.verify(accessToken, process.env.NEXT_AUTH_SECRET);
  // console.log("🚀 ~ middleware ~ data:", data);
  return NextResponse.redirect(new URL("/a", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/app",
};
