import React, { useState } from "react";

const App = () => {
  const [colour, setColour] = useState("bg-sky-400");

  return (
    <div className="p-70 m-10">
      <div className={` min-w-md border h-40 ${colour}`}>
      </div>
      <div className="p-10 gap-3  flex justify-center items-center">
        <button
          onClick={() => setColour("bg-green-400")}
          className="border-2 py-4 px-6 mb-2 hover:bg-green-400 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-sky-500")}
          className="border-2 py-4 px-6 mb-2 hover:bg-sky-500 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-orange-600")}
          className="border-2 py-4 px-6 mb-2 hover:bg-orange-600 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-purple-500")}
          className="border-2 py-4 px-6 mb-2 hover:bg-purple-500 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-pink-600")}
          className="border-2 py-4 px-6 mb-2 hover:bg-pink-600 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-black")}
          className="border-2 py-4 px-6 mb-2 hover:bg-black hover:text-white rounded-2xl"
        >
          AddThis
        </button>
      </div>
    </div>
  );
};

export default App;
