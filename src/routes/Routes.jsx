import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashLayout from "../layout/DashLayout";
import PrivateRoutes from "./PrivateRoutes";
import About from "../pages/About";
import Allproducts from "../components/products/Allproducts";

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
                element: <Allproducts />
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

    }

])

export default router;