import { useContext } from "react";
import { Context } from "./Context";

function Button() {
  const { setCounter } = useContext(Context);
  return (
    <button
      onClick={() => setCounter((prev) => prev + 1)}
      className="bg-gray-500 hover:bg-gray-600 p-3"
    >
      Increment
    </button>
  );
}

export default Button;
