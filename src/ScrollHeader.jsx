import { useEffect, useState } from "react";

function ScrollHeader() {
  const [scrollHeader, setScrollHeader] = useState("static");

  useEffect(() => {
    const scrollFunc = () => {
      const scroll = window.scrollY;
      scroll > 200 ? setScrollHeader("fixed") : setScrollHeader("static");
    };

    window.addEventListener("scroll", scrollFunc);

    return () => window.removeEventListener("scroll", scrollFunc);
  });

  return (
    <header
      className={`h-[10vh] transition duration-500 w-screen flex items-center justify-center bg-slate-500 ${scrollHeader}`}
    >
      ScrollHeader
    </header>
  );
}

export default ScrollHeader;
