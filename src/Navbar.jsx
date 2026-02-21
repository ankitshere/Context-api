
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' flex flex-row text-center justify-center gap-30 text-xl font-thin  '>
 <NavLink className={(e)=> e.isActive ? "text-black " :""} to="/">Home</NavLink>
 <NavLink className={(e)=> e.isActive ? "text-black " : ""} to="/About">About</NavLink>
 <NavLink  className={(e)=> e.isActive ? "text-black " : ""} to="/Recipe">Recipe</NavLink>
 <NavLink  className={(e)=> e.isActive ? "text-white     border md  bg-rose-600 rounded-2xl px-2  text-xl " : ""} to="/CreateRecipe"> Create Recipe</NavLink>

    </div>
  
  )
}

export default Navbar