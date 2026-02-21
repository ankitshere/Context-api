import React, { useState, createContext } from 'react'


export const recipecontext = createContext(null);
const Recipecontext = (props) => {
    const [recipedata, setrecipedata] = useState([])
    console.log(recipedata)
    return (
        <recipecontext.Provider value={{ recipedata, setrecipedata }}>{props.children}</recipecontext.Provider>
    )
}

export default Recipecontext