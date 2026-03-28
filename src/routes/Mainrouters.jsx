import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import CreateRecipe from '../pages/CreateRecipe';
import Singlerecipe from '../pages/Singlerecipe';
import PNF from '../pages/PNF';
const Mainrouters = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Recipe' element={<Recipe/>}/>
      <Route path='/Recipe/details/:id' element={<Singlerecipe/>}/>
      <Route path='/CreateRecipe' element={<CreateRecipe/>}/>
      <Route path='/*' element={<PNF/>}/>
    </Routes>
  )
}

export default Mainrouters