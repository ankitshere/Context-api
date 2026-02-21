import React, { useContext } from 'react'
import MyAnimation from './LOtifile'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid';
import { recipecontext } from '../Context/Recipecontext';

const CreateRecipe = () => {
    const { recipedata, setrecipedata } = useContext(recipecontext);
    const { register, handleSubmit, reset } = useForm();





    const submithandler = (data) => {
        data.id = nanoid()
        console.log(data)
        setrecipedata([...recipedata, data])
        reset();
    }


    return (
        <div className='     flex flex-row justify-between m-10  bg-white/10 backdrop-blur-lg  rounded-2xl border border-white/20 '  >
            <div className='w-1/2 h-full bg-transparent'>

                <h1 className="text-2xl px-5 py-5 ">Recipe Details  </h1>
                <form onSubmit={handleSubmit(submithandler)} className='bg-transparent    flex flex-col justify-between w-full   items-start px-15 py-5 gap-3 outline-0   '>
                    <label htmlFor="Title" className='text-2xl   font-thin select-none  '>Recipe  Title   </label>
                    <input type="text" placeholder='Recipe Title ' className='outline-0 w-9/12 p-0 border-b '  {...register('Recipe title')} />
                    <label htmlFor="Choose a image" className='text-2xl   font-thin select-none '>Recipe image  </label>
                    <input type="file" name="" id="" title='Chose the recipe image' className='outline-0 p-0 border-b  w-9/12' {...register('Recipe image')} />
                    <label className='text-2xl   font-thin select-none ' >Chef name </label>
                    <input type="text" placeholder='Chef Name ' className='outline-0 p-0 w-9/12  border-b ' {...register('Chef name')} />
                    <label htmlFor="Description" className='text-2xl   font-thin select-none  '> Recipe Desc  </label>
                    <textarea name="" id="" placeholder='Enter the recipe Description ' className='outline-0 p-0 border-b w-9/12  ' {...register('Description')} ></textarea>
                    <select name="Recipe" id="Recipe" className='outline-0 p-0 border-b w-fit   ' {...register('category')} >
                        <option className=' bg-rose-500 border-none font-semibold ' value="Veg">Veg Recipe</option>
                        <option className=' bg-rose-500  font-semibold ' value="Non-Veg">Non Veg</option>
                        <option className=' bg-rose-500 font-semibold  ' value="Spicy">Spicy</option>
                        <option className=' bg-rose-500 font-semibold ' value="Sweat">Sweat</option>
                    </select>
                    <button type="submit"
                        className='bg-white text-black border rounded bordered md px-2 font-semibold ml-5'>
                        Create Recipe
                    </button>

                </form>
            </div>
            <div className='  w-1/2   px-10   '>
                <MyAnimation />
            </div>
        </div>
    )
}

export default CreateRecipe