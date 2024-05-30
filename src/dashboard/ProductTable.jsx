
export default function ProductTable({product}) {
  return (
        <tr>
            <th><img className="w-[40px] h-[40px] rounded-full"src={product?.image} alt="product image" /></th>
            <td>{product?.title}</td>
            <td>{product?.category}</td>
            <td>{product?.price}</td>
            <td className="flex gap-4">
                <button className=" text-white btn btn-xs btn-neutral">Edit</button>
                <button className=" text-white btn btn-xs btn-error">Delete</button>
            </td>
        </tr>
  )
}

