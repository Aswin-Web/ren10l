"use client";
import React, { useState } from "react";
import MainHeading from "@/components/text/MainHeading";
import CustomizeModelEditFloor from "./CustomizeModel";

const page = () => {
  const [createFloorsModel, setFloorsModel] = useState(false);
  return (
    <div>
      <div className="text-center">
        <MainHeading>Edit the Configurations Of the Property</MainHeading>
      </div>

      {/* Mod Buttons */}
      <div className="text-right">
        <button
          onClick={() => setFloorsModel(true)}
          className="border-2 border-blackColor p-1 rounded mx-1"
        >
          Add Floors
        </button>
        {/* Create Add Floors Model */}
        <div>
          {createFloorsModel && (
            <CustomizeModelEditFloor onClose={() => setFloorsModel(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
