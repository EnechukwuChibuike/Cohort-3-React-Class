import { useContext } from "react";
import { Context } from "./Context";
import { ImCancelCircle } from "react-icons/im";

function Sidebar() {
  const { toggleSidebar, setToggleSidebar } = useContext(Context);
  return (
    <main
      className={`bg-[#0000005a] sm:w-fit sm:h-fit top-0 sm:static sm:bg-transparent fixed ${
        toggleSidebar ? "w-full" : "w-0"
      } overflow-hidden h-full`}
    >
      <aside
        className={`h-screen ${
          toggleSidebar ? "w-1/2" : "w-0"
        } bg-white sm:bg-transparent transition duration-500 overflow-hidden sm:w-64 border-[1px] border-black sm:static absolute sm:h-[90vh] top-0`}
      >
        <div className="flex justify-between items-center p-10">
          Sidebar
          <button
            className="sm:hidden text-2xl"
            onClick={() => setToggleSidebar(false)}
          >
            <ImCancelCircle />
          </button>
        </div>
      </aside>
    </main>
  );
}

export default Sidebar;
