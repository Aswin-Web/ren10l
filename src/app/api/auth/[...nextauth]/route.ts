import {
  AUTH_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
} from "@/config/config";
import { prisma } from "@/lib/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken"; // Import jsonwebtoken
import * as jose from "jose";
const alg = "HS256";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token, account, user }) {
      // Only upsert user if `user` is available (i.e., first login)
      if (user) {
        const userInfo = await prisma.user.upsert({
          create: {
            email: user.email,
            display_picture: user.image,
            username: user.name,
          },
          update: {
            display_picture: user.image,
            username: user.name,
          },
          where: {
            email: user.email,
          },
        });

        token.id = userInfo.user_id;
        token.email = userInfo.email;
        token.name = userInfo.username;
        token.image = userInfo.display_picture;
      }

      // Only generate a custom token if email exists in `token`
      if (token.email) {
        token.customToken = await new jose.SignJWT({
          id: token.id,
          email: token.email,
          name: token.name,
          image: token.image,
        })
          .setProtectedHeader({ alg })
          .setIssuedAt()
          .setIssuer("urn:example:issuer")
          .setAudience("urn:example:audience")
          .setExpirationTime("2h")
          .sign(AUTH_SECRET);
      }

      // if (account) {
      //   // token.accessToken = account.access_token;
      // }

      return token;
    },
    async session({ session, token }) {
      session.user = session.user || {}; // Ensure session.user exists

      if (token.email) {
        // session.user.email = token.email;
        // session.user.name = token.name;
        // session.user.image = token.image;
        session.customToken = token.customToken; // Pass customToken
      }

      // session.accessToken = token.accessToken;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
