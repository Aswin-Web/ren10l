"use client";
import { GenerateDate } from "@/utils/date/date.utils";
import React, { useEffect, useState } from "react";

const ComplexInfoCards = ({ complexList }) => {
  const [complex, setComplex] = useState(complexList || []);
  useEffect(() => {
    setComplex(complexList);
  }, [complexList]);

  console.log("🚀 ~ ComplexInfoCards ~ complex:", complex);
  return (
    <div>
      {/* List of Complexes */}
      <div className="flex w-full flex-wrap mx-auto justify-center">
        {complex.map((item, ind) => {
          return (
            <div key={ind} className="m-4 w-3/12">
              {/* Outer Body */}
              <div className="border-2 border-blackColor rounded-md p-4 tracking-wider">
                {/* Complex_Name */}
                <p className="font-semibold">{item.complex_display_name}</p>
                {/* Address */}
                <div className=" bg-lightBgColor p-2 my-2 rounded-md">
                  {/*Address Header  */}
                  <p className="font-semibold text-sm">Address :- </p>
                  <div className=" flex text-sm flex-col px-2">
                    {/* Address Line 1*/}
                    <p>{item.address.address_line_1}</p>
                    {/* Area */}
                    <p>
                      {item.address.area}- {item.address.pincode}
                    </p>
                    {/* State */}
                    <p>{item.address.state}</p>
                  </div>
                </div>
                {/* Last updated and Status*/}
                <div className="text-xs font-thin flex justify-between items-center my-2">
                  {/* Last updated */}
                  <div>Updated:{GenerateDate(item.updated_at)}</div>
                  {/* Complex Status */}
                  <div className="text-white font-extrabold">
                    {item.complex_init_status ? (
                      //   Completed Setup
                      <p className="bg-greenColor p-1 rounded-sm ">Completed</p>
                    ) : (
                      // Not Completed Setup
                      <p className="bg-redColor p-1 rounded-sm">Unfinished</p>
                    )}
                  </div>
                </div>
                {/* Button */}
                <div className="flex justify-center my-2 text-xs">
                  <div>
                    <button className="border-2 border-blackColor p-1 rounded mx-1 ">
                      Edit Config
                    </button>
                  </div>

                  <div>
                    <button className="border-2 border-blackColor p-1 rounded mx-1">Dashboard</button>
                  </div>

                  <div>
                    <button className="border-2 border-blackColor p-1 rounded mx-1">Availability</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexInfoCards;
