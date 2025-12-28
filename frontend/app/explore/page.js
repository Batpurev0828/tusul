"use client";
import { useEffect, useState } from "react";

export default function App() {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    async function init() {
      try {
        const response = await fetch("/api/problems");
        const data = await response.json();
        setProblems(data);
      } catch (e) {
        console.log(e.message);
      }
    }
    init();
  }, []);
  return (
    <div className="h-screen w-screen bg-white p-20 flex flex-col text-black">
      hello
      <ul className="list-disc ml-6 space-y-2">
        {problems.map((p) => (
          <li key={p._id}>{p.content}</li>
        ))}
      </ul>
    </div>
  );
}
