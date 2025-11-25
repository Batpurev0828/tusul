import { MathJaxContext } from "better-react-mathjax";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`antialiased`}>
        <MathJaxContext
          config={{
            loader: { load: ["input/tex", "output/chtml"] },
            tex: {
              inlineMath: [
                ["$", "$"],
                ["\\(", "\\)"],
              ],
              displayMath: [
                ["$$", "$$"],
                ["\\[", "\\]"],
              ],
            },
            output: {
              font: "mathjax-tex", // <-- Change this to the font set you want
              chtml: {
                mtextInheritFont: true, // make mtext use your page font where possible
              },
            },
          }}
        >
          {children}
        </MathJaxContext>
      </body>
    </html>
  );
}
