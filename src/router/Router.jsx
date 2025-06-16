import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { Suspense,lazy } from "react";
const Favorites = lazy(()=>import("../Favorites/Favourites"));
const CardInfo = lazy(()=>import("../Card/CardInfo"))
export const Router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/cardinfo/:id",
        element:(
            <Suspense fallback={<div>Loading...</div>}>
                <CardInfo />
            </Suspense>
        )
    },
    {
        path: "/favorites",  
        element: (
            <Suspense fallback={<div>Loading ....</div>}>
                <Favorites/>
            </Suspense>
        )
      }
])