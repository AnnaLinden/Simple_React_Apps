import axios from "axios";
import { useEffect, useState } from "react";

const categories = [
  "Seafood",
  "Breakfast",
  "Vegan",
  "Vegetarian",
  "Beef",
  "Chicken",
  "Dessert",
  "Pasta",
];

const Meals = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Seafood");

  useEffect(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
      )
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCategory]);

  return (
    <section className='min-h-screen bg-gray-100 px-4 py-10'>
      {/* Title + Dropdown */}
      <div className='max-w-7xl mx-auto mb-8 flex flex-col items-center space-y-4'>
        <h1 className='text-4xl font-bold text-indigo-700 text-center'>
          {selectedCategory} Recipes
        </h1>
        <p className='text-center text-gray-600'>
          Explore delicious meals by category 🍽️
        </p>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='mt-2 px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition'
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Grid of Cards */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {items.map(({ strMeal, strMealThumb, idMeal }) => (
          <div
            key={idMeal}
            className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300'
          >
            <img
              src={strMealThumb}
              alt={strMeal}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-lg font-semibold text-indigo-700'>
                {strMeal}
              </h2>
              <p className='text-sm text-gray-500'>Meal ID: #{idMeal}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meals;
