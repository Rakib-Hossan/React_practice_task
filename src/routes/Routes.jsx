import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashLayout from "../layout/DashLayout";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                index:true,
                element: <Home />,
            },
            {
                path:'login',
                element: <Login />
            },
            {
                path:'register',
                element: <Register />
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