import { ChefHat } from "lucide-react";
import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const goto = () => {};

  return (
    <div className="min-h-screen  flex flex-col justify-center items-start mt-10 ">
      {/* Main Card Container */}
      <div className="w-full bg-[#f4eee6]   rounded-2xl  shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
          alt="food"
          className="hidden md:block absolute left-2 top-24 w-32 
  -rotate-12 rounded-2xl shadow-lg
  transition-all duration-500 ease-in-out
  hover:scale-110 hover:-rotate-6 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        />

        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349"
          alt="food"
          className="hidden md:block absolute right-12 top-110 w-32 
  rotate-30 rounded-2xl shadow-lg
  transition-all duration-500 ease-in-out
  hover:scale-110 hover:rotate-25 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        />

        {/* Hero Section */}
        <div className="text-center  m-5 ">
          <div className="text-orange-500  self-center  flex flex-col items-center  mb-3">
            <ChefHat size={60} strokeWidth={1.25} />{" "}
          </div>

          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Turn Your Ideas into Delicious <br /> Recipes.
          </h1>

          <p className="mt-5 text-gray-600 max-w-xl mb-10 mx-auto">
            Create, organize, and showcase your favorite recipes with ease. Your
            personal
            <span className="text-orange-600 font-sm">digital kitchen</span>
            starts here...
          </p>

          <Link
            to="/CreateRecipe"
            className=" bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition "
          >
            Create recipe →
          </Link>
        </div>
  {/* <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
          alt="Food"
         
        /> */}
        {/* Hero Image */}
      </div>

      <div className="w-full h-[550px] bg-red-200 mt-30 rounded-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food"  className="h-full w-full  object-cover   rounded-2xl bordered border-2  transition hover:scale-101 "/>
      </div>
    
    
    </div>
    
  );
};

export default Home;
