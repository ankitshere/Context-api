import React, { useContext } from 'react'
import { recipecontext } from '../Context/Recipecontext';
import RecipeCard from '../Component/RecipeCard';

const Recipe = () => {
  const { recipedata } = useContext(recipecontext);
  const renderrecipe = recipedata.map((recipe,idx) => (
<RecipeCard key={recipe.id} id={idx}  recipe={recipe}/>
));
  return (
    <div className='relative flex flex-row gap-10 px-10 py-20 flex-wrap'>{renderrecipe}</div>
  )
}

export default Recipe