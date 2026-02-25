import { Link } from "react-router-dom"

const RecipeCard = (props) => {
    console.log(props)

    const {id,image,des,chef,ing,title}=props.recipe;
  return (
   <Link to={`/recipe/details/${id}`}  key={props.id}>
    <img src={image} alt=""  className="h-[150px]  w-[200px] "/>
    
    <h1>{title}<span>{id}</span></h1>
    <h1>{chef}</h1>
    
    <h1>{des}</h1>
    <p>{ing}</p>
   
   </Link>
  )
}

export default RecipeCard