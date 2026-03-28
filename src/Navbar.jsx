import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="w-full relative     md:px-10  py-5 px-6">

     
      <img 
        src="/icon.png" 
        alt="logo" 
        className="w-24 h-14 md:w-32 md:h-16  lg:ml-22 md:ml-10  cursor-pointer object-contain  absolute  md:left-0  top-0"
      />

      <div className="md:hidden flex  relative  sm: -px-30   justify-end ">
        {
          open 
          ? <X size={28} className="cursor-pointer" onClick={() => setOpen(false)} />
          : <Menu size={28} className="cursor-pointer    " onClick={() => setOpen(true)} />
        }
      </div>

      <div className=' relative 
        hidden md:flex 
        items-center justify-center ml-20
        gap-16 
        text-xl text-gray-700 font-medium
      '>

        <NavLink className={(e)=> e.isActive ? "text-black hover:text-orange-500 cursor-pointer" : ""} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-black hover:text-orange-500 cursor-pointer" : ""} to="/About">About</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-black hover:text-orange-500 cursor-pointer" : ""} to="/Recipe">Recipe</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-white bg-rose-600 rounded-2xl px-3 py-1 text-xl" : ""} to="/CreateRecipe">Create Recipe</NavLink>

      </div>

      {
        open && (
          <div className=' w-full
            absolute top-16 left-0  
            bg-white/10 backdrop-blur-md 
            shadow-md  
            flex flex-col items-center 
            gap-6 py-6 text-lg font-medium z-50
          '>

            <NavLink onClick={()=>setOpen(false)} className={(e)=> e.isActive ? "text-black" : ""} to="/">Home</NavLink>
            <NavLink onClick={()=>setOpen(false)} className={(e)=> e.isActive ? "text-black" : ""} to="/About">About</NavLink>
            <NavLink onClick={()=>setOpen(false)} className={(e)=> e.isActive ? "text-black" : ""} to="/Recipe">Recipe</NavLink>
            <NavLink onClick={()=>setOpen(false)} className={(e)=> e.isActive ? "text-white bg-rose-600 px-4 py-2 rounded-xl" : ""} to="/CreateRecipe">Create Recipe</NavLink>

          </div>
        )
      }

    </div>
  )
}

export default Navbar