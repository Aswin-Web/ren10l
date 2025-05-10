"use client";
import Button from "@/components/Button";
import { Icons } from "@/components/icons/icon.list";
import MainHeading from "@/components/text/MainHeading";
import React, { useState } from "react";
import CreateProjectModel from "./CreateProjectModel";

const page = () => {
  const [openCreateSpaceModel, setOpenCreateSpaceModel] = useState(false);

  return (
    <div>
      <div>
        {/* Main Heading */}
        <MainHeading>Project Information</MainHeading>
        {/* Add Space Button */}
        <div className=" mx-4 w-full flex justify-end gap-1 items-center px-4 ">
          <button
            className="px-2 py-1 bg-lightBgColor rounded-md text-sm font-semibold  flex justify-end gap-1 items-center border-2 border-blackColor "
            onClick={() => setOpenCreateSpaceModel(true)}
          >
            {React.createElement(Icons.IoMdAddCircle, { size: 20 })}
            Project
          </button>
        </div>
        {/* Add Customize Model */}
        {openCreateSpaceModel && (
          <CreateProjectModel
            handleCloseModel={() => setOpenCreateSpaceModel(false)}
          />
        )}
      </div>
      {/*  */}
    </div>
  );
};

export default page;
