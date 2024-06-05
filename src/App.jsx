import { useRef, useState } from "react";
import "./App.css";
import Reducer from "./Reducer";

function App() {
  const text = useRef();
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (text.current.value === "") {
      setError(true);
    } else {
      alert(`Welcome ${text.current.value}`);
    }
  };

  const handleChange = () => {
    setError(false);
  };
  return (
    <div className="space-x-3">
      <input
        className="border-[1px] p-2 border-black"
        type="text"
        ref={text}
        onChange={handleChange}
      />

      <button className="p-2 bg-gray-600" onClick={handleClick}>
        click
      </button>

      {error && (
        <div>
          <small className="text-red-500">Please fill in your name</small>
        </div>
      )}

      <Reducer />
    </div>
  );
}

export default App;
