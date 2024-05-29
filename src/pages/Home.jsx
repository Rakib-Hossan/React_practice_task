import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Allproducts from "../components/products/Allproducts";
import Category from "../components/categories/Category";

export default function Home() {

  // const data = useLoaderData();

  return (
    <div>
        <Banner />
        {/* <Allproducts data={data} /> */}
        <div>
          <Category />
          <h2 className="text-2xl font-bold text-center py-5">Our <span className="text-violet-600">Top Selling</span> Products</h2>
        <Allproducts/>
        </div>
    </div>
  )
}
