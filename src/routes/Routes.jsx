import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashLayout from "../layout/DashLayout";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About";
import DashboardHome from "../dashboard/DashboardHome";
import ManageProducts from "../dashboard/ManageProducts";
import AddProduct from "../dashboard/AddProduct";
import Products from "../pages/Products";
import ProductInfo from "../components/products/ProductInfo";
import EditProduct from "../dashboard/EditProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                index:true,
                element: <Home />,
                loader: () => fetch('http://localhost:3000/products')
            },
            {
                path:'/products/:id',
                element: <ProductInfo />,
                loader: ({params}) => fetch(`http://localhost:3000/products/${params?.id}`)
            },
            {
                path:'login',
                element: <Login />
            },
            {
                path:'register',
                element: <Register />
            },
            {
                path:'about',
                element: <About />
            },
            {
                path:'products',
                element: <Products />
            },
        ]
      },
      {
        path:'/dashboard',
        element: (
            <PrivateRoutes>
                <DashLayout/>
            </PrivateRoutes>
        ),
        children :[
            {
                index: true, 
                element : <DashboardHome/>
            },
            {
                path:'manage-products',
                element: <ManageProducts />
            },
            {
                path:'add-products',
                element: <AddProduct />
            },
            {
                path:'edit-products/:id',
                element: <EditProduct />
            },
        ]
    }

])

export default router;