"use server";
import { prisma } from "@/lib/db";
import { authenticateRequest } from "@/utils/middlewarehelpers/helpers/adminCookieCheck";

export const getMyServices = async () => {
  const data = await authenticateRequest();
  console.log("🚀 ~ getMyServices ~ data:", data.org_id);
  if (!data) throw new Error("session is invalid");
  const myservices = await prisma.organizationServices.findMany({
    where: {
      org_id: data.org_id,
    },
    include: {
      service: true,
    },
  });
  //   flatobj
  const flatobj = myservices.map((item) => {
    return { ...item.service, service_id: item.org_service_id };
  });
  return flatobj;
  //   console.log("🚀 ~ getMyServices ~ myservices:", myservices);
};
