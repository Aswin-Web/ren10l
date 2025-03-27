"use client";
import ButtonMod from "@/components/text/ButtonMod";
import MainHeading from "@/components/text/MainHeading";
import Paragraph from "@/components/text/Paragraph";
import SubHeading from "@/components/text/SubHeading";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const handleSignIn = () => signIn("google");
export const handleSignOut = () => signOut();

const page = () => {
  const { data: session } = useSession();
  // if (session) {
  //   redirect("/app");
  // }

  return (
    <div className="min-h-[90vh] flex w-3/6 mx-auto text-center flex-col justify-center">
      {session && (
        <div>
          <h2 className="text-lg font-medium text-gray-700">
            {/* Welcome, {session.user.name}! */}
          </h2>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      )}
      <div onClick={handleSignIn}>
        <ButtonMod>
          <SubHeading>Sign In with Google</SubHeading>
        </ButtonMod>
      </div>
      <ButtonMod>
        <SubHeading>Sign In with Microsoft</SubHeading>
      </ButtonMod>
      <ButtonMod>
        <SubHeading>Sign In with Facebook</SubHeading>
      </ButtonMod>
    </div>
  );
};

export default page;
