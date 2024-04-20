import ProblemList from "@/components/Home/problemList";

export default function Home() {
  return (
    <>
      <div className="flex gap-10 max-w-[1200px] mt-[100px] m-auto">
        <div className="max-w-[60%]">
          <h1 className="text-[108px] font-aref-ruqaa leading-[120px]">
            Elevate your <span className="text-[#D0589E]">{"{coding}"}</span>{" "}
            Skills
          </h1>
          <p className="text-[20px] mt-10">
            Enhance your programming abilities by solving our comprehensive
            problems. Learn, grow, and excel in the world of coding.
          </p>
        </div>
        <div className="text-[250px] font-semibold text-[#D0589E]">{"</>"}</div>
      </div>
        <ProblemList />
    </>
  );
}
