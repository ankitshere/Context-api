import axios from "../Utils/Axios";
import { ChefHat, CloudHail } from "lucide-react";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  const goto = () => {};

  return (
    <div>
      <div className="min-h-screen flex flex-col   py-5  items-center mt-10  ">
        <div className="w-9/10 h-6/12  bg-[#f4eee6]   rounded-2xl  shadow-xl">
          <img
            src="/img1.jpg"
            alt="food"
            className=" md:block absolute left-2 top-22 lg:w-30 lg:left-10 sm:w-30 w-26 
            -rotate-45 rounded-2xl shadow-lg
                 transition-all hover:scale-110 duration-500 ease-in-out hover:-rotate-6 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          />

          <img
            src="/homeimg2.jpg"
            alt="food"
            className=" md:block absolute right-6 top-115 md:right-10 md:top-120 md:rotate-38 md:w-28 lg:w-28 lg:right-10 lg:top-110 sm:w-30 w-22 
                   rotate-40 rounded-2xl shadow-lg
                      transition-all duration-500 ease-in-out
                     hover:scale-110 hover:rotate-25 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          />

          <div className="text-center h-fit  m-5  ">
            <div className="text-orange-500  self-center  flex flex-col items-center  mb-3">
              <ChefHat size={60} strokeWidth={1.25} />{" "}
            </div>

            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Turn Your Ideas into Delicious <br /> Recipes.
            </h1>

            <p className="mt-5 text-gray-600 max-w-xl mb-10 mx-auto">
              Create, organize, and showcase your favorite recipes with ease.
              Your personal
              <span className="text-orange-600 font-sm">digital kitchen</span>
              starts here...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/CreateRecipe"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full font-semibold shadow-md transition"
              >
                Create Recipe →
              </Link>

              <button
                onClick={() =>
                  window.open(
                    "https://recipe-finder-six-lime.vercel.app/",
                    "_blank",
                  )
                }
                className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
              >
                Explore Recipes →
              </button>
            </div>
          </div>
        </div>

        <div
          className="
  lg:w-8/10 w-9/10  md:w-[90%] 
  h-[200px] sm:h-[300px] md:h-[400px] 
  mx-auto 
  mt-25 md:mt-20 
  flex items-center justify-center 
  bg-red-200 
  rounded-2xl 
  overflow-hidden
"
        >
          <img
            src="/mainimage.avif"
            alt="Food"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-full px-6 md:px-16 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Our Features</h2>
            <p className="text-gray-600 mt-3">
              Everything you need to manage your recipes easily
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 hover:shadow-xl transition duration-300">
              <div className="text-3xl mb-3">🍳</div>
              <h3 className="font-semibold text-lg">Create Recipes</h3>
              <p className="text-gray-500 text-sm mt-2">
                Easily create and save your own recipes
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 hover:shadow-xl transition duration-300">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold text-lg">Manage Recipes</h3>
              <p className="text-gray-500 text-sm mt-2">
                Organize and edit your recipes anytime
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 hover:shadow-xl transition duration-300">
              <div className="text-3xl mb-3">🌎</div>
              <h3 className="font-semibold text-lg">Share Ideas</h3>
              <p className="text-gray-500 text-sm mt-2">
                Share your cooking ideas with others
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:scale-105 hover:shadow-xl transition duration-300">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-semibold text-lg">Explore Recipes</h3>
              <p className="text-gray-500 text-sm mt-2">
                Discover new dishes from different cuisines
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
