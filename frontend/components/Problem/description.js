import Example from "./example";

export default function Description() {
  return (
    <div className="flex flex-col mx-4 my-6 gap-4">
      <h1 className="text-[26px] font-semibold">1. First Problem</h1>
      <div className="badge badge-success gap-2">Easy</div>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc ultricies 
        scelerisque. Nullam vel enim nec est lacinia posuere. Donec ac ex ac nunc ultricies scelerisque.
        Nullam vel enim nec est lacinia posuere. Donec ac ex ac nunc ultricies scelerisque. Nullam vel enim
        nec est lacinia posuere. Donec ac ex ac nunc ultricies scelerisque. Nullam vel enim nec est lacinia
        posuere. Donec ac ex ac nunc ultricies scelerisque. Nullam vel enim nec est lacinia posuere. Donec ac
        ex ac nunc ultricies scelerisque. Nullam vel enim nec est lacinia posuere. Donec ac ex ac nunc ultricies
        scelerisque. Nullam vel enim nec est lacinia posuere. Donec ac ex ac nunc ultricies scelerisque. Nullam
        vel enim nec est lacinia posuere. Donec ac ex ac nunc ultricies scelerisque. Nullam vel enim nec est
      </p>
      <Example input="1 2" output="3" />
      <Example input="1 2 3 1 3 4" output="32" />
    </div>
  );
}
