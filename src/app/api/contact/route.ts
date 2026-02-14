import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid form payload.", errors: parsed.error.flatten() },
        { status: 400 },
      );
    }

    // Replace with CRM/email integration in production.
    console.log("[contact-form]", parsed.data);

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Unexpected error while sending message." }, { status: 500 });
  }
}
