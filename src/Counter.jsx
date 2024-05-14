import { useEffect, useState } from "react";

//use Effect
function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  });

  return (
    <main className="flex h-screen justify-center items-center">
      <h1 className="text-5xl">{counter}</h1>
    </main>
  );
}

export default Counter;
