import { useState } from "react";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";

function Bulb() {
  const [toggleBulb, setToggleBulb] = useState(false);

  const ONBulb = () => {
    setToggleBulb(true);
  };

  const OFFBulb = () => {
    setToggleBulb(false);
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col gap-3">
      <section className="text-5xl">
        {/* {toggleBulb && <FaLightbulb />}
        {!toggleBulb && <FaRegLightbulb />} */}

        {toggleBulb ? <FaLightbulb /> : <FaRegLightbulb />}
      </section>

      <section className="space-x-2">
        <button
          className="p-3 bg-slate-400 text-xl hover:bg-slate-600"
          onClick={ONBulb}
        >
          ON
        </button>

        <button
          className="p-3 bg-slate-400 text-xl hover:bg-slate-600"
          onClick={OFFBulb}
        >
          OFF
        </button>
      </section>
    </section>
  );
}

export default Bulb;
