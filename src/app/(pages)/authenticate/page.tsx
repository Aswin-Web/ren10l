"use client";
import SubHeading from "@/components/text/SubHeading";
// import SubHeading1 from '@/components/text/SubHeading1'
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default async function page() {
  const router = useRouter();

  async function handleAuth() {
    try {
      const res = await fetch("/api/auth/authenticate");
      const data = await res.json();
      router.replace("/admin");
    } catch (error) {
      router.replace("/error");
    }
  }
  useEffect(() => {
    handleAuth();
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <SubHeading>
        We are verifying your credentials. Please wait a few moments. Do not
        refresh or close the tab........
      </SubHeading>
    </div>
  );
}
