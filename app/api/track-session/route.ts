import { NextRequest } from "next/server";

const BASE_ID = process.env.AIRTABLE_BASE_ID!;
const TABLE = "Landing page";
const TOKEN = process.env.AIRTABLE_TOKEN!;
const API = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE)}`;

const AT_HEADERS = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
};

interface SessionPayload {
  timeOnPageSec: number;
  scrollHit25: boolean;
  scrollHit50: boolean;
  scrollHit75: boolean;
  scrollHit90: boolean;
  scrollHit100: boolean;
  vslPlayed: boolean;
  vslHit25: boolean;
  vslHit50: boolean;
  vslHit75: boolean;
  vslHit90: boolean;
  vslCompleted: boolean;
  sp1Played: boolean;
  sp1Hit50: boolean;
  sp2Played: boolean;
  sp2Hit50: boolean;
}

function todayStr() {
  return new Date().toISOString().split("T")[0];
}

async function findTodayRecord() {
  const formula = encodeURIComponent(`DATESTR({Date})="${todayStr()}"`);
  const res = await fetch(`${API}?filterByFormula=${formula}&maxRecords=1`, {
    headers: AT_HEADERS,
  });
  const data = await res.json();
  return data.records?.[0] ?? null;
}

function inc(current: number | undefined, add: number) {
  return (current ?? 0) + add;
}

export async function POST(req: NextRequest) {
  let session: SessionPayload;
  try {
    session = await req.json();
  } catch {
    return new Response("bad request", { status: 400 });
  }

  const existing = await findTodayRecord();
  const f = existing?.fields ?? {};

  const fields = {
    Date: todayStr(),
    Visitors: inc(f["Visitors"], 1),
    "Total Time on Page (sec)": inc(f["Total Time on Page (sec)"], session.timeOnPageSec),
    "Scroll Hit 25%": inc(f["Scroll Hit 25%"], session.scrollHit25 ? 1 : 0),
    "Scroll Hit 50%": inc(f["Scroll Hit 50%"], session.scrollHit50 ? 1 : 0),
    "Scroll Hit 75%": inc(f["Scroll Hit 75%"], session.scrollHit75 ? 1 : 0),
    "Scroll Hit 90%": inc(f["Scroll Hit 90%"], session.scrollHit90 ? 1 : 0),
    "Scroll Hit 100%": inc(f["Scroll Hit 100%"], session.scrollHit100 ? 1 : 0),
    "VSL Plays": inc(f["VSL Plays"], session.vslPlayed ? 1 : 0),
    "VSL Hit 25%": inc(f["VSL Hit 25%"], session.vslHit25 ? 1 : 0),
    "VSL Hit 50%": inc(f["VSL Hit 50%"], session.vslHit50 ? 1 : 0),
    "VSL Hit 75%": inc(f["VSL Hit 75%"], session.vslHit75 ? 1 : 0),
    "VSL Hit 90%": inc(f["VSL Hit 90%"], session.vslHit90 ? 1 : 0),
    "VSL Completions": inc(f["VSL Completions"], session.vslCompleted ? 1 : 0),
    "SP Video 1 Plays": inc(f["SP Video 1 Plays"], session.sp1Played ? 1 : 0),
    "SP Video 1 Hit 50%": inc(f["SP Video 1 Hit 50%"], session.sp1Hit50 ? 1 : 0),
    "SP Video 2 Plays": inc(f["SP Video 2 Plays"], session.sp2Played ? 1 : 0),
    "SP Video 2 Hit 50%": inc(f["SP Video 2 Hit 50%"], session.sp2Hit50 ? 1 : 0),
  };

  if (existing) {
    await fetch(`${API}/${existing.id}`, {
      method: "PATCH",
      headers: AT_HEADERS,
      body: JSON.stringify({ fields }),
    });
  } else {
    await fetch(API, {
      method: "POST",
      headers: AT_HEADERS,
      body: JSON.stringify({ records: [{ fields }] }),
    });
  }

  return new Response("ok", { status: 200 });
}
