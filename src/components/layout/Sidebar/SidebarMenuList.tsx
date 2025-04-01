import React from "react";
import SidebarMenu from "./SidebarMenu";
import { ProductName } from "@/components/Data";

interface ListItem {
  name: string;
  logo: string;
  link: string;
}
const SidebarMenuList = async ({ list }: { list:ListItem[] }) => {
  return (
    <div>
      {/* brandLogo */}
      <div className="flex justify-center p-5">
        <ProductName />
      </div>
      <></>
      {(await list).map((item, ind) => {
        return (
          <div key={ind}>
            <SidebarMenu data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default SidebarMenuList;
