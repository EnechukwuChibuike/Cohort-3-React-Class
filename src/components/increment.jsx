import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Increment() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((prev) => prev + 1);

    setTimeout(() => {
      setNum((prev) => prev + 1);
    }, 2000);
  };

  const decrement = () => {
    setNum((prev) => prev - 1);

    setTimeout(() => {
      setNum((prev) => prev - 1);
    }, 2000);
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col gap-3">
      <h1 className="text-5xl">{num}</h1>

      <section className="space-x-2">
        <button
          className="p-3 bg-slate-400 text-xl hover:bg-slate-600"
          onClick={increment}
        >
          <FaPlus />
        </button>

        <button
          className="p-3 bg-slate-400 text-xl hover:bg-slate-600"
          onClick={decrement}
        >
          <FaMinus />
        </button>
      </section>
    </section>
  );
}

export default Increment;
