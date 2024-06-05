import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
        name: "Adding",
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        name: "Reducing",
      };

    case "reset":
      return {
        counter: 0,
        name: "reseted",
      };
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducer, { counter: 0, name: "" });

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <section className="flex h-screen justify-center flex-col items-center">
      <h1 className="text-5xl">{state.counter}</h1>
      <h1 className="text-5xl">{state.name}</h1>

      <section className="space-x-3">
        <button
          className="bg-blue-600 text-white p-3 text-4xl"
          onClick={handleIncrement}
        >
          +
        </button>

        <button
          className="bg-blue-600 text-white p-3 text-4xl"
          onClick={handleDecrement}
        >
          -
        </button>

        <button
          className="bg-blue-600 text-white p-3 text-4xl"
          onClick={handleReset}
        >
          Reset
        </button>
      </section>
    </section>
  );
}

export default Reducer;
