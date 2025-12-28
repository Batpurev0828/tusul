"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAllProblems() {
    try {
      const res = await fetch("/api/allproblems");
      if (!res.ok) {
        throw new Error("Failed to fetch problems");
      }
      const data = await res.json();
      setProblems(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllProblems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen p-4 bg-white text-black">
      <h1 className="text-xl font-bold mb-4">Problems</h1>

      <ul className="space-y-2">
        {problems.map((problem) => (
          <li
            key={problem._id}
            className="border p-3 rounded"
          >
            <pre>{JSON.stringify(problem, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}
