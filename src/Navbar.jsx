
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//    <div  >
//     <img src="/icon.png" alt="logo" className="w-32 h-16 top-1 left-25  cursor-pointer absolute object-contain" />

//     <div className=' flex  ml-80 flex-row text-center justify-center gap-30 text-xl text-gray-700 font-medium '>
//  <NavLink className={(e)=> e.isActive ? "text-black  hover:text-orange-500 cursor-pointer" :""} to="/">Home</NavLink>
//  <NavLink className={(e)=> e.isActive ? "text-black  hover:text-orange-500 cursor-pointer " : ""} to="/About">About</NavLink>
//  <NavLink  className={(e)=> e.isActive ? "text-black  hover:text-orange-500 cursor-pointer " : ""} to="/Recipe">Recipe</NavLink>
//  <NavLink  className={(e)=> e.isActive ? "text-white  border md  bg-rose-600 rounded-2xl px-2  text-xl " : ""} to="/CreateRecipe"> Create Recipe</NavLink>


//     </div>
//    </div>
  
//   )
// }

// export default Navbar

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="relative flex items-center justify-between px-4 sm:px-8 py-3 bg-white shadow-sm z-50">

      {/* Logo */}
      <img
        src="/icon.png"
        alt="logo"
        className="w-24 h-14 sm:w-32 sm:h-16 object-contain cursor-pointer"
      />

      {/* Desktop Links */}
      <div className="hidden md:flex flex-row items-center gap-8 lg:gap-12 text-xl text-gray-700 font-medium">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black hover:text-orange-500 cursor-pointer" : "hover:text-orange-500 cursor-pointer transition"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black hover:text-orange-500 cursor-pointer" : "hover:text-orange-500 cursor-pointer transition"
          }
          to="/About"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-black hover:text-orange-500 cursor-pointer" : "hover:text-orange-500 cursor-pointer transition"
          }
          to="/Recipe"
        >
          Recipe
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-white bg-rose-600 border rounded-2xl px-4 py-1 text-xl"
              : "text-rose-600 border border-rose-600 rounded-2xl px-4 py-1 text-xl hover:bg-rose-600 hover:text-white transition"
          }
          to="/CreateRecipe"
        >
          Create Recipe
        </NavLink>
      </div>

      {/* Hamburger Button (mobile) */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start gap-0 text-lg font-medium text-gray-700 md:hidden">
          <NavLink
            className={({ isActive }) =>
              `w-full px-6 py-4 border-b border-gray-100 ${isActive ? 'text-orange-500 bg-orange-50' : 'hover:bg-orange-50 hover:text-orange-500'} transition`
            }
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full px-6 py-4 border-b border-gray-100 ${isActive ? 'text-orange-500 bg-orange-50' : 'hover:bg-orange-50 hover:text-orange-500'} transition`
            }
            to="/About"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full px-6 py-4 border-b border-gray-100 ${isActive ? 'text-orange-500 bg-orange-50' : 'hover:bg-orange-50 hover:text-orange-500'} transition`
            }
            to="/Recipe"
            onClick={() => setMenuOpen(false)}
          >
            Recipe
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `w-full px-6 py-4 ${isActive ? 'text-white bg-rose-600' : 'text-rose-600 hover:bg-rose-50'} transition`
            }
            to="/CreateRecipe"
            onClick={() => setMenuOpen(false)}
          >
            Create Recipe
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar