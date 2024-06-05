import { useContext } from "react";
import { Context } from "./Context";
import Button from "./Button";

function Counter() {
  const { counter } = useContext(Context);
  return (
    <div>
      <h1 className="text-4xl">{counter}</h1>
      {/* <Button setCounter={setCounter} /> */}
      <Button />
    </div>
  );
}

export default Counter;
