import { AUTH_SECRET } from "@/config/config";
const alg = "HS256";
import * as jose from "jose";
export const createAccessJWTToken = async (data) => {
  return await new jose.SignJWT({ ...data, admin_status: true })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2h")
    .sign(AUTH_SECRET);
};
