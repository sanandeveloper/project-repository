import { useState } from "react";

import "./App.css";
// import BgChanger from './BgChanger'

function App() {
  const [color, setColor] = useState("");

  return (
    <div
      className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-20 justify-center flex-row ml-20 mr-20 ">
        <button  onClick={()=>{  setColor("red")}} className="bg-red-700 text-white text-[15px] cursor-pointer font-sans rounded-md p-2 w-20 shadow-amber-300 ">
          Red
        </button>
        <button onClick={()=>{  setColor("green")}} className="bg-green-700 text-white text-[15px] cursor-pointer font-sans rounded-md p-2 w-20 shadow-amber-300 ">
          Green
        </button>
        <button onClick={()=>{  setColor("blue")}} className="bg-blue-700 text-white text-[15px] cursor-pointer font-sans rounded-md p-2 w-20 shadow-amber-300 ">
          Blue
        </button>
        <button onClick={()=>{  setColor("yellow")}} className="bg-yellow-400 text-white text-[15px] cursor-pointer font-sans rounded-md p-2 w-20 shadow-amber-300 ">
          Yellow
        </button>
        <button onClick={()=>{  setColor("purple")}} className="bg-purple-700 text-white text-[15px] cursor-pointer font-sans rounded-md p-2 w-20 shadow-amber-300 ">
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
