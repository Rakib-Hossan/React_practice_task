
export default function SingleProducts({product}) {
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={product?.image} alt={product?.title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product?.title}</h2>
                    <p>{product?.tagline}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success text-white">See Details</button>
                    </div>
                </div>
        </div>
    </div>
  )
}
