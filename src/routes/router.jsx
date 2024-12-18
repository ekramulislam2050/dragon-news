import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../HomeLayout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRouting from "../Pages/PrivetRouting";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"category/01"}></Navigate>
            },
            {
                path: "category/:id",
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]

    },
    {
        path: "news/:id",
        element: <PrivetRouting>
            <NewsDetails></NewsDetails>
        </PrivetRouting>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <h4>error</h4>
    }

])

export default router;

