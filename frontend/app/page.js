"use client";

import { MathJax } from "better-react-mathjax";

export default function App() {
  return (
    <div className="h-screen w-screen bg-white p-20 text-black flex font-arial flex-col items-centers justify-begin">
      <MathJax>
        {
          "$ f(x) = ax + b \\text{ функц өгөв. } \\, f(f(x)) = 16x+40 \\text{, } x \\in R \\, \\text{байх} \\, a,b \\text{ - гийн боломжит утгыг олоорой.} $"
        }
      </MathJax>
      <MathJax>{"$ \\text{Бодолт:} $"}</MathJax>
      <MathJax>{"$ f(f(x)) = a(f(x)) + b = a(ax + b) + b $"}</MathJax>
      <MathJax>{"$ a^2x+ab+b=16x+40 $"}</MathJax>
      <MathJax>{"$ a^2x=16x $"}</MathJax>
      <MathJax>{"$ ab+b=40 $"}</MathJax>
    </div>
  );
}
