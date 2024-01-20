import { NextResponse } from "next/server";
import events from "../../../../../events";
export function GET(request, { params }) {
  const id = params.id;
  console.log("id", params.id);
  const event = events.filter((x) => x.eventId === Number(id));
  return NextResponse.json(event[0]);
}
