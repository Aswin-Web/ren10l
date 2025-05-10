import { z } from "zod";

// project_name :"",
// description:"",
// objectives:"",
// stakeholders:"",
// start_date:"",
// end_date:"",
// status:"",

export const ProjectCreationSchema = z.object({
  project_name: z.string().min(2, {
    message: "Display Name must be at least 2 characters.",
  }),
  description: z.string().min(50, {
    message: "Description must be at least 50 characters.",
  }),
  objectives: z.string().optional(),
  stakeholders: z.string().min(5, {
    message: "Stakeholders must be at least 5 characters.",
  }),
  start_date: z.date().optional(),
  end_date: z.date().optional(),
  status: z.string().min(4, {
    message: "Select any option.",
  }),
});
