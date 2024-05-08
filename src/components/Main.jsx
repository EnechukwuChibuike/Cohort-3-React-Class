import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-[80vw]">
        <Header />
        <section className="h-[80vh] overflow-y-auto">
          <Outlet />
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default Main;
