import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const { neon } = await import("@neondatabase/serverless");
    const { eventType } = await request.json();
    const participantId = cookies().get("participant_id")?.value;

    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set.");
    }

    const sql = neon(process.env.DATABASE_URL);

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
