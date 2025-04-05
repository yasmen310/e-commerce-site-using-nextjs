import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name } = await req.json();
  console.log("Updating user name to:", name);
  return NextResponse.json({ message: "Profile updated" });
}
