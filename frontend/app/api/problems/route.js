// app/api/problems/route.js
import dbConnect from "../../lib/mongoose"; // app/api/problems -> ../../lib/mongoose
import Problem from "../../models/Problem";

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const problem = await Problem.create(body);

    return new Response(JSON.stringify(problem), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/problems error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const problems = await Problem.find({});
    return new Response(JSON.stringify(problems), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("GET /api/problems error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
