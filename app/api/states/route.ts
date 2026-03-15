import { NextRequest, NextResponse } from "next/server";
import { getAllStates } from "@/lib/states";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  let states = getAllStates();

  if (query) {
    const lowerQuery = query.toLowerCase();
    states = states.filter((state: any) =>
      state.name.toLowerCase().includes(lowerQuery)
    );
  }

  return NextResponse.json(states, {
    headers: {
      "Cache-Control": "public, s-maxage=86400",
    },
  });
}
