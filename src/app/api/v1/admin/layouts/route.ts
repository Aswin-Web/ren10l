import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const sideBarlink = await prisma.masterLink.findFirst({
      where: {
        master_internal_name: "_admin_links",
      },
      include: {
        NavlinkMasterMapper: {
          include: { link: true },
          orderBy: {
            order_no: "asc",
          },
        },
      },
    });
    //   console.log("🚀 ~ getSideBarLinks ~ sideBarlink:", sideBarlink);
    const flatObj = sideBarlink.NavlinkMasterMapper.map((item) => {
      return {
        link: item.link.link_href,
        name: item.link.link_name,
        logo: item.link.link_icon,
      };
    });
    return NextResponse.json(
      { data: "Success", sidebarLinks: flatObj },
      { status: 200 }
    );
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error);

    return NextResponse.json({ error: "Server failed" }, { status: 400 });
  }
}
