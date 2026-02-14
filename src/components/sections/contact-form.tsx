"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { type ContactFormValues, contactSchema } from "@/lib/validations/contact";

export function ContactForm() {
  const [success, setSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "Software Development",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSuccess(null);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json()) as { message: string };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send message.");
      }

      reset();
      setSuccess("Thanks. Our consulting team will contact you within one business day.");
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send message.");
    }
  };

  return (
    <form
      className="surface rounded-2xl p-6 sm:p-8"
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Contact CybexSoft"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2 sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium">
            Full name
          </label>
          <Input id="name" placeholder="Jane Cooper" {...register("name")} />
          {errors.name ? <p className="text-xs text-red-500">{errors.name.message}</p> : null}
        </div>

        <div className="space-y-2 sm:col-span-1">
          <label htmlFor="email" className="text-sm font-medium">
            Work email
          </label>
          <Input id="email" type="email" placeholder="jane@company.com" {...register("email")} />
          {errors.email ? <p className="text-xs text-red-500">{errors.email.message}</p> : null}
        </div>

        <div className="space-y-2 sm:col-span-1">
          <label htmlFor="company" className="text-sm font-medium">
            Company
          </label>
          <Input id="company" placeholder="Acme Inc." {...register("company")} />
          {errors.company ? <p className="text-xs text-red-500">{errors.company.message}</p> : null}
        </div>

        <div className="space-y-2 sm:col-span-1">
          <label htmlFor="service" className="text-sm font-medium">
            Service
          </label>
          <select
            id="service"
            className="h-10 w-full rounded-lg border border-input bg-background/80 px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("service")}
          >
            <option>Software Development</option>
            <option>IT Infrastructure Management</option>
            <option>DevOps Services & Automation</option>
            <option>Cloud Solutions</option>
            <option>Server Maintenance & Monitoring</option>
            <option>Mobile & Web App Development</option>
            <option>UI/UX Design</option>
            <option>IT Consulting & Strategy</option>
            <option>Project Management & Digital Transformation</option>
          </select>
          {errors.service ? <p className="text-xs text-red-500">{errors.service.message}</p> : null}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            Project brief
          </label>
          <Textarea
            id="message"
            placeholder="Tell us about your goals, current stack, timeline, and required outcomes..."
            className="min-h-36"
            {...register("message")}
          />
          {errors.message ? <p className="text-xs text-red-500">{errors.message.message}</p> : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" className="rounded-full px-5" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Send Message
        </Button>
        <div className="space-y-1">
          {success ? <p className="text-sm text-success">{success}</p> : null}
          {submitError ? <p className="text-sm text-red-500">{submitError}</p> : null}
        </div>
      </div>
    </form>
  );
}
