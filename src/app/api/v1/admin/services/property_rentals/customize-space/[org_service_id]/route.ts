import { prisma } from "@/lib/db";
import { CustomizeSpaceFormSchema } from "@/lib/schemas/admin/property_rentals/propertyRentals.schema";
import { validatePostRequest } from "@/utils/helper/postRequestSetup.ts/postRequestHelper";
import { logger } from "@/utils/log/safelog";
import { authenticateRequest } from "@/utils/middlewarehelpers/helpers/adminCookieCheck";
import { VerifySchemaValidation } from "@/utils/verifySchemas/verifySchemas";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { org_service_id: string } }
) {
  try {
    // This function will give you user info,req.body and validation schema errors

    const { org_service_id } = await params;
    const { userInfo, reqBody, error } = await validatePostRequest({
      req,
      schema: CustomizeSpaceFormSchema,
    });
    if (error) throw new Error(error.message);
    // // Prisma invocation
    const createCustomizeSpace = await prisma.complexes.create({
      data: {
        available_floors: reqBody.available_floors,
        complex_display_name: reqBody.complex_display_name,
        comples_full_name: reqBody.complex_full_name,
        complex_init_status: false,
        org: { connect: { org_id: userInfo.org_id } },
        user: {
          connect: {
            user_id: userInfo.user_id,
          },
        },
        org_service: {
          connect: {
            org_service_id: org_service_id,
          },
        },
        address: {
          create: {
            area: reqBody.address.area,
            country: reqBody.address.country,
            pincode: parseInt(reqBody.address.pincode),
            state: reqBody.address.state,
            address_line_1: reqBody.address.address_line_1,
            address_line_2: reqBody.address.address_line_2,
            address_line_3: reqBody.address.address_line_3,
            address_line_4: reqBody.address.address_line_4,
          },
        },
      },
    });
    return NextResponse.json(
      { data: "Success", sidebarLinks: [] },
      { status: 200 }
    );
  } catch (e) {
    logger.error(e);
    // safeLog("e", e);
    return NextResponse.json({ error: "Server failed" }, { status: 400 });
  }
}
