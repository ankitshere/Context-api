import React from "react";

const About = () => {
  return (
    <div
      className="
     min-h-screen 
        bg-[#F5F1EA] 
            flex items-center justify-center 
             px-4 sm:px-8 md:px-12 lg:px-20"
    >
      <div className=" bg-white shadow-lg rounded-2xl md:-mt-30 p-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-orange-500 ">Cookify</span>{" "}
        </h1>

        <p className="text-gray-500 mb-6"> Your personal digital kitchen 🍳 </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          This platform is built for passionate food creators who want to store,
          manage, and showcase their recipes with ease. Create new dishes, edit
          your favorites, and keep everything organized in one beautiful digital
          kitchen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-orange-50 p-5 rounded-xl">
            <h3 className="font-semibold text-gray-800">Create</h3>{" "}
            <p className="text-sm text-gray-500 mt-2">
              Add your own recipes easily
            </p>
          </div>
          <div className="bg-orange-50 p-5 rounded-xl">
            <h3 className="font-semibold text-gray-800">Organize</h3>
            <p className="text-sm text-gray-500 mt-2">
              Manage everything in one place
            </p>
          </div>
          <div className="bg-orange-50 p-5 rounded-xl">
            <h3 className="font-semibold text-gray-800">Showcase</h3>
            <p className="text-sm text-gray-500 mt-2">
              Share your recipes beautifully
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
