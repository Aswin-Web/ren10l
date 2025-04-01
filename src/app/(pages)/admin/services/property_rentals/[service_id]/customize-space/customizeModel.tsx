"use client";
import { Icons } from "@/components/icons/icon.list";
import PopupLayout from "@/components/layout/PopUp/PopupLayout";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Toast } from "@/components/ui/toast";
import AddressForm, {
  AddressSchema,
} from "@/components/ReUsableFormComponents/Address";
const FormSchema = z.object({
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

const AddCustomizeSpaceModel = () => {
  // Use State hook
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      complex_display_name: "",
      complex_full_name: "",
      available_floors: 1,
      address: {
        address_line_1: "",
        address_line_2: "",
        address_line_3: "",
        address_line_4: "",
        area: "",
        state: "",
        pincode: "",
        country: "",
      },
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    Toast({
      title: "You submitted the following values:",
      // description: (
      //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //   </pre>
      // ),
    });
  }

  return (
    <div>
      <PopupLayout>
        <div className="w-[80vw] h-[80vh] overflow-y-scroll bg-lightBgColor p-4">
          <div className="text-right">
            {/* Close Button */}
            <button>
              {React.createElement(Icons.FaWindowClose, { size: 20 })}
            </button>{" "}
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-11/12  space-y-6 mx-auto p-4"
            >
              <Label htmlFor="terms" className="text-xl font-bold">
                Basic Information
              </Label>
              <div className="flex w-full gap-4">
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="complex_display_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complex Display Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Complex Display Name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="complex_full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complex Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Complex Full Name" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your Complex full name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="available_floors"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total No of Floors</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Total No of Floors"
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value ? Number(e.target.value) : ""
                              )
                            }
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the total number of floors
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <Label className="text-xl font-bold">Address</Label>
                <AddressForm form={form} />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </PopupLayout>
    </div>
  );
};

export default AddCustomizeSpaceModel;
