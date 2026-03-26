import React, { useContext, useEffect, useState } from "react";
import { recipecontext } from "../Context/Recipecontext";
import RecipeCard from "../Component/RecipeCard";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipe = () => {
  
  const { recipedata, setrecipedata } = useContext(recipecontext);
  const navigate = useNavigate();
  const param = useParams();
  const recipe = recipedata.find((recipe) => param.id == recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      image: recipe?.img,
      ingredents: recipe?.ingredents,
      description: recipe?.description,
      chef: recipe?.chef,
      category: recipe?.category,
    },
  });

  const Updatehandler = (recipe) => {
    const index = recipedata.findIndex((recipe) => param.id == recipe.id);

    const copyrecipedata = [...recipedata];
    copyrecipedata[index] = { ...copyrecipedata[index], ...recipe };

    setrecipedata(copyrecipedata);
    localStorage.setItem("recipe", JSON.stringify(copyrecipedata));
    toast.success("Recipe Updated!");
  };

  const DeleteHandler = function () {
    const filterdata = recipedata.filter((recipe) => recipe.id !== param.id);
    console.log(filterdata);
    setrecipedata(filterdata);
    localStorage.setItem("recipe", JSON.stringify(filterdata));
    toast.success("Recipe Deleted!");
    navigate("/Recipe");
  };

  useEffect(() => {
    // console.log("singlerecipe is mounted")

    return () => {
      // console.log("single recipe is amounted")
    };
  }, []);

  const [favroite, setfavroite] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );

  const favrecipe = () => {
    const copyfav = [...favroite, recipe]; 
    setfavroite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const Unfavrecipe = () => {
    const filterfav = favroite.filter((f) => f.id !== recipe?.id);
    setfavroite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };
  return recipe ? (
    <div className="bg-linear-to-br from-orange-50 to-red-50 py-6 px-4 sm:px-8 md:px-12">

  <div className="flex flex-col md:flex-row gap-6 md:gap-12">

    
    <div className="w-full md:w-1/3 relative bg-white h-max rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] ease-in-out hover:shadow-2xl hover:-translate-y-2">
      
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-32 sm:h-36 md:h-40 object-cover"
      />

      <div className="p-4 sm:p-5 relative">

        
        <div className="absolute top-4 right-4">
          {favroite.find((f) => f.id === recipe?.id) ? (
            <i
              onClick={Unfavrecipe}
              className="ri-heart-3-fill text-2xl sm:text-3xl text-red-500 cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={favrecipe}
              className="ri-heart-3-line text-2xl sm:text-3xl text-red-500 cursor-pointer"
            ></i>
          )}
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          {recipe.title}
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          By {recipe.chef}
        </p>

        <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm line-clamp-3">
          {recipe.description}
        </p>
        <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm line-clamp-3">
          {recipe.ingredents}
        </p>

        <span className="inline-block mt-3 sm:mt-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
          {recipe.category}
        </span>
      </div>
    </div>

    
    <div className="w-full md:w-2/3 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
      
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
        Edit Recipe
      </h1>

      <form
        onSubmit={handleSubmit(Updatehandler)}
        className="flex flex-col gap-4 sm:gap-5"
      >

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            defaultValue={recipe.title}
            className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("title")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Image URL
          </label>
          <input
            type="url"
            defaultValue={recipe.image}
            className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("image")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Chef Name
          </label>
          <input
            type="text"
            defaultValue={recipe.chef}
            className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("chef")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <textarea
            rows="2"
            defaultValue={recipe.description}
            className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none"
            {...register("description")}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Ingredents
          </label>
          <textarea
            rows="3"
            defaultValue={recipe.ingredents}
            className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none"
            {...register("ingredents")}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Category
          </label>
          <select
            className="w-full border border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("category")}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snacks">Snacks</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 bg-linear-to-r from-blue-500 to-blue-900 text-white py-2 rounded-lg font-semibold hover:shadow-md hover:scale-[1.02] transition duration-300"
        >
          Update Recipe
        </button>

        <button
          onClick={DeleteHandler}
          type="button"
          className="mt-2 bg-linear-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:shadow-md hover:scale-[1.02] transition duration-300"
        >
          Delete Recipe
        </button>

      </form>
    </div>
  </div>
</div>
  ) : (
    "Loading Recipes...."
  );
};

export default Singlerecipe;
