import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import SignIn from "../pages/signin/SignIn";
import Home from "../pages/Home/Home";
import Details from "../pages/Home/FreshProducts/Details";
import ReadMore from "../pages/Home/Blogs/ReadMore";
import Blogs from "../pages/Home/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/Home/AboutUs";

// import AddToCart from "../pages/Home/Cart/AddToCart";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path:'/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/categories/:id',
                element:  <PrivateRoute><Details></Details></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:5000/categories/${params.id}`);
                    const data = await res.json();
                    return data.data; 
                }
            },
            {
               path:'/blog',
               element: <Blogs></Blogs>
            },
            {
                path: '/blogs/:id',
                element: <PrivateRoute><ReadMore></ReadMore></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:5000/blogs/${params.id}`);
                    const data = await res.json();
                    return data.data; 
                }
            }


        ]
    },
]);
export default router;