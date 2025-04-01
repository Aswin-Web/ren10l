
"use client";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"


export default function RootLayout({ children }: { children: ReactNode }) {
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </>;
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
        <Toaster />

      </body>
    </html>
  );
}
