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
import AddressForm from "@/components/ReUsableFormComponents/Address";
import { axiosRequest } from "@/config/axiosRequest";
import { useParams } from "next/navigation";
import { ProjectCreationSchema } from "@/lib/schemas/admin/product_development/productDevelopment.schema";

const CreateProjectModel = ({ handleCloseModel }) => {
  const params = useParams();
  const service_id = params.service_id;
  // Use State hook
  const form = useForm<z.infer<typeof ProjectCreationSchema>>({
    resolver: zodResolver(ProjectCreationSchema),
    defaultValues: {
      project_name: "",
      description: "",
      objectives: "",
      stakeholders: "",
      start_date: new Date(),
      end_date: new Date(),
      status: "",
    },
  });
  async function onSubmit(data: z.infer<typeof ProjectCreationSchema>) {
    try {
      console.log("🚀 ~ onSubmit ~ data:", data);
      let resp = await axiosRequest.post(
        "/admin/services/property_rentals/customize-space/" + service_id,
        data
      );
    } catch (error) {}
  }

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

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-11/12  space-y-6 mx-auto p-4"
            >
              <Label htmlFor="terms" className="text-xl font-bold">
                Project Details
              </Label>
              <div className="flex w-full gap-4 flex-wrap">
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="project_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Display Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project Display Name"
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
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Description" {...field} />
                        </FormControl>
                        <FormDescription>Project Description</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="objectives"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Objectives</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Objectives"
                            type="text"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the Project Objectives
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="stakeholders"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stake Holders</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Stake Holders"
                            type="text"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the Stakeholder Info
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="start_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the Start Date"
                            type="date"
                            {...field}
                            value={
                              field.value
                                ? new Date(field.value)
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            onChange={(e) =>
                              field.onChange(new Date(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormDescription>Enter the Start Date </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="end_date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the End Date"
                            type="date"
                            {...field}
                            value={
                              field.value
                                ? new Date(field.value)
                                    .toISOString()
                                    .split("T")[0]
                                : ""
                            }
                            onChange={(e) =>
                              field.onChange(new Date(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormDescription>Enter the End Date </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex-2/6 w-full">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Project Status</FormLabel>
                        <FormControl className="w-1/2 bg-white">
                          <select
                            // placeholder="Objectives"
                            // type="text"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                          >
                            {/* Planned, In Progress, Completed, On Hold */}
                            <option value="Planned">Planned</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                            <option value="On Hold">On Hold</option>
                          </select>
                        </FormControl>
                        <FormDescription>
                          Enter the Project Objectives
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </PopupLayout>
    </div>
  );
};

export default CreateProjectModel;
