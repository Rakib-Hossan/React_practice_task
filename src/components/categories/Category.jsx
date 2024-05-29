import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";

export default function Category() {

    const [categories,setCategories] =useState();

    useEffect(() =>{
        fetch('http://localhost:3000/categories')
        .then((res)=> res.json())
        .then((data) => setCategories(data));
    },[]); 

  return (
    <div>
      <h3 className="text-center text-3xl font-bold py-10 text-violet-600">Categories</h3>
        <div className="grid  grid-cols-2 md:grid-cols-3 gap-5 px-6 justify-center items-center">
        {
                categories?.map(category=><CategoriesCard key={category?.id} category={category}/>)
            }
        </div>
    </div>
  )
}
