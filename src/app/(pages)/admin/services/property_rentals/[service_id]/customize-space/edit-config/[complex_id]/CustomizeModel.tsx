import React from "react";
import PopupLayout from "@/components/layout/PopUp/PopupLayout";
import { Icons } from "@/components/icons/icon.list";
import { Form, useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { CreateFloorsFormSchema } from "@/lib/schemas/admin/property_rentals/propertyRentals.schema";
import { z } from "zod";
import Button from "@/components/Button";

const CustomizeModelEditFloor = ({ onClose }) => {
  // Use State hook
  const form = useForm<z.infer<typeof CreateFloorsFormSchema>>({
    resolver: zodResolver(CreateFloorsFormSchema),
    defaultValues: {
      complex_floor_name: "",
      complex_floor_code: "",
      complex_floor_descp: "",
      complex_floor_order_no: 2,
    },
  });

  const handleCloseModel = () => {
    return onClose();
  };
  return (
    <div>
      <PopupLayout>
        <div className="w-[80vw] h-[80vh] overflow-y-scroll bg-lightBgColor p-4">
          <div className="text-right">
            {/* Close Button */}
            <button onClick={handleCloseModel}>
              {React.createElement(Icons.FaWindowClose, { size: 20 })}
            </button>{" "}
          </div>
          {/* Form Fields*/}
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(()=>{})}
                className="w-11/12  space-y-6 mx-auto p-4"
              >
                <Label htmlFor="terms" className="text-xl font-bold">
                  Basic Information
                </Label>
                <div className="flex w-full gap-4">
                  <div className="flex-2/6 w-full">
                    <FormField
                      control={form.control}
                      name="complex_floor_name"
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
                      name="complex_floor_code"
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
                      name="complex_floor_order_no"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Complex Full Name</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Complex Full Name"
                              {...field}
                            />
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
                      name="complex_floor_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Total No of Floors</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Total No of Floors"
                              type="string"
                              {...field}
                              // onChange={(e) =>
                              //   field.onChange(
                              //     e.target.value ? Number(e.target.value) : ""
                              //   )
                              // }
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
                  {/* <Label className="text-xl font-bold">Address</Label> */}
                  {/* <AddressForm form={form} /> */}
                </div>
                <button type="submit">Submit</button>
              </form>
            </Form>
          </div>
        </div>
      </PopupLayout>
    </div>
  );
};

export default CustomizeModelEditFloor;
