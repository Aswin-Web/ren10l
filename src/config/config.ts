export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL + "/api/v1" || "";
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
export const JWT_SECRET = process.env.JWT_SECRET || "your_super_secret_key"; // Use a secure key
export const AUTH_SECRET = new TextEncoder().encode(
  process.env.NEXT_AUTH_SECRET
);
