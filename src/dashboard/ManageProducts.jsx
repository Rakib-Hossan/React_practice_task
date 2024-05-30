import { useEffect, useState } from "react"
import ProductTable from "./ProductTable";

export default function ManageProducts() {

    const[products, setProducts] = useState();

    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then((res)=> res.json())
        .then((data) => setProducts(data));
    },[]);


  return (
    <div className="overflow-x-auto w-[80%] py-5">
  <table className="table table-zebra">
    {/* head */}
    <thead className="text-xl">
      <tr>
        <th>Product Image</th>
        <th>Title</th>
        <th>Category</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
    {

        products?.map((product)=>(<ProductTable key={product?.id} product={product}/>))

    }

    </tbody>
  </table>
</div>
  )
}
