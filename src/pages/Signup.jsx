import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <Link to="/">Back to Home</Link>
      <form className="w-screen h-screen flex items-center justify-center">
        <h1 className="text-4xl">SIGN UP</h1>
      </form>
    </>
  );
}

export default Signup;
