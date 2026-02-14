import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().min(2, "Company name is required."),
  service: z.string().min(2, "Please select a service."),
  message: z.string().min(20, "Message should be at least 20 characters."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
