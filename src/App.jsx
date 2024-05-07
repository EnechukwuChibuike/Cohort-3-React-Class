import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./components/Main";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
