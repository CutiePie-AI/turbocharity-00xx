import { NextRequest, NextResponse } from "next/server";
import { isValidEmail } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          errors: { email: "A valid email address is required" },
        },
        { status: 400 }
      );
    }

    console.log("[Newsletter]", { email });

    return NextResponse.json({
      success: true,
      message:
        "Thanks for subscribing! Check your email for your free nonprofit checklist.",
    });
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: "Invalid request body" } },
      { status: 400 }
    );
  }
}
