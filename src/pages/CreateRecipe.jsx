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

    const copydata = [...recipedata];
    copydata.push(data);
    setrecipedata((copydata) => [...copydata, data]);
    localStorage.setItem("recipe", JSON.stringify(copydata));
    toast.success("New recipe created!");
    reset();
    navigate("/Recipe");
  };

  return (
    <div className="min-h-screen -ml-[20%]  w-[40vh] bg-linear-to-br from-orange-50 to-red-50 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">
      <div className="w-full max-w-6xl  rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
  
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Create your Recipe
          </h1>
          <p className="text-gray-500 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base">
            Add delicious recipes to your collection 🍽️
          </p>

          <form
            onSubmit={handleSubmit(submithandler)}
            className="flex flex-col gap-4 sm:gap-5 lg:gap-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Recipe Title
              </label>
              <input
                type="text"
                placeholder="e.g. Spicy Paneer Tikka"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition text-sm sm:text-base"
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition text-sm sm:text-base"
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition text-sm sm:text-base"
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none text-sm sm:text-base"
                {...register("description")}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Ingredents
              </label>
              <textarea
                rows="3"
                placeholder=" Enter the  Step-by-step cooking ingredents..."
                className="w-full border border-gray-200 rounded-xl px-4 py-1 focus:ring-2 focus:ring-orange-400 focus:outline-none transition resize-none text-sm sm:text-base"
                {...register("ingredents")}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Category
              </label>
              <select
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:outline-none transition text-sm sm:text-base"
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
              className="mt-4 sm:mt-6 bg-linear-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition duration-300 text-sm sm:text-base"
            >
              Create Recipe
            </button>
          </form>
        </div>

        {/* RIGHT SIDE BANNER */}
        <div className="w-full lg:w-1/2 bg-linear-to-br from-orange-500 to-red-500 flex items-center justify-center text-white p-8 sm:p-10 lg:p-10 order-first lg:order-last">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Share Your Taste 😋
            </h2>
            <p className="opacity-90 text-sm sm:text-base">
              Inspire people with your unique recipes and flavors.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <MyAnimation />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreateRecipe;