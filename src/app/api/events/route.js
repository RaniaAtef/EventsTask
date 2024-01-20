import { NextResponse } from "next/server";
import events from "../../../../events";
export function GET(request) {
  return NextResponse.json(events);
}
