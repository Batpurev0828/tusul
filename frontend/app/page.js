"use client";
import Editor from "./components/Editor";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [part, setPart] = useState(1);
  const [no, setNo] = useState(1);

  async function handleSubmit() {
    if (value === "") {
      alert("please write the problem statement");
      return;
    }
    if (difficulty < 1 || difficulty > 3 || difficulty % 1 !== 0) {
      alert("difficulty must be between 1, 2 or 3");
      return;
    }
    if (part < 1 || part > 10 || part % 1 !== 0) {
      alert("part must be a integer between 1 and 10");
      return;
    }
    if (no < 1 || no > 100 || no % 1 !== 0) {
      alert("No. must be a integer between 1 and 100");
      return;
    }
    const Problem = {
      content: value,
      part,
      no,
      difficulty,
    };
    try {
      await fetch("/api/problems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Problem),
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div className="h-screen w-screen bg-white p-20 flex flex-col text-black">
      <div className="flex space-x-4 items-center">
        <p>Part:</p>
        <input
          className="border border-black rounded-md p-2 w-32 h-8"
          type="number"
          min={1}
          max={10}
          value={part}
          onChange={(e) => setPart(Number(e.target.value))}
        />

        <p>No:</p>
        <input
          className="border border-black rounded-md p-2 w-32 h-8"
          type="number"
          min={1}
          max={100}
          value={no}
          onChange={(e) => setNo(Number(e.target.value))}
        />

        <p>Difficulty:</p>
        <input
          className="border border-black rounded-md p-2 w-32 h-8"
          type="number"
          min={1}
          max={3}
          value={difficulty}
          onChange={(e) => setDifficulty(Number(e.target.value))}
        />
      </div>

      <div className="mt-4"></div>

      <Editor value={value} setValue={setValue} />

      <button
        className="w-32 h-12 bg-blue text-white rounded-md bg-blue-500 mt-4"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
