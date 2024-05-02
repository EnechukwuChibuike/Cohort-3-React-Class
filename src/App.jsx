import "./App.css";
import Button from "./components/Button.jsx";
import Header from "./Header.jsx";

function App() {
  const text = "Welcome to my First React App";

  return (
    <main className="bg-gray-700">
      <Header />
      <section className="h-[90vh] text-white flex justify-center gap-3 items-center flex-col">
        <h1 className="text-[5vw] font-mono font-bold">{text}</h1>
        <section className="flex gap-3">
          <Button bg={"bg-blue-500"} name={"Get Started"} />
          <Button
            bg={"bg-[whitesmoke] text-black"}
            name={"See Documentation"}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
