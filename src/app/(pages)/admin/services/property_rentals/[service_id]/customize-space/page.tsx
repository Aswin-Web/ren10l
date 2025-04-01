import React from "react";
import MainHeading from "@/components/text/MainHeading";
import { Icons } from "../../../../../../../components/icons/icon.list";
import AddCustomizeSpaceModel from "./customizeModel";

const page = () => {
  return (
    <div>
      {/* Main Heading */}
      <div className="text-center">
        <MainHeading>Customize Your Space</MainHeading>
      </div>
      {/* Add Space Button */}
      <div className=" mx-4 w-full flex justify-end gap-1 items-center px-4 ">
        <button className="px-2 py-1 bg-lightBgColor rounded-md text-sm font-semibold  flex justify-end gap-1 items-center border-2 border-blackColor ">
          {React.createElement(Icons.IoMdAddCircle, { size: 20 })}
          Space
        </button>
      </div>
      {/* Add Customize Model */}
      <AddCustomizeSpaceModel />
    </div>
  );
};

export default page;
