import { useEffect, useState } from "react"

export default function AddProduct() {

  const[categories, setCategories] = useState();
  
  useEffect(()=>{
    fetch('http://localhost:3000/categories')
        .then((res)=> res.json())
        .then((data) => setCategories(data));
  },[]);

  const handleAddProduct = async(e) => {
    e.preventDefault();

    const form = e.target;

    const id = form.title.value;
    const title = form.title.value;
    const price = form.price.value;
    const tagline = form.tagline.value;
    const description = form.description.value;
    const category = form.category.value;
    const image = form.image.value;

    const productData = {id,title,price,tagline,description,category,image} 

    await fetch("http://localhost:3000/products",{
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((productData)=>{
        console.log(productData)
        form.reset();
      });

  }

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold mb-4 text-center text-violet-500">Add Product</h3>
      <form onSubmit={handleAddProduct} className="w-full px-20">
        <div className="mb-4">
          <label htmlFor="" className="font-semibold">ID</label>
          <input type="number" name="id" className="w-full py-3 px-4 border-2 border-violet-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">TITLE</label>
          <input type="text" name="title" className="w-full py-3 px-4 border-2 border-violet-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">PRICE</label>
          <input type="number" name="price" className="w-full py-3 px-4 border-2 border-violet-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">TAGLINE</label>
          <input type="text" name="tagline" className="w-full py-3 px-4 border-2 border-violet-500"/>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">Description</label>
          <textarea type="text" name="description" className="w-full py-3 px-4 border-2 border-violet-500"/>
        </div>

        <div className="mb-4">
        <label htmlFor=""className="font-semibold">CATEGORY</label>
          <select name="category" id="" className="w-full py-3 px-4 border-2 border-violet-500">
          {categories?.map((category)=>(<option key={category?.id} value={category?.title}>{category?.title}</option>))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor=""className="font-semibold">IMAGE URL</label>
          <input type="url" name="image" className="w-full py-3 px-4 border-2 border-violet-500"/>
        </div>

        <div className="mb-4">
          <input type="Submit" value={'Add Product'} className="w-full py-3 px-4 border bg-success text-white font-semibold"/>
        </div>

      </form>
    </div>
  )
}
