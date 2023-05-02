import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ChefCategory from "../layout/ChefCategory";
import RecipeCard from "../pages/chefCard/RecipeCard";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
      children:[
        {
          path: ':id',
          element: <RecipeCard/>
        },
      ]
    }
  ]);

  export default router;