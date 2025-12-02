"use client";
import Editor from "./components/Editor";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="h-screen w-screen bg-white p-20">
      <Editor></Editor>
    </div>
  );
}
