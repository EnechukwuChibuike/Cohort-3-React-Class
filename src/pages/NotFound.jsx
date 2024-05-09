import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full h-screen gap-3 flex justify-center items-center flex-col">
      <h1 className="text-4xl text-red-500">
        404 <span className="text-black">Page Not Found</span>
      </h1>

      <Link to="/" className="underline text-blue-600">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
