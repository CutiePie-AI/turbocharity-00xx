import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { valid, errors } = validateContactForm(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    console.log("[Contact]", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Thanks for reaching out! We'll get back to you within 1-2 business days.",
    });
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: "Invalid request body" } },
      { status: 400 }
    );
  }
}
