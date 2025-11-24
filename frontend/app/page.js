"use client";

import { MathJax } from "better-react-mathjax";

export default function App() {
  return (
    <div className="h-screen w-screen bg-white">
      <MathJax>{'$$a$$'}</MathJax>
    </div>
  );
}
