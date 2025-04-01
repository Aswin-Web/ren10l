"use client";

import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

// Define Address Schema
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

// TypeScript Props
interface AddressFormProps {
  form: UseFormReturn<any>;
  fieldName?: string;
}

const AddressForm: React.FC<AddressFormProps> = ({
  form,
  fieldName = "address",
}) => {
  return (
    <div className="space-y-4 flex gap-3 w-full  flex-wrap justify-between">
      {/* address line 1  */}
      <div className="w-full">
        <FormField
          control={form.control}
          name={`${fieldName}.address_line_1`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 1</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the building No/ House No,Location etc.."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* Street */}
      <div className="w-full">
        <FormField
          control={form.control}
          name={`${fieldName}.address_line_2`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 2</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the address Line 2 (Optional)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* Street */}
      <div className="w-full">
        <FormField
          control={form.control}
          name={`${fieldName}.address_line_3`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 3</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the address Line 3 (Optional)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* Street */}
      <div className="w-full">
        <FormField
          control={form.control}
          name={`${fieldName}.address_line_4`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address Line 4</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter the address Line 4 (Optional)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* Street */}
      <div className="w-5/12">
        <FormField
          control={form.control}
          name={`${fieldName}.area`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input placeholder="Enter street" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="w-5/12">
        {/* State */}
        <FormField
          control={form.control}
          name={`${fieldName}.state`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input placeholder="Enter state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* ZIP Code */}
      <div className="w-5/12">
        <FormField
          control={form.control}
          name={`${fieldName}.pincode`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pincode </FormLabel>
              <FormControl>
                <Input placeholder="Enter ZIP code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      {/* Country */}
      <div className="w-5/12">
        <FormField
          control={form.control}
          name={`${fieldName}.country`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input placeholder="Enter country" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default AddressForm;

// Usage In other components

// SCHEMA
// const FormSchema = z.object({
//   complex_display_name: z.string().min(2, {
//     message: "Display Name must be at least 2 characters.",
//   }),
//   complex_full_name: z.string().min(2, {
//     message: "Full Name must be at least 2 characters.",
//   }),
//   available_floors: z.number().gte(1).lte(1000),
//   address: AddressSchema, // Include address validation *********************************************
// });

// UPDATE THE STATE
// const form = useForm<z.infer<typeof FormSchema>>({
//   resolver: zodResolver(FormSchema),
//   defaultValues: {
//     complex_display_name: "",
//     complex_full_name: "",
//     available_floors: 1,
//     address: address: {
//   address_line_1: "",
//   address_line_2: "",
//   address_line_3: "",
//   address_line_4: "",
//   area: "",
//   state: "",
//   pincode: "",
//   country: "",
// } // Default values************************************
//   },
// });

// CALL THE COMPONENT
{
  /* <AddressForm form={form} /> */
}
