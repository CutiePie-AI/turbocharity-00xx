import { NextRequest, NextResponse } from "next/server";
import { getAllStates } from "@/lib/states";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.trim().toLowerCase();

  let results = getAllStates();

  if (query) {
    results = results.filter((state) =>
      state.name.toLowerCase().includes(query)
    );
  }

  return NextResponse.json(
    { success: true, count: results.length, data: results },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400",
      },
    }
  );
}
