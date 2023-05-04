import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefCategory from "../layout/ChefCategory";
import RecipeCard from "../pages/chefCard/RecipeCard";
import Details from "../pages/details/Details";
import Blog from "../pages/Blogs/Blog";
import Blogs from "../layout/Blogs";
import About from "../pages/About/about";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UserLogin from "../layout/UserLogin";
import Login from "../pages/UserAuth/Login/Login";
import Register from "../pages/UserAuth/Register/Register";
import PrivateRoute from "./PrivateRoute";



  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
      
      ]
    },
   
    {
      path: '/recipes',
      element: <ChefCategory/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          path: ':id',
          element: <PrivateRoute><Details/></PrivateRoute>,
          loader: ({params}) => fetch (`https://assignment-10-server-site-sakibhasan997.vercel.app/recipes/${params.id}`)
        },
        
      ]
    },
    
    {
      path: '/',
      element: <Blogs/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/blogs',
          element: <Blog/>
        },
        {
          path: '/about',
          element: <About/>
        }
      ]
    },
    {
      path: '/',
      element: <UserLogin/>,
      children: [
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
      ]
    },
  ]);

  export default router;