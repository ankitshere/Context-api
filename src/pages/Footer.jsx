import React from 'react'
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
      <div className="w-full mt-20 bg-[#f4eee6] ">
        <div className="max-w-7xl mx-auto  px-6 md:px-16 py-12">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-10">
            <div>
              <h2 className="lg:text-3xl md:text-3xl text-2xl  -mt-3 font-bold text-gray-900">Cookify</h2>
              <p className="lg:mt-3 md:mt-3 lg:text-sm md:text-sm mt-6 text-gray-600">
                Your digital cookbook. Create & share recipes with ease.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="hover:text-orange-500 cursor-pointer"> 
                  <Link to="/" className="hover:text-orange-500">Home</Link>
                  </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  <Link to="/About" className="hover:text-orange-500">About</Link>
                  </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  <Link to="/Recipe" className="hover:text-orange-500">Recipes</Link>
                </li>
                <li className="hover:text-orange-500 cursor-pointer">
                  <Link to="/CreateRecipe" className="hover:text-orange-500">
        Create Recipe
      </Link>
                </li>
              </ul>
            </div>

            {/* //social media footer  */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Connect
              </h3>

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
            © 2026 Cookify. All rights reserved.
          </div>
        </div>
      </div>
  )
}

export default Footer