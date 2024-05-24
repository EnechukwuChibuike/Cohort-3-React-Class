import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Promise() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const api = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);

      setLoading(true);

      try {
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError("404! API Route Not Found");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Fetching Product API</h1>
      <section className="flex justify-around min-h-screen items-center flex-wrap gap-5">
        <h1 className="text-5xl">{error}</h1>

        {loading && <h1 className="text-5xl">loading...</h1>}

        {data.map((item, index) => (
          <Link to={`/${item.id}`} key={index}>
            <figure className="w-[25vw] bg-white h-fit shadow-md">
              <img
                src={item.image}
                className="w-full h-64"
                alt="product image"
              />
              <figcaption className="py-5 space-y-4 px-3">
                <span className="text-sm">{item.title}</span>
                <p>Price: {item.price}</p>
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
    </>
  );
}

export default Promise;
