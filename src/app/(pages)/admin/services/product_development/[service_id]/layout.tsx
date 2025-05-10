"use client";
import React from "react";
import { useParams } from "next/navigation";
import ButtonMod from "../../../../../../components/text/ButtonMod";
import Button from "@/components/Button";
import { MdDashboard } from "react-icons/md";
import { MdPending } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi2";
import { PiBuildingApartmentFill } from "react-icons/pi";
import Link from "next/link";

const page = ({ children }) => {
  const params = useParams();
  let service_id = params.service_id;

  return (
    <div>
      <div className="h-[10vh]  bg-lightBgColor border-lightBgColor flex flex-row justify-end items-center gap-4 mx-2 text-sm ">
        <div className="flex-1"></div>
        <div className="flex-2 flex flex-row justify-around items-center gap-4 mx-2 text-sm">
          <Link
            href={`/admin/services/product_development/${service_id}/dashboard`}
          >
            <button className="border-lightBgColor flex gap-1 items-center justify-center">
              <MdDashboard color="" size={18} />
              <span>Team Management</span>
            </button>
          </Link>
          {/* <ButtonMod>Home</ButtonMod> */}
          <Link
            href={`/admin/services/product_development/${service_id}/projects`}
          >
            <button className="border-lightBgColor flex gap-1 items-center justify-center">
              <MdPending size={18} />
              Projects
            </button>
          </Link>
          <Link
            href={`/admin/services/product_development/${service_id}/all-customer`}
          >
            <button className="border-lightBgColor flex gap-1 items-center justify-center">
              <MdPeopleAlt size={18} />
              Tasks
            </button>
          </Link>
          <Link
            href={`/admin/services/product_development/${service_id}/billing`}
          >
            <button className="border-lightBgColor flex gap-1 items-center justify-center">
              <HiCurrencyRupee size={18} />
              Todo
            </button>
          </Link>
          <Link
            href={`/admin/services/product_development/${service_id}/customize-space`}
          >
            <button className="border-lightBgColor flex gap-1 items-center justify-center">
              <PiBuildingApartmentFill size={18} />
              Dashboard
            </button>
          </Link>
        </div>
      </div>
      <div className="h-[90vh] w-full overflow-y-scroll bg-white p-4">
        {children}
      </div>

      {/* {router.query.service_id} */}
    </div>
  );
};

export default page;
