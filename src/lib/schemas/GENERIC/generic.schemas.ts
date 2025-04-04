import { z } from "zod";

export const AddressSchema = z.object({
    address_line_1: z
      .string()
      .min(2, { message: "Enter the building no / house no, location Name " }),
    address_line_2: z.string().optional(),
    address_line_3: z.string().optional(),
    address_line_4: z.string().optional(),
    area: z.string().min(2, { message: "Area is required" }),
    state: z.string().min(2, { message: "State is required" }),
    pincode: z
      .string()
      .min(5, { message: "ZIP code must be at least 5 characters" }),
    country: z.string().min(2, { message: "Country is required" }),
  });