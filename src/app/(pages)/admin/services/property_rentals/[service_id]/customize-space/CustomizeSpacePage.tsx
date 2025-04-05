"use client";
import React, { useState } from "react";
import MainHeading from "@/components/text/MainHeading";
import { Icons } from "../../../../../../../components/icons/icon.list";
import AddCustomizeSpaceModel from "./customizeModel";
import ComplexInfoCards from "./complexInfoCards";

const CustomizeSpacePage = ({ complexesList }) => {
  const [complex, setComplex] = useState(complexesList || []);
  const [openCreateSpaceModel, setOpenCreateSpaceModel] = useState(false);
  return (
    <div>
      {/* Main Heading */}
      <div className="text-center">
        <MainHeading>Customize Your Space</MainHeading>
      </div>
      {/* Add Space Button */}
      <div className=" mx-4 w-full flex justify-end gap-1 items-center px-4 ">
        <button
          className="px-2 py-1 bg-lightBgColor rounded-md text-sm font-semibold  flex justify-end gap-1 items-center border-2 border-blackColor "
          onClick={() => setOpenCreateSpaceModel(true)}
        >
          {React.createElement(Icons.IoMdAddCircle, { size: 20 })}
          Space
        </button>
      </div>
      {/* Add Customize Model */}
      {openCreateSpaceModel && (
        <AddCustomizeSpaceModel
          handleCloseModel={() => setOpenCreateSpaceModel(false)}
        />
      )}

      {/* Created Complex Cards */}
      <ComplexInfoCards complexList={complex} />
    </div>
  );
};

export default CustomizeSpacePage;
