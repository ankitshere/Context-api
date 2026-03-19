import React, { useState, createContext, useEffect } from 'react'


export const recipecontext = createContext(null);
const Recipecontext = (props) => {
    const [recipedata, setrecipedata] = useState([

useEffect(()=>{

    setrecipedata(JSON.parse(localStorage.getItem("recipe"))||[]);

},[])

    ])

    console.log(recipedata)
    return (
        <recipecontext.Provider value={{ recipedata, setrecipedata }}>{props.children}</recipecontext.Provider>
    )
}

export default Recipecontext



