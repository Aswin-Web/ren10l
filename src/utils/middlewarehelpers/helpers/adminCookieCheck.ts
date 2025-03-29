import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { VerifyAdminJWTToken } from "@/utils/jwt/jwt.verify";

export const authenticateRequest = async () => {
  const token = (await cookies()).get("auth_token")?.value;
  if (!token) return null; // No token found
  try {
    return await VerifyAdminJWTToken(token); // Verify token and return user data
  } catch {
    return null; // Invalid token
  }
};
