import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CardInfo from './../Card/CardInfo';

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/cardinfo/:id",
        element:<CardInfo/>
    }
])