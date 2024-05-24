import { useState, useEffect } from "react";
function Recipe() {
  const APP_ID = "6d6a83db";
  const APP_KEY = "2301e231e5cf4dc8ba58fb8966ba46d3";

  const [query, setQuery] = useState("chicken");
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState();

  const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(API);

      const recipe = await response.json();

      console.log(recipe.hits);
      setRecipe(recipe.hits);
    };

    fetchRecipe();
  }, [query]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);

    setSearch("");
  };

  return (
    <div className="bg-blue-500 min-h-[90vh] h-fit py-10">
      <form onSubmit={handleSubmit} className="flex justify-center gap-2">
        <input
          type="text"
          placeholder="search recipe..."
          className="w-64 h-10 border-[1px] outline-none border-gray-500 bg-none rounded-md pl-3"
          onChange={handleChange}
          value={search}
        />
        <button
          type="submit"
          className="hover:bg-gray-700 bg-gray-500 text-white px-5 rounded-md"
        >
          Search
        </button>
      </form>

      <section className="flex justify-around gap-10 flex-wrap">
        {recipe.map((item, index) => (
          <figure
            className="figure w-[30%] overflow-y-auto p-5 rounded-3xl shadow-2xl h-[70vh] grid content-start gap-3"
            key={index}
          >
            <img
              src={item.recipe.image}
              className="w-full rounded-3xl h-44"
              alt="recipe image"
            />
            <span>{item.recipe.label}</span>

            <b>Ingredients:</b>
            <ul>
              {item.recipe.ingredientLines.map((ingre, index) => (
                <li key={index}>
                  <small>{ingre}</small>
                </li>
              ))}
            </ul>
          </figure>
        ))}
      </section>
    </div>
  );
}

export default Recipe;
