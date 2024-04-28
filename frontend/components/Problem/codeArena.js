import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function CodeArena() {
  const [language, setLanguage] = useState("cpp");
  const [testTab, setTestTab] = useState(1);
  const [code , setCode] = useState("//Enter your code here") ;

  return (
    <div className="flex flex-col gap-2 w-[50%]">
      {/* code editor */}
      <div className="h-[50vh] bg-[#262626]  rounded-lg overflow-hidden overflow-y-scroll">
        {/* header */}
        <div className="h-12 bg-[#333333] px-4 flex justify-between items-center">
          <h1 className="font-semibold">
            <span className="text-green-400">{"</>"}</span> Code
          </h1>
          <select
            className="select select-bordered select-sm"
            onChange={(e) => setLanguage(e.target.value)}
            defaultValue={"cpp"}
          >
            <option>cpp</option>
            <option disabled>java</option>
            <option disabled>python</option>
          </select>
        </div>
        {/* editor */}
        <Editor
          height="calc(100% - 3rem)"
          defaultLanguage={language}
          theme="vs-dark"
          options={{ fontSize: 16, padding: 2 }}
          value={code}
          onChange={(value) => setCode(value)}
        />
      </div>

      {/* output */}
      <div className="h-[37vh] bg-[#262626] flex justify-between flex-col rounded-lg overflow-hidden overflow-y-scroll">
        <div className="h-10 bg-base-200">
          <div role="tablist" className="tabs tabs-bordered max-w-[300px]">
            <button
              role="tab"
              className={`tab ${testTab === 1 ? "tab-active" : ""}`}
              onClick={() => setTestTab(1)}
            >
              Test Result
            </button>
            <button
              role="tab"
              className={`tab ${testTab === 2 ? "tab-active" : ""}`}
              onClick={() => setTestTab(2)}
            >
              Test Case
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 py-1">
          <button className="btn btn-sm btn-neutral">Run</button>
          <button className="btn btn-sm btn-success">Submit</button>
        </div>
      </div>
    </div>
  );
}
