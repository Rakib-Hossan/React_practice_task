
export default function ProductTable({product}) {
  return (
        <tr>
            <th><img className="w-[50px] h-[50px] rounded-full"src={product?.image} alt="product image" /></th>
            <td>{product?.title}</td>
            <td>{product?.category}</td>
            <td>{product?.price}</td>
        </tr>
  )
}

