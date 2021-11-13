import { useState } from "react";

export function Search() {
  const [videoLink, setVideoLink] = useState<string>();
  const [pasteButtonText, setPasteButtonText] = useState<string>(
    "paste from clipboard"
  );

  const isFirefox: boolean = navigator.userAgent.indexOf("Firefox") === -1;

  const handlePasteFromClipboard = async () => {
    const clipboardText = await navigator.clipboard.readText();

    setVideoLink(clipboardText);
    setPasteButtonText("Pasted!");
  };

  return (
    <div className="flex flex-col mx-auto my-28 w-full font-Alfa-Slab-One">
      <span className="mx-auto text-purple-900">enter link for a video</span>
      <div
        style={{ minWidth: "50%" }}
        className="mx-auto rounded-md border-2 border-purple-900 text-gray-800"
      >
        <input
          value={videoLink}
          onChange={(e) => setVideoLink(e.target.value)}
          className="p-5 outline-none w-3/5 font-Space-Mono text-lg"
        />
        {/* Firefox doesn't allow reading clipboard expect in extensions, hence we are disabling for it */}
        {isFirefox ? (
          <button
            style={{ minWidth: "150px" }}
            className="p-3 rounded-md hover:bg-gray-100 active:animate-scale-up-center"
            onClick={handlePasteFromClipboard}
          >
            {pasteButtonText}
          </button>
        ) : null}
        <button
          style={{ minWidth: "150px" }}
          className="p-3 rounded-md hover:bg-gray-100 active:animate-scale-up-center"
        >
          search
        </button>
      </div>
    </div>
  );
}
