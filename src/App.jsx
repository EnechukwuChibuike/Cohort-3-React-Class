import "./App.css";
import NotFound from "./NotFound";
import ProductId from "./ProductId";
// import Counter from "./Counter";
import Promise from "./Promise";
import Recipe from "./Recipe";
import ScrollHeader from "./ScrollHeader";
import { Routes, Route } from "react-router-dom";

//use Effect
function App() {
  return (
    <main className="h-[200vh]">
      <ScrollHeader />
      <Routes>
        <Route path="/" element={<Promise />} />
        <Route path="/:productID" element={<ProductId />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Recipe /> */}
    </main>
  );
}

export default App;
