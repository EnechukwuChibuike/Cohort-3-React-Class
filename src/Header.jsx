import { useContext } from "react";
import { Context } from "./Context";
import { MdMenu } from "react-icons/md";

function Header() {
  const { setToggleSidebar } = useContext(Context);

  const handleToggle = () => {
    // toggleSidebar === "w-0"
    //   ? setToggleSidebar("w-1/2")
    //   : setToggleSidebar("w-0");
    setToggleSidebar(true);
  };

  return (
    <header className="border-[1px] border-black flex justify-around items-center h-[10vh]">
      <strong>Header</strong>

      <button className="sm:hidden block text-2xl" onClick={handleToggle}>
        <MdMenu />
      </button>
    </header>
  );
}

export default Header;
