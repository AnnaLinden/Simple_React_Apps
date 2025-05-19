import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className='min-h-screen bg-gray-100 px-4 py-10'>
      {/* Title */}
      <div className='max-w-7xl mx-auto mb-8'>
        <h1 className='text-4xl font-bold text-indigo-700 text-center'>
          Seafood Recipes
        </h1>
        <p className='text-center text-gray-600 mt-2'>
          Explore delicious meals from around the world 🍤
        </p>
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
