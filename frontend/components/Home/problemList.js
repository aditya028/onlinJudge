"use client";

import fetchProblems from "@/utils/fetchProblems";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProblemList() {
  const [problemList, setProblemList] = useState([]);

  useEffect(() => {
    fetchProblems()
      .then((res) => {
        setProblemList(res);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }, []);

  return (
    <div
      // style={{ boxShadow: "0 -5px 5px -6px #fff, 0 5px 5px -6px #fff" }}
      className="p-5 shadow-lg max-w-[1200px] "
    >
      <div className=" overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Status</th>
              <th>Title</th>
              <th>Solution</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {problemList?.map((problem, index) => (
              <tr key={index}>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </td>
                <td className="hover:cursor-pointer hover:text-sky-500">
                  <Link href={`/problem/${problem.id}`}>{problem.title}</Link>
                </td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-green-500 hover:cursor-pointer"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </td>
                <td>
                  <div
                    className={`badge badge-${
                      problem.difficulty == "easy"
                        ? "success"
                        : problem.difficulty == "medium"
                        ? "warning"
                        : "error"
                    } gap-2`}
                  >
                    {problem.difficulty}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row-reverse mt-4 ">
        <div className="join">
          <button className="join-item btn btn-sm hover:bg-[#D0589E]">«</button>
          <button className="join-item btn btn-sm">Page 1</button>
          <button className="join-item btn btn-sm hover:bg-[#D0589E]">»</button>
        </div>
      </div>
    </div>
  );
}
