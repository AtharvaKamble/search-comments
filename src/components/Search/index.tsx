export function Search() {
  return (
    <div className="flex flex-col mx-auto my-28 w-full font-Alfa-Slab-One">
      <span className="mx-auto text-purple-900">enter link for a video</span>
      <div
        style={{ minWidth: "50%" }}
        className="mx-auto rounded-md border-2 border-purple-900 text-gray-800"
      >
        <input
          type="text"
          autoFocus
          className="p-5 outline-none w-3/5 font-Space-Mono text-lg"
        />
        <button className="p-3 rounded-md hover:bg-gray-100">
          paste from clipboard
        </button>
        <button className="p-3 rounded-md hover:bg-gray-100">search</button>
      </div>
    </div>
  );
}
