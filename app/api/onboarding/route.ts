import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  console.log("[v0] Onboarding payload:", body)
  return NextResponse.json({ ok: true })
}
