import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getSql } from "../../../lib/db";

export async function POST(request) {
  try {
    const sql = getSql();
    const { eventType } = await request.json();
    const participantId = cookies().get("participant_id")?.value;

    if (!participantId) {
      return NextResponse.json(
        { ok: false, error: "Missing participant session." },
        { status: 401 },
      );
    }

    if (eventType !== "started" && eventType !== "completed") {
      return NextResponse.json(
        { ok: false, error: "Invalid game event." },
        { status: 400 },
      );
    }

    await sql`
      insert into game_events (participant_id, event_type)
      values (${participantId}, ${eventType})
    `;

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 },
    );
  }
}
