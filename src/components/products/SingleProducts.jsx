import { Link } from "react-router-dom";

export default function SingleProducts({product}) {
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={product?.image} alt={product?.title} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-violet-600">{product?.title}</h2>
                    <p>{product?.tagline}</p>
                    <h4 className="text-xl font-semibold text-violet-600">{product?.price} tk</h4>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success text-white"><Link to={`/products/${product?.id}`}>See Details</Link></button>
                    </div>
                </div>
        </div>
    </div>
  )
}
