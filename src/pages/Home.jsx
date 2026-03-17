import axios from "../Utils/Axios";
import { ChefHat, CloudHail } from "lucide-react";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";
const Home = () => {
  const goto = () => {};


  const getdata= async()=>{
      try {
         const {data}=  await axios.get("https://fakestoreapi.com/products");
         console.log(data)
      } catch (error) {
        console.log(error)
      }
  }

useEffect(() => {
      // console.log("home is mounted")
  getdata();
  return ()=>{
    // console.log("home is amounted")
  }
}, []);


  return (
   <div>
     <div className="min-h-screen flex flex-col items-center mt-10 px-4 ">
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

          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight sm:text-4xl md:text-6xl">
            Turn Your Ideas into Delicious <br /> Recipes.
          </h1>

          <p className="mt-5 text-gray-600 max-w-xl mb-10 mx-auto">
            Create, organize, and showcase your favorite recipes with ease. Your
            personal
            <span className="text-orange-600 font-sm">digital kitchen</span>
            starts here...
          </p>

          {/* <Link
            to="/CreateRecipe"
            className=" bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition "
          >
            Create recipe →
          </Link> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

  <Link
    to="/CreateRecipe"
    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
  >
    Create Recipe →
  </Link>

  <button
    onClick={() =>
      window.open("https://recipe-finder-six-lime.vercel.app/", "_blank")
    }
    className="border border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition"
  >
    Explore Recipes →
  </button>

</div>
        </div>
  {/* <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe"
          alt="Food"
         
        /> */}
        
        <button onClick={getdata} >getdata</button>
      </div>

      <div className="w-9/10 h-[400px] flex center m-15 bg-red-200 mt-30 rounded-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food" className="h-full w-full  object-cover  "   />
      </div>
    
    <div className="w-full px-6 md:px-16 mt-20">


  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900">
      Our Features
    </h2>
    <p className="text-gray-600 mt-3">
      Everything you need to manage your recipes easily
    </p>
  </div>

 
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

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
    <div className="w-full mt-20 bg-[#f4eee6]">

  <div className="max-w-7xl mx-auto  px-6 md:px-16 py-12">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Logo */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">RecipeHub</h2>
        <p className="mt-3 text-sm text-gray-600">
          Your personal digital cookbook. Create, manage and share your recipes with ease.
        </p>
      </div>

      {/* Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-600">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Recipes</li>
          <li className="hover:text-orange-500 cursor-pointer">Create Recipe</li>
        </ul>
      </div>

      {/* Social */}

<div>
  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>

  <ul className="space-y-3 text-gray-600">

    <li>
      <a
        href="https://github.com/ankitshere"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-orange-500 transition"
      >
        <Github size={18} />
        GitHub
      </a>
    </li>

    <li>
      <a
        href="https://www.linkedin.com/in/ankit-webdev/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-orange-500 transition"
      >
        <Linkedin size={18} />
        LinkedIn
      </a>
    </li>

    <li>
      <a
        href="https://instagram.com/codeby_ankitt"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-orange-500 transition"
      >
        <Instagram size={18} />
        Instagram
      </a>
    </li>

  </ul>
</div>

    </div>

    {/* Bottom */}
    <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
            © 2026 RecipeHub. All rights reserved.
    </div>

  </div>
</div>
   </div>
    
    
  );
};

export default Home;
