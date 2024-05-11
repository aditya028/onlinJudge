"use client";

import CodeArena from "@/components/Problem/codeArena";
import Description from "@/components/Problem/description";
import Solution from "@/components/Problem/solution";
import Submission from "@/components/submission";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchProblemDescription } from "@/utils/fetchProblems";
import { fetchSubmissions } from "@/utils/fetchSubmissions";

export default function page() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const [tab, setTab] = useState(1);
  const [problem, setProblem] = useState({});
  const [submissions, setSubmissions] = useState();

  useEffect(() => {
    // Fetch the problem statement
    fetchProblemDescription(id)
      .then((data) => {
        setProblem(data);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }, []);

  useEffect(() => {
    if (tab !== 3) return;
    fetchSubmissions("", id)
      .then((data) => {
        setSubmissions(data);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }, [tab]);

  return (
    <div className="flex p-4 gap-4">
      {/* For problem statement */}
      <div className="h-[88vh] bg-[#262626] w-[49%] rounded-lg overflow-hidden overflow-y-scroll">
        <div>
          <div role="tablist" className="tabs tabs-boxed">
            <button
              role="tab"
              className={`tab ${tab === 1 ? "tab-active" : ""}`}
              onClick={() => setTab(1)}
            >
              Description
            </button>
            <button
              role="tab"
              className={`tab ${tab === 2 ? "tab-active" : ""}`}
              onClick={() => setTab(2)}
            >
              Solution
            </button>
            <button
              role="tab"
              className={`tab ${tab === 3 ? "tab-active" : ""}`}
              onClick={() => setTab(3)}
            >
              Submissions
            </button>
          </div>
        </div>
        {tab === 1 && <Description problem={problem} />}
        {tab === 2 && <Solution codeString={problem.code} />}
        {tab === 3 && <Submission submissions={submissions} />}
      </div>

      {/* For coding area and output */}
      <CodeArena id={problem.id} title={problem.title} />
    </div>
  );
}
