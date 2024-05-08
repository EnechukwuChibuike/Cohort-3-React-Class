import { NavLink, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="px-10">
      <h1 className="text-4xl">Products</h1>

      <nav className="w-full h-[10vh] border-[0.5px] border-gray-900 flex justify-around items-center">
        <NavLink to="/products/shoes">Shoes</NavLink>
        <NavLink to="/products/clothes">Clothes</NavLink>
        <NavLink to="/products/electronics">Electronics</NavLink>
        <NavLink to="/products/jewelries">Jewelries</NavLink>
        <NavLink to="/products/bag">Bag</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Products;
