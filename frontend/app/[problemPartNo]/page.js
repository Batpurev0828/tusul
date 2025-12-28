"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const params = useParams();
  const [partStr, noStr] = params.problemPartNo.split("-");

  const part = Number(partStr);
  const no = Number(noStr);

  const [problem, setProblem] = useState(null);

  useEffect(() => {
    if (!Number.isInteger(part) || !Number.isInteger(no)) {
      alert("Please use a valid part and problem number");
      return;
    }

    fetchProblem(part, no);
  }, [part, no]);

  async function fetchProblem(part, no) {
    const res = await fetch(`/api/problems?part=${part}&no=${no}`);
    const data = await res.json();
    setProblem(data);
  }

  return (
    <div className="text-white">
      {problem ? <pre>{JSON.stringify(problem, null, 2)}</pre> : "Loading..."}
    </div>
  );
}
