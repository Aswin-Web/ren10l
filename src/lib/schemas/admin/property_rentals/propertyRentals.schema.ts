import { z } from "zod";
import { AddressSchema } from "../../GENERIC/generic.schemas";



export const CustomizeSpaceFormSchema = z.object({
  complex_display_name: z.string().min(2, {
    message: "Display Name must be at least 2 characters.",
  }),
  complex_full_name: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  available_floors: z
    .number()
    .gte(1, {
      message: "floors must be at least 1.",
    })
    .lte(1000, {
      message: "floors must be at less than 1000 characters.",
    }),
  address: AddressSchema,
});
