import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCart";

const APIURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = APIURL + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals || []);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <h2>Recipe App</h2>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        isLoading={isLoading}
      />

      <div className="recipes">
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p className="noItem">No Results.</p>
        )}
      </div>
    </div>
  );
}

export default App;