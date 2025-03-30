import { getMyServices } from "@/actions/admin/services/services";
import MainHeading from "@/components/text/MainHeading";
import Paragraph from "@/components/text/Paragraph";
import SubHeading1 from "@/components/text/SubHeading1";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await getMyServices();
  console.log("🚀 ~ page ~ data:", data);
  return (
    <div>
      <div className="h-[10vh]  bg-lightBgColor"></div>
      <div className="h-[90vh] w-full overflow-y-scroll bg-white p-4">
        <div className="text-center">
          <MainHeading>My Services</MainHeading>
        </div>
        {/* List of services */}
        <div className="flex mt-4">
          {data.map((elem, ind) => {
            return (
              <div
                key={ind}
                className="w-4/12 border-2 border-darkbgColor bg-lightBgColor p-4 rounded-lg"
              >
                <div className="bg-red">
                  {/* Service Name */}
                  <div className="">
                    <SubHeading1 className="font-black">
                      {elem.service_external_name}
                    </SubHeading1>
                  </div>
                  {/* Service Descp */}
                  <div>
                    <Paragraph>{elem.service_description}</Paragraph>
                  </div>
                  {/* View */}
                  <div className="text-right">
                    <Link
                      href={`/admin/services/${elem.service_internal_name}/${elem.service_id}`}
                    >
                      <button className="text-xs font-bold tracking-wider bg-redColor text-white p-1 rounded-md">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
