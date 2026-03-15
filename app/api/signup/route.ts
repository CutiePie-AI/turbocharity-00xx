import { NextRequest, NextResponse } from "next/server";
import { validateSignupForm } from "@/lib/validation";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organizationName, state, userType } = body;

    const { valid, errors } = validateSignupForm(body);

    if (!valid) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400, headers: CORS_HEADERS }
      );
    }

    console.log("[Signup]", { name, email, organizationName, state, userType });

    return NextResponse.json(
      {
        success: true,
        message: "Signup successful! Welcome to TurboCharity.",
      },
      { status: 200, headers: CORS_HEADERS }
    );
  } catch {
    return NextResponse.json(
      { success: false, errors: { _form: "Invalid request body" } },
      { status: 400, headers: CORS_HEADERS }
    );
  }
}
