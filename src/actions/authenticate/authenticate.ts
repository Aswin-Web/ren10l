"use server";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@prisma/client";
import { prisma } from "@/lib/db";
import { VerfiyAuthenticateJWTToken } from "@/utils/jwt/jwt.verify";
import { createAccessJWTToken } from "@/utils/jwt/jwt.sign";
import { cookies } from "next/headers";

export const authenticateUser = async () => {
  const session = await getServerSession(authOptions);
  const customToken = session.customToken;
  const { email, user_id } = await VerfiyAuthenticateJWTToken(customToken);
  //To Check the User has the permission to View the Platform

  //To create an Org if not present
  const email_domain = email.replaceAll(".", "_").replaceAll("@", "_");
  const updateEmail = await prisma.organization.upsert({
    create: {
      org_internal_name: email_domain,
      org_external_name: email_domain,
      user_id: user_id,
    },
    update: {
      org_internal_name: email_domain,
    },
    where: {
      org_internal_name: email_domain,
    },
  });

  //To Create an Cookie of the org and token
  const ticket = await createAccessJWTToken(updateEmail);
  // To set the cookie
  (
    await // To set the cookie
    cookies()
  ).set("auth_token", ticket, {
    httpOnly: true, // Prevents JavaScript access (more secure)
    secure: process.env.NODE_ENV === "production", // Only use HTTPS in production
    maxAge: 60 * 60 * 24, // 1 day expiration
    path: "/", // Accessible from all pages
  });
  return ticket
};
