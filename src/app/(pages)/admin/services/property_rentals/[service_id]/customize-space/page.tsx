import React from "react";
import CustomizeSpacePage from "./CustomizeSpacePage";
import { getCreatedSpaces } from "@/actions/admin/services/property_rentals/propertyRental.action";

const page = async () => {
  const complexes = await getCreatedSpaces();
  console.log("🚀 ~ page ~ complexes:", complexes);
  return (
    <div>
      <CustomizeSpacePage complexesList = {complexes} />
    </div>
  );
};

export default page;
