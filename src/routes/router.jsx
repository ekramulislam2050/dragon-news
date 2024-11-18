import { createBrowserRouter, Navigate  } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
 const router =createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"category/01"}></Navigate>
            },
            {
                path:"category/:id",
                element:<CategoryNews></CategoryNews>,
                loader:({params})=>fetch( `https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
      
    },
    {
        path:'news',
        element: <h1>news layout</h1>
    },
    {
        path:"auth",
        element: <h3>auth layout</h3>
    },
    {
        path:'*',
        element: <h4>error</h4>
    }

 ])
 
 export default router; 

 