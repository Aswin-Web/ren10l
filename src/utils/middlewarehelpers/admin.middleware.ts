import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "./helpers/adminCookieCheck";

export const AdminMiddleware = async function (req: NextRequest) {
//   console.log("App Middleware Triggered!");
  const data = await authenticateRequest();
//   console.log("🚀 ~ AdminMiddleware ~ data:", data);
  if (!data) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (!data.admin_status) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }
  return NextResponse.next(); // Continue to the next step
};
