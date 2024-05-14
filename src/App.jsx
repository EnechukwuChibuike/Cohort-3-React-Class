import "./App.css";
import Counter from "./Counter";
import ScrollHeader from "./ScrollHeader";

//use Effect
function App() {
  return (
    <main className="h-[200vh]">
      <ScrollHeader />
      <Counter />
    </main>
  );
}

export default App;
