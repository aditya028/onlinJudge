"use client";

import CodeArena from "@/components/Problem/codeArena";
import Description from "@/components/Problem/description";
import Solution from "@/components/Problem/solution";
import Submission from "@/components/submission";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchProblemDescription } from "@/utils/fetchProblems";

export default function page() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const [tab, setTab] = useState(1);
  const [problem , setProblem] = useState({}) ;
  const codeString = `class Solution {
    public:
        int maxArea(vector<int>& h) {
            int maxArea = 0 ;
            int n = h.size() ;
            int l = 0 , r = n-1 ;
            while(l < r){
                int minNum = min(h[l],h[r]) ;
                maxArea = max(maxArea , minNum*(r-l)) ;
                if(h[l] < h[r]) l++ ;
                else if(h[l] > h[r]) r-- ;
                else {
                    r-- ; l++ ;
                }
            }
            return maxArea ;
        }
    };`;

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
        {tab === 1 && <Description problem={problem}/>}
        {tab === 2 && <Solution codeString={codeString} />}
        {tab === 3 && <Submission />}
      </div>

      {/* For coding area and output */}
      <CodeArena />
    </div>
  );
}
