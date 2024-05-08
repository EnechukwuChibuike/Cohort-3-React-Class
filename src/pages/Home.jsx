import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const changeLocation = () => {
    navigate("/signup");
  };
  return (
    <div className="h-full w-full bg-gray-500 grid content-center justify-items-center gap-3">
      <h1 className="text-5xl text-white font-mono">Welcome to my Page</h1>

      <section className="space-x-2">
        <button
          onClick={changeLocation}
          className="bg-blue-500 text-white px-5 py-2"
        >
          Get Started
        </button>
        <button className="bg-white text-blue-500 px-5 py-2">Learn more</button>
      </section>
    </div>
  );
}

export default Home;
