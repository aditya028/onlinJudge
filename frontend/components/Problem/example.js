export default function Example({ input, output }) {
  return (
    <div className="mt-8 flex flex-col gap-4">
      <h2 className="text-lg font-semibold ">Example 1:</h2>
      <div className=" pl-3">
        <div className="flex gap-2">
          <div className="w-1/2">
            <h3 className="text-[#9e9e9e]">Input</h3>
            <pre className="bg-[#2b2b2b] p-4 rounded-lg">{input}</pre>
          </div>
          <div className="w-1/2">
            <h3 className="text-[#9e9e9e]">Output</h3>
            <pre className="bg-[#2b2b2b] p-4 rounded-lg">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
