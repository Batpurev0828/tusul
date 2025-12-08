// components/Editor.jsx
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "katex/dist/katex.css";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Editor({ value, setValue }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div data-color-mode="light">
      <MDEditor
        value={value}
        onChange={setValue}
        previewOptions={{
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        }}
        preview="live"
        height={600}
      />
    </div>
  );
}
