import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import CreateRecipe from '../pages/CreateRecipe';
const Mainrouters = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='/Recipe' element={<Recipe/>}/>
      <Route path='/CreateRecipe' element={<CreateRecipe/>}/>
    </Routes>
  )
}

export default Mainrouters