import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("slateblue");

  function changeColour(color) {
    setColor(color);
  }
  // use function when you have to reuse that many time or it is complex or else setColor can be used to set the color for short and quick use

  return (
    <div
      className="w-full h-screen transition-all duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex justify-center bottom-12 inset-x-0 px-2">
        <div className="flex justify-center bg-white px-5 py-2 shadow-xl gap-3 rounded-3xl">
          <button
            className="outline-none px-6 py-2 shadow-xl rounded-full text-white hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: "#38BDF8" }}
            onClick={() => setColor("#38BDF8")}>
            Sky
          </button>

          <button
            className="outline-none px-6 py-2 shadow-xl rounded-full text-white hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: "#F43F5E" }}
            onClick={() => setColor("#F43F5E")}>
            Rose
          </button>

          <button
            className="outline-none px-6 py-2 shadow-xl rounded-full text-white hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: "#10B981" }}
            onClick={() => changeColour("#10B981")}>
            Emerald
          </button>

          <button
            className="outline-none px-6 py-2 shadow-xl rounded-full text-white hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: "#8B5CF6" }}
            onClick={() => changeColour("#8B5CF6")}>
            Violet
          </button>

          <button
            className="outline-none px-6 py-2 shadow-xl rounded-full text-white hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: "#F59E0B" }}
            onClick={() => changeColour("#F59E0B")}>
            Amber
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;


