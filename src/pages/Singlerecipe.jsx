import React, { useContext } from 'react'
import { recipecontext } from '../Context/Recipecontext'
import RecipeCard from '../Component/RecipeCard';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const Singlerecipe = () => {
  const navigate=useNavigate();
    const { recipedata } = useContext(recipecontext);

    const param = useParams()
    console.log(recipedata,param.id);
    
     const { register, handleSubmit, reset } = useForm();
        const submithandler = (data) => {
        
            console.log(data)
            console.log(data.title)
         
              toast.success(" Recipe Updated!")
            reset();
            navigate("/Recipe")
        }

    const recipe = recipedata.find(recipe => param.id == recipe.id)
 console.log(recipe)


    return    recipe ? <div className='bg-red-900 p-5'>
      
    
    <div>
       
<div className="left">

 <img src={recipe.image} alt="" className="h-[150px]  w-[200px] " />
 <h1>{recipe.title}<span>{recipe.id}</span></h1>
    <h1>{recipe.chef}</h1>
 <h1>{recipe.des}</h1>
   <h1>{recipe.des}</h1>
    <p>{recipe.ing}</p>

</div>
<div className="right"> 
     <form onSubmit={handleSubmit(submithandler)} className='bg-transparent    flex flex-col justify-between w-full   items-start px-15 py-5 gap-1 outline-0   '>
                    <label htmlFor="Title" className='text-2xl   font-thin select-none  '>Recipe  Title   </label>
                    <input type="text" placeholder='Recipe Title ' className='outline-0 w-9/12 p-0 border-b '  {...register('title')} />
                    <label htmlFor="Choose a image" className='text-2xl   font-thin select-none '>Recipe image  </label>
                    <input type="file" name="" id="" title='Chose the recipe image' className='outline-0 p-0 border-b  w-9/12' {...register('image')} />
                    <label className='text-2xl   font-thin select-none ' >Chef name </label>
                    <input type="text" placeholder='Chef Name ' className='outline-0 p-0 w-9/12  border-b ' {...register('Chef')} />
                    <label htmlFor="Description" className='text-2xl   font-thin select-none  '> Recipe Desc  </label>
                    <textarea name="" id="" placeholder='Enter the recipe Description ' className='outline-0 p-0 border-b w-9/12  ' {...register('Description')} ></textarea>
                    <label htmlFor="Des" className='text-2xl   font-thin select-none  '> Recipe Instructions </label>
                    <textarea name="" id="" placeholder='Enter the recipe Description ' className='outline-0 p-0 border-b w-9/12  ' {...register('Instruction')} ></textarea>
                    <select name="Recipe" id="Recipe" className='outline-0 p-0 border-b w-fit   ' {...register('cat')} >
                        <option className=' bg-rose-500 border-none font-semibold ' value="BreakFast">Veg Recipe</option>
                        <option className=' bg-rose-500  font-semibold ' value="">Non Veg</option>
                        <option className=' bg-rose-500 font-semibold  ' value="Spicy">Spicy</option>
                        <option className=' bg-rose-500 font-semibold ' value="Sweat">Sweat</option>
                    </select>
                    <button type="submit"
                        className='bg-white text-black border rounded bordered md px-2 font-semibold ml-5'>
                        Create Recipe
                    </button>

                </form></div>


    </div> 
    </div>
    :"Loading Recipes....";
}

export default Singlerecipe