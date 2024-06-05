import { useState } from "react";
import "./App.css";
import { Context } from "./Context";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      <Context.Provider value={{ toggleSidebar, setToggleSidebar }}>
        <Header />

        <section className="flex">
          <Sidebar />
          <section className="p-2">
            <strong>Hey [name]</strong>
            <h3>Welcome to your dashboard</h3>
          </section>
        </section>
      </Context.Provider>
    </>
  );
}

export default App;
