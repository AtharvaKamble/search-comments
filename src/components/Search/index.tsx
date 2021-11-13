export function Search() {
  return (
    <div className="grid grid-cols-2 w-full p-4 m-1 text-purple-900">
      <span className="text-4xl mx-auto font-Alfa-Slab-One">
        search-comments
      </span>
      <div className="flex justify-evenly">
        {/* <button className="w-full font-Alfa-Slab-One">
            search
          </button>
          <button className="w-full font-Alfa-Slab-One">comments</button> */}
        <div className="flex justify-evenly items-center">
          <button
            className="w-full font-Alfa-Slab-One hover:opacity-40"
            onClick={() =>
              window.open("https://github.com/AtharvaKamble/search-comments")
            }
          >
            <img
              alt="Link to the source code GitHub repository"
              src="/github_logo.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
