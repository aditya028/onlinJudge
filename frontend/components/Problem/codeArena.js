import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function CodeArena() {
  const [language, setLanguage] = useState("cpp");
    const [testTab ,setTestTab] = useState(1) ;

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
            <option>java</option>
            <option>python</option>
          </select>
        </div>
        {/* editor */}
        <Editor
          height="calc(100% - 3rem)"
          defaultLanguage={language}
          defaultValue="// Write your code here"
          theme="vs-dark"
          options={{ fontSize: 16, padding: 2 }}
        />
      </div>

      {/* output */}
      <div className="h-[37vh] bg-[#262626]  rounded-lg overflow-hidden overflow-y-scroll">
        <div className="h-10 bg-base-200">
          <div role="tablist" className="tabs tabs-bordered max-w-[300px]">
            <button role="tab" className={`tab ${testTab === 1 ? 'tab-active' : ''}`} onClick={() => setTestTab(1)}>
              Test Case
            </button>
            <button role="tab" className={`tab ${testTab === 2 ? 'tab-active' : ''}`} onClick={() => setTestTab(2)}>
              Test Result
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
