import submitCode from "@/utils/submitCode";
import Editor from "@monaco-editor/react";
import { useState } from "react";

export default function CodeArena({ id , title , difficulty}) {
  const [language, setLanguage] = useState("cpp");
  const [testTab, setTestTab] = useState(1);
  const [code, setCode] = useState("//Enter your code here");
  const [isCompiled, setIsCompiled] = useState(false);
  const [result, setResult] = useState({});

  const handleSubmit = (type) => {
    submitCode(code, id , 'cpp' , title , type , difficulty)
      .then((data) => {
        if (data == "Compilation error")
          setResult({ error: "Compilation error" });
        else setResult(data);
      })
      .catch((error) => {
        console.error(`Error - ${error}`);
      });
    setIsCompiled(true);
  };

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
        {isCompiled ? (
          result.error ? (
            <div className="mx-auto p-5 font-semibold badge badge-error gap-2">{result.error}</div>
          ) : (
            <div className="p-5 flex flex-col gap-3 overflow-y-scroll">
              {result.type === "submit" && <div
                className={`badge badge-${
                  result.accepted ? "success" : "error"
                } gap-2`}
              >
                {result.accepted ? "Accepted" : "Wrong Answer"}
              </div>}
              <div>
                <h3 className="text-[#9e9e9e]">Std Input</h3>
                <pre className="bg-[#2b2b2b] p-4 rounded-lg ">
                  {result.stdInput}
                </pre>
              </div>
              <div>
                <h3 className="text-[#9e9e9e]">Std Output</h3>
                <pre className="bg-[#2b2b2b] p-4 rounded-lg">
                  {result.stdOutput}
                </pre>
              </div>
              <div>
                <h3 className="text-[#9e9e9e]">Expected Output</h3>
                <pre className="bg-[#2b2b2b] p-4 rounded-lg">
                  {result.expOutput}
                </pre>
              </div>
            </div>
          )
        ) : (
          ""
        )}
        <div className="flex justify-center items-center gap-3 py-1">
          <button onClick={() => handleSubmit("run")} className="btn btn-sm btn-neutral">
            Run
          </button>
          <button
            disabled={localStorage.getItem("token") ? false : true}
            className="btn btn-sm btn-success"
            onClick={() => handleSubmit("submit")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
