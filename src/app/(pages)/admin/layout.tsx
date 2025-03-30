import SidebarLayout from "@/components/layout/Sidebar/SidebarLayout";
import SidebarMenuList from "@/components/layout/Sidebar/SidebarMenuList";
import { axiosRequest } from "@/config/axiosRequest";
import { type ReactNode } from "react";
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  let sidebarLinks = [];

  try {
    const response = await axiosRequest.get("/admin/layouts"); // ✅ Await the response
    sidebarLinks = response.data.sidebarLinks || []; // ✅ Ensure data exists
  } catch (error) {
    console.error("🚀 ~ RootLayout ~ Error fetching sidebar links:", error);
  }

  return (
    <html lang="en">
      <body>
        <div className="bg-lightBgColor text-lightBlackColor min-h-[100vh] flex">
          {/* Sidebar Menu */}
          <div className=" w-2/12">
            <SidebarLayout>
              <SidebarMenuList list={sidebarLinks} />
            </SidebarLayout>
          </div>
          {/* Content Body */}
          <div className=" w-10/12">{children}</div>
        </div>
      </body>
    </html>
  );
}
