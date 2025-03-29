"use server";
import { AUTH_SECRET } from "@/config/config";
import * as jose from "jose";
export const VerfiyAuthenticateJWTToken = async (
  accessToken: string
): Promise<{ user_id: string; email: string }> => {
  const { payload, protectedHeader } = await jose.jwtVerify(
    accessToken,
    AUTH_SECRET,
    {
      issuer: "urn:example:issuer",
      audience: "urn:example:audience",
    }
  );
  return { user_id: String(payload.user_id), email: String(payload.email) };
};

export const VerifyAdminJWTToken = async (
  accessToken: string
): Promise<{
  user_id: string;
  org_id: string;
  org_internal_name: string;
  admin_status: boolean;
}> => {
  const { payload, protectedHeader } = await jose.jwtVerify(
    accessToken,
    AUTH_SECRET,
    {
      issuer: "urn:example:issuer",
      audience: "urn:example:audience",
    }
  );
  return {
    user_id: String(payload.user_id),
    org_id: String(payload.org_id),
    org_internal_name: String(payload.org_internal_name),
    admin_status: Boolean(payload.admin_status),
  };
};
