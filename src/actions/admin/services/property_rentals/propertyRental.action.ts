"use server";

import { prisma } from "@/lib/db";
import { authenticateRequest } from "@/utils/middlewarehelpers/helpers/adminCookieCheck";

export const getCreatedSpaces = async () => {
  const user = await authenticateRequest();
  const data = await prisma.complexes.findMany({
    where: {
      org_id: user.org_id,
    },
    include:{
        address:true,
        ComplexFloors:true,
        FloorSpaces:true,
    }
  });
  return data;
};
