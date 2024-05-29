import { useEffect, useState } from "react";
import SingleProducts from "../components/products/SingleProducts";

export default function Products() {
    const [products, setProducts] = useState();

    useEffect(() =>{
        fetch('http://localhost:3000/products')
        .then((res)=> res.json())
        .then((data) => setProducts(data));
    },[]); 
  return (
    <div>
        <h2 className="text-center text-3xl font-bold text-violet-600 py-5">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-10 px-36 justify-center items-center mx-auto">
            {
                products?.map(product=><SingleProducts key={product?.id} product={product}/>)
            }
        </div>
    </div>
  )
}
