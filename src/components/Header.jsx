import { IoMdNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <header className="h-[10vh] bg-slate-100 flex justify-end items-center px-5 gap-5">
      <input
        type="text"
        placeholder="search..."
        className="h-[6vh] w-64 outline-none border-[1px] border-gray-600 bg-transparent rounded-full hover:border-2 pl-5"
      />

      <button>
        <IoMdNotificationsOutline className="text-xl" />
      </button>

      <div className="h-8 w-8 bg-blue-500 rounded-full flex justify-center items-center text-white">
        EC
      </div>
    </header>
  );
}

export default Header;
