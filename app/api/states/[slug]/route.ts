import { NextRequest, NextResponse } from "next/server";
import { getStateBySlug } from "@/lib/states";

export async function GET(
  _request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const state = getStateBySlug(params.slug);

  if (!state) {
    return NextResponse.json(
      {
        success: false,
        error: `No state found for slug "${params.slug}"`,
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    { success: true, data: state },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400",
      },
    }
  );
}
