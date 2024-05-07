import { useState } from "react";
import "./App.css";
import Increment from "./components/increment";
import Bulb from "./components/Bulb";

function App() {
  const [text, setText] = useState("hiii");

  const handleClick = () => {
    if (text === "hello") {
      setText("hiii");
    } else {
      setText("hello");
    }
  };

  return (
    <>
      <main className="text-xl h-screen flex justify-center items-center flex-col w-screen">
        <h1>{text}</h1>
        <button className="bg-blue-500 p-2" onClick={handleClick}>
          Click me!
        </button>
      </main>
      <Increment />
      <Bulb />
    </>
  );
}

export default App;
