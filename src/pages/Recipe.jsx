import React, { useContext } from 'react'
import { recipecontext } from '../Context/Recipecontext';
import RecipeCard from '../Component/RecipeCard';

const Recipe = () => {

  const { recipedata } = useContext(recipecontext);
  const renderrecipe = recipedata?.length > 0 ? (
    recipedata
      .filter((item) => item)
      .map((recipe, idx) => (
        <RecipeCard key={recipe.id || idx} id={idx} recipe={recipe} />
      ))
  ) : (
    <h2 className="text-center text-2xl col-span-3 text-gray-500">
      No Recipes 🍽️
    </h2>
  );

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-[#f4eee6] to-[#f8f6f2] py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12">

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
        Explore Recipes
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {renderrecipe}
      </div>

    </div>
  );
}

export default Recipe;