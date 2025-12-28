import dbConnect from "@/app/lib/mongoose";
import Problem from "@/app/models/Problem";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const part = Number(searchParams.get("part"));
    const no = Number(searchParams.get("no"));

    if (!Number.isInteger(part) || !Number.isInteger(no)) {
      return NextResponse.json(
        { error: "Invalid part or problem number" },
        { status: 400 }
      );
    }

    const problem = await Problem.findOne({ part, no });

    if (!problem) {
      return NextResponse.json(
        { error: "Problem not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(problem);
  } catch (err) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
