import React, { useState } from "react";

const App = () => {
  const [colour, setColour] = useState("");

  return (
    <div className="border-2 mr-4 p-7 m-10 rounded-2xl">
      <div className={` min-w-md border-3 shadow-2xl h-40 rounded-2xl ${colour}`}>
        <h1 className="text-2xl flex items-center justify-center mt-14"> Woww its Changed !!</h1>
      </div>
      <div className="p-20 gap-3 flex justify-center items-center">
        <button
          onClick={() => setColour("bg-green-300")}
          className="border-2 py-4 px-6 mb-2 hover:bg-green-300 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-sky-300")}
          className="border-2 py-4 px-6 mb-2 hover:bg-sky-300 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-orange-300")}
          className="border-2 py-4 px-6 mb-2 hover:bg-orange-300 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-purple-300")}
          className="border-2 py-4 px-6 mb-2 hover:bg-purple-300 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-pink-300")}
          className="border-2 py-4 px-6 mb-2 hover:bg-pink-300 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
        <button
          onClick={() => setColour("bg-emerald-300")}
          className="border-2 py-4 px-6 mb-2 hover:bg-emerald-300 hover:text-white rounded-2xl"
        >
          AddThis
        </button>
      </div>
    </div>
  );
};

export default App;
