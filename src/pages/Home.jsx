import { ChefHat } from "lucide-react";
import React from "react";

const Home = () => {
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
            Savor the Taste of <br /> Perfection.
          </h1>

          <p className="mt-5 text-gray-600 max-w-xl mx-auto">
            Fresh ingredients, mouth-watering recipes, and a passion for good
            food delivered to your door or ready for pick-up.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
            Create recipe →
          </button>
        </div>

        {/* Hero Image */}
      </div>
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
          alt="Food"
          className="w-full h-[420px] object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
