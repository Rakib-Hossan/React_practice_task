
export default function ProductTable({product, onDelete}) {
 
  const {id,title,brand,price,tagline,description,category} = product;

  const handleDelete = async(product) => {
    await fetch(`http://localhost:3000/products/${id}`,{
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data)=>{
        console.log(data);
        onDelete(id);
      });

  }
 
  return (
        <tr>
            <th><img className="w-[40px] h-[40px] rounded-full"src={product?.image} alt="product image" /></th>
            <td>{product?.title}</td>
            <td>{product?.category}</td>
            <td>{product?.price}</td>
            <td className="flex gap-4">
                <button className=" text-white btn btn-xs btn-neutral">Edit</button>
                <button onClick={handleDelete} className=" text-white btn btn-xs btn-error">Delete</button>
            </td>
        </tr>
  )
}

