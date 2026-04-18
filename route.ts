import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  console.log("Order received:", body)
  return NextResponse.json({ success: true, orderId: "demo-123" })
}
