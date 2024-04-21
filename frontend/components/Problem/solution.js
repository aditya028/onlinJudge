
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Solution({ codeString }) {
  return (
    <div className="m-4 ">
      <div className="flex gap-3">
        <div className="badge badge-success gap-2">code</div>
        <div className="badge badge-success gap-2">c++</div>
      </div>
      <SyntaxHighlighter
        language="cpp"
        style={atomOneDark}
        customStyle={{ backgroundColor: "transparent" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
