import { useEffect, useState } from "react";
import SingleProducts from "./SingleProducts";

export default function Allproducts() {
    
    const [products, setProducts] = useState();

    useEffect(() =>{
        fetch('http://localhost:3000/products')
        .then((res)=> res.json())
        .then((data) => setProducts(data));
    },[]); 

  return (
    <div className="px-40">
        <div className="grid md:grid-cols-3 gap-10 px-6 justify-center items-center">
            {
                products?.slice(0,6)?.map(product=><SingleProducts key={product?.id} product={product}/>)
            }
        </div>
    </div>
  )
}
  