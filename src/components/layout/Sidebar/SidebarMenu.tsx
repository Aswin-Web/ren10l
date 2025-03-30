"use client";
import Button from "@/components/Button";
import { Icons } from "@/components/icons/icon.list";
import Link from "next/link";
import React from "react";

const SidebarMenu = ({
  data,
}: {
  data: { name: string; logo: string; link: string };
}) => {
  return (
    <Link href={"/admin" + data.link}>
      <Button
        className="flex justify-start m-1 border-2 border-darkbgColor rounded-md w-11/12"
        handleClick={() => {}}
      >
        <div className="flex items-center">
          {/* logo */}
          <div className="w-1/6 flex justify-center">
            {React.createElement(Icons[data.logo],{size:18})}
          </div>
          {/* text */}
          <div className="text-sm w-5/6 text-left font-medium">{data.name}</div>
        </div>
      </Button>
    </Link>
  );
};

export default SidebarMenu;
