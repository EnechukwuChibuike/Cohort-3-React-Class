import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="h-[10vh] bg-slate-100 flex justify-between items-center px-5">
      <strong>Logo.</strong>

      <nav className="flex items-center gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/signup">
          <button className="bg-blue-500 text-white px-5  py-3">Sign Up</button>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
