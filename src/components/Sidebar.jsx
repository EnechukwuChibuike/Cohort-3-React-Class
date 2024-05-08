import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="h-screen grid justify-items-center  border-r-[1px] border-r-black w-[20vw]">
      <section className="h-[10vh] border-black w-full border-b-[1px] flex items-center justify-center">
        <h1 className="text-2xl font-bold">LOGO</h1>
      </section>

      <nav className="pt-10 grid h-[90vh] content-start justify-items-center gap-7">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products/shoes">Products</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
