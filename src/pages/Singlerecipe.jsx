import React, { useContext } from "react";
import { recipecontext } from "../Context/Recipecontext";
import RecipeCard from "../Component/RecipeCard";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipe = () => {
  const navigate = useNavigate();
  const { recipedata } = useContext(recipecontext);

  const param = useParams();
  console.log(recipedata, param.id);

  const { register, handleSubmit, reset } = useForm();
  const submithandler = (data) => {
    console.log(data);
    console.log(data.title);

    toast.success(" Recipe Updated!");
    reset();
    navigate("/Recipe");
  };

  const recipe = recipedata.find((recipe) => param.id == recipe.id);
  console.log(recipe);

  return recipe ? (
   <div className="bg-linear-to-br from-orange-50 to-red-50 py-8 px-12">
  <div className="flex gap-12">

    <div className="w-1/3 bg-white md  h-max  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-101 ease-in-out hover:shadow-2xl hover:-translate-y-2">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {recipe.title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          By {recipe.chef}
        </p>

        <p className="mt-3 text-gray-600 text-sm line-clamp-3">
          {recipe.description}
        </p>

        <span className="inline-block mt-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
          {recipe.category}
        </span>
      </div>
    </div>

    <div className="w-2/3 bg-white rounded-2xl shadow-lg p-8 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Edit Recipe
      </h1>

      <form
        onSubmit={handleSubmit(submithandler)}
        className="flex flex-col gap-5"
      >

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            defaultValue={recipe.title}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
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
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
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
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
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
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none"
            {...register("description")}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Instructions
          </label>
          <textarea
            rows="3"
            defaultValue={recipe.instruction}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none"
            {...register("instruction")}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Category
          </label>
          <select
            defaultValue={recipe.category}
            className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("category")}
          >
            <option value="Veg">Veg</option>
            <option value="Non Veg">Non Veg</option>
            <option value="Spicy">Spicy</option>
            <option value="Sweet">Sweet</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:shadow-md hover:scale-[1.02] transition duration-300"
        >
          Update Recipe
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
