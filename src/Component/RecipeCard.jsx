  import { Link } from "react-router-dom";

  const RecipeCard = ({ recipe }) => {

    const { id, image, des, chef, ing, title } = recipe;

    return (
      // <Link to={`/Recipe/details/${id} ` className=" w-[300px]  bg-white md  h-max  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-101 ease-in-out hover:shadow-2xl hover:-translate-y-2"}>
      //   <img src={image}  className="h-[150px] w-[200px]  w-full h-40 object-cover" />
        
      //   <h1 className="text-xl font-bold text-gray-800">{title} </h1>
      //   <h1  className="text-sm text-gray-500 mt-1" > By {chef}</h1>
        
      //   <h1 className="mt-3 text-gray-600 text-sm line-clamp-3">{des}</h1>
      //   <p className="inline-block mt-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">{ing}</p>
      // </Link>

        <Link to={`/Recipe/details/${id}`}  className=" w-[300px]  bg-white md  h-max  rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-101 ease-in-out hover:shadow-2xl hover:-translate-y-2">
      <img
        src={image}
        className="w-full h-40 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          By {chef}
        </p>

        <p className="mt-3 text-gray-600 text-sm line-clamp-3">
          {des}
        </p>

        <span className="inline-block mt-4 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
          {ing}
        </span>
      </div>
    </Link>
 
    );
  };

  export default RecipeCard;