
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex flex-row text-center justify-center gap-30 text-xl text-gray-700 font-medium '>
 <NavLink className={(e)=> e.isActive ? "text-black  hover:text-orange-500 cursor-pointer" :""} to="/">Home</NavLink>
 <NavLink className={(e)=> e.isActive ? "text-black  hover:text-orange-500 cursor-pointer " : ""} to="/About">About</NavLink>
 <NavLink  className={(e)=> e.isActive ? "text-black  hover:text-orange-500 cursor-pointer " : ""} to="/Recipe">Recipe</NavLink>
 <NavLink  className={(e)=> e.isActive ? "text-white  border md  bg-rose-600 rounded-2xl px-2  text-xl " : ""} to="/CreateRecipe"> Create Recipe</NavLink>

    </div>
  
  )
}

export default Navbar