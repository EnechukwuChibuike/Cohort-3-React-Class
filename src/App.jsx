import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./components/Main";
import Signup from "./pages/Signup";

// Products
import Products from "./pages/Products/Products";
import Shoes from "./pages/Products/Shoe";
import Electronics from "./pages/Products/Electronics";
import Bag from "./pages/Products/Bag";
import Clothes from "./pages/Products/Clothes";
import Jewelries from "./pages/Products/Jewelries";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<Products />}>
            <Route path="/products/shoes" element={<Shoes />} />
            <Route path="/products/electronics" element={<Electronics />} />
            <Route path="/products/bag" element={<Bag />} />
            <Route path="/products/clothes" element={<Clothes />} />
            <Route path="/products/jewelries" element={<Jewelries />} />
          </Route>
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
