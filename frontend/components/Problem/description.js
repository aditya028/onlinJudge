import Example from "./example";

export default function Description({ problem }) {
  return (
    <div className="flex flex-col mx-4 my-6 gap-4">
      <h1 className="text-[26px] font-semibold">{problem.title}</h1>
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
      <p>
        {problem.description}
      </p>
      {problem.example?.map((example, index) => (
        <Example key={index} input={example.input} output={example.output} />
      ))}
      
    </div>
  );
}
