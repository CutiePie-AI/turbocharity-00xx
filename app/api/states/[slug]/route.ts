import { NextRequest, NextResponse } from "next/server";
import { getStateBySlug } from "@/lib/states";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const state = getStateBySlug(slug);

  if (!state) {
    return NextResponse.json(
      { error: "State not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(state, {
    headers: {
      "Cache-Control": "public, s-maxage=86400",
    },
  });
}
