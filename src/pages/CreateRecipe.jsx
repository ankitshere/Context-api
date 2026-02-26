import React, { useContext } from "react";
import MyAnimation from "./LOtifile";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../Context/Recipecontext";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { recipedata, setrecipedata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const submithandler = (data) => {
    data.id = nanoid();
    console.log(data);
    console.log(data.title);
    setrecipedata((prev) => [...prev, data]);
    toast.success("New Recipe Created!");
    reset();
    navigate("/Recipe");
  };

  return (
   <div className="min-h-screen bg-linear-to-br from-orange-50 to-red-50 flex items-center justify-center px-6 py-10">
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">

    {/* LEFT SIDE FORM */}
    <div className="w-1/2 p-12">

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Create your  Recipe
      </h1>
      <p className="text-gray-500 mb-10">
        Add delicious recipes to your collection 🍽️
      </p>

      <form
        onSubmit={handleSubmit(submithandler)}
        className="flex flex-col gap-6"
      >

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            placeholder="e.g. Spicy Paneer Tikka"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("title")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Recipe Image URL
          </label>
          <input
            type="url"
            placeholder="Enter your recipe image link"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("image")}
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Chef Name
          </label>
          <input
            type="text"
            placeholder="Chef name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("chef")}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <textarea
            rows="2"
            placeholder=" Enter Short description of the recipe..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none"
            {...register("description")}
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Instructions
          </label>
          <textarea
            rows="3"
            placeholder=" Enter the  Step-by-step cooking instructions..."
            className="w-full border border-gray-200 rounded-xl px-4 py-1 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none"
            {...register("instruction")}
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Category
          </label>
          <select
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            {...register("category")}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snacks">Snacks</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-6 bg-linear-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition duration-300"
        >
          Create  Recipe
        </button>

      </form>
    </div>

    <div className="w-1/2 bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center text-white p-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Share Your Taste 😋
        </h2>
        <p className="opacity-90">
          Inspire people with your unique recipes and flavors.
        </p>
        <div className="mt-8">
          <MyAnimation />
        </div>
      </div>
    </div>

  </div>
</div>
  );
};

export default CreateRecipe;
